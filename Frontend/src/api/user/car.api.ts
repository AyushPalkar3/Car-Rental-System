import axiosClient from "./apiClient";

export type CarListSearchParams = {
  pickup?: string;
  returnAt?: string;
};

export const carAPI = {
  getAllCars: (params?: CarListSearchParams) =>
    axiosClient.get("/cars", { params }),
  getPopularCars: (params?: { limit?: number }) =>
    axiosClient.get("/cars/popular", { params }),
  getCar: (id: any) => axiosClient.get(`/cars/${id}`),
  createCar: (data: FormData) => axiosClient.post("/cars", data),
};
