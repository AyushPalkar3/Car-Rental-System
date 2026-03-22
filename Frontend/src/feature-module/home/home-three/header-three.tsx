import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { header } from "../../../core/data/json/header";


const HeaderThree = () => {
 const [scrolled, setScrolled] = useState(false);
   const [subOpen, setSubopen] = useState<any>("");
   const [subsidebar, setSubsidebar] = useState("");
   const [subsidebar2, setSubsidebar2] = useState("");
   const [basePath, setBasePath] = useState('');
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
     setBasePath(pathArray[0])
   }, [location.pathname])

  return (
    <>
      <header className={`header header-three ${scrolled ? "header-fixed" : ""}`}>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to={all_routes.homeOne} className="navbar-brand logo">
                <ImageWithBasePath
                  src="assets/img/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
              <Link to={all_routes.homeOne} className="navbar-brand logo-small">
                <ImageWithBasePath
                  src="assets/img/logo-small.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to={all_routes.homeOne} className="menu-logo">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    className="img-fluid"
                    alt="Logo"
                  />
                </Link>
                <Link id="menu_close" className="menu-close" to="#" onClick={() => onhandleCloseMenu()}>
                  {" "}
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className={`main-nav `}>
                {header.map((mainMenus:any, mainIndex) => (
                  <React.Fragment key={mainIndex}>
                    {mainMenus.separateRoute ? (
                      <li
                        key={mainIndex}
                        className={
                          `has-submenu megamenu ${location.pathname.includes('index')
                            ? "active"
                            : ""}`
                        }
                        onClick={()=>toggleSidebar(mainMenus.tittle)}
                        
                      >
                        <Link to='#'>{mainMenus.tittle}<i className={` ${basePath === 'instructor' || basePath === 'student' ? "isax isax-add" : "fas fa-chevron-down"}`} /></Link> 
                        <ul className={`submenu mega-submenu ${subOpen === mainMenus.tittle ? "d-block" : ""}`} >
                        <li>
                          <div className="megamenu-wrapper">
                            <div className="row">
                            {mainMenus.menu.map((menu: any, idx: any) => (
                              
                            
                                <div className="col-lg-3" key={idx}>
                                <div className={`single-demo ${location.pathname === menu.route ? 'active' : ''}`}>
                                  <div className="demo-img">
                                    <Link to={menu.route} >
                                      <ImageWithBasePath
                                        src={menu.img}
                                        className="img-fluid "
                                        alt="img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="demo-info">
                                    <Link to={menu.route} className="inner-demo-img">
                                    {menu.menuValue} <span className={`${menu.hot ? 'hot':'new'}`}>{menu.hot ? 'Hot':'New'}</span>
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
                        className={`has-submenu ${mainMenus?.menu?.some((item:any) => item?.route?.includes(location.pathname)) || basePath === mainMenus.base || basePath === mainMenus.base2 ? "active" : ""}`}
                      >
                        <Link  to="#" onClick={()=>toggleSidebar(mainMenus.tittle)}>
                          {mainMenus.tittle}{" "}
                          <i className={` ${basePath === 'instructor' || basePath === 'student' ? "isax isax-add" : "fas fa-chevron-down"}`}></i>
                        </Link>
                        <ul
                          className={`submenu ${subOpen === mainMenus.tittle ? "d-block" : ""}`}
                        >
                          {mainMenus.menu?.map((menu:any, menuIndex:any) => (
                            <React.Fragment key={`${mainIndex}-${menuIndex}`}>
                              {menu.hasSubRoute ? (
                                <li
                                  key={`${mainIndex}-${menuIndex}`}
                                  className={`${menu.hasSubRoute ? "has-submenu" : ""} ${menu?.subMenus?.some((item:any) => item?.route?.includes(location.pathname)) || basePath === menu.base ? "active" : ""}`}
                                >
                                  <Link to="#" className={`hideonmob`} onClick={()=>{toggleSubsidebar(menu.menuValue)}}>{menu.menuValue}</Link>
                                  <ul
                                    className={`submenu showonmob ${subsidebar === menu.menuValue  ? "d-block" : ""}`}
                                  >
                                    {menu.subMenus?.map((subMenu:any, subMenuIndex:any) => (
                                      <React.Fragment key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}>
                                      {subMenu.hasSubRoute ? 
                                        <li className={`${menu.hasSubRoute ? "has-submenu" : ""} ${subMenu?.subMenus?.some((item:any) => item?.route?.includes(location.pathname))  ? "active" : ""}`}>
                                        <Link to="#" onClick={()=>{toggleSubsidebar2(subMenu.menuValue)}}>{subMenu.menuValue}</Link>
                                        <ul className={`submenu ${subsidebar2 === subMenu.menuValue ? "d-block" : ""}`}>
                                        {subMenu.subMenus?.map((menu:any, menuIndex2:any) => (
                                          <li key={menuIndex2} className={location.pathname === menu.route ? 'active':''}><Link to={menu.route}>{menu.menuValue}</Link></li>
                                          ))}
                                        </ul>
                                      </li>
                                        : 
                                        <li className={location.pathname === subMenu.route ? 'active':''}  key={`${mainIndex}-${menuIndex}-${subMenuIndex}`}>
                                        <Link to={subMenu.route} target={`${subMenu.admin ? '_blank':'_self'}`}>
                                          {subMenu.menuValue}
                                        </Link>
                                      </li>
                                  }
                                    </React.Fragment>
                                    ))}
                                  </ul>
                                </li>
                              ) : (
                                <li
                                  key={`${mainIndex}-${menuIndex}`}
                                  className={
                                    location.pathname.includes(menu.route || "")
                                      ? "active"
                                      : ""
                                  }
                                >
                                  <Link to={menu.route}>{menu.menuValue}</Link>
                                </li>
                              )}
                            </React.Fragment>
                          ))}
                        </ul>
                      </li>
                    )}
                  </React.Fragment>
                ))}
              
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item user-link">
                <Link className="nav-link header-user" to={all_routes.register}>
                  <i className="bx bx-user" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-reg" to={all_routes.listingList}>
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
    </>
  );
};

export default HeaderThree;



