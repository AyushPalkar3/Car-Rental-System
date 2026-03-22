import axiosClient from "./apiClient";

export type ValidateCouponBody = {
  code: string;
  subtotalBeforeDiscount: number;
  carId: string;
  pickupDate: string;
  returnDate: string;
  userId?: string;
};

export type ValidateCouponResponse = {
  valid: boolean;
  coupon: {
    id: string;
    code: string;
    name: string;
    type: string;
    value: number;
  };
  discountAmount: number;
  finalTotal: number;
};

export const couponAPI = {
  validate: (body: ValidateCouponBody) =>
    axiosClient.post<ValidateCouponResponse>("/coupons/validate", body),
};
