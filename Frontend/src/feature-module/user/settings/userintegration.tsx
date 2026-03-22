import  { useEffect } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import Aos from "aos";
import SettingsSidebar from "./settingssidebar";
import { all_routes } from "../../../router/all_routes";
import DashboardMenu from "../common/dashboard-menu";

const UserIntegration = () => {
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
            <SettingsSidebar/>
            {/* /Settings Menu */}
            {/* Settings Details */}
            <div className="col-lg-9">
              <div className="settings-info">
                <div className="settings-sub-heading">
                  <h4>Integrations</h4>
                </div>
                <div className="row">
                  <div className="col-md-5">
                    <div className="integration-grid">
                      <div className="integration-calendar">
                        <ImageWithBasePath
                          src="assets/img/icons/integration-icon.svg"
                          alt="Icon"
                        />
                        <div className="status-toggle">
                          <input
                            id="google_calendar"
                            className="check"
                            type="checkbox"
                            defaultChecked={true}
                          />
                          <label
                            htmlFor="google_calendar"
                            className="checktoggle"
                          >
                            checkbox
                          </label>
                        </div>
                      </div>
                      <div className="integration-content">
                        <h5>Google Calendar</h5>
                        <p>
                          Powerful &amp; free service to organize your schedule
                          and coordinate events{" "}
                        </p>
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
    </div>
  );
};

export default UserIntegration;
