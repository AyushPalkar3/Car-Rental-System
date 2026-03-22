import React from 'react';
import ImageWithBasePath from '../../core/data/img/ImageWithBasePath'
import Breadcrumbs from '../common/breadcrumbs'
import { useSelector } from 'react-redux';
import { all_routes } from "../../router/all_routes";
import { Link } from "react-router-dom";
import { RentalBreakdownLines } from "./rentalBreakdownLines";

const BookingSuccess = () => {
  const bookingData = useSelector((state: any) => state.checkout.bookingData);
  const checkoutData = useSelector((state: any) => state.checkout);

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
              <h5 className="order-no">Order Number : <span>#{bookingData.id.slice(-6).toUpperCase()}</span></h5>
            </div>
            <div className="booking-header">
              <div className="booking-img-wrap">
                <div className="book-img">
                  <img src={`http://localhost:4000${checkoutData.car?.images[0]}`} alt="img" />
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
          <div className="print-btn text-center d-flex justify-content-center mt-4">
            <Link to={all_routes.homeOne} className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess