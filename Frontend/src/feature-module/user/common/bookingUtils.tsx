import { useEffect, useState } from "react";
import axios from "axios";

// Shared utility for formatting booking data from backend for DataTable
export const getAccessToken = (): string => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; accessToken=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || "";
  return "";
};

export const formatBooking = (booking: any) => ({
  originalData: booking,
  bookingId: `#${booking.id.slice(-6).toUpperCase()}`,
  originalId: booking.id,
  carName: booking.car?.name || "Unknown Car",
  img: booking.car?.images?.[0]
    ? `http://localhost:4000${booking.car.images[0]}`
    : "assets/img/cars/car-05.jpg",
  deliveryStatus:
    booking.bookingType === "DELIVERY" ? "Delivery" : "Self Pickup",
  rentalType: booking.duration,
  pickupDeliveryLocation1:
    booking.deliveryAddress || booking.pickupLocation || "N/A",
  pickupDeliveryLocation2: new Date(booking.pickupDate).toLocaleString(),
  dropoffLocation1:
    booking.returnAddress ||
    booking.deliveryAddress ||
    booking.pickupLocation ||
    "N/A",
  dropoffLocation2: new Date(booking.returnDate).toLocaleString(),
  bookedOn: new Date(booking.createdAt).toLocaleString(),
  bookedOnRaw: new Date(booking.createdAt),
  total: `₹${booking.totalPrice}`,
  status:
    booking.status === "PENDING"
      ? "Upcoming"
      : booking.status === "CONFIRMED"
      ? "Inprogress"
      : booking.status === "CANCELLED"
      ? "Cancelled"
      : "Completed",
});

/** Backend + UI treat CONFIRMED as in-progress; only those may be extended. */
export const canExtendInProgressBooking = (booking: any) =>
  booking?.status === "CONFIRMED";

export const applyDateFilter = (bookings: any[], dateFilter: string) => {
  const now = new Date();
  return bookings.filter((b) => {
    const d: Date = b.bookedOnRaw;
    if (dateFilter === "week") {
      const weekAgo = new Date(now);
      weekAgo.setDate(now.getDate() - 7);
      return d >= weekAgo;
    }
    if (dateFilter === "month") {
      const monthAgo = new Date(now);
      monthAgo.setMonth(now.getMonth() - 1);
      return d >= monthAgo;
    }
    if (dateFilter === "30days") {
      const thirtyAgo = new Date(now);
      thirtyAgo.setDate(now.getDate() - 30);
      return d >= thirtyAgo;
    }
    return true; // "all"
  });
};

export const applySort = (bookings: any[], sort: string) => {
  const arr = [...bookings];
  if (sort === "asc") return arr.sort((a, b) => a.bookedOnRaw - b.bookedOnRaw);
  if (sort === "desc") return arr.sort((a, b) => b.bookedOnRaw - a.bookedOnRaw);
  if (sort === "alpha") return arr.sort((a, b) => a.carName.localeCompare(b.carName));
  return arr; // relevance = default (newest first)
};

/** Bootstrap placeholder “skeleton” rows matching user booking DataTables. */
export const BookingTableSkeleton = ({
  rows = 8,
  pickupHeader = "Pickup / Delivery",
}: {
  rows?: number;
  pickupHeader?: string;
}) => {
  const keys = Array.from({ length: rows }, (_, i) => i);
  const bar = (w: string, h = 14) => (
    <span
      className="placeholder d-block rounded"
      style={{ width: w, height: h }}
    />
  );
  return (
    <div className="table-responsive dashboard-table">
      <table className="table datatable mb-0">
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Car Name</th>
            <th>Rental Type</th>
            <th>{pickupHeader}</th>
            <th>Dropoff Location</th>
            <th>Booked On</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {keys.map((k) => (
            <tr key={k} className="placeholder-glow">
              <td className="align-middle">{bar("5.5rem")}</td>
              <td className="align-middle">
                <div className="d-flex align-items-center gap-2">
                  <span
                    className="placeholder rounded-circle flex-shrink-0"
                    style={{ width: 42, height: 42 }}
                  />
                  <div className="flex-grow-1" style={{ minWidth: 120 }}>
                    {bar("100%", 14)}
                  </div>
                </div>
              </td>
              <td className="align-middle">{bar("3rem")}</td>
              <td className="align-middle">
                {bar("11rem", 12)}
                <span className="d-block mt-2">{bar("8rem", 12)}</span>
              </td>
              <td className="align-middle">
                {bar("11rem", 12)}
                <span className="d-block mt-2">{bar("8rem", 12)}</span>
              </td>
              <td className="align-middle">{bar("9rem", 12)}</td>
              <td className="align-middle">{bar("3.5rem")}</td>
              <td className="align-middle">
                <span
                  className="placeholder rounded-pill d-inline-block"
                  style={{ width: 88, height: 22 }}
                />
              </td>
              <td className="align-middle">
                <span
                  className="placeholder rounded d-inline-block"
                  style={{ width: 22, height: 22 }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const toDatetimeLocalValue = (iso: string | Date) => {
  const d = typeof iso === "string" ? new Date(iso) : iso;
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
};

export const ExtendBookingModal = ({
  booking,
  userInfo,
  modalId = "extend_booking_modal",
  onSuccess,
  onClose,
}: {
  booking: any | null;
  userInfo: any;
  modalId?: string;
  onSuccess?: () => void;
  onClose?: () => void;
}) => {
  const [endInput, setEndInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!booking) return;
    setEndInput(toDatetimeLocalValue(booking.returnDate));
    setError("");
  }, [booking]);

  useEffect(() => {
    const el = document.getElementById(modalId);
    if (!el) return;
    const onHidden = () => {
      onClose?.();
    };
    el.addEventListener("hidden.bs.modal", onHidden);
    return () => el.removeEventListener("hidden.bs.modal", onHidden);
  }, [modalId, onClose]);

  if (!booking) return null;

  const userId = userInfo?.user?.id || userInfo?.id;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!userId) {
      setError("You must be logged in.");
      return;
    }
    const newEnd = new Date(endInput);
    if (Number.isNaN(newEnd.getTime())) {
      setError("Please choose a valid end date and time.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await axios.patch(
        `http://localhost:4000/api/bookings/${booking.id}/extend`,
        { userId, returnDate: newEnd.toISOString() },
        { headers: { Authorization: `Bearer ${getAccessToken()}` } }
      );
      const modalEl = document.getElementById(modalId);
      const B = (window as unknown as { bootstrap?: { Modal: { getInstance: (n: HTMLElement) => { hide: () => void } | null } } }).bootstrap;
      if (modalEl && B) B.Modal.getInstance(modalEl)?.hide();
      onSuccess?.();
      const cancelled = res.data?.cancelledBookingIds?.length ?? 0;
      if (cancelled > 0 && res.data?.message) {
        window.alert(res.data.message);
      }
    } catch (err: unknown) {
      const ax = err as { response?: { data?: { message?: string } }; message?: string };
      const msg =
        ax.response?.data?.message || ax.message || "Extension failed.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="modal new-modal multi-step fade"
      id={modalId}
      tabIndex={-1}
      data-keyboard="false"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <h5 className="modal-title">Extend booking</h5>
            <button type="button" className="close-btn" data-bs-dismiss="modal">
              <span>×</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Pickup (start)</label>
                <input
                  type="text"
                  className="form-control"
                  readOnly
                  value={new Date(booking.pickupDate).toLocaleString()}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Drop-off (end)</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  value={endInput}
                  onChange={(e) => setEndInput(e.target.value)}
                  required
                />
              </div>
              {error ? (
                <p className="text-danger small mb-0" role="alert">
                  {error}
                </p>
              ) : null}
            </div>
            <div className="modal-footer border-0 pt-0">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                {submitting ? "Saving…" : "Save extension"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export const BookingModal = ({
  booking,
  userInfo,
  modalId = "booking_detail_modal",
}: {
  booking: any;
  userInfo: any;
  modalId?: string;
}) => {
  if (!booking) return null;
  const statusLabel =
    booking.status === "PENDING"
      ? "Upcoming"
      : booking.status === "CONFIRMED"
      ? "Inprogress"
      : booking.status === "CANCELLED"
      ? "Cancelled"
      : "Completed";
  const badgeClass =
    booking.status === "PENDING"
      ? "badge-light-secondary"
      : booking.status === "CONFIRMED"
      ? "badge-light-warning"
      : booking.status === "CANCELLED"
      ? "badge-light-danger"
      : "badge-light-success";

  return (
    <div
      className="modal new-modal multi-step fade"
      id={modalId}
      data-keyboard="false"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header border-0 pb-0">
            <button type="button" className="close-btn" data-bs-dismiss="modal">
              <span>×</span>
            </button>
            <div className="badge-item w-100 text-end">
              <span className={`badge ${badgeClass}`}>{statusLabel}</span>
            </div>
          </div>
          <div className="modal-body">
            <div className="booking-header">
              <div className="booking-img-wrap">
                <div className="book-img">
                  <img
                    src={
                      booking.car?.images?.[0]
                        ? `http://localhost:4000${booking.car.images[0]}`
                        : "assets/img/cars/car-05.jpg"
                    }
                    alt="car"
                  />
                </div>
                <div className="book-info">
                  <h6>{booking.car?.name || "Unknown Car"}</h6>
                  <p>
                    <i className="feather icon-map-pin" /> Location:{" "}
                    {booking.pickupLocation || booking.deliveryAddress || "N/A"}
                  </p>
                </div>
              </div>
              <div className="book-amount">
                <p>Total Amount</p>
                <h6>₹{booking.totalPrice}</h6>
              </div>
            </div>
            <div className="booking-group">
              <div className="booking-wrapper">
                <div className="booking-title">
                  <h6>Booking Details</h6>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="booking-view">
                      <h6>Booking Type</h6>
                      <p>{booking.bookingType || "N/A"}</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="booking-view">
                      <h6>Rental Type</h6>
                      <p>{booking.duration || "N/A"}</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="booking-view">
                      <h6>Distance</h6>
                      <p>
                        {booking.distanceKM
                          ? `${booking.distanceKM} KM`
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="booking-view">
                      <h6>Pickup / Delivery Location</h6>
                      <p>
                        {booking.deliveryAddress ||
                          booking.pickupLocation ||
                          "N/A"}
                      </p>
                      <p>{new Date(booking.pickupDate).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="booking-view">
                      <h6>Return Location</h6>
                      <p>
                        {booking.returnAddress ||
                          booking.deliveryAddress ||
                          booking.pickupLocation ||
                          "N/A"}
                      </p>
                      <p>{new Date(booking.returnDate).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="booking-view">
                      <h6>Status</h6>
                      <span className={`badge ${badgeClass}`}>
                        {statusLabel}
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="booking-view">
                      <h6>Booked On</h6>
                      <p>
                        {new Date(booking.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="booking-wrapper">
                <div className="booking-title">
                  <h6>Personal Details</h6>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="booking-view">
                      <h6>Details</h6>
                      <p>
                        {userInfo?.user?.name ||
                          userInfo?.user?.firstName ||
                          userInfo?.name ||
                          "N/A"}
                      </p>
                      <p>
                        {userInfo?.user?.email || userInfo?.email || "N/A"}
                      </p>
                    </div>
                  </div>
                  {booking.orderId && (
                    <div className="col-lg-4 col-md-6">
                      <div className="booking-view">
                        <h6>Payment Info</h6>
                        <p>Order: {booking.orderId}</p>
                        <p>Payment: {booking.paymentId || "N/A"}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-btn modal-btn-sm text-end">
              <button data-bs-dismiss="modal" className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
