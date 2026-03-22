import React, { useState } from 'react'
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath'
import { Link, useNavigate } from 'react-router-dom'
import { all_routes } from '../../../router/all_routes'
import { authAPI } from '../service/api/auth'
import { toast } from 'react-toastify'

const CarPartnerForgotPassword = () => {
    const [phoneNum, setPhoneNum] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); 
        if (!phoneNum) {
            toast.error("Please enter your phone number");
            return;
        }

        setLoading(true);
        try {
            const response = await authAPI.forgotPassword({ phoneNum });
            toast.success(response.data.message || "OTP sent successfully!");
            // Pass phone number to OTP page via state
            navigate(all_routes.carPartnerOtp, { state: { phoneNum } });
        } catch (error: any) {
            console.error("Forgot password error:", error);
            toast.error(error.response?.data?.message || "Failed to send OTP. Please try again.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <div>
      <div className="main-wrapper">
        <div className="container-fuild">
            <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
                <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
                    <div className="col-lg-5 mx-auto">
                        <form onSubmit={handleSubmit} className="p-4">
                            <div className="mx-auto mb-5 text-center">
                                <ImageWithBasePath src="assets/admin/img/logo.svg" className="img-fluid" alt="Logo" />
                            </div>
                            <div className="card authentication-card mb-0">
                                <div className="card-body">
                                    <div className="login-icon bg-dark d-flex align-items-center justify-content-center mx-auto mb-4">
                                        <i className="ti ti-lock-bolt fs-24" />
                                    </div>
                                    <div className="text-center mb-3">
                                        <h4 className="mb-1">Forgot Password</h4>
                                        <p className="mb-0">
                                            If you forgot your password, well, then we’ll send you
                                            instructions to reset your password via your phone number.
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">
                                            Phone Number <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group">
                                            <input 
                                                type="text" 
                                                className="form-control border-end-0" 
                                                placeholder="Enter Phone Number"
                                                value={phoneNum}
                                                onChange={(e) => setPhoneNum(e.target.value)}
                                                required
                                            />
                                            <span className="input-group-text border-start-0">
                                                <i className="ti ti-phone" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <button 
                                            type="submit" 
                                            className="btn btn-dark w-100"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                            ) : null}
                                            {loading ? "Sending..." : "Reset Password"}
                                        </button>
                                    </div>
                                    <div className="mt-3 text-center">
                                        <p>
                                            Return to{" "}
                                            <Link
                                            to={all_routes.carPartnerLogin}
                                            className="link-secondary text-decoration-underline"
                                            >
                                            Sign In
                                            </Link>
                                        </p>
                                    </div>
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

    </div>
  )
}

export default CarPartnerForgotPassword
