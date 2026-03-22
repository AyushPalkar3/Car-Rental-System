
import { Outlet } from "react-router-dom";
import AdminHeader from "./admin/common/header/adminHeader";
import AdminSidebar from "./admin/common/sidebar/adminSidebar";
import AdminFooter from "./admin/common/footer/adminFooter";
import { useDispatch, useSelector } from "react-redux";
import { setMobileSidebar } from "../core/data/redux/commonSlice";

const UIFeature = () => {
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
          <AdminHeader />
          <AdminSidebar />
            <Outlet />
            <AdminFooter />
        </div>
        <div className={`sidebar-overlay ${mobileSidebar ? "opened" : ""}`}  onClick={toggleMobileSidebar}></div>
      </div>
    </>
  );
};

export default UIFeature;
