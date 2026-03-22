import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { Link, Navigate, Outlet } from "react-router-dom";
import CarPartnerHeader from "./Car Partner/common/header/adminHeader";
import CarPartnerSidebar from "./Car Partner/common/sidebar/adminSidebar";
import CarPartnerFooter from "./Car Partner/common/footer/adminFooter";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../core/data/redux/commonSlice";
import CarPartnerSettingsSidebar from "./Car Partner/common/settings-sidebar/settingsSidebar";
import { all_routes } from "../router/all_routes";
import { useSessionRestoreGuard } from "../hooks/useSessionRestoreGuard";

const CarPartnerSettingsFeature = () => {
  const dispatch = useDispatch();
  const carPartnerToken = Cookies.get("carPartnerAccessToken");
  useSessionRestoreGuard("carPartnerAccessToken", all_routes.carPartnerLogin);
  const expandMenu = useSelector((state: any) => state.commonSlice.expandMenu);
  const miniSidebar = useSelector(
    (state: any) => state.commonSlice.miniSidebar
  );
  const mobileSidebar = useSelector(
    (state: any) => state.commonSlice.mobileSidebar
  );
  const toggleMobileSidebar = () => {
    dispatch(setMobileSidebar(!mobileSidebar));
  };

  if (!carPartnerToken) {
    return <Navigate to={all_routes.carPartnerLogin} replace />;
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={4000} closeOnClick />
      <div
        className={`${!expandMenu && miniSidebar ? "expand-menu" : ""} ${miniSidebar ? "mini-sidebar" : ""}`}
      >
        <div className={`main-wrapper ${mobileSidebar ? "slide-nav" : ""}`}>
          <CarPartnerHeader />
          <CarPartnerSidebar />
          <div className="page-wrapper">
            <div className="content me-4 pb-0">
              <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                <div className="my-auto mb-2">
                  <h2 className="mb-1">Settings</h2>
                  <nav>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                        <Link to={all_routes.carPartnerDashboard}>Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Settings
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className="row">
                <CarPartnerSettingsSidebar />
                <div className="col-xl-9">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <CarPartnerFooter />
        </div>
        <div
          className={`sidebar-overlay ${mobileSidebar ? "opened" : ""}`}
          onClick={toggleMobileSidebar}
        ></div>
      </div>
    </>
  );
};

export default CarPartnerSettingsFeature;
