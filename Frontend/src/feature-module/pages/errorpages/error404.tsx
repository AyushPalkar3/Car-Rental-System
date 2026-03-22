
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../router/all_routes";
import { Link } from "react-router-dom";

const Error404 = () => {
  const routes = all_routes;
  return (
    <div className="main-wrapper">
      <div className="error-box">
        <ImageWithBasePath
          src="assets/img/404.png"
          className="img-fluid"
          alt="Page not found"
        />
        <h3>Oops! Page not found!</h3>
        <p>The page you requested was not found.</p>
        <div className="back-button">
          <Link to={routes.homeOne} className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
