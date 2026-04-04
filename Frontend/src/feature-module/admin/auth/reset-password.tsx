import React, { useState } from 'react'
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath'
import { all_routes } from '../../../router/all_routes'
import { Link, useNavigate } from 'react-router-dom'
type PasswordField = "password" | "confirmPassword";

const AdminResetPassword = () => {

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

      const navigate = useNavigate();
        const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault(); 
            const Path = all_routes.adminlogin; 
            navigate(Path);
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
                                alt="Logo"
                                style={{ maxWidth: "250px", height: "auto", marginBottom: "50px"  }}
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
                                    <button type="submit" className="btn btn-dark w-100">
                                    Reset Password
                                    </button>
                                </div>
                                <p className="text-center mt-4">
                                    Return to{" "}
                                    <Link
                                    to={all_routes.adminlogin}
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

export default AdminResetPassword
