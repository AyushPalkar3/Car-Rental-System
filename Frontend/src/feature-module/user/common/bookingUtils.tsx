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
