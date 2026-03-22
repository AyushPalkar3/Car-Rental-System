
import { Link, useLocation } from "react-router-dom";
import type { breadcrumbs } from "../../core/data/interface/interface";
import { all_routes } from "../../router/all_routes";

const Breadcrumbs = (props: breadcrumbs) => {
  const routes = all_routes;
  const location = useLocation();
  let addButton = null;
  if (
    location.pathname === routes.listingGrid ||
    location.pathname === routes.listingList ||
    location.pathname === routes.listingMap ||
    location.pathname === routes.booking ||
    location.pathname === routes.invoice ||
    location.pathname === routes.listingDetails ||
    location.pathname === routes.ourTeam ||
    location.pathname === routes.testimonial ||
    location.pathname === routes.termsConditions ||
    location.pathname === routes.privacyPolicy ||
    location.pathname === routes.aboutUs ||
    location.pathname === routes.pricing ||
    location.pathname === routes.faq ||
    location.pathname === routes.gallery ||
    location.pathname === routes.blogList ||
    location.pathname === routes.blogGrid ||
    location.pathname === routes.contactUs
  ) {
    addButton = (
      <div className="breadcrumb-bar" style={{ paddingBottom: '10px' }}>
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 style={{
                paddingTop:"40px",
                marginBottom: "10px"
              }} className="breadcrumb-title">{props.title}</h2>
              {/* <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.homeOne}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">{props.subtitle}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.title}
                  </li>
                </ol>
              </nav> */}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (
    location.pathname === routes.userDashboard ||
    location.pathname === routes.userMessages ||
    location.pathname === routes.userPayment ||
    location.pathname === routes.userReviews ||
    location.pathname === routes.userBookings ||
    location.pathname === routes.userBookingUpcoming ||
    location.pathname === routes.userBookingCancelled ||
    location.pathname === routes.userBookingInprogress ||
    location.pathname === routes.userBookingComplete ||
    location.pathname === routes.userWallet ||
    location.pathname === routes.userIntegration ||
    location.pathname === routes.bookingAddon ||
    location.pathname === routes.bookingCheckout ||
    location.pathname === routes.bookingDetail ||
    location.pathname === routes.bookingPayment ||
    location.pathname === routes.bookingSuccess ||
    location.pathname === routes.bookingCheckout
  ) {
    addButton = (
      <div className="breadcrumb-bar">
        {/* <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">{props.title}</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.homeOne}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.subtitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div> */}
      </div>
    );
  } else {
    addButton = (
      <div className="row align-items-center">
        {/* <div className="col">
          <h3 className="page-title"></h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/admin-dashboard">{props.title}</Link>
            </li>
            <li className="breadcrumb-item active">{props.subtitle}</li>
          </ul>
        </div> */}
        {/* <div className="col-auto float-end ms-auto"></div> */}
      </div>
    );
  }
  return <>{addButton}</>;
};

export default Breadcrumbs;
