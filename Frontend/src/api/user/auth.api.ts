import axiosClient from "./apiClient";

export const authAPI = {
  sendOtp: (data:any) => axiosClient.post("/auth/request-otp",data),
  verifyOtp: (data:any) => axiosClient.post(`/auth/verify-otp`,data),
};