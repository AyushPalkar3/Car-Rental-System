import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import CommonDatatable from "../../../common/dataTable";
import { partnerCarAPI, unavailabilityAPI, type PartnerCar } from "../../../service/api/car";

const API_BASE = import.meta.env.VITE_API_BASE_URL_IMAGE ?? import.meta.env.VITE_API_BASE_URL ?? "";

const getImageUrl = (path: string | null | undefined) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_BASE}${path}`;
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
};

type UnavailableForm = {
  carId: string;
  carName: string;
  fromDate: string;
  fromTime: string;
  toDate: string;
  toTime: string;
  reason: string;
};

const EMPTY_FORM: UnavailableForm = {
  carId: "",
  carName: "",
  fromDate: "",
  fromTime: "",
  toDate: "",
  toTime: "",
  reason: "",
};

const CarsList = () => {
  const [cars, setCars] = useState<PartnerCar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState<string>("");
  const [tableStatusFilter, setTableStatusFilter] = useState<"" | "Active" | "Inactive" | "Pending Approval">("");
  const [sortBy, setSortBy] = useState<"latest" | "az" | "za" | "last7" | "lastMonth">("latest");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Tracks car IDs that already have a PENDING unavailability request
  const [pendingRequestCarIds, setPendingRequestCarIds] = useState<Set<string>>(new Set());

  // Unavailability modal state
  const [showUnavailModal, setShowUnavailModal] = useState(false);
  const [unavailForm, setUnavailForm] = useState<UnavailableForm>(EMPTY_FORM);
  const [unavailSaving, setUnavailSaving] = useState(false);
  const [unavailError, setUnavailError] = useState<string | null>(null);
  const [unavailSuccess, setUnavailSuccess] = useState(false);
  const [togglingAvailId, setTogglingAvailId] = useState<string | null>(null);

  const fetchCars = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [carsRes, reqRes] = await Promise.all([
        partnerCarAPI.listCars(),
        unavailabilityAPI.listMyRequests(),
      ]);
      setCars(carsRes.data.data);
      const pendingIds = new Set(
        reqRes.data.data
          .filter((r) => r.status === "PENDING")
          .map((r) => r.carId)
      );
      setPendingRequestCarIds(pendingIds);
    } catch {
      setError("Failed to load cars.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this car?")) return;
    setDeletingId(id);
    try {
      await partnerCarAPI.deleteCar(id);
      setCars((prev) => prev.filter((c) => c.id !== id));
    } catch {
      alert("Failed to delete car.");
    } finally {
      setDeletingId(null);
    }
  };

  const openUnavailModal = (car: PartnerCar) => {
    const today = new Date().toISOString().split("T")[0];
    setUnavailForm({
      carId: car.id,
      carName: car.name,
      fromDate: today,
      fromTime: "00:00",
      toDate: today,
      toTime: "23:59",
      reason: "",
    });
    setUnavailError(null);
    setShowUnavailModal(true);
  };

  const handleUnavailSubmit = async () => {
    if (!unavailForm.fromDate || !unavailForm.toDate) {
      setUnavailError("Please fill in both From and To dates.");
      return;
    }
    setUnavailSaving(true);
    setUnavailError(null);
    setUnavailSuccess(false);
    try {
      const fromDateTime = `${unavailForm.fromDate}T${unavailForm.fromTime || "00:00"}:00`;
      const toDateTime = `${unavailForm.toDate}T${unavailForm.toTime || "23:59"}:00`;
      await unavailabilityAPI.createRequest({
        carId: unavailForm.carId,
        fromDateTime,
        toDateTime,
        reason: unavailForm.reason || undefined,
      });
      setPendingRequestCarIds((prev) => new Set([...prev, unavailForm.carId]));
      setUnavailSuccess(true);
      setTimeout(() => {
        setShowUnavailModal(false);
        setUnavailSuccess(false);
      }, 1800);
    } catch (err: any) {
      const msg =
        err?.response?.data?.message ?? "Failed to submit request. Please try again.";
      setUnavailError(msg);
    } finally {
      setUnavailSaving(false);
    }
  };

  const handleMakeAvailable = async (id: string) => {
    setTogglingAvailId(id);
    try {
      const fd = new FormData();
      fd.append("isAvailable", "true");
      await partnerCarAPI.updateCar(id, fd);
      setCars((prev) =>
        prev.map((c) => (c.id === id ? { ...c, isAvailable: true } : c))
      );
    } catch {
      alert("Failed to make car available.");
    } finally {
      setTogglingAvailId(null);
    }
  };

  const sortLabel: Record<typeof sortBy, string> = {
    latest: "Latest",
    az: "A → Z",
    za: "Z → A",
    last7: "Last 7 Days",
    lastMonth: "Last Month",
  };

  const data = cars
    .filter((car) => {
      if (sortBy === "last7") {
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate() - 7);
        return new Date(car.createdAt) >= cutoff;
      }
      if (sortBy === "lastMonth") {
        const cutoff = new Date();
        cutoff.setMonth(cutoff.getMonth() - 1);
        return new Date(car.createdAt) >= cutoff;
      }
      return true;
    })
    .map((car) => ({
      key: car.id,
      id: car.id,
      CAR: car.name,
      CAR_TYPE: car.category ?? car.transmission ?? "—",
      THUMBNAIL: car.thumbnail,
      BASE_LOCATION: "—",
      PRICE: car.pricing?.find((p) => p.duration === "DAY")
        ? `₹${car.pricing.find((p) => p.duration === "DAY")!.price}/day`
        : car.pricing?.[0]
        ? `₹${car.pricing[0].price}`
        : "—",
      IS_FEATURED: car.featured,
      CREATED_DATE: formatDate(car.createdAt),
      STATUS: car.isAvailable
        ? pendingRequestCarIds.has(car.id)
          ? "Pending Approval"
          : "Active"
        : "Inactive",
      IS_AVAILABLE: car.isAvailable,
      HAS_PENDING: pendingRequestCarIds.has(car.id),
      _car: car,
    }))
    .filter((row) => (tableStatusFilter ? row.STATUS === tableStatusFilter : true))
    .sort((a, b) => {
      if (sortBy === "az") return a.CAR.localeCompare(b.CAR);
      if (sortBy === "za") return b.CAR.localeCompare(a.CAR);
      // latest is default — already ordered by createdAt desc from API, no-op needed
      return 0;
    });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const columns = [
    {
      title: "CAR",
      dataIndex: "CAR",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={`${all_routes.carPartnerCarDetails}?id=${record.id}`}
            className="avatar me-2 flex-shrink-0"
          >
            {record.THUMBNAIL ? (
              <img
                src={getImageUrl(record.THUMBNAIL)}
                className="rounded-3"
                alt={text}
                style={{ width: 40, height: 40, objectFit: "cover" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            ) : (
              <ImageWithBasePath
                src="assets/admin/img/car/car-01.jpg"
                className="rounded-3"
                alt=""
              />
            )}
          </Link>
          <div>
            <h6>
              <Link to={`${all_routes.carPartnerCarDetails}?id=${record.id}`} className="fs-14 fw-semibold">
                {text}
              </Link>
            </h6>
            <p>{record.CAR_TYPE}</p>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CAR.length - b.CAR.length,
    },

    {
      title: "BASE LOCATION",
      dataIndex: "BASE_LOCATION",
      sorter: (a: any, b: any) =>
        a.BASE_LOCATION.length - b.BASE_LOCATION.length,
    },
    {
      title: "PRICE (PER DAY)",
      dataIndex: "PRICE",
      render: (text: string) => (
        <p className="fs-14 fw-semibold text-gray-9">{text}</p>
      ),
      sorter: (a: any, b: any) => a.PRICE.length - b.PRICE.length,
    },
    {
      title: "IS FEATURED",
      dataIndex: "IS_FEATURED",
      render: (val: boolean) => (
        <i className={`ti ti-star-filled ${val ? "text-warning" : "text-muted"}`} />
      ),
      sorter: (a: any, b: any) => Number(b.IS_FEATURED) - Number(a.IS_FEATURED),
    },
    {
      title: "CREATED DATE",
      dataIndex: "CREATED_DATE",
      render: (text: string) => (
        <div>
          <h6 className="fs-14 fw-normal">{text}</h6>
          <p className="fs-13">01:00 PM</p>
        </div>
      ),
      sorter: (a: any, b: any) => a.CREATED_DATE.length - b.CREATED_DATE.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => {
        const color =
          text === "Active"
            ? "text-success"
            : text === "Pending Approval"
            ? "text-warning"
            : "text-danger";
        return (
          <span className="badge badge-dark-transparent">
            <i className={`ti ti-point-filled ${color} me-1`} />
            {text}
          </span>
        );
      },
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
                to={`${all_routes.carPartnerCarDetails}?id=${record.id}`}
              >
                <i className="ti ti-eye me-1" />
                View Details
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to={`${all_routes.carPartnerEditCar}?id=${record.id}`}
              >
                <i className="ti ti-edit me-1" />
                Edit
              </Link>
            </li>
            <li>
              {record.IS_AVAILABLE ? (
                record.HAS_PENDING ? (
                  <span className="dropdown-item rounded-1 text-muted" style={{ cursor: "default" }}>
                    <i className="ti ti-clock me-1" />
                    Pending Approval
                  </span>
                ) : (
                  <button
                    className="dropdown-item rounded-1 text-warning"
                    onClick={() => openUnavailModal(record._car)}
                  >
                    <i className="ti ti-calendar-off me-1" />
                    Request Unavailability
                  </button>
                )
              ) : (
                <button
                  className="dropdown-item rounded-1 text-success"
                  disabled={togglingAvailId === record.id}
                  onClick={() => handleMakeAvailable(record.id)}
                >
                  <i className="ti ti-calendar-check me-1" />
                  {togglingAvailId === record.id ? "Updating..." : "Make Available"}
                </button>
              )}
            </li>
            <li>
              <button
                className="dropdown-item rounded-1 text-danger"
                disabled={deletingId === record.id}
                onClick={() => handleDelete(record.id)}
              >
                <i className="ti ti-trash me-1" />
                {deletingId === record.id ? "Deleting..." : "Delete"}
              </button>
            </li>
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
            <h4 className="mb-1">All Cars</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.carPartnerDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  All Cars
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            {/* <div className="mb-2 me-2">
              <Link to="#" className="btn btn-white d-flex align-items-center">
                <i className="ti ti-printer me-2" />
                Print
              </Link>
            </div> */}
            {/* <div className="mb-2 me-2">
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export
                </Link>
              </div>
            </div> */}
            <div className="mb-2">
              <Link
                to={all_routes.carPartnerAddCar}
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add New Car
              </Link>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-arrows-sort me-1" /> Sort By : {sortLabel[sortBy]}
              </Link>
              <ul className="dropdown-menu dropdown-menu-end p-2">
                {(
                  [
                    { key: "latest", label: "Latest" },
                    { key: "az", label: "A → Z" },
                    { key: "za", label: "Z → A" },
                    { key: "last7", label: "Last 7 Days" },
                    { key: "lastMonth", label: "Last Month" },
                  ] as const
                ).map(({ key, label }) => (
                  <li key={key}>
                    <button
                      className={`dropdown-item rounded-1 ${sortBy === key ? "active" : ""}`}
                      onClick={() => setSortBy(key)}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-point-filled me-1" />
                Status{tableStatusFilter ? `: ${tableStatusFilter}` : ""}
              </Link>
              <ul className="dropdown-menu dropdown-menu-md p-2">
                {(["", "Active", "Inactive", "Pending Approval"] as const).map((s) => (
                  <li key={s}>
                    <button
                      className={`dropdown-item rounded-1 ${tableStatusFilter === s ? "active" : ""}`}
                      onClick={() => setTableStatusFilter(s)}
                    >
                      {s === "" ? "All" : s}
                    </button>
                  </li>
                ))}
              </ul>
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
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}
        {/* Custom Data Table */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          <CommonDatatable
            dataSource={data}
            columns={columns}
            searchValue={searchValue}
            showRowSelection={false}
          />
        )}
        {/* Custom Data Table */}
      </div>

      {/* ========== Mark Unavailable Modal ========== */}
      {showUnavailModal && (
        <div
          className="modal fade show d-block"
          style={{ background: "rgba(0,0,0,0.45)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowUnavailModal(false); }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <i className="ti ti-calendar-off text-warning" />
                  Mark Car Unavailable
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowUnavailModal(false)}
                />
              </div>
              <div className="modal-body">
                <p className="text-muted fs-13 mb-3">
                  Specify when <strong>{unavailForm.carName}</strong> will be unavailable.
                  Your request will be sent to the admin for approval.
                </p>
                {unavailError && (
                  <div className="alert alert-danger py-2 fs-13">{unavailError}</div>
                )}
                {unavailSuccess && (
                  <div className="alert alert-success py-2 fs-13 d-flex align-items-center gap-2">
                    <i className="ti ti-circle-check" />
                    Request submitted! Awaiting admin approval.
                  </div>
                )}
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-medium">From Date <span className="text-danger">*</span></label>
                    <input
                      type="date"
                      className="form-control"
                      value={unavailForm.fromDate}
                      onChange={(e) => setUnavailForm((f) => ({ ...f, fromDate: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">From Time</label>
                    <input
                      type="time"
                      className="form-control"
                      value={unavailForm.fromTime}
                      onChange={(e) => setUnavailForm((f) => ({ ...f, fromTime: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">To Date <span className="text-danger">*</span></label>
                    <input
                      type="date"
                      className="form-control"
                      value={unavailForm.toDate}
                      min={unavailForm.fromDate}
                      onChange={(e) => setUnavailForm((f) => ({ ...f, toDate: e.target.value }))}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-medium">To Time</label>
                    <input
                      type="time"
                      className="form-control"
                      value={unavailForm.toTime}
                      onChange={(e) => setUnavailForm((f) => ({ ...f, toTime: e.target.value }))}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-medium">Reason / Description</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="e.g. Maintenance, personal use..."
                      value={unavailForm.reason}
                      onChange={(e) => setUnavailForm((f) => ({ ...f, reason: e.target.value }))}
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setShowUnavailModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-warning d-flex align-items-center gap-2"
                  onClick={handleUnavailSubmit}
                  disabled={unavailSaving || unavailSuccess}
                >
                  {unavailSaving ? (
                    <>
                      <span className="spinner-border spinner-border-sm" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <i className="ti ti-send" />
                      Submit Request
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarsList;
