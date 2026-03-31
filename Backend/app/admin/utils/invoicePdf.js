import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function formatMoney(value, currency = "INR") {
  try {
    const currencyDisplay = currency === "INR" ? "code" : "symbol";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency,
      currencyDisplay,
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const defaultLogoPath = path.resolve(
  __dirname,
  "../../../../",
  "Frontend/src/assets/img/light-theme-logo-authentication.png"
);

/**
 * @param {import("pdfkit")} doc
 * @param {object} opts
 */
export function buildInvoicePdf(doc, opts) {
  const {
    companyName = "Ekalo Drive",
    companyAddress = "",
    companyPhone = "",
    companyEmail = "",
    companyGstin = "",
    companyLogoPath = "",
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

  const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const leftX = doc.page.margins.left;
  const rightX = leftX + pageWidth;

  const drawDivider = (y) => {
    doc.moveTo(leftX, y).lineTo(rightX, y).lineWidth(1).strokeColor("#e5e7eb").stroke();
    doc.strokeColor("#000000");
  };

  const drawLabelValue = (label, value, x, y, width) => {
    doc.fontSize(9).fillColor("#6b7280").text(label, x, y, { width });
    doc.fontSize(10).fillColor("#111827").text(value, x, y + 12, { width });
  };

  // Header
  const headerTop = 40;
  const logoPath = companyLogoPath || defaultLogoPath;
  if (logoPath && fs.existsSync(logoPath)) {
    doc.image(logoPath, leftX, headerTop, { height: 36 });
  } else {
    doc.fontSize(14).fillColor("#111827").text(companyName, leftX, headerTop);
  }

  doc.fontSize(16).fillColor("#111827").text("Invoice", leftX, headerTop, {
    width: pageWidth,
    align: "right",
  });
  doc.fontSize(9).fillColor("#374151").text(`Invoice Number: ${invoiceNo}`, leftX, headerTop + 18, {
    width: pageWidth,
    align: "right",
  });

  drawDivider(90);

  // Billing info (3 columns)
  const billTop = 105;
  const colWidth = pageWidth / 3;
  const columnGap = 12;

  const writeLine = (text, x, y, width, fontSize, color) => {
    doc.fontSize(fontSize).fillColor(color).text(text, x, y, { width });
    return y + doc.heightOfString(text, { width });
  };

  const writeColumn = (x, title, lines) => {
    const width = colWidth - columnGap;
    let y = billTop;
    y = writeLine(title, x, y, width, 10, "#111827") + 4;
    lines.forEach((line) => {
      if (!line) return;
      y = writeLine(line, x, y, width, 9, "#374151") + 3;
    });
    return y;
  };

  const billedToLines = [
    customerName || "Customer",
    customerEmail,
    customerPhone,
    customerAddress,
  ].filter(Boolean);

  const invoiceFromLines = [
    companyName,
    companyGstin ? `GSTIN: ${companyGstin}` : "",
    companyAddress,
    companyEmail,
    companyPhone,
  ].filter(Boolean);

  const invoiceInfoLines = [
    `Issue Date: ${invoiceDate}`,
    `Due Date: ${dueDate}`,
    `Amount: ${formatMoney(total, currency)}`,
    paymentRef ? `Order ID: ${paymentRef}` : "",
    transactionId ? `Payment ID: ${transactionId}` : "",
  ].filter(Boolean);

  const billedToBottom = writeColumn(leftX, "Billed To", billedToLines);
  const fromBottom = writeColumn(leftX + colWidth, "Invoice From", invoiceFromLines);
  const infoBottom = writeColumn(leftX + colWidth * 2, "Invoice Info", invoiceInfoLines);
  const billingBottom = Math.max(billedToBottom, fromBottom, infoBottom) + 6;

  // Line items table
  const tableTop = Math.max(billingBottom, 210);
  const descWidth = pageWidth * 0.55;
  const qtyWidth = pageWidth * 0.25;
  const amtWidth = pageWidth * 0.2;

  doc.rect(leftX, tableTop, pageWidth, 24).fill("#f3f4f6");
  doc.fillColor("#111827").fontSize(10).text("Description", leftX + 8, tableTop + 7, { width: descWidth });
  doc.text("Period", leftX + descWidth + 8, tableTop + 7, { width: qtyWidth });
  doc.text("Amount", leftX + descWidth + qtyWidth + 8, tableTop + 7, {
    width: amtWidth - 16,
    align: "right",
  });

  const rowTop = tableTop + 24;
  const rowHeight = 52;
  doc.rect(leftX, rowTop, pageWidth, rowHeight).strokeColor("#e5e7eb").stroke();
  doc.fillColor("#111827").fontSize(10).text(lineDescription, leftX + 8, rowTop + 8, {
    width: descWidth - 16,
  });
  doc.fillColor("#374151").fontSize(9).text(lineQty, leftX + descWidth + 8, rowTop + 8, {
    width: qtyWidth - 16,
  });
  doc.fillColor("#111827").fontSize(10).text(formatMoney(subtotal, currency), leftX + descWidth + qtyWidth + 8, rowTop + 8, {
    width: amtWidth - 16,
    align: "right",
  });

  // Totals
  const totalsTop = rowTop + rowHeight + 18;
  const totalsWidth = pageWidth * 0.45;
  const totalsX = rightX - totalsWidth;
  doc.roundedRect(totalsX, totalsTop, totalsWidth, 78, 6).strokeColor("#e5e7eb").stroke();

  const lineY = (offset) => totalsTop + 10 + offset;
  doc.fillColor("#374151").fontSize(9).text("Subtotal", totalsX + 10, lineY(0));
  doc.fillColor("#111827").fontSize(10).text(formatMoney(subtotal, currency), totalsX + 10, lineY(0), {
    width: totalsWidth - 20,
    align: "right",
  });

  doc.fillColor("#374151").fontSize(9).text(`GST (${gstPercent}%)`, totalsX + 10, lineY(18));
  doc.fillColor("#111827").fontSize(10).text(formatMoney(gstAmount, currency), totalsX + 10, lineY(18), {
    width: totalsWidth - 20,
    align: "right",
  });

  doc.fillColor("#111827").fontSize(11).text("Total", totalsX + 10, lineY(38));
  doc.fontSize(12).text(formatMoney(total, currency), totalsX + 10, lineY(38), {
    width: totalsWidth - 20,
    align: "right",
  });

  // Footer
  const footerTop = totalsTop + 100;
  drawDivider(footerTop);
  doc.fontSize(9).fillColor("#6b7280");
  if (paymentRef) doc.text(`Payment reference: ${paymentRef}`, leftX, footerTop + 8);
  if (transactionId) doc.text(`Transaction ID: ${transactionId}`, leftX, footerTop + 22);
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
