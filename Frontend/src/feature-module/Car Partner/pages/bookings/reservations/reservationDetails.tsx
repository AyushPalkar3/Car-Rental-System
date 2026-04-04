import { Link, useParams } from "react-router-dom";
import { all_routes } from "../../../../../router/all_routes";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { formatBookingDisplayId } from "../../../../../core/utils/bookingDisplayId";

const IMAGE_BASE_URL = import.meta.env.VITE_API_BASE_URL_IMAGE || "http://localhost:4000";

const statusColors: Record<string, string> = {
  COMPLETED: "bg-success-transparent",
  CONFIRMED: "bg-orange-transparent",
  PENDING: "bg-warning-transparent",
  CANCELLED: "bg-danger-transparent",
};

const ReservationDetails = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const token = Cookies.get("carPartnerAccessToken");

  useEffect(() => {
    const fetchReservationDetails = async () => {
      if (!token || !id) return;
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:4000/api/car-partner/bookings/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setBooking(res.data);
      } catch (err) {
        console.error("Failed to fetch reservation details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchReservationDetails();
  }, [id, token]);


  if (loading) {
    return (
       <div className="content me-4 d-flex justify-content-center p-5">
           <div className="spinner-border text-primary" role="status">
             <span className="visually-hidden">Loading...</span>
           </div>
       </div>
    );
  }

  if (!booking) {
    return (
       <div className="content me-4 d-flex justify-content-center p-5">
          <h5>Reservation not found or you don't have access.</h5>
       </div>
    );
  }

  const car = booking.car || {};
  const user = booking.user || {};
  const pricing = booking.pricing || {};

  return (
    <>
      <div className="content me-4">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="mb-3">
              <Link
                to={all_routes.carPartnerReservationsList}
                className="d-inline-flex align-items-center fw-medium"
              >
                <i className="ti ti-arrow-narrow-left me-2" />
                Reservation
              </Link>
            </div>
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <h5>Reservation Details — {formatBookingDisplayId(booking.id)}</h5>
                <span className={`badge ${statusColors[booking.status] || "bg-secondary-transparent"}`}>
                  {booking.status}
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
                               <img
                                  src={
                                    car?.images?.[0]
                                      ? car.images[0].startsWith("http")
                                        ? car.images[0]
                                        : `${IMAGE_BASE_URL}${car.images[0]}`
                                      : "assets/admin/img/car/car-01.jpg"
                                  }
                                  onError={(e:any) => e.target.src = "assets/admin/img/car/car-01.jpg"}
                                  alt="car"
                                />
                            </span>
                            <div>
                              <p className="mb-1">{car.category || "Car"}</p>
                              <h6 className="fs-14">{car.name}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="text-end">
                            <p className="mb-1">Base Price</p>
                            <h6 className="fs-14">
                              ₹{pricing.price || "--"}
                              <span className="text-gray-5 fw-normal">
                                /{pricing.duration ? pricing.duration.toLowerCase() : "unit"}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-3 pb-3">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">Start Date</h6>
                        <p>{new Date(booking.pickupDate).toLocaleString()}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">End Date</h6>
                        <p>{new Date(booking.returnDate).toLocaleString()}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">Duration Type</h6>
                        <p>{booking.duration}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">Booking Type</h6>
                        <p>{booking.bookingType}</p>
                      </div>
                      
                      {booking.bookingType === "DELIVERY" && (
                         <div className="row mt-3">
                          <div className="col-md-6">
                            <div className="d-flex align-items-center">
                              <div className="bg-light p-3 rounded flex-fill mb-3">
                                <h6 className="mb-1 fs-14 fw-medium">
                                  Delivery Address
                                </h6>
                                <p>{booking.deliveryAddress || "N/A"}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="bg-light p-3 rounded mb-3">
                              <h6 className="mb-1 fs-14 fw-medium">
                                Return Address
                              </h6>
                              <p>{booking.returnAddress || "N/A"}</p>
                            </div>
                          </div>
                        </div>
                      )}


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
                                {user.firstName} {user.lastName}
                              </h6>
                              <p className="mb-0">{user.phoneNum}</p>
                              <p className="mb-0">{user.email}</p>
                              {user.dlNumber && <p className="mt-1 mb-0">DL: {user.dlNumber}</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-3 pb-2">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h6 className="fw-medium fs-14">Total Revenue</h6>
                        <p>₹{booking.totalPrice}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="tab-pane" id="solid-tab2" role="tabpanel">
                      {/* History Tab - Minimal real data logic since we haven't implemented a full audittrail yet */}
                     <div>
                      <h6 className="mb-3">History</h6>
                      <div className="d-flex align-items-center mb-3">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                           <h5 className="mb-0 mx-2">{new Date(booking.createdAt).getDate()}</h5>
                        </div>
                        <div>
                          <h6 className="fs-14 mb-1">Reservation created</h6>
                          <span className="fs-13">{new Date(booking.createdAt).toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                           <h5 className="mb-0 mx-2">{new Date(booking.updatedAt).getDate()}</h5>
                        </div>
                        <div>
                          <h6 className="fs-14 mb-1">
                            Status: {booking.status}
                          </h6>
                          <span className="fs-13">{new Date(booking.updatedAt).toLocaleString()}</span>
                        </div>
                      </div>
                      
                      {booking.payment && (
                        <div className="d-flex align-items-center mb-3">
                          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
                            <h5 className="mb-0 mx-2">{new Date(booking.payment.updatedAt).getDate()}</h5>
                          </div>
                          <div>
                            <h6 className="fs-14 mb-1">Payment: {booking.payment.status}</h6>
                            <span className="fs-13">{new Date(booking.payment.updatedAt).toLocaleString()}</span>
                          </div>
                        </div>
                      )}
                     </div>

                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationDetails;
