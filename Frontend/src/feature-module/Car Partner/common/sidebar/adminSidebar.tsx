import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import { SidebarData } from "../json/adminSidebarData";
import { setExpandMenu } from "../../../../core/data/redux/commonSlice";
import { useDispatch } from "react-redux";
import { all_routes } from "../../../../router/all_routes";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";

const AdminSidebar = () => {
  const Location = useLocation();
  const dispatch = useDispatch();
  const [subOpen, setSubopen] = useState("");
  const [subsidebar, setSubsidebar] = useState("");

  const toggleSidebar = (title: any) => {
    localStorage.setItem("menuOpened", title);
    if (title == subOpen) {
      setSubopen("");
    } else {
      setSubopen(title);
    }
  };

  const toggleSubsidebar = (subitem: any) => {
    if (subitem == subsidebar) {
      setSubsidebar("");
    } else {
      setSubsidebar(subitem);
    }
  };

  //   const [toggle, SetToggle] = useState(false);
  // const handlesidebar = () => {
  //   document.body.classList.toggle("mini-sidebar");
  //   SetToggle((current) => !current);
  // };

  // const { expandMenus } = useSelector((state:any) => state.commonSlice.expandMenus );

  const expandMenu = () => {
    dispatch(setExpandMenu(true));
  };
  const expandMenuOpen = () => {
    dispatch(setExpandMenu(false));
  };

  useEffect(() => {
    const currentMenu = localStorage.getItem("menuOpened") || "Dashboard";
    setSubopen(currentMenu);
    // Select all 'submenu' elements
    const submenus = document.querySelectorAll(".submenu");
    // Loop through each 'submenu'
    submenus.forEach((submenu) => {
      // Find all 'li' elements within the 'submenu'
      const listItems = submenu.querySelectorAll("li");
      submenu.classList.remove("active");
      // Check if any 'li' has the 'active' class
      listItems.forEach((item) => {
        if (item.classList.contains("active")) {
          // Add 'active' class to the 'submenu'
          submenu.classList.add("active");
          return;
        }
      });
    });
  }, [Location.pathname]);
  return (
    <>
      {/* Sidebar */}
      <div
        className="sidebar"
        id="sidebar"
        onMouseLeave={expandMenu}
        onMouseOver={expandMenuOpen}
      >
        {/* Logo */}
        <div className="sidebar-logo">
          <Link to={all_routes.carPartnerDashboard} className="logo logo-normal">
            <ImageWithBasePath src="assets/img/logo-dark.png" alt="Logo" />
          </Link>
          <Link to={all_routes.carPartnerDashboard} className="logo-small">
            <ImageWithBasePath
              src="assets/img/logo-dark.png"
              alt="Logo"
            />
          </Link>
          <Link to={all_routes.carPartnerDashboard} className="dark-logo">
            <ImageWithBasePath
              src="assets/img/logo-lite.png"
              alt="Logo"
            />
          </Link>
        </div>
        {/* /Logo */}
      <OverlayScrollbarsComponent>
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              <div className="form-group">
                {/* Search */}
                {/* <div className="input-group input-group-flat d-inline-flex">
                  <span className="input-icon-addon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                  <span className="group-text">
                    <i className="ti ti-command" />
                  </span>
                </div> */}
                {/* /Search */}
              </div>
              <ul>
                {SidebarData?.map((mainLabel, index) => (
                  <React.Fragment key={`main-${index}`}>
                    <li className="menu-title">
                      <span>{mainLabel?.label}</span>
                    </li>
                    <li>
                      <ul>
                        {mainLabel?.submenuItems?.map((title: any, i) => {
                          const link_array: any = [];
                          if ("submenuItems" in title) {
                            title.submenuItems?.forEach((link: any) => {
                              link_array.push(link?.link);
                              if (link?.submenu && "submenuItems" in link) {
                                link.submenuItems?.forEach((item: any) => {
                                  link_array.push(item?.link);
                                });
                              }
                            });
                          }
                          title.links = link_array;

                          return (
                            <li className="submenu" key={`title-${i}`}>
                              <Link
                                to={title?.submenu ? "#" : title?.link}
                                onClick={() => toggleSidebar(title?.label)}
                                className={`${
                                  subOpen === title?.submenu ? "subdrop" : ""
                                }  ${
                                  title?.submenuItems
                                    ?.map((link: any) => link?.link)
                                    .includes(Location.pathname) ||
                                  title?.link === Location.pathname||
                                  title?.sublink === Location.pathname||
                                  title?.sublink2 === Location.pathname||
                                  title?.sublink3 === Location.pathname
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <i className={`ti ti-${title.icon}`}></i>
                                <span>{title?.label}</span>
                                {title?.count && (
                                  <span className="count">
                                    {title?.count}
                                  </span>
                                )}
                                <span
                                  className={title?.submenu ? "menu-arrow" : ""}
                                />
                              </Link>
                              {title?.submenu !== false &&
                                subOpen === title?.label && (
                                  <ul
                                    style={{
                                      display:
                                        subOpen === title?.label
                                          ? "block"
                                          : "none",
                                    }}
                                  >
                                    {title?.submenuItems?.map(
                                      (item: any, j: any) => (
                                        <li
                                          className={
                                            item?.submenuItems
                                              ? "submenu submenu-two"
                                              : ""
                                          }
                                          key={`item-${j}`}
                                        >
                                          <Link
                                            to={
                                              item?.submenu ? "#" : item?.link
                                            }
                                            className={`${
                                              item?.submenuItems
                                                ?.map((link: any) => link?.link)
                                                .includes(Location.pathname) ||
                                              item?.link === Location.pathname||
                                              item?.sublink === Location.pathname||
                                              item?.sublink2 === Location.pathname||
                                              item?.sublink3 === Location.pathname
                                                ? "active"
                                                : ""
                                            } ${
                                              subsidebar === item?.label
                                                ? "subdrop"
                                                : ""
                                            }`}
                                            onClick={() => {
                                              toggleSubsidebar(item?.label);
                                            }}
                                          >
                                            {item?.label}
                                            <span
                                              className={
                                                item?.submenu
                                                  ? "menu-arrow"
                                                  : ""
                                              }
                                            />
                                          </Link>
                                          {item?.submenuItems ? (
                                            <ul
                                              style={{
                                                display:
                                                  subsidebar === item?.label
                                                    ? "block"
                                                    : "none",
                                              }}
                                            >
                                              {item?.submenuItems?.map(
                                                (items: any, k: any) => (
                                                  <li key={`submenu-item-${k}`}>
                                                    <Link
                                                      to={
                                                        items?.submenu
                                                          ? "#"
                                                          : items?.link
                                                      }
                                                      className={`${
                                                        subsidebar ===
                                                        items?.label
                                                          ? "submenu-two subdrop"
                                                          : "submenu-two"
                                                      } ${
                                                        items?.submenuItems
                                                          ?.map(
                                                            (link: any) =>
                                                              link.link
                                                          )
                                                          .includes(
                                                            Location.pathname
                                                          ) ||
                                                        items?.link ===
                                                          Location.pathname
                                                          ? "active"
                                                          : ""
                                                      }`}
                                                    >
                                                      {items?.label}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          ) : null}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
       </OverlayScrollbarsComponent>
      </div>
      {/* /Sidebar */}
    </>
  );
};

export default AdminSidebar;
