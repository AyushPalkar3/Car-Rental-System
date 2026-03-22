import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Breadcrumbs from "../common/breadcrumbs";
import { Dropdown } from "primereact/dropdown";
import { Link, useNavigate } from "react-router-dom";
import { all_routes, listingDetailsPath } from "../../router/all_routes";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../user/userSlice";
import { RentalBreakdownLines } from "./rentalBreakdownLines";

const UPLOAD_API_ORIGIN = (
  import.meta.env.VITE_API_BASE_URL_IMAGE ||
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:4000"
).replace(/\/$/, "");

function resolveUploadDocHref(pathOrUrl: string | null | undefined): string | null {
  const s = String(pathOrUrl || "").trim();
  if (!s) return null;
  if (/^https?:\/\//i.test(s)) return s;
  return s.startsWith("/") ? `${UPLOAD_API_ORIGIN}${s}` : `${UPLOAD_API_ORIGIN}/${s}`;
}

function basenameFromDocPath(pathOrUrl: string): string {
  const s = pathOrUrl.trim().split("?")[0];
  if (!s) return "";
  const part = s.split("/").filter(Boolean).pop() || s;
  try {
    return decodeURIComponent(part);
  } catch {
    return part;
  }
}

const BookingDetail = () => {
  const routes = all_routes;

  const userInfo = useSelector((state: any) => state.user.userInfo);
  const checkoutData = useSelector((state: any) => state.checkout);

  const [selectedPersons, setSelectedPersons] = useState(null);

  const persons = [
    { name: "2 Adults, 1 Child" },
    { name: "5 Adults, 2 Child" },
  ];
  const navigate = useNavigate();
  const DEFAULT_COUNTRY = "India";
  const MAX_DOC_BYTES = 4 * 1024 * 1024;
  const DOC_ACCEPT = "application/pdf,.pdf";
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [pickedDocNames, setPickedDocNames] = useState({
    dl: "",
    aadhaar: "",
    addressProof: "",
  });
  const dlFileRef = useRef<HTMLInputElement>(null);
  const aadhaarFileRef = useRef<HTMLInputElement>(null);
  const addressProofFileRef = useRef<HTMLInputElement>(null);

  const emailOk = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(s).trim());

  const validateDocFile = (file: File | undefined): string | null => {
    if (!file) return null;
    if (file.size > MAX_DOC_BYTES) {
      return "Each document must be 4MB or smaller.";
    }
    const extOk = /\.pdf$/i.test(file.name || "");
    const t = file.type || "";
    const typeOk =
      !t ||
      t === "application/pdf" ||
      t === "application/x-pdf" ||
      (t === "application/octet-stream" && extOk);
    if (!typeOk && !extOk) {
      return "Only PDF documents are allowed (max 4MB).";
    }
    return null;
  };

  const validateBillingStep = (): string | null => {
    const profile = userInfo?.user ?? userInfo;
    const uid = profile?.id ?? userInfo?.id;
    if (!uid) {
      return "Please sign in to continue.";
    }
    if (!termsAccepted) {
      return "Please tick the box to confirm you have read and accept the Terms & Conditions.";
    }
    if (!String(formData.firstName).trim()) return "Please enter your first name.";
    if (!String(formData.lastName).trim()) return "Please enter your last name.";
    if (!String(formData.addressLine).trim()) return "Please enter your street address.";
    if (!String(formData.state).trim()) return "Please enter your state or region.";
    if (!String(formData.city).trim()) return "Please enter your city.";
    if (!String(formData.pincode).trim()) return "Please enter your pincode.";
    if (!String(formData.email).trim()) return "Please enter your email address.";
    if (!emailOk(formData.email)) return "Please enter a valid email address.";
    if (!String(formData.phoneNum).trim()) {
      return "Phone number is missing. Please sign in again.";
    }
    const hasAadhaar =
      String(formData.aadhaarPdf || "").trim().length > 0 ||
      (aadhaarFileRef.current?.files?.length ?? 0) > 0;
    const hasAddressProof =
      String(formData.addressProofPdf || "").trim().length > 0 ||
      (addressProofFileRef.current?.files?.length ?? 0) > 0;
    if (!hasAadhaar) {
      return "Please upload your Aadhaar card as a PDF (max 4MB).";
    }
    if (!hasAddressProof) {
      return "Please upload your address proof as a PDF (max 4MB).";
    }
    const dlPick = dlFileRef.current?.files?.[0];
    const aadhaarPick = aadhaarFileRef.current?.files?.[0];
    const addressProofPick = addressProofFileRef.current?.files?.[0];
    const errDl = validateDocFile(dlPick);
    if (errDl) return errDl;
    const errAadhaar = validateDocFile(aadhaarPick);
    if (errAadhaar) return errAadhaar;
    const errAddr = validateDocFile(addressProofPick);
    if (errAddr) return errAddr;
    return null;
  };



  const [formData, setFormData] = useState<any>({
    firstName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    addressLine: "",
    state: "",
    city: "",
    pincode: "",
    dlNumber: "",
    dlPdf: "",
    aadhaarPdf: "",
    addressProofPdf: ""
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
    if (!userInfo) return;
    const u = (userInfo as { user?: Record<string, unknown> }).user ?? userInfo;
    if (!u || typeof u !== "object") return;
    const row = u as Record<string, any>;
    setFormData({
      firstName: row.firstName || "",
      lastName: row.lastName || "",
      phoneNum: row.phoneNum || "",
      email: row.email || "",
      addressLine: row.address?.addressLine || "",
      state: row.address?.state || "",
      city: row.address?.city || "",
      pincode: row.address?.pincode || "",
      dlNumber: row.dlNumber || "",
      dlPdf: row.dlPdf || "",
      aadhaarPdf: row.aadhaarPdf || "",
      addressProofPdf: row.addressProofPdf || "",
    });
  }, [userInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log("Event triger", e)
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleDocPick =
    (key: "dl" | "aadhaar" | "addressProof") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const f = e.target.files?.[0];
      setPickedDocNames((prev) => ({ ...prev, [key]: f?.name || "" }));
    };

  const renderDocUploadStatus = (
    key: "dl" | "aadhaar" | "addressProof",
    savedPath: string
  ) => {
    const picked = pickedDocNames[key];
    const saved = String(savedPath || "").trim();
    if (!picked && !saved) return null;
    const href = !picked && saved ? resolveUploadDocHref(saved) : null;
    const displayName = picked || basenameFromDocPath(saved);
    return (
      <div
        className="uploaded-doc-status mt-2 p-2 rounded border d-flex align-items-start gap-2 flex-wrap"
        style={{ background: "#f8f9fa", borderColor: "#dee2e6" }}
      >
        <i className="bx bxs-file-pdf text-danger fs-4 flex-shrink-0" aria-hidden />
        <div className="small flex-grow-1 min-width-0">
          <div className="fw-semibold text-success">
            {picked ? "Selected for upload" : "Already on file"}
          </div>
          <div className="text-dark text-break" title={displayName}>
            {displayName}
          </div>
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-dark flex-shrink-0 align-self-center"
          >
            View PDF
          </a>
        ) : null}
      </div>
    );
  };

  const dispatch:any = useDispatch();

  const handleSave = async (e: any) => {
    e.preventDefault();
    const validationError = validateBillingStep();
    if (validationError) {
      toast.error(validationError);
      return;
    }
    try {
      await dispatch(
        updateUser({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          dlNumber: formData.dlNumber,
          dlPdf: formData.dlPdf,
          aadhaarPdf: formData.aadhaarPdf,
          addressProofPdf: formData.addressProofPdf,
          dlFile: dlFileRef.current?.files?.[0],
          aadhaarFile: aadhaarFileRef.current?.files?.[0],
          addressProofFile: addressProofFileRef.current?.files?.[0],
          address: {
            addressLine: formData.addressLine,
            country: DEFAULT_COUNTRY,
            state: formData.state,
            city: formData.city,
            pincode: formData.pincode,
          },
        })
      ).unwrap();
      navigate(routes.bookingPayment);
    } catch (err: unknown) {
      let msg = "Could not save your details. Try again.";
      if (typeof err === "string") msg = err;
      else if (err instanceof Error) msg = err.message || msg;
      else if (err && typeof err === "object" && "message" in err) {
        const m = (err as { message: unknown }).message;
        if (typeof m === "string" && m) msg = m;
      }
      toast.error(msg);
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
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      void handleSave(e);
                    }}
                  >
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
                                State / Region{" "}
                                <span className="text-danger"> *</span>
                              </label>
                              <input
                                value={formData.state}
                                name="state"
                                onChange={handleChange}
                                type="text"
                                className="form-control"
                                placeholder="State"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="input-block">
                              <label className="form-label">
                                City <span className="text-danger"> *</span>
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
                                Driving Licence Number
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

    {/* Driving License Upload (optional) */}
    <div className="col-md-4">
      <div className="input-block">
        <label className="form-label">Upload Driving License</label>
        <div className="profile-uploader">
          <span className="drag-upload-btn">
            <span className="upload-btn">
              <i className="bx bx-upload me-2" />
              Upload Driving License
            </span>
            or Drag File
          </span>
          <input
            ref={dlFileRef}
            name="dlPdf"
            type="file"
            accept={DOC_ACCEPT}
            id="driving_license"
            onChange={handleDocPick("dl")}
          />
        </div>
        {renderDocUploadStatus("dl", formData.dlPdf)}
        <p className="img-size-info">
          Max size: 4MB. PDF only.
        </p>
      </div>
    </div>

    {/* Aadhaar Card Upload */}
    <div className="col-md-4">
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
            ref={aadhaarFileRef}
            name="aadhaarPdf"
            type="file"
            accept={DOC_ACCEPT}
            id="aadhaar_card"
            onChange={handleDocPick("aadhaar")}
          />
        </div>
        {renderDocUploadStatus("aadhaar", formData.aadhaarPdf)}
        <p className="img-size-info">
          Max size: 4MB. PDF only.
        </p>
      </div>
    </div>

    {/* Address proof (required) */}
    <div className="col-md-4">
      <div className="input-block">
        <label className="form-label">
          Upload Address Proof <span className="text-danger">*</span>
        </label>
        <div className="profile-uploader">
          <span className="drag-upload-btn">
            <span className="upload-btn">
              <i className="bx bx-upload me-2" />
              Upload Address Proof
            </span>
            or Drag File
          </span>
          <input
            ref={addressProofFileRef}
            name="addressProofPdf"
            type="file"
            accept={DOC_ACCEPT}
            id="address_proof"
            onChange={handleDocPick("addressProof")}
          />
        </div>
        {renderDocUploadStatus("addressProof", formData.addressProofPdf)}
        <p className="img-size-info">
          Max size: 4MB. PDF only.
        </p>
      </div>
    </div>

  </div>
</div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block m-0">
                              <label className="custom_check d-inline-flex location-check m-0 align-items-center">
                                <input
                                  type="checkbox"
                                  name="termsAccepted"
                                  id="booking_terms_accepted"
                                  checked={termsAccepted}
                                  onChange={(e) =>
                                    setTermsAccepted(e.target.checked)
                                  }
                                />
                                <span className="checkmark" />
                                <span className="ms-2" style={{ color: "#212529" }}>
                                  I have Read and Accept Terms &amp; Conditions
                                </span>
                                <span className="text-danger" style={{ color: "#dc3545" }}>
                                  {" "}
                                  *
                                </span>
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
                        onClick={(e) => {
                          e.preventDefault();
                          void handleSave(e);
                        }}
                        className="btn btn-dark text-white continue-book-btn"
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
                                <Link
                                  to={
                                    checkoutData?.car?.id != null
                                      ? listingDetailsPath(checkoutData.car.id)
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
                                      <RentalBreakdownLines
                                        breakdown={checkoutData?.priceBreakdown}
                                      />
                                      <p className="text-danger small mb-0 mt-2">
                                        Fuel not included in this amount.
                                      </p>
                                    </div>
                                    <h5 className="fw-bold mb-0 text-nowrap flex-shrink-0 pt-1">
                                      ₹
                                      {Math.round(
                                        (checkoutData?.preDiscountTotal != null
                                          ? checkoutData.preDiscountTotal
                                          : checkoutData?.totalAmount ?? 0) -
                                          (checkoutData?.deliveryFee || 0)
                                      )}
                                    </h5>
                                  <h5>
                                    ₹
                                    {(checkoutData?.preDiscountTotal != null
                                      ? checkoutData.preDiscountTotal
                                      : checkoutData?.totalAmount ?? 0) -
                                      (checkoutData?.deliveryFee || 0)}
                                  </h5>
                                  </div>
                                </li>
                                {checkoutData?.deliveryFee > 0 && (
                                  <li>
                                    <h6>Delivery Fee ({checkoutData?.distanceKM} KM)</h6>
                                    <h5>+ ₹{checkoutData?.deliveryFee}</h5>
                                  </li>
                                )}
                                {(checkoutData?.discountAmount ?? 0) > 0 && (
                                  <li>
                                    <h6>
                                      Coupon ({checkoutData?.couponCode || "—"})
                                    </h6>
                                    <h5 className="text-success">
                                      − ₹{checkoutData.discountAmount}
                                    </h5>
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
                          data-bs-target="#accordion_collapse_two_detail"
                          aria-expanded="false"
                        >
                          <div className="booking-sidebar-head d-flex justify-content-between align-items-center">
                            <h5 className="mb-0">Coupon</h5>
                          </div>
                        </div>
                      </div>
                      <div
                        id="accordion_collapse_two_detail"
                        className="accordion-collapse collapse"
                      >
                        <div className="booking-sidebar-body">
                          {(checkoutData?.discountAmount ?? 0) > 0 ? (
                            <p className="small text-success mb-0">
                              {checkoutData.couponCode} applied · −₹
                              {checkoutData.discountAmount}
                            </p>
                          ) : (
                            <p className="small text-muted mb-0">
                              Add a coupon on the previous step (Location &amp;
                              Time).
                            </p>
                          )}
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
