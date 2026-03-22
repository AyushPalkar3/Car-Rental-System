import PDFDocument from "pdfkit";

function formatMoney(value, currency = "INR") {
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(value);
  } catch {
    return `${currency} ${Number(value).toFixed(2)}`;
  }
}

function formatDate(d) {
  if (!d) return "—";
  const date = d instanceof Date ? d : new Date(d);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatAddress(addr) {
  if (!addr || typeof addr !== "object") return "";
  const parts = [
    addr.addressLine,
    addr.city,
    addr.state,
    addr.pincode,
    addr.country,
  ].filter(Boolean);
  return parts.join(", ");
}

/**
 * @param {import("pdfkit")} doc
 * @param {object} opts
 */
export function buildInvoicePdf(doc, opts) {
  const {
    companyName = "Ekal",
    companyAddress = "",
    companyPhone = "",
    companyEmail = "",
    invoiceNo,
    invoiceDate,
    dueDate,
    gstLabel,
    gstPercent,
    customerName,
    customerEmail,
    customerPhone,
    customerAddress,
    lineDescription,
    lineQty,
    subtotal,
    gstAmount,
    total,
    currency,
    paymentRef,
    transactionId,
  } = opts;

  doc.fontSize(18).text("TAX INVOICE", { align: "center" });
  doc.moveDown(0.5);
  doc.fontSize(10).fillColor("#333333");
  doc.text(companyName, { align: "center" });
  if (companyAddress) doc.text(companyAddress, { align: "center" });
  if (companyPhone || companyEmail) {
    doc.text(
      [companyPhone && `Tel: ${companyPhone}`, companyEmail].filter(Boolean).join("  |  "),
      { align: "center" }
    );
  }
  doc.moveDown(1);
  doc.fillColor("#000000");

  doc.fontSize(11).text(`Invoice No: ${invoiceNo}`);
  doc.text(`Invoice Date: ${invoiceDate}`);
  doc.text(`Due Date: ${dueDate}`);
  doc.text(`GST: ${gstLabel}`);
  doc.moveDown(0.8);

  doc.fontSize(12).text("Bill To", { underline: true });
  doc.fontSize(10).text(customerName || "Customer");
  if (customerAddress) doc.text(customerAddress);
  if (customerPhone) doc.text(`Phone: ${customerPhone}`);
  if (customerEmail) doc.text(`Email: ${customerEmail}`);
  doc.moveDown(1);

  doc.fontSize(10).text("Line items", { underline: true });
  doc.moveDown(0.3);
  doc.text(lineDescription, { continued: false });
  doc.text(`${lineQty} — ${formatMoney(subtotal, currency)}`, { align: "right" });
  doc.moveDown(1);

  doc.text(`Subtotal: ${formatMoney(subtotal, currency)}`, { align: "right" });
  if (gstPercent > 0) {
    doc.text(
      `GST (${gstPercent}%): ${formatMoney(gstAmount, currency)}`,
      { align: "right" }
    );
  } else {
    doc.text(`GST: ${formatMoney(0, currency)}`, { align: "right" });
  }
  doc.fontSize(12).text(`Total: ${formatMoney(total, currency)}`, { align: "right" });
  doc.moveDown(1.5);

  doc.fontSize(9).fillColor("#555555");
  if (paymentRef) doc.text(`Payment reference: ${paymentRef}`);
  if (transactionId) doc.text(`Transaction ID: ${transactionId}`);
  doc.fillColor("#000000");
}

export function createInvoicePdfBuffer(opts) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: "A4" });
    const chunks = [];
    doc.on("data", (c) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    buildInvoicePdf(doc, opts);
    doc.end();
  });
}

export { formatMoney, formatDate, formatAddress };
