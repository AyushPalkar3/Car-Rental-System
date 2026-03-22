import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import CommonDatatable from "../../../common/dataTable";
import { listReservations, cancelReservation } from "../../../service/api/reservations";
import { mapReservationToTableRow } from "./reservationUtils";

const SHIMMER: React.CSSProperties = {
  background: "linear-gradient(90deg,#e8e8e8 25%,#f5f5f5 50%,#e8e8e8 75%)",
  backgroundSize: "200% 100%",
  animation: "reservationsListShimmer 1.4s infinite",
};

type StatusFilterKey =
  | "all"
  | "Pending"
  | "Confirmed"
  | "In Rental"
  | "Completed"
  | "Cancelled";

const STATUS_FILTERS: { key: StatusFilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "Pending", label: "Pending" },
  { key: "Confirmed", label: "Confirmed" },
  { key: "In Rental", label: "In rental" },
  { key: "Completed", label: "Completed" },
  { key: "Cancelled", label: "Cancelled" },
];

const ReservationsList = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilterKey>("all");
  const [cancelId, setCancelId] = useState<string | null>(null);
  const [cancelReason, setCancelReason] = useState("");
  const [cancelling, setCancelling] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const imageBaseUrl = useMemo(() => {
    const base = (import.meta as unknown as { env?: { VITE_API_BASE_URL_IMAGE?: string } })
      .env?.VITE_API_BASE_URL_IMAGE;
    return typeof base === "string" ? base.replace(/\/$/, "") : "";
  }, []);

  const refresh = useCallback(async () => {
    setListError(null);
    setLoading(true);
    try {
      const rows = await listReservations();
      setData(rows.map((b) => mapReservationToTableRow(b, imageBaseUrl)));
    } catch (e: unknown) {
      setListError(
        e && typeof e === "object" && "message" in e
          ? String((e as { message: string }).message)
          : "Failed to load reservations"
      );
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [imageBaseUrl]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const confirmCancel = async () => {
    if (!cancelId) return;
    const trimmed = cancelReason.trim();
    if (!trimmed) {
      setListError("Please enter a cancellation reason.");
      return;
    }
    setListError(null);
    setCancelling(true);
    try {
      await cancelReservation(cancelId, trimmed);
      setCancelId(null);
      setCancelReason("");
      await refresh();
      document.getElementById("cancel_reservation_modal_hide")?.click();
    } catch (e: unknown) {
      setListError(
        e && typeof e === "object" && "message" in e
          ? String((e as { message: string }).message)
          : "Could not cancel reservation"
      );
    } finally {
      setCancelling(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };

  const filteredByStatus = useMemo(() => {
    if (statusFilter === "all") return data;
    return data.filter((row) => row.STATUS === statusFilter);
  }, [data, statusFilter]);

  const columns = [
    {
      title: "CAR",
      dataIndex: "CAR",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
            <Link
              to={all_routes.carDetails}
              className="avatar me-2 flex-shrink-0"
            >
            {record.CAR_IMG ? (
              <img
                src={record.CAR_IMG}
                alt="car"
                className="avatar-img rounded"
                style={{ width: 40, height: 40, objectFit: "cover" }}
              />
            ) : (
              <ImageWithBasePath
                src="assets/admin/img/car/car-01.jpg"
                alt="car"
              />
            )}
          </Link>
          <div>
            <Link
              to={`${all_routes.reservationDetails}/${record.bookingId}`}
              className="text-info d-block mb-1"
            >
              {record.CAR_NO}
            </Link>
            <h6 className="fs-14">
              <Link to={all_routes.carDetails}>{text}</Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CAR.length - b.CAR.length,
    },
    {
      title: "CUSTOMER",
      dataIndex: "CUSTOMER",
      render: (text: string, record: any) => (
        <div>
          <h6 className="mb-1 fs-14">
            <Link to={all_routes.companyDetails}>{text}</Link>
          </h6>
          <span
            className={`badge  ${record.BADGE === "Client" ? "bg-secondary-transparent" : "bg-violet-transparent"} rounded-pill`}
          >
            {record.BADGE}
          </span>
        </div>
      ),
      sorter: (a: any, b: any) => a.CUSTOMER.length - b.CUSTOMER.length,
    },

    {
      title: "PICK UP DETAILS",
      dataIndex: "PICK_UP_DETAILS",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
            <h5 className="mb-2 fs-16">{record.PICK_UP_DATE}</h5>
            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
              {record.PICK_UP_MONTH}
            </span>
          </div>
          <div>
            <p className="text-gray-9 mb-0">{text} </p>
            <span className="fs-13">{record.PICK_UP_TIME}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        a.PICK_UP_DETAILS.length - b.PICK_UP_DETAILS.length,
    },
    {
      title: "DROP OFF DETAILS",
      dataIndex: "DROP_OFF_DETAILS",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
            <h5 className="mb-2 fs-16">{record.DROP_OFF_DATE}</h5>
            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
              {record.DROP_OFF_MONTH}
            </span>
          </div>
          <div>
            <p className="text-gray-9 mb-0">{text} </p>
            <span className="fs-13">{record.DROP_OFF_TIME}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        a.DROP_OFF_DETAILS.length - b.DROP_OFF_DETAILS.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge  ${text === "Completed" ? "bg-success-transparent" : text === "Confirmed" || text === "Pending" ? "bg-orange-transparent" : text === "In Rental" ? "bg-violet-transparent" : "bg-danger-transparent"} d-inline-flex align-items-center badge-sm `}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
    {
      title: "Action",
      dataIndex: "",
      render: (_: unknown, record: any) => (
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
                to={`${all_routes.reservationDetails}/${record.bookingId}`}
              >
                <i className="ti ti-eye me-1" />
                View Details
              </Link>
            </li>
            {/* <li>
              <Link
                className="dropdown-item rounded-1"
                to={`${all_routes.adminEditReservations}/${record.bookingId}`}
              >
                <i className="ti ti-edit me-1" />
                Edit
              </Link>
            </li> */}
            {record.bookingStatus !== "CANCELLED" &&
              record.bookingStatus !== "COMPLETED" && (
                <li>
                  <Link
                    className="dropdown-item rounded-1"
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#cancel_reservation_modal"
                    onClick={() => {
                      setCancelId(record.bookingId);
                      setCancelReason("");
                      setListError(null);
                    }}
                  >
                    <i className="ti ti-x me-1" />
                    Cancel reservation
                  </Link>
                </li>
              )}
          </ul>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">All Reservations</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  All Reservations
                </li>
              </ol>
            </nav>
          </div>
          {/* <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <Link to="#" className="btn btn-white d-flex align-items-center">
                <i className="ti ti-printer me-2" />
                Print
              </Link>
            </div>
            <div className="mb-2">
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export
                </Link>
              </div>
            </div>
          </div> */}
        </div>
        {/* /Breadcrumb */}
        {listError && (
          <div className="alert alert-danger" role="alert">
            {listError}
          </div>
        )}
        <style>{`
          .reservations-list-toolbar .reservations-status-select {
            border-radius: 0.375rem;
          }
          .reservations-list-toolbar .reservations-status-select:focus {
            border-color: #dee2e6;
            box-shadow: 0 0 0 0.15rem rgba(73, 80, 87, 0.12);
            outline: 0;
          }
        `}</style>
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex align-items-center flex-wrap gap-3 gap-md-4">
            <div className="reservations-list-toolbar d-flex align-items-center flex-wrap gap-2 gap-md-3 rounded-2 border bg-white px-3 py-2 shadow-sm">
              <div className="d-flex align-items-center gap-2">
                <span className="text-gray-9 fs-13 fw-semibold mb-0 text-nowrap">
                  Sort
                </span>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-sm d-inline-flex align-items-center gap-2 border shadow-sm"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-arrows-sort text-gray-6" aria-hidden />
                    <span className="text-gray-9">Latest</span>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end p-2 shadow-sm border-0">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Latest
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="vr d-none d-sm-block align-self-stretch my-1 opacity-25"
                role="separator"
                aria-orientation="vertical"
              />
              <div className="d-flex align-items-center gap-2">
                <label
                  htmlFor="reservation-status-filter"
                  className="text-gray-9 fs-13 fw-semibold mb-0 text-nowrap"
                >
                  Status
                </label>
                <select
                  id="reservation-status-filter"
                  className="form-select form-select-sm reservations-status-select border bg-white shadow-sm text-gray-9"
                  style={{ minWidth: 168, maxWidth: 220 }}
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value as StatusFilterKey)
                  }
                >
                  {STATUS_FILTERS.map(({ key, label }) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  value={searchValue} // Controlled input
                  onChange={handleSearchChange} // Update search value
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}
        {/* Custom Data Table */}
        {loading ? (
          <div className="card mb-0">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-nowrap mb-0">
                  <thead className="table-light">
                    <tr>
                      {[
                        "CAR",
                        "CUSTOMER",
                        "PICK UP DETAILS",
                        "DROP OFF DETAILS",
                        "STATUS",
                        "ACTION",
                      ].map((h) => (
                        <th key={h} className="px-3 py-3">
                          <div
                            style={{
                              ...SHIMMER,
                              height: 14,
                              width: h === "PICK UP DETAILS" || h === "DROP OFF DETAILS" ? 110 : 72,
                            }}
                          />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 8 }).map((_, rowIdx) => (
                      <tr key={rowIdx}>
                        <td className="px-3 py-3">
                          <div className="d-flex align-items-center gap-2">
                            <div
                              style={{
                                ...SHIMMER,
                                width: 40,
                                height: 40,
                                borderRadius: 8,
                                flexShrink: 0,
                              }}
                            />
                            <div>
                              <div
                                style={{
                                  ...SHIMMER,
                                  height: 12,
                                  width: 88,
                                  marginBottom: 6,
                                }}
                              />
                              <div style={{ ...SHIMMER, height: 10, width: 120 }} />
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <div className="d-flex align-items-center gap-2">
                            <div
                              style={{
                                ...SHIMMER,
                                width: 36,
                                height: 36,
                                borderRadius: "50%",
                                flexShrink: 0,
                              }}
                            />
                            <div>
                              <div
                                style={{
                                  ...SHIMMER,
                                  height: 12,
                                  width: 100,
                                  marginBottom: 6,
                                }}
                              />
                              <div style={{ ...SHIMMER, height: 10, width: 48 }} />
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ ...SHIMMER, width: 44, height: 48, borderRadius: 6 }} />
                            <div className="flex-grow-1">
                              <div
                                style={{
                                  ...SHIMMER,
                                  height: 12,
                                  width: "85%",
                                  maxWidth: 140,
                                  marginBottom: 6,
                                }}
                              />
                              <div style={{ ...SHIMMER, height: 10, width: 64 }} />
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <div className="d-flex align-items-center gap-2">
                            <div style={{ ...SHIMMER, width: 44, height: 48, borderRadius: 6 }} />
                            <div className="flex-grow-1">
                              <div
                                style={{
                                  ...SHIMMER,
                                  height: 12,
                                  width: "85%",
                                  maxWidth: 140,
                                  marginBottom: 6,
                                }}
                              />
                              <div style={{ ...SHIMMER, height: 10, width: 64 }} />
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <div style={{ ...SHIMMER, height: 24, width: 88, borderRadius: 12 }} />
                        </td>
                        <td className="px-3 py-3">
                          <div style={{ ...SHIMMER, height: 32, width: 32, borderRadius: 6 }} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <style>{`
              @keyframes reservationsListShimmer {
                0% { background-position: 200% 0; }
                100% { background-position: -200% 0; }
              }
            `}</style>
          </div>
        ) : (
          <CommonDatatable
            dataSource={filteredByStatus}
            columns={columns}
            searchValue={searchValue}
            showRowSelection={false}
          />
        )}
      </div>
      <div className="modal fade" id="cancel_reservation_modal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                id="cancel_reservation_modal_hide"
                className="d-none"
                data-bs-dismiss="modal"
                aria-hidden="true"
              />
              <div className="text-center mb-3">
                <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-2 d-inline-flex align-items-center justify-content-center">
                  <i className="ti ti-x fs-26" />
                </span>
                <h4 className="mb-1">Cancel reservation</h4>
                <p className="text-muted mb-0">
                  The booking will be marked cancelled and kept on record.
                </p>
              </div>
              <div className="mb-3">
                <label htmlFor="list_cancel_reason" className="form-label">
                  Reason <span className="text-danger">*</span>
                </label>
                <textarea
                  id="list_cancel_reason"
                  className="form-control"
                  rows={4}
                  placeholder="Reason for cancellation…"
                  value={cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                  disabled={cancelling}
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-light"
                  data-bs-dismiss="modal"
                  disabled={cancelling}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  disabled={cancelling}
                  onClick={confirmCancel}
                >
                  {cancelling ? "Cancelling…" : "Confirm cancellation"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationsList;
