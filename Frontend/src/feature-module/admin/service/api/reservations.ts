import apiClient from "./apiClient";

export type BookingStatus = "PENDING" | "CONFIRMED" | "CANCELLED" | "COMPLETED";
export type DurationType = "HOUR" | "DAY" | "WEEK" | "MONTH";
export type BookingType = "DELIVERY" | "PICKUP";

export type AdminReservation = {
  id: string;
  createdAt?: string;
  carId: string;
  pricingId: string;
  userId: string;
  duration: DurationType;
  totalPrice: number;
  bookingType: BookingType;
  deliveryAddress?: string | null;
  returnAddress?: string | null;
  sameReturn: boolean;
  pickupDate: string;
  returnDate: string;
  status: BookingStatus;
  color?: string | null;
  hexCode?: string | null;
  couponId?: string | null;
  car?: {
    id: string;
    name: string;
    brand: string;
    category?: string | null;
    thumbnail?: string | null;
    images?: string[];
    color?: string;
    hexCode?: string | null;
  };
  user?: {
    id: string;
    phoneNum: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
  };
  pricing?: { id: string; duration: DurationType; price: number };
  createdAt?: string;
  updatedAt?: string;
};

export type AdminReservationPayload = {
  carId: string;
  pricingId: string;
  userId: string;
  duration: DurationType;
  totalPrice: number;
  bookingType: BookingType;
  deliveryAddress?: string;
  returnAddress?: string;
  sameReturn: boolean;
  pickupDate: string;
  returnDate: string;
  status?: BookingStatus;
  color?: string;
  hexCode?: string;
  couponId?: string | null;
};

export const listReservations = async (): Promise<AdminReservation[]> => {
  const response = await apiClient.get<AdminReservation[]>("/admin/reservations");
  return response.data;
};

export const getReservationById = async (id: string): Promise<AdminReservation> => {
  const response = await apiClient.get<AdminReservation>(`/admin/reservations/${id}`);
  return response.data;
};

export const createReservation = async (
  data: AdminReservationPayload
): Promise<AdminReservation> => {
  const response = await apiClient.post<AdminReservation>("/admin/reservations", data);
  return response.data;
};

export const updateReservation = async (
  id: string,
  data: Partial<AdminReservationPayload>
): Promise<AdminReservation> => {
  const response = await apiClient.put<AdminReservation>(
    `/admin/reservations/${id}`,
    data
  );
  return response.data;
};

export const deleteReservation = async (id: string): Promise<{ message: string }> => {
  const response = await apiClient.delete<{ message: string }>(
    `/admin/reservations/${id}`
  );
  return response.data;
};
