import { useEffect, useRef, useState } from "react";
import Aos from "aos";
import Breadcrumbs from "../common/breadcrumbs";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Link } from "react-router-dom";
import DashboardMenu from "./common/dashboard-menu";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useSelector } from "react-redux";
import axios from "axios";
import { getAccessToken } from "./common/bookingUtils";
import { formatBookingDisplayId } from "../../core/utils/bookingDisplayId";

const UserPayment = () => {
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const [payments, setPayments] = useState<any[]>([]);
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const [searchInput, setSearchInput] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortMode, setSortMode] = useState("desc");
  const [loading, setLoading] = useState(false);
  const invoiceRef = useRef<HTMLDivElement>(null);

  // ── Fetch payments ────────────────────────────────────────────────────────
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
    const fetchPayments = async () => {
      try {
        const userId = userInfo?.user?.id || userInfo?.id;
        if (!userId) return;
        setLoading(true);
        const res = await axios.get(
          `http://localhost:4000/api/payment/by-user/${userId}`,
          { headers: { Authorization: `Bearer ${getAccessToken()}` } }
        );
        setPayments(res.data || []);
      } catch (e) {
        console.error("Failed to fetch payments:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchPayments();
  }, [userInfo]);

  // ── Filtering & sorting ───────────────────────────────────────────────────
  const applyDateRange = (items: any[]) => {
    const now = new Date();
    return items.filter((p) => {
      const d = new Date(p.createdAt);
      if (dateFilter === "week") { const w = new Date(now); w.setDate(now.getDate() - 7); return d >= w; }
      if (dateFilter === "month") { const m = new Date(now); m.setMonth(now.getMonth() - 1); return d >= m; }
      if (dateFilter === "30days") { const t = new Date(now); t.setDate(now.getDate() - 30); return d >= t; }
      return true;
    });
  };

  const filteredData = applyDateRange(payments)
    .filter((p) => {
      if (!searchInput) return true;
      const q = searchInput.toLowerCase();
      const bookingRef = formatBookingDisplayId(p.bookingId);
      const carName = p.booking?.car?.name || "";
      return (
        bookingRef.toLowerCase().includes(q) ||
        carName.toLowerCase().includes(q) ||
        p.status?.toLowerCase().includes(q) ||
        p.razorpayPaymentId?.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (sortMode === "asc") return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      if (sortMode === "alpha") return (a.booking?.car?.name || "").localeCompare(b.booking?.car?.name || "");
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(); // desc
    });

  // ── Print Invoice ─────────────────────────────────────────────────────────
  const handlePrint = () => {
    if (!invoiceRef.current) return;
    const content = invoiceRef.current.innerHTML;
    const win = window.open("", "_blank", "width=800,height=600");
    if (!win) return;
    win.document.write(`<html><head><title>Invoice</title>
      <base href="${window.location.origin}/" />
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <style>
        body{padding:30px;font-family:Arial,sans-serif;} 
        table{width:100%;border-collapse:collapse;} 
        th,td{border:1px solid #ddd;padding:8px;} 
        .invoice-total{font-size:18px;font-weight:bold;}
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      </style>
      </head><body>${content}
      <script>
        window.onload = function() {
          setTimeout(function() {
            window.print();
            window.close();
          }, 300);
        };
      </script>
      </body></html>`);
    win.document.close();
  };

  const handleDownload = async () => {
    if (!selectedPayment) return;
    try {
      const token = getAccessToken();
      const res = await axios.get(
        `http://localhost:4000/api/payment/booking/${selectedPayment.bookingId}/invoice?gst=0`,
        {
          headers: { Authorization: `Bearer ${token}` },
          responseType: "blob",
        }
      );

      const invoiceNumber = `INV-${selectedPayment.id?.slice(-8).toUpperCase()}`;
      const blob = new Blob([res.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${invoiceNumber}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Failed to download invoice PDF:", e);
      alert("Failed to download invoice. Please try again.");
    }
  };

  // ── Table columns ─────────────────────────────────────────────────────────
  const checkbox = () => (
    <label className="custom_check w-100"><input type="checkbox" name="username" /><span className="checkmark" /></label>
  );

  const bookingIdCol = (p: any) => <span>{formatBookingDisplayId(p.bookingId)}</span>;

  const carNameCol = (p: any) => (
    <div className="table-avatar">
      <Link to="#" className="avatar avatar-lg flex-shrink-0">
        {p.booking?.car?.images?.[0] ? (
          <img className="avatar-img" src={`${import.meta.env.VITE_API_BASE_URL_IMAGE || ''}${p.booking.car.images[0]}`} alt="car" />
        ) : (
          <ImageWithBasePath className="avatar-img" src="assets/img/cars/car-05.jpg" alt="car" />
        )}
      </Link>
      <div className="table-head-name flex-grow-1">
        <Link to="#">{p.booking?.car?.name || "Unknown Car"}</Link>
        <p>{p.booking?.bookingType === "DELIVERY" ? "Delivery" : "Self Pickup"}</p>
      </div>
    </div>
  );

  const paidOnCol = (p: any) => <span>{new Date(p.createdAt).toLocaleString()}</span>;
  const totalCol = (p: any) => <span>₹{p.amount}</span>;
  const modeCol = () => <span>Razorpay</span>;

  const statusCol = (p: any) => (
    <span className={
      p.status === "SUCCESS" ? "badge badge-light-success" :
        p.status === "FAILED" ? "badge badge-light-danger" :
          p.status === "REFUNDED" ? "badge badge-light-warning" :
            "badge badge-light-secondary"
    }>
      {p.status === "SUCCESS" ? "Completed" : p.status === "FAILED" ? "Failed" : p.status === "REFUNDED" ? "Refunded" : p.status}
    </span>
  );

  const actionCol = (p: any) => (
    <div className="dropdown dropdown-action">
      <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fas fa-ellipsis-vertical me-1" />
      </Link>
      <div className="dropdown-menu dropdown-menu-end">
        <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#view_invoice"
          onClick={() => setSelectedPayment(p)}>
          <i className="feather icon-file-plus me-1" /> View Invoice
        </Link>
      </div>
    </div>
  );

  const dateLabel = dateFilter === "week" ? "This Week" : dateFilter === "month" ? "This Month" : dateFilter === "30days" ? "Last 30 Days" : "All Time";
  const sortLabel = sortMode === "asc" ? "Sort By Ascending" : sortMode === "alpha" ? "Sort By Alphabet" : "Sort By Relevance";

  return (
    <>
      <Breadcrumbs title="User Payment" subtitle="User Payment" />
      <DashboardMenu />
      <div className="content">
        <div className="container">
          <div className="content-header"><h4>Payments</h4></div>

          {/* Filter bar */}
          <div className="row">
            <div className="col-lg-12">
              <div className="sorting-info">
                <div className="row d-flex align-items-center">
                  <div className="col-lg-12">
                    <div className="filter-group justify-content-end">
                      <div className="sort-week sort">
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">{dateLabel} <i className="fas fa-chevron-down" /></Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            {[["all", "All Time"], ["week", "This Week"], ["month", "This Month"], ["30days", "Last 30 Days"]].map(([v, l]) => (
                              <button key={v} className="dropdown-item" onClick={() => setDateFilter(v)}>{l}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="sort-relevance sort">
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">{sortLabel} <i className="fas fa-chevron-down" /></Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            {[["desc", "Sort By Relevance"], ["asc", "Sort By Ascending"], ["alpha", "Sort By Alphabet"]].map(([v, l]) => (
                              <button key={v} className="dropdown-item" onClick={() => setSortMode(v)}>{l}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="card book-card flex-fill mb-0">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <h4>All Payments <span>{filteredData.length}</span></h4>
                    </div>
                    <div className="col-md-7 text-md-end">
                      <div className="table-search">
                        <div id="tablefilter">
                          <label>
                            <input type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} placeholder="Search" className="inputsearch" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {loading ? <p className="text-center py-4">Loading payments...</p> : (
                    <div className="table-responsive dashboard-table">
                      <DataTable className="table datatable" value={filteredData} paginator rows={10} rowsPerPageOptions={[10, 25, 50]} emptyMessage="No payment records found.">
                        <Column body={checkbox} header={checkbox} />
                        <Column header="Booking ID" body={bookingIdCol} />
                        <Column header="Car Name" body={carNameCol} />
                        <Column header="Paid On" body={paidOnCol} />
                        <Column header="Total" body={totalCol} />
                        <Column header="Mode" body={modeCol} />
                        <Column header="Status" body={statusCol} />
                        <Column header="Action" body={actionCol} />
                      </DataTable>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── View Invoice Modal ──────────────────────────────────────────── */}
      <div className="modal new-modal fade" id="view_invoice" data-keyboard="false" data-backdrop="static">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">

            {/* Action buttons */}
            <div className="modal-header border-0 m-0 p-0">
              <div className="invoice-btns">
                <button className="btn me-2" onClick={handlePrint}>
                  <i className="feather icon-printer" /> Print
                </button>
                <button className="btn" onClick={handleDownload}>
                  <i className="feather icon-download" /> Download Invoice
                </button>
                <button className="btn ms-2" data-bs-dismiss="modal">
                  <i className="feather icon-x" /> Close
                </button>
              </div>
            </div>

            {/* Invoice body */}
            <div className="modal-body" style={{ padding: "28px 32px", background: "#fff" }}>
              <div ref={invoiceRef} style={{ fontFamily: "Arial, sans-serif", color: "#111827", fontSize: 13 }}>

                {/* ── 1. HEADER ── */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  {/* Logo — small & compact */}
                  <ImageWithBasePath
                    src="assets/img/light-theme-logo-authentication.png"
                    alt="Ekalo Drive"
                    style={{ height: 36, maxWidth: 160, width: "auto", objectFit: "contain" }}
                  />
                  {/* Title */}
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: 1 }}>INVOICE</div>
                    <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
                      Invoice Number : INV-{selectedPayment?.id?.slice(-6).toUpperCase() || "------"}
                    </div>
                  </div>
                </div>

                {/* ── 2. INFO BLOCK — black border, 3 columns ── */}
                <div style={{ display: "flex", border: "1px solid #111827", borderRadius: 6, marginBottom: 24, overflow: "hidden" }}>
                  {/* Col 1 — Billed To */}
                  <div style={{ flex: "0 0 32%", padding: "14px 16px", borderRight: "1px solid #e5e7eb" }}>
                    <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13 }}>Billed To</div>
                    <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.6 }}>
                      <div>{userInfo?.user?.name || userInfo?.user?.firstName || "Customer"}</div>
                      <div>{userInfo?.user?.email || ""}</div>
                      <div>{userInfo?.user?.phoneNum || ""}</div>
                      {userInfo?.user?.address && (
                        <div>
                          {[userInfo.user.address.addressLine, userInfo.user.address.city,
                          userInfo.user.address.state, userInfo.user.address.pincode,
                          userInfo.user.address.country].filter(Boolean).join(", ")}
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Col 2 — Invoice From */}
                  <div style={{ flex: "0 0 38%", padding: "14px 16px", borderRight: "1px solid #e5e7eb" }}>
                    <div style={{ fontWeight: 700, marginBottom: 8, fontSize: 13 }}>Invoice From</div>
                    <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.6 }}>
                      <div style={{ fontWeight: 600 }}>EKALO DRIVE</div>
                      <div>GSTIN: 27CCKPN2833G1ZH</div>
                      <div>PRAYEJA CITY, Flat No. B-2, S NO-71, Floor 204, Sinhagad Road, Vadgaon Budruk, Pune - 411051, Maharashtra, India.</div>
                      <div>support@ekalodrive.com</div>
                    </div>
                  </div>
                  {/* Col 3 — Invoice Info */}
                  <div style={{ flex: "1", padding: "14px 16px" }}>
                    <div style={{ fontSize: 12, color: "#374151", lineHeight: 2 }}>
                      <div>Issue Date : {selectedPayment ? new Date(selectedPayment.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—"}</div>
                      <div>Amount : Rs. {Number(selectedPayment?.amount || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</div>
                      <div style={{ wordBreak: "break-all" }}>Order ID : {selectedPayment?.razorpayOrderId || "—"}</div>
                    </div>
                  </div>
                </div>

                {/* ── 3. RENTAL TABLE ── */}
                <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 24, fontSize: 12 }}>
                  <thead>
                    <tr style={{ background: "#f5f5f5" }}>
                      {["Rented Car", "Rental Type", "Pickup Date", "Return Date", "Amount"].map((h, i) => (
                        <th key={h} style={{ padding: "10px 12px", textAlign: i === 4 ? "right" : "left", fontWeight: 600, color: "#111827", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: "12px 12px", fontWeight: 600 }}>{selectedPayment?.booking?.car?.name || "—"}</td>
                      <td style={{ padding: "12px 12px" }}>{selectedPayment?.booking?.duration || "—"}</td>
                      <td style={{ padding: "12px 12px" }}>{selectedPayment?.booking?.pickupDate ? new Date(selectedPayment.booking.pickupDate).toLocaleString() : "—"}</td>
                      <td style={{ padding: "12px 12px" }}>{selectedPayment?.booking?.returnDate ? new Date(selectedPayment.booking.returnDate).toLocaleString() : "—"}</td>
                      <td style={{ padding: "12px 12px", textAlign: "right" }}>Rs. {Number(selectedPayment?.amount || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</td>
                    </tr>
                  </tbody>
                </table>

                {/* ── 4. PAYMENT DETAILS + AMOUNTS ── */}
                <div style={{ display: "flex", gap: 24, marginBottom: 0, alignItems: "flex-start" }}>
                  {/* Left: dashed payment box */}
                  <div style={{ flex: "0 0 45%" }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 10 }}>Payment Details</div>
                    <div style={{ border: "1.5px dashed #9ca3af", borderRadius: 4, padding: "12px 16px", fontSize: 12, color: "#374151", lineHeight: 1.8 }}>
                      <div>Mode: Razorpay</div>
                      <div>Payment ID: {selectedPayment?.razorpayPaymentId || "—"}</div>
                      <div>Status: {selectedPayment?.status || "—"}</div>
                    </div>
                  </div>
                  {/* Right: amounts */}
                  <div style={{ flex: 1, fontSize: 12 }}>
                    {[
                      { label: "Rental Amount", val: `Rs. ${Number(selectedPayment?.amount || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}` },
                      { label: "Delivery Charge", val: `+ Rs. ${Number(selectedPayment?.booking?.deliveryFee || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}` },
                    ].map(({ label, val }) => (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #e5e7eb", color: "#374151" }}>
                        <span>{label}</span><span>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── 5. TOTAL BAR (amber) ── */}
                <div style={{ background: "#F5A623", borderRadius: 4, padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16, marginBottom: 24 }}>
                  <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>Total</span>
                  <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Rs. {Number(selectedPayment?.amount || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</span>
                </div>

                {/* ── 6. NOTES ── */}
                <div style={{ marginBottom: 16 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Notes</div>
                  <div style={{ fontSize: 12, color: "#374151" }}>Thank you for choosing EKALO DRIVE!</div>
                </div>

                {/* ── 7. TERMS + SIGNATURE ── */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>Terms and Conditions</div>
                    <div style={{ fontSize: 12, color: "#374151" }}>All rentals are subject to EKALO DRIVE's Terms of Service.</div>
                  </div>
                  <div style={{ textAlign: "center", minWidth: 160 }}>
                    <ImageWithBasePath
                      src="assets/img/signature.png"
                      alt="Sign"
                      style={{ height: 52, width: "auto", objectFit: "contain", display: "block", margin: "0 auto 4px" }}
                    />
                    <div style={{ borderTop: "1.5px solid #111827", paddingTop: 6, fontSize: 12, fontWeight: 700, letterSpacing: 0.5 }}>EKALO DRIVE</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /View Invoice Modal */}
    </>
  );
};

export default UserPayment;
