import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath';
import { all_routes } from '../../../router/all_routes';

const AdminOtp = () => {

    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, [seconds]);

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault(); 
      const Path = all_routes.adminResetPassword; 
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
                        <form onSubmit={handleSubmit} className="digit-group p-4">
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
                                <i className="ti ti-mail fs-24" />
                            </div>
                            <div className="text-center mb-3">
                                <h4 className="mb-1">Verify Your Email</h4>
                                <p className="mb-0">
                                We have Sent OTP to info@example.com to verify your email
                                address and activate your account entering the OTP
                                </p>
                            </div>
                            <div className="text-center otp-input">
                                <div className="d-flex align-items-center justify-content-center mb-3">
                                {/* <input
                                    type="text"
                                    className="form-control"
                                    id="digit-1"
                                    name="digit-1"
                                    data-next="digit-2"
                                    maxLength={1}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    id="digit-2"
                                    name="digit-2"
                                    data-next="digit-3"
                                    data-previous="digit-1"
                                    maxLength={1}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    id="digit-3"
                                    name="digit-3"
                                    data-next="digit-4"
                                    data-previous="digit-2"
                                    maxLength={1}
                                />
                                <input
                                    type="text"
                                    className="form-control"
                                    id="digit-4"
                                    name="digit-4"
                                    data-next="digit-5"
                                    data-previous="digit-3"
                                    maxLength={1}
                                /> */}
                                <Input.OTP
                                    length={4}
                                    formatter={(str) => str.toUpperCase()}
                                />
                                </div>
                                <div>
                                <div className="badge bg-danger-transparent mb-3">
                                    <p className="d-flex align-items-center ">
                                    <i className="ti ti-clock me-1" />
                                    00:55
                                    </p>
                                </div>
                                <div className="mb-3 d-flex justify-content-center">
                                    <Link
                                    to="#;"
                                    className="text-secondary text-decoration-underline"
                                    >
                                    Resend OTP
                                    </Link>
                                </div>
                                </div>
                            </div>
                            <div className="mt-3">
                                <button type="submit" className="btn btn-dark w-100">
                                Reset Password
                                </button>
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
            {/* /Main Wrapper */}
        </>

    </div>
  )
}

export default AdminOtp
