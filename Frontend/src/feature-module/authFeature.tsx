import Cookies from "js-cookie";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import { getSafeRedirectFromSearch } from "../utils/safeRedirect";

function normalizePathname(path: string) {
  const p = path.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

/** Login, signup (same URL), forgot/reset — not error/maintenance pages. */
const USER_GUEST_ONLY_PATHS = [
  all_routes.login,
  all_routes.register,
  all_routes.forgotPassword,
  all_routes.resetPassword,
].map(normalizePathname);

const Authfeature = () => {
  const location = useLocation();
  const token = Cookies.get("accessToken");
  const path = normalizePathname(location.pathname);

  if (token && USER_GUEST_ONLY_PATHS.includes(path)) {
    const next =
      getSafeRedirectFromSearch(location.search) || all_routes.userDashboard;
    return <Navigate to={next} replace />;
  }

  return <Outlet />;
};

export default Authfeature;