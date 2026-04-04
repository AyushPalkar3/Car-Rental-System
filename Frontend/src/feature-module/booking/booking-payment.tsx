import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking, setBookingDetails } from "./checkoutSlice";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Breadcrumbs from "../common/breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { toast } from "react-toastify";

const getAccessToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; accessToken=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || "";
  return "";
};

const IMAGE_BASE_URL = import.meta.env.VITE_API_BASE_URL_IMAGE || "http://localhost:4000";

const BookingPayment = () => {
  const routes = all_routes;
  const navigate = useNavigate();

  const dispatch: any = useDispatch();
  const bookingData = useSelector((state: any) => state.checkout);
  const userInfo = useSelector((state: any) => state.user.userInfo);

  const [loading, setLoading] = useState(false);
  const amount = bookingData?.totalAmount || bookingData?.totalPrice || 0;
  const discountAmt = bookingData?.discountAmount ?? 0;
  const preTotal = bookingData?.preDiscountTotal;

  const validatePaymentStep = (): string | null => {
    const uid = userInfo?.user?.id || userInfo?.id || bookingData?.userId;
    if (!uid) return "Please sign in to complete payment.";
    if (!bookingData?.car?.id) {
      return "Booking data is missing. Go back to location & time and try again.";
    }
    if (!amount || amount <= 0) {
      return "Invalid amount. Complete the previous steps with valid dates and pricing.";
    }
    const pickup = bookingData.pickupDate ?? bookingData.startDate;
    const ret = bookingData.returnDate ?? bookingData.endDate;
    if (!pickup || !ret) {
      return "Pickup or return date is missing. Go back and fill all fields.";
    }
    return null;
  };

  const handlePayment = async () => {
    const v = validatePaymentStep();
    if (v) {
      toast.error(v);
      return;
    }
    try {
      setLoading(true);

      // ── STEP 1: Create Razorpay order ────────────────────────────────────
      const orderRes = await fetch(
        "http://localhost:4000/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
          },
          body: JSON.stringify({ amount }),
        }
      );

      const order = await orderRes.json();

      if (!order.id) {
        toast.error("Failed to create payment order. Please try again.");
        setLoading(false);
        return;
      }

      // ── STEP 2: Open Razorpay modal ──────────────────────────────────────
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: "INR",
        name: "Ekal Car Rental",
        description: "Complete your car reservation",
        image: "/logo192.png",
        order_id: order.id,

        handler: async function (response: any) {
          try {
            // ── STEP 3: Create Booking in DB first ────────────────────────
            const bookingRes = await dispatch(
              createBooking({
                ...bookingData,
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
              })
            );

            if (!createBooking.fulfilled.match(bookingRes)) {
              toast.error(
                "Booking could not be saved. Payment was collected — please contact support."
              );
              setLoading(false);
              return;
            }

            const savedBooking = bookingRes.payload;
            const bookingId = savedBooking?.id;
            const userId =
              userInfo?.user?.id || userInfo?.id || bookingData?.userId;

            // ── STEP 4: Verify payment signature & persist Payment record ──
            const verifyRes = await fetch(
              "http://localhost:4000/api/payment/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${getAccessToken()}`,
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  bookingId,
                  userId,
                  amount,
                }),
              }
            );

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              // Store bookingId in Redux for the success page
              dispatch(
                setBookingDetails({
                  savedBookingId: bookingId,
                  savedPaymentId: response.razorpay_payment_id,
                })
              );
              navigate(routes.bookingSuccess);
            } else {
              toast.error(
                "Payment verification failed. Please contact support with your payment ID: " +
                  response.razorpay_payment_id
              );
            }
          } catch (err) {
            console.error("Post-payment error:", err);
            toast.error(
              "Something went wrong after payment. Please contact support."
            );
          }
          setLoading(false);
        },

        prefill: {
          name: `${userInfo?.user?.firstName || ""} ${
            userInfo?.user?.lastName || ""
          }`.trim(),
          email: userInfo?.user?.email || "",
          contact: userInfo?.user?.phoneNum || "",
        },

        theme: { color: "#055c9d" },

        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response: any) {
        toast.error(
          "Payment failed: " +
            (response.error?.description || "Unknown error")
        );
        setLoading(false);
      });
    } catch (error) {
      console.error("handlePayment error:", error);
      toast.error("Something went wrong! Please try again.");
      setLoading(false);
    }
  };

  return (
    <div>
      <Breadcrumbs title="Checkout" subtitle="Checkout" />

      <div className="booking-new-module">
        <div className="container">
          {/* Wizard Header */}
          <div className="booking-wizard-head">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-3">
                <div className="booking-head-title">
                  <h4>Reserve Your Car</h4>
                  <p>Complete the following steps</p>
                </div>
              </div>

              <div className="col-xl-8 col-lg-9">
                <div className="booking-wizard-lists">
                  <ul>
                    <li className="active activated">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-01.svg"
                          alt="Location"
                        />
                      </span>
                      <h6>Location &amp; Time</h6>
                    </li>

                    <li className="active activated">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-03.svg"
                          alt="Details"
                        />
                      </span>
                      <h6>Detail</h6>
                    </li>

                    <li className="active">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-04.svg"
                          alt="Checkout"
                        />
                      </span>
                      <h6>Checkout</h6>
                    </li>

                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-05.svg"
                          alt="Confirmed"
                        />
                      </span>
                      <h6>Booking Confirmed</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Card */}
          <div className="booking-detail-info">
            <div className="row">
              <div className="col-lg-8">
                <div className="booking-information-main">
                  <div
                    className="booking-information-card payment-info-card"
                    style={{
                      boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
                      borderRadius: "12px",
                    }}
                  >
                    <div className="booking-info-head">
                      <div className="d-flex align-items-center">
                        <span>
                          <i className="bx bx-money" />
                        </span>
                        <h5>Secure Payment</h5>
                      </div>
                    </div>

                    <div className="booking-info-body text-center p-4">
                      <h5 className="mb-3">
                        Pay Securely using UPI, Debit, Credit, RuPay or Visa
                      </h5>

                      <p className="text-muted">
                        Razorpay will open a secure payment window
                      </p>

                      <div
                        style={{
                          background: "#f8f9fa",
                          padding: "20px",
                          borderRadius: "10px",
                          marginTop: "20px",
                        }}
                      >
                        <h3 style={{ color: "#055c9d" }}>
                          ₹{Number(amount).toLocaleString()}
                        </h3>
                        <p>Total Booking Amount</p>
                      </div>

                      <div className="booking-info-btns mt-4 d-flex justify-content-center gap-3">
                        <Link
                          to={routes.bookingDetail}
                          className="btn btn-secondary"
                        >
                          Back
                        </Link>

                        <button
                          onClick={handlePayment}
                          className="btn btn-primary"
                          disabled={loading}
                          style={{
                            backgroundColor: "#055c9d",
                            borderColor: "#055c9d",
                            padding: "10px 30px",
                          }}
                        >
                          {loading ? "Processing..." : `Pay ₹${amount}`}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Summary */}
              <div className="col-lg-4 theiaStickySidebar">
                <div className="stickybar">
                  <div className="booking-sidebar">
                    <div className="booking-sidebar-card">
                      <div className="accordion-item border-0 mb-4">
                        <div className="accordion-header">
                          <div className="booking-sidebar-head">
                            <h5>Booking Summary</h5>
                          </div>
                        </div>
                        <div className="accordion-collapse">
                          <div className="booking-sidebar-body">
                            <div className="booking-car-detail">
                              {bookingData?.car?.images?.[0] && (
                                <span className="car-img">
                                  <img
                                    src={
                                      bookingData.car.images[0].startsWith("http")
                                        ? bookingData.car.images[0]
                                        : `${IMAGE_BASE_URL}${bookingData.car.images[0]}`
                                    }
                                    className="img-fluid"
                                    alt="Car"
                                  />
                                </span>
                              )}
                              <div className="care-more-info">
                                <h5>{bookingData?.car?.name}</h5>
                                <p>
                                  {bookingData?.bookingType === "delivery"
                                    ? `Delivery to: ${bookingData?.deliveryLocation}`
                                    : `Pickup: ${bookingData?.deliveryLocation}`}
                                </p>
                              </div>
                            </div>
                            <div className="booking-vehicle-rates">
                              <ul>
                                <li>
                                  <h6>Rental Charges</h6>
                                  <h5>
                                    ₹
                                    {(preTotal != null
                                      ? preTotal
                                      : amount) -
                                      (bookingData?.deliveryFee || 0)}
                                  </h5>
                                </li>
                                {(bookingData?.deliveryFee || 0) > 0 && (
                                  <li>
                                    <h6>
                                      Delivery Fee ({bookingData?.distanceKM}{" "}
                                      KM)
                                    </h6>
                                    <h5>+ ₹{bookingData?.deliveryFee}</h5>
                                  </li>
                                )}
                                {discountAmt > 0 && (
                                  <li>
                                    <h6>
                                      Coupon ({bookingData?.couponCode || "—"})
                                    </h6>
                                    <h5 className="text-success">
                                      − ₹{discountAmt}
                                    </h5>
                                  </li>
                                )}
                                <li className="total-rate">
                                  <h6>Total</h6>
                                  <h5>₹{amount}</h5>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="total-rate-card">
                      <div className="vehicle-total-price">
                        <h5>Estimated Total</h5>
                        <span>₹{amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPayment;