import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { adminCarAPI } from "../../../service/api/car";

const CarDetails = () => {
    const [searchParams] = useSearchParams();
    const carId = searchParams.get("id");

    const [car, setCar] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [open1, setOpen1] = useState(false);
    const [lightboxIdx, setLightboxIdx] = useState(0);

    const imageBaseUrl = useMemo(() => {
        const base = (import.meta as any)?.env?.VITE_API_BASE_URL_IMAGE;
        return typeof base === "string" ? base.replace(/\/$/, "") : "http://localhost:4000";
    }, []);

    const getImageUrl = (path: string | null | undefined): string => {
        if (!path) return "/assets/admin/img/car/car-01.jpg";
        if (path.startsWith("http")) return path;
        return `${imageBaseUrl}/${path.replace(/^\//, "")}`;
    };

    const allImages = useMemo(() => {
        const imgs: string[] = [];
        if (car?.thumbnail) imgs.push(car.thumbnail);
        if (Array.isArray(car?.images)) imgs.push(...car.images);
        return Array.from(new Set(imgs)).filter(Boolean);
    }, [car]);

    const slides = useMemo(
        () => allImages.map(p => ({ src: getImageUrl(p) })),
        [allImages],
    );

    const pricingByDuration = useMemo(() => {
        const map = new Map<string, number>();
        const list = Array.isArray(car?.pricing) ? car.pricing : [];
        for (const item of list) {
            if (item?.duration && typeof item?.price === "number") {
                map.set(String(item.duration), item.price);
            }
        }
        return map;
    }, [car]);

    const featureColumns = useMemo(() => {
        const features: string[] = Array.isArray(car?.features)
            ? car.features.filter((f: any) => typeof f === "string" && f.trim())
            : [];
        const cols: string[][] = [[], [], []];
        features.forEach((f, idx) => cols[idx % 3].push(f));
        return cols;
    }, [car]);

    const ownerName = useMemo(() => {
        if (car?.admin?.name) return `${car.admin.name} (Admin)`;
        if (car?.partner?.name) return `${car.partner.name} (Partner)`;
        return "-";
    }, [car]);

    useEffect(() => {
        let mounted = true;
        const load = async () => {
            if (!carId) {
                setCar(null);
                setLoadError("No car selected.");
                return;
            }
            try {
                setLoading(true);
                setLoadError(null);
                const res = await adminCarAPI.getCar(carId);
                if (!mounted) return;
                setCar(res?.data?.data ?? res?.data ?? null);
            } catch (e: any) {
                if (!mounted) return;
                setCar(null);
                setLoadError(e?.message || "Failed to load car details");
            } finally {
                if (mounted) setLoading(false);
            }
        };
        load();
        return () => {
            mounted = false;
        };
    }, [carId]);

    if (loading) {
        return (
            <div className="content d-flex align-items-center justify-content-center" style={{ minHeight: 300 }}>
                <div className="spinner-border text-primary" />
            </div>
        );
    }

    if (loadError) {
        return (
            <div className="content">
                <div className="alert alert-danger">{loadError}</div>
            </div>
        );
    }

    return (
        <div className="content me-0">
            <Lightbox
                open={open1}
                index={lightboxIdx}
                close={() => setOpen1(false)}
                slides={slides.length ? slides : [{ src: "/assets/admin/img/car/car-01.jpg" }]}
            />

            {/* Back link */}
            <div className="mb-3">
                <Link to={all_routes.adminCarsList} className="d-inline-flex align-items-center fw-medium">
                    <i className="ti ti-arrow-left me-1" />
                    Cars
                </Link>
            </div>

            {/* Header */}
            <div className="mb-4 pb-4 border-bottom">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div>
                        <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                            <h4 className="me-2">
                                {car?.name ?? "Car Details"}
                            </h4>
                            <span
                                className={`badge badge-md ${
                                    (car?.operationalStatus || (car?.isAvailable === false ? "Inactive" : "Active")) === "Active"
                                        ? "badge-success-transparent"
                                        : "badge-dark-transparent"
                                } d-inline-flex align-items-center`}>
                                <i className="ti ti-point-filled me-1" />
                                {car?.operationalStatus ||
                                    (car?.isAvailable === false ? "Inactive" : "Active")}
                            </span>
                            {car?.isVerified && (
                                <span className="badge badge-md bg-success-transparent">Verified</span>
                            )}
                            {car?.featured && (
                                <span className="badge badge-md bg-warning-transparent">Featured</span>
                            )}
                        </div>
                        <p className="text-gray-9 mb-0">
                            Created: {car?.createdAt ? new Date(car.createdAt).toLocaleString() : "-"}
                            {car?.updatedAt && car.updatedAt !== car.createdAt && (
                                <span className="ms-3">Updated: {new Date(car.updatedAt).toLocaleString()}</span>
                            )}
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <Link
                            to={`${all_routes.editCar}?id=${carId}`}
                            className="btn btn-dark btn-md d-flex align-items-center">
                            <i className="ti ti-edit me-1" />
                            Edit Car
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row">
                {/* Left Column */}
                <div className="col-xl-8">

                    {/* Car Card */}
                    <div className="card">
                        <div className="card-body">
                            <div className="border-bottom mb-3 pb-3">
                                <h5>Car Details</h5>
                            </div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex align-items-center">
                                    <span className="avatar avatar-lg me-3">
                                        <img
                                            src={getImageUrl(car?.thumbnail)}
                                            alt={car?.name}
                                            style={{ width: 56, height: 56, objectFit: "cover", borderRadius: 8 }}
                                            onError={e => {
                                                (e.target as HTMLImageElement).onerror = null;
                                                (e.target as HTMLImageElement).src = "/assets/admin/img/car/car-01.jpg";
                                            }}
                                        />
                                    </span>
                                    <div>
                                        <h6>{car?.name ?? "-"}</h6>
                                        <div className="d-flex align-items-center gap-2">
                                            <p className="mb-0">{car?.brand ?? "-"}</p>
                                            {pricingByDuration.has("DAY") && (
                                                <>
                                                    <i className="ti ti-circle-filled text-secondary fs-5" />
                                                    <p className="mb-0">₹{pricingByDuration.get("DAY")}/day</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <span className="badge badge-md bg-secondary-transparent">
                                        Owner: {ownerName}
                                    </span>
                                    {car?.location && (
                                        <span className="badge badge-md bg-info-transparent">
                                            <i className="ti ti-map-pin me-1" />
                                            {car.location}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header py-0">
                            <ul className="nav nav-tabs nav-tabs-bottom tab-dark">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="#car-info" data-bs-toggle="tab">Car Info</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#car-price" data-bs-toggle="tab">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#car-gallery" data-bs-toggle="tab">Gallery</Link>
                                </li>
                                {Array.isArray(car?.documents) && car.documents.length > 0 && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="#car-docs" data-bs-toggle="tab">Documents</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="card-body">
                            <div className="tab-content">

                                {/* ── Car Info ── */}
                                <div className="tab-pane fade active show" id="car-info">

                                    {/* Description */}
                                    {car?.description && (
                                        <div className="border-bottom mb-3 pb-3">
                                            <h6 className="mb-2">Description</h6>
                                            <p className="fs-13 text-gray-9">{car.description}</p>
                                        </div>
                                    )}

                                    {/* Specs grid */}
                                    <div className="border-bottom mb-3 pb-3">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Specifications</h6>
                                            <Link to={`${all_routes.editCar}?id=${carId}`} className="link-default">
                                                <i className="ti ti-edit" />
                                            </Link>
                                        </div>
                                        <div className="row">
                                            {[
                                                { label: "Brand", value: car?.brand },
                                                { label: "Car Number", value: car?.carNumber },
                                                { label: "Plate Number", value: car?.plateNumber },
                                                { label: "Model", value: car?.name },
                                                { label: "Year", value: car?.modelYear },
                                                { label: "Category", value: car?.category },
                                                { label: "Color", value: car?.color },
                                                { label: "Fuel Type", value: car?.fuelType },
                                                { label: "Transmission", value: car?.transmission },
                                                { label: "Power Type", value: car?.powerType },
                                                { label: "Seats", value: car?.seating },
                                                { label: "Doors", value: car?.doors },
                                                { label: "Air Bags", value: car?.airBags },
                                                { label: "AC", value: car?.ac },
                                                { label: "Engine", value: car?.engine },
                                                { label: "Brakes", value: car?.brakes },
                                                { label: "Mileage", value: typeof car?.mileageKm === "number" ? `${car.mileageKm} km` : null },
                                                { label: "Location", value: car?.location },
                                            ]
                                                .filter(item => item.value != null && item.value !== "")
                                                .map(item => (
                                                    <div key={item.label} className="col-xxl-3 col-md-4 col-sm-6">
                                                        <div className="mb-3">
                                                            <h6 className="fs-14 fw-semibold mb-1">{item.label}</h6>
                                                            <p className="fs-13">{String(item.value)}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>

                                    {/* Custom Specifications */}
                                    {Array.isArray(car?.specifications) && car.specifications.length > 0 && (
                                        <div className="border-bottom mb-3 pb-3">
                                            <h6 className="mb-3">Additional Specifications</h6>
                                            <div className="d-flex align-items-center flex-wrap gap-4">
                                                {car.specifications.map((s: any, idx: number) => (
                                                    <div key={`spec-${idx}`} className="d-flex align-items-center">
                                                        <div>
                                                            <h6 className="fs-14 fw-medium">{s?.title ?? "-"}</h6>
                                                            <p className="fs-13">{s?.value ?? "-"}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Features */}
                                    {featureColumns.some(c => c.length > 0) && (
                                        <div>
                                            <h6 className="mb-3">Features &amp; Amenities</h6>
                                            <div className="row gy-2">
                                                {featureColumns.map((col, colIdx) => (
                                                    <div key={`features-col-${colIdx}`} className="col-lg-4 col-sm-6">
                                                        <div className="d-flex flex-column gap-2">
                                                            {col.map((f, idx) => (
                                                                <p key={`${f}-${idx}`} className="d-flex align-items-center mb-0">
                                                                    <i className="ti ti-square-check-filled text-success me-2" />
                                                                    {f}
                                                                </p>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* /Car Info */}

                                {/* ── Pricing ── */}
                                <div className="tab-pane fade" id="car-price">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6>Pricing</h6>
                                        <Link to={`${all_routes.editCar}?id=${carId}`} className="link-default">
                                            <i className="ti ti-edit" />
                                        </Link>
                                    </div>

                                    {/* Base pricing */}
                                    <div className="border-bottom mb-3 pb-3">
                                        <div className="row">
                                            {[
                                                { label: "Per Hour", key: "HOUR" },
                                                { label: "Per Day", key: "DAY" },
                                                { label: "Per Week", key: "WEEK" },
                                                { label: "Per Month", key: "MONTH" },
                                            ].map(({ label, key }) => (
                                                pricingByDuration.has(key) ? (
                                                    <div key={key} className="col-xxl-3 col-md-4 col-sm-6">
                                                        <div className="mb-3">
                                                            <h6 className="fs-14 fw-semibold mb-1">{label}</h6>
                                                            <p className="fs-13">₹{pricingByDuration.get(key)}</p>
                                                        </div>
                                                    </div>
                                                ) : null
                                            ))}
                                        </div>
                                        {!pricingByDuration.size && (
                                            <p className="fs-13 text-gray-9 mb-0">No pricing set.</p>
                                        )}
                                    </div>

                                    {/* Seasonal Pricing */}
                                    {Array.isArray(car?.seasonalPricing) && car.seasonalPricing.length > 0 && (
                                        <div>
                                            <h6 className="mb-3">Seasonal Pricing</h6>
                                            <div className="table-responsive">
                                                <table className="table table-bordered table-sm mb-0">
                                                    <thead className="table-light">
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Start Date</th>
                                                            <th>End Date</th>
                                                            <th>Hourly</th>
                                                            <th>Daily</th>
                                                            <th>Weekly</th>
                                                            <th>Monthly</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {car.seasonalPricing.map((sp: any) => (
                                                            <tr key={sp.id}>
                                                                <td>{sp.name}</td>
                                                                <td>{new Date(sp.startDate).toLocaleDateString()}</td>
                                                                <td>{new Date(sp.endDate).toLocaleDateString()}</td>
                                                                <td>{sp.hourPrice != null ? `₹${sp.hourPrice}` : "-"}</td>
                                                                <td>{sp.dayPrice != null ? `₹${sp.dayPrice}` : "-"}</td>
                                                                <td>{sp.weekPrice != null ? `₹${sp.weekPrice}` : "-"}</td>
                                                                <td>{sp.monthPrice != null ? `₹${sp.monthPrice}` : "-"}</td>
                                                                <td>
                                                                    <span className={`badge ${sp.isActive ? "badge-success-transparent" : "badge-danger-transparent"}`}>
                                                                        {sp.isActive ? "Active" : "Inactive"}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* /Pricing */}

                                {/* ── Gallery ── */}
                                <div className="tab-pane fade" id="car-gallery">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6>Gallery</h6>
                                        <Link to={`${all_routes.editCar}?id=${carId}`} className="link-default">
                                            <i className="ti ti-edit" />
                                        </Link>
                                    </div>
                                    {allImages.length > 0 ? (
                                        <div className="d-flex align-items-center flex-wrap gap-3">
                                            {allImages.map((imgPath, idx) => (
                                                <div key={`img-${idx}`} className="gallery-wrap" style={{ cursor: "pointer" }}
                                                    onClick={() => { setLightboxIdx(idx); setOpen1(true); }}>
                                                    <img
                                                        src={getImageUrl(imgPath)}
                                                        alt={`car-img-${idx}`}
                                                        style={{ width: 120, height: 90, objectFit: "cover", borderRadius: 6 }}
                                                        onError={e => {
                                                            (e.target as HTMLImageElement).onerror = null;
                                                            (e.target as HTMLImageElement).src = "/assets/admin/img/car/car-01.jpg";
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="fs-13 text-gray-9">No images uploaded.</p>
                                    )}
                                </div>
                                {/* /Gallery */}

                                {/* ── Documents ── */}
                                {Array.isArray(car?.documents) && car.documents.length > 0 && (
                                    <div className="tab-pane fade" id="car-docs">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h6>Uploads / Documents</h6>
                                        </div>
                                        <div className="d-flex flex-column gap-2">
                                            {car.documents.map((doc: string, idx: number) => {
                                                const filename = doc.split("/").pop() || `Document ${idx + 1}`;
                                                return (
                                                    <a
                                                        key={`doc-${idx}`}
                                                        href={getImageUrl(doc)}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="d-inline-flex align-items-center gap-2 text-primary">
                                                        <i className="ti ti-file-description fs-5" />
                                                        {filename}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Left Column */}

                {/* Right Column – Summary */}
                <div className="col-xl-4 theiaStickySidebar">
                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="border-bottom mb-3 pb-3">
                                <h5>Owner</h5>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="ti ti-user-circle fs-4 text-primary" />
                                <div>
                                    <h6 className="mb-0 fs-14">{car?.admin?.name ?? car?.partner?.name ?? "-"}</h6>
                                    <p className="fs-12 mb-0 text-gray-9">
                                        {car?.admin ? "Admin" : car?.partner ? "Car Partner" : ""}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-0">
                        <div className="card-body">
                            <div className="border-bottom mb-3 pb-3">
                                <h5>Summary</h5>
                            </div>
                            <div className="summary-wrap">
                                {[
                                    {
                                        date: car?.createdAt ? new Date(car.createdAt) : new Date(),
                                        title: "Car Added",
                                        desc: "Car has been added to the system",
                                    },
                                    ...(car?.updatedAt && car.updatedAt !== car.createdAt
                                        ? [{
                                            date: new Date(car.updatedAt),
                                            title: "Last Updated",
                                            desc: "Car details were updated",
                                        }]
                                        : []),
                                    {
                                        date: new Date(),
                                        title: car?.isAvailable === false ? "Inactive" : "Active",
                                        desc: car?.isAvailable === false
                                            ? "Car is not available for booking"
                                            : "Car is available for booking",
                                    },
                                ].map((item, idx) => {
                                    const day = item.date.getDate();
                                    const monthYear = item.date.toLocaleString(undefined, { month: "short", year: "numeric" });
                                    return (
                                        <div key={`summary-${idx}`} className="d-flex align-items-center mb-3">
                                            <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                                                <h6 className="fw-semibold mb-1">{String(day).padStart(2, "0")}</h6>
                                                <span className="d-inline-block fw-medium fs-12 bg-light p-1 rounded-1 text-gray-9">
                                                    {monthYear}
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fs-14 fw-semibold mb-1">{item.title}</h6>
                                                <p className="fs-13 mb-0 text-gray-9">{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Right Column */}
            </div>
        </div>
    );
};

export default CarDetails;
