import { useEffect } from "react";
import { Link } from "react-router-dom";
import SettingsSidebar from "./settingssidebar";
import ChangePassword from "../../../core/data/modals/changepassword";
import ChangePhoneNumber from "../../../core/data/modals/changephonenumber";
import DeactiveAccount from "../../../core/data/modals/deactiveaccount";
import Aos from "aos";
import ChangeEmailAddress from "../../../core/data/modals/changeemailaddress";
import TwoFactorDeleteModal from "../../../core/data/modals/twofactordeletemodal";
import DeleteModal from "../../../core/data/modals/deletemodal";
import { all_routes } from "../../../router/all_routes";
import DashboardMenu from "../common/dashboard-menu";

const UserSecurity = () => {
  const routes = all_routes

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      {/* Breadscrumb Section */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">User Settings</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.homeOne}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Settings
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadscrumb Section */}
      {/* Dashboard Menu */}
      <DashboardMenu />
      {/* /Dashboard Menu */}
      {/* Page Content */}
      <div className="content settings-profile-content">
        <div className="container">
          {/* Content Header */}
          <div className="content-header content-settings-header">
            <h4>Settings</h4>
          </div>
          {/* /Content Header */}
          <div className="row">
            {/* Settings Menu */}
            <SettingsSidebar />
            {/* /Settings Menu */}
            {/* Settings Details */}
            <div className="col-lg-9">
              <div className="settings-info">
                <div className="settings-sub-heading">
                  <h4>Security</h4>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Google Authenticator</h5>
                        <div className="status-toggle">
                          <input
                            id="google_authenticator"
                            className="check"
                            type="checkbox"
                            defaultChecked={true}
                          />
                          <label
                            htmlFor="google_authenticator"
                            className="checktoggle"
                          >
                            checkbox
                          </label>
                        </div>
                      </div>
                      <div className="security-content">
                        <p>
                          Google Authenticator adds an extra layer of security
                          to your online accounts by adding a second step of
                          verification when you sign in.
                        </p>
                        <span className="badge badge-light-success">
                          Connected
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Password</h5>
                      </div>
                      <div className="security-content">
                        <p>Last Changed 15 Oct 2023, 09:00 AM</p>
                      </div>
                      <div className="security-btn security-btn-info">
                        <Link
                          to="#"
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#change_password"
                        >
                          Change
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Two Factor</h5>
                        <div className="status-toggle">
                          <input
                            id="two_factor"
                            className="check"
                            type="checkbox"
                            defaultChecked={true}
                          />
                          <label htmlFor="two_factor" className="checktoggle">
                            checkbox
                          </label>
                        </div>
                      </div>
                      <div className="security-content">
                        <p>
                          Receive codes via SMS or email every time you login
                        </p>
                      </div>
                      <div className="security-btn security-btn-info">
                        <Link
                          to="#"
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_two_factor"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Phone Number Verification</h5>
                      </div>
                      <div className="security-content">
                        <p className="text-success-light">
                          Verified Mobile Number : 7261937185
                        </p>
                      </div>
                      <div className="security-btn">
                        <Link
                          to="#"
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#change_phone_number"
                        >
                          Change
                        </Link>
                        <Link to="#" className="btn btn-remove">
                          Remove
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Email Verification</h5>
                      </div>
                      <div className="security-content">
                        <p className="text-success-light">
                          Verified Email : info@example.com
                        </p>
                      </div>
                      <div className="security-btn">
                        <Link
                          to="#"
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#change_email"
                        >
                          Change
                        </Link>
                        <Link to="#" className="btn btn-remove">
                          Remove
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Device Management</h5>
                      </div>
                      <div className="security-content">
                        <p>Last Changed 18 Oct 2023, 11:15 AM</p>
                      </div>
                      <div className="security-btn">
                        <Link to="#" className="btn btn-secondary">
                          Manage
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Account Activity</h5>
                      </div>
                      <div className="security-content">
                        <p>Last Changed 04 Nov 2023, 04:30 PM</p>
                      </div>
                      <div className="security-btn">
                        <Link to="#" className="btn btn-secondary">
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Deactive Account</h5>
                      </div>
                      <div className="security-content">
                        <p>Last Changed 16 Nov 2023, 02:00 PM</p>
                      </div>
                      <div className="security-btn">
                        <Link
                          to="#"
                          className="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#deactive_account"
                        >
                          Deactive
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 d-flex">
                    <div className="security-grid flex-fill">
                      <div className="security-heading">
                        <h5>Delete Account</h5>
                      </div>
                      <div className="security-content">
                        <p>Last Changed 30 Dec 2023, 08:40 PM</p>
                      </div>
                      <div className="security-btn">
                        <Link
                          to="#"
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_account"
                        >
                          Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Settings Details */}
          </div>
        </div>
      </div>
      {/* /Page Content */}
      <ChangePassword />
      <ChangePhoneNumber />
      <DeactiveAccount />
      <ChangeEmailAddress/>
      <TwoFactorDeleteModal />
      <DeleteModal/>
    </div>
  );
};

export default UserSecurity;
