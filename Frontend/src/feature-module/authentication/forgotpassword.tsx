
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Link } from "react-router-dom";
import { CornerDownLeft } from "react-feather";
import { all_routes } from "../../router/all_routes";

const routes = all_routes;
const ForgotPassword = () => {
  return (
    <>
      <div className="main-wrapper login-body">
        {/* Header */}
        <header className="log-header">
          <Link to={routes.homeOne}>
            <ImageWithBasePath
              className="img-fluid logo-dark"
              src="assets/img/logo.svg"
              alt="Logo"
            />
          </Link>
        </header>
        {/* /Header */}
        <div className="login-wrapper">
          <div className="loginbox">
            <div className="login-auth">
              <div className="login-auth-wrap">
                <div className="sign-group">
                  <Link to={routes.homeOne} className="btn sign-up">
                    <span>
                      <CornerDownLeft />
                    </span>{" "}
                    Back To Home
                  </Link>
                </div>
                <h1>Forgot Password</h1>
                <p className="account-subtitle">
                  Enter your email and we will send you a link to reset your
                  password.
                </p>
                <form action="index#">
                  <div className="input-block">
                    <label className="form-label">
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder=""
                    />
                  </div>
                  <Link
                    to={routes.resetPassword}
                    className="btn btn-outline-light w-100 btn-size"
                  >
                    Save Changes
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="log-footer">
          <div className="container-fluid">
            {/* Copyright */}
            <div className="copyright">
              <div className="copyright-text">
                <p>© 2023 Dreams Rent. All Rights Reserved.</p>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </footer>
        {/* /Footer */}
      </div>
    </>
  );
};

export default ForgotPassword;
