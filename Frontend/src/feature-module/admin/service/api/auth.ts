import axiosClient from "./apiClient";

export const authAPI = {
    login: (payload: any) => axiosClient.post("/admin/auth/login", payload),
    changePassword: (payload: any) => axiosClient.post("/admin/auth/change-password", payload),
};  