import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export interface OptionType {
  label: string;
  value: string | number;
}

interface CustomDropdownProps {
  options: OptionType[];
  value?: { label: string; value: string | number } | null;
  defaultValue?: OptionType;
  className?: string;
  placeholder?: string;
  modal?: boolean;
  onChange?: (val: { label: string; value: string | number }) => void;
}

const CustomSelect: React.FC<CustomDropdownProps> = ({
  options,
  value,
  defaultValue,
  className,
  placeholder,
  modal,
  onChange,
}) => {
  const getPopupContainer = modal
    ? () =>
        (document.getElementsByClassName('modal')[0] as HTMLElement) ||
        document.body
    : undefined;

  return (
    <Select
      value={value !== undefined ? value : undefined}
      defaultValue={value !== undefined ? undefined : defaultValue}
      className={className}
      placeholder={placeholder ?? 'Select'}
      style={{ width: '100%' }}
      getPopupContainer={getPopupContainer}
      labelInValue
      onChange={onChange}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default CustomSelect;
