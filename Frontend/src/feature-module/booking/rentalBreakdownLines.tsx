export type RentalPriceBreakdown = {
  hours: number;
  days: number;
  weeks: number;
  months: number;
  hourRate: number;
  dayRate: number;
  weekRate: number;
  monthRate: number;
};

type Props = {
  breakdown: RentalPriceBreakdown | null | undefined;
  className?: string;
};

function formatInr(n: number) {
  return Math.round(n).toLocaleString("en-IN");
}

/**
 * Human-readable lines for how rental was priced (months / weeks / days / hours).
 */
export function RentalBreakdownLines({ breakdown, className }: Props) {
  if (!breakdown) {
    return (
      <div
        className={`rental-breakdown-lines small text-muted ${className ?? ""}`.trim()}
      >
        Set pickup and return dates to see how your rental is priced.
      </div>
    );
  }

  const hourRate =
    breakdown.hourRate > 0
      ? breakdown.hourRate
      : Math.ceil((breakdown.dayRate || 0) / 24);

  const rows: { key: string; text: string }[] = [];

  if (breakdown.months > 0) {
    rows.push({
      key: "months",
      text: `${breakdown.months} month${breakdown.months !== 1 ? "s" : ""} × ₹${formatInr(breakdown.monthRate)}`,
    });
  }
  if (breakdown.weeks > 0) {
    rows.push({
      key: "weeks",
      text: `${breakdown.weeks} week${breakdown.weeks !== 1 ? "s" : ""} × ₹${formatInr(breakdown.weekRate)}`,
    });
  }
  if (breakdown.days > 0) {
    rows.push({
      key: "days",
      text: `${breakdown.days} day${breakdown.days !== 1 ? "s" : ""} × ₹${formatInr(breakdown.dayRate)}`,
    });
  }
  if (breakdown.hours > 0) {
    const wholeHours = Math.floor(breakdown.hours);
    rows.push({
      key: "hours",
      text: `${wholeHours} hour${wholeHours !== 1 ? "s" : ""} × ₹${formatInr(hourRate)}`,
    });
  }

  if (rows.length === 0) {
    return (
      <div
        className={`rental-breakdown-lines small text-muted ${className ?? ""}`.trim()}
      >
        Adjust your dates to see pricing breakdown.
      </div>
    );
  }

  return (
    <ul
      className={`rental-breakdown-lines list-unstyled small mb-0 ${className ?? ""}`.trim()}
    >
      {rows.map((r) => (
        <li
          key={r.key}
          className="d-flex align-items-start gap-2 py-1 border-bottom border-light"
        >
          <span
            className="mt-1 rounded-circle flex-shrink-0"
            style={{
              width: 6,
              height: 6,
              background: "var(--bs-primary, #0d6efd)",
              opacity: 0.65,
            }}
            aria-hidden
          />
          <span className="text-dark">{r.text}</span>
        </li>
      ))}
    </ul>
  );
}
