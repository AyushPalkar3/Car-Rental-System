import axiosClient from "./apiClient";

export type CarPartnerProfile = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNum: string;
  addressLine: string;
  status: string;
  createdAt: string;
};

export type UpdateCarPartnerProfilePayload = {
  firstName: string;
  lastName: string;
  email: string;
  addressLine?: string;
};

export type ChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

type ApiFieldError = { field?: string; message: string };

export type ApiErrorBody = {
  message?: string;
  errors?: ApiFieldError[] | string[];
};

export const carPartnerAccountAPI = {
  getProfile: () => axiosClient.get<CarPartnerProfile>("/car-partner/profile"),

  updateProfile: (payload: UpdateCarPartnerProfilePayload) =>
    axiosClient.patch<{ message: string }>("/car-partner/profile", payload),

  changePassword: (payload: ChangePasswordPayload) =>
    axiosClient.patch<{ message: string }>("/car-partner/password", payload),
};
