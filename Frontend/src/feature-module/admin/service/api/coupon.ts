import apiClient from "./apiClient";

export const getCoupons = async () => {
    const response = await apiClient.get('/admin/coupons');
    return response.data;
};

export const addCoupon = async (data: any) => {
    const response = await apiClient.post('/admin/coupons', data);
    return response.data;
};

export const updateCoupon = async (id: string, data: any) => {
    const response = await apiClient.put(`/admin/coupons/${id}`, data);
    return response.data;
};

export const deleteCoupon = async (id: string) => {
    const response = await apiClient.delete(`/admin/coupons/${id}`);
    return response.data;
};
