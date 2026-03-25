import axiosClient from "./apiClient";
import type {
  UnavailabilityRequest,
  UnavailabilityStatus,
} from "../../Car Partner/service/api/car";

export type { UnavailabilityRequest, UnavailabilityStatus };

const ADMIN_UNAVAIL_BASE = "/admin/unavailability";

export const adminUnavailabilityAPI = {
  listRequests: (status?: UnavailabilityStatus) =>
    axiosClient.get<{ count: number; data: UnavailabilityRequest[] }>(
      ADMIN_UNAVAIL_BASE,
      { params: status ? { status } : {} }
    ),

  approve: (id: string, adminNote?: string) =>
    axiosClient.put<{
      message: string;
      data: UnavailabilityRequest;
      cancelledBookingIds?: string[];
      cancelledBookingsCount?: number;
    }>(`${ADMIN_UNAVAIL_BASE}/${id}/approve`, { adminNote }),

  reject: (id: string, adminNote?: string) =>
    axiosClient.put<{ message: string; data: UnavailabilityRequest }>(
      `${ADMIN_UNAVAIL_BASE}/${id}/reject`,
      { adminNote }
    ),
};
