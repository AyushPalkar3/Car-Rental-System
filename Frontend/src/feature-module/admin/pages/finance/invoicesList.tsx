import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, generatePath } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import CommonDatatable from "../../common/dataTable";
import { InvoicesListTableSkeleton } from "../../common/financeListTableSkeleton";
import { all_routes } from "../../../../router/all_routes";
import {
  adminPaymentsApi,
  downloadInvoicePdf,
  formatInvoiceCurrency,
  type AdminPayment,
} from "../../service/api/payments";

function formatTableDate(iso: string) {
  const d = new Date(iso);
  return {
    date: d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    time: d.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }),
  };
}

const InvoicesList = () => {
  const [rows, setRows] = useState<AdminPayment[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setLoadError(null);
      try {
        const res = await adminPaymentsApi.list({ limit: 200 });
        if (!cancelled) setRows(res.data.data);
      } catch (e: unknown) {
        if (!cancelled) {
          const msg =
            typeof e === "object" && e !== null && "message" in e
              ? String((e as { message?: string }).message)
              : "Failed to load invoices.";
          setLoadError(msg);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const dataSource = rows.map((p, idx) => {
    const created = formatTableDate(p.createdAt);
    const due = p.booking?.returnDate
      ? formatTableDate(p.booking.returnDate)
      : created;
    const name =
      [p.user?.firstName, p.user?.lastName].filter(Boolean).join(" ") || "—";
    const imgNum = String((idx % 18) + 3).padStart(2, "0");
    return {
      key: p.id,
      id: p.id,
      INVOICENO: p.invoiceNo || `#${p.id.slice(-8)}`,
      IMAGE: `avatar-${imgNum}.jpg`,
      NAME: name,
      EMAIL: p.user?.email || "—",
      userId: p.user?.id || null,
      CREATEDDATE: created.date,
      CREATEDTIME: created.time,
      DUEDATE: due.date,
      DUETIME: due.time,
      INVOICEAMOUNT: formatInvoiceCurrency(p.amount, p.currency),
      STATUS: p.invoiceStatusLabel || "—",
    };
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleDownloadInvoice = (paymentId: string, gst: "0" | "18") => {
    void (async () => {
      try {
        await downloadInvoicePdf(paymentId, gst);
      } catch (err) {
        toast.error(
          err instanceof Error ? err.message : "Could not download invoice PDF."
        );
      }
    })();
  };

  const columns = [
    {
      title: "INVOICE NO",
      dataIndex: "INVOICENO",
      render: (text: string, record: { id: string }) => (
        <Link
          to={generatePath(all_routes.admininvoiceDetails, { paymentId: record.id })}
          className="fs-12 fw-medium"
        >
          {text}
        </Link>
      ),
      sorter: (a: { INVOICENO: string }, b: { INVOICENO: string }) =>
        a.INVOICENO.localeCompare(b.INVOICENO),
    },
    {
      title: "NAME",
      dataIndex: "NAME",
      render: (text: string, record: { IMAGE: string; userId: string | null }) => (
        <div className="d-flex align-items-center">
          <Link
            to={record.userId ? `${all_routes.customerDetails}/${record.userId}` : all_routes.customerDetails}
            className="avatar avatar-rounded me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/profiles/${record.IMAGE}`}
              alt="User Img"
            />
          </Link>
          <div>
            <h6 className="fs-14">
              <Link to={record.userId ? `${all_routes.customerDetails}/${record.userId}` : all_routes.customerDetails}>
                {text}
              </Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: { NAME: string }, b: { NAME: string }) => a.NAME.localeCompare(b.NAME),
    },
    {
      title: "EMAIL",
      dataIndex: "EMAIL",
      sorter: (a: { EMAIL: string }, b: { EMAIL: string }) => a.EMAIL.localeCompare(b.EMAIL),
    },
    {
      title: "CREATED DATE",
      dataIndex: "CREATEDDATE",
      render: (text: string, record: { CREATEDTIME: string }) => (
        <div>
          <p className="mb-0">{text}</p>
          <span className="text-gray-5">{record.CREATEDTIME}</span>
        </div>
      ),
      sorter: (a: { CREATEDDATE: string }, b: { CREATEDDATE: string }) =>
        a.CREATEDDATE.localeCompare(b.CREATEDDATE),
    },
    {
      title: "DUE DATE",
      dataIndex: "DUEDATE",
      render: (text: string, record: { DUETIME: string }) => (
        <div>
          <p className="mb-0">{text}</p>
          <span className="text-gray-5">{record.DUETIME}</span>
        </div>
      ),
      sorter: (a: { DUEDATE: string }, b: { DUEDATE: string }) =>
        a.DUEDATE.localeCompare(b.DUEDATE),
    },
    {
      title: "INVOICE AMOUNT",
      dataIndex: "INVOICEAMOUNT",
      sorter: (a: { INVOICEAMOUNT: string }, b: { INVOICEAMOUNT: string }) =>
        a.INVOICEAMOUNT.localeCompare(b.INVOICEAMOUNT),
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${text === "Paid"
              ? "badge-soft-success"
              : text === "Pending"
                ? "badge-soft-info"
                : text === "Refunded"
                  ? "badge-soft-purple"
                  : text === "Unpaid"
                    ? "badge-soft-danger"
                    : "badge-soft-danger"
            } d-inline-flex align-items-center badge-sm`}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a: { STATUS: string }, b: { STATUS: string }) =>
        a.STATUS.localeCompare(b.STATUS),
    },
    {
      title: "Action",
      dataIndex: "",
      render: (_: unknown, record: { id: string }) => (
        <div className="dropdown">
          <button
            className="btn btn-icon btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-dots-vertical" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end p-2">
            <li>
              <button
                type="button"
                className="dropdown-item rounded-1"
                onClick={() => handleDownloadInvoice(record.id, "18")}
              >
                <i className="ti ti-download me-1" />
                PDF with GST 18%
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item rounded-1"
                onClick={() => handleDownloadInvoice(record.id, "0")}
              >
                <i className="ti ti-download me-1" />
                PDF without GST
              </button>
            </li>
            {/* <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
              >
                <i className="ti ti-trash me-1" />
                Delete
              </Link>
            </li> */}
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content me-4">
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Invoices</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Invoices
                </li>
              </ol>
            </nav>
          </div>
          <div>
            <Link
              to={all_routes.adminAddInvoice}
              className="btn btn-primary d-inline-flex align-items-center"
            >
              <i className="ti ti-plus me-1" />
              Add Invoice
            </Link>
          </div>
        </div>

        {loadError ? (
          <div className="alert alert-warning">{loadError}</div>
        ) : null}

        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3 ms-auto">
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder={loading ? "Loading…" : "Search"}
                  value={searchValue}
                  onChange={handleSearchChange}
                  disabled={loading}
                />
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <InvoicesListTableSkeleton />
        ) : (
          <CommonDatatable
            dataSource={dataSource}
            columns={columns}
            searchValue={searchValue}
            showRowSelection={false}
          />
        )}
      </div>

      {/* <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Invoice</h4>
              <p className="mb-3">Are you sure you want to delete Invoice?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to={all_routes.adminInvoicesList}
                  className="btn btn-primary"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default InvoicesList;
