
import { Outlet } from "react-router-dom";
import CarPartnerHeader from "./Car Partner/common/header/adminHeader";
import CarPartnerSidebar from "./Car Partner/common/sidebar/adminSidebar";
import CarPartnerFooter from "./Car Partner/common/footer/adminFooter";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../core/data/redux/commonSlice";
import '../assets/style/icons/themify/themify.css'
import '../assets/style/icons/tabler-icons/tabler-icons.css'

const CarPartnerFeature = () => {
  const dispatch = useDispatch();
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

  return (
    <>
      <div
        className={`${!expandMenu && miniSidebar ? "expand-menu" : ""} ${miniSidebar ? "mini-sidebar" : ""}`}
      >
        <div className={`main-wrapper ${mobileSidebar ? "slide-nav" : ""}`}>
          <CarPartnerHeader />
          <CarPartnerSidebar />
          <div className="page-wrapper">
            <Outlet />
            <CarPartnerFooter />
          </div>
        </div>
        <div className={`sidebar-overlay ${mobileSidebar ? "opened" : ""}`} onClick={toggleMobileSidebar}></div>
      </div>
    </>
  );
};

export default CarPartnerFeature;
