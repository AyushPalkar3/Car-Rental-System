import { useState, useEffect } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Breadcrumbs from "../common/breadcrumbs";
import { Dropdown } from "primereact/dropdown";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { userAPI } from "../../api/user/user.api";
import { useDispatch, useSelector } from "react-redux";
import { setBookingDetails } from "./checkoutSlice";
import { updateUser } from "../user/userSlice";
const BookingDetail = () => {
  const routes = all_routes;

  const userInfo = useSelector((state: any) => state.user.userInfo);
  const checkoutData = useSelector((state: any) => state.checkout);

  const [selectedPersons, setSelectedPersons] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const persons = [
    { name: "2 Adults, 1 Child" },
    { name: "5 Adults, 2 Child" },
  ];
  const country = [{ name: "USA" }, { name: "UK" }];
  const navigate = useNavigate();





  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    addressLine: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    dlNumber: "",
    dlPdf: "",
    aadhaarPdf: ""
  });

  // const fetchUser = async () => {
  //   const res = await userAPI.getMe();
  //   const user = res.data.user;

  //   setFormData({
  //     firstName: user.firstName || "",
  //     lastName: user.lastName || "",
  //     phoneNum: user.phoneNum || "",
  //     email: user.email || "",
  //     addressLine: user.address?.addressLine || "",
  //     country: user.address?.country || "",
  //     state: user.address?.state || "",
  //     city: user.address?.city || "",
  //     pincode: user.address?.pincode || "",
  //     dlNumber: user.dlNumber || "",
  //     dlPdf: user.dlPdf || "",
  //     aadhaarPdf: user.aadhaarPdf || "",
  //   });
  // };
  useEffect(() => {
    console.log("user info",userInfo)
    if(userInfo){ 
      setFormData({
      firstName: userInfo.user.firstName || "",
      lastName: userInfo.user.lastName || "",
      phoneNum: userInfo.user.phoneNum || "",
      email: userInfo.user.email || "",
      addressLine: userInfo.user.address?.addressLine || "",
      country: userInfo.user.address?.country || "",
      state: userInfo.user.address?.state || "",
      city: userInfo.user.address?.city || "",
      pincode: userInfo.user.address?.pincode || "",
      dlNumber: userInfo.user.dlNumber || "",
      dlPdf: userInfo.user.dlPdf || "",
      aadhaarPdf: userInfo.user.aadhaarPdf || "",
    }); 
  }
  }, [userInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log("Event triger", e)
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const dispatch:any = useDispatch();

  const handleSave = async (e:any) => {
    e.preventDefault();
    await dispatch(updateUser({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      dlNumber: formData.dlNumber,
      dlPdf: formData.dlPdf,
      aadhaarPdf: formData.aadhaarPdf,
      address: {
        addressLine: formData.addressLine,
        country: formData.country,
        state: formData.state,
        city: formData.city,
        pincode: formData.pincode,
      },
    }));
    navigate(routes.bookingPayment);
  };


  const navigatePath = async () => {
    try {

      // const res = await handleSave();
      console.log("Done done")
      navigate(routes.bookingPayment);
    }
    catch (error) {
      console.log(error)
    }
    
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
                    <li className="active activated">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-01.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Location &amp; Time</h6>
                    </li>
                    {/* <li className="active activated">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/booking-head-icon-02.svg"
                          alt="Booking Icon"
                        />
                      </span>
                      <h6>Extra Services</h6>
                    </li> */}
                    <li className="active">
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
                          <h5>Billing Info</h5>
                        </div>
                        
                      </div>
                      <div className="booking-info-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">
                                First Name{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <input
                                name="firstName"
                                onChange={handleChange}
                                value={formData.firstName}
                                type="text"
                                className="form-control"
                                placeholder="Enter First Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">
                                Last Name{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <input
                                name="lastName"
                                onChange={handleChange}
                                type="text"
                                value={formData.lastName}
                                className="form-control"
                                placeholder="Enter Last Name"
                              />
                            </div>
                          </div>
                          {/* <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">
                                No of Persons{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <Dropdown
                                value={selectedPersons}
                                onChange={(e) => setSelectedPersons(e.value)}
                                options={persons}
                                optionLabel="name"
                                placeholder="2 Adults, 1 Child"
                                className="w-100"
                              />
                            </div>
                          </div> */}
                          {/* <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">Company</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Company Name"
                              />
                            </div>
                          </div> */}
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">
                                Street Address{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <input
                                name="addressLine"
                                onChange={handleChange}
                                value={formData.addressLine}
                                type="text"
                                className="form-control"
                                placeholder="Enter Address"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="input-block">
                              <label className="form-label">
                                Country <span className="text-danger"> *</span>
                              </label>
                              <input
                                value={formData.country}
                                name="country"
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter Country"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="input-block">
                              <label className="form-label">
                                Enter City{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <input
                                value={formData.city}
                                name="city"
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="City"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="input-block">
                              <label className="form-label">
                                Pincode <span className="text-danger"> *</span>
                              </label>
                              <input
                                value={formData.pincode}
                                name="pincode"
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter Pincode"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">
                                Email Address{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <input
                                value={formData.email}
                                name="email"
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block">
                              <label className="form-label">
                                Phone Number{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <input
                                disabled
                                value={formData.phoneNum}
                                name="phoneNum"
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone Number"
                              />
                            </div>
                          </div>
                          {/* <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">
                                Additional Information
                              </label>
                              <textarea
                                className="form-control"
                                placeholder="Enter Additional Information"
                                rows={5}
                                defaultValue={""}
                              />
                            </div>
                          </div> */}
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">
                                Driving Licence Number{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <input
                                value={formData.dlNumber}
                                name="dlNumber"
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter Driving Licence Number"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                         <div className="col-md-12">
  <div className="row">

    {/* Driving License Upload */}
    <div className="col-md-6">
      <div className="input-block">
        <label className="form-label">
          Upload Driving License <span className="text-danger">*</span>
        </label>
        <div className="profile-uploader">
          <span className="drag-upload-btn">
            <span className="upload-btn">
              <i className="bx bx-upload me-2" />
              Upload Driving License
            </span>
            or Drag File
          </span>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            id="driving_license"
          />
        </div>
        <p className="img-size-info">
          Max size: 4MB. Formats: jpeg, jpg, png.
        </p>
      </div>
    </div>

    {/* Aadhaar Card Upload */}
    <div className="col-md-6">
      <div className="input-block">
        <label className="form-label">
          Upload Aadhaar Card <span className="text-danger">*</span>
        </label>
        <div className="profile-uploader">
          <span className="drag-upload-btn">
            <span className="upload-btn">
              <i className="bx bx-upload me-2" />
              Upload Aadhaar Card
            </span>
            or Drag File
          </span>
          <input
            type="file"
            accept="image/jpeg,image/jpg,image/png"
            id="aadhaar_card"
          />
        </div>
        <p className="img-size-info">
          Max size: 4MB. Formats: jpeg, jpg, png.
        </p>
      </div>
    </div>

  </div>
</div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block m-0">
                              <label className="custom_check d-inline-flex location-check m-0">
                                <span>
                                  I have Read and Accept Terms &amp; Conditions
                                </span>{" "}
                                <span className="text-danger"> *</span>
                                <input type="checkbox" name="remeber" />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="booking-info-btns d-flex justify-content-end">
                      <Link
                        to={routes.bookingCheckout}
                        className="btn btn-secondary"
                      >
                        Back to Location & Time
                      </Link>
                      <button
                        onClick={handleSave}
                        className="btn btn-primary continue-book-btn"
                        type="submit"
                      >
                        Confirm &amp; Pay Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 theiaStickySidebar">
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
                                  src={`http://localhost:4000${checkoutData?.car?.images[0]}`}
                                  className="img-fluid"
                                  alt="Car"
                                />
                              </span>
                              <div className="care-more-info">
                                <h5>{checkoutData?.car?.name}</h5>
                                <p>{checkoutData?.deliveryLocation}</p>
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
                                      {checkoutData?.priceBreakdown?.months > 0 && <div>{checkoutData.priceBreakdown.months} Month(s) x ₹{checkoutData.priceBreakdown.monthRate}</div>}
                                      {checkoutData?.priceBreakdown?.weeks > 0 && <div>{checkoutData.priceBreakdown.weeks} Week(s) x ₹{checkoutData.priceBreakdown.weekRate}</div>}
                                      {checkoutData?.priceBreakdown?.days > 0 && <div>{checkoutData.priceBreakdown.days} Day(s) x ₹{checkoutData.priceBreakdown.dayRate}</div>}
                                      {checkoutData?.priceBreakdown?.hours > 0 && (
                                        <div>
                                          {Math.floor(checkoutData.priceBreakdown.hours)} Hour(s) x ₹{checkoutData.priceBreakdown.hourRate || Math.ceil(checkoutData.priceBreakdown.dayRate / 24)}
                                        </div>
                                      )}
                                    </div>
                                    <span className="text-danger">
                                      (This does not include fuel)
                                    </span>
                                  </div>
                                  <h5>₹{checkoutData?.totalAmount - (checkoutData?.deliveryFee || 0)}</h5>
                                </li>
                                {checkoutData?.deliveryFee > 0 && (
                                  <li>
                                    <h6>Delivery Fee ({checkoutData?.distanceKM} KM)</h6>
                                    <h5>+ ₹{checkoutData?.deliveryFee}</h5>
                                  </li>
                                )}
                                <li className="total-rate">
                                  <h6>Total</h6>
                                  <h5>₹{checkoutData?.totalAmount}</h5>
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
                        <span>₹{checkoutData?.totalAmount}</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal new-modal multi-step fade"
        id="sign_in_modal"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-auth">
                    <div className="login-auth-wrap">
                      <h1>Sign In</h1>
                      <p className="account-subtitle">
                        We&apos;ll send a confirmation code to your email.
                      </p>
                      <form>
                        <div className="input-block">
                          <label className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                          />
                        </div>
                        <div className="input-block">
                          <label className="form-label">
                            Password <span className="text-danger">*</span>
                          </label>
                          <div className="pass-group">
                            <input
                              type="password"
                              className="form-control pass-input"
                              placeholder="............."
                            />
                            <span className="fas fa-eye-slash toggle-password" />
                          </div>
                        </div>
                        <div className="input-block text-end">
                          <Link
                            className="forgot-link"
                            to={routes.forgotPassword}
                          >
                            Forgot Password ?
                          </Link>
                        </div>
                        <div className="input-block m-0">
                          <label className="custom_check d-inline-flex">
                            <span>Remember me</span>
                            <input type="checkbox" name="remeber" />
                            <span className="checkmark" />
                          </label>
                        </div>
                        <Link
                          to={routes.homeOne}
                          className="btn btn-outline-light w-100 btn-size mt-1"
                        >
                          Sign In
                        </Link>
                        <div className="login-or">
                          <span className="or-line" />
                          <span className="span-or-log">
                            Or, log in with your email
                          </span>
                        </div>
                        {/* Social Login */}
                        <div className="social-login">
                          <Link
                            to="#"
                            className="d-flex align-items-center justify-content-center input-block btn google-login w-100"
                          >
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/google.svg"
                                className="img-fluid"
                                alt="Google"
                              />
                            </span>
                            Log in with Google
                          </Link>
                        </div>
                        <div className="social-login">
                          <Link
                            to="#"
                            className="d-flex align-items-center justify-content-center input-block btn google-login w-100"
                          >
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/facebook.svg"
                                className="img-fluid"
                                alt="Facebook"
                              />
                            </span>
                            Log in with Facebook
                          </Link>
                        </div>
                        {/* /Social Login */}
                        <div className="text-center dont-have">
                          Don&apos;t have an account ?{" "}
                          <Link to={routes.register}>Sign Up</Link>
                        </div>
                      </form>
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

export default BookingDetail;
