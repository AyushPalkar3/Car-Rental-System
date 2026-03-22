import axiosClient from "./apiClient";

export const authAPI = {
    login: (payload: any) => axiosClient.post("/car-partner/auth/login", payload),
    forgotPassword: (payload: { phoneNum: string }) => axiosClient.post("/car-partner/auth/forgot-password", payload),
    verifyOtp: (payload: { phoneNum: string, otp: string }) => axiosClient.post("/car-partner/auth/verify-otp", payload),
    resendOtp: (payload: { phoneNum: string }) => axiosClient.post("/car-partner/auth/resend-otp", payload),
    resetPassword: (payload: any) => axiosClient.post("/car-partner/auth/reset-password", payload),
};