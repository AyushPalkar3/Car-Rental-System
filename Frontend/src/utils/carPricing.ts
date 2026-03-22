/** Prefer a non-hour day tier from car.pricing; else minimum listed price. */
export function getCarDayRate(pricing: unknown): number | null {
  const arr = Array.isArray(pricing) ? pricing : [];
  if (!arr.length) return null;
  const lower = (s: unknown) => String(s ?? "").toLowerCase();
  const day = arr.find(
    (p: { duration?: string }) =>
      lower(p?.duration).includes("day") && !lower(p?.duration).includes("hour")
  );
  if (day != null) {
    const n = Number((day as { price?: unknown }).price);
    if (!Number.isNaN(n)) return n;
  }
  const nums = arr
    .map((p: { price?: unknown }) => Number((p as { price?: unknown }).price))
    .filter((n) => !Number.isNaN(n));
  return nums.length ? Math.min(...nums) : null;
}
