import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import CarBookingModal from "../../../common/modal/carBookingModal";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import { DatePicker, Select } from "antd";
import type { Dayjs } from "dayjs";
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

// Map label strings to backend enum values
const transmissionMap: Record<string, string> = {
  Automatic: "AUTO",
  "Semi-Automatic": "SEMI_AUTO",
  Manual: "MANUAL",
};
const fuelMap: Record<string, string> = {
  Petrol: "PETROL",
  Diesel: "DIESEL",
  Electric: "ELECTRIC",
  CNG: "CNG",
  Hybrid: "HYBRID",
};
const seaterMap: Record<string, number> = {
  "2 Seater": 2,
  "4 Seater": 4,
  "5 Seater": 5,
  "6 Seater": 6,
  "7 Seater": 7,
};

const AddCar = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isImage1, setImage1] = useState(true);
  const [isImage2, setImage2] = useState(true);
  const [isImage3, setImage3] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form field state
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

  // File state
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const thumbnailFileRef = useRef<File | null>(null);
  const [carImages, setCarImages] = useState<{ id: number; url: string; name: string; file: File }[]>([]);
  const [docFiles, setDocFiles] = useState<{ id: number; name: string; size: string; file: File }[]>([]);

  const handleCarImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setCarImages((prev) => [
          ...prev,
          { id: Date.now() + Math.random(), url: ev.target?.result as string, name: file.name, file },
        ]);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const removeCarImage = (id: number) => {
    setCarImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleDocFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const sizeKB = (file.size / 1024).toFixed(2);
      setDocFiles((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), name: file.name, size: `${sizeKB} KB`, file },
      ]);
    });
    e.target.value = "";
  };

  const removeDocFile = (id: number) => {
    setDocFiles((prev) => prev.filter((d) => d.id !== id));
  };
  const [amenities, setAmenities] = useState<Record<string, boolean>>({
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
  });

  const allChecked = Object.values(amenities).every(Boolean);
  const someChecked = Object.values(amenities).some(Boolean);

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
      reader.onload = (ev) => {
        setFeaturedImage(ev.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
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
        .map(([k]) => {
          const labelMap: Record<string, string> = {
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
          return labelMap[k] ?? k;
        });

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
      fd.append("mileageKm", "0");
      fd.append("features", JSON.stringify(selectedAmenities));
      fd.append("specifications", JSON.stringify([]));

      if (thumbnailFileRef.current) {
        fd.append("thumbnail", thumbnailFileRef.current);
      }
      carImages.forEach((img) => fd.append("images", img.file));
      docFiles.forEach((d) => fd.append("documents", d.file));

      await partnerCarAPI.createCar(fd);
      navigate(all_routes.carPartnerCarsList);
    } catch (err: unknown) {
      const errMsg = (err as { message?: string })?.message ?? "Failed to create car.";
      setSubmitError(errMsg);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  const options = [
    {
      label: "Red",
      value: "Red",
      bg: "danger",
    },
    {
      label: "Green",
      value: "Green",
      bg: "success",
    },
    {
      label: "Blue",
      value: "Blue",
      bg: "info",
    },
  ];
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
                  className={`nav-item ${
                    currentStep === 1
                      ? "active"
                      : currentStep > 1
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-info-circle me-1" />
                    Basic
                  </Link>
                </li>
                <li
                  className={`nav-item ${
                    currentStep === 2
                      ? "active"
                      : currentStep > 2
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-flame me-1" />
                    Features
                  </Link>
                </li>
                {/*
                <li
                  className={`nav-item ${
                    currentStep === 3
                      ? "active"
                      : currentStep > 3
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-files me-1" />
                    Pricing
                  </Link>
                </li>
                */}
                {/*
                <li
                  className={`nav-item ${
                    currentStep === 4
                      ? "active"
                      : currentStep > 4
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-float-center me-1" />
                    Extra Services
                  </Link>
                </li>
                */}
                <li
                  className={`nav-item ${
                    currentStep === 3
                      ? "active"
                      : currentStep > 3
                        ? "activated"
                        : ""
                  }`}
                >
                  <Link to="#" className="nav-link d-flex align-items-center">
                    <i className="ti ti-file-invoice me-1" />
                    Uploads
                  </Link>
                </li>
              </ul>
              {currentStep === 1 && (
                <fieldset id="first-field">
                  <form action="#">
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-info-circle text-secondary me-2" />
                        Basic Info
                      </h4>
                    </div>
                    <div className="border-bottom mb-4 pb-4">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Featured Image</h6>
                          <p>Upload Featured Image</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center flex-wrap row-gap-3 upload-pic">
                            <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 border rounded-circle frames overflow-hidden" style={{ backgroundColor: '#e8eaf6', position: 'relative' }}>
                              {featuredImage ? (
                                <img
                                  src={featuredImage}
                                  alt="Featured"
                                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                                />
                              ) : null}
                              {featuredImage && (
                                <Link
                                  to="#"
                                  className="upload-img-trash trash-end btn btn-sm rounded-circle"
                                  onClick={(e) => { e.preventDefault(); setFeaturedImage(null); }}
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
                                  Car Type{" "}
                                  <span className="text-danger">*</span>
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
                                  Category{" "}
                                  <span className="text-danger">*</span>
                                </label>

                                <CustomSelect
                                  options={CarModal}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Car Number
                                </label>
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
                                <label className="form-label">
                                  Plate Number
                                </label>
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
                                  Main Location{" "}
                                  <span className="text-danger">*</span>
                                </label>

                                <CustomSelect
                                  options={MainLocation}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3 select-search">
                                <label className="form-label ">
                                  Link Other Location
                                </label>
                                <Select
                                  showSearch
                                  allowClear
                                  className="select w-100"
                                  placeholder="Select a Location"
                                  optionFilterProp="label"
                                  options={[
                                    {
                                      value: "jack",
                                      label: "Evans Dealer Car Zone",
                                    },
                                    {
                                      value: "lucy",
                                      label: "Allen Dealer Parking Lot",
                                    },
                                    {
                                      value: "tom",
                                      label: "Walker Auto Trade Yard",
                                    },
                                  ]}
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
                                  placeholder="select one Color"
                                  className="Select"
                                  value={carColor}
                                  onChange={(v: string) => setCarColor(v)}
                                  options={options}
                                  optionRender={(option) => (
                                    <>
                                      <span>
                                        <span
                                          className={`color-icon bg-${option.data.bg}`}
                                        ></span>
                                        {option.data.label}
                                      </span>
                                    </>
                                  )}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Year of Car{" "}
                                  <span className="text-danger">*</span>
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
                                <label className="form-label">
                                  Transmission
                                </label>
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
                                <label className="form-label">
                                  No of Seats
                                </label>
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
                      <button
                        type="button"
                        className="btn btn-light d-flex align-items-center me-2"
                      >
                        <i className="ti ti-chevron-left me-1" />
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary wizard-next d-flex align-items-center"
                        type="button"
                        onClick={handleNext}
                      >
                        Add Features
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
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
                                    id="select-all1"
                                    checked={allChecked}
                                    ref={(el) => { if (el) el.indeterminate = someChecked && !allChecked; }}
                                    onChange={handleCheckAll}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="select-all1"
                                  >
                                    Check All
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity"
                                    checked={amenities.amenity}
                                    onChange={handleAmenityChange("amenity")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity"
                                  >
                                    Air Condition
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity1"
                                    checked={amenities.amenity1}
                                    onChange={handleAmenityChange("amenity1")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity1"
                                  >
                                    Climate Control
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity3"
                                    checked={amenities.amenity3}
                                    onChange={handleAmenityChange("amenity3")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity3"
                                  >
                                    Luxury Climate Control
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity4"
                                    checked={amenities.amenity4}
                                    onChange={handleAmenityChange("amenity4")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity4"
                                  >
                                    Sunroof
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity7"
                                    checked={amenities.amenity7}
                                    onChange={handleAmenityChange("amenity7")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity7"
                                  >
                                    Push-button Start
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity10"
                                    checked={amenities.amenity10}
                                    onChange={handleAmenityChange("amenity10")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity10"
                                  >
                                    Parking Sensors
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity13"
                                    checked={amenities.amenity13}
                                    onChange={handleAmenityChange("amenity13")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity13"
                                  >
                                    Bluetooth
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity14"
                                    checked={amenities.amenity14}
                                    onChange={handleAmenityChange("amenity14")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity14"
                                  >
                                    Usb
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity17"
                                    checked={amenities.amenity17}
                                    onChange={handleAmenityChange("amenity17")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity17"
                                  >
                                    Cruise Control
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity20"
                                    checked={amenities.amenity20}
                                    onChange={handleAmenityChange("amenity20")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity20"
                                  >
                                    Android Auto
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <div className="form-check form-checkbox mb-0">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="amenity27"
                                    checked={amenities.amenity27}
                                    onChange={handleAmenityChange("amenity27")}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="amenity27"
                                  >
                                    360-degree Camera
                                  </label>
                                </div>
                              </div>
                            </div>
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
              {/*
              {currentStep === 3 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-files text-secondary me-2" />
                        Pricing &amp; Tariff{" "}
                      </h4>
                    </div>
                    <div className="border-bottom mb-4 pb-2 unlimited-price">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Pricing</h6>
                          <p>Add Pricing for Cars</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label className="form-label">
                                  Pricing Type{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="d-flex align-items-center flex-wrap gap-3">
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="price"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="price"
                                    >
                                      Daily
                                    </label>
                                  </div>
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="price1"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="price1"
                                    >
                                      Weekly
                                    </label>
                                  </div>
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="price2"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="price2"
                                    >
                                      Monthly
                                    </label>
                                  </div>
                                  <div className="form-check mb-0">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="price3"
                                      defaultChecked
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="price3"
                                    >
                                      Yearly
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Daily Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Weekly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Monthly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Yearly Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-between">
                                  <label className="form-label">
                                    Base Kilometers (Per Day){" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <div className="form-check unlimited-checkbox mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      id="unlimited"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="unlimited"
                                    >
                                      Unlimited
                                    </label>
                                  </div>
                                </div>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="mb-3 unlimited-wrap">
                                <label className="form-label">
                                  Kilometers Extra Price{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Tarrif</h6>
                          <p>Add Tariff Pricing for Cars</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                            <Link
                              to="#"
                              className="btn btn-dark btn-md d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#add-tarrif"
                            >
                              <i className="ti ti-plus me-1" />
                              Add New Tarrif Rate
                            </Link>
                          </div>
                          <div className="empty-data bg-light text-center mb-3">
                            <p className="fw-medium">No Data Added</p>
                          </div>
                          <div className="card bg-light mb-3">
                            <div className="card-body pb-3">
                              <h6 className="mb-3">Total Tariffs : 21</h6>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
                                <div>
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    4 to 5 Days
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Daily Price :{" "}
                                      <span className="text-gray-9">$50</span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Base Kilometers :{" "}
                                      <span className="text-gray-9">25</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Kilometers Extra Price :{" "}
                                      <span className="text-gray-9">$200</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-tarrif"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tarrif"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border p-20 br-5 mb-1">
                                <div>
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    5 to 8 Days
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Daily Price :{" "}
                                      <span className="text-gray-9">$80</span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Base Kilometers :{" "}
                                      <span className="text-gray-9">15</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Kilometers Extra Price :{" "}
                                      <span className="text-gray-9">$150</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit-tarrif"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_tarrif"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Seasonal Pricing</h6>
                          <p>Add Seasonal Pricing for Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                            <Link
                              to="#"
                              className="btn btn-dark btn-md d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#select_price"
                            >
                              <i className="ti ti-plus me-1" />
                              Select Seasonal Pricing
                            </Link>
                            <Link
                              to="#"
                              className="text-info"
                              data-bs-toggle="modal"
                              data-bs-target="#add_price"
                            >
                              Add New
                            </Link>
                          </div>
                          <div className="empty-data bg-light text-center mb-3">
                            <p className="fw-medium">No Data Added</p>
                          </div>
                          <div className="card bg-light mb-3">
                            <div className="card-body pb-3">
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
                                <div>
                                  <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                    Halloween
                                    <span className="badge bg-secondary-transparent ms-2">
                                      01 Oct 2025 - 31 Oct 2025{" "}
                                    </span>
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Daily Rate :{" "}
                                      <span className="text-gray-9">$200</span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Weekly Rate :{" "}
                                      <span className="text-gray-9">$1400</span>
                                    </p>
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Monthly Rate :{" "}
                                      <span className="text-gray-9">$4800</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0 pe-2 mb-0">
                                      Late Fee :{" "}
                                      <span className="text-gray-9">$200</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_seasonal_price"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_price"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-2 pb-2">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Insurance</h6>
                          <p>Add Insurance for Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                            <Link
                              to="#"
                              className="btn btn-dark btn-md d-flex align-items-center"
                              data-bs-toggle="modal"
                              data-bs-target="#select_insurance"
                            >
                              <i className="ti ti-plus me-1" />
                              Select New Insurance
                            </Link>
                          </div>
                          <div className="empty-data bg-light text-center mb-3">
                            <p className="fw-medium">No Data Added</p>
                          </div>
                          <div className="card bg-light mb-3">
                            <div className="card-body pb-3">
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
                                <div>
                                  <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                    Full Premium Insurance
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Price :{" "}
                                      <span className="text-gray-9">$200</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Benefits :{" "}
                                      <span className="text-gray-9">04</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_insurance"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_insurance"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                              <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
                                <div>
                                  <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                    Roadside Assistance{" "}
                                  </h6>
                                  <div className="d-flex align-items-center gap-2 flex-wrap">
                                    <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                      Price :{" "}
                                      <span className="text-gray-9">$250</span>
                                    </p>
                                    <p className="fs-13 fw-medium mb-0">
                                      Benefits :{" "}
                                      <span className="text-gray-9">06</span>
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center icon-list">
                                  <Link
                                    to="#"
                                    className="edit-icon me-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#edit_insurance"
                                  >
                                    <i className="ti ti-edit" />
                                  </Link>
                                  <Link
                                    to="#"
                                    className="trash-icon"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete_insurance"
                                  >
                                    <i className="ti ti-trash" />
                                  </Link>
                                </div>
                              </div>
                            </div>
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
                        Add Extra Services
                        <i className="ti ti-chevron-right ms-1" />
                      </button>
                    </div>
                  </form>
                </fieldset>
              )}
              */}
              {/*
              {currentStep === 4 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-float-center text-secondary me-2" />
                        Extra Services
                      </h4>
                    </div>
                    <div className="border-bottom mb-2 pb-1 extra-service">
                      <div className="text-end">
                        <Link
                          to="#"
                          className="link-purple text-decoration-underline fw-medium d-inline-block"
                          data-bs-toggle="modal"
                          data-bs-target="#edit_price"
                        >
                          Edit Price
                        </Link>
                      </div>
                      <div className="row">
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-gps" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Navigation
                                </h6>
                                <p className="fs-13">Using GPS while travel</p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-wifi-2" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Wi-Fi Hotspot
                                </h6>
                                <p className="fs-13">
                                  Constant portable internet
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">One time</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill active">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-baby-carriage" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Child Safety Seats
                                </h6>
                                <p className="fs-13">
                                  Secure infant/toddler car seat
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-fill flex-wrap gap-3 active">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-baby-carriage" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Fuel Pre-Purchase
                                </h6>
                                <p className="fs-13">
                                  Full tank, return hassle-free
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-user-star" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Roadside Assistance
                                </h6>
                                <p className="fs-13">
                                  24/7 emergency car support
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-satellite" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Satellite Radio
                                </h6>
                                <p className="fs-13">
                                  {" "}
                                  Unlimited premium music
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-usb" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  USB Charger
                                </h6>
                                <p className="fs-13">
                                  Fast charging for devices
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill active">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultChecked
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-checkup-list" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Express Check-in/out
                                </h6>
                                <p className="fs-13">
                                  Fast pickup &amp; return process
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-tallymark-2" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Toll Pass
                                </h6>
                                <p className="fs-13">Skip toll booth lines</p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-file-pencil" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Insurance
                                </h6>
                                <p className="fs-13">
                                  Full coverage protection
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-4 col-md-6 d-flex">
                          <div className="form-check form-checkbox d-flex align-items-center justify-content-between flex-wrap gap-3 flex-fill">
                            <div className="d-flex align-items-center">
                              <input
                                className="form-check-input"
                                type="checkbox"
                              />
                              <span className="service-icon bg-dark d-flex align-items-center justify-content-center me-2 ms-2">
                                <i className="ti ti-camera" />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  Dash Cam
                                </h6>
                                <p className="fs-13">
                                  Records trips extra security
                                </p>
                              </div>
                            </div>
                            <div>
                              <p className="fs-13 mb-1">Per Day</p>
                              <h6 className="fs-14 fw-semibold">$10</h6>
                            </div>
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
              */}
              {currentStep === 3 && (
                <fieldset style={{ display: "block" }}>
                  <form>
                    <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                      <h4 className="d-flex align-items-center">
                        <i className="ti ti-file-invoice text-secondary me-2" />
                        Uploads
                      </h4>
                    </div>
                    <div className="border-bottom mb-4 pb-3">
                      <div className="row row-gap-4">
                        <div className="col-xl-3">
                          <h6 className="mb-1">Car Images</h6>
                          <p>Upload multiple images of your Car</p>
                        </div>
                        <div className="col-xl-9">
                          <div className="col-xxl-8 col-lg-10">
                            <h6 className="mb-3">Upload Images</h6>
                            <div className="document-upload text-center bg-light br-5 mb-3" style={{ position: "relative" }}>
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
                                onChange={handleCarImagesChange}
                              />
                            </div>
                            {carImages.length > 0 && (
                              <div className="uploaded-images d-flex align-items-center flex-wrap gap-3 mt-3">
                                {carImages.map((img) => (
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
                                      onClick={(e) => { e.preventDefault(); removeCarImage(img.id); }}
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
                              <div className="document-upload text-center bg-light br-5 mb-3" style={{ position: "relative" }}>
                                <ImageWithBasePath
                                  src="assets/admin/img/icons/upload-icon.svg"
                                  alt="img"
                                  className="mb-2"
                                />
                                <p className="mb-2">
                                  Drop your files here or{" "}
                                  <span className="text-info text-decoration-underline">
                                    Browse
                                  </span>
                                </p>
                                <p className="fs-12 mb-0">PDF, Word, Images — Max 10MB each</p>
                                <input
                                  type="file"
                                  className="form-control image-sign"
                                  multiple
                                  accept=".pdf,.doc,.docx,image/*"
                                  onChange={handleDocFilesChange}
                                />
                              </div>
                              <div className="mb-3">
                                <p className="fs-13 mb-1">
                                  Upload Insurance, Car Registration, Documents
                                </p>
                                <p className="fs-13">Formats: PDF, Word, Images</p>
                              </div>
                              {docFiles.map((d) => (
                                <div key={d.id} className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2">
                                  <div className="d-flex align-items-center">
                                    <span>
                                      <ImageWithBasePath
                                        src="assets/admin/img/icons/pdf-icon.svg"
                                        alt="img"
                                      />
                                    </span>
                                    <div className="ms-2">
                                      <h6 className="fs-14 fw-medium text-truncate" style={{ maxWidth: 200 }}>{d.name}</h6>
                                      <p className="fs-13">{d.size}</p>
                                    </div>
                                  </div>
                                  <div className="icon-list">
                                    <Link
                                      to="#"
                                      className="trash-icon"
                                      onClick={(e) => { e.preventDefault(); removeDocFile(d.id); }}
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
                            Save &amp; Exit
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

export default AddCar;
