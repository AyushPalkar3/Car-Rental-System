import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { all_routes } from "../router/all_routes";

function normalizePathname(path: string) {
  const p = path.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

const ADMIN_GUEST_ONLY_PATHS = [
  all_routes.adminlogin,
  all_routes.adminForgotPassword,
  all_routes.adminOtp,
  all_routes.adminResetPassword,
].map(normalizePathname);

const AdminAuthFeature = () => {
  const location = useLocation();
  const token = Cookies.get("adminAccessToken");
  const path = normalizePathname(location.pathname);

  if (token && ADMIN_GUEST_ONLY_PATHS.includes(path)) {
    return <Navigate to={all_routes.adminDashboard} replace />;
  }

  return <Outlet />;
};

export default AdminAuthFeature;