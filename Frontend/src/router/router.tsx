/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useLayoutEffect, useState } from "react";
import {
  adminAuth,
  adminRoutes,
  authenticationRoute,
  blogroutes,
  listingroutes,
  pageroutes,
  publicRoutes,
  settingsRoute,
  uiInterface,
  usermodule,
  carPartnerAuth,
  carPartnerRoutes,
  carPartnerSettingsRoute,
} from "./router.link";

import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Feature from "../feature-module/feature";
import UserFeature from "../feature-module/userFeature";
import HomeFeature from "../feature-module/homeFeature";
import AdminAuthFeature from "../feature-module/adminAuthFeature";
import AdminFeature from "../feature-module/adminFeature";
import CarPartnerAuthFeature from "../feature-module/carPartnerAuthFeature";
import CarPartnerFeature from "../feature-module/carPartnerFeature";
import CarPartnerSettingsFeature from "../feature-module/carPartnerSettingsFeature";
import UIFeature from "../feature-module/uiFeature";
import SettingsFeature from "../feature-module/settingsFeature";
import Authfeature from "../feature-module/authFeature";
import type { all_routes } from "./all_routes";
import HomeNew from "../feature-module/home/home-new/homeNew";
import { getProfile } from "../feature-module/user/userSlice";

const AllRoutes = () => {
  const [_styleLoaded, setStyleLoaded] = useState(false);
  const location = useLocation();
  const dispatch: any = useDispatch();
  const { userInfo, loading } = useSelector((state: any) => state.user);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search]);

  // 🔥 Run API on mount
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);


  const [currentStyle, setCurrentStyle] = useState<"admin" | "main" | null>(null);

  useEffect(() => {
    // Determine the required style based on the path
    const isSpecialRoute = location.pathname.includes("/admin") || location.pathname.includes("/car-partner");
    const targetStyle = isSpecialRoute ? "admin" : "main";

    // If the style for the current layout is already loaded/loading, don't do anything
    if (currentStyle === targetStyle) {
      return;
    }

    setCurrentStyle(targetStyle);

    // Fetch the style asynchronously and mark style loaded (only affects the first load as it initializes to false)
    if (targetStyle === "admin") {
      import("../assets/style/admin/main.scss")
        .then(() => setStyleLoaded(true))
        .catch((err) => console.error("Admin style load error: ", err));
    } else {
      import("../assets/style/scss/main.scss")
        .then(() => setStyleLoaded(true))
        .catch((err) => console.error("Main style load error: ", err));
    }
  }, [location.pathname, currentStyle]);

  if (!_styleLoaded) {
    return (
      <div className="container mt-5 placeholder-glow">
        {/* Header Skeleton */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="placeholder w-100" style={{ height: '80px', borderRadius: '8px' }}></div>
          </div>
        </div>
        {/* Main Content Skeleton */}
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-8">
            <div className="placeholder w-100 mb-4" style={{ height: '400px', borderRadius: '8px' }}></div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="placeholder w-100" style={{ height: '200px', borderRadius: '8px' }}></div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="placeholder w-100" style={{ height: '200px', borderRadius: '8px' }}></div>
              </div>
            </div>
          </div>
          {/* Right Column / Sidebar */}
          <div className="col-lg-4">
            <div className="placeholder w-100 mb-3" style={{ height: '150px', borderRadius: '8px' }}></div>
            <div className="placeholder w-100 mb-3" style={{ height: '150px', borderRadius: '8px' }}></div>
            <div className="placeholder w-100 mb-3" style={{ height: '250px', borderRadius: '8px' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>

        {/* <Route path="/" element={<Navigate to="/index" replace />} /> */}

        {/* AUTH ROUTES */}

        <Route path="/" element={<HomeNew />}>
          {publicRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>


        <Route path="/" element={<Authfeature />}>
          {authenticationRoute.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* PUBLIC ROUTES */}


        {/* PAGES */}
        <Route path="/pages" element={<Feature />}>
          {pageroutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* BLOG */}
        <Route path="/blog" element={<Feature />}>
          {blogroutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* LISTINGS */}
        <Route path="/listings" element={<Feature />}>
          {listingroutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* USER MODULE */}
        <Route path="/user" element={<UserFeature />}>
          {usermodule.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* ADMIN AUTH */}
        <Route path="/admin" element={<AdminAuthFeature />}>
          {adminAuth.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<AdminFeature />}>
          {adminRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* ADMIN UI */}
        <Route path="/admin" element={<UIFeature />}>
          {uiInterface.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* SETTINGS */}
        <Route path="/admin" element={<SettingsFeature />}>
          {settingsRoute.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>



        {/* Car Partner AUTH */}
        <Route path="/car-partner" element={<CarPartnerAuthFeature />}>
          {carPartnerAuth.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* Car Partner ROUTES */}
        <Route path="/car-partner" element={<CarPartnerFeature />}>
          {carPartnerRoutes.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* Car Partner SETTINGS */}
        <Route path="/car-partner" element={<CarPartnerSettingsFeature />}>
          {carPartnerSettingsRoute.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route>

        {/* CarPartner UI */}
        {/* <Route path="/admin" element={<UIFeature />}>
          {uiInterface.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route> */}

        {/* Car Partner SETTINGS */}
        {/* <Route path="/admin" element={<SettingsFeature />}>
          {settingsRoute.map((route, idx) => (
            <Route path={route.path} element={route.element} key={idx} />
          ))}
        </Route> */}



      </Routes>
    </>
  );
};

export default AllRoutes;
