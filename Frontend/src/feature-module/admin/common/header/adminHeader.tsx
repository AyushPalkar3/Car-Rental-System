import { useEffect, useState, type MouseEvent } from "react";
import { getAdmin } from '../../service/api/admin';
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/data/img/ImageWithBasePath'
import { useDispatch, useSelector } from 'react-redux';
import { setDark, setExpandMenu, setMiniSidebar, setMobileSidebar } from '../../../../core/data/redux/commonSlice';
import { all_routes } from '../../../../router/all_routes';
import { VscAccount } from 'react-icons/vsc';
import { clearAdminAuthCookies } from "../../../../utils/auth.utils";

const AdminHeader = () => {
  const dispatch = useDispatch();
  const mobileSidebar = useSelector(
    (state: any) => state.commonSlice.mobileSidebar
  );
  const expandMenu = () => {
    dispatch(setExpandMenu(true));
  };
  const expandMenuOpen = () => {
    dispatch(setExpandMenu(false));
  };
  const toggleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };
  const handleToggleMiniSidebar = () => {
    dispatch(setMiniSidebar());
  };
  const handleDataThemeChange = (theme: string) => {
    dispatch(setDark(theme));
  };
  const [adminInfo, setAdminInfo] = useState<any>(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const data = await getAdmin();
        if (data?.success) {
          setAdminInfo(data.admin);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
    fetchAdminData();
  }, []);

  const handleOnLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    clearAdminAuthCookies();
    window.location.assign(all_routes.adminlogin);
  };
  useEffect(() => {
    const theme = localStorage.getItem("dataTheme");
    dispatch(setDark(theme));
  }, []);
  return (
    <>
  {/* Header */}
  <div className="header">
    <div className="main-header">
      <div className="header-left" onMouseLeave={expandMenu} onMouseOver={expandMenuOpen}>
        <Link to={all_routes.adminDashboard} className="logo">
          <ImageWithBasePath src="assets/admin/img/logo.svg" alt="Logo" />
        </Link>
        <Link to={all_routes.adminDashboard} className="dark-logo">
          <ImageWithBasePath src="assets/admin/img/logo-white.svg" alt="Logo" />
        </Link>
      </div>
      <Link id="mobile_btn" className="mobile_btn" to="#sidebar" onClick={toggleMobileSidebar}>
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </Link>
      <div className="header-user">
        <div className="nav user-menu nav-list">
          <div className="me-auto d-flex align-items-center" id="header-search">
            <Link id="toggle_btn" to="#" onClick={handleToggleMiniSidebar}>
              <i className="ti ti-menu-deep" />
            </Link>
            {/* <div className="add-dropdown">
              <Link
                to={all_routes.adminAddReservations}
                className="btn btn-dark d-inline-flex align-items-center"
              >
                <i className="ti ti-plus me-1" />
                New Reservation
              </Link>
            </div> */}
          </div>
          <div className="d-flex align-items-center header-icons">
            {/* Flag */}
            {/* <div className="nav-item dropdown has-arrow flag-nav nav-item-box">
              <Link
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                to="#"
                role="button"
              >
                <ImageWithBasePath
                  src="assets/admin/img/flags/gb.svg"
                  alt="Language"
                  className="img-fluid"
                />
              </Link>
              <ul className="dropdown-menu p-2">
                <li>
                  <Link to="#" className="dropdown-item">
                    <ImageWithBasePath src="assets/admin/img/flags/gb.svg" alt="" height={16} />
                    English
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    <ImageWithBasePath src="assets/admin/img/flags/sa.svg" alt="" height={16} />
                    Arabic
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item">
                    <ImageWithBasePath src="assets/admin/img/flags/de.svg" alt="" height={16} />
                    German
                  </Link>
                </li>
              </ul>
            </div> */}
            {/* /Flag */}
            <div className="theme-item">
            
              <Link
                to="#"
                id="dark-mode-toggle"
                className="theme-toggle btn btn-menubar"
                onClick={() => handleDataThemeChange("dark-mode")}
              >
                <i className="ti ti-moon" />
              </Link>
              <Link
                to="#"
                id="light-mode-toggle"
                className="theme-toggle btn btn-menubar"
                onClick={() => handleDataThemeChange("light-mode")}
              >
                <i className="ti ti-sun-high" />
              </Link>
            </div>
            <div className="notification_item">
              <Link
                to="#"
                className="btn btn-menubar position-relative"
                id="notification_popup"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ti ti-bell" />
                <span className="badge bg-violet rounded-pill" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end notification-dropdown">
                <div className="topnav-dropdown-header pb-0">
                  <h5 className="notification-title">Notifications</h5>
                  <ul className="nav nav-tabs nav-tabs-bottom">
                    <li className="nav-item">
                      <Link
                        className="nav-link active"
                        to="#active-notification"
                        data-bs-toggle="tab"
                      >
                        Active
                        <span className="badge badge-xs rounded-pill bg-danger ms-2">
                          5
                        </span>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#unread-notification"
                        data-bs-toggle="tab"
                      >
                        Unread
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="#archieve-notification"
                        data-bs-toggle="tab"
                      >
                        Archieve
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="noti-content">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="active-notification"
                    >
                      <div className="notification-list">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-lg offline me-2 flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-02.jpg"
                              alt="Profile"
                              className="rounded-circle"
                            />
                          </Link>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <Link to="#">
                                <span className="text-gray-9">Jerry Manas</span>{" "}
                                Added New Task Creating{" "}
                                <span className="text-gray-9">Login Pages</span>
                              </Link>
                            </p>
                            <span className="fs-12 noti-time">
                              <i className="ti ti-clock me-1" />4 Min Ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="notification-list">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-lg offline me-2 flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-05.jpg"
                              alt="Profile"
                              className="rounded-circle"
                            />
                          </Link>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <Link to="#">
                                <span className="text-gray-9">Robert Fox </span>{" "}
                                Was Marked as Late Login{" "}
                                <span className="text-danger">09:55 AM</span>
                              </Link>
                            </p>
                            <span className="fs-12 noti-time">
                              <i className="ti ti-clock me-1" />5 Min Ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="notification-list">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-lg me-2 flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-04.jpg"
                              alt="Profile"
                              className="rounded-circle"
                            />
                          </Link>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <Link to="#">
                                <span className="text-gray-9">
                                  Jenny Wilson{" "}
                                </span>{" "}
                                Completed{" "}
                                <span className="text-gray-9">
                                  Created New Component
                                </span>
                              </Link>
                            </p>
                            <div className="d-flex align-items-center">
                              <span className="fs-12 noti-time">
                                <i className="ti ti-clock me-1" />
                                15 Min Ago
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="notification-list">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-lg me-2 flex-shrink-0"
                          >
                          
                          </Link>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <Link to="#">
                                <span className="text-gray-9">
                                  Jacob Johnson{" "}
                                </span>{" "}
                                Added Manual Time{" "}
                                <span className="text-gray-9">2 Hrs</span>
                              </Link>
                            </p>
                            <div className="d-flex align-items-center">
                              <span className="fs-12 noti-time">
                                <i className="ti ti-clock me-1" />
                                20 Min Ago
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="notification-list">
                        <div className="d-flex align-items-center">
                          <Link
                            to="#"
                            className="avatar avatar-lg me-2 flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/profiles/avatar-01.jpg"
                              alt="Profile"
                              className="rounded-circle"
                            />
                          </Link>
                          <div className="flex-grow-1">
                            <p className="mb-1">
                              <Link to="#">
                                <span className="text-gray-9">
                                  Annete Black{" "}
                                </span>{" "}
                                Completed{" "}
                                <span className="text-gray-9">
                                  Improved Workflow React
                                </span>
                              </Link>
                            </p>
                            <div className="d-flex align-items-center">
                              <span className="fs-12 noti-time">
                                <i className="ti ti-clock me-1" />
                                22 Min Ago
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="unread-notification">
                      <div className="notification-list">
                        <Link to="#">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg offline me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-02.jpg"
                                alt="Profile"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                <span className="text-gray-9">Jerry Manas</span>{" "}
                                Added New Task Creating{" "}
                                <span className="text-gray-9">Login Pages</span>
                              </p>
                              <span className="fs-12 noti-time">
                                <i className="ti ti-clock me-1" />4 Min Ago
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="notification-list">
                        <Link to="#">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg offline me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-05.jpg"
                                alt="Profile"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                <span className="text-gray-9">Robert Fox </span>{" "}
                                Was Marked as Late Login{" "}
                                <span className="text-danger">09:55 AM</span>
                              </p>
                              <span className="fs-12 noti-time">
                                <i className="ti ti-clock me-1" />5 Min Ago
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="notification-list">
                        <Link to="#">
                          <div className="d-flex align-items-center">
                            <span className="avatar avatar-lg offline me-2 flex-shrink-0">
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-06.jpg"
                                alt="Profile"
                                className="rounded-circle"
                              />
                            </span>
                            <div className="flex-grow-1">
                              <p className="mb-1">
                                <span className="text-gray-9">Robert Fox </span>{" "}
                                Created New Component
                              </p>
                              <span className="fs-12 noti-time">
                                <i className="ti ti-clock me-1" />5 Min Ago
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="archieve-notification">
                      <div className="d-flex justify-content-center align-items-center p-3">
                        <div className="text-center ">
                          <ImageWithBasePath
                            src="assets/admin/img/icons/nodata.svg"
                            className="mb-2"
                            alt="nodata"
                          />
                          <p className="text-gray-5">No Data Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between topnav-dropdown-footer">
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="link-primary text-decoration-underline me-3"
                    >
                      Mark all as Read
                    </Link>
                    <Link
                      to="#"
                      className="link-danger text-decoration-underline"
                    >
                      Clear All
                    </Link>
                  </div>
                  <Link
                    to="#"
                    className="btn btn-primary btn-sm d-inline-flex align-items-center"
                  >
                    View All Notifications
                    <i className="ti ti-chevron-right ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div>
              <Link to={all_routes.adminIncomeReportList} className="btn btn-menubar">
                <i className="ti ti-chart-bar" />
              </Link>
            </div> */}




            {/* <div className="dropdown">
              <Link
                to="#"
                className="btn btn-menubar"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ti ti-grid-dots" />
              </Link>
              <div className="dropdown-menu p-3">
                <ul>
                  <li>
                    <Link
                      to={all_routes.addCar}
                      className="dropdown-item d-inline-flex align-items-center"
                    >
                      <i className="ti ti-car me-2" />
                      Car
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.addQuotation}
                      className="dropdown-item d-inline-flex align-items-center"
                    >
                      <i className="ti ti-file-symlink me-2" />
                      Quotation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.adminPricingList}
                      className="dropdown-item d-inline-flex align-items-center"
                    >
                      <i className="ti ti-file-dollar me-2" />
                      Seasonal Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.adminExtraServicesList}
                      className="dropdown-item d-inline-flex align-items-center"
                    >
                      <i className="ti ti-script-plus me-2" />
                      Extra Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.adminInspectionsList}
                      className="dropdown-item d-inline-flex align-items-center"
                    >
                      <i className="ti ti-dice-6 me-2" />
                      Inspection
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={all_routes.adminMaintenanceList}
                      className="dropdown-item d-inline-flex align-items-center"
                    >
                      <i className="ti ti-color-filter me-2" />
                      Maintenance
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="dropdown profile-dropdown">
              <Link
                to="#"
                className="d-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <span className="avatar avatar-sm">
                  <VscAccount size={20} className='text-primary'/>
                  {/* <ImageWithBasePath
                    src="assets/admin/img/profiles/avatar-05.jpg"
                    alt="Img"
                    className="img-fluid rounded-circle"
                  /> */}
                </span>
              </Link>
              <div className="dropdown-menu">
                <div className="profileset d-flex align-items-center">
                  <span className="user-img me-2">
                    <VscAccount size={40}/>
                    {/* <ImageWithBasePath src="assets/admin/img/profiles/avatar-05.jpg" alt="" /> */}
                  </span>
                  <div>
                    <h6 className="fw-semibold mb-1">{adminInfo?.name || "Admin"}</h6>
                    <p className="fs-13">{adminInfo?.phoneNum || "admin@example.com"}</p>
                  </div>
                </div>
                {/* <Link
                  className="dropdown-item d-flex align-items-center"
                  to={all_routes.profileSettings}
                >
                  <i className="ti ti-user-edit me-2" />
                  Edit Profile
                </Link> */}
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to={all_routes.adminPaymentsList}
                >
                  <i className="ti ti-credit-card me-2" />
                  Payments
                </Link>
                <div className="dropdown-divider my-2" />
                {/* <div className="dropdown-item">
                  <div className="form-check form-switch  form-check-reverse  d-flex align-items-center justify-content-between">
                    <label className="form-check-label" htmlFor="notify">
                      <i className="ti ti-bell me-2" />
                      Notificaions
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="notify"
                      defaultChecked
                    />
                  </div>
                </div> */}
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to={all_routes.securitySetting}
                >
                  <i className="ti ti-exchange me-2" />
                  Change Password
                </Link>
                <Link
                  className="dropdown-item d-flex align-items-center"
                  to={all_routes.profileSettings}
                >
                  <i className="ti ti-settings me-2" />
                  Settings
                </Link>
                <div className="dropdown-divider my-2" />
                <Link
                  onClick={handleOnLogout}
                  className="dropdown-item logout d-flex align-items-center justify-content-between"
                  to={all_routes.adminlogin}
                >
                  <span>
                    <i className="ti ti-logout me-2" />
                    Logout Account
                  </span>{" "}
                  <i className="ti ti-chevron-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="dropdown mobile-user-menu">
        <Link
          to="#"
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </Link>
        <div className="dropdown-menu dropdown-menu-end">
          <Link className="dropdown-item" to="#">
            My Profile
          </Link>
          <Link className="dropdown-item" to={all_routes.profileSettings}>
            Settings
          </Link>
          <Link
            className="dropdown-item"
            to={all_routes.adminlogin}
            onClick={handleOnLogout}
          >
            Logout
          </Link>
        </div>
      </div>
      {/* /Mobile Menu */}
    </div>
  </div>
  {/* /Header */}
</>

  )
}

export default AdminHeader