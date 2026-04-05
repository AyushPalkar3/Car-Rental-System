import type { AdminReservation } from "../../../service/api/reservations";
import { formatBookingDisplayId } from "../../../../../core/utils/bookingDisplayId";

const monthShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function displayStatus(booking: AdminReservation): string {
  const now = Date.now();
  const start = new Date(booking.pickupDate).getTime();
  const end = new Date(booking.returnDate).getTime();
  if (booking.status === "COMPLETED") return "Completed";
  if (booking.status === "CANCELLED") return "Cancelled";
  if (booking.status === "PENDING") return "Pending";
  if (booking.status === "CONFIRMED" && start <= now && now <= end) {
    return "In Rental";
  }
  if (booking.status === "CONFIRMED") return "Confirmed";
  return "Confirmed";
}

export function formatListMonthYear(iso: string): string {
  const d = new Date(iso);
  return `${monthShort[d.getMonth()]}, ${d.getFullYear()}`;
}

export function formatListTime(iso: string): string {
  return new Date(iso).toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function mapReservationToTableRow(
  b: AdminReservation,
  imageBaseUrl: string
) {
  const car = b.car;
  const user = b.user;
  const uploaded =
    car?.thumbnail || (car?.images && car.images[0]) || null;
  const thumbUrl = uploaded
    ? `${imageBaseUrl}${uploaded}`
    : null;
  const customerName =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ").trim() ||
    user?.phoneNum ||
    "—";

  return {
    key: b.id,
    bookingId: b.id,
    customerId: b.user?.id ?? b.userId,
    CAR_NO: formatBookingDisplayId(b.id),
    CAR: car?.name ?? "—",
    CAR_IMG: thumbUrl,
    CUSTOMER: customerName,
    BADGE: "Client",
    PICK_UP_DATE: String(new Date(b.pickupDate).getDate()),
    PICK_UP_MONTH: formatListMonthYear(b.pickupDate),
    PICK_UP_TIME: formatListTime(b.pickupDate),
    PICK_UP_DETAILS: b.deliveryAddress || "—",
    DROP_OFF_DATE: String(new Date(b.returnDate).getDate()),
    DROP_OFF_MONTH: formatListMonthYear(b.returnDate),
    DROP_OFF_TIME: formatListTime(b.returnDate),
    DROP_OFF_DETAILS: b.returnAddress || "—",
    STATUS: displayStatus(b),
    bookingStatus: b.status,
  };
}
