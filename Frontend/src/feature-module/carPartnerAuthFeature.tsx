import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { all_routes } from "../router/all_routes";

function normalizePathname(path: string) {
  const p = path.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

const CAR_PARTNER_GUEST_ONLY_PATHS = [
  all_routes.carPartnerLogin,
  all_routes.carPartnerForgotPassword,
  all_routes.carPartnerOtp,
  all_routes.carPartnerResetPassword,
].map(normalizePathname);

const CarPartnerAuthFeature = () => {
  const location = useLocation();
  const token = Cookies.get("carPartnerAccessToken");
  const path = normalizePathname(location.pathname);

  if (token && CAR_PARTNER_GUEST_ONLY_PATHS.includes(path)) {
    return <Navigate to={all_routes.carPartnerDashboard} replace />;
  }

  return <Outlet />;
};

export default CarPartnerAuthFeature;
