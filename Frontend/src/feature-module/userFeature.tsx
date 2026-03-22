import Cookies from "js-cookie";
import NewHeader from './home/home-new/header'
import { Navigate, Outlet } from 'react-router-dom'
import Progress from './common/progressbar'
import NewFooter from './home/home-new/footer'
import { all_routes } from "../router/all_routes";
import { useSessionRestoreGuard } from "../hooks/useSessionRestoreGuard";

const UserFeature = () => {
  const accessToken = Cookies.get("accessToken");
  useSessionRestoreGuard("accessToken", all_routes.login);

  if (!accessToken) {
    return <Navigate to={all_routes.login} replace />;
  }

  return (
    <div className={`main-wrapper`}>
        <NewHeader />
        <Outlet />
        <Progress />
        <NewFooter />
        </div>
  )
}

export default UserFeature