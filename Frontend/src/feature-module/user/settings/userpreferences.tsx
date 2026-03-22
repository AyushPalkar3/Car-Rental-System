import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import SettingsSidebar from "./settingssidebar";
import { all_routes } from "../../../router/all_routes";
import DashboardMenu from "../common/dashboard-menu";
import { Dropdown } from "primereact/dropdown";

const UserPreferences = () => {
  const routes = all_routes;
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  const [selectedPersons, setSelectedPersons] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const persons = [
    { name: "English" },
    { name: "Japanese" },
  ];
  const country = [{ name: "United States (English)" }, { name: "Japan (Japanese)" }];
  return (
    <div>
      <>
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
                    <h4>Preferences</h4>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="preference-wrap">
                        <div className="preference-info">
                          <h6>Language </h6>
                          <p>Select display language</p>
                        </div>
                        <div className="preference-select">
                        <Dropdown
                                value={selectedPersons}
                                onChange={(e) => setSelectedPersons(e.value)}
                                options={persons}
                                optionLabel="name"
                                placeholder="English"
                                className="w-100"
                              />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="preference-wrap">
                        <div className="preference-info">
                          <h6>Region / Locale</h6>
                          <p>Select region</p>
                        </div>
                        <div className="preference-select">
                        <Dropdown
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.value)}
                                options={country}
                                optionLabel="name"
                                placeholder="Country"
                                className="w-100"
                              />
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
      </>
    </div>
  );
};

export default UserPreferences;
