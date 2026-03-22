import { useState } from "react";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Link } from "react-router-dom";
import { CornerDownLeft } from "react-feather";
import { all_routes } from "../../router/all_routes";

const routes = all_routes;

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = (e:any) => {
    e.preventDefault();

    if (!firstName || !lastName || !phone) {
      alert("Please fill all required fields");
      return;
    }

    // 🔥 API call to send OTP
    console.log("Sending OTP to:", phone, firstName, lastName);

    setIsOtpSent(true);
  };

  const handleVerifyOtp = (e:any) => {
    e.preventDefault();

    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    // 🔥 API call to verify OTP & create user
    console.log("Verifying OTP:", otp);

    // navigate(routes.login);
  };

  return (
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

      <div className="login-wrapper">
        <div className="loginbox">
          <div className="login-auth">
            <div className="login-auth-wrap">
              <div className="sign-group">
                <Link to={routes.homeOne} className="btn sign-up">
                  <span><CornerDownLeft /></span> Back To Home
                </Link>
              </div>

              <h1>Sign Up</h1>
              <p className="account-subtitle">
                We will send an OTP to your phone number
              </p>

              <form>
                {/* First Name */}
                <div className="input-block">
                  <label className="form-label">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                {/* Last Name */}
                <div className="input-block">
                  <label className="form-label">
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                {/* Phone Number */}
                <div className="input-block">
                  <label className="form-label">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                {/* OTP */}
                {isOtpSent && (
                  <div className="input-block">
                    <label className="form-label">
                      OTP <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                )}

                {/* Buttons */}
                {!isOtpSent ? (
                  <button
                    className="btn btn-outline-light w-100 btn-size mt-1"
                    onClick={handleSendOtp}
                  >
                    Send OTP
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-light w-100 btn-size mt-1"
                    onClick={handleVerifyOtp}
                  >
                    Verify OTP & Sign Up
                  </button>
                )}

                <div className="text-center dont-have mt-3">
                  Already have an Account?{" "}
                  <Link to={routes.login}>Sign In</Link>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="log-footer">
        <div className="container-fluid">
          <div className="copyright">
            <div className="copyright-text">
              <p>© 2023 Dreams Rent. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
