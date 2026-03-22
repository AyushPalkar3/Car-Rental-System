import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Breadcrumbs from "../common/breadcrumbs";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { TimePicker } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { all_routes, listingDetailsPath } from "../../router/all_routes";
import dayjs, { type Dayjs } from "dayjs";

import { useDispatch, useSelector } from "react-redux";
import { setBookingDetails } from "./checkoutSlice";
import { couponAPI } from "../../api/user/coupon.api";
import { RentalBreakdownLines } from "./rentalBreakdownLines";

const BookingCheckout = () => {
  const routes = all_routes;
  const locationOptions = [
    { name: "Pune, India", value: "Pune, India" },
    { name: "Mumbai, India", value: "Mumbai, India" },
  ];
  const dispatch: any = useDispatch();
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const bookingData = useSelector((state: any) => state.checkout);

  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    id: string;
    code: string;
    discountAmount: number;
  } | null>(null);
  const [couponLoading, setCouponLoading] = useState(false);
  const [couponInline, setCouponInline] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  const parseCouponApiError = (err: unknown): string => {
    if (typeof err === "string") return err;
    if (err && typeof err === "object") {
      const o = err as Record<string, unknown>;
      if (typeof o.message === "string" && o.message) return o.message;
      if (typeof o.error === "string" && o.error) return o.error;
    }
    return "Could not apply coupon.";
  };

  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [returnLocation, setReturnLocation] = useState("");
  const [startTime, setStartTime] = useState<any>(null);
  const [returnTime, setReturnTime] = useState<any>(null);
  const [bookingType, setBookingType] = useState("delivery");
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const [distanceKM, setDistanceKM] = useState<number>(0);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [sameLocation, setSameLocation] = useState(false);
  const [priceBreakdown, setPriceBreakdown] = useState<any>(null);

  const navigate = useNavigate();

  const toDate = (v: unknown): Date | null => {
    if (v == null || v === "") return null;
    if (v instanceof Date) return Number.isNaN(v.getTime()) ? null : v;
    const d = new Date(v as string);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  /** Calendar controls: use date in local timezone, ignore time-of-day from stored ISO. */
  const toCalendarDate = (v: unknown): Date | null => {
    const d = toDate(v);
    if (!d) return null;
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  };

  const hmToDayjs = (v: unknown): Dayjs | null => {
    if (v != null && typeof v === "object" && typeof (v as Dayjs).hour === "function") {
      const t = v as Dayjs;
      return dayjs().hour(t.hour()).minute(t.minute()).second(0).millisecond(0);
    }
    const o = v as { hour?: number; minute?: number } | null;
    if (o && typeof o.hour === "number" && typeof o.minute === "number") {
      return dayjs().hour(o.hour).minute(o.minute).second(0).millisecond(0);
    }
    return null;
  };

  const dayjsToHm = (t: unknown): { hour: number; minute: number } | null => {
    if (!t || typeof t !== "object" || typeof (t as Dayjs).hour !== "function") {
      return null;
    }
    const d = t as Dayjs;
    return { hour: d.hour(), minute: d.minute() };
  };

  const dateToIso = (d: unknown): string | null => {
    if (!d) return null;
    if (d instanceof Date) {
      return Number.isNaN(d.getTime()) ? null : d.toISOString();
    }
    if (typeof d === "string" && d.trim()) {
      const x = new Date(d);
      return Number.isNaN(x.getTime()) ? null : x.toISOString();
    }
    return null;
  };

  const isDayjsTime = (v: unknown): v is { hour: () => number; minute: () => number } =>
    !!v &&
    typeof v === "object" &&
    typeof (v as { hour?: unknown }).hour === "function";

  // Hydrate form from Redux once per car (includes sessionStorage restore on refresh).
  useLayoutEffect(() => {
    if (!bookingData?.car?.id) return;
    setBookingType(bookingData.rentalType || "delivery");
    setDeliveryLocation(bookingData.deliveryLocation || "");
    setReturnLocation(bookingData.returnLocation || "");
    setStartDate(toCalendarDate(bookingData.startDate));
    setEndDate(toCalendarDate(bookingData.endDate));
    setStartTime(hmToDayjs(bookingData.startTime));
    setReturnTime(hmToDayjs(bookingData.endTime));
    setDistanceKM(bookingData.distanceKM ?? 0);
    setDeliveryFee(bookingData.deliveryFee ?? 0);
    setPriceBreakdown(bookingData.priceBreakdown ?? null);
    if (bookingData.couponId && (bookingData.discountAmount ?? 0) > 0) {
      setAppliedCoupon({
        id: bookingData.couponId,
        code: bookingData.couponCode || "",
        discountAmount: bookingData.discountAmount,
      });
      setCouponInput(bookingData.couponCode || "");
    } else {
      setAppliedCoupon(null);
      setCouponInput("");
    }
  }, [bookingData?.car?.id]);

  const skipCouponResetRef = useRef(true);
  useEffect(() => {
    if (skipCouponResetRef.current) {
      skipCouponResetRef.current = false;
      return;
    }
    setAppliedCoupon(null);
    setCouponInput("");
    setCouponInline(null);
  }, [startDate, endDate, startTime, returnTime, bookingType, distanceKM]);

  const priceBreakdownKey = priceBreakdown
    ? JSON.stringify(priceBreakdown)
    : "";

  useEffect(() => {
    if (!bookingData?.car?.id) return;
    const t = setTimeout(() => {
      dispatch(
        setBookingDetails({
          rentalType: bookingType,
          deliveryLocation,
          returnLocation,
          startDate: dateToIso(startDate),
          endDate: dateToIso(endDate),
          startTime: dayjsToHm(startTime),
          endTime: dayjsToHm(returnTime),
          distanceKM,
          deliveryFee,
          priceBreakdown,
          preDiscountTotal: appliedCoupon ? totalPrice : undefined,
          couponId: appliedCoupon?.id ?? null,
          couponCode: appliedCoupon?.code ?? null,
          discountAmount: appliedCoupon?.discountAmount ?? 0,
        })
      );
    }, 400);
    return () => clearTimeout(t);
  }, [
    bookingData?.car?.id,
    bookingType,
    deliveryLocation,
    returnLocation,
    startDate,
    endDate,
    startTime,
    returnTime,
    distanceKM,
    deliveryFee,
    priceBreakdownKey,
    appliedCoupon,
    appliedCoupon?.id,
    appliedCoupon?.discountAmount,
    totalPrice,
    dispatch,
  ]);

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
      const breakdown: Record<string, number | undefined> = {
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        hourRate: hourPrice,
        dayRate: dayPrice,
        weekRate: weekPrice,
        monthRate: monthPrice,
        proratedHourRate: undefined,
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
        breakdown.proratedHourRate = dayPrice / 24;
      }

      // < 1 month
      else if (totalHours < 720) {
        const fullWeeks = Math.floor(totalHours / 168);
        const remainingHours = totalHours % 168;
        total = fullWeeks * weekPrice + remainingHours * (dayPrice / 24);
        breakdown.weeks = fullWeeks;
        breakdown.hours = remainingHours;
        breakdown.proratedHourRate = dayPrice / 24;
      }

      // >= 1 month
      else {
        const fullMonths = Math.floor(totalHours / 720);
        const remainingHours = totalHours % 720;
        total = fullMonths * monthPrice + remainingHours * (dayPrice / 24);
        breakdown.months = fullMonths;
        breakdown.hours = remainingHours;
        breakdown.proratedHourRate = dayPrice / 24;
      }

      // Calculate Delivery Fee if Home Delivery is selected
      let fee = 0;
      if (bookingType === 'delivery') {
        fee = distanceKM * 25;
      }
      setDeliveryFee(fee);
      setPriceBreakdown(breakdown);

      setTotalPrice(Math.round(total + fee));
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

  const buildPickupReturnIso = () => {
    if (
      !startDate ||
      !endDate ||
      !startTime ||
      !returnTime ||
      !bookingData?.car?.id
    ) {
      return null;
    }
    const start = new Date(startDate);
    start.setHours(startTime.hour());
    start.setMinutes(startTime.minute());
    start.setSeconds(0);
    const end = new Date(endDate);
    end.setHours(returnTime.hour());
    end.setMinutes(returnTime.minute());
    end.setSeconds(0);
    if (end.getTime() <= start.getTime()) return null;
    return {
      pickupDate: start.toISOString(),
      returnDate: end.toISOString(),
    };
  };

  const handleApplyCoupon = async () => {
    const code = couponInput.trim();
    setCouponInline(null);
    if (!code) {
      const t = "Enter a coupon code.";
      setCouponInline({ type: "error", text: t });
      toast.error(t);
      return;
    }
    const dt = buildPickupReturnIso();
    if (!dt) {
      const t = "Choose valid pickup and return date and time first.";
      setCouponInline({ type: "error", text: t });
      toast.error(t);
      return;
    }
    if (totalPrice <= 0) {
      const t = "Set rental dates so the total is greater than zero.";
      setCouponInline({ type: "error", text: t });
      toast.error(t);
      return;
    }
    setCouponLoading(true);
    try {
      const uid =
        userInfo?.user?.id || userInfo?.id || bookingData?.userId;
      const res = await couponAPI.validate({
        code,
        subtotalBeforeDiscount: totalPrice,
        carId: bookingData.car.id,
        pickupDate: dt.pickupDate,
        returnDate: dt.returnDate,
        ...(uid ? { userId: uid } : {}),
      });
      const data = res.data;
      setAppliedCoupon({
        id: data.coupon.id,
        code: data.coupon.code,
        discountAmount: data.discountAmount,
      });
      setCouponInline({
        type: "success",
        text: `${data.coupon.code} applied · You save ₹${data.discountAmount}`,
      });
      toast.success(`Coupon applied · Save ₹${data.discountAmount}`);
    } catch (err: unknown) {
      const msg = parseCouponApiError(err);
      setCouponInline({ type: "error", text: msg });
      toast.error(msg);
      setAppliedCoupon(null);
    } finally {
      setCouponLoading(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput("");
    setCouponInline(null);
  };

  const discountAmt = appliedCoupon?.discountAmount ?? 0;
  const finalDisplayTotal = Math.max(0, Math.round(totalPrice - discountAmt));

  const validateLocationTimeStep = (): string | null => {
    const uid = userInfo?.user?.id || userInfo?.id;
    if (!uid) {
      return "Please sign in to continue with your booking.";
    }
    if (!bookingData?.car?.id) {
      return "No car selected. Go back and choose a car.";
    }
    if (!startDate) return "Please select a start date.";
    if (!endDate) return "Please select a return date.";
    if (!isDayjsTime(startTime)) return "Please select a start time.";
    if (!isDayjsTime(returnTime)) return "Please select a return time.";

    const start = new Date(startDate);
    start.setHours(startTime.hour(), startTime.minute(), 0, 0);
    const end = new Date(endDate);
    end.setHours(returnTime.hour(), returnTime.minute(), 0, 0);
    if (end.getTime() <= start.getTime()) {
      return "Return date and time must be after pickup.";
    }

    if (bookingType === "delivery") {
      if (!String(deliveryLocation).trim()) {
        return "Please enter your delivery address.";
      }
      if (!sameLocation && !String(returnLocation).trim()) {
        return "Please enter your return address (or choose return from the same address).";
      }
    } else {
      if (!String(deliveryLocation).trim()) {
        return "Please select a pickup location.";
      }
      if (!sameLocation && !String(returnLocation).trim()) {
        return "Please select a return location.";
      }
    }

    if (totalPrice <= 0 || !priceBreakdown) {
      return "Rental total is invalid. Check your dates — pricing may be missing for this car.";
    }
    return null;
  };

  // ✅ Continue Booking
  const navigatePath = () => {
    const err = validateLocationTimeStep();
    if (err) {
      toast.error(err);
      return;
    }
    const dt = buildPickupReturnIso();
    if (!dt) {
      toast.error("Pickup or return date/time is invalid.");
      return;
    }
    dispatch(
      setBookingDetails({
        carId: bookingData?.car?.id,
        userId: userInfo?.user?.id || userInfo?.id, // Handle nested user object
        pickupDate: dt.pickupDate,
        returnDate: dt.returnDate,
        startTime: dayjsToHm(startTime),
        endTime: dayjsToHm(returnTime),
        deliveryAddress: deliveryLocation,
        returnAddress: returnLocation,
        bookingType: bookingType,
        totalPrice: finalDisplayTotal,
        color: bookingData?.car?.color,
        hexCode: bookingData?.car?.hexCode,
        pricingId: bookingData?.car?.pricing?.[0]?.id,
        duration: bookingData?.car?.pricing?.[0]?.duration || "DAY",
        distanceKM: distanceKM,
        deliveryFee: deliveryFee,
        priceBreakdown: priceBreakdown,

        preDiscountTotal: appliedCoupon ? totalPrice : undefined,
        couponId: appliedCoupon?.id ?? null,
        couponCode: appliedCoupon?.code ?? null,
        discountAmount: appliedCoupon ? appliedCoupon.discountAmount : 0,

        // keeping original names for UI usage (serializable)
        startDate: dt.pickupDate,
        endDate: dt.returnDate,
        deliveryLocation: deliveryLocation,
        returnLocation: returnLocation,
        totalAmount: finalDisplayTotal,
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
                                    className="datetimepicker bg-custom w-100"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.value)}
                                    placeholder="Select start date"
                                    inputClassName="w-100"
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
                                    className="datetimepicker bg-custom w-100"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.value)}
                                    placeholder="Select return date"
                                    inputClassName="w-100"
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
                        to={
                          bookingData?.car?.id != null
                            ? listingDetailsPath(bookingData.car.id)
                            : routes.listingGrid
                        }
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
                                  <h5>₹{totalPrice - deliveryFee}</h5>
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

                                <Link
                                  to={
                                    bookingData?.car?.id != null
                                      ? listingDetailsPath(bookingData.car.id)
                                      : routes.listingGrid
                                  }
                                >
                                  View Car Details
                                </Link>
                              </div>
                            </div>
                            <div className="booking-vehicle-rates">
                              <ul>
                                <li className="pb-3 mb-2 border-bottom border-light">
                                  <div className="d-flex justify-content-between align-items-start gap-3">
                                    <div className="flex-grow-1 min-width-0">
                                      <h6 className="fw-semibold mb-2">Rental charges</h6>
                                      <RentalBreakdownLines breakdown={priceBreakdown} />
                                      <p className="text-danger small mb-0 mt-2">
                                        Fuel not included in this amount.
                                      </p>
                                    </div>
                                    <h5 className="fw-bold mb-0 text-nowrap flex-shrink-0 pt-1">
                                      ₹{Math.round(totalPrice - deliveryFee)}
                                    </h5>
                                  </div>
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
                                {appliedCoupon && discountAmt > 0 && (
                                  <li>
                                    <h6>
                                      Coupon ({appliedCoupon.code})
                                    </h6>
                                    <h5 className="text-success">− ₹{discountAmt}</h5>
                                  </li>
                                )}
                                <li className="total-rate">
                                  <h6>Total</h6>
                                  <h5>₹{finalDisplayTotal}</h5>
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
                            className="accordion-button"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#accordion_collapse_two"
                            aria-expanded="true"
                          >
                            <div className="booking-sidebar-head d-flex justify-content-between align-items-center w-100 me-2">
                              <h5 className="mb-0">Coupon</h5>
                            </div>
                          </div>
                        </div>
                        <div
                          id="accordion_collapse_two"
                          className="accordion-collapse collapse show"
                        >
                          <div className="booking-sidebar-body">
                            <div className="d-flex align-items-center flex-wrap gap-2">
                              <div className="form-custom flex-fill" style={{ minWidth: "120px" }}>
                                <input
                                  type="text"
                                  className="form-control mb-0"
                                  placeholder="Coupon code"
                                  value={couponInput}
                                  onChange={(e) => {
                                    setCouponInput(e.target.value.toUpperCase());
                                    setCouponInline(null);
                                  }}
                                  disabled={!!appliedCoupon || couponLoading}
                                />
                              </div>
                              {appliedCoupon ? (
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary apply-coupon-btn d-flex align-items-center"
                                  onClick={handleRemoveCoupon}
                                >
                                  Remove
                                </button>
                              ) : (
                                <button
                                  type="button"
                                  className="btn btn-secondary apply-coupon-btn d-flex align-items-center"
                                  onClick={handleApplyCoupon}
                                  disabled={couponLoading}
                                >
                                  {couponLoading ? "…" : "Apply"}
                                  <i className="feather-arrow-right ms-2" />
                                </button>
                              )}
                            </div>
                            {couponInline && (
                              <p
                                className={`small mt-2 mb-0 ${
                                  couponInline.type === "error"
                                    ? "text-danger"
                                    : "text-success"
                                }`}
                                role={
                                  couponInline.type === "error"
                                    ? "alert"
                                    : "status"
                                }
                              >
                                {couponInline.text}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="total-rate-card">
                      <div className="vehicle-total-price">
                        <h5>Estimated Total</h5>
                        <span>₹{finalDisplayTotal}</span>
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
