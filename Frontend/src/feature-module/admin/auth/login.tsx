import React, { useState } from "react";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { useNavigate } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import { authAPI } from "../service/api/auth";
import axios from "axios";
import Cookies from "js-cookie";

type PasswordField = "password" | "confirmPassword";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState({
    phoneNum: "",
    password: "",
  })

  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const [formData, setFormData] = useState({
    phoneNum: "",
    password: "",
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if(!formData.phoneNum || !formData.password || !formData.phoneNum.match(/^[6-9]\d{9}$/)){
      setError({
        phoneNum: !formData.phoneNum ? "Phone Number is required" : !formData.phoneNum.match(/^[6-9]\d{9}$/) ? "Phone Number is invalid" : "",
        password: !formData.password ? "Password is required" : "",
      })
      return;
    }

    try {
      setLoading(true);



      const res = await authAPI.login(formData);

      Cookies.set("adminAccessToken", res.data.accessToken);

      navigate(all_routes.adminDashboard);
    } catch (error: any) {
      alert(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  return (
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
                  <i className="ti ti-login fs-24" />
                </div>
                <div className="text-center mb-3">
                  <h4 className="mb-1">Welcome Back</h4>
                  <p className="mb-0">Please enter your details to sign in</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Phone Number <span className="text-danger">*</span>
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      name="phoneNum"
                      defaultValue=""
                      value={formData.phoneNum}
                      onChange={handleChange}
                      className="form-control border-end-0"
                    />
                    
                    <span className="input-group-text border-start-0">
                      <i className="ti ti-user-circle" />
                    </span>
                    
                  </div>
                  <span className="text-danger">{error.phoneNum}</span>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="pass-group">
                    <input
                    name="password"
                      type={
                        passwordVisibility.password ? "text" : "password"
                      }
                      value={formData.password}
                      onChange={handleChange}
                      className="pass-input form-control"
                    />
                    <span className="text-danger">{error.password}</span>
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
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md mb-0">
                      <input
                        className="form-check-input"
                        id="remember_me"
                        type="checkbox"
                      />
                      <label
                        htmlFor="remember_me"
                        className="form-check-label mt-0"
                      >
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="text-end">
                    {/* <Link
                      to={all_routes.adminForgotPassword}
                      className="link-default text-decoration-underline"
                    >
                      Forgot Password
                    </Link> */}
                  </div>
                </div>
                <div className="mt-3">
                  <button disabled={loading} type="submit" className="btn btn-dark w-100">
                    {loading ? "Logging in..." : "Login"}
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

  )
}

export default AdminLogin