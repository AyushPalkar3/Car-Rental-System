import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import CarBookingModal from "../../../common/modal/carBookingModal";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import { DatePicker, Select } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import CustomSelect from "../../../common/select/commonSelect";
import type { OptionType } from "../../../common/select/commonSelect";
import {
  Brand,
  CarModal,
  CarType,
  Fuel,
  MainLocation,
  Seater,
  Transmission,
} from "../../../common/json/selectOption";
import { partnerCarAPI } from "../../../service/api/car";

const API_BASE_IMAGE = import.meta.env.VITE_API_BASE_URL_IMAGE ?? "";
const getImageUrl = (path: string) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_BASE_IMAGE}${path}`;
};

// ---- Enum <-> Label maps ----
const transmissionMap: Record<string, string> = {
  Automatic: "AUTO",
  "Semi-Automatic": "SEMI_AUTO",
  Manual: "MANUAL",
};
const transmissionReverseMap: Record<string, { label: string; value: string }> = {
  AUTO: { label: "Automatic", value: "1" },
  SEMI_AUTO: { label: "Semi-Automatic", value: "2" },
  MANUAL: { label: "Manual", value: "3" },
};
const fuelMap: Record<string, string> = {
  Petrol: "PETROL",
  Diesel: "DIESEL",
  Electric: "ELECTRIC",
  CNG: "CNG",
  Hybrid: "HYBRID",
};
const fuelReverseMap: Record<string, { label: string; value: string }> = {
  PETROL: { label: "Petrol", value: "1" },
  DIESEL: { label: "Diesel", value: "2" },
  ELECTRIC: { label: "Electric", value: "3" },
  CNG: { label: "CNG", value: "4" },
  HYBRID: { label: "Hybrid", value: "5" },
};
const seaterMap: Record<string, number> = {
  "2 Seater": 2,
  "4 Seater": 4,
  "5 Seater": 5,
  "6 Seater": 6,
  "7 Seater": 7,
};
const seaterReverseMap: Record<number, { label: string; value: string }> = {
  2: { label: "2 Seater", value: "1" },
  4: { label: "4 Seater", value: "2" },
  5: { label: "5 Seater", value: "3" },
  6: { label: "6 Seater", value: "4" },
  7: { label: "7 Seater", value: "5" },
};

const AMENITY_LABELS: Record<string, string> = {
  amenity: "Air Condition",
  amenity1: "Climate Control",
  amenity3: "Luxury Climate Control",
  amenity4: "Sunroof",
  amenity7: "Push-button Start",
  amenity10: "Parking Sensors",
  amenity13: "Bluetooth",
  amenity14: "Usb",
  amenity17: "Cruise Control",
  amenity20: "Android Auto",
  amenity27: "360-degree Camera",
};

const INITIAL_AMENITIES: Record<string, boolean> = {
  amenity: false,
  amenity1: false,
  amenity3: false,
  amenity4: false,
  amenity7: false,
  amenity10: false,
  amenity13: false,
  amenity14: false,
  amenity17: false,
  amenity20: false,
  amenity27: false,
};

const EditCar = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get("id");
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [isImage1, setImage1] = useState(true);
  const [isImage2, setImage2] = useState(true);
  const [isImage3, setImage3] = useState(true);
  const [pageLoading, setPageLoading] = useState(!!carId);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ---- Form fields ----
  const [carName, setCarName] = useState("");
  const [carType, setCarType] = useState<{ label: string; value: string | number } | null>(null);
  const [carBrand, setCarBrand] = useState<{ label: string; value: string | number } | null>(null);
  const [carModelSel, setCarModelSel] = useState<{ label: string; value: string | number } | null>(null);
  const [carTransmission, setCarTransmission] = useState<{ label: string; value: string | number } | null>(null);
  const [carFuel, setCarFuel] = useState<{ label: string; value: string | number } | null>(null);
  const [carSeating, setCarSeating] = useState<{ label: string; value: string | number } | null>(null);
  const [carColor, setCarColor] = useState<string>("White");
  const [carYear, setCarYear] = useState<Dayjs | null>(null);
  const [carDescription, setCarDescription] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [airBags, setAirBags] = useState("");

  // ---- File state ----
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const thumbnailFileRef = useRef<File | null>(null);

  // Existing images from API (can be removed)
  const [existingImages, setExistingImages] = useState<string[]>([]);
  // New images added by user
  const [newCarImages, setNewCarImages] = useState<{ id: number; url: string; name: string; file: File }[]>([]);

  // Existing documents from API (can be removed)
  const [existingDocs, setExistingDocs] = useState<string[]>([]);
  // New documents added by user
  const [newDocFiles, setNewDocFiles] = useState<{ id: number; name: string; size: string; file: File }[]>([]);

  // ---- Amenities ----
  const [amenities, setAmenities] = useState<Record<string, boolean>>({ ...INITIAL_AMENITIES });
  const allChecked = Object.values(amenities).every(Boolean);
  const someChecked = Object.values(amenities).some(Boolean);

  // ---- Load car data ----
  useEffect(() => {
    if (!carId) return;
    setPageLoading(true);
    partnerCarAPI
      .getCar(carId)
      .then((res) => {
        const car = res.data;
        setCarName(car.name ?? "");
        setCarDescription(car.description ?? "");
        setCarColor(car.color ?? "White");
        setCarYear(car.modelYear ? dayjs().year(car.modelYear) : null);

        // Pre-fill selects
        const brandMatch = Brand.find(
          (o) => o.label.toLowerCase() === car.brand?.toLowerCase()
        );
        if (brandMatch) setCarBrand(brandMatch);

        const typeMatch = CarType.find(
          (o) => o.label.toLowerCase() === car.category?.toLowerCase()
        );
        if (typeMatch) setCarType(typeMatch);

        const modelMatch = CarModal.find(
          (o) => o.label.toLowerCase() === car.description?.toLowerCase()
        );
        if (modelMatch) setCarModelSel(modelMatch);

        if (car.transmission && transmissionReverseMap[car.transmission]) {
          setCarTransmission(transmissionReverseMap[car.transmission]);
        }
        if (car.fuelType && fuelReverseMap[car.fuelType]) {
          setCarFuel(fuelReverseMap[car.fuelType]);
        }
        if (car.seating && seaterReverseMap[car.seating]) {
          setCarSeating(seaterReverseMap[car.seating]);
        }

        // Pre-fill existing thumbnail
        if (car.thumbnail) {
          setFeaturedImage(getImageUrl(car.thumbnail));
        }

        // Pre-fill existing images & docs
        setExistingImages(car.images ?? []);
        setExistingDocs((car.documents as string[]) ?? []);

        // Pre-fill amenities
        const featureSet = new Set((car.features ?? []).map((f: string) => f.toLowerCase()));
        const updatedAmenities = { ...INITIAL_AMENITIES };
        for (const [key, label] of Object.entries(AMENITY_LABELS)) {
          if (featureSet.has(label.toLowerCase())) {
            updatedAmenities[key] = true;
          }
        }
        setAmenities(updatedAmenities);

        setPlateNumber(car.plateNumber ?? "");
        setCarNumber(car.carNumber ?? "");
        setAirBags(car.airBags != null ? String(car.airBags) : "");
      })
      .catch(() => setLoadError("Failed to load car data."))
      .finally(() => setPageLoading(false));
  }, [carId]);

  // ---- Handlers ----
  const handleCheckAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setAmenities(Object.fromEntries(Object.keys(amenities).map((k) => [k, checked])));
  };

  const handleAmenityChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmenities((prev) => ({ ...prev, [key]: e.target.checked }));
  };

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      thumbnailFileRef.current = file;
      const reader = new FileReader();
      reader.onload = (ev) => setFeaturedImage(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleNewImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setNewCarImages((prev) => [
          ...prev,
          { id: Date.now() + Math.random(), url: ev.target?.result as string, name: file.name, file },
        ]);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const removeNewCarImage = (id: number) => {
    setNewCarImages((prev) => prev.filter((img) => img.id !== id));
  };

  const removeExistingImage = (path: string) => {
    setExistingImages((prev) => prev.filter((p) => p !== path));
  };

  const handleNewDocFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const sizeKB = (file.size / 1024).toFixed(2);
      setNewDocFiles((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), name: file.name, size: `${sizeKB} KB`, file },
      ]);
    });
    e.target.value = "";
  };

  const removeNewDocFile = (id: number) => {
    setNewDocFiles((prev) => prev.filter((d) => d.id !== id));
  };

  const removeExistingDoc = (path: string) => {
    setExistingDocs((prev) => prev.filter((p) => p !== path));
  };

  const getDocName = (path: string) => path.split("/").pop() ?? path;

  const handleSubmit = async () => {
    if (!carId) return;
    if (!carName.trim()) {
      setSubmitError("Car name is required.");
      setCurrentStep(1);
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const selectedAmenities = Object.entries(amenities)
        .filter(([, v]) => v)
        .map(([k]) => AMENITY_LABELS[k] ?? k);

      const fd = new FormData();
      fd.append("name", carName);
      fd.append("brand", carBrand?.label ?? "");
      fd.append("description", carDescription || (carModelSel?.label ?? ""));
      fd.append("modelYear", String(carYear?.year() ?? new Date().getFullYear()));
      fd.append("transmission", transmissionMap[carTransmission?.label ?? ""] ?? "AUTO");
      fd.append("fuelType", fuelMap[carFuel?.label ?? ""] ?? "PETROL");
      fd.append("powerType", "POWER");
      fd.append("seating", String(seaterMap[carSeating?.label ?? ""] ?? 4));
      fd.append("color", carColor);
      fd.append("hexCode", "#FFFFFF");
      fd.append("category", carType?.label ?? "");
      fd.append("plateNumber", plateNumber);
      fd.append("carNumber", carNumber);
      fd.append("airBags", airBags);
      fd.append("features", JSON.stringify(selectedAmenities));
      fd.append("specifications", JSON.stringify([]));

      // Replace existing arrays (only the remaining ones survive)
      fd.append("replaceImages", JSON.stringify(existingImages));
      fd.append("replaceDocuments", JSON.stringify(existingDocs));

      // New thumbnail
      if (thumbnailFileRef.current) {
        fd.append("thumbnail", thumbnailFileRef.current);
      }
      // New car images
      newCarImages.forEach((img) => fd.append("images", img.file));
      // New documents
      newDocFiles.forEach((d) => fd.append("documents", d.file));

      await partnerCarAPI.updateCar(carId, fd);
      navigate(all_routes.carPartnerCarsList);
    } catch (err: unknown) {
      const errMsg = (err as { message?: string })?.message ?? "Failed to update car.";
      setSubmitError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrev = () => setCurrentStep(currentStep - 1);

  const options = [
    { label: "Red", value: "Red", bg: "danger" },
    { label: "White", value: "White", bg: "light" },
    { label: "Black", value: "Black", bg: "dark" },
    { label: "Green", value: "Green", bg: "success" },
    { label: "Blue", value: "Blue", bg: "info" },
  ];

  if (pageLoading) {
    return (
      <div className="content me-0 text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="content me-0">
        <div className="alert alert-danger">{loadError}</div>
      </div>
    );
  }

  return (
    <>
      <div className="content me-0">
        <div className="mb-3">
          <Link
            to={all_routes.carPartnerCarsList}
            className="d-inline-flex align-items-center fw-medium"
          >
            <i className="ti ti-arrow-left me-1" />
            Back to List
          </Link>
        </div>
        <div className="card mb-0">
          <div className="card-body">
            <div className="add-wizard car-steps">
              <ul className="nav d-flex align-items-center flex-wrap gap-3">
                <li
                  className={`nav-item ${currentStep === 1 ? "active" : currentStep > 1 ? "activated" : ""}`}
                >
                  <button
                    type="button"
                    className="nav-link d-flex align-items-center car-step-tab"
                    onClick={() => setCurrentStep(1)}
                    aria-current={currentStep === 1 ? "step" : undefined}
                  >
                    <i className="ti ti-info-circle me-1" />
                    Basic
                  </button>
                </li>
                <li
                  className={`nav-item ${currentStep === 2 ? "active" : currentStep > 2 ? "activated" : ""}`}
                >
                  <button
                    type="button"
                    className="nav-link d-flex align-items-center car-step-tab"
                    onClick={() => setCurrentStep(2)}
                    aria-current={currentStep === 2 ? "step" : undefined}
                  >
                    <i className="ti ti-flame me-1" />
                    Features
                  </button>
                </li>
                <li
                  className={`nav-item ${currentStep === 3 ? "active" : currentStep > 3 ? "activated" : ""}`}
                >
                  <button
                    type="button"
                    className="nav-link d-flex align-items-center car-step-tab"
                    onClick={() => setCurrentStep(3)}
                    aria-current={currentStep === 3 ? "step" : undefined}
                  >
                    <i className="ti ti-file-invoice me-1" />
                    Uploads
                  </button>
                </li>
              </ul>

              {/* ============== STEP 1: Basic Info ============== */}
              {currentStep === 1 && (
                <fieldset id="first-field">
                  <form action="#">
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-info-circle text-secondary me-2" />
                        Basic Info
                      </h4>
                    </div>
                    {/* Featured Image */}
                    <div className="border-bottom mb-4 pb-4">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Featured Image</h6>
                          <p>Upload Featured Image</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center flex-wrap row-gap-3 upload-pic">
                            <div
                              className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 border rounded-circle frames"
                              style={{ backgroundColor: "#e8eaf6", overflow: "hidden" }}
                            >
                              {featuredImage && (
                                <img
                                  src={featuredImage}
                                  alt="Featured"
                                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                                />
                              )}
                              {featuredImage && (
                                <Link
                                  to="#"
                                  className="upload-img-trash trash-end btn btn-sm rounded-circle"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setFeaturedImage(null);
                                    thumbnailFileRef.current = null;
                                  }}
                                >
                                  <i className="ti ti-trash fs-12" />
                                </Link>
                              )}
                            </div>
                            <div>
                              <div className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2">
                                <i className="ti ti-photo me-1" />
                                Change
                                <input
                                  type="file"
                                  className="form-control image-sign"
                                  accept="image/*"
                                  onChange={handleFeaturedImageChange}
                                />
                              </div>
                              <p>Recommended size is 500px x 500px</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Car Info */}
                    <div className="border-bottom mb-2 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Car Info</h6>
                          <p>Add Information About Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="mb-3">
                            <label className="form-label">
                              Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              value={carName}
                              onChange={(e) => setCarName(e.target.value)}
                              placeholder="Enter car name"
                            />
                          </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Car Type <span className="text-danger">*</span>
                                </label>
                                <CustomSelect
                                  options={CarType}
                                  className="select d-flex"
                                  placeholder="Select"
                                  value={carType}
                                  onChange={(v: OptionType) => setCarType(v)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Brand <span className="text-danger">*</span>
                                </label>
                                <CustomSelect
                                  options={Brand}
                                  className="select d-flex"
                                  placeholder="Select"
                                  value={carBrand}
                                  onChange={(v: OptionType) => setCarBrand(v)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Model <span className="text-danger">*</span>
                                </label>
                                <CustomSelect
                                  options={CarModal}
                                  className="select d-flex"
                                  placeholder="Select"
                                  value={carModelSel}
                                  onChange={(v: OptionType) => setCarModelSel(v)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Category <span className="text-danger">*</span>
                                </label>
                                <CustomSelect
                                  options={CarType}
                                  className="select d-flex"
                                  placeholder="Select"
                                  value={carType}
                                  onChange={(v: OptionType) => setCarType(v)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Car Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={carNumber}
                                  onChange={(e) => setCarNumber(e.target.value)}
                                  placeholder="e.g. internal fleet ID"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Plate Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={plateNumber}
                                  onChange={(e) => setPlateNumber(e.target.value)}
                                  placeholder="e.g. MH12AB1234"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">No. of Air Bags</label>
                                <input
                                  type="number"
                                  min={0}
                                  className="form-control"
                                  value={airBags}
                                  onChange={(e) => setAirBags(e.target.value)}
                                  placeholder="e.g. 6"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Main Location <span className="text-danger">*</span>
                                </label>
                                <CustomSelect
                                  options={MainLocation}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Fuel</label>
                                <CustomSelect
                                  options={Fuel}
                                  className="select d-flex"
                                  placeholder="Select"
                                  value={carFuel}
                                  onChange={(v: OptionType) => setCarFuel(v)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Color <span className="text-danger">*</span>
                                </label>
                                <Select
                                  style={{ width: "100%" }}
                                  placeholder="Select a Color"
                                  className="Select"
                                  value={carColor}
                                  onChange={(v: string) => setCarColor(v)}
                                  options={options}
                                  optionRender={(option) => (
                                    <span>
                                      <span className={`color-icon bg-${option.data.bg}`} />
                                      {option.data.label}
                                    </span>
                                  )}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Year of Car <span className="text-danger">*</span>
                                </label>
                                <div className="input-icon-end position-relative">
                                  <DatePicker
                                    picker="year"
                                    className="form-control datetimepicker"
                                    placeholder="yyyy"
                                    value={carYear}
                                    onChange={(d) => setCarYear(d)}
                                  />
                                  <span className="input-icon-addon">
                                    <i className="ti ti-calendar" />
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Transmission</label>
                                <CustomSelect
                                  options={Transmission}
                                  className="select d-flex"
                                  placeholder="Select"
                                  value={carTransmission}
                                  onChange={(v: OptionType) => setCarTransmission(v)}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">No of Seats</label>
                                <CustomSelect
                                  options={Seater}
                                  className="select d-flex"
                                  placeholder="Select"
                                  value={carSeating}
                                  onChange={(v: OptionType) => setCarSeating(v)}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Description */}
                    <div className="border-bottom mb-2 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Description</h6>
                          <p>Add a brief description of the car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                              className="form-control"
                              rows={4}
                              placeholder="Enter car description..."
                              value={carDescription}
                              onChange={(e) => setCarDescription(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <Link
                        to={all_routes.carPartnerCarsList}
                        className="btn btn-light d-flex align-items-center me-2"
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Cancel
                      </Link>
                      <button
                        className="btn btn-primary wizard-next d-flex align-items-center"
                        type="button"
                        onClick={handleNext}
                      >
                        Edit Features
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}

              {/* ============== STEP 2: Features & Amenities ============== */}
              {currentStep === 2 && (
                <fieldset style={{ display: "block" }}>
                  <form action="#">
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-flame text-secondary me-2" />
                        Features &amp; Amenities
                      </h4>
                    </div>
                    <div className="border-bottom mb-2 pb-2 amenity-wrap">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Features &amp; Amenities</h6>
                          <p>Add Information About Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <div className="form-check mb-0">
                                  <input
                                    className="form-check-input select-all"
                                    type="checkbox"
                                    id="edit-select-all"
                                    checked={allChecked}
                                    ref={(el) => { if (el) el.indeterminate = someChecked && !allChecked; }}
                                    onChange={handleCheckAll}
                                  />
                                  <label className="form-check-label" htmlFor="edit-select-all">
                                    Check All
                                  </label>
                                </div>
                              </div>
                            </div>
                            {Object.entries(AMENITY_LABELS).map(([key, label]) => (
                              <div key={key} className="col-lg-4 col-md-6">
                                <div className="mb-3">
                                  <div className="form-check form-checkbox mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id={`edit-${key}`}
                                      checked={amenities[key]}
                                      onChange={handleAmenityChange(key)}
                                    />
                                    <label className="form-check-label" htmlFor={`edit-${key}`}>
                                      {label}
                                    </label>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-light border wizard-prev me-2"
                        onClick={handlePrev}
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="btn btn-primary wizard-next d-flex align-items-center"
                      >
                        Upload Documents
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}

              {/* ============== STEP 3: Uploads ============== */}
              {currentStep === 3 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-file-invoice text-secondary me-2" />
                        Uploads
                      </h4>
                    </div>

                    {/* Car Images */}
                    <div className="border-bottom mb-4 pb-3">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Car Images</h6>
                          <p>Upload multiple images of your Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="col-xxl-8 col-lg-10">
                            <h6 className="mb-3">Upload Images</h6>
                            <div
                              className="document-upload text-center bg-light br-5 mb-3"
                              style={{ position: "relative" }}
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/icons/upload-icon.svg"
                                alt="img"
                                className="mb-2"
                              />
                              <p className="mb-2">
                                Drop your images here or{" "}
                                <span className="text-info text-decoration-underline">Browse</span>
                              </p>
                              <p className="fs-12 mb-0">JPG, PNG, WEBP — Max 10MB each</p>
                              <input
                                type="file"
                                className="form-control image-sign"
                                multiple
                                accept="image/*"
                                onChange={handleNewImagesChange}
                              />
                            </div>

                            {/* Existing images from API */}
                            {(existingImages.length > 0 || newCarImages.length > 0) && (
                              <div className="uploaded-images d-flex align-items-center flex-wrap gap-3 mt-3">
                                {existingImages.map((imgPath) => (
                                  <div key={imgPath} className="uploaded-img" style={{ position: "relative" }}>
                                    <img
                                      src={getImageUrl(imgPath)}
                                      alt="Car"
                                      style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 8, border: "1px solid #e0e0e0" }}
                                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                    />
                                    <Link
                                      to="#"
                                      className="trash-icon fs-12"
                                      style={{ position: "absolute", top: 4, right: 4, background: "rgba(255,255,255,0.85)", borderRadius: "50%", padding: "2px 5px" }}
                                      onClick={(e) => { e.preventDefault(); removeExistingImage(imgPath); }}
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>
                                    <p className="fs-12 text-truncate mt-1 mb-0" style={{ maxWidth: 100 }}>
                                      {getDocName(imgPath)}
                                    </p>
                                  </div>
                                ))}
                                {newCarImages.map((img) => (
                                  <div key={img.id} className="uploaded-img" style={{ position: "relative" }}>
                                    <img
                                      src={img.url}
                                      alt={img.name}
                                      style={{ width: 100, height: 100, objectFit: "cover", borderRadius: 8, border: "1px solid #e0e0e0" }}
                                    />
                                    <Link
                                      to="#"
                                      className="trash-icon fs-12"
                                      style={{ position: "absolute", top: 4, right: 4, background: "rgba(255,255,255,0.85)", borderRadius: "50%", padding: "2px 5px" }}
                                      onClick={(e) => { e.preventDefault(); removeNewCarImage(img.id); }}
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>
                                    <p className="fs-12 text-truncate mt-1 mb-0" style={{ maxWidth: 100 }}>{img.name}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Car Documents */}
                    <div className="border-bottom mb-4 pb-3">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Car Documents</h6>
                          <p>Add Important Documents of your Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-xxl-8 col-lg-10">
                              <h6 className="mb-3">Upload Document</h6>
                              <div
                                className="document-upload text-center bg-light br-5 mb-3"
                                style={{ position: "relative" }}
                              >
                                <ImageWithBasePath
                                  src="assets/admin/img/icons/upload-icon.svg"
                                  alt="img"
                                  className="mb-2"
                                />
                                <p className="mb-2">
                                  Drop your files here or{" "}
                                  <span className="text-info text-decoration-underline">Browse</span>
                                </p>
                                <p className="fs-12 mb-0">PDF, Word, Images — Max 10MB each</p>
                                <input
                                  type="file"
                                  className="form-control image-sign"
                                  multiple
                                  accept=".pdf,.doc,.docx,image/*"
                                  onChange={handleNewDocFilesChange}
                                />
                              </div>
                              <div className="mb-3">
                                <p className="fs-13 mb-1">Upload Insurance, Car Registration, Documents</p>
                                <p className="fs-13">Formats: PDF, Word, Images</p>
                              </div>

                              {/* Existing docs */}
                              {existingDocs.map((docPath) => (
                                <div
                                  key={docPath}
                                  className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2"
                                >
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <ImageWithBasePath src="assets/admin/img/icons/pdf-icon.svg" alt="img" />
                                    </span>
                                    <div className="ms-2">
                                      <h6 className="fs-14 fw-medium text-truncate" style={{ maxWidth: 200 }}>
                                        {getDocName(docPath)}
                                      </h6>
                                      <p className="fs-13 text-muted">Existing file</p>
                                    </div>
                                  </div>
                                  <div className="icon-list">
                                    <Link
                                      to="#"
                                      className="trash-icon"
                                      onClick={(e) => { e.preventDefault(); removeExistingDoc(docPath); }}
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>
                                  </div>
                                </div>
                              ))}

                              {/* New docs */}
                              {newDocFiles.map((d) => (
                                <div
                                  key={d.id}
                                  className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2"
                                >
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <ImageWithBasePath src="assets/admin/img/icons/pdf-icon.svg" alt="img" />
                                    </span>
                                    <div className="ms-2">
                                      <h6 className="fs-14 fw-medium text-truncate" style={{ maxWidth: 200 }}>
                                        {d.name}
                                      </h6>
                                      <p className="fs-13">{d.size}</p>
                                    </div>
                                  </div>
                                  <div className="icon-list">
                                    <Link
                                      to="#"
                                      className="trash-icon"
                                      onClick={(e) => { e.preventDefault(); removeNewDocFile(d.id); }}
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {submitError && (
                      <div className="alert alert-danger mt-3">{submitError}</div>
                    )}
                    <div className="d-flex align-items-center justify-content-end pt-3">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="btn btn-outline-light border wizard-prev me-2"
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Back
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary d-flex align-items-center"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" />
                            Saving...
                          </>
                        ) : (
                          <>
                            Save Changes
                            <i className="ti ti-chevron-right ms-1" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
            </div>
          </div>
        </div>
      </div>
      <CarBookingModal />
    </>
  );
};

export default EditCar;
