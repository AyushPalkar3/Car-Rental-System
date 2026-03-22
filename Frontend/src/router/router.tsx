/* eslint-disable @typescript-eslint/no-unused-vars */		
import { useEffect, useState } from "react";
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
import { useDispatch,useSelector } from "react-redux";

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
  const dispatch :any = useDispatch();
  const { userInfo, loading } = useSelector((state:any)=>state.user);

  // 🔥 Run API on mount
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);


  useEffect(() => {
    setStyleLoaded(false);
    if (location.pathname.includes("/admin") || location.pathname.includes("/car-partner")) {
      import("../assets/style/admin/main.scss")
        .then(() => setStyleLoaded(true))
        .catch((err) => console.error("Admin style load error: ", err));
    } else {
      import("../assets/style/scss/main.scss")
        .then(() => setStyleLoaded(true))
        .catch((err) => console.error("Main style load error: ", err));
    }
  }, [location]);

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
