
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";

const ComingSoon = () => {
  const routes = all_routes;

  return (
    <div className="main-wrapper">
      <div className="error-box">
        <ImageWithBasePath
          src="assets/img/comingSoon.png"
          className="img-fluid"
          alt="Coming Soon"
        />
        <h2 className="coming-soon">Coming Soon</h2>
        <p>
          We&apos;ll be here soon with our new awesome site, subscribe to be
          notified.
        </p>
        <h6>We&apos;ll Be Back Shortly</h6>
        <div className="footer-social-links">
        <ul className="nav">
            <li>
              <Link to="#" target="_blank">
                <i className="feather icon-instagram hi-icon" />
                 
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank">
                <i className="feather icon-twitter hi-icon" />
                
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank">
                <i className="feather icon-youtube hi-icon" />
                
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank">
                <i className="feather icon-facebook hi-icon" />
                 
              </Link>
            </li>
            <li>
              <Link to="#" target="_blank">
                <i className="feather icon-linkedin hi-icon" />
                
              </Link>
            </li>
          </ul>
        </div>
        <div className="serve-form">
          <form action="#">
            <div className="input-block">
              <div className="row">
                <div className="col-lg-9 col-md-6 col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="col-lg-3  col-md-6 col-12">
                  <button
                    type="submit"
                    className="btn button-notific btn-secondary d-flex align-items-center"
                  >
                    <span>Notify me</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Link to={routes.homeOne} className="btn-maintance btn btn-primary">
          Back to Home
          <span className="ms-2">
            <i className="fe feather icon-arrow-right" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;
