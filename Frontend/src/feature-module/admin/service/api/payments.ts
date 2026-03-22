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

function parseFilenameFromContentDisposition(cd: string | undefined): string | null {
  if (!cd) return null;
  const utf8 = cd.match(/filename\*\s*=\s*UTF-8''([^;\s]+)/i);
  if (utf8?.[1]) {
    try {
      return decodeURIComponent(utf8[1].replace(/"/g, ""));
    } catch {
      return utf8[1].replace(/"/g, "");
    }
  }
  const simple = cd.match(/filename\s*=\s*("?)([^";\n]+)\1/i);
  return simple?.[2]?.trim() || null;
}

async function messageFromErrorBlob(blob: Blob): Promise<string> {
  const text = await blob.text();
  try {
    const j = JSON.parse(text) as { message?: string };
    return j.message || "Failed to download invoice";
  } catch {
    return "Failed to download invoice";
  }
}

async function fetchInvoiceBlob(
  id: string,
  gst: GstDownloadMode
): Promise<{ blob: Blob; filename: string | null }> {
  try {
    const res = await axiosClient.get(`/admin/payments/${id}/invoice`, {
      params: { gst },
      responseType: "blob",
      timeout: 60000,
    });
    const raw = res.data as Blob;
    const contentType = String(res.headers["content-type"] || "").toLowerCase();

    if (contentType.includes("application/json")) {
      throw new Error(await messageFromErrorBlob(raw));
    }

    const head = await raw.slice(0, 5).text();
    const looksLikePdf = head.startsWith("%PDF");
    const looksLikeJson = head.trimStart().startsWith("{");
    if (!looksLikePdf && looksLikeJson) {
      throw new Error(await messageFromErrorBlob(raw));
    }

    const filename = parseFilenameFromContentDisposition(
      res.headers["content-disposition"] as string | undefined
    );
    const pdfBlob = new Blob([raw], { type: "application/pdf" });
    return { blob: pdfBlob, filename };
  } catch (e: unknown) {
    if (e instanceof Blob) {
      throw new Error(await messageFromErrorBlob(e));
    }
    if (typeof e === "string") {
      throw new Error(e);
    }
    if (e instanceof Error) {
      throw e;
    }
    throw new Error("Failed to download invoice");
  }
}

export async function downloadInvoicePdf(id: string, gst: GstDownloadMode) {
  const { blob, filename } = await fetchInvoiceBlob(id, gst);
  const fallback = `invoice-${id}-${gst === "18" ? "gst-18" : "no-gst"}.pdf`;
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename || fallback;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}

export const adminPaymentsApi = {
  list: (params?: { page?: number; limit?: number; status?: string }) =>
    axiosClient.get<PaymentsListResponse>("/admin/payments", { params }),

  get: (id: string) =>
    axiosClient.get<{ data: AdminPayment & { invoiceNo: string; invoiceStatusLabel: string } }>(
      `/admin/payments/${id}`
    ),
};
