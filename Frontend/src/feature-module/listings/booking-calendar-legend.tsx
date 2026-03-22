import type { DayCalendarStatus } from "../../utils/bookingAvailability";
import "./booking-calendar.scss";

export const BOOKING_CALENDAR_CELL_STYLES: Record<
  DayCalendarStatus,
  { bg: string; color: string }
> = {
  available: { bg: "#e8f5e9", color: "#1b5e20" },
  unavailable_booked: { bg: "#c62828", color: "#fff" },
  unavailable_blocked: { bg: "#f97316", color: "#fff" },
  unavailable_buffer: { bg: "#ffab91", color: "#4e342e" },
};

const LEGEND_ITEMS: { status: DayCalendarStatus; label: string }[] = [
  { status: "available", label: "Available" },
  { status: "unavailable_buffer", label: "Buffer (turnaround)" },
  { status: "unavailable_blocked", label: "Blocked / downtime" },
  { status: "unavailable_booked", label: "Booked" },
];

export function BookingCalendarLegend({
  className = "",
  embedded = false,
  showKeyHeading = false,
}: {
  className?: string;
  embedded?: boolean;
  /** “Status key” row above items (e.g. on listing grid). */
  showKeyHeading?: boolean;
}) {
  const rootClass = [
    "avail-legend",
    embedded ? "avail-legend--embedded" : "avail-legend--panel",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={rootClass}
      role="list"
      aria-label="Calendar color meanings"
    >
      {showKeyHeading && (
        <div className="avail-legend__head">Status key</div>
      )}
      {LEGEND_ITEMS.map(({ status, label }) => {
        const st = BOOKING_CALENDAR_CELL_STYLES[status];
        return (
          <div key={status} className="avail-legend__item" role="listitem">
            <span
              className="avail-legend__stripe"
              style={{
                background: st.bg,
                boxShadow: "inset 0 0 0 1px rgba(15, 23, 42, 0.1)",
              }}
              aria-hidden
            />
            <span className="avail-legend__label">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
