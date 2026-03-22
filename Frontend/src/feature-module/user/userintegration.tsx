import  { useEffect } from "react";
import Breadcrumbs from "../common/breadcrumbs";
import Aos from "aos";
import SettingsSidebar from "./settings/settingssidebar";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import DashboardMenu from "./common/dashboard-menu";

const UserIntegration = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      <Breadcrumbs title="User Settings" subtitle="User Settings" />
      <DashboardMenu />

      <div className="content">
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
                            defaultChecked
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
          </div>
        </div>
      </div>
    </>
  );
};

export default UserIntegration;
