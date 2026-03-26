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
      if (dateFilter === "week") { const w = new Date(now); w.setDate(now.getDate()-7); return d >= w; }
      if (dateFilter === "month") { const m = new Date(now); m.setMonth(now.getMonth()-1); return d >= m; }
      if (dateFilter === "30days") { const t = new Date(now); t.setDate(now.getDate()-30); return d >= t; }
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
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      <style>body{padding:30px;font-family:Arial,sans-serif;} table{width:100%;border-collapse:collapse;} th,td{border:1px solid #ddd;padding:8px;} .invoice-total{font-size:18px;font-weight:bold;}</style>
      </head><body>${content}</body></html>`);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  const handleDownload = () => {
    if (!invoiceRef.current || !selectedPayment) return;
    const invoiceNumber = `INV-${selectedPayment.id?.slice(-6).toUpperCase()}`;
    const content = `
INVOICE - ${invoiceNumber}
Date: ${new Date(selectedPayment.createdAt).toLocaleDateString()}

Car: ${selectedPayment.booking?.car?.name || "N/A"}
Booking ID: ${formatBookingDisplayId(selectedPayment.bookingId)}
Razorpay Order ID: ${selectedPayment.razorpayOrderId}
Payment ID: ${selectedPayment.razorpayPaymentId}

Amount: ₹${selectedPayment.amount}
Status: ${selectedPayment.status}
Currency: ${selectedPayment.currency}

Billed To:
${userInfo?.user?.name || userInfo?.user?.firstName || "Customer"}
${userInfo?.user?.email || ""}
    `.trim();
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${invoiceNumber}.txt`;
    a.click();
    URL.revokeObjectURL(url);
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
          <img className="avatar-img" src={`http://localhost:4000${p.booking.car.images[0]}`} alt="car" />
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
      p.status === "FAILED"  ? "badge badge-light-danger"  :
      p.status === "REFUNDED"? "badge badge-light-warning" :
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

  const dateLabel = dateFilter==="week"?"This Week":dateFilter==="month"?"This Month":dateFilter==="30days"?"Last 30 Days":"All Time";
  const sortLabel = sortMode==="asc"?"Sort By Ascending":sortMode==="alpha"?"Sort By Alphabet":"Sort By Relevance";

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
                            {[["all","All Time"],["week","This Week"],["month","This Month"],["30days","Last 30 Days"]].map(([v,l])=>(
                              <button key={v} className="dropdown-item" onClick={()=>setDateFilter(v)}>{l}</button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="sort-relevance sort">
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">{sortLabel} <i className="fas fa-chevron-down" /></Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            {[["desc","Sort By Relevance"],["asc","Sort By Ascending"],["alpha","Sort By Alphabet"]].map(([v,l])=>(
                              <button key={v} className="dropdown-item" onClick={()=>setSortMode(v)}>{l}</button>
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
                            <input type="text" value={searchInput} onChange={e=>setSearchInput(e.target.value)} placeholder="Search" className="inputsearch" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {loading ? <p className="text-center py-4">Loading payments...</p> : (
                    <div className="table-responsive dashboard-table">
                      <DataTable className="table datatable" value={filteredData} paginator rows={10} rowsPerPageOptions={[10,25,50]} emptyMessage="No payment records found.">
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
            <div className="modal-body">
              <div className="invoice-details" ref={invoiceRef}>
                {/* Header */}
                <div className="invoice-items">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <div className="invoice-logo">
                        <ImageWithBasePath src="assets/img/logo.svg" alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="invoice-info-text">
                        <h4>Invoice</h4>
                        <p>Invoice Number : <span>INV-{selectedPayment?.id?.slice(-6).toUpperCase() || "------"}</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing info */}
                <div className="invoice-item-bills">
                  <div className="row align-items-start">
                    <div className="col-lg-4 col-md-12">
                      <div className="invoice-bill-info">
                        <h6>Billed To</h6>
                        <p>
                          {userInfo?.user?.name || userInfo?.user?.firstName || "Customer"}<br />
                          {userInfo?.user?.email || ""}<br />
                          {userInfo?.user?.phoneNum || ""}
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="invoice-bill-info">
                        <h6>Invoice From</h6>
                        <p>Ekal Car Rentals<br />support@ekalrent.com<br />India</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <div className="invoice-bill-info border-0">
                        <p>Issue Date : {selectedPayment ? new Date(selectedPayment.createdAt).toLocaleDateString() : "—"}</p>
                        <p>Amount : ₹{selectedPayment?.amount || 0}</p>
                        <p>Order ID : {selectedPayment?.razorpayOrderId || "—"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Item table */}
                <div className="invoice-table-wrap">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table className="invoice-table table table-center mb-0">
                          <thead>
                            <tr>
                              <th>Rented Car</th>
                              <th>Rental Type</th>
                              <th>Pickup Date</th>
                              <th>Return Date</th>
                              <th className="text-end">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><h6>{selectedPayment?.booking?.car?.name || "—"}</h6></td>
                              <td>{selectedPayment?.booking?.duration || "—"}</td>
                              <td>{selectedPayment?.booking?.pickupDate ? new Date(selectedPayment.booking.pickupDate).toLocaleString() : "—"}</td>
                              <td>{selectedPayment?.booking?.returnDate ? new Date(selectedPayment.booking.returnDate).toLocaleString() : "—"}</td>
                              <td className="text-end">₹{selectedPayment?.amount || 0}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment details */}
                <div className="payment-details-info">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="invoice-terms">
                        <h6>Payment Details</h6>
                        <div className="invocie-note">
                          <p>
                            Mode: Razorpay<br />
                            Payment ID: {selectedPayment?.razorpayPaymentId || "—"}<br />
                            Status: {selectedPayment?.status || "—"}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="invoice-total-box">
                        <div className="invoice-total-inner">
                          <p><b>Rental Amount</b> <span>₹{selectedPayment?.amount || 0}</span></p>
                          <p>Delivery Charge <span>+ ₹{selectedPayment?.booking?.deliveryFee || 0}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="invoice-total">
                  <h4>Total <span>₹{selectedPayment?.amount || 0}</span></h4>
                </div>

                <div className="invoice-note-footer">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                      <div className="invocie-note">
                        <h6>Notes</h6>
                        <p>Thank you for choosing Ekal Car Rentals!</p>
                      </div>
                      <div className="invocie-note mb-0">
                        <h6>Terms and Conditions</h6>
                        <p>All rentals are subject to Ekal's Terms of Service.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="invoice-sign">
                        <ImageWithBasePath className="img-fluid d-inline-block" src="assets/img/signature.png" alt="Sign" />
                        <span className="d-block">Ekal Car Rentals</span>
                      </div>
                    </div>
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
