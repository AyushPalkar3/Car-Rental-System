/** Must match Backend/app/utils/bookingAvailability.js */
export const BOOKING_BUFFER_HOURS = 1;

export type AvailabilityBlock = {
  kind: string;
  /** booked = customer reservation; blocked = approved downtime / unavailability */
  status?: "booked" | "blocked";
  pickupAt: string;
  returnAt: string;
  blockedFrom: string;
  blockedTo: string;
};

function rangesOverlap(
  aStart: number,
  aEnd: number,
  bStart: number,
  bEnd: number
) {
  return aStart < bEnd && bStart < aEnd;
}

export function dayBounds(d: Date) {
  const start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const end = start.getTime() + 24 * 60 * 60 * 1000;
  return { startMs: start.getTime(), endMs: end };
}

export function isBlockedKind(b: AvailabilityBlock) {
  return (
    b.status === "blocked" ||
    b.kind === "BLOCKED" ||
    b.kind === "MAINTENANCE"
  );
}

export function blockIntersectsMonth(
  b: AvailabilityBlock,
  year: number,
  monthIndex: number
) {
  const monthStart = new Date(year, monthIndex, 1).getTime();
  const monthEnd = new Date(year, monthIndex + 1, 0, 23, 59, 59, 999).getTime();
  const bf = new Date(b.blockedFrom).getTime();
  const bt = new Date(b.blockedTo).getTime();
  return bf <= monthEnd && bt >= monthStart;
}

export type DayCalendarStatus =
  | "available"
  | "unavailable_booked"
  | "unavailable_blocked"
  | "unavailable_buffer";

/**
 * Per day: available vs not available.
 * Blocked (downtime / unavailability) is unavailable and distinct from booked.
 * Buffer = only the turnaround window (still treated as not available for new rentals).
 */
export function classifyDayCalendarStatus(
  day: Date,
  blocks: AvailabilityBlock[]
): DayCalendarStatus {
  const { startMs, endMs } = dayBounds(day);
  let bookedRental = false;
  let blockedRental = false;
  let bookingBufferOnly = false;
  let blockedBufferOnly = false;

  for (const b of blocks) {
    const p = new Date(b.pickupAt).getTime();
    const r = new Date(b.returnAt).getTime();
    const bf = new Date(b.blockedFrom).getTime();
    const bt = new Date(b.blockedTo).getTime();
    const touchRental = rangesOverlap(startMs, endMs, p, r);
    const touchBuf = rangesOverlap(startMs, endMs, bf, bt);

    if (isBlockedKind(b)) {
      if (touchRental) blockedRental = true;
      else if (touchBuf) blockedBufferOnly = true;
    } else {
      if (touchRental) bookedRental = true;
      else if (touchBuf) bookingBufferOnly = true;
    }
  }

  if (bookedRental) return "unavailable_booked";
  if (blockedRental) return "unavailable_blocked";
  if (bookingBufferOnly || blockedBufferOnly) return "unavailable_buffer";
  return "available";
}

/** @deprecated use classifyDayCalendarStatus */
export function classifyDayForBlocks(
  day: Date,
  blocks: AvailabilityBlock[]
): "free" | "buffer" | "booked" {
  const s = classifyDayCalendarStatus(day, blocks);
  if (s === "available") return "free";
  if (s === "unavailable_buffer") return "buffer";
  return "booked";
}
