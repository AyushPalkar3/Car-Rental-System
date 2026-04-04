import React, { useState } from 'react';
import Breadcrumbs from '../common/breadcrumbs'
import { useSelector } from 'react-redux';
import { all_routes } from "../../router/all_routes";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { RentalBreakdownLines } from "./rentalBreakdownLines";
import { formatBookingDisplayId } from "../../core/utils/bookingDisplayId";

const getAccessToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; accessToken=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || "";
  return "";
};

const apiBase =
  (import.meta as unknown as { env?: { VITE_API_BASE_URL?: string } }).env?.VITE_API_BASE_URL ||
  "http://localhost:4000";
const imageBase =
  (import.meta as unknown as { env?: { VITE_API_BASE_URL_IMAGE?: string } }).env
    ?.VITE_API_BASE_URL_IMAGE || "http://localhost:4000";

const BookingSuccess = () => {
  const bookingData = useSelector((state: any) => state.checkout.bookingData);
  const checkoutData = useSelector((state: any) => state.checkout);
  const [invoiceLoading, setInvoiceLoading] = useState(false);

  const handleDownloadInvoice = async () => {
    const token = getAccessToken();
    if (!token) {
      toast.error("Please sign in to download your invoice.");
      return;
    }
    const bookingId = bookingData?.id;
    if (!bookingId) {
      toast.error("Booking reference is missing.");
      return;
    }
    try {
      setInvoiceLoading(true);
      const res = await fetch(`${apiBase}/api/payment/booking/${bookingId}/invoice`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error((err as { message?: string }).message || "Could not download invoice.");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice-${formatBookingDisplayId(bookingId)}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast.success("Invoice downloaded.");
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Download failed.";
      toast.error(msg);
    } finally {
      setInvoiceLoading(false);
    }
  };

  if (!bookingData) {
    return (
      <div className="text-center p-5">
        <h4>No booking found</h4>
        <Link to={all_routes.listingGrid} className="btn btn-primary">Go to Listings</Link>
      </div>
    );
  }

  return (
    <div>
      <Breadcrumbs title="Checkout" subtitle="Checkout" />
         {/* Booking Success */}
      <div className="booking-new-module">
        <div className="container">
          {/* ... (wizard head remains same) ... */}
          <div className="booking-card" style={{ padding: '20px', backgroundColor: '#fff' }}>
            <div className="success-book">
              <span className="success-icon">
                <i className="fa-solid fa-check-double" />
              </span>
              <h5>Thank you! Your Order has been Recieved</h5>
              <h5 className="order-no">Order Number : <span>{formatBookingDisplayId(bookingData.id)}</span></h5>
            </div>
            <div className="booking-header">
              <div className="booking-img-wrap">
                <div className="book-img">
                  <img
                    src={
                      checkoutData?.car?.images?.[0]
                        ? checkoutData.car.images[0].startsWith("http")
                          ? checkoutData.car.images[0]
                          : `${imageBase}${checkoutData.car.images[0]}`
                        : `${imageBase}/uploads/default-car.jpg`
                    }
                    alt="img"
                  />
                </div>
                <div className="book-info">
                  <h6>{checkoutData.car?.name}</h6>
                  <p><i className="feather icon-map-pin" /> Location : {bookingData.deliveryAddress || bookingData.pickupLocation || 'N/A'}</p>
                </div>
              </div>
              <div className="book-amount">
                <p>Total Amount</p>
                <h6>₹{bookingData.totalPrice}</h6>
              </div>
            </div>
            <div className="row">
              {/* Car Pricing */}
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="book-card flex-fill">
                  <div className="book-head">
                    <h6>Car Pricing</h6>
                  </div>
                  <div className="book-body">
                    <ul className="pricing-lists">
                      <li className="d-flex justify-content-between align-items-start gap-3 py-2">
                        <div className="flex-grow-1 min-width-0">
                          <p className="fw-semibold mb-2 mb-md-1">Rental charge</p>
                          <RentalBreakdownLines breakdown={bookingData?.priceBreakdown} />
                          <p className="text-danger small mb-0 mt-2">
                            Fuel not included.
                          </p>
                        </div>
                        <span className="fw-bold text-nowrap flex-shrink-0">
                          ₹
                          {Math.round(
                            bookingData.totalPrice - (bookingData.deliveryFee || 0)
                          )}
                        </span>
                      </li>
                      {bookingData.deliveryFee > 0 && (
                        <li>
                          <div>
                            <p>Delivery Fee ({bookingData.distanceKM} KM)</p>
                          </div>
                          <span>+ ₹{bookingData.deliveryFee}</span>
                        </li>
                      )}
                      <li className="total">
                        <p>Total Paid</p>
                        <span>₹{bookingData.totalPrice}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Car Pricing */}
              {/* Location & Time */}
              <div className="col-lg-6 col-md-6 d-flex">
                <div className="book-card flex-fill">
                  <div className="book-head">
                    <h6>Location &amp; Time</h6>
                  </div>
                  <div className="book-body">
                    <ul className="location-lists">
                      <li>
                        <h6>Booking Type</h6>
                        <p>{bookingData.bookingType}</p>
                      </li>
                      <li>
                        <h6>Rental Type</h6>
                        <p>{bookingData.duration}</p>
                      </li>
                      <li>
                        <h6>Pickup Date</h6>
                        <p>{new Date(bookingData.pickupDate).toLocaleString()}</p>
                      </li>
                      <li>
                        <h6>Return Date</h6>
                        <p>{new Date(bookingData.returnDate).toLocaleString()}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Location & Time */}
              {/* ... (rest of the sections can be simplified or hidden for now) ... */}
            </div>
          </div>
          <div className="print-btn text-center d-flex justify-content-center flex-wrap gap-3 mt-4">
            <button
              type="button"
              className="btn btn-primary d-inline-flex align-items-center"
              onClick={handleDownloadInvoice}
              disabled={invoiceLoading}>
              {invoiceLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden />
                  Preparing…
                </>
              ) : (
                <>
                  <i className="feather icon-download me-2" />
                  Download invoice
                </>
              )}
            </button>
            <Link to={all_routes.homeOne} className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess