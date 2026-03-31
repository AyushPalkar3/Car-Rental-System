import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { CornerDownLeft } from "react-feather";
import { all_routes } from "../../router/all_routes";
import { authAPI } from "../../api/user/auth.api";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { getProfile } from "../user/userSlice";
import { getSafeInternalPath } from "../../utils/safeRedirect";

const routes = all_routes;

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  /* ================= SEND OTP ================= */
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!phone || phone.length < 10) {
      setError("Please enter a valid phone number");
      return;
    }

    try {
      setLoading(true);

      const res = await authAPI.sendOtp({ phoneNum: phone });
      console.log(res)

      if (res.status === 200) {
        setIsOtpSent(true);
      } else {
        setError("Failed to send OTP. Please try again.");
      }
    } catch (err: any) {
      setError(err.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  /* ================= VERIFY OTP ================= */
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!otp || otp.length < 4) {
      setError("Please enter a valid OTP");
      return;
    }

    try {
      setLoading(true);
      const res = await authAPI.verifyOtp({
        phoneNum: phone,
        otp: otp, // ✅ fixed typo
      });



      if (res.status === 200) {
        const { accessToken, refreshToken } = res.data;

      // ✅ Set cookies
      Cookies.set("accessToken", accessToken, {
        expires: 1,          // 1 day
        secure: true,
        sameSite: "strict",
      });

      Cookies.set("refreshToken", refreshToken, {
        expires: 7,          // 7 days
        secure: true,
        sameSite: "strict",
      });

        try {
          await dispatch(getProfile() as any).unwrap();
        } catch {
          /* profile optional for navigation */
        }

        const redirect = getSafeInternalPath(searchParams.get("redirect"));
        navigate(redirect || routes.homeOne, { replace: true });
      } else {
        setError("Invalid OTP. Please try again.");
      }
      console.log("RES",res)
    } catch (err: any) {
      setError(err.error || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper login-body">
      <header className="log-header">
        <Link to={routes.homeOne}>
          <ImageWithBasePath
            className="img-fluid logo-dark p-4"
            src="assets/img/light-theme-logo-authentication.png"
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

              <h1>Continue with Phone</h1>
              <p className="account-subtitle">
                We will send an OTP to verify your number
              </p>

              {/* 🔴 Error Message */}
              {error && (
                <div className="alert alert-danger py-2">
                  {error}
                </div>
              )}

              <form>
                {/* Phone */}
                <div className="input-block">
                  <label className="form-label">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                    value={phone}
                    disabled={isOtpSent}
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

                {!isOtpSent ? (
                  <button
                    className="btn btn-outline-light w-100 btn-size mt-1"
                    onClick={handleSendOtp}
                    disabled={loading}
                  >
                    {loading ? "Sending OTP..." : "Send OTP"}
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-light w-100 btn-size mt-1"
                    onClick={handleVerifyOtp}
                    disabled={loading}
                  >
                    {loading ? "Verifying..." : "Verify & Continue"}
                  </button>
                )}
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;