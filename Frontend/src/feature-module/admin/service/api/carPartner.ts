import axiosClient from "./apiClient";

export const carPartnerAPI = {
    create: (payload: any) => axiosClient.post("/car-partner/auth/register", payload),
    getAll: () => axiosClient.get("/admin/car-partner"),
};  