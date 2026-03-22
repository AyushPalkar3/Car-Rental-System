
import { Link } from "react-router-dom";
import ImageWithBasePath from "../img/ImageWithBasePath";
import { all_routes } from "../../../router/all_routes";

const ChangePhoneNumber = () => {
    const routes = all_routes
  return (
    <div>
      {/* Change Phone Number Modal */}
      <div
        className="modal new-modal multi-step fade"
        id="change_phone_number"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Change Phone Number</h4>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="modal-form-group">
                  <label>
                    Current Phone Number <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="modal-form-group">
                  <label>
                    New Phone Number <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="modal-form-group">
                  <p>
                    <i className="feather icon-alert-circle" /> New Phone Number Only
                    Updated Once You Verified
                  </p>
                </div>
              </form>
              <div className="modal-btn modal-btn-sm">
                <Link
                  to="#"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-target="#otp_verification"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Change Number
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Phone Number Modal */}
      {/* OTP Verification Modal */}
      <div
        className="modal new-modal multi-step fade"
        id="otp_verification"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h4 className="modal-title">OTP Verification</h4>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="otp-number">
                <p>
                  Enter OTP Send to your Mobile number{" "}
                  <span>+1 454445 45544</span>
                </p>
              </div>
              <form
                method="get"
                className="digit-group login-form-control"
                data-group-name="digits"
                data-autosubmit="false"
                autoComplete="off"
                action="#"
              >
                <div className="otp-box">
                  <input
                    type="text"
                    id="digit-1"
                    name="digit-1"
                    data-next="digit-2"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    id="digit-2"
                    name="digit-2"
                    data-next="digit-3"
                    data-previous="digit-1"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    id="digit-3"
                    name="digit-3"
                    data-next="digit-4"
                    data-previous="digit-2"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    id="digit-4"
                    name="digit-4"
                    data-next="digit-5"
                    data-previous="digit-3"
                    maxLength={1}
                  />
                </div>
                <div className="otp-resend">
                  <Link to="#">Resend Again</Link>
                  <p>Remaining 00:30s</p>
                </div>
              </form>
              <div className="modal-btn modal-btn-group">
                <div className="row">
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-secondary w-100"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-primary w-100"
                      data-bs-dismiss="modal"
                      data-bs-target="#verification_success"
                      data-bs-toggle="modal"
                    >
                      Verify
                    </Link>
                  </div>
                </div>
              </div>
              <div className="verified-box">
                <p>
                  <i className="feather icon-check" /> Your Phone Number has been
                  Successfully Verified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /OTP Verification Modal */}
      {/* Verification Success Modal */}
      <div
        className="modal new-modal verification-success-modal fade"
        id="verification_success"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="order-success-info">
                <span className="order-success-icon">
                  <ImageWithBasePath src="assets/img/icons/check-icon.svg" alt="Icon" />
                </span>
                <h4>Successful</h4>
                <p>You Phone number has been successfully Verified.</p>
                <div className="modal-btn">
                  <Link to={routes.userSecurity} className="btn btn-secondary">
                    Back to Settings <i className="feather icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Verification Success Modal */}
    </div>
  );
};

export default ChangePhoneNumber;
