import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { all_routes } from "../../../router/all_routes";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { header } from "../../../core/data/json/header";
import Cookies from "js-cookie";
import { clearCustomerAuthCookies } from "../../../utils/auth.utils";
import { logoutUser } from "../../user/userSlice";

const NewHeader = () => {
  const dispatch = useDispatch();
  const [scrolled, setScrolled] = useState(false);
  const [isLogin, setLogin] = useState(false)
  const location = useLocation();


  const onLogout = () => {
    clearCustomerAuthCookies();
    dispatch(logoutUser());
    setLogin(false);
    window.location.assign(all_routes.home);
  };

  const onHandleMobileMenu = () => {
    document.documentElement.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    document.documentElement.classList.remove("menu-opened");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const accessToken = Cookies.get('accessToken');

    if (accessToken) {
      setLogin(true)
    }



    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${true ? "header-fixed" : ""} header-four`}>
      <div className="container">
        <nav className="navbar navbar-expand-lg header-nav">

          {/* Logo & Mobile Toggle */}
          <div className="navbar-header">
            <Link to={all_routes.home} className="navbar-brand logo">
              <ImageWithBasePath
                src="assets/img/logo-lite.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>

            <Link to={all_routes.home} className="navbar-brand logo-small">
              <ImageWithBasePath
                src="assets/img/light-theme-logo.png"
                className="img-fluid"
                alt="Logo"
              />
            </Link>

            <Link id="mobile_btn" to="#" onClick={onHandleMobileMenu}>
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </Link>
          </div>

          {/* Main Menu */}
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to={all_routes.home} className="menu-logo">
                <ImageWithBasePath
                  src="assets/img/light-theme-logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link
                id="menu_close"
                className="menu-close"
                to="#"
                onClick={onhandleCloseMenu}
              >
                <i className="fas fa-times"></i>
              </Link>
            </div>

            {/* Menu Links */}
            <ul className="main-nav">
              {header.map((menu, index) => {
                const route = menu.route || "#";

                return (
                  <li
                    key={index}
                    className={location.pathname === route ? "active" : ""}
                  >
                    <Link to={route} onClick={onhandleCloseMenu}>
                      {menu.tittle}
                    </Link>
                  </li>
                );
              })}
            </ul>




            {/* Mobile Login / Signup or Dashboard / Logout */}
            {isLogin ? (
              <div className="mobile-auth d-lg-none">
                <Link
                  to={all_routes.userDashboard}
                  className="btn btn-secondary w-100 mb-2"
                  onClick={onhandleCloseMenu}
                >
                  <i className="bx bx-grid-alt me-1"></i> Dashboard
                </Link>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={() => {
                    onhandleCloseMenu();
                    onLogout();
                  }}
                >
                  <i className="bx bx-log-out me-1"></i> Logout
                </button>
              </div>
            ) : (
              <div className="mobile-auth d-lg-none">
                <Link
                  to={all_routes.login}
                  className="btn btn-secondary w-100 mb-2"
                  onClick={onhandleCloseMenu}
                >
                  <i className="bx bx-user me-1"></i> Sign In
                </Link>

                <Link
                  to={all_routes.register}
                  className="btn btn-primary w-100"
                  onClick={onhandleCloseMenu}
                >
                  <i className="bx bx-lock me-1"></i> Sign Up
                </Link>
              </div>
            )}

          </div>


          {/* Desktop Right Section */}
          <ul className="nav header-navbar-rht d-none d-lg-flex align-items-center">
            {isLogin ? (
              <li className="nav-item dropdown position-relative">
                {/* User Icon */}
                <span
                  className="nav-link cursor-pointer"
                  id="userDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bx text-white bx-user-circle fs-2"></i>
                </span>
                
                {/* Dropdown */}
                <ul className="dropdown-menu dropdown-menu-end shadow">
                  <li>
                    <Link className="dropdown-item" to={all_routes.userDashboard}>
                      <i className="bx bx-grid-alt me-2"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button onClick={onLogout} className="dropdown-item text-danger">
                      <i className="bx bx-log-out me-2"></i>
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-secondary d-inline-flex align-items-center"
                    to={all_routes.login}
                  >
                    <i className="bx bx-user me-1"></i> Sign In
                  </Link>
                </li>

                <li className="nav-item ms-2">
                  <Link
                    className="nav-link btn text-black btn-primary d-inline-flex align-items-center"
                    to={all_routes.register}
                  >
                    <i className="bx bx-lock me-1"></i> Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>



        </nav>
      </div>
    </header>
  );
};

export default NewHeader;
