
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import { getReservationById, type AdminReservation } from "../../../service/api/reservations";
import { displayStatus } from "./reservationUtils";

const formatDetail = (iso: string) =>
  new Date(iso).toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

const statusBadgeClass = (b: AdminReservation) => {
  const label = displayStatus(b);
  if (label === "Completed") return "bg-success-transparent";
  if (label === "Rejected") return "bg-danger-transparent";
  if (label === "In Rental") return "bg-violet-transparent";
  return "bg-orange-transparent";
};

const ReservationDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const [booking, setBooking] = useState<AdminReservation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(Boolean(id));

  const imageBaseUrl = useMemo(() => {
    const base = (import.meta as unknown as { env?: { VITE_API_BASE_URL_IMAGE?: string } })
      .env?.VITE_API_BASE_URL_IMAGE;
    return typeof base === "string" ? base.replace(/\/$/, "") : "";
  }, []);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const b = await getReservationById(id);
        if (!cancelled) setBooking(b);
      } catch {
        if (!cancelled) {
          setError("Could not load reservation.");
          setBooking(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  const carImg = useMemo(() => {
    if (!booking?.car) return null;
    const path = booking.car.thumbnail || booking.car.images?.[0];
    return path ? `${imageBaseUrl}${path}` : null;
  }, [booking, imageBaseUrl]);

  const statusLabel = booking ? displayStatus(booking) : "Requested";

  return (
    <>
      <div className="content me-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="mb-3">
              <Link
                to={all_routes.adminReservationsList}
                className="d-inline-flex align-items-center fw-medium"
              >
                <i className="ti ti-arrow-narrow-left me-2" />
                Reservation
              </Link>
            </div>
            {!id && (
              <div className="alert alert-info">
                Open a reservation from the list to view details.
              </div>
            )}
            {error && <div className="alert alert-danger">{error}</div>}
            {loading && <div className="text-muted mb-3">Loading…</div>}
            {booking && (
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5>Reservation Details</h5>
                <span className={`badge ${statusBadgeClass(booking)}`}>
                  {statusLabel}
                </span>
              </div>
              <div className="card-body">
                <ul
                  className="nav nav-tabs nav-tabs-solid custom-nav-tabs mb-3"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <Link
                      className="nav-link active"
                      to="#solid-tab1"
                      data-bs-toggle="tab"
                      aria-selected="true"
                      role="tab"
                    >
                      Reservation Info
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      className="nav-link"
                      to="#solid-tab2"
                      data-bs-toggle="tab"
                      aria-selected="false"
                      role="tab"
                    >
                      History
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    className="tab-pane active show"
                    id="solid-tab1"
                    role="tabpanel"
                  >
                    <div className="border rounded p-3 bg-light mb-3">
                      <div className="row">
                        <div className="col-8">
                          <div className="d-flex align-items-center">
                            <span className="avatar flex-shrink-0 me-2">
                              {carImg ? (
                                <img
                                  src={carImg}
                                  alt=""
                                  className="rounded"
                                  style={{ width: 48, height: 48, objectFit: "cover" }}
                                />
                              ) : (
                                <ImageWithBasePath
                                  src="assets/admin/img/car/car-07.jpg"
                                  alt=""
                                />
                              )}
                            </span>
                            <div>
                              <p className="mb-1">{booking.car?.category || booking.car?.brand || "—"}</p>
                              <h6 className="fs-14">{booking.car?.name ?? "—"}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="text-end">
                            <p className="mb-1">Price</p>
                            <h6 className="fs-14">
                              ₹{booking.pricing?.price ?? booking.totalPrice}
                              <span className="text-gray-5 fw-normal">
                                /{String(booking.duration || "").toLowerCase()}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">Start Date</h6>
                        <p>{formatDetail(booking.pickupDate)}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">End Date</h6>
                        <p>{formatDetail(booking.returnDate)}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">Rental Period</h6>
                        <p>{booking.duration}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">Booking type</h6>
                        <p>{booking.bookingType === "DELIVERY" ? "Delivery" : "Pickup"}</p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="d-flex align-items-center">
                            <div className="bg-light p-3 rounded flex-fill mb-3">
                              <h6 className="mb-1 fs-14 fw-medium">
                                Pickup Location
                              </h6>
                              <p>{booking.deliveryAddress || "—"}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="bg-light p-3 rounded mb-3">
                            <h6 className="mb-1 fs-14 fw-medium">
                              Return Location
                            </h6>
                            <p>{booking.returnAddress || "—"}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Link
                          to={`${all_routes.adminEditReservations}/${booking.id}`}
                          className="text-decoration-underline text-violet"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                    <div className="border-bottom mb-3">
                      <div className="row">
                        <div className="col-md-6">
                          <div>
                            <div className="mb-3">
                              <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                                Customer
                              </h6>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                              <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                <ImageWithBasePath
                                  src="assets/admin/img/customer/customer-02.jpg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-medium mb-1">
                                  {[booking.user?.firstName, booking.user?.lastName]
                                    .filter(Boolean)
                                    .join(" ")
                                    .trim() || "—"}
                                </h6>
                                <p>{booking.user?.phoneNum ?? "—"}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-3 pb-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">Pricing of Car</h6>
                        <p>₹{booking.pricing?.price ?? "—"}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <h6>Total Price</h6>
                      <h6>₹{booking.totalPrice}</h6>
                    </div>
                  </div>
                  <div className="tab-pane" id="solid-tab2" role="tabpanel">
                    <div>
                      <h6 className="mb-3">History</h6>
                      <div className="d-flex align-items-center mb-3">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                          <h5 className="mb-2">
                            {new Date(booking.createdAt || booking.pickupDate).getDate()}
                          </h5>
                          <span className="fw-medium fs-12 bg-primary-transparent p-1 d-inline-block rounded-1 text-gray-9">
                            {new Date(booking.createdAt || booking.pickupDate).toLocaleString(undefined, {
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </div>
                        <div>
                          <h6 className="fs-14 mb-1">Reservation record</h6>
                          <span className="fs-13">Created / updated in system</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
            {booking && (
            <div className="d-flex align-items-center justify-content-center flex-wrap row-gap-3">
              <Link
                to={all_routes.admininvoiceDetails}
                className="btn btn-primary me-3"
              >
                <i className="ti ti-files me-1" />
                View Invoice
              </Link>
              <Link to="#" className="btn btn-dark me-3">
                <i className="ti ti-calendar me-1" />
                Reschedule
              </Link>
              <Link to="#" className="btn btn-danger">
                <i className="ti ti-x me-1" />
                Cancel Booking
              </Link>
            </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal fade" id="reservation_completed">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <form>
                <span className="avatar avatar-lg bg-transparent-success rounded-circle text-success mb-3">
                  <i className="ti ti-check fs-26" />
                </span>
                <h4 className="mb-1">Created Successful</h4>
                <p className="mb-3">
                  Reservation created for the{" "}
                  <span className="text-gray-9">“Ford Fiesta” </span> on{" "}
                  <span className="text-gray-9">“24 Feb 2025”</span>
                </p>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-primary w-100">
                    View Details
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationDetails;
