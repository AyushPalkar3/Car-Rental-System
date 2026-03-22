import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import {
  adminUnavailabilityAPI,
  type UnavailabilityRequest,
  type UnavailabilityStatus,
} from "../../service/api/unavailability";

const API_BASE = import.meta.env.VITE_API_BASE_URL_IMAGE ?? import.meta.env.VITE_API_BASE_URL ?? "";

const getImageUrl = (path: string | null | undefined) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_BASE}${path}`;
};

const formatDateTime = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

type ActionModal = {
  type: "approve" | "reject";
  request: UnavailabilityRequest;
};

const statusBadge = (status: UnavailabilityStatus) => {
  const map: Record<UnavailabilityStatus, { cls: string; label: string }> = {
    PENDING: { cls: "badge bg-warning-subtle text-warning", label: "Pending" },
    APPROVED: { cls: "badge bg-success-subtle text-success", label: "Approved" },
    REJECTED: { cls: "badge bg-danger-subtle text-danger", label: "Rejected" },
  };
  const { cls, label } = map[status] ?? { cls: "badge bg-secondary", label: status };
  return <span className={cls}>{label}</span>;
};

const UnavailabilityRequests = () => {
  const routes = all_routes;

  const [requests, setRequests] = useState<UnavailabilityRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<UnavailabilityStatus | "">("");

  const [actionModal, setActionModal] = useState<ActionModal | null>(null);
  const [adminNote, setAdminNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const fetchRequests = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await adminUnavailabilityAPI.listRequests(
        statusFilter ? statusFilter : undefined
      );
      setRequests(res.data.data);
    } catch {
      setError("Failed to load requests.");
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const openModal = (type: "approve" | "reject", request: UnavailabilityRequest) => {
    setActionModal({ type, request });
    setAdminNote("");
    setSaveError(null);
  };

  const handleAction = async () => {
    if (!actionModal) return;
    setSaving(true);
    setSaveError(null);
    try {
      if (actionModal.type === "approve") {
        await adminUnavailabilityAPI.approve(actionModal.request.id, adminNote || undefined);
      } else {
        await adminUnavailabilityAPI.reject(actionModal.request.id, adminNote || undefined);
      }
      setRequests((prev) =>
        prev.map((r) =>
          r.id === actionModal.request.id
            ? { ...r, status: actionModal.type === "approve" ? "APPROVED" : "REJECTED", adminNote }
            : r
        )
      );
      setActionModal(null);
    } catch (err: any) {
      setSaveError(err?.response?.data?.message ?? "Action failed. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Car Unavailability Requests</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Unavailability Requests
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Filter bar */}
        <div className="d-flex align-items-center gap-2 mb-3 flex-wrap">
          {(["", "PENDING", "APPROVED", "REJECTED"] as const).map((s) => (
            <button
              key={s}
              type="button"
              className={`btn btn-sm ${statusFilter === s ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setStatusFilter(s)}
            >
              {s === "" ? "All" : s.charAt(0) + s.slice(1).toLowerCase()}
            </button>
          ))}
          <button
            type="button"
            className="btn btn-sm btn-white ms-auto"
            onClick={fetchRequests}
          >
            <i className="ti ti-refresh me-1" />
            Refresh
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : requests.length === 0 ? (
          <div className="alert alert-secondary">No requests found.</div>
        ) : (
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Car</th>
                      <th>Partner</th>
                      <th>From</th>
                      <th>To</th>
                      <th>Reason</th>
                      <th>Status</th>
                      <th>Admin Note</th>
                      <th>Submitted</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((req) => (
                      <tr key={req.id}>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            {req.car?.thumbnail ? (
                              <img
                                src={getImageUrl(req.car.thumbnail)}
                                alt={req.car.name}
                                style={{ width: 36, height: 36, objectFit: "cover", borderRadius: 6 }}
                                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                              />
                            ) : (
                              <div
                                style={{
                                  width: 36, height: 36, borderRadius: 6,
                                  background: "#f0f0f0", display: "flex",
                                  alignItems: "center", justifyContent: "center",
                                }}
                              >
                                <i className="ti ti-car text-muted" />
                              </div>
                            )}
                            <span className="fw-medium">{req.car?.name ?? req.carId}</span>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="mb-0 fw-medium">{req.partner?.name ?? "—"}</p>
                            {req.partner?.phoneNum && (
                              <small className="text-muted">{req.partner.phoneNum}</small>
                            )}
                          </div>
                        </td>
                        <td className="text-nowrap">{formatDateTime(req.fromDateTime)}</td>
                        <td className="text-nowrap">{formatDateTime(req.toDateTime)}</td>
                        <td>
                          <span className="text-muted" style={{ maxWidth: 180, display: "block", wordBreak: "break-word" }}>
                            {req.reason ?? "—"}
                          </span>
                        </td>
                        <td>{statusBadge(req.status)}</td>
                        <td>
                          <span className="text-muted fs-13">{req.adminNote ?? "—"}</span>
                        </td>
                        <td className="text-nowrap text-muted fs-13">
                          {formatDateTime(req.createdAt)}
                        </td>
                        <td>
                          {req.status === "PENDING" ? (
                            <div className="d-flex gap-2">
                              <button
                                className="btn btn-sm btn-success"
                                onClick={() => openModal("approve", req)}
                              >
                                <i className="ti ti-check me-1" />
                                Approve
                              </button>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => openModal("reject", req)}
                              >
                                <i className="ti ti-x me-1" />
                                Reject
                              </button>
                            </div>
                          ) : (
                            <span className="text-muted fs-13">Processed</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Approve / Reject Modal */}
      {actionModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.45)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setActionModal(null); }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center gap-2">
                  {actionModal.type === "approve" ? (
                    <>
                      <i className="ti ti-circle-check text-success" />
                      Approve Request
                    </>
                  ) : (
                    <>
                      <i className="ti ti-circle-x text-danger" />
                      Reject Request
                    </>
                  )}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setActionModal(null)}
                />
              </div>
              <div className="modal-body">
                <p className="text-muted fs-13 mb-3">
                  {actionModal.type === "approve" ? (
                    <>
                      Approving this request will mark{" "}
                      <strong>{actionModal.request.car?.name}</strong> as{" "}
                      <span className="text-danger">Unavailable</span>.
                    </>
                  ) : (
                    <>
                      Rejecting this request — the car will remain available.
                    </>
                  )}
                </p>
                {saveError && (
                  <div className="alert alert-danger py-2 fs-13">{saveError}</div>
                )}
                <div>
                  <label className="form-label fw-medium">
                    Admin Note <small className="text-muted">(optional)</small>
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Add a note for the car partner..."
                    value={adminNote}
                    onChange={(e) => setAdminNote(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setActionModal(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className={`btn d-flex align-items-center gap-2 ${
                    actionModal.type === "approve" ? "btn-success" : "btn-danger"
                  }`}
                  onClick={handleAction}
                  disabled={saving}
                >
                  {saving ? (
                    <span className="spinner-border spinner-border-sm" />
                  ) : actionModal.type === "approve" ? (
                    <i className="ti ti-check" />
                  ) : (
                    <i className="ti ti-x" />
                  )}
                  {saving
                    ? "Processing..."
                    : actionModal.type === "approve"
                    ? "Confirm Approve"
                    : "Confirm Reject"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UnavailabilityRequests;
