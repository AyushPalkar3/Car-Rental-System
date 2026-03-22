import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../router/all_routes";
import {
  adminPaymentsApi,
  computeInvoiceTotals,
  downloadInvoicePdf,
  formatInvoiceCurrency,
  openInvoicePdfTab,
  type AdminPayment,
} from "../../service/api/payments";

const COMPANY = {
  name: import.meta.env.VITE_INVOICE_COMPANY_NAME || "Ekal",
  address:
    import.meta.env.VITE_INVOICE_COMPANY_ADDRESS ||
    "Flat 8, Park View House, 7 High Street",
  phone: import.meta.env.VITE_INVOICE_COMPANY_PHONE || "+91 00000 00000",
  email: import.meta.env.VITE_INVOICE_COMPANY_EMAIL || "billing@example.com",
};

function formatDisplayDate(iso?: string | null) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function customerAddress(user: AdminPayment["user"]) {
  const a = user?.address;
  if (!a) return "";
  return [a.addressLine, a.city, a.state, a.pincode, a.country].filter(Boolean).join(", ");
}

function statusBadgeClass(label: string) {
  if (label === "Paid") return "badge-soft-success";
  if (label === "Pending") return "badge-soft-info";
  if (label === "Refunded") return "badge-soft-purple";
  if (label === "Unpaid") return "badge-soft-danger";
  return "badge-soft-violet";
}

const AdminInvoiceDetails = () => {
  const { paymentId } = useParams<{ paymentId: string }>();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [payment, setPayment] = useState<
    (AdminPayment & { invoiceNo: string; invoiceStatusLabel: string }) | null
  >(null);
  const [gstPreview, setGstPreview] = useState<"none" | "gst18">("gst18");
  const [downloading, setDownloading] = useState<string | null>(null);

  const load = useCallback(async () => {
    if (!paymentId) {
      setErr("Missing invoice reference.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setErr(null);
    try {
      const res = await adminPaymentsApi.get(paymentId);
      setPayment(res.data.data);
    } catch (e: unknown) {
      const msg =
        typeof e === "object" && e !== null && "message" in e
          ? String((e as { message?: string }).message)
          : "Could not load invoice.";
      setErr(msg);
      setPayment(null);
    } finally {
      setLoading(false);
    }
  }, [paymentId]);

  useEffect(() => {
    load();
  }, [load]);

  const totals = useMemo(() => {
    if (!payment) return { subtotal: 0, gstAmount: 0, total: 0 };
    return computeInvoiceTotals(payment.amount, gstPreview);
  }, [payment, gstPreview]);

  const handleDownload = async (gst: "0" | "18") => {
    if (!paymentId) return;
    setDownloading(gst);
    try {
      await downloadInvoicePdf(paymentId, gst);
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : "Download failed.";
      window.alert(msg);
    } finally {
      setDownloading(null);
    }
  };

  const handlePrint = async () => {
    if (!paymentId) return;
    const gst = gstPreview === "gst18" ? "18" : "0";
    setDownloading(`print-${gst}`);
    try {
      await openInvoicePdfTab(paymentId, gst);
    } catch {
      window.alert("Could not open invoice for printing.");
    } finally {
      setDownloading(null);
    }
  };

  if (loading) {
    return (
      <div className="content me-4">
        <p className="text-muted py-5">Loading invoice…</p>
      </div>
    );
  }

  if (err || !payment) {
    return (
      <div className="content me-4">
        <div className="alert alert-warning">
          {err || "Invoice not found."}{" "}
          <Link to={all_routes.adminInvoicesList}>Back to invoices</Link>
        </div>
      </div>
    );
  }

  const customerName =
    [payment.user?.firstName, payment.user?.lastName].filter(Boolean).join(" ") || "Customer";
  const addr = customerAddress(payment.user);
  const car = payment.booking?.car;

  return (
    <div className="content me-4">
      <div className="mb-3">
        <Link
          to={all_routes.adminInvoicesList}
          className="d-inline-flex align-items-center fw-medium"
        >
          <i className="ti ti-arrow-narrow-left me-2" />
          Back to List
        </Link>
      </div>
      <div className="filterbox mb-3 d-flex align-items-center flex-wrap gap-2 invoice-title">
        <h4 className="me-3 mb-0">
          <i className="ti ti-menu-2 me-2" />
          Invoice Details
        </h4>
        <div className="ms-auto d-flex flex-wrap align-items-center gap-2">
          <label className="small text-muted mb-0 me-1">Preview totals</label>
          <select
            className="form-select form-select-sm w-auto"
            value={gstPreview}
            onChange={(e) => setGstPreview(e.target.value as "none" | "gst18")}
          >
            <option value="none">Without GST</option>
            <option value="gst18">With GST 18% on subtotal</option>
          </select>
        </div>
      </div>
      <div className="card car-invoice">
        <div className="card-body">
          <div className="row justify-content-between align-items-center border-bottom mb-3">
            <div className="col-md-6">
              <div className="mb-3">
                <h2 className="text-violet mb-3">#{payment.invoiceNo}</h2>
                <p className="mb-1 fw-medium d-flex">
                  <span className="text-dark min-width-100 d-flex">Created</span>
                  {formatDisplayDate(payment.createdAt)}
                </p>
                <p className="fw-medium d-flex">
                  <span className="text-dark min-width-100 d-flex">Due</span>
                  {formatDisplayDate(payment.booking?.returnDate)}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-end mb-2">
                <ImageWithBasePath
                  src="assets/admin/img/logo.svg"
                  className="invoice-logo img-fluid"
                  alt="logo"
                />
                <p className="mb-2">{COMPANY.address}</p>
                <span className={`badge ${statusBadgeClass(payment.invoiceStatusLabel)}`}>
                  <i className="ti ti-point-filled me-1" />
                  {payment.invoiceStatusLabel}
                </span>
              </div>
            </div>
          </div>
          <div className="row border-bottom mb-3">
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="text-dark mb-3 fw-semibold">From</h5>
                  <div>
                    <h6 className="mb-1">{COMPANY.name}</h6>
                    <p className="mb-1">{COMPANY.address}</p>
                    <p className="mb-1">
                      Contact : <span className="text-dark">{COMPANY.phone}</span>
                    </p>
                    <p className="mb-0">{COMPANY.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="text-dark mb-3 fw-semibold">To</h5>
                  <div>
                    <h6 className="mb-1">{customerName}</h6>
                    {addr ? <p className="mb-1">{addr}</p> : null}
                    <p className="mb-1">
                      Contact :{" "}
                      <span className="text-dark">{payment.user?.phoneNum || "—"}</span>
                    </p>
                    <p className="mb-0">{payment.user?.email || "—"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="table-responsive border border-gray br-10 mb-3">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>DESCRIPTION</th>
                    <th className="text-end">TYPE</th>
                    <th className="text-end">PERIOD</th>
                    <th className="text-end">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <h6 className="fw-semibold mb-0">
                        {car ? `${car.name}${car.brand ? ` (${car.brand})` : ""}` : "Car rental"}
                      </h6>
                    </td>
                    <td className="text-gray-5 fw-medium text-end">Car Rental</td>
                    <td className="text-gray-5 fw-medium text-end text-nowrap">
                      {formatDisplayDate(payment.booking?.pickupDate)} –{" "}
                      {formatDisplayDate(payment.booking?.returnDate)}
                      <br />
                      <span className="small">{payment.booking?.duration}</span>
                    </td>
                    <td className="text-gray-9 fw-bold text-end">
                      {formatInvoiceCurrency(totals.subtotal, payment.currency)}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row border-bottom mb-3">
            <div className="col-md-7">
              <div className="py-4">
                <div className="mb-3">
                  <h6 className="mb-1">Payment</h6>
                  <p className="mb-0 small text-muted">
                    Razorpay order: {payment.razorpayOrderId}
                    {payment.razorpayPaymentId ? (
                      <>
                        <br />
                        Payment id: {payment.razorpayPaymentId}
                      </>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                <p className="mb-0">Subtotal</p>
                <p className="text-dark fw-medium mb-2">
                  {formatInvoiceCurrency(totals.subtotal, payment.currency)}
                </p>
              </div>
              <div className="d-flex justify-content-between border-bottom align-items-center pb-2 mb-2 pe-3">
                <p className="mb-0">
                  {gstPreview === "gst18" ? "GST (18% on subtotal)" : "GST"}
                </p>
                <p className="text-dark fw-medium mb-2">
                  {formatInvoiceCurrency(totals.gstAmount, payment.currency)}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-2 pe-3">
                <h5>Total</h5>
                <h5>{formatInvoiceCurrency(totals.total, payment.currency)}</h5>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-9">
              <div className="d-flex align-items-center">
                <div className="me-4">
                  <p className="mb-2 text-center small text-muted">Scan to pay</p>
                  <ImageWithBasePath src="assets/admin/img/icons/qr-img.svg" alt="" />
                </div>
                <div>
                  <h5 className="mb-2">Bank Details</h5>
                  <p className="mb-2 small text-muted">
                    Configure bank details in environment variables for production invoices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 mb-4">
        <button
          type="button"
          className="btn btn-primary d-inline-flex justify-content-center align-items-center"
          onClick={handlePrint}
          disabled={!!downloading}
        >
          <i className="ti ti-printer me-2" />
          {downloading?.startsWith("print") ? "Opening…" : "Print Invoice"}
        </button>
        <div className="dropdown">
          <button
            className="btn btn-dark text-white d-inline-flex align-items-center border dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            disabled={!!downloading && !downloading.startsWith("print")}
          >
            <i className="ti ti-download me-2" />
            Download Invoice
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => handleDownload("0")}
                disabled={downloading === "0"}
              >
                PDF without GST
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => handleDownload("18")}
                disabled={downloading === "18"}
              >
                PDF with GST 18%
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminInvoiceDetails;
