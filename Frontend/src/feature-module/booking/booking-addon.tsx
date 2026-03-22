import  { useState } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Breadcrumbs from "../common/breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

const BookingAddon = () => {
  const routes = all_routes;
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };
  const navigate = useNavigate();


  const navigatePath = ()=> {
    navigate(routes.bookingDetail);
  }

  return (
    <>
      <Breadcrumbs title="Checkout" subtitle="Checkout" />
      <div className="booking-new-module">
        <div className="container">
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
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Location &amp; Time</h6>
                    </li>
                    <li className="active">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-02.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Extra Services</h6>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-03.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Detail</h6>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-04.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Checkout</h6>
                    </li>
                    <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-05.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Booking Confirmed</h6>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-detail-info">
            <div className="row">
              
              <div className="col-lg-8">
                <div className="booking-information-main">
                  <form>
                    <div className="booking-information-card">
                      <div className="booking-info-head justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="bx bx-add-to-queue" />
                          </span>
                          <h5>Add-Ons</h5>
                        </div>
                        <h6>Total : 15 Add-ons</h6>
                      </div>
                      <div className="booking-info-body">
                        <ul className="adons-lists">
                          <li>
                            <div className="adons-types">
                              <div className="d-flex align-items-center adon-name-info">
                                <span className="adon-icon">
                                  <i className="bx bx-map-pin" />
                                </span>
                                <div className="adon-name">
                                  <h6>GPS Navigation Systems</h6>
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center adon-info-btn"
                                  >
                                    <i className="bx bx-info-circle me-2" />
                                    More information
                                    <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                  </Link>
                                </div>
                              </div>
                              <span className="adon-price">$25</span>
                              <Link
                                to="#"
                                className="btn btn-secondary remove-adon-btn"
                              >
                                <i className="bx bx-minus-circle me-2" />
                                Remove
                              </Link>
                            </div>
                            <div className="more-adon-info">
                              <p>
                                Provide GPS navigation devices as add-ons for
                                customers who need assistance with directions
                                and navigation during their rental period.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="adons-types">
                              <div className="d-flex align-items-center adon-name-info">
                                <span className="adon-icon">
                                  <i className="bx bx-wifi" />
                                </span>
                                <div className="adon-name">
                                  <h6>Wi-Fi Hotspot</h6>
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center adon-info-btn"
                                  >
                                    <i className="bx bx-info-circle me-2" />
                                    More information{" "}
                                    <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                  </Link>
                                </div>
                              </div>
                              <span className="adon-price">$25</span>
                              <Link
                                to="#"
                                className="btn btn-secondary remove-adon-btn"
                              >
                                <i className="bx bx-minus-circle me-2" />
                                Remove
                              </Link>
                            </div>
                            <div className="more-adon-info">
                              <p>
                                Provide GPS navigation devices as add-ons for
                                customers who need assistance with directions
                                and navigation during their rental period.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="adons-types">
                              <div className="d-flex align-items-center adon-name-info">
                                <span className="adon-icon">
                                  <i className="bx bx-wifi" />
                                </span>
                                <div className="adon-name">
                                  <h6>Child Safety Seats</h6>
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center adon-info-btn"
                                  >
                                    <i className="bx bx-info-circle me-2" />
                                    More information{" "}
                                    <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                  </Link>
                                </div>
                              </div>
                              <span className="adon-price">$50</span>
                              <Link
                                to="#"
                                className="btn btn-secondary remove-adon-btn"
                              >
                                <i className="bx bx-minus-circle me-2" />
                                Remove
                              </Link>
                            </div>
                            <div className="more-adon-info">
                              <p>
                                Provide GPS navigation devices as add-ons for
                                customers who need assistance with directions
                                and navigation during their rental period.
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="adons-types">
                              <div className="d-flex align-items-center adon-name-info">
                                <span className="adon-icon">
                                  <i className="bx bxs-droplet" />
                                </span>
                                <div className="adon-name">
                                  <h6>Fuel Options</h6>
                                  <Link
                                    to="#"
                                    className="d-inline-flex align-items-center adon-info-btn"
                                  >
                                    <i className="bx bx-info-circle me-2" />
                                    More information{" "}
                                    <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                  </Link>
                                </div>
                              </div>
                              <span className="adon-price">$75</span>
                              <Link to="#" className="btn add-addon-btn">
                                <i className="bx bx-plus-circle me-2" />
                                Add
                              </Link>
                            </div>
                            <div className="more-adon-info">
                              <p>
                                Provide GPS navigation devices as add-ons for
                                customers who need assistance with directions
                                and navigation during their rental period.
                              </p>
                            </div>
                          </li>
                          <li className="view-more-adons">
                            <div
                              className={`more-adons ${showMore ? "d-block" : "d-none"}`}
                            >
                              <ul>
                                <li>
                                  <div className="adons-types">
                                    <div className="d-flex align-items-center adon-name-info">
                                      <span className="adon-icon">
                                        <i className="bx bx-collection" />
                                      </span>
                                      <div className="adon-name">
                                        <h6>Toll Passes</h6>
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center adon-info-btn"
                                        >
                                          <i className="bx bx-info-circle me-2" />
                                          More information{" "}
                                          <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                        </Link>
                                      </div>
                                    </div>
                                    <span className="adon-price">$125</span>
                                    <Link to="#" className="btn add-addon-btn">
                                      <i className="bx bx-plus-circle me-2" />
                                      Add
                                    </Link>
                                  </div>
                                  <div className="more-adon-info">
                                    <p>
                                      Provide GPS navigation devices as add-ons
                                      for customers who need assistance with
                                      directions and navigation during their
                                      rental period.
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="adons-types">
                                    <div className="d-flex align-items-center adon-name-info">
                                      <span className="adon-icon">
                                        <i className="bx bx-broadcast" />
                                      </span>
                                      <div className="adon-name">
                                        <h6>Roadside Assistance</h6>
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center adon-info-btn"
                                        >
                                          <i className="bx bx-info-circle me-2" />
                                          More information{" "}
                                          <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                        </Link>
                                      </div>
                                    </div>
                                    <span className="adon-price">$60</span>
                                    <Link to="#" className="btn add-addon-btn">
                                      <i className="bx bx-plus-circle me-2" />
                                      Add
                                    </Link>
                                  </div>
                                  <div className="more-adon-info">
                                    <p>
                                      Provide GPS navigation devices as add-ons
                                      for customers who need assistance with
                                      directions and navigation during their
                                      rental period.
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="adons-types">
                                    <div className="d-flex align-items-center adon-name-info">
                                      <span className="adon-icon">
                                        <i className="bx bx-radio" />
                                      </span>
                                      <div className="adon-name">
                                        <h6>Satellite Radio</h6>
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center adon-info-btn"
                                        >
                                          <i className="bx bx-info-circle me-2" />
                                          More information{" "}
                                          <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                        </Link>
                                      </div>
                                    </div>
                                    <span className="adon-price">$42</span>
                                    <Link to="#" className="btn add-addon-btn">
                                      <i className="bx bx-plus-circle me-2" />
                                      Add
                                    </Link>
                                  </div>
                                  <div className="more-adon-info">
                                    <p>
                                      Provide GPS navigation devices as add-ons
                                      for customers who need assistance with
                                      directions and navigation during their
                                      rental period.
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="adons-types">
                                    <div className="d-flex align-items-center adon-name-info">
                                      <span className="adon-icon">
                                        <i className="bx bx-radar" />
                                      </span>
                                      <div className="adon-name">
                                        <h6>Additional Accessories</h6>
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center adon-info-btn"
                                        >
                                          <i className="bx bx-info-circle me-2" />
                                          More information{" "}
                                          <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                        </Link>
                                      </div>
                                    </div>
                                    <span className="adon-price">$30</span>
                                    <Link to="#" className="btn add-addon-btn">
                                      <i className="bx bx-plus-circle me-2" />
                                      Add
                                    </Link>
                                  </div>
                                  <div className="more-adon-info">
                                    <p>
                                      Provide GPS navigation devices as add-ons
                                      for customers who need assistance with
                                      directions and navigation during their
                                      rental period.
                                    </p>
                                  </div>
                                </li>
                                <li>
                                  <div className="adons-types">
                                    <div className="d-flex align-items-center adon-name-info">
                                      <span className="adon-icon">
                                        <i className="bx bx-rename" />
                                      </span>
                                      <div className="adon-name">
                                        <h6>Express Check-in/Check-out</h6>
                                        <Link
                                          to="#"
                                          className="d-inline-flex align-items-center adon-info-btn"
                                        >
                                          <i className="bx bx-info-circle me-2" />
                                          More information{" "}
                                          <i className="bx bx-chevron-down ms-2 arrow-icon" />
                                        </Link>
                                      </div>
                                    </div>
                                    <span className="adon-price">$54</span>
                                    <Link to="#" className="btn add-addon-btn">
                                      <i className="bx bx-plus-circle me-2" />
                                      Add
                                    </Link>
                                  </div>
                                  <div className="more-adon-info">
                                    <p>
                                      Provide GPS navigation devices as add-ons
                                      for customers who need assistance with
                                      directions and navigation during their
                                      rental period.
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <Link
                              onClick={handleToggle}
                              to="#"
                              className="view-adon-btn"
                            >
                              <i className="bx bx-plus-circle me-2" />
                              {showMore ? "Less Add-Ons" : "View More Add-Ons"}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="booking-information-card">
                      <div className="booking-info-head">
                        <span>
                          <i className="bx bx-user-pin" />
                        </span>
                        <h5>Driver details</h5>
                      </div>
                      <div className="booking-info-body">
                        <ul className="booking-radio-btns">
                          <li>
                            <label className="booking_custom_check">
                              <input
                                type="radio"
                                name="driver_type"
                                id="self_driver"
                                defaultChecked
                              />
                              <span className="booking_checkmark">
                                <span className="checked-title">
                                  Self Driver
                                </span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="booking_custom_check">
                              <input
                                type="radio"
                                name="driver_type"
                                id="acting_driver"
                              />
                              <span className="booking_checkmark">
                                <span className="checked-title">
                                  Acting Driver
                                </span>
                              </span>
                            </label>
                          </li>
                        </ul>
                        <div className="booking-timings self-driver-info">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-title-head">
                                <h5>Driver details</h5>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block date-widget">
                                <label className="form-label">
                                  First Name{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter First Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block date-widget">
                                <label className="form-label">
                                  Last Name{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Last Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block date-widget">
                                <label className="form-label">
                                  Driver Age{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Age of Driver"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block date-widget">
                                <label className="form-label">
                                  Mobile Number{" "}
                                  <span className="text-danger"> *</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Enter Phone Number"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="input-block m-0">
                                <label className="custom_check d-inline-flex location-check m-0">
                                  <span>
                                    I Confirm Driver’s Age is above 20 years old
                                  </span>
                                  <input type="checkbox" name="remeber" />
                                  <span className="checkmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="booking-timings acting-driver-info">
                          <div className="form-title-head d-flex align-items-center justify-content-between">
                            <h5>Drivers</h5>
                            <span>Total : 15 Add-ons</span>
                          </div>
                          <ul className="acting-driver-list">
                            <li>
                              <div className="driver-profile-info">
                                <span className="driver-profile">
                                  <ImageWithBasePath
                                    src="assets/img/drivers/driver-01.jpg"
                                    alt="Img"
                                  />
                                </span>
                                <div className="driver-name">
                                  <h5>Adrian Rivald</h5>
                                  <ul>
                                    <li>No of Rides Completed : 25</li>
                                    <li>Age : 32</li>
                                  </ul>
                                </div>
                              </div>
                              <Link to="#" className="btn select-driver-btn">
                                <i className="bx bx-plus-circle me-2" />
                                Select
                              </Link>
                            </li>
                            <li>
                              <div className="driver-profile-info">
                                <span className="driver-profile">
                                  <ImageWithBasePath
                                    src="assets/img/drivers/driver-02.jpg"
                                    alt="Img"
                                  />
                                </span>
                                <div className="driver-name">
                                  <h5>Ruban</h5>
                                  <ul>
                                    <li>No of Rides Completed : 32</li>
                                    <li>Age : 36</li>
                                  </ul>
                                </div>
                              </div>
                              <Link
                                to="#"
                                className="btn remove-driver-btn btn-secondary"
                              >
                                <i className="bx bx-check-circle me-2" />
                                Remove
                              </Link>
                            </li>
                            <li>
                              <div className="driver-profile-info">
                                <span className="driver-profile">
                                  <ImageWithBasePath
                                    src="assets/img/drivers/driver-03.jpg"
                                    alt="Img"
                                  />
                                </span>
                                <div className="driver-name">
                                  <h5>Kailate</h5>
                                  <ul>
                                    <li>No of Rides Completed : 65</li>
                                    <li>Age : 40</li>
                                  </ul>
                                </div>
                              </div>
                              <Link to="#" className="btn select-driver-btn">
                                <i className="bx bx-plus-circle me-2" />
                                Select
                              </Link>
                            </li>
                            <li>
                              <div className="driver-profile-info">
                                <span className="driver-profile">
                                  <ImageWithBasePath
                                    src="assets/img/drivers/driver-04.jpg"
                                    alt="Img"
                                  />
                                </span>
                                <div className="driver-name">
                                  <h5>Rizwa</h5>
                                  <ul>
                                    <li>No of Rides Completed : 22</li>
                                    <li>Age : 29</li>
                                  </ul>
                                </div>
                              </div>
                              <Link to="#" className="btn select-driver-btn">
                                <i className="bx bx-plus-circle me-2" />
                                Select
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="booking-info-btns d-flex justify-content-end">
                      <Link
                        to={routes.bookingCheckout}
                        className="btn btn-secondary"
                      >
                        Back to Location &amp; Time
                      </Link>
                      <button onClick={navigatePath}
                        className="btn btn-primary continue-book-btn"
                        type="button"
                      >
                        Continue Booking
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 theiaStickySidebar">
                <div className="stickybar">
                <div className="booking-sidebar">
                  <div className="booking-sidebar-card">
                    <div className="accordion-item border-0 mb-4">
                      <div className="accordion-header">
                        <div
                          className="accordion-button collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion_collapse_one"
                          aria-expanded="true"
                        >
                          <div className="booking-sidebar-head">
                            <h5>
                              Booking Details
                              <i className="fas fa-chevron-down" />
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div id="accordion_collapse_one" className="accordion-collapse collapse">
                        <div className="booking-sidebar-body">
                          <div className="booking-car-detail">
                            <span className="car-img">
                              <ImageWithBasePath
                                src="assets/img/car-list-4.jpg"
                                className="img-fluid"
                                alt="Car"
                              />
                            </span>
                            <div className="care-more-info">
                              <h5>Chevrolet Camaro</h5>
                              <p>Miami St, Destin, FL 32550, USA</p>
                              <Link to={routes.listingDetails}>View Car Details</Link>
                            </div>
                          </div>
                          <div className="booking-vehicle-rates">
                            <ul>
                              <li>
                                <div className="rental-charge">
                                  <h6>
                                    Rental Charges Rate <span> (1 day )</span>
                                  </h6>
                                  <span className="text-danger">
                                    (This does not include fuel)
                                  </span>
                                </div>
                                <h5>+ $300</h5>
                              </li>
                              <li>
                                <h6>Doorstep delivery</h6>
                                <h5>+ $60</h5>
                              </li>
                              <li>
                                <h6>Trip Protection Fees</h6>
                                <h5>+ $25</h5>
                              </li>
                              <li>
                                <h6>Convenience Fees</h6>
                                <h5>+ $2</h5>
                              </li>
                              <li>
                                <h6>Tax</h6>
                                <h5>+ $2</h5>
                              </li>
                              <li>
                                <h6>Refundable Deposit</h6>
                                <h5>+$1200</h5>
                              </li>
                              <li>
                                <h6>
                                  Full Premium Insurance{" "}
                                  <i className="bx bxs-x-circle text-danger" />
                                </h6>
                                <h5>+$200</h5>
                              </li>
                              <li className="total-rate">
                                <h6>Subtotal</h6>
                                <h5>+$1604</h5>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="booking-sidebar-card">
                    <div className="accordion-item border-0 mb-4">
                      <div className="accordion-header">
                        <div
                          className="accordion-button collapsed"
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion_collapse_two"
                          aria-expanded="true"
                        >
                          <div className="booking-sidebar-head d-flex justify-content-between align-items-center">
                            <h5>
                              Coupon
                              <i className="fas fa-chevron-down" />
                            </h5>
                            <Link to="#" className="coupon-view">
                              View Coupons
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div id="accordion_collapse_two" className="accordion-collapse collapse">
                        <div className="booking-sidebar-body">
                          <form action="#">
                            <div className="d-flex align-items-center">
                              <div className="form-custom flex-fill">
                                <input
                                  type="text"
                                  className="form-control mb-0"
                                  placeholder="Coupon code"
                                />
                              </div>
                              <button
                                type="button" data-bs-dismiss="modal" 
                                className="btn btn-secondary apply-coupon-btn d-flex align-items-center ms-2"
                              >
                                Apply
                                <i className="feather-arrow-right ms-2" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="total-rate-card">
                    <div className="vehicle-total-price">
                      <h5>Estimated Total</h5>
                      <span>$3541</span>
                    </div>
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

export default BookingAddon;
