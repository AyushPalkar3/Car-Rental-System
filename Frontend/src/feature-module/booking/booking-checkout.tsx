import { useEffect, useState } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Breadcrumbs from "../common/breadcrumbs";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { TimePicker } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";

import { useDispatch, useSelector } from "react-redux";
import { setBookingDetails } from "./checkoutSlice";

const BookingCheckout = () => {
  const routes = all_routes;
  const locationOptions = [
    { name: "Pune, India", value: "Pune, India" },
    { name: "Mumbai, India", value: "Mumbai, India" },
  ];
  const dispatch: any = useDispatch();
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const bookingData = useSelector((state: any) => state.checkout);

  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [startTime, setStartTime] = useState<any>(null);
  const [returnTime, setReturnTime] = useState<any>(null);
  const [bookingType, setBookingType] = useState("day");
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const [distanceKM, setDistanceKM] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [sameLocation, setSameLocation] = useState(false);
  const [priceBreakdown, setPriceBreakdown] = useState<any>(null);

  const navigate = useNavigate();

  // ✅ Load redux booking data
  useEffect(() => {
    console.log("booking data", bookingData)
    if (bookingData) {
      setBookingType(bookingData.rentalType || "delivery");
      setDeliveryLocation(bookingData.deliveryLocation || "");
      setReturnLocation(bookingData.returnLocation || "");
      setStartDate(
        bookingData.startDate || null
      );
      setEndDate(
        bookingData.endDate || null
      );
      setStartTime(bookingData.startTime || null);
      setReturnTime(bookingData.endTime || null);
      setDistanceKM(bookingData.distanceKM || 0);
      setDeliveryFee(bookingData.deliveryFee || 0);
      setPriceBreakdown(bookingData.priceBreakdown || null);
    }
  }, [bookingData]);

  // ✅ Safe Price Calculation
  const calculateTotalPrice = () => {
    try {
      if (
        !startDate ||
        !endDate ||
        !startTime ||
        !returnTime ||
        !bookingData?.car?.pricing
      ) {
        setTotalPrice(0);
        setPriceBreakdown(null);
        return;
      }

      const start = new Date(startDate);
      const end = new Date(endDate);

      // ✅ Extract time from AntD TimePicker (dayjs)
      start.setHours(startTime.hour());
      start.setMinutes(startTime.minute());
      start.setSeconds(0);

      end.setHours(returnTime.hour());
      end.setMinutes(returnTime.minute());
      end.setSeconds(0);

      if (end <= start) {
        setTotalPrice(0);
        setPriceBreakdown(null);
        return;
      }

      const diffMs = end.getTime() - start.getTime();
      const totalHours = diffMs / (1000 * 60 * 60);

      if (isNaN(totalHours) || totalHours <= 0) {
        setTotalPrice(0);
        setPriceBreakdown(null);
        return;
      }

      const pricing = bookingData.car.pricing;

      const hourPrice =
        pricing.find((p: any) => p.duration === "HOUR")?.price || 0;
      const dayPrice =
        pricing.find((p: any) => p.duration === "DAY")?.price || 0;
      const weekPrice =
        pricing.find((p: any) => p.duration === "WEEK")?.price || 0;
      const monthPrice =
        pricing.find((p: any) => p.duration === "MONTH")?.price || 0;

      let total = 0;
      let breakdown = {
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        hourRate: hourPrice,
        dayRate: dayPrice,
        weekRate: weekPrice,
        monthRate: monthPrice
      };

      // <= 24 hours
      if (totalHours <= 24) {
        total = totalHours * hourPrice;
        breakdown.hours = totalHours;
      }

      // < 1 week
      else if (totalHours < 168) {
        const fullDays = Math.floor(totalHours / 24);
        const remainingHours = totalHours % 24;
        total = fullDays * dayPrice + remainingHours * (dayPrice / 24);
        breakdown.days = fullDays;
        breakdown.hours = remainingHours;
      }

      // < 1 month
      else if (totalHours < 720) {
        const fullWeeks = Math.floor(totalHours / 168);
        const remainingHours = totalHours % 168;
        total = fullWeeks * weekPrice + remainingHours * (dayPrice / 24);
        breakdown.weeks = fullWeeks;
        breakdown.hours = remainingHours;
      }

      // >= 1 month
      else {
        const fullMonths = Math.floor(totalHours / 720);
        const remainingHours = totalHours % 720;
        total = fullMonths * monthPrice + remainingHours * (dayPrice / 24);
        breakdown.months = fullMonths;
        breakdown.hours = remainingHours;
      }

      // Calculate Delivery Fee if Home Delivery is selected
      let fee = 0;
      if (bookingType === 'delivery') {
        fee = distanceKM * 25;
      }
      setDeliveryFee(fee);
      setPriceBreakdown(breakdown);

      setTotalPrice(Math.ceil(total + fee));
    } catch (error) {
      console.error("Price calculation error:", error);
      setTotalPrice(0);
      setPriceBreakdown(null);
    }
  };

  // ✅ Recalculate automatically
  useEffect(() => {
    calculateTotalPrice();
  }, [startDate, endDate, startTime, returnTime, bookingData?.car?.pricing, bookingType, distanceKM]);

  // ✅ Continue Booking
  const navigatePath = () => {
    dispatch(
      setBookingDetails({
        carId: bookingData?.car?.id,
        userId: userInfo?.user?.id || userInfo?.id, // Handle nested user object
        pickupDate: startDate,
        returnDate: endDate,
        startTime: startTime,
        endTime: returnTime,
        deliveryAddress: deliveryLocation,
        returnAddress: returnLocation,
        bookingType: bookingType,
        totalPrice: totalPrice,
        color: bookingData?.car?.color,
        hexCode: bookingData?.car?.hexCode,
        pricingId: bookingData?.car?.pricing?.[0]?.id,
        duration: bookingData?.car?.pricing?.[0]?.duration || "DAY",
        distanceKM: distanceKM,
        deliveryFee: deliveryFee,
        priceBreakdown: priceBreakdown,
        
        // keeping original names for UI usage
        startDate: startDate,
        endDate: endDate,
        deliveryLocation: deliveryLocation,
        returnLocation: returnLocation,
        totalAmount: totalPrice,
      })
    );
    navigate(routes.bookingDetail);
  };

  return (
    <div>
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
                    <li className="active">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-01.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Location &amp; Time</h6>
                    </li>
                    {/* <li>
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-02.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Extra Services</h6>
                    </li> */}
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
                      <div className="booking-info-head">
                        <span>
                          <i className="bx bxs-car-garage" />
                        </span>
                        <h5>Rental Type</h5>
                      </div>
                      <div className="booking-info-body">
                        <ul className="booking-radio-btns">
                          <li>
                            <label className="booking_custom_check">
                              <input
                                type="radio"
                                name="rent_type"
                                id="location_delivery"
                                checked={bookingType === 'delivery'}
                                onChange={() => setBookingType('delivery')}
                              />
                              <span className="booking_checkmark">
                                <span className="checked-title">Delivery</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label className="booking_custom_check">
                              <input
                                type="radio"
                                name="rent_type"
                                id="location_pickup"
                                checked={bookingType === 'pickup'}
                                onChange={() => setBookingType('pickup')}
                              />
                              <span className="booking_checkmark">
                                <span className="checked-title">
                                  Self Pickup
                                </span>
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={`booking-information-card delivery-location ${bookingType === 'delivery' ? 'd-block' : 'd-none'}`}>
                      <div className="booking-info-head">
                        <span>
                          <i className="bx bxs-car-garage" />
                        </span>
                        <h5>Home Delivery Details</h5>
                      </div>
                      <div className="booking-info-body">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="form-custom">
                              <label className="form-label">Delivery Address</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your full address"
                                value={deliveryLocation}
                                onChange={(e) => setDeliveryLocation(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-custom">
                              <label className="form-label">Distance (KM)</label>
                              <input
                                type="number"
                                className="form-control"
                                placeholder="KM Away"
                                value={distanceKM}
                                onChange={(e) => setDistanceKM(Number(e.target.value))}
                                min="0"
                              />
                              <small className="text-primary">₹25 per KM delivery fee</small>
                            </div>
                          </div>
                        </div>

                        <div className="input-block m-0 mt-3">
                          <label className="custom_check d-inline-flex location-check">
                            <span>Return from same address</span>
                            <input type="checkbox" name="remeber" checked={sameLocation} onChange={() => {
                              setSameLocation(!sameLocation)
                              if (!sameLocation) {
                                setReturnLocation(deliveryLocation)
                              }
                            }} />
                            <span className="checkmark" />
                          </label>
                        </div>
                        
                        {!sameLocation && (
                          <div className="form-custom mt-3">
                            <label className="form-label">Return Address</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter return address"
                              value={returnLocation}
                              onChange={(e) => setReturnLocation(e.target.value)}
                            />
                          </div>
                        )}
                        
                        {distanceKM > 0 && (
                          <div className="alert alert-info mt-3">
                            <strong>Delivery Fee:</strong> ₹{deliveryFee} (₹25 x {distanceKM} KM)
                          </div>
                        )}
                      </div>
                    </div>
                    <div className={`booking-information-card pickup-location ${bookingType === 'pickup' ? 'd-block' : 'd-none'}`}>
                      <div className="booking-info-head">
                        <span>
                          <i className="bx bxs-car-garage" />
                        </span>
                        <h5>Location</h5>
                      </div>
                      <div className="booking-info-body">
                        <div className="form-custom">
                          <label className="form-label">Pickup Location</label>
                          <div className="d-flex align-items-center">
                            <Dropdown
                              value={deliveryLocation}
                              onChange={(e) => {
                                setDeliveryLocation(e.value);
                                if (sameLocation) {
                                  setReturnLocation(e.value);
                                }
                              }}
                              options={locationOptions}
                              optionLabel="name"
                              optionValue="value"
                              placeholder="Select Location"
                              className="w-100"
                            />
                          </div>
                        </div>
                        <div className="input-block m-0">
                          <label className="custom_check d-inline-flex location-check">
                            <span>Return to same location</span>
                            <input type="checkbox" name="remeber" checked={sameLocation} onChange={() => {
                              setSameLocation(!sameLocation)
                              if (!sameLocation) {
                                setReturnLocation(deliveryLocation)
                              }
                            }} />
                            <span className="checkmark" />
                          </label>
                        </div>
                        <div className="form-custom">
                          <label className="form-label">Return Location</label>
                          <div className="d-flex align-items-center">
                            <Dropdown
                              value={returnLocation}
                              onChange={(e) => setReturnLocation(e.value)}
                              options={locationOptions}
                              optionLabel="name"
                              optionValue="value"
                              placeholder="Select Location"
                              className="w-100"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="booking-information-card booking-type-card">
                      <div className="booking-info-head">
                        <span>
                          <i className="bx bxs-location-plus" />
                        </span>
                        <h5>Booking type &amp; Time</h5>
                      </div>
                      <div className="booking-info-body">
                        <ul className="booking-radio-btns">
                          {bookingData?.car?.pricing?.map((item: any, index: any) => (
                            <li
                              key={item.id || index}
                              style={{
                                padding: "12px 16px",
                                border: "1px solid #e0e0e0",
                                borderRadius: "10px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                                backgroundColor: "#ffffff",
                                marginBottom: "10px",
                                transition: "all 0.3s ease",
                                cursor: "pointer"
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0, 0, 0, 0.15)";
                                e.currentTarget.style.transform = "translateY(-3px)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                                e.currentTarget.style.transform = "translateY(0)";
                              }}
                            >
                              <span className="booking_checkmark" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <h6 style={{ margin: 0, fontWeight: "600" }}>₹{item.price}</h6>
                                <span className="checked-title" style={{ color: "#666", fontSize: "14px" }}>
                                  {item.duration}
                                </span>
                              </span>
                            </li>
                          ))}
                        </ul>
                        <div className="booking-timings">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="input-block date-widget">
                                <label className="form-label">Start Date</label>
                                <div className="group-img">
                                  <Calendar
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.value)}
                                    placeholder="04/11/2023"
                                  />
                                  <span className="input-cal-icon">
                                    <i className="bx bx-calendar" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block time-widge">
                                <label className="form-label">Start Time</label>
                                <div className="group-img style-custom">
                                  <TimePicker className="form-control timepicker bg-light" value={startTime} onChange={(e) => setStartTime(e)} />
                                  <span className="input-cal-icon">
                                    <i className="bx bx-time" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block date-widget">
                                <label className="form-label">
                                  Return Date
                                </label>
                                <div className="group-img">
                                  <Calendar
                                    className="datetimepicker bg-custom"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.value)}
                                    placeholder="Choose Date"
                                  />
                                  <span className="input-cal-icon">
                                    <i className="bx bx-calendar" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="input-block time-widge">
                                <label className="form-label">
                                  Return Time
                                </label>
                                <div className="group-img style-custom">
                                  <TimePicker className="form-control timepicker bg-light" value={returnTime} onChange={(e) => setReturnTime(e)} />
                                  <span className="input-cal-icon">
                                    <i className="bx bx-time" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="booking-info-btns d-flex justify-content-end">
                      <Link
                        to={routes.listingDetails}
                        className="btn btn-secondary"
                      >
                        Back to Car details
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
                          <div className="booking-sidebar-head">
                            <h5>Booking Details</h5>
                          </div>
                        </div>
                        <div id="accordion_collapse_one" className="accordion-collapse">
                          <div className="booking-sidebar-body">
                            <div className="booking-car-detail">
                              <span className="car-img">
                                <img
                                  src={`http://localhost:4000${bookingData?.car?.images[0]}`}
                                  className="img-fluid"
                                  alt="Car"
                                />
                              </span>
                              <div className="care-more-info">
                                <h5>{bookingData?.car?.name}</h5>

                                <Link to={routes.listingDetails}>View Car Details</Link>
                              </div>
                            </div>
                            <div className="booking-vehicle-rates">
                              <ul>
                                <li>
                                  <div className="rental-charge">
                                    <h6>
                                      Rental Charges
                                    </h6>
                                    <div className="small text-muted mt-1">
                                      {priceBreakdown?.months > 0 && <div>{priceBreakdown.months} Month(s) x ₹{priceBreakdown.monthRate}</div>}
                                      {priceBreakdown?.weeks > 0 && <div>{priceBreakdown.weeks} Week(s) x ₹{priceBreakdown.weekRate}</div>}
                                      {priceBreakdown?.days > 0 && <div>{priceBreakdown.days} Day(s) x ₹{priceBreakdown.dayRate}</div>}
                                      {priceBreakdown?.hours > 0 && (
                                        <div>
                                          {Math.floor(priceBreakdown.hours)} Hour(s) x ₹{priceBreakdown.hourRate || Math.ceil(priceBreakdown.dayRate / 24)}
                                        </div>
                                      )}
                                    </div>
                                    <span className="text-danger">
                                      (This does not include fuel)
                                    </span>
                                  </div>
                                  <h5>₹{totalPrice - deliveryFee}</h5>
                                </li>
                                {bookingType === 'delivery' && (
                                  <li>
                                    <h6>Doorstep delivery ({distanceKM} KM)</h6>
                                    <h5>+ ₹{deliveryFee}</h5>
                                  </li>
                                )}
                                <li className="total-rate">
                                  <h6>Subtotal</h6>
                                  <h5>₹{totalPrice}</h5>
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
                            {/* <div className="booking-sidebar-head d-flex justify-content-between align-items-center">
                            <h5>
                              Coupon
                              <i className="fas fa-chevron-down" />
                            </h5>
                            <Link to="#" className="coupon-view">
                              View Coupons
                            </Link>
                          </div> */}
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
                        <span>₹{totalPrice}</span>
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

export default BookingCheckout;
