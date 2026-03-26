
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import {
  getReservationById,
  cancelReservation,
  type AdminReservation,
} from "../../../service/api/reservations";
import { displayStatus } from "./reservationUtils";
import { formatBookingDisplayId } from "../../../../../core/utils/bookingDisplayId";

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
  if (label === "Cancelled") return "bg-danger-transparent";
  if (label === "In Rental") return "bg-violet-transparent";
  return "bg-orange-transparent";
};

const ReservationDetails = () => {
  const { id } = useParams<{ id?: string }>();
  const [booking, setBooking] = useState<AdminReservation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [cancelReason, setCancelReason] = useState("");
  const [cancelling, setCancelling] = useState(false);
  const [cancelError, setCancelError] = useState<string | null>(null);

  const imageBaseUrl = useMemo(() => {
    const fromEnv = (import.meta as unknown as { env?: { VITE_API_BASE_URL_IMAGE?: string } })
      .env?.VITE_API_BASE_URL_IMAGE;
    if (typeof fromEnv === "string" && fromEnv.trim()) return fromEnv.replace(/\/$/, "");
    const api = import.meta.env.VITE_API_BASE_URL || "";
    if (typeof api === "string" && api.trim()) {
      return api.replace(/\/api\/?$/i, "").replace(/\/$/, "");
    }
    return "http://localhost:4000";
  }, []);

  const absFileUrl = useCallback((path: string | null | undefined): string | null => {
    const s = String(path || "").trim();
    if (!s) return null;
    if (/^https?:\/\//i.test(s)) return s;
    const base = imageBaseUrl.replace(/\/$/, "");
    return s.startsWith("/") ? `${base}${s}` : `${base}/${s}`;
  }, [imageBaseUrl]);

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

  const confirmCancel = async () => {
    if (!id) return;
    const trimmed = cancelReason.trim();
    if (!trimmed) {
      setCancelError("Please enter a reason for cancellation.");
      return;
    }
    setCancelError(null);
    setCancelling(true);
    try {
      const updated = await cancelReservation(id, trimmed);
      setBooking(updated);
      setCancelReason("");
      document.getElementById("cancel_reservation_modal_hide")?.click();
    } catch (e: unknown) {
      const msg =
        e && typeof e === "object" && "message" in e
          ? String((e as { message: string }).message)
          : typeof e === "string"
            ? e
            : "Could not cancel reservation.";
      setCancelError(msg);
    } finally {
      setCancelling(false);
    }
  };

  const carImg = useMemo(() => {
    if (!booking?.car) return null;
    const path = booking.car.thumbnail || booking.car.images?.[0];
    return path ? absFileUrl(path) : null;
  }, [booking, absFileUrl]);

  const statusLabel = booking ? displayStatus(booking) : "Requested";

  const invoicePath =
    booking?.payment?.id != null
      ? generatePath(all_routes.admininvoiceDetails, {
          paymentId: booking.payment.id,
        })
      : null;

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
                <h5>
                  Reservation Details
                  <span className="text-muted fs-14 fw-normal ms-2">
                    {formatBookingDisplayId(booking.id)}
                  </span>
                </h5>
                <span className={`badge ${statusBadgeClass(booking)}`}>
                  {statusLabel}
                </span>
              </div>
              {booking.status === "CANCELLED" && (
                <div className="alert alert-light border-0 border-bottom rounded-0 mb-0 py-3">
                  <h6 className="fs-14 fw-medium mb-1">Cancellation</h6>
                  {booking.cancelledAt && (
                    <p className="fs-13 text-muted mb-2">
                      {new Date(booking.cancelledAt).toLocaleString()}
                    </p>
                  )}
                  <p className="mb-0 text-gray-9">
                    {booking.cancellationReason?.trim() || "—"}
                  </p>
                </div>
              )}
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
                      {/* <div>
                        <Link
                          to={`${all_routes.adminEditReservations}/${booking.id}`}
                          className="text-decoration-underline text-violet"
                        >
                          Edit
                        </Link>
                      </div> */}
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
                            <div className="mb-3">
                              <h6 className="fs-14 fw-medium mb-1">
                                {[booking.user?.firstName, booking.user?.lastName]
                                  .filter(Boolean)
                                  .join(" ")
                                  .trim() || "—"}
                              </h6>
                              <p className="mb-0">{booking.user?.phoneNum ?? "—"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <h6 className="fw-medium fs-14 mb-3">Customer documents</h6>
                      <div className="row g-2">
                        {(
                          [
                            {
                              key: "dl",
                              title: "Driving licence",
                              href: absFileUrl(booking.user?.dlPdf),
                            },
                            {
                              key: "aadhaar",
                              title: "Aadhaar card",
                              href: absFileUrl(booking.user?.aadhaarPdf),
                            },
                            {
                              key: "address",
                              title: "Address proof",
                              href: absFileUrl(booking.user?.addressProofPdf),
                            },
                          ] as const
                        ).map((doc) => (
                          <div key={doc.key} className="col-md-4">
                            <div className="border rounded p-3 h-100 bg-white">
                              <div className="d-flex align-items-start gap-2">
                                <ImageWithBasePath
                                  src="assets/admin/img/icons/pdf-icon.svg"
                                  alt=""
                                  className="flex-shrink-0"
                                  width={36}
                                  height={36}
                                />
                                <div className="min-width-0 flex-grow-1">
                                  <h6 className="fs-14 fw-medium mb-2">{doc.title}</h6>
                                  {doc.href ? (
                                    <a
                                      href={doc.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-sm btn-outline-primary"
                                    >
                                      <i className="ti ti-external-link me-1" />
                                      View PDF
                                    </a>
                                  ) : (
                                    <span className="fs-13 text-muted">Not uploaded</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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
              {invoicePath ? (
                <Link to={invoicePath} className="btn btn-primary me-3">
                  <i className="ti ti-files me-1" />
                  View Invoice
                </Link>
              ) : (
                <button
                  type="button"
                  className="btn btn-primary me-3"
                  disabled
                  title="No payment invoice is linked to this reservation yet."
                >
                  <i className="ti ti-files me-1" />
                  View Invoice
                </button>
              )}
              {/* <Link to="#" className="btn btn-dark me-3">
                <i className="ti ti-calendar me-1" />
                Reschedule
              </Link> */}
              {booking.status !== "CANCELLED" &&
                booking.status !== "COMPLETED" && (
                  <Link
                    to="#"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#cancel_reservation_modal"
                    onClick={() => {
                      setCancelReason("");
                      setCancelError(null);
                    }}
                  >
                    <i className="ti ti-x me-1" />
                    Cancel reservation
                  </Link>
                )}
            </div>
            )}
          </div>
        </div>
      </div>
      <div className="modal fade" id="cancel_reservation_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                id="cancel_reservation_modal_hide"
                className="d-none"
                data-bs-dismiss="modal"
                aria-hidden="true"
              />
              <div className="text-center mb-3">
                <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-2 d-inline-flex align-items-center justify-content-center">
                  <i className="ti ti-x fs-26" />
                </span>
                <h4 className="mb-1">Cancel reservation</h4>
                <p className="text-muted mb-0">
                  This will mark the booking as cancelled. Please provide a reason.
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="cancel_reason_input" className="form-label">
                  Reason <span className="text-danger">*</span>
                </label>
                <textarea
                  id="cancel_reason_input"
                  className="form-control"
                  rows={4}
                  placeholder="e.g. Customer requested cancellation, vehicle unavailable…"
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  disabled={cancelling}
                />
              </div>
              {cancelError && (
                <div className="alert alert-danger py-2 mb-3" role="alert">
                  {cancelError}
                </div>
              )}
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                  disabled={cancelling}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={cancelling}
                  onClick={confirmCancel}
                >
                  {cancelling ? "Cancelling…" : "Confirm cancellation"}
                </button>
              </div>
            </div>
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
