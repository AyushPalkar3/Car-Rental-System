import axiosClient from "./apiClient";

export const adminCarAPI = {
  // Cars CRUD
  listCars: (params?: Record<string, any>) =>
    axiosClient.get("/admin/cars", { params }),

  getCar: (id: string) =>
    axiosClient.get(`/admin/cars/${id}`),

  createCar: (data: FormData) =>
    axiosClient.post("/admin/cars", data),

  updateCar: (id: string, data: FormData | Record<string, any>) =>
    axiosClient.put(`/admin/cars/${id}`, data),

  deleteCar: (id: string) =>
    axiosClient.delete(`/admin/cars/${id}`),

  toggleAvailability: (id: string) =>
    axiosClient.patch(`/admin/cars/${id}/toggle-availability`),

  // Seasonal Pricing
  listSeasonalPricing: (carId?: string) =>
    axiosClient.get("/admin/seasonal-pricing", { params: carId ? { carId } : {} }),

  getSeasonalPricing: (id: string) =>
    axiosClient.get(`/admin/seasonal-pricing/${id}`),

  createSeasonalPricing: (data: {
    carId: string;
    name: string;
    startDate: string;
    endDate: string;
    hourPrice?: number | null;
    dayPrice?: number | null;
    weekPrice?: number | null;
    monthPrice?: number | null;
    isActive?: boolean;
  }) => axiosClient.post("/admin/seasonal-pricing", data),

  updateSeasonalPricing: (id: string, data: Partial<{
    name: string;
    startDate: string;
    endDate: string;
    hourPrice: number | null;
    dayPrice: number | null;
    weekPrice: number | null;
    monthPrice: number | null;
    isActive: boolean;
  }>) => axiosClient.put(`/admin/seasonal-pricing/${id}`, data),

  deleteSeasonalPricing: (id: string) =>
    axiosClient.delete(`/admin/seasonal-pricing/${id}`),

  // Payments
  listPayments: (params?: { status?: string; page?: number; limit?: number }) =>
    axiosClient.get("/admin/payments", { params }),

  getPayment: (id: string) =>
    axiosClient.get(`/admin/payments/${id}`),

  updatePaymentStatus: (id: string, status: string) =>
    axiosClient.patch(`/admin/payments/${id}/status`, { status }),
};
