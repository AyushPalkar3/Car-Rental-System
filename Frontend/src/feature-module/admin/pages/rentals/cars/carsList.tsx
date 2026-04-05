import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, message } from "antd";
import { all_routes } from "../../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import CommonDatatable from "../../../common/dataTable";
import { adminCarAPI } from "../../../service/api/car";
import { adminUnavailabilityAPI } from "../../../service/api/unavailability";
import { getMediaBaseUrl } from "../../../../../core/utils/envUrls";

type BackendCar = {
    id: string;
    name: string;
    brand: string;
    modelYear: number;
    featured?: boolean;
    thumbnail?: string | null;
    images?: string[];
    category?: string | null;
    isAvailable?: boolean;
    isVerified?: boolean;
    location?: string | null;
    createdAt?: string;
    pricing?: Array<{ duration: string; price: number }>;
    operationalStatus?: string;
    pendingUnavailability?: {
        id: string;
        reason?: string | null;
        fromDateTime: string;
        toDateTime: string;
    } | null;
    partner?: { name?: string; phoneNum?: string };
    admin?: { name?: string };
};

const CarsList = () => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchValue, setSearchValue] = useState<string>("");
    const [statusFilter, setStatusFilter] = useState<string>("");
    const [sortBy, setSortBy] = useState<string>("latest");
    const [unavailModal, setUnavailModal] = useState<{
        requestId: string;
        carName: string;
        reason: string;
        fromDateTime: string;
        toDateTime: string;
    } | null>(null);
    const [adminNote, setAdminNote] = useState("");
    const [unavailSubmitting, setUnavailSubmitting] = useState(false);
    const [refreshSeq, setRefreshSeq] = useState(0);
    const [deleteTarget, setDeleteTarget] = useState<{ id: string; name: string } | null>(null);
    const [deleteSubmitting, setDeleteSubmitting] = useState(false);

    const imageBaseUrl = useMemo(() => getMediaBaseUrl(), []);

    const getImageUrl = (path: string | null | undefined): string | null => {
        if (!path) return null;
        if (path.startsWith("http")) return path;
        const base = imageBaseUrl.replace(/\/$/, "");
        const rel = path.replace(/^\//, "");
        return `${base}/${rel}`;
    };

    useEffect(() => {
        let isMounted = true;

        const loadCars = async () => {
            try {
                setLoading(true);
                const res = await adminCarAPI.listCars();
                const payload = res?.data;
                const cars: BackendCar[] = Array.isArray(payload?.data)
                    ? payload.data
                    : Array.isArray(payload)
                      ? payload
                      : [];

                const mapped = cars.map((car: BackendCar) => {
                    const dailyPrice =
                        car.pricing?.find(p => p.duration === "DAY")?.price ??
                        null;
                    const uploadedThumb =
                        car.thumbnail || car.images?.[0] || null;
                    const created = car.createdAt
                        ? new Date(car.createdAt).toLocaleDateString()
                        : "";

                    const ownerName = car.partner?.name || car.admin?.name || "—";
                    const ownerPhone = car.partner?.phoneNum || "Admin";
                    const computedStatus =
                        car.operationalStatus ||
                        (car.isAvailable === false ? "Inactive" : "Active");

                    return {
                        key: car.id,
                        CAR: car.name,
                        CAR_TYPE: car.category || car.brand,
                        OWNER_NAME: ownerName,
                        OWNER_PHONE: ownerPhone,
                        BASE_LOCATION: car.location || "-",
                        PRICE: dailyPrice != null ? `₹${dailyPrice}` : "-",
                        CREATED_DATE: created,
                        _createdAt: car.createdAt || "",
                        IS_VERIFIED: !!car.isVerified,
                        STATUS: computedStatus,
                        THUMBNAIL_URL: getImageUrl(uploadedThumb),
                        PENDING_UNAVAIL: car.pendingUnavailability ?? null,
                    };
                });

                if (isMounted) setData(mapped);
            } catch (e: unknown) {
                if (isMounted) setData([]);
                console.error("Failed to load cars", e);
                const errMsg =
                    e &&
                    typeof e === "object" &&
                    "message" in e &&
                    typeof (e as { message: unknown }).message === "string"
                        ? (e as { message: string }).message
                        : "Could not load cars. Check that the API is running and you are logged in.";
                message.error(errMsg);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        loadCars();
        return () => {
            isMounted = false;
        };
    }, [imageBaseUrl, refreshSeq]);

    const handleApproveUnavail = async () => {
        if (!unavailModal) return;
        try {
            setUnavailSubmitting(true);
            const res = await adminUnavailabilityAPI.approve(
                unavailModal.requestId,
                adminNote.trim() || undefined
            );
            message.success(res.data.message ?? "Block request approved.");
            setUnavailModal(null);
            setAdminNote("");
            setRefreshSeq(s => s + 1);
        } catch {
            message.error("Could not approve request.");
        } finally {
            setUnavailSubmitting(false);
        }
    };

    const handleRejectUnavail = async () => {
        if (!unavailModal) return;
        try {
            setUnavailSubmitting(true);
            await adminUnavailabilityAPI.reject(unavailModal.requestId, adminNote.trim() || undefined);
            message.success("Block request rejected.");
            setUnavailModal(null);
            setAdminNote("");
            setRefreshSeq(s => s + 1);
        } catch {
            message.error("Could not reject request.");
        } finally {
            setUnavailSubmitting(false);
        }
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const sortLabels: Record<string, string> = {
        latest: "Latest",
        az: "A → Z",
        za: "Z → A",
        last_month: "Last Month",
        last_7days: "Last 7 Days",
    };

    const displayData = useMemo(() => {
        let list = statusFilter ? data.filter(d => d.STATUS === statusFilter) : [...data];
        const now = new Date();
        switch (sortBy) {
            case "az":
                list.sort((a, b) => (a.CAR ?? "").localeCompare(b.CAR ?? ""));
                break;
            case "za":
                list.sort((a, b) => (b.CAR ?? "").localeCompare(a.CAR ?? ""));
                break;
            case "last_month": {
                const cutoff = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
                list = list.filter(d => d._createdAt && new Date(d._createdAt) >= cutoff);
                break;
            }
            case "last_7days": {
                const cutoff = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                list = list.filter(d => d._createdAt && new Date(d._createdAt) >= cutoff);
                break;
            }
            default: // latest — already ordered by createdAt desc from API
                break;
        }
        return list;
    }, [data, statusFilter, sortBy]);
    const columns = [
        {
            title: "CAR",
            dataIndex: "CAR",
            render: (text: string, record: any) => (
                <div className="d-flex align-items-center">
                    <Link
                        to={`${all_routes.carDetails}?id=${record.key}`}
                        className="avatar me-2 flex-shrink-0">
                        {record?.THUMBNAIL_URL ? (
                            <img
                                src={record.THUMBNAIL_URL}
                                className="rounded-3"
                                alt={record.CAR}
                                style={{
                                    width: 40,
                                    height: 40,
                                    objectFit: "cover",
                                }}
                                onError={e => {
                                    (e.target as HTMLImageElement).onerror = null;
                                    (e.target as HTMLImageElement).src =
                                        "/assets/admin/img/car/car-01.jpg";
                                }}
                            />
                        ) : (
                            <ImageWithBasePath
                                src="assets/admin/img/car/car-01.jpg"
                                className="rounded-3"
                                alt=""
                                style={{ width: 40, height: 40, objectFit: "cover" }}
                            />
                        )}
                    </Link>
                    <div>
                        <h6 className="fs-14 fw-semibold mb-1">
                            <Link
                                to={`${all_routes.carDetails}?id=${record.key}`}
                                className="fs-14 fw-semibold">
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
            title: "OWNER",
            dataIndex: "OWNER_NAME",
            render: (_: any, record: any) => (
                <div>
                    <h6 className="fs-14 fw-semibold mb-1">{record.OWNER_NAME}</h6>
                    <p className="fs-13 text-gray-6">{record.OWNER_PHONE}</p>
                </div>
            ),
            sorter: (a: any, b: any) => a.OWNER_NAME.localeCompare(b.OWNER_NAME),
        },
        {
            title: "LOCATION",
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
            title: "CREATED DATE",
            dataIndex: "CREATED_DATE",
            render: (text: string) => (
                <div>
                    <h6 className="fs-14 fw-normal">{text}</h6>
                    <p className="fs-13">01:00 PM</p>
                </div>
            ),
            sorter: (a: any, b: any) =>
                a.CREATED_DATE.length - b.CREATED_DATE.length,
        },
        {
            title: "VERIFIED",
            dataIndex: "IS_VERIFIED",
            render: (_: any, record: any) => (
                record.IS_VERIFIED ? (
                    <span className="badge bg-success-transparent text-success">
                        <i className="ti ti-circle-check me-1" />Verified
                    </span>
                ) : (
                    <span className="badge bg-warning-transparent text-warning">
                        <i className="ti ti-clock me-1" />Unverified
                    </span>
                )
            ),
        },
        {
            title: "STATUS",
            dataIndex: "STATUS",
            render: (text: string) => {
                const cfg: Record<string, { icon: string; cls: string }> = {
                    Active:      { icon: "ti-point-filled", cls: "text-success" },
                    Inactive:    { icon: "ti-point-filled", cls: "text-danger" },
                    Pending:     { icon: "ti-clock",        cls: "text-warning" },
                    Upcoming:    { icon: "ti-calendar-time", cls: "text-info" },
                    "In Progress": { icon: "ti-loader",     cls: "text-primary" },
                };
                const c = cfg[text] ?? cfg.Active;
                return (
                    <span className="badge badge-dark-transparent">
                        <i className={`ti ${c.icon} ${c.cls} me-1`} />
                        {text}
                    </span>
                );
            },
            sorter: (a: any, b: any) => a.STATUS.localeCompare(b.STATUS),
        },
        {
            title: "Action",
            dataIndex: "",
            render: (_: any, record: any) => (
                <div className="dropdown">
                    <button
                        className="btn btn-icon btn-sm"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <i className="ti ti-dots-vertical" />
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end p-2">
                        <li>
                            <Link
                                className="dropdown-item rounded-1"
                                to={`${all_routes.carDetails}?id=${record.key}`}>
                                <i className="ti ti-eye me-1" />
                                View Details
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="dropdown-item rounded-1"
                                to={`${all_routes.adminCarCalendar}?id=${record.key}`}>
                                <i className="ti ti-calendar me-1" />
                                Calendar
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="dropdown-item rounded-1"
                                to={all_routes.adminAddReservations}>
                                <i className="ti ti-plus me-1" />
                                Add Reservation
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="dropdown-item rounded-1"
                                to={`${all_routes.editCar}?id=${record.key}`}>
                                <i className="ti ti-edit me-1" />
                                Edit
                            </Link>
                        </li>
                        {record.PENDING_UNAVAIL && (
                            <li>
                                <button
                                    type="button"
                                    className="dropdown-item rounded-1 text-start w-100 border-0 bg-transparent"
                                    onClick={() => {
                                        const p = record.PENDING_UNAVAIL;
                                        setAdminNote("");
                                        setUnavailModal({
                                            requestId: p.id,
                                            carName: record.CAR,
                                            reason: p.reason || "",
                                            fromDateTime: p.fromDateTime,
                                            toDateTime: p.toDateTime,
                                        });
                                    }}>
                                    <i className="ti ti-calendar-off me-1" />
                                    Review block request
                                </button>
                            </li>
                        )}
                        <li>
                            <Link
                                className="dropdown-item rounded-1"
                                to={`${all_routes.editCar}?id=${record.key}&step=4${record.IS_VERIFIED ? "" : "&verify=1"}`}>
                                {record.IS_VERIFIED ? (
                                    <><i className="ti ti-shield-off me-1" />Unverify</>
                                ) : (
                                    <><i className="ti ti-shield-check me-1" />Verify</>
                                )}
                            </Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="dropdown-item rounded-1 text-start w-100 border-0 bg-transparent text-danger"
                                onClick={() =>
                                    setDeleteTarget({ id: record.key, name: record.CAR })
                                }>
                                <i className="ti ti-trash me-1" />
                                Delete
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
                                    <Link to={all_routes.adminDashboard}>
                                        Home
                                    </Link>
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page">
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
                                to={all_routes.addCar}
                                className="btn btn-primary d-flex align-items-center">
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
                        <div className="me-2">
                            <select
                                className="form-select form-select-sm"
                                style={{ minWidth: 150 }}
                                value={sortBy}
                                onChange={e => setSortBy(e.target.value)}>
                                <option value="latest">Latest</option>
                                <option value="az">A → Z</option>
                                <option value="za">Z → A</option>
                                <option value="last_month">Last Month</option>
                                <option value="last_7days">Last 7 Days</option>
                            </select>
                        </div>
                        <div className="ms-2">
                            <select
                                className="form-select form-select-sm"
                                style={{ minWidth: 130 }}
                                value={statusFilter}
                                onChange={e => setStatusFilter(e.target.value)}>
                                <option value="">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Pending">Pending</option>
                                <option value="Upcoming">Upcoming</option>
                                <option value="In Progress">In Progress</option>
                            </select>
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
                <div className="d-none" id="filtercollapse">
                    <div className="filterbox mb-3 d-flex align-items-center">
                        <h6 className="me-3">Filters</h6>
                        <div className="dropdown me-2">
                            <Link
                                to="#"
                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside">
                                Select Cars
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-lg p-2">
                                <li>
                                    <div className="top-search m-2">
                                        <div className="top-search-group">
                                            <span className="input-icon">
                                                <i className="ti ti-search" />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Ford Endeavour
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Ferrari 458 MM
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Ford Mustang
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Toyota Tacoma 4
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Chevrolet Pick Truck
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Etios Carmen
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Acura Sport Version
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Kia Soul 2016
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Chevrolet Camaro
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Toyota Camry SE 350
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown me-2">
                            <Link
                                to="#"
                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside">
                                Type
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-lg p-2">
                                <li>
                                    <div className="top-search m-2">
                                        <div className="top-search-group">
                                            <span className="input-icon">
                                                <i className="ti ti-search" />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Sedan
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Hatchback
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        SUV
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Coupes
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Convertible
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Pickup Truck
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Sport
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Minivan
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        EV
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown me-3">
                            <Link
                                to="#"
                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside">
                                Location
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-lg p-2">
                                <li>
                                    <div className="top-search m-2">
                                        <div className="top-search-group">
                                            <span className="input-icon">
                                                <i className="ti ti-search" />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search"
                                            />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Newyork City
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Los Angeles
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Chicago
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Houston
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Phoenix
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Philadelphia
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        Austin
                                    </label>
                                </li>
                                <li>
                                    <label className="dropdown-item d-flex align-items-center rounded-1">
                                        <input
                                            className="form-check-input m-0 me-2"
                                            type="checkbox"
                                        />
                                        San Antonio
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="dropdown me-3">
                            <Link
                                to="#"
                                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside">
                                Status
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-md p-2">
                                <li className="dropdown-item">Active</li>
                                <li className="dropdown-item">Inactive</li>
                            </ul>
                        </div>
                        <Link to="#" className="me-2 text-purple links">
                            Apply
                        </Link>
                        <Link to="#" className="text-danger links">
                            Clear All
                        </Link>
                    </div>
                </div>
                {/* Table / Skeleton */}
                {loading ? (
                    <div className="card mb-0">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-nowrap mb-0">
                                    <thead className="table-light">
                                        <tr>
                                            {["Car", "Owner", "Location", "Price (Per Day)", "Created Date", "Verified", "Status", "Action"].map(h => (
                                                <th key={h} className="px-3 py-3">
                                                    <div className="skeleton-cell" style={{ height: 14, width: h === "Car" ? 120 : 80, borderRadius: 4, background: "linear-gradient(90deg,#e8e8e8 25%,#f5f5f5 50%,#e8e8e8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: 6 }).map((_, rowIdx) => (
                                            <tr key={rowIdx}>
                                                {/* CAR column */}
                                                <td className="px-3 py-3">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div style={{ width: 40, height: 40, borderRadius: 8, flexShrink: 0, background: "linear-gradient(90deg,#e8e8e8 25%,#f5f5f5 50%,#e8e8e8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
                                                        <div>
                                                            <div style={{ height: 12, width: 100, borderRadius: 4, marginBottom: 6, background: "linear-gradient(90deg,#e8e8e8 25%,#f5f5f5 50%,#e8e8e8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
                                                            <div style={{ height: 10, width: 60, borderRadius: 4, background: "linear-gradient(90deg,#e8e8e8 25%,#f5f5f5 50%,#e8e8e8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
                                                        </div>
                                                    </div>
                                                </td>
                                                {/* Other columns */}
                                                {[80, 70, 90, 60, 32].map((w, ci) => (
                                                    <td key={ci} className="px-3 py-3">
                                                        <div style={{ height: 12, width: w, borderRadius: 4, background: "linear-gradient(90deg,#e8e8e8 25%,#f5f5f5 50%,#e8e8e8 75%)", backgroundSize: "200% 100%", animation: "shimmer 1.4s infinite" }} />
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <style>{`
                            @keyframes shimmer {
                                0% { background-position: 200% 0; }
                                100% { background-position: -200% 0; }
                            }
                        `}</style>
                    </div>
                ) : (
                    <CommonDatatable
                        dataSource={displayData}
                        columns={columns}
                        searchValue={searchValue}
                        showRowSelection={false}
                    />
                )}
                {/* /Table */}
            </div>

            <Modal
                title="Delete car"
                open={!!deleteTarget}
                onCancel={() => {
                    if (!deleteSubmitting) setDeleteTarget(null);
                }}
                footer={null}
                width={480}
                destroyOnClose>
                {deleteTarget && (
                    <>
                        <p className="mb-2">
                            Delete <strong>{deleteTarget.name}</strong>? This hides the car from listings
                            and the admin car list; booking and payment history stay in the database.
                        </p>
                        <p className="text-muted small mb-3">
                            All <strong>pending</strong> bookings and <strong>current / future</strong>{" "}
                            confirmed rentals for this vehicle will be marked{" "}
                            <strong>cancelled</strong>. Past completed trips, payments, and invoices are
                            kept.
                        </p>
                        <div className="d-flex gap-2 justify-content-end">
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                disabled={deleteSubmitting}
                                onClick={() => setDeleteTarget(null)}>
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                disabled={deleteSubmitting}
                                onClick={async () => {
                                    setDeleteSubmitting(true);
                                    try {
                                        const res = await adminCarAPI.deleteCar(deleteTarget.id);
                                        const d = res?.data as {
                                            cancelledBookings?: number;
                                            message?: string;
                                        };
                                        const c = d?.cancelledBookings ?? 0;
                                        message.success(
                                            c > 0
                                                ? `Car deleted. ${c} booking(s) cancelled (payments & history kept).`
                                                : (d?.message ?? "Car deleted."),
                                        );
                                        setDeleteTarget(null);
                                        setRefreshSeq(s => s + 1);
                                    } catch (err: unknown) {
                                        const msg =
                                            err &&
                                            typeof err === "object" &&
                                            "message" in err &&
                                            typeof (err as { message: unknown }).message === "string"
                                                ? (err as { message: string }).message
                                                : "Could not delete car";
                                        message.error(msg);
                                    } finally {
                                        setDeleteSubmitting(false);
                                    }
                                }}>
                                {deleteSubmitting ? "Deleting…" : "Delete"}
                            </button>
                        </div>
                    </>
                )}
            </Modal>

            <Modal
                title="Review block request"
                open={!!unavailModal}
                onCancel={() => {
                    if (!unavailSubmitting) {
                        setUnavailModal(null);
                        setAdminNote("");
                    }
                }}
                footer={null}
                width={520}
                destroyOnClose>
                {unavailModal && (
                    <>
                        <p className="mb-2">
                            <strong>Car:</strong> {unavailModal.carName}
                        </p>
                        <p className="mb-2">
                            <strong>Partner reason</strong>
                        </p>
                        <div className="border rounded p-2 mb-3 bg-light">
                            {unavailModal.reason?.trim() ? unavailModal.reason : "—"}
                        </div>
                        <p className="mb-1">
                            <strong>From:</strong>{" "}
                            {new Date(unavailModal.fromDateTime).toLocaleString()}
                        </p>
                        <p className="mb-3">
                            <strong>To:</strong>{" "}
                            {new Date(unavailModal.toDateTime).toLocaleString()}
                        </p>
                        <label className="form-label">Admin note (optional)</label>
                        <textarea
                            className="form-control mb-3"
                            rows={3}
                            value={adminNote}
                            onChange={e => setAdminNote(e.target.value)}
                            placeholder="Add a note for approve or reject..."
                        />
                        <div className="d-flex gap-2 justify-content-end flex-wrap">
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                disabled={unavailSubmitting}
                                onClick={handleRejectUnavail}>
                                Reject
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                disabled={unavailSubmitting}
                                onClick={handleApproveUnavail}>
                                {unavailSubmitting ? "Please wait..." : "Approve"}
                            </button>
                        </div>
                    </>
                )}
            </Modal>
        </>
    );
};

export default CarsList;
