import axiosClient from "./apiClient";

export type PartnerCarPricing = {
  id: string;
  carId: string;
  duration: "HOUR" | "DAY" | "WEEK" | "MONTH";
  price: number;
};

export type PartnerCar = {
  id: string;
  name: string;
  description: string;
  brand: string;
  modelYear: number;
  category?: string | null;
  carNumber?: string | null;
  plateNumber?: string | null;
  airBags?: number | null;
  transmission: string;
  fuelType: string;
  powerType: string;
  mileageKm: number;
  seating: number;
  color: string;
  hexCode: string;
  features: string[];
  images: string[];
  documents: string[];
  thumbnail?: string | null;
  isAvailable: boolean;
  featured: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  pricing?: PartnerCarPricing[];
};

export type UnavailabilityStatus = "PENDING" | "APPROVED" | "REJECTED";

export type UnavailabilityRequest = {
  id: string;
  carId: string;
  partnerId: string;
  fromDateTime: string;
  toDateTime: string;
  reason?: string | null;
  status: UnavailabilityStatus;
  adminNote?: string | null;
  createdAt: string;
  updatedAt: string;
  car?: { id: string; name: string; thumbnail?: string | null };
  partner?: { id: string; name: string; phoneNum?: string };
};

const BASE = "/car-partner/cars";
const UNAVAIL_BASE = "/car-partner/unavailability";

export const partnerCarAPI = {
  listCars: () =>
    axiosClient.get<{ count: number; data: PartnerCar[] }>(BASE),

  getCar: (id: string) =>
    axiosClient.get<PartnerCar>(`${BASE}/${id}`),

  createCar: (data: FormData) =>
    axiosClient.post<{ message: string; data: PartnerCar }>(BASE, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  updateCar: (id: string, data: FormData) =>
    axiosClient.put<{ message: string; data: PartnerCar }>(`${BASE}/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),

  deleteCar: (id: string) =>
    axiosClient.delete<{ message: string }>(`${BASE}/${id}`),
};

export const unavailabilityAPI = {
  // Car partner endpoints
  createRequest: (data: {
    carId: string;
    fromDateTime: string;
    toDateTime: string;
    reason?: string;
  }) =>
    axiosClient.post<{ message: string; data: UnavailabilityRequest }>(
      UNAVAIL_BASE,
      data
    ),

  listMyRequests: () =>
    axiosClient.get<{ count: number; data: UnavailabilityRequest[] }>(UNAVAIL_BASE),

  cancelRequest: (id: string) =>
    axiosClient.delete<{ message: string }>(`${UNAVAIL_BASE}/${id}`),
};
