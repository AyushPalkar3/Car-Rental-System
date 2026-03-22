import axiosClient from "./apiClient";

export const userAPI = {
    getAll: () => axiosClient.get("/admin/users"),
    getById: (id: string) => axiosClient.get(`/admin/users/${id}`),
    toggleStatus: (id: string) => axiosClient.patch(`/admin/users/${id}/toggle-block`),
};
