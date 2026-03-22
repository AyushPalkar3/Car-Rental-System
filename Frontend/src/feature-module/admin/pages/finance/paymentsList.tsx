import React, { useEffect, useState } from "react";
import { Link, generatePath } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import CommonDatatable from "../../common/dataTable";
import { all_routes } from "../../../../router/all_routes";
import {
  adminPaymentsApi,
  downloadInvoicePdf,
  formatInvoiceCurrency,
  type AdminPayment,
} from "../../service/api/payments";

function mapPaymentStatus(status: string) {
  switch (status) {
    case "SUCCESS":
      return "Completed";
    case "PENDING":
      return "Pending";
    case "FAILED":
      return "Failed";
    case "REFUNDED":
      return "Refunded";
    default:
      return status;
  }
}

function formatPaymentDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const PaymentsList = () => {
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
              : "Failed to load payments.";
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
    const name =
      [p.user?.firstName, p.user?.lastName].filter(Boolean).join(" ") || "—";
    const imgNum = String((idx % 18) + 3).padStart(2, "0");
    const tx =
      p.razorpayPaymentId || p.razorpayOrderId?.slice(-12) || p.id.slice(-10);
    return {
      key: p.id,
      id: p.id,
      TRANSACTIONID: tx,
      NAME: name,
      IMAGE: `avatar-${imgNum}.jpg`,
      AMOUNT: formatInvoiceCurrency(p.amount, p.currency),
      PAYMENTMETHOD: "Razorpay",
      DATE: formatPaymentDate(p.createdAt),
      STATUS: mapPaymentStatus(p.status),
    };
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const columns = [
    {
      title: "TRANSACTION ID",
      dataIndex: "TRANSACTIONID",
      render: (text: string, record: { id: string }) => (
        <Link
          to={generatePath(all_routes.admininvoiceDetails, { paymentId: record.id })}
        >
          {text}
        </Link>
      ),
      sorter: (a: { TRANSACTIONID: string }, b: { TRANSACTIONID: string }) =>
        a.TRANSACTIONID.localeCompare(b.TRANSACTIONID),
    },
    {
      title: "NAME",
      dataIndex: "NAME",
      render: (text: string, record: { IMAGE: string }) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.customerDetails}
            className="avatar me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/profiles/${record.IMAGE}`}
              className="rounded-circle"
              alt=""
            />
          </Link>
          <h6>
            <Link to={all_routes.customerDetails} className="fs-14 fw-semibold">
              {text}
            </Link>
          </h6>
        </div>
      ),
      sorter: (a: { NAME: string }, b: { NAME: string }) => a.NAME.localeCompare(b.NAME),
    },
    {
      title: "AMOUNT",
      dataIndex: "AMOUNT",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: { AMOUNT: string }, b: { AMOUNT: string }) =>
        a.AMOUNT.localeCompare(b.AMOUNT),
    },
    {
      title: "PAYMENT METHOD",
      dataIndex: "PAYMENTMETHOD",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: { PAYMENTMETHOD: string }, b: { PAYMENTMETHOD: string }) =>
        a.PAYMENTMETHOD.localeCompare(b.PAYMENTMETHOD),
    },
    {
      title: "DATE",
      dataIndex: "DATE",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: { DATE: string }, b: { DATE: string }) => a.DATE.localeCompare(b.DATE),
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${text === "Completed" ? "bg-success-transparent" : text === "Pending" ? "bg-info-transparent" : text === "Refunded" ? " bg-violet-transparent" : "bg-danger-transparent"} `}
        >
          <i
            className={`ti ti-point-filled ${
              text === "Completed"
                ? "text-success"
                : text === "Pending"
                  ? "text-info"
                  : text === "Refunded"
                    ? "text-purple"
                    : "text-danger"
            } me-1`}
          />
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
              <Link
                className="dropdown-item rounded-1"
                to={generatePath(all_routes.admininvoiceDetails, {
                  paymentId: record.id,
                })}
              >
                <i className="ti ti-file-invoice me-1" />
                View invoice
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item rounded-1"
                onClick={() => downloadInvoicePdf(record.id, "0")}
              >
                <i className="ti ti-download me-1" />
                PDF without GST
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dropdown-item rounded-1"
                onClick={() => downloadInvoicePdf(record.id, "18")}
              >
                <i className="ti ti-download me-1" />
                PDF with GST 18%
              </button>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_contact"
              >
                <i className="ti ti-trash me-1" />
                Delete
              </Link>
            </li>
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
            <h4 className="mb-1">Payments</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Payments
                </li>
              </ol>
            </nav>
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

        <CommonDatatable
          dataSource={dataSource}
          columns={columns}
          searchValue={searchValue}
          showRowSelection={false}
        />
      </div>

      <div className="modal fade" id="delete_contact">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Payments</h4>
              <p className="mb-3">Are you sure you want to delete Payments?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to={all_routes.adminPaymentsList}
                  className="btn btn-primary"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsList;
