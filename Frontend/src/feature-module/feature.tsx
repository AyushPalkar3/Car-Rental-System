import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // set_current_route,
  // set_current_route_array,
  set_is_mobile_sidebar,
} from "../core/data/redux/action";
import { Outlet } from "react-router-dom";
import NewHeader from "./home/home-new/header";
import NewFooter from "./home/home-new/footer";
import Progress from "./common/progressbar";
import Footer from "./common/footer";
// import { useLocation } from "react-router-dom";

const Feature = () => {
  const mobileSidebar = useSelector((state: any) => state.rootReducer.mobileSidebar);

  // const [currentRoute, setCurrentRoute] = useState(location.pathname);
  // const location = useLocation();
  const dispatch = useDispatch();

  // const getRoutes = () => {
  //   setCurrentRoute(location.pathname);
  //   const splitVal = location.pathname.split("/");
  //   const route_data = {
  //     base: splitVal[1],
  //     page: splitVal[2] || "",
  //     last: splitVal[3] || "",
  //   };
  //   dispatch(set_current_route_array(splitVal));
  //   dispatch(set_current_route(route_data));
  //   dispatch(set_is_mobile_sidebar(false));
  // };

  useEffect(() => {
    dispatch(set_is_mobile_sidebar(false));

  }, [ dispatch]);

  return (
    <>
    <div className={`main-wrapper ${mobileSidebar ? "menu-opened " : ""}`}>
    <NewHeader />
    <Outlet />
    <Progress />
    <NewFooter />
    </div>
  </>
   
  );
};

export default Feature;
