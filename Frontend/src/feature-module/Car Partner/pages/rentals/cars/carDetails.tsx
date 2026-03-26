import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { partnerCarAPI, type PartnerCar } from "../../../service/api/car";

const API_BASE = import.meta.env.VITE_API_BASE_URL_IMAGE ?? import.meta.env.VITE_API_BASE_URL ?? "";
const getImageUrl = (path: string | null | undefined) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_BASE}${path}`;
};

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleString("en-GB", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
};

const CarDetails = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get("id");
  const [open1, setOpen1] = React.useState(false);
  const [car, setCar] = useState<PartnerCar | null>(null);
  const [loading, setLoading] = useState(!!carId);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!carId) return;
    setLoading(true);
    partnerCarAPI
      .getCar(carId)
      .then((res) => setCar(res.data))
      .catch(() => setFetchError("Failed to load car details."))
      .finally(() => setLoading(false));
  }, [carId]);

  if (loading) {
    return (
      <div className="content me-0 text-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }
  if (fetchError) {
    return <div className="content me-0"><div className="alert alert-danger">{fetchError}</div></div>;
  }

  const lightboxSlides = (car?.images ?? []).map((img) => ({ src: getImageUrl(img) }));
  const dayPrice = car?.pricing?.find((p) => p.duration === "DAY");

  return (
    <div className="content me-0">
      <Lightbox
        open={open1}
        close={() => setOpen1(false)}
        slides={lightboxSlides.length ? lightboxSlides : [{ src: "/src/assets/admin/img/car/car-lg-02.jpg" }]}
      />
      <div className="mb-3">
        <Link
          to={all_routes.carPartnerCarsList}
          className="d-inline-flex align-items-center fw-medium"
        >
          <i className="ti ti-arrow-left me-1" />
          Cars
        </Link>
      </div>
      <div className="mb-4 pb-4 border-bottom">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
          <div>
            <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
              <h4 className="me-2">{car?.name ?? "Car Details"}</h4>
              <span className={`badge badge-md ${car?.isAvailable ? "badge-success-transparent" : "badge-danger-transparent"} d-inline-flex align-items-center badge-sm`}>
                <i className="ti ti-point-filled me-1" />
                {car?.isAvailable ? "Available" : "Unavailable"}
              </span>
              {car?.isVerified && (
                <span className="badge badge-md bg-secondary-transparent">Verified</span>
              )}
            </div>
            <p>Created / Updated at : {car ? formatDate(car.updatedAt) : "—"}</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <Link
              to={`${all_routes.carPartnerEditCar}?id=${carId}`}
              className="btn btn-dark btn-md d-flex align-items-center"
            >
              <i className="ti ti-edit me-1" />
              Edit Car
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Car Details */}
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="border-bottom mb-3 pb-3">
                <h5>Car Details</h5>
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex align-items-center">
                  <span className="avatar avatar-lg me-3">
                    {car?.thumbnail ? (
                      <img
                        src={getImageUrl(car.thumbnail)}
                        alt={car.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 8 }}
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    ) : (
                      <ImageWithBasePath
                        src="assets/admin/img/car/car-01.jpg"
                        alt="img"
                      />
                    )}
                  </span>
                  <div>
                    <h6>{car?.name ?? "—"}</h6>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 me-2">{car?.category ?? car?.transmission ?? "—"}</p>
                      {dayPrice && (
                        <p className="mb-0 d-flex align-items-center">
                          <i className="ti ti-circle-filled text-secondary fs-5 me-2" />
                          ₹{dayPrice.price}/day
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap gap-3">
                  <span className="badge badge-md bg-info-transparent">
                    Year : {car?.modelYear ?? "—"}
                  </span>
                  <span className="badge badge-md bg-orange-transparent">
                    Brand : {car?.brand ?? "—"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-4 mb-xl-0">
            <div className="card-header py-0">
              <ul className="nav nav-tabs nav-tabs-bottom tab-dark">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    to="#car-info"
                    data-bs-toggle="tab"
                  >
                    Car Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#car-price"
                    data-bs-toggle="tab"
                  >
                    Pricing &amp; Tarrif
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#car-service"
                    data-bs-toggle="tab"
                  >
                    Extra Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#car-gallery"
                    data-bs-toggle="tab"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="#car-damages"
                    data-bs-toggle="tab"
                  >
                    Damages
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card-body">
              <div className="tab-content">
                {/* Car Info */}
                <div className="tab-pane fade active show" id="car-info">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="row">
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Color</h6>
                          <p className="d-inline-flex align-items-center fs-13">
                            <i className="ti ti-square-filled me-1" style={{ color: car?.hexCode ?? "#888" }} />
                            {car?.color ?? "—"}
                          </p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Brand</h6>
                          <p className="fs-13">{car?.brand ?? "—"}</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Model</h6>
                          <p className="fs-13">{car?.description ?? "—"}</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Type</h6>
                          <p className="fs-13">{car?.category ?? "—"}</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Year</h6>
                          <p className="fs-13">{car?.modelYear ?? "—"}</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">No of Seats</h6>
                          <p className="fs-13">{car?.seating ?? "—"}</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Transmission</h6>
                          <p className="fs-13">{car?.transmission ?? "—"}</p>
                        </div>
                      </div>
                      <div className="col-xxl-3 col-md-4 col-sm-6">
                        <div className="mb-3">
                          <h6 className="fs-14 fw-semibold mb-1">Fuel Type</h6>
                          <p className="fs-13">{car?.fuelType ?? "—"}</p>
                        </div>
                      </div>
                      {car?.description && (
                        <div className="col-lg-12">
                          <div className="mb-3">
                            <h6 className="fs-14 fw-semibold mb-1">Description</h6>
                            <p className="fs-13">{car.description}</p>
                          </div>
                        </div>
                      )}
                      <div className="col-lg-12">
                        <Link
                          to={`${all_routes.carPartnerEditCar}?id=${carId}`}
                          className="link-violet text-decoration-underline fw-medium"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* Documents */}
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Documents</h6>
                      <Link to={`${all_routes.carPartnerEditCar}?id=${carId}`} className="link-default">
                        <i className="ti ti-edit" />
                      </Link>
                    </div>
                    {(car?.documents as string[] | undefined)?.length ? (
                      <div className="d-flex align-items-center flex-wrap gap-4">
                        {(car!.documents as string[]).map((docPath) => (
                          <div key={docPath} className="d-flex align-items-center">
                            <span className="me-2">
                              <ImageWithBasePath src="assets/admin/img/icons/pdf-icon.svg" alt="img" />
                            </span>
                            <div>
                              <h6 className="fs-14 fw-medium text-truncate" style={{ maxWidth: 180 }}>
                                {docPath.split("/").pop()}
                              </h6>
                              <a
                                href={getImageUrl(docPath)}
                                target="_blank"
                                rel="noreferrer"
                                className="fs-13 text-info"
                              >
                                Download
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="fs-13 text-muted">No documents uploaded.</p>
                    )}
                  </div>
                  {/* Features & Amenities */}
                  <div>
                    <h6 className="mb-3">Features &amp; Amenities</h6>
                    {car?.features?.length ? (
                      <div className="row gy-2">
                        {car.features.map((feature) => (
                          <div key={feature} className="col-lg-4 col-sm-6">
                            <p className="d-flex align-items-center mb-2">
                              <i className="ti ti-square-check-filled text-success me-2" />
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="fs-13 text-muted">No features listed.</p>
                    )}
                  </div>
                </div>
                {/* /Car Info */}
                {/* Car Price */}
                <div className="tab-pane fade" id="car-price">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Pricing</h6>
                      <Link to={`${all_routes.carPartnerEditCar}?id=${carId}`} className="link-default">
                        <i className="ti ti-edit" />
                      </Link>
                    </div>
                    {car?.pricing?.length ? (
                      <div className="row">
                        {car.pricing.map((p) => (
                          <div key={p.id} className="col-xxl-3 col-md-4 col-sm-6">
                            <div className="mb-3">
                              <h6 className="fs-14 fw-semibold mb-1">
                                Per {p.duration.charAt(0) + p.duration.slice(1).toLowerCase()}
                              </h6>
                              <p className="fs-13">₹{p.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="fs-13 text-muted">No pricing set.</p>
                    )}
                  </div>
                </div>
                {/* /Car Price */}
                {/* Extra Services */}
                <div className="tab-pane fade" id="car-service">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h6>Extra Services</h6>
                    <Link to={`${all_routes.carPartnerEditCar}?id=${carId}`} className="link-default">
                      <i className="ti ti-edit" />
                    </Link>
                  </div>
                  <div className="row gy-2">
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Navigation
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Fuel Pre-Purchase
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          USB Charger
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Wi-Fi Hotspot
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Roadside Assistance
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Express Check-in/out
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="d-flex flex-column gap-2">
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Child Safety Seats
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Satellite Radio
                        </p>
                        <p className="d-flex align-items-center mb-0">
                          <i className="ti ti-square-check-filled text-success me-2" />
                          Toll Pass
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Extra Services */}
                {/* Gallery */}
                <div className="tab-pane fade" id="car-gallery">
                  <div className="border-bottom mb-3 pb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6>Gallery</h6>
                      <Link to={`${all_routes.carPartnerEditCar}?id=${carId}`} className="link-default">
                        <i className="ti ti-edit" />
                      </Link>
                    </div>
                    {car?.images?.length ? (
                      <div className="d-flex align-items-center flex-wrap gap-3">
                        {car.images.map((imgPath, idx) => (
                          <div key={imgPath} className="gallery-wrap">
                            <Link
                              to="#"
                              onClick={(e) => { e.preventDefault(); setOpen1(true); }}
                            >
                              <img
                                src={getImageUrl(imgPath)}
                                alt={`Car image ${idx + 1}`}
                                style={{ width: 120, height: 90, objectFit: "cover", borderRadius: 8 }}
                                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                              />
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="fs-13 text-muted">No gallery images uploaded.</p>
                    )}
                  </div>
                </div>
                {/* /Gallery */}
                {/* Damages */}
                <div className="tab-pane fade" id="car-damages">
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <h6>Damages</h6>
                    <Link to={`${all_routes.carPartnerEditCar}?id=${carId}`} className="link-default">
                      <i className="ti ti-edit" />
                    </Link>
                  </div>
                  <p className="fs-13 text-muted">No damages recorded.</p>
                </div>
                {/* /Damages */}
              </div>
            </div>
          </div>
        </div>
        {/* /Car Details */}
        {/* Rent Summary */}
        <div className="col-xl-4 theiaStickySidebar">
          <div className="card mb-0">
            <div className="card-body">
              <div className="border-bottom mb-3 pb-3">
                <h5>Summary</h5>
              </div>
              <div className="summary-wrap">
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">
                      {car ? new Date(car.createdAt).getDate().toString().padStart(2, "0") : "—"}
                    </h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 rounded-1 text-gray-9">
                      {car ? new Date(car.createdAt).toLocaleString("en-GB", { month: "short", year: "numeric" }) : ""}
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Car Added</h6>
                    <p className="fs-13">
                      Car was listed on the platform
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <h6 className="fw-semibold mb-1">
                      {car ? new Date(car.updatedAt).getDate().toString().padStart(2, "0") : "—"}
                    </h6>
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 rounded-1 text-gray-9">
                      {car ? new Date(car.updatedAt).toLocaleString("en-GB", { month: "short", year: "numeric" }) : ""}
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Last Updated</h6>
                    <p className="fs-13">
                      Car details were last{" "}
                      <span className="text-gray-9 fw-medium">updated</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 rounded-1 text-gray-9" style={{ minWidth: 40 }}>
                      {car?.isAvailable ? (
                        <i className="ti ti-check text-success" />
                      ) : (
                        <i className="ti ti-x text-danger" />
                      )}
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Status</h6>
                    <p className="fs-13">
                      Car is currently{" "}
                      <span className="text-gray-9 fw-medium">
                        {car?.isAvailable ? "Available for Booking" : "Unavailable"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border br-5 text-center flex-shrink-0 p-1 me-3">
                    <span className="d-inline-block fw-medium fs-12 bg-light p-1 rounded-1 text-gray-9" style={{ minWidth: 40 }}>
                      {car?.isVerified ? (
                        <i className="ti ti-check text-success" />
                      ) : (
                        <i className="ti ti-clock text-warning" />
                      )}
                    </span>
                  </div>
                  <div>
                    <h6 className="fs-14 fw-semibold mb-1">Verification</h6>
                    <p className="fs-13">
                      Car is{" "}
                      <span className="text-gray-9 fw-medium">
                        {car?.isVerified ? "Verified" : "Pending verification"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Rent Summary */}
      </div>
    </div>
  );
};

export default CarDetails;
