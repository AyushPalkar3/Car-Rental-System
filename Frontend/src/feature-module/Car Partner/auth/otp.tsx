import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath';
import { all_routes } from '../../../router/all_routes';
import { authAPI } from '../service/api/auth';
import { toast } from 'react-toastify';

const CarPartnerOtp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const phoneNum = location.state?.phoneNum;

    const [otp, setOtp] = useState("");
    const [seconds, setSeconds] = useState(300); // 5 minutes = 300 seconds
    const [loading, setLoading] = useState(false);
    const [resending, setResending] = useState(false);

    useEffect(() => {
        if (!phoneNum) {
            toast.error("Invalid access. Please enter your phone number first.");
            navigate(all_routes.carPartnerForgotPassword);
        }
    }, [phoneNum, navigate]);

    useEffect(() => {
      const intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
      return () => clearInterval(intervalId);
    }, [seconds]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const secs = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleResend = async () => {
        if (seconds > 0) return;
        
        setResending(true);
        try {
            const response = await authAPI.resendOtp({ phoneNum });
            toast.success(response.data.message || "OTP resent successfully!");
            setSeconds(300); // Reset timer
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Failed to resend OTP.");
        } finally {
            setResending(false);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault(); 
      if (otp.length !== 4) {
          toast.error("Please enter a valid 4-digit OTP");
          return;
      }

      setLoading(true);
      try {
          await authAPI.verifyOtp({ phoneNum, otp });
          toast.success("OTP verified successfully!");
          navigate(all_routes.carPartnerResetPassword, { state: { phoneNum, otp } });
      } catch (error: any) {
          toast.error(error.response?.data?.message || "Invalid OTP. Please try again.");
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
                        <form onSubmit={handleSubmit} className="digit-group p-4">
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
                                <i className="ti ti-mail fs-24" />
                            </div>
                            <div className="text-center mb-3">
                                <h4 className="mb-1">Verify Your Phone</h4>
                                <p className="mb-0">
                                We have sent an OTP to <strong>{phoneNum}</strong>.
                                Enter the OTP to reset your password.
                                </p>
                            </div>
                            <div className="text-center otp-input">
                                <div className="d-flex align-items-center justify-content-center mb-3">
                                <Input.OTP
                                    length={4}
                                    value={otp}
                                    onChange={(value) => setOtp(value)}
                                />
                                </div>
                                <div>
                                <div className={`badge ${seconds > 0 ? 'bg-danger-transparent' : 'bg-success-transparent'} mb-3`}>
                                    <p className="d-flex align-items-center ">
                                    <i className="ti ti-clock me-1" />
                                    {formatTime(seconds)}
                                    </p>
                                </div>
                                <div className="mb-3 d-flex justify-content-center">
                                    <button
                                        type="button"
                                        onClick={handleResend}
                                        className={`btn btn-link p-0 text-secondary text-decoration-underline ${seconds > 0 || resending ? 'disabled opacity-50' : ''}`}
                                        disabled={seconds > 0 || resending}
                                    >
                                        {resending ? "Resending..." : "Resend OTP"}
                                    </button>
                                </div>
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
                                    {loading ? "Verifying..." : "Verify OTP"}
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

export default CarPartnerOtp
