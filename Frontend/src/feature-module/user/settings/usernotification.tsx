import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import SettingsSidebar from "./settingssidebar";
import { all_routes } from "../../../router/all_routes";
import DashboardMenu from "../common/dashboard-menu";

const UserNotification = () => {
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
                  <h4>Notifications</h4>
                </div>
                <div className="notification-grid">
                  <div className="notification-checkbox">
                    <h5>Notify me when...</h5>
                    <ul className="nav">
                      <li>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="offers"
                            defaultChecked={true}
                          />
                          <span className="checkmark" />
                          Special Offers &amp; Discounts
                        </label>
                      </li>
                      <li>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="booking"
                            defaultChecked={true}
                          />
                          <span className="checkmark" />
                          Booking Confirmations
                        </label>
                      </li>
                      <li>
                        <label className="custom_check">
                          <input
                            type="checkbox"
                            name="car_added"
                            defaultChecked={true}
                          />
                          <span className="checkmark" />
                          When new car added
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="notification-status">
                    <div className="notification-status-content">
                      <h5>Mobile Push notifications</h5>
                      <p>Receive push notification when you allow the option</p>
                    </div>
                    <div className="status-toggle">
                      <input
                        id="mobile_notifications"
                        className="check"
                        type="checkbox"
                        defaultChecked={true}
                      />
                      <label
                        htmlFor="mobile_notifications"
                        className="checktoggle"
                      >
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="notification-status">
                    <div className="notification-status-content">
                      <h5>Desktop notifications</h5>
                      <p>
                        Receive desktop notification when you allow the option
                      </p>
                    </div>
                    <div className="status-toggle">
                      <input
                        id="desktop_notifications"
                        className="check"
                        type="checkbox"
                        defaultChecked={true}
                      />
                      <label
                        htmlFor="desktop_notifications"
                        className="checktoggle"
                      >
                        checkbox
                      </label>
                    </div>
                  </div>
                  <div className="notification-status">
                    <div className="notification-status-content">
                      <h5>Email notifications</h5>
                      <p>
                        Receive notifications through mails when you allow the
                        option
                      </p>
                    </div>
                    <div className="status-toggle">
                      <input
                        id="email_notifications"
                        className="check"
                        type="checkbox"
                        defaultChecked={true}
                      />
                      <label
                        htmlFor="email_notifications"
                        className="checktoggle"
                      >
                        checkbox
                      </label>
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
    </div>
  );
};

export default UserNotification;
