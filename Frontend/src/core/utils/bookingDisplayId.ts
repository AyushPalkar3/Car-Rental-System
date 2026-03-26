/**
 * Human-readable booking reference: always starts with "ED" (Ekalo Drive).
 * Derived from the Mongo ObjectId — stable for the life of the booking.
 */
export function formatBookingDisplayId(bookingId: string | undefined | null): string {
  if (!bookingId) return "ED--------";
  const s = String(bookingId);
  const hex = s.replace(/[^a-f0-9]/gi, "");
  const tail = (hex.length >= 8 ? hex.slice(-8) : s.slice(-8)).toUpperCase();
  return `ED${tail}`;
}
