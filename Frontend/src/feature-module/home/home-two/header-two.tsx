import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { header } from "../../../core/data/json/header";

const HeaderTwo = () => {
  const routes = all_routes;
  const [selectedPersons, setSelectedPersons] = useState(null);
  const types = [{ name: "Choose Location" }, { name: "Newyork" }];
  const bikemodal = [
    { name: "Catamaran" },
    { name: "Motor yachts" },
    { name: "Sailing yachts" },
  ];
  const [SelectedModal, setSelectedModal] = useState<any>(null);
  const [date1, setDate1] = useState<any>(null);

  const [scrolled, setScrolled] = useState(false);
  const [subOpen, setSubopen] = useState<any>("");
  const [subsidebar, setSubsidebar] = useState("");
  const [subsidebar2, setSubsidebar2] = useState("");
  const [basePath, setBasePath] = useState("");
  const location = useLocation();
  const onHandleMobileMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };
  const onhandleCloseMenu = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const toggleSidebar = (title: any) => {
    localStorage.setItem("menuOpened", title);
    if (title === subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };
  const toggleSubsidebar = (subitem: any) => {
    if (subitem === subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };
  const toggleSubsidebar2 = (subitem: any) => {
    if (subitem === subsidebar2) {
      setSubsidebar2("");
    } else {
      setSubsidebar2(subitem);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const path = location.pathname;
    const pathArray = path.split("/").filter(Boolean); // Removes empty strings from the split result
    setBasePath(pathArray[0]);
  }, [location.pathname]);
  return (
    <>
      <div className="hero-sec-main">
        <header
          className={`header header-two ${scrolled ? "header-fixed" : ""}`}
        >
          <div className="header-two-top">
            <div className="container">
              <div className="header-top-items">
                <ul className="header-address">
                  <li>
                    <span>
                      <i className="bx bxs-phone" />
                    </span>
                    (+088) 123 456 7890
                  </li>
                  <li>
                    <span>
                      <i className="bx bx-map" />
                    </span>
                    5617 Glassford Street New York, NY 10000, USA
                  </li>
                </ul>
                <div className="header-top-right d-flex align-items-center">
                  <div className="header-top-flag-drops d-flex align-items-center">
                    <div className="header-top-drpodowns me-3">
                      <div className="dropdown header-dropdown country-flag">
                        <Link
                          className="dropdown-toggle nav-tog"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <ImageWithBasePath
                            src="assets/img/flags/us.png"
                            alt="Img"
                          />
                          English
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item">
                            <ImageWithBasePath
                              src="assets/img/flags/fr.png"
                              alt="Img"
                            />
                            French
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <ImageWithBasePath
                              src="assets/img/flags/es.png"
                              alt="Img"
                            />
                            Spanish
                          </Link>
                          <Link to="#" className="dropdown-item">
                            <ImageWithBasePath
                              src="assets/img/flags/de.png"
                              alt="Img"
                            />
                            German
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="header-top-drpodowns">
                      <div className="dropdown header-dropdown country-flag">
                        <Link
                          className="dropdown-toggle nav-tog"
                          data-bs-toggle="dropdown"
                          to="#"
                        >
                          <i className="bx bx-globe me-2" />
                          USD
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                          <Link to="#" className="dropdown-item">
                            Euro
                          </Link>
                          <Link to="#" className="dropdown-item">
                            INR
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="header-top-social-links">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-behance" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-pinterest-p" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fa-brands fa-linkedin" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <nav className="navbar navbar-expand-lg header-nav">
              <div className="navbar-header">
                <Link
                  id="mobile_btn"
                  to="#"
                  onClick={() => onHandleMobileMenu()}
                >
                  <span className="bar-icon">
                    <span />
                    <span />
                    <span />
                  </span>
                </Link>
                <Link to={routes.homeOne} className="navbar-brand logo">
                  <ImageWithBasePath
                    src="assets/img/logo-2.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link to={routes.homeOne} className="navbar-brand logo-small">
                  <ImageWithBasePath
                    src="assets/img/logo-small.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to={routes.homeOne} className="menu-logo">
                    <ImageWithBasePath
                      src="assets/img/logo.svg"
                      className="img-fluid"
                      alt="Logo"
                    />
                  </Link>
                  <Link
                    id="menu_close"
                    className="menu-close"
                    to="#"
                    onClick={() => onhandleCloseMenu()}
                  >
                    {" "}
                    <i className="fas fa-times" />
                  </Link>
                </div>
                <ul className={`main-nav `}>
                  {header.map((mainMenus: any, mainIndex) => (
                    <React.Fragment key={mainIndex}>
                      {mainMenus.separateRoute ? (
                        <li
                          key={mainIndex}
                          className={`has-submenu megamenu ${
                            location.pathname.includes("index") ? "active" : ""
                          }`}
                          onClick={() => toggleSidebar(mainMenus.tittle)}
                        >
                          <Link to="#">
                            {mainMenus.tittle}
                            <i
                              className={` ${
                                basePath === "instructor" ||
                                basePath === "student"
                                  ? "isax isax-add"
                                  : "fas fa-chevron-down"
                              }`}
                            />
                          </Link>
                          <ul
                            className={`submenu mega-submenu ${
                              subOpen === mainMenus.tittle ? "d-block" : ""
                            }`}
                          >
                            <li>
                              <div className="megamenu-wrapper">
                                <div className="row">
                                  {mainMenus.menu.map((menu: any, idx: any) => (
                                    <div className="col-lg-3" key={idx}>
                                      <div
                                        className={`single-demo ${
                                          location.pathname === menu.route
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        <div className="demo-img">
                                          <Link to={menu.route}>
                                            <ImageWithBasePath
                                              src={menu.img}
                                              className="img-fluid "
                                              alt="img"
                                            />
                                          </Link>
                                        </div>
                                        <div className="demo-info">
                                          <Link
                                            to={menu.route}
                                            className="inner-demo-img"
                                          >
                                            {menu.menuValue}{" "}
                                            <span
                                              className={`${
                                                menu.hot ? "hot" : "new"
                                              }`}
                                            >
                                              {menu.hot ? "Hot" : "New"}
                                            </span>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      ) : (
                        <li
                          className={`has-submenu ${
                            mainMenus?.menu?.some((item: any) =>
                              item?.route?.includes(location.pathname)
                            ) ||
                            basePath === mainMenus.base ||
                            basePath === mainMenus.base2
                              ? "active"
                              : ""
                          }`}
                        >
                          <Link
                            to="#"
                            onClick={() => toggleSidebar(mainMenus.tittle)}
                          >
                            {mainMenus.tittle}{" "}
                            <i
                              className={` ${
                                basePath === "instructor" ||
                                basePath === "student"
                                  ? "isax isax-add"
                                  : "fas fa-chevron-down"
                              }`}
                            ></i>
                          </Link>
                          <ul
                            className={`submenu ${
                              subOpen === mainMenus.tittle ? "d-block" : ""
                            }`}
                          >
                            {mainMenus.menu?.map(
                              (menu: any, menuIndex: any) => (
                                <React.Fragment
                                  key={`${mainIndex}-${menuIndex}`}
                                >
                                  {menu.hasSubRoute ? (
                                    <li
                                      key={`${mainIndex}-${menuIndex}`}
                                      className={`${
                                        menu.hasSubRoute ? "has-submenu" : ""
                                      } ${
                                        menu?.subMenus?.some((item: any) =>
                                          item?.route?.includes(
                                            location.pathname
                                          )
                                        ) || basePath === menu.base
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      <Link
                                        to="#"
                                        className={`hideonmob`}
                                        onClick={() => {
                                          toggleSubsidebar(menu.menuValue);
                                        }}
                                      >
                                        {menu.menuValue}
                                      </Link>
                                      <ul
                                        className={`submenu showonmob ${
                                          subsidebar === menu.menuValue
                                            ? "d-block"
                                            : ""
                                        }`}
                                      >
                                        {menu.subMenus?.map(
                                          (subMenu: any, subMenuIndex: any) => (
                                            <React.Fragment
                                              key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}
                                            >
                                              {subMenu.hasSubRoute ? (
                                                <li
                                                  className={`${
                                                    menu.hasSubRoute
                                                      ? "has-submenu"
                                                      : ""
                                                  } ${
                                                    subMenu?.subMenus?.some(
                                                      (item: any) =>
                                                        item?.route?.includes(
                                                          location.pathname
                                                        )
                                                    )
                                                      ? "active"
                                                      : ""
                                                  }`}
                                                >
                                                  <Link
                                                    to="#"
                                                    onClick={() => {
                                                      toggleSubsidebar2(
                                                        subMenu.menuValue
                                                      );
                                                    }}
                                                  >
                                                    {subMenu.menuValue}
                                                  </Link>
                                                  <ul
                                                    className={`submenu ${
                                                      subsidebar2 ===
                                                      subMenu.menuValue
                                                        ? "d-block"
                                                        : ""
                                                    }`}
                                                  >
                                                    {subMenu.subMenus?.map(
                                                      (
                                                        menu: any,
                                                        menuIndex2: any
                                                      ) => (
                                                        <li
                                                          key={menuIndex2}
                                                          className={
                                                            location.pathname ===
                                                            menu.route
                                                              ? "active"
                                                              : ""
                                                          }
                                                        >
                                                          <Link to={menu.route}>
                                                            {menu.menuValue}
                                                          </Link>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </li>
                                              ) : (
                                                <li
                                                  className={
                                                    location.pathname ===
                                                    subMenu.route
                                                      ? "active"
                                                      : ""
                                                  }
                                                  key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}
                                                >
                                                  <Link
                                                    to={subMenu.route}
                                                    target={`${
                                                      subMenu.admin
                                                        ? "_blank"
                                                        : "_self"
                                                    }`}
                                                  >
                                                    {subMenu.menuValue}
                                                  </Link>
                                                </li>
                                              )}
                                            </React.Fragment>
                                          )
                                        )}
                                      </ul>
                                    </li>
                                  ) : (
                                    <li
                                      key={`${mainIndex}-${menuIndex}`}
                                      className={
                                        location.pathname.includes(
                                          menu.route || ""
                                        )
                                          ? "active"
                                          : ""
                                      }
                                    >
                                      <Link to={menu.route}>
                                        {menu.menuValue}
                                      </Link>
                                    </li>
                                  )}
                                </React.Fragment>
                              )
                            )}
                          </ul>
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="nav-item">
                  <Link className="nav-link login-link" to={routes.login}>
                    <span>
                      <i className="bx bx-user me-2" />
                    </span>
                    Sign In /{" "}
                  </Link>
                  <Link
                    className="nav-link login-link ms-1"
                    to={routes.register}
                  >
                    Register{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link header-reg" to={routes.listingList}>
                    <span>
                      <i className="bx bx-plus-circle" />
                    </span>
                    Add Listing
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <>
          {/* Banner */}
          <section className="banner-section banner-sec-two banner-slider">
            <div className="banner-img-slider owl-carousel">
              <div className="slider-img">
                <ImageWithBasePath
                  src="assets/img/bg/home-banner-img.png"
                  alt="Img"
                />
              </div>
              <div className="slider-img">
                <ImageWithBasePath
                  src="assets/img/bg/home-banner-img-02.png"
                  alt="Img"
                />
              </div>
              <div className="slider-img">
                <ImageWithBasePath
                  src="assets/img/bg/home-banner-img-03.png"
                  alt="Img"
                />
              </div>
            </div>

            <div className="container">
              <div className="home-banner">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <div className="hero-sec-contents">
                      <div className="banner-title">
                        <h1>
                          Online Yacht Booking.
                          <span>Made Simple.</span>
                        </h1>
                        <p>
                          Modern design sports cruisers for those who crave
                          adventure &amp; grandeur yachts for relaxing with your
                          loved ones. We Offer diverse and fully equipped yachts
                        </p>
                      </div>
                      <div className="banner-form">
                        <form>
                          <div className="banner-search-list">
                            <div className="input-block customdropdown">
                              <label>
                                <i className="bx bx-map" />
                                Location
                              </label>

                              <Dropdown
                                value={selectedPersons}
                                onChange={(e) => setSelectedPersons(e.value)}
                                options={types}
                                optionLabel="name"
                                placeholder="Cruiser"
                                className="w-100"
                              />
                            </div>
                            <div className="input-block">
                              <label>
                                <i className="bx bx-calendar" />
                                Pickup Date
                              </label>
                              <div className="date-widget">
                                <div className="group-img customcalendar">
                                  <Calendar
                                    value={date1}
                                    onChange={(e) => setDate1(e.value)}
                                    placeholder="04/11/2023"
                                  />
                                  {/* <input
                            type="text"
                            className="form-control datetimepicker"
                            placeholder="04/11/2023"
                          /> */}
                                </div>
                              </div>
                            </div>
                            <div className="input-block">
                              <label>
                                <i className="bx bx-calendar" />
                                Pickup Date
                              </label>
                              <div className="date-widget">
                                <div className="group-img customcalendar">
                                  <Calendar
                                    value={date1}
                                    onChange={(e) => setDate1(e.value)}
                                    placeholder="04/11/2023"
                                  />
                                  {/* <input
                            type="text"
                            className="form-control datetimepicker"
                            placeholder="04/11/2023"
                          /> */}
                                </div>
                              </div>
                            </div>
                            <div className="input-block customdropdown">
                              <label>
                                <i className="bx bxs-ship" />
                                Yacht Type
                              </label>

                              <Dropdown
                                value={SelectedModal}
                                onChange={(e) => setSelectedModal(e.value)}
                                options={bikemodal}
                                optionLabel="name"
                                placeholder="Catamaran"
                                className="w-100"
                              />
                            </div>
                          </div>
                          <div className="input-block-btn">
                            <button className="btn btn-primary" type="submit">
                              <i className="bx bx-search-alt me-2" /> Search
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="banner-user-group text-center">
                        <ul>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-01.jpg"
                                alt="Img"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-02.jpg"
                                alt="Img"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-03.jpg"
                                alt="Img"
                              />
                            </Link>
                          </li>
                          <li className="users-text">
                            <h5>6K + Customers</h5>
                            <span>has used our renting services </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="video-btn text-center">
                <Link
                  to="https://www.youtube.com/embed/ExJZAegsOis"
                  data-fancybox=""
                >
                  <span>
                    <i className="bx bx-play" />
                  </span>
                </Link>
                <h6>Check Our Video</h6>
              </div>
            </div>
          </section>
          {/* /Banner */}
        </>
      </div>
    </>
  );
};

export default HeaderTwo;
