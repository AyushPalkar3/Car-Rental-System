import { useState } from "react";
import { Link } from "react-router-dom";

const DeactiveAccount = () => {
    const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      {/* Deactive Account Modal */}
      <div
        className="modal new-modal fade"
        id="deactive_account"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Deactivate Account</h4>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="deactive-content">
                <p>
                  Are you sureyou want to delete This Account? To delete your
                  account, Type your password.
                </p>
              </div>
              <form action="#">
                <div className="modal-form-group">
                  <label>
                    Password <span className="text-danger">*</span>
                  </label>
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
                <div className="modal-btn modal-btn-sm">
                  <button type="submit" className="btn btn-secondary">
                    Cancel
                  </button>
                  <Link to="#" className="btn btn-primary">
                    Delete Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Deactive Account Modal */}
    </>
  );
};

export default DeactiveAccount;
