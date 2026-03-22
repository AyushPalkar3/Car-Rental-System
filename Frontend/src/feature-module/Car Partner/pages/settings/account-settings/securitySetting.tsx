import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { toast } from "react-toastify";
import { all_routes } from "../../../../../router/all_routes";
import {
  carPartnerAccountAPI,
  type ApiErrorBody,
} from "../../../service/api/carPartnerAccount.api";

const formatAccountError = (err: unknown): string => {
  if (typeof err === "string") return err;
  if (!err || typeof err !== "object") return "Something went wrong";
  const body = err as ApiErrorBody & { error?: unknown };
  if (typeof body.message === "string" && body.message.trim()) {
    return body.message.trim();
  }
  if (Array.isArray(body.errors) && body.errors.length > 0) {
    const first = body.errors[0];
    if (typeof first === "string") return first;
    if (first && typeof first === "object" && "message" in first) {
      const m = (first as { message?: unknown }).message;
      if (typeof m === "string" && m.trim()) return m.trim();
    }
  }
  if (typeof body.error === "string" && body.error.trim()) return body.error.trim();
  return "Something went wrong";
};

/** Prefer field-specific message when API sends `errors[]` */
const formatAccountErrorForField = (
  err: unknown,
  field: string
): string | null => {
  if (!err || typeof err !== "object") return null;
  const body = err as ApiErrorBody;
  if (!Array.isArray(body.errors)) return null;
  for (const item of body.errors) {
    if (typeof item === "object" && item && "field" in item && item.field === field) {
      if (typeof item.message === "string") return item.message;
    }
  }
  return null;
};
const hasNumber = (value: string): boolean => {
  return /[0-9]/.test(value);
};

const hasMixed = (value: string): boolean => {
  return /[a-z]/.test(value) && /[A-Z]/.test(value);
};

const hasSpecial = (value: string): boolean => {
  return /[!#@$%^&*)(+=._-]/.test(value);
};

const strengthColor = (count: number): string => {
  if (count < 1) return "poor";
  if (count < 2) return "weak";
  if (count < 3) return "strong";
  if (count < 4) return "heavy";
  return "poor"; // Default return to ensure it's always a string
};
const SecuritySetting = () => {
  const [eye, setEye] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<number>(0);
  const [strength, setStrength] = useState<string>("");
  const [currentPassword, setCurrentPassword] = useState<boolean>(true);
  const [currentPassword2, setCurrentPassword2] = useState<boolean>(true);
  const [currentPassword3, setCurrentPassword3] = useState<boolean>(true);
  const [currentPwdValue, setCurrentPwdValue] = useState<string>("");
  const [confirmPwdValue, setConfirmPwdValue] = useState<string>("");
  const [passwordSubmitting, setPasswordSubmitting] = useState<boolean>(false);
  const [changePasswordApiError, setChangePasswordApiError] = useState<string>("");
  const [currentPasswordApiInvalid, setCurrentPasswordApiInvalid] = useState(false);

  const onEyeClick = () => {
    setEye((prev) => !prev);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const validatePassword = (value: string) => {
    if (!value) {
      setValidationError(1);
    } else if (value.length < 8) {
      setValidationError(2);
    } else if (!/[0-9]/.test(value)) {
      setValidationError(3);
    } else if (!/[!@#$%^&*()]/.test(value)) {
      setValidationError(4);
    } else {
      setValidationError(5);
    }
  };
  const messages = () => {
    switch (validationError) {
      case 2:
        return (
          <span
            id="poor"
            className="active mt-2"
            style={{ fontSize: 14, color: "#DC3545", marginTop: "8px" }}
          >
            <ImageWithBasePath
              src="assets/admin/img/icon/angry.svg"
              className="me-2"
              alt=""
            />{" "}
            Weak. Must contain at least 8 characters
          </span>
        );
      case 3:
        return (
          <span
            id="weak"
            className="active  mt-2"
            style={{ fontSize: 14, color: "#FFC107", marginTop: "8px" }}
          >
            <ImageWithBasePath
              src="assets/admin/img/icon/anguish.svg"
              className="me-2"
              alt=""
            />{" "}
            Average. Must contain at least 1 letter or number
          </span>
        );
      case 4:
        return (
          <span
            id="strong"
            className="active  mt-2"
            style={{ fontSize: 14, color: "#0D6EFD", marginTop: "8px" }}
          >
            <ImageWithBasePath
              src="assets/admin/img/icon/smile.svg"
              className="me-2"
              alt=""
            />{" "}
            Almost. Must contain special symbol
          </span>
        );
      case 5:
        return (
          <span
            id="heavy"
            className="active  mt-2"
            style={{ fontSize: 14, color: "#4BB543", marginTop: "8px" }}
          >
            <ImageWithBasePath
              src="assets/admin/img/icon/smile.svg"
              className="me-2"
              alt=""
            />{" "}
            Awesome! You have a secure password.
          </span>
        );
      default:
        return null;
    }
  };

  const strengthIndicator = (value: string): number => {
    let strengths = 0;
    if (value.length >= 8) strengths = 1;
    if (hasNumber(value) && value.length >= 8) strengths = 2;
    if (hasSpecial(value) && value.length >= 8 && hasNumber(value))
      strengths = 3;
    if (
      hasMixed(value) &&
      hasSpecial(value) &&
      value.length >= 8 &&
      hasNumber(value)
    )
      strengths = 3;
    return strengths;
  };

  useEffect(() => {
    if (password) {
      const strengthValue = strengthIndicator(password);
      const color = strengthColor(strengthValue);
      setStrength(color);
    } else {
      setStrength("");
    }
  }, [password]);

  const closeChangePasswordModal = () => {
    const el = document.getElementById("change_password");
    const bootstrap = (window as unknown as { bootstrap?: { Modal: { getInstance: (node: HTMLElement) => { hide: () => void } | null; new (node: HTMLElement): { hide: () => void } } } }).bootstrap;
    if (el && bootstrap) {
      const instance = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
      instance.hide();
    }
  };

  const handlePasswordSave = async () => {
    setChangePasswordApiError("");
    setCurrentPasswordApiInvalid(false);

    if (!currentPwdValue.trim()) {
      setChangePasswordApiError("Current password is required");
      setCurrentPasswordApiInvalid(true);
      toast.error("Current password is required");
      return;
    }
    if (validationError !== 5) {
      toast.error("Choose a stronger new password (8+ characters, number, special character)");
      return;
    }
    if (password !== confirmPwdValue) {
      toast.error("New password and confirmation do not match");
      return;
    }
    if (currentPwdValue === password) {
      toast.error("New password must be different from your current password");
      return;
    }

    setPasswordSubmitting(true);
    try {
      await carPartnerAccountAPI.changePassword({
        currentPassword: currentPwdValue,
        newPassword: password,
        confirmPassword: confirmPwdValue,
      });
      toast.success("Password changed successfully");
      setChangePasswordApiError("");
      setCurrentPasswordApiInvalid(false);
      setCurrentPwdValue("");
      setPassword("");
      setConfirmPwdValue("");
      setValidationError(0);
      setStrength("");
      closeChangePasswordModal();
    } catch (err) {
      const currentFieldMsg = formatAccountErrorForField(err, "currentPassword");
      const fieldMsg =
        currentFieldMsg ||
        formatAccountErrorForField(err, "newPassword") ||
        formatAccountErrorForField(err, "confirmPassword");
      const msg = fieldMsg || formatAccountError(err);
      const currentPwdWrong =
        !!currentFieldMsg ||
        /incorrect current password|wrong password|current password is wrong/i.test(msg);
      setCurrentPasswordApiInvalid(currentPwdWrong);
      setChangePasswordApiError(msg);
      toast.error(msg);
    } finally {
      setPasswordSubmitting(false);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h5>Account Settings</h5>
        </div>
        <div className="card-body">
          <div className="security-content">
            <h6 className="mb-3">Security</h6>
            <div className="card mb-3">
              <div className="card-body">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-9">
                    <div className="row gy-3 align-items-center">
                      <div className="col-md-6">
                        <div>
                          <h6 className="fs-14 fw-medium">Password</h6>
                          <p className="fs-13">
                            Set a unique password to secure the account
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        {/* <div>
                          <p>
                            <i className="ti ti-circle-check-filled text-success me-1" />
                            Last Changed 22 Jan 2025, 10:30 AM
                          </p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex justify-content-lg-end">
                      <Link
                        to="#"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#change_password"
                      >
                        Change
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="card mb-3">
              <div className="card-body">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-9">
                    <div className="row gy-3 align-items-center">
                      <div className="col-md-6">
                        <div>
                          <h6 className="fs-14 fw-medium">
                            Google Authentication
                          </h6>
                          <p className="fs-13">Connect to Google</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                            {" "}
                            <i className="ti ti-point-filled text-success" />
                            Connected
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex justify-content-end">
                      <div className="form-check form-check-md form-switch">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="card mb-3">
              <div className="card-body">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-9">
                    <div className="row gy-3 align-items-center">
                      <div className="col-md-6">
                        <div>
                          <h6 className="fs-14 fw-medium">
                            Phone Number Verification
                          </h6>
                          <p className="fs-13">Connect to Google</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <p>
                            <i className="ti ti-circle-check-filled text-success me-1" />
                            Verified Mobile Number : +1 648 349 1782
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex justify-content-lg-end">
                      <Link to="#" className="btn btn-light me-2">
                        Remove
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#change_phonenumber"
                      >
                        Change
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="card mb-3">
              <div className="card-body">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-9">
                    <div className="row gy-3 align-items-center">
                      <div className="col-md-6">
                        <div>
                          <h6 className="fs-14 fw-medium">
                            Email Verification
                          </h6>
                          <p className="fs-13">
                            The Email associated with the account
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <p>
                            <i className="ti ti-circle-check-filled text-success me-1" />
                            Verified Email : info@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex justify-content-lg-end">
                      <Link to="#" className="btn btn-light me-2">
                        Remove
                      </Link>
                      <Link
                        to="#"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#change_email"
                      >
                        Change
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="card mb-3">
              <div className="card-body">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-9">
                    <div>
                      <h6 className="fs-14 fw-medium">Deactivate Account</h6>
                      <p className="fs-13">
                        This will shutdown your account. Your account will be
                        reactive when you sign in again
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex justify-content-lg-end">
                      <Link to="#" className="btn btn-dark">
                        Deactivate
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="card mb-3">
              <div className="card-body">
                <div className="row gy-3 align-items-center">
                  <div className="col-lg-9">
                    <div>
                      <h6 className="fs-14 fw-medium">Delete Account</h6>
                      <p className="fs-13">
                        Your account will be permanently deleted
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="d-flex justify-content-lg-end">
                      <Link
                        to="#"
                        className="btn btn-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_account"
                      >
                        Delete
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="card mb-0">
              <div className="card-body">
                <div className="mb-3">
                  <div className="row gy-3 align-items-center">
                    <div className="col-lg-9">
                      <div>
                        <h6 className="fs-14 fw-medium">
                          Browsers &amp; Devices
                        </h6>
                        <p className="fs-13">
                          The browsers &amp; devices associated with the account
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex justify-content-lg-end">
                        <Link to="#" className="btn btn-dark">
                          Sign out from all
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="custom-datatable-filter table-responsive brandstable security-table">
                  <table className="table datatable">
                    <thead className="thead-light">
                      <tr>
                        <th>DEVICE</th>
                        <th>DATE</th>
                        <th>IP ADDRESS</th>
                        <th>LOCATION</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <h6 className="fs-14">Chrome - Windows</h6>
                        </td>
                        <td>
                          <p className="text-gray-9">24 Jan 2025, 10:00 AM</p>
                        </td>
                        <td>
                          <p className="text-gray-9">232.222.12.72</p>
                        </td>
                        <td>
                          <p className="text-gray-9">New York / USA</p>
                        </td>
                        <td>
                          <div className="action-btn">
                            <Link to="#" className="p-1">
                              <i className="ti ti-logout text-dark" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="fs-14">Safari Macos</h6>
                        </td>
                        <td>
                          <p className="text-gray-9">19 Dec 2024, 09:30 AM</p>
                        </td>
                        <td>
                          <p className="text-gray-9">224.111.12.75</p>
                        </td>
                        <td>
                          <p className="text-gray-9">New York / USA</p>
                        </td>
                        <td>
                          <div className="action-btn">
                            <Link to="#" className="p-1">
                              <i className="ti ti-logout text-dark" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="fs-14">Firefox Windows</h6>
                        </td>
                        <td>
                          <p className="text-gray-9">11 Dec 2024, 05:20 PM</p>
                        </td>
                        <td>
                          <p className="text-gray-9">111.222.13.28</p>
                        </td>
                        <td>
                          <p className="text-gray-9">New York / USA</p>
                        </td>
                        <td>
                          <div className="action-btn">
                            <Link to="#" className="p-1">
                              <i className="ti ti-logout text-dark" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6 className="fs-14">Safari Macos</h6>
                        </td>
                        <td>
                          <p className="text-gray-9">29 Nov 2024, 04:45 PM</p>
                        </td>
                        <td>
                          <p className="text-gray-9">333.555.10.54</p>
                        </td>
                        <td>
                          <p className="text-gray-9">New York / USA</p>
                        </td>
                        <td>
                          <div className="action-btn">
                            <Link to="#" className="p-1">
                              <i className="ti ti-logout text-dark" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Change-password */}
      <div className="modal fade" id="change_password">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Change Password</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setChangePasswordApiError("");
                  setCurrentPasswordApiInvalid(false);
                }}
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              {changePasswordApiError ? (
                <div className="alert alert-danger mb-3 py-2" role="alert">
                  {changePasswordApiError}
                </div>
              ) : null}
              <div className="mb-3">
                <label className="form-label">
                  Current Password <span className="text-danger">*</span>
                </label>
                <div className="pass-group">
                  <input
                    type={currentPassword ? "password" : "text"}
                    className={`pass-inputs form-control${currentPasswordApiInvalid ? " is-invalid" : ""}`}
                    value={currentPwdValue}
                    onChange={(e) => {
                      setCurrentPwdValue(e.target.value);
                      setChangePasswordApiError("");
                      setCurrentPasswordApiInvalid(false);
                    }}
                    autoComplete="current-password"
                  />
                  <span onClick={()=>setCurrentPassword((prev) => !prev)}
                      className={`ti toggle-password  ${
                        currentPassword ? "ti-eye-off" : "ti-eye"
                      }`} />
                </div>
              </div>
              <div className="input-block mb-3">
                <div className="mb-3">
                  <label className="form-label">
                    New Password <span className="text-danger">*</span>
                  </label>
                  <div className="pass-group" id="passwordInput">
                    <input
                      type={eye ? "password" : "text"}
                      onChange={handlePasswordChange}
                      className="form-control pass-input"
                      value={password}
                      autoComplete="new-password"
                    />
                    <span
                      onClick={onEyeClick}
                      className={`ti toggle-password  ${
                        eye ? "ti-eye-off" : "ti-eye"
                      }`}
                    />
                  </div>
                </div>
                <div
                  id="passwordStrength"
                  style={{ display: "flex" }}
                  className={`password-strength ${
                    strength === "poor"
                      ? "poor-active"
                      : strength === "weak"
                        ? "avg-active"
                        : strength === "strong"
                          ? "strong-active"
                          : strength === "heavy"
                            ? "heavy-active"
                            : ""
                  }`}
                >
                  <span id="poor" className="active"></span>
                  <span id="weak" className="active"></span>
                  <span id="strong" className="active"></span>
                  <span id="heavy" className="active"></span>
                </div>
                <div id="passwordInfo" className="mb-2">
                  {messages()}
                </div>
                <p className="fs-12">
                  Use 8 or more characters with a mix of letters, numbers &amp;
                  symbols.
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Confirm Password <span className="text-danger">*</span>
                </label>
                <div className="pass-group">
                <input
                    type={confirmPassword ? "password" : "text"}
                    className="pass-inputs form-control"
                    value={confirmPwdValue}
                    onChange={(e) => setConfirmPwdValue(e.target.value)}
                    autoComplete="new-password"
                  />
                  <span onClick={()=>setConfirmPassword((prev) => !prev)}
                      className={`ti toggle-password  ${
                        confirmPassword ? "ti-eye-off" : "ti-eye"
                      }`} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setChangePasswordApiError("");
                    setCurrentPasswordApiInvalid(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={passwordSubmitting}
                  onClick={() => void handlePasswordSave()}
                >
                  {passwordSubmitting ? "Saving…" : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Change-password */}
      {/* Change-phone-number */}
      <div className="modal fade" id="change_phonenumber">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Change Phone Number</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">
                  Current Phone Number<span className="text-danger">*</span>
                </label>
                <div>
                  <input type="password" className="form-control" id="phone" />
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-3">
                  <label className="form-label">
                    New Phone Number <span className="text-danger">*</span>
                  </label>
                  <div>
                    <input
                      type="password"
                      className="form-control"
                      id="phone2"
                    />
                  </div>
                </div>
                <p className="d-flex align-items-center">
                  <i className="ti ti-info-circle me-1" />
                  New phone number only updated once you verified{" "}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Current Password <span className="text-danger">*</span>
                </label>
                <div className="pass-group">
                <input type={currentPassword2 ? "password" : "text"} className="pass-inputs form-control" />
                  <span onClick={()=>setCurrentPassword2((prev) => !prev)}
                      className={`ti toggle-password  ${
                        currentPassword2 ? "ti-eye-off" : "ti-eye"
                      }`} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to={all_routes.carPartnerSecuritySettings} className="btn btn-primary">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Change-phone-number */}
      {/* Change-email */}
      <div className="modal fade" id="change_email">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Change Email Address</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">
                  Current Email Address <span className="text-danger">*</span>
                </label>
                <div>
                  <input type="password" className="form-control" />
                </div>
              </div>
              <div className="mb-3">
                <div className="mb-3">
                  <label className="form-label">
                    New Email Address <span className="text-danger">*</span>
                  </label>
                  <div>
                    <input type="password" className="form-control" />
                  </div>
                </div>
                <p className="d-flex align-items-center">
                  <i className="ti ti-info-circle me-1" />
                  New email address only updated once you verified{" "}
                </p>
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Current Password <span className="text-danger">*</span>
                </label>
                <div className="pass-group">
                <input type={currentPassword3 ? "password" : "text"} className="pass-inputs form-control" />
                  <span onClick={()=>setCurrentPassword3((prev) => !prev)}
                      className={`ti toggle-password  ${
                        currentPassword3 ? "ti-eye-off" : "ti-eye"
                      }`} />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to={all_routes.carPartnerSecuritySettings} className="btn btn-primary">
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Change-email */}
      {/* Delete Account */}
      <div className="modal fade" id="delete_account">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Delete Account</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <p className="text-gray-9 fw-medium mb-0">
                  Why Are You Deleting Your Account?
                </p>
                <span className="fs-13">
                  We&apos;re sorry to see you go! To help us improve, please let
                  us know your reason for deleting your account
                </span>
              </div>
              <label className="d-flex align-items-center mb-3 form-check-label">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                />
                <div>
                  <p className="text-gray-9 fw-medium mb-0">
                    No longer using the service
                  </p>
                  <span className="fs-13">
                    I no longer need this service and won’t be using it in the
                    future.
                  </span>
                </div>
              </label>
              <label className="d-flex align-items-center mb-3 form-check-label">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                />
                <div>
                  <p className="text-gray-9 fw-medium mb-0">Privacy concerns</p>
                  <span className="fs-13">
                    I am concerned about how my data is handled and want to
                    remove
                  </span>
                </div>
              </label>
              <label className="d-flex align-items-center mb-3 form-check-label">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                />
                <div>
                  <p className="text-gray-9 fw-medium mb-0">
                    Too many notifications/emails
                  </p>
                  <span className="fs-13">
                    I’m overwhelmed by the volume of notifications or emails
                  </span>
                </div>
              </label>
              <label className="d-flex align-items-center mb-3 form-check-label">
                <input
                  className="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                />
                <div>
                  <p className="text-gray-9 fw-medium mb-0">
                    Poor user experience
                  </p>
                  <span className="fs-13">
                    I’ve had difficulty using the platform, and it didn’t meet
                    my expectations
                  </span>
                </div>
              </label>
              <label className="d-flex align-items-center mb-3 form-check-label">
                <input
                  className="form-check-input mt-0 me-2"
                  type="radio"
                  name="flexRadioDefault"
                />
                <div>
                  <p className="text-gray-9 fw-medium mb-0">
                    Other (Please specify)
                  </p>
                </div>
              </label>
              <div className="mb-0">
                <label className="form-label">
                  Reason<span className="text-danger ms-1">*</span>
                </label>
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Confirm &amp; Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Account */}
    </>
  );
};

export default SecuritySetting;
