import axiosClient from "./apiClient";

export const carPartnerAPI = {
    create: (payload: any) => axiosClient.post("/car-partner/auth/register", payload),
    getAll: () => axiosClient.get("/admin/car-partner"),
    getProfile: () => axiosClient.get("/car-partner/profile"),
    setStatus: (id: string, status: "Active" | "Inactive") =>
        axiosClient.patch(`/admin/car-partner/${id}/status`, { status }),
    update: (
        id: string,
        payload: { name: string; email: string; address?: string | null }
    ) => axiosClient.patch(`/admin/car-partner/${id}`, payload),
};  