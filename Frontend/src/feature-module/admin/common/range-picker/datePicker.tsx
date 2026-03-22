import React, { useState, useRef } from 'react';
import { DatePicker, Dropdown, Menu, Input } from 'antd';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);
dayjs.extend(localeData);

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

interface PredefinedDatePickerProps {
  /** Called when the range changes. `null` means “show all” (no date filter). */
  onDateChange?: (dates: [dayjs.Dayjs, dayjs.Dayjs] | null) => void;
  /** Start with no range selected (“Show all” in the field). Use with `onDateChange` for filtered lists. */
  defaultShowAll?: boolean;
}

const PredefinedDatePicker: React.FC<PredefinedDatePickerProps> = ({
  onDateChange,
  defaultShowAll = false,
}) => {
  const [dates, setDates] = useState<[dayjs.Dayjs, dayjs.Dayjs] | null>(() =>
    defaultShowAll ? null : [dayjs().subtract(6, 'days'), dayjs()]
  );
  const [customVisible, setCustomVisible] = useState(false);
  const rangeRef = useRef<any>(null);

  const predefinedRanges: Record<string, [dayjs.Dayjs, dayjs.Dayjs]> = {
    Today: [dayjs(), dayjs()],
    Yesterday: [dayjs().subtract(1, 'day'), dayjs().subtract(1, 'day')],
    'Last 7 Days': [dayjs().subtract(6, 'day'), dayjs()],
    'Last 30 Days': [dayjs().subtract(29, 'day'), dayjs()],
    'This Month': [dayjs().startOf('month'), dayjs().endOf('month')],
    'Last Month': [
      dayjs().subtract(1, 'month').startOf('month'),
      dayjs().subtract(1, 'month').endOf('month'),
    ],
  };

  const SHOW_ALL_KEY = '__show_all__';

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === SHOW_ALL_KEY) {
      setDates(null);
      onDateChange?.(null);
      setCustomVisible(false);
      return;
    }
    if (key === 'Custom Range') {
      setCustomVisible(true);
      // Trigger calendar popup manually
      setTimeout(() => rangeRef.current?.focus(), 0);
    } else {
      const selectedDates = predefinedRanges[key];
      setDates(selectedDates);
      onDateChange?.(selectedDates);
      setCustomVisible(false);
    }
  };

  const handleCustomChange = (value: any) => {
    if (value) {
      setDates(value);
      onDateChange?.(value);
      setCustomVisible(false);
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        { key: SHOW_ALL_KEY, label: 'Show all' },
        { type: 'divider' },
        ...Object.keys(predefinedRanges).map(label => ({
          key: label,
          label,
        })),
        { type: 'divider' },
        { key: 'Custom Range', label: 'Custom Range' },
      ]}
    />
  );

  const displayValue = dates
    ? `${dates[0].format(dateFormat)} - ${dates[1].format(dateFormat)}`
    : 'Show all';

  return (
    <div>
      <Dropdown overlay={menu} trigger={['click']}>
        <Input
          readOnly
          value={displayValue}
          className=""
        />
      </Dropdown>

      {/* Hidden RangePicker - purely for calendar popup */}
      {customVisible && (
        <RangePicker
          open
          ref={rangeRef}
          onChange={handleCustomChange}
          format={dateFormat}
          value={dates ?? undefined}
          allowClear={false}
          style={{ position: 'absolute', top: 0, left: 0, opacity: 0, pointerEvents: 'none' }}
          onOpenChange={(open) => {
            if (!open) setCustomVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default PredefinedDatePicker;
