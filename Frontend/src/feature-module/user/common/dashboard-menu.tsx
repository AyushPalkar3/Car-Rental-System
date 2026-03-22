
import { all_routes } from "../../../router/all_routes";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { Link, useLocation } from "react-router-dom";

const DashboardMenu = () => {
  const routes = all_routes;
  const location = useLocation();
  const isLinkActive = (route: string) => {
    return location.pathname === route;
  };
  return (
    <div className="dashboard-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="dashboard-menu">
              <ul>
                <li>
                  <Link to={routes.userDashboard} className={isLinkActive(routes.userDashboard) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/dashboard-icon.svg"
                      alt="Icon"
                    />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to={routes.userBookings} className={isLinkActive(routes.userBookings) || isLinkActive(routes.userBookingInprogress) || isLinkActive(routes.userBookingUpcoming) || isLinkActive(routes.userBookingComplete) || isLinkActive(routes.userBookingCancelled) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/booking-icon.svg"
                      alt="Icon"
                    />
                    <span>My Bookings</span>
                  </Link>
                </li>
                {/* <li>
                  <Link to={routes.userReviews} className={isLinkActive(routes.userReviews) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/review-icon.svg"
                      alt="Icon"
                    />
                    <span>Reviews</span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to={routes.userWishlist} className={isLinkActive(routes.userWishlist) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/wishlist-icon.svg"
                      alt="Icon"
                    />
                    <span>Wishlist</span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to={routes.userMessages} className={isLinkActive(routes.userMessages) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/message-icon.svg"
                      alt="Icon"
                    />
                    <span>Messages</span>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to={routes.userWallet} className={isLinkActive(routes.userWallet) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/wallet-icon.svg"
                      alt="Icon"
                    />
                    <span>My Wallet</span>
                  </Link>
                </li> */}
                <li>
                  <Link to={routes.userPayment} className={isLinkActive(routes.userPayment) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/payment-icon.svg"
                      alt="Icon"
                    />
                    <span>Payments</span>
                  </Link>
                </li>
                <li>
                <Link to={routes.userSettings} className={isLinkActive(routes.userSettings) || isLinkActive(routes.userSecurity) || isLinkActive(routes.preference) || isLinkActive(routes.notification) || isLinkActive(routes.userIntegration) ? "active" : ""}>
                    <ImageWithBasePath
                      src="assets/img/icons/settings-icon.svg"
                      alt="Icon"
                    />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
