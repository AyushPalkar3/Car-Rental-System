import PDFDocument from "pdfkit";
import { buildInvoicePdf, formatAddress, formatDate } from "../admin/utils/invoicePdf.js";

function paymentToInvoiceNo(id) {
  return `INV-${String(id).slice(-8).toUpperCase()}`;
}

/**
 * Stream invoice PDF for a Prisma Payment record (with user + booking.car + booking.pricing).
 * @param {import("@prisma/client").Payment & { user: object; booking: object }} payment
 * @param {import("express").Response} res
 * @param {number} gstPercent 0 or 18
 */
export function streamInvoicePdfForPaymentRecord(payment, res, gstPercent) {
  const amount = Number(payment.amount);
  const currency = payment.currency || "INR";

  let subtotal;
  let gstAmount;
  let total;

  if (gstPercent === 0) {
    subtotal = Math.round(amount * 100) / 100;
    gstAmount = 0;
    total = subtotal;
  } else {
    subtotal = Math.round(amount * 100) / 100;
    gstAmount = Math.round(subtotal * 0.18 * 100) / 100;
    total = Math.round((subtotal + gstAmount) * 100) / 100;
  }

  const booking = payment.booking;
  const car = booking?.car;
  const user = payment.user;

  const lineDescription = car
    ? `Car rental — ${car.name}${car.brand ? ` (${car.brand})` : ""}`
    : "Car rental";

  const lineQty = booking
    ? `${formatDate(booking.pickupDate)} – ${formatDate(booking.returnDate)} · ${booking.duration}`
    : "—";

  const invoiceNo = paymentToInvoiceNo(payment.id);
  const invoiceDate = formatDate(payment.createdAt);
  const dueDate = booking?.returnDate ? formatDate(booking.returnDate) : invoiceDate;

  const companyName = process.env.INVOICE_COMPANY_NAME || "Ekalo Drive";
  const companyAddress = process.env.INVOICE_COMPANY_ADDRESS || "";
  const companyPhone = process.env.INVOICE_COMPANY_PHONE || "+91 9168527197";
  const companyEmail = process.env.INVOICE_COMPANY_EMAIL || "support@ekalodrive.com";

  const customerName = [user?.firstName, user?.lastName].filter(Boolean).join(" ") || "Customer";
  const customerAddress = formatAddress(user?.address);
  const gstLabel =
    gstPercent === 0 ? "Not applicable (no GST on this invoice)" : `GST 18% on subtotal`;

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename="invoice-${invoiceNo.replace(/[^a-zA-Z0-9-_]/g, "")}.pdf"`
  );

  const doc = new PDFDocument({ margin: 50, size: "A4" });
  doc.pipe(res);

  buildInvoicePdf(doc, {
    companyName,
    companyAddress,
    companyPhone,
    companyEmail,
    invoiceNo,
    invoiceDate,
    dueDate,
    gstLabel,
    gstPercent,
    customerName,
    customerEmail: user?.email || "",
    customerPhone: user?.phoneNum || "",
    customerAddress,
    lineDescription,
    lineQty,
    subtotal,
    gstAmount,
    total,
    currency,
    paymentRef: payment.razorpayOrderId || "",
    transactionId: payment.razorpayPaymentId || payment.id,
  });

  doc.end();
}
