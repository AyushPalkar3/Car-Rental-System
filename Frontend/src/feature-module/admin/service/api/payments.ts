import axiosClient from "./apiClient";

export type GstDownloadMode = "0" | "18";

export interface AdminPaymentUser {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNum?: string | null;
  email?: string | null;
  address?: {
    addressLine?: string;
    city?: string;
    state?: string;
    pincode?: string;
    country?: string;
  } | null;
}

export interface AdminPaymentBookingCar {
  id: string;
  name: string;
  brand?: string | null;
  thumbnail?: string | null;
}

export interface AdminPaymentBooking {
  id: string;
  pickupDate: string;
  returnDate: string;
  duration: string;
  totalPrice: number;
  car: AdminPaymentBookingCar;
}

export interface AdminPayment {
  id: string;
  amount: number;
  currency: string;
  status: string;
  razorpayOrderId: string;
  razorpayPaymentId?: string | null;
  createdAt: string;
  updatedAt: string;
  invoiceNo?: string;
  invoiceStatusLabel?: string;
  user: AdminPaymentUser;
  booking: AdminPaymentBooking;
}

export interface PaymentsListResponse {
  total: number;
  count: number;
  data: AdminPayment[];
}

export function formatInvoiceCurrency(amount: number, currency = "INR") {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

/** Payment amount is treated as subtotal (taxable base). With GST 18%: GST = subtotal×18%, total = subtotal + GST. */
export function computeInvoiceTotals(amount: number, gstMode: "none" | "gst18") {
  const subtotal = Math.round(Number(amount) * 100) / 100;
  if (gstMode === "none") {
    return {
      subtotal,
      gstAmount: 0,
      total: subtotal,
    };
  }
  const gstAmount = Math.round(subtotal * 0.18 * 100) / 100;
  const total = Math.round((subtotal + gstAmount) * 100) / 100;
  return { subtotal, gstAmount, total };
}

async function fetchInvoiceBlob(id: string, gst: GstDownloadMode) {
  const res = await axiosClient.get(`/admin/payments/${id}/invoice`, {
    params: { gst },
    responseType: "blob",
    timeout: 60000,
  });
  const contentType = res.headers["content-type"] || "";
  if (contentType.includes("application/json")) {
    const text = await (res.data as Blob).text();
    const err = JSON.parse(text) as { message?: string };
    throw new Error(err.message || "Failed to download invoice");
  }
  return new Blob([res.data as BlobPart], { type: "application/pdf" });
}

export async function downloadInvoicePdf(id: string, gst: GstDownloadMode) {
  const blob = await fetchInvoiceBlob(id, gst);
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `invoice-${id}-${gst === "18" ? "gst-18" : "no-gst"}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}

/** Opens PDF in a new tab (e.g. for printing). */
export async function openInvoicePdfTab(id: string, gst: GstDownloadMode) {
  const blob = await fetchInvoiceBlob(id, gst);
  const url = window.URL.createObjectURL(blob);
  window.open(url, "_blank", "noopener,noreferrer");
  window.setTimeout(() => window.URL.revokeObjectURL(url), 60_000);
}

export const adminPaymentsApi = {
  list: (params?: { page?: number; limit?: number; status?: string }) =>
    axiosClient.get<PaymentsListResponse>("/admin/payments", { params }),

  get: (id: string) =>
    axiosClient.get<{ data: AdminPayment & { invoiceNo: string; invoiceStatusLabel: string } }>(
      `/admin/payments/${id}`
    ),
};
