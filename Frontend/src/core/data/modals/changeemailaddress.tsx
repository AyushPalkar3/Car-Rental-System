
import { Link } from "react-router-dom";
import ImageWithBasePath from "../img/ImageWithBasePath";
import { all_routes } from "../../../router/all_routes";

const ChangeEmailAddress = () => {
    const routes = all_routes
  return (
    <div>
      {/* Change Email Modal */}
      <div
        className="modal new-modal multi-step fade"
        id="change_email"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Change Email Address</h4>
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
                    Current Email Address <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="modal-form-group">
                  <label>
                    New Email Address <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="modal-form-group">
                  <p>
                    <i className="feather icon-alert-circle" /> New Email Address
                    Only Updated Once You Verified
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
                  data-bs-target="#email_verification"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Change Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Email Modal */}
      {/* Email Verification Modal */}
      <div
        className="modal new-modal multi-step fade"
        id="email_verification"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <h4 className="modal-title">Email Verification</h4>
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
                  Please click the verification link send to your email address{" "}
                  <span>Triddse3w@example.com</span>
                </p>
              </div>
              <div className="otp-resend">
                <Link to="#">Resend Again</Link>
              </div>
              <div className="modal-btn">
                <div className="row">
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-secondary w-100"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="#"
                      className="btn btn-primary w-100"
                      data-bs-dismiss="modal"
                      data-bs-target="#email_verification_success"
                      data-bs-toggle="modal"
                    >
                      Verify
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Email Verification Modal */}
      {/* Email Verification Success Modal */}
      <div
        className="modal new-modal verification-success-modal fade"
        id="email_verification_success"
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
                <p>You Email has been successfully Verified.</p>
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
      {/* /Email Verification Success Modal */}
    </div>
  );
};

export default ChangeEmailAddress;
