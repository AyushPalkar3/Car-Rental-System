import  { useState } from "react";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isToggle1, setIsToggle1] = useState(false);
  const [isToggle2, setIsToggle2] = useState(false);

  return (
    <div>
      {/* Change Password Modal */}
      <div
        className="modal new-modal fade"
        id="change_password"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Change Password</h4>
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
                <div className="row">
                  <div className="col-md-12">
                    <div className="modal-form-group">
                      <label>
                        Old Password <span className="text-danger">*</span>
                      </label>
                      {/* <div className="pass-group">
                        <input
                          type="password"
                          className="form-control pass-input-three"
                          placeholder="............."
                        />
                        <span className="feather icon-eye-off toggle-password-three" />
                      </div> */}
                      <div
                        className="pass-group"
                        onClick={() => setIsToggle(!isToggle)}
                      >
                        <input
                          type={isToggle ? "text" : "password"}
                          className="form-control pass-input-three"
                          placeholder="..........."
                        />
                        <span
                          className={`fas toggle-password ${
                            isToggle ? "fa-eye" : "fa-eye-slash"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-form-group">
                      <label>
                        New Password <span className="text-danger">*</span>
                      </label>
                      <div
                        className="pass-group"
                        onClick={() => setIsToggle1(!isToggle1)}
                      >
                        <input
                          type={isToggle1 ? "text" : "password"}
                          className="form-control pass-input-three"
                          placeholder="..........."
                        />
                        <span
                          className={`fas toggle-password ${
                            isToggle1 ? "fa-eye" : "fa-eye-slash"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="modal-form-group">
                      <label>
                        Confirm Password <span className="text-danger">*</span>
                      </label>
                      <div
                        className="pass-group"
                        onClick={() => setIsToggle2(!isToggle2)}
                      >
                        <input
                          type={isToggle2 ? "text" : "password"}
                          className="form-control pass-input-three"
                          placeholder="..........."
                        />
                        <span
                          className={`fas toggle-password ${
                            isToggle2 ? "fa-eye" : "fa-eye-slash"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-btn modal-btn-sm">
                  <button type="submit" className="btn btn-secondary">
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary">
                    Submit
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Change Password Modal */}
    </div>
  );
};

export default ChangePassword;
