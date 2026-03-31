import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import AdminHeader from "./admin/common/header/adminHeader";
import AdminSidebar from "./admin/common/sidebar/adminSidebar";
import AdminFooter from "./admin/common/footer/adminFooter";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../core/data/redux/commonSlice";
import { all_routes } from "../router/all_routes";
import { useSessionRestoreGuard } from "../hooks/useSessionRestoreGuard";
import '../assets/style/icons/themify/themify.css'
import '../assets/style/icons/tabler-icons/tabler-icons.css'
const AdminFeature = () => {
  const dispatch = useDispatch();
  const adminToken = Cookies.get("adminAccessToken");
  useSessionRestoreGuard("adminAccessToken", all_routes.adminlogin);
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

  if (!adminToken) {
    return <Navigate to={all_routes.adminlogin} replace />;
  }

  return (
    <>
      <div
        className={`${!expandMenu && miniSidebar ? "expand-menu" : ""} ${miniSidebar ? "mini-sidebar" : ""}`}
      >
        <div className={`main-wrapper ${mobileSidebar ? "slide-nav" : ""}`}>
          <AdminHeader />
          <AdminSidebar />
          <div className="page-wrapper">
            <Outlet />
            {/* <AdminFooter /> */}
          </div>
        </div>
        <div className={`sidebar-overlay ${mobileSidebar ? "opened" : ""}`}  onClick={toggleMobileSidebar}></div>
      </div>
    </>
  );
};

export default AdminFeature;
