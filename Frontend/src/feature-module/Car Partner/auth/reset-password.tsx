import React, { useEffect, useState } from 'react'
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath'
import { all_routes } from '../../../router/all_routes'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { authAPI } from '../service/api/auth';
import { toast } from 'react-toastify';

type PasswordField = "password" | "confirmPassword";

const CarPartnerResetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const phoneNum = location.state?.phoneNum;
    const otp = location.state?.otp;

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!phoneNum || !otp) {
            toast.error("Invalid access. Please verify your OTP first.");
            navigate(all_routes.carPartnerForgotPassword);
        }
    }, [phoneNum, otp, navigate]);

    const [passwordVisibility, setPasswordVisibility] = useState({
        password: false,
        confirmPassword: false,
      });
    
      const togglePasswordVisibility = (field: PasswordField) => {
        setPasswordVisibility((prevState) => ({
          ...prevState,
          [field]: !prevState[field],
        }));
      };

        const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault(); 
            
            if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }

            if (password.length < 6) {
                toast.error("Password must be at least 6 characters long");
                return;
            }

            setLoading(true);
            try {
                const response = await authAPI.resetPassword({
                    phoneNum,
                    otp,
                    newPassword: password
                });
                toast.success(response.data.message || "Password reset successfully!");
                navigate(all_routes.carPartnerLogin);
            } catch (error: any) {
                toast.error(error.response?.data?.message || "Failed to reset password.");
            } finally {
                setLoading(false);
            }
        };

    return (
        <div>
            <>
                {/* Main Wrapper */}
                <div className="main-wrapper">
                    <div className="container-fuild">
                    <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
                        <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
                        <div className="col-lg-5 mx-auto">
                            <form onSubmit={handleSubmit} className="p-4">
                            <div className="mx-auto mb-5 text-center">
                                <ImageWithBasePath
                                src="assets/img/light-theme-logo-authentication.png"
                                className="img-fluid"
                                style={{ maxWidth:'250px' , height:'auto' }}
                                alt="Logo"
                                />
                            </div>
                            <div className="card authentication-card mb-0">
                                <div className="card-body">
                                <div className="login-icon bg-dark d-flex align-items-center justify-content-center mx-auto mb-4">
                                    <i className="ti ti-lock-star fs-24" />
                                </div>
                                <div className="text-center mb-3">
                                    <h4 className="mb-1">Reset Password</h4>
                                    <p className="mb-0">Enter New Password</p>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                    New Password <span className="text-danger">*</span>
                                    </label>
                                    <div className="pass-group">
                                    <input
                                       type={
                                            passwordVisibility.password ? "text" : "password"
                                        }
                                        className="pass-input form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <span 
                                        className={`ti toggle-password ${
                                            passwordVisibility.password
                                            ? "ti-eye"
                                            : "ti-eye-off"
                                        }`}
                                        onClick={() => togglePasswordVisibility("password")}
                                    />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                    Confirm Password <span className="text-danger">*</span>
                                    </label>
                                    <div className="pass-group">
                                    <input
                                       type={
                                            passwordVisibility.confirmPassword ? "text" : "password"
                                        }
                                        className="pass-input form-control"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                    <span 
                                        className={`ti toggle-password ${
                                            passwordVisibility.confirmPassword
                                            ? "ti-eye"
                                            : "ti-eye-off"
                                        }`}
                                        onClick={() => togglePasswordVisibility("confirmPassword")}
                                    />
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <button 
                                        type="submit" 
                                        className="btn btn-dark w-100"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        ) : null}
                                        {loading ? "Resetting..." : "Reset Password"}
                                    </button>
                                </div>
                                <p className="text-center mt-4">
                                    Return to{" "}
                                    <Link
                                    to={all_routes.carPartnerLogin}
                                    className="text-secondary text-decoration-underline"
                                    >
                                    Sign In
                                    </Link>
                                </p>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="login-bg">
                    <ImageWithBasePath
                        src="assets/admin/img/bg/login-bg-01.png"
                        alt="img"
                        className="login-bg-01"
                    />
                    <ImageWithBasePath
                        src="assets/admin/img/bg/login-bg-02.png"
                        alt="img"
                        className="login-bg-02"
                    />
                    </div>
                </div>
                {/* /Main Wrapper */}
                </>

        </div>
    )
}

export default CarPartnerResetPassword
