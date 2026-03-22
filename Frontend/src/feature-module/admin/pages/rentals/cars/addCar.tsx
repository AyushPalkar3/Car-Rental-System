import { useMemo, useState, useEffect } from "react";
import CarBookingModal from "../../../common/modal/carBookingModal";
import { Link, useNavigate } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import { DatePicker, message, Select } from "antd";
import CustomSelect from "../../../common/select/commonSelect";
import {
    Brand,
    CarModal,
    CarType,
    Fuel,
    MainLocation,
    Seater,
    Transmission,
} from "../../../common/json/selectOption";
import VideoModal from "../../../common/modal/videoModal";
import { adminCarAPI } from "../../../service/api/car";
import { carPartnerAPI } from "../../../service/api/carPartner";
import { getAdmin } from "../../../service/api/admin";

const AMENITY_OPTIONS = [
    "Air Condition",
    "Climate Control",
    "Luxury Climate Control",
    "Sunroof",
    "Push-button Start",
    "Parking Sensors",
    "Bluetooth",
    "Usb",
    "Cruise Control",
    "Android Auto",
    "360-degree Camera",
] as const;

const AddCar = () => {
    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const videoUrl = "https://www.youtube.com/embed/1trvO6dqQUI";
    const [step1Touched, setStep1Touched] = useState(false);
    const [step3Touched, setStep3Touched] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Owner selection
    const [ownerType, setOwnerType] = useState<"admin" | "carPartner">("admin");
    const [selectedOwnerId, setSelectedOwnerId] = useState<string>("");
    const [carPartners, setCarPartners] = useState<{ id: string; name: string; phoneNum?: string; email?: string }[]>([]);
    const [adminProfile, setAdminProfile] = useState<{ id: string; name: string; phoneNum?: string } | null>(null);

    useEffect(() => {
        carPartnerAPI.getAll().then((res: any) => {
            const list = Array.isArray(res.data) ? res.data : (res.data?.data || []);
            setCarPartners(list);
        }).catch(() => {});
        getAdmin().then((admin: any) => {
            if (admin) {
                setAdminProfile(admin);
                setSelectedOwnerId(admin.id || "");
            }
        }).catch(() => {});
    }, []);

    useEffect(() => {
        if (ownerType === "admin" && adminProfile) {
            setSelectedOwnerId(adminProfile.id || "");
        } else {
            setSelectedOwnerId(carPartners[0]?.id || "");
        }
    }, [ownerType, adminProfile, carPartners]);

    const [carName, setCarName] = useState("");
    const [carType, setCarType] = useState("");
    const [brand, setBrand] = useState("");
    const [carModel, setCarModel] = useState("");
    const [category, setCategory] = useState("");
    const [plateNumber, setPlateNumber] = useState("");
    const [carNumber, setCarNumber] = useState("");
    const [location, setLocation] = useState("");
    const [modelYear, setModelYear] = useState<number | null>(null);
    const [transmissionLabel, setTransmissionLabel] = useState<string>("");
    const [fuelLabel, setFuelLabel] = useState<string>("");
    const [mileageKm, setMileageKm] = useState<number | null>(null);
    const [seating, setSeating] = useState<number | null>(null);
    const [airBags, setAirBags] = useState<string>("");
    const [color, setColor] = useState<string>("Red");
    const [description, setDescription] = useState<string>("");
    const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [imageFiles, setImageFiles] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [documentFiles, setDocumentFiles] = useState<File[]>([]);

    // Pricing
    const [hourPrice, setHourPrice] = useState<string>("");
    const [dayPrice, setDayPrice] = useState<string>("");
    const [weekPrice, setWeekPrice] = useState<string>("");
    const [monthPrice, setMonthPrice] = useState<string>("");

    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
        "Cruise Control",
    ]);

    // Seasonal Pricing
    type SeasonalEntry = {
        name: string;
        startDate: string;
        endDate: string;
        hourPrice: string;
        dayPrice: string;
        weekPrice: string;
        monthPrice: string;
    };
    const emptySeasonalForm: SeasonalEntry = { name: "", startDate: "", endDate: "", hourPrice: "", dayPrice: "", weekPrice: "", monthPrice: "" };
    const [seasonalPricings, setSeasonalPricings] = useState<SeasonalEntry[]>([]);
    const [showSeasonalForm, setShowSeasonalForm] = useState(false);
    const [seasonalForm, setSeasonalForm] = useState<SeasonalEntry>(emptySeasonalForm);
    const [editingSeasonalIdx, setEditingSeasonalIdx] = useState<number | null>(null);

    const handleSeasonalFormChange = (field: keyof SeasonalEntry, value: string) => {
        setSeasonalForm(prev => ({ ...prev, [field]: value }));
    };

    const handleAddSeasonal = () => {
        if (!seasonalForm.name || !seasonalForm.startDate || !seasonalForm.endDate) return;
        if (editingSeasonalIdx !== null) {
            setSeasonalPricings(prev => prev.map((e, i) => i === editingSeasonalIdx ? { ...seasonalForm } : e));
            setEditingSeasonalIdx(null);
        } else {
            setSeasonalPricings(prev => [...prev, { ...seasonalForm }]);
        }
        setSeasonalForm(emptySeasonalForm);
        setShowSeasonalForm(false);
    };

    const handleEditSeasonal = (idx: number) => {
        setSeasonalForm({ ...seasonalPricings[idx] });
        setEditingSeasonalIdx(idx);
        setShowSeasonalForm(true);
    };

    const handleDeleteSeasonal = (idx: number) => {
        setSeasonalPricings(prev => prev.filter((_, i) => i !== idx));
    };

    const allFeaturesSelected =
        AMENITY_OPTIONS.length > 0 &&
        selectedFeatures.length === AMENITY_OPTIONS.length;

    const toggleFeature = (label: string, checked: boolean) => {
        setSelectedFeatures(prev => {
            if (checked) return Array.from(new Set([...prev, label]));
            return prev.filter(x => x !== label);
        });
    };

    const toggleAllFeatures = (checked: boolean) => {
        setSelectedFeatures(checked ? [...AMENITY_OPTIONS] : []);
    };

    const colorHex = useMemo(() => {
        switch ((color || "").toLowerCase()) {
            case "red":
                return "#ff0000";
            case "green":
                return "#00ff00";
            case "blue":
                return "#0000ff";
            default:
                return "#000000";
        }
    }, [color]);

    const toTransmissionEnum = (label: string) => {
        switch (label) {
            case "Automatic":
                return "AUTO";
            case "Semi-Automatic":
                return "SEMI_AUTO";
            case "Manual":
                return "MANUAL";
            default:
                return "AUTO";
        }
    };

    const toFuelEnum = (label: string) => {
        switch (label) {
            case "Petrol":
                return "PETROL";
            case "Diesel":
                return "DIESEL";
            case "Electric":
                return "ELECTRIC";
            default:
                return "PETROL";
        }
    };

    const submitCar = async () => {
        try {
            setIsSubmitting(true);

            const fd = new FormData();
            fd.append("name", carName);
            fd.append("brand", brand);
            fd.append("modelYear", String(modelYear));
            fd.append("featured", "false");
            fd.append("category", category);
            fd.append("plateNumber", plateNumber);
            fd.append("carNumber", carNumber);
            fd.append("location", location);

            fd.append("transmission", toTransmissionEnum(transmissionLabel));
            fd.append("fuelType", toFuelEnum(fuelLabel));
            fd.append("powerType", "POWER");
            fd.append("description", description);

            fd.append("mileageKm", String(mileageKm ?? 0));
            fd.append("seating", String(seating ?? 0));
            fd.append("airBags", airBags);
            fd.append("color", color);
            fd.append("hexCode", colorHex);

            fd.append("features", JSON.stringify(selectedFeatures));
            fd.append("specifications", JSON.stringify([]));

            // Owner assignment
            fd.append("ownerType", ownerType);
            fd.append("selectedOwnerId", selectedOwnerId);

            // Pricing
            const pricingPayload: Array<{ duration: string; price: number }> = [];
            if (hourPrice) pricingPayload.push({ duration: "HOUR", price: Number(hourPrice) });
            if (dayPrice) pricingPayload.push({ duration: "DAY", price: Number(dayPrice) });
            if (weekPrice) pricingPayload.push({ duration: "WEEK", price: Number(weekPrice) });
            if (monthPrice) pricingPayload.push({ duration: "MONTH", price: Number(monthPrice) });
            if (pricingPayload.length > 0) {
                fd.append("pricing", JSON.stringify(pricingPayload));
            }

            // Seasonal Pricing
            if (seasonalPricings.length > 0) {
                fd.append("seasonalPricing", JSON.stringify(
                    seasonalPricings.map(s => ({
                        name: s.name,
                        startDate: s.startDate,
                        endDate: s.endDate,
                        hourPrice: s.hourPrice ? Number(s.hourPrice) : null,
                        dayPrice: s.dayPrice ? Number(s.dayPrice) : null,
                        weekPrice: s.weekPrice ? Number(s.weekPrice) : null,
                        monthPrice: s.monthPrice ? Number(s.monthPrice) : null,
                    }))
                ));
            }

            // Files
            if (thumbnailFile) fd.append("thumbnail", thumbnailFile);
            for (const file of imageFiles) fd.append("images", file);
            for (const file of documentFiles) fd.append("documents", file);

            await adminCarAPI.createCar(fd);
            message.success("Car created successfully! Redirecting...");
            setTimeout(() => navigate(all_routes.adminCarsList), 1200);
        } catch (err) {
            console.error("Create car failed", err);
            message.error("Failed to create car. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCloseModal = () => setShowModal(false);
    const handleNext = () => {
        // ── Step 1: Basic Info validation ──────────────────────────────────
        if (currentStep === 1) {
            const errors: string[] = [];
            if (!thumbnailFile) errors.push("Featured Image");
            if (!carName.trim()) errors.push("Name");
            if (!carType.trim()) errors.push("Car Type");
            if (!brand.trim()) errors.push("Brand");
            if (!carModel.trim()) errors.push("Model");
            if (!category.trim()) errors.push("Category");
            if (!plateNumber.trim()) errors.push("Plate Number");
            if (!location.trim()) errors.push("Location");
            if (!fuelLabel.trim()) errors.push("Fuel");
            if (!modelYear) errors.push("Year of Car");
            if (!transmissionLabel.trim()) errors.push("Transmission");
            if (!seating) errors.push("No of Seats");
            if (!airBags.trim()) errors.push("No of Air Bags");
            if (!description.trim()) errors.push("Description");

            if (errors.length > 0) {
                setStep1Touched(true);
                message.error(`Please fill: ${errors.join(", ")}`);
                return;
            }
        }

        // ── Step 2: Features — no hard required fields (amenities optional) ─

        // ── Step 3: Pricing validation ─────────────────────────────────────
        if (currentStep === 3) {
            if (!hourPrice && !dayPrice && !weekPrice && !monthPrice) {
                setStep3Touched(true);
                message.error("Please enter at least one price (Hourly, Daily, Weekly, or Monthly).");
                return;
            }
        }

        // ── Step 4 (last step): Submit to API ──────────────────────────────
        if (currentStep === 4) {
            submitCar();
            return;
        }

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
                        to={all_routes.adminCarsList}
                        className="d-inline-flex align-items-center fw-medium">
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
                                    }`}>
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
                                    className={`nav-item ${
                                        currentStep === 2
                                            ? "active"
                                            : currentStep > 2
                                              ? "activated"
                                              : ""
                                    }`}>
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
                                    className={`nav-item ${
                                        currentStep === 3
                                            ? "active"
                                            : currentStep > 3
                                              ? "activated"
                                              : ""
                                    }`}>
                                    <button
                                        type="button"
                                        className="nav-link d-flex align-items-center car-step-tab"
                                        onClick={() => setCurrentStep(3)}
                                        aria-current={currentStep === 3 ? "step" : undefined}
                                    >
                                        <i className="ti ti-files me-1" />
                                        Pricing
                                    </button>
                                </li>
                                {/* <li
                                    className={`nav-item ${
                                        currentStep === 4
                                            ? "active"
                                            : currentStep > 4
                                              ? "activated"
                                              : ""
                                    }`}>
                                    <Link
                                        to="#"
                                        className="nav-link d-flex align-items-center">
                                        <i className="ti ti-float-center me-1" />
                                        Extra Services
                                    </Link>
                                </li> */}
                                <li
                                    className={`nav-item ${
                                        currentStep === 4
                                            ? "active"
                                            : currentStep > 4
                                              ? "activated"
                                              : ""
                                    }`}>
                                    <button
                                        type="button"
                                        className="nav-link d-flex align-items-center car-step-tab"
                                        onClick={() => setCurrentStep(4)}
                                        aria-current={currentStep === 4 ? "step" : undefined}
                                    >
                                        <i className="ti ti-file-invoice me-1" />
                                        Uploads
                                    </button>
                                </li>
                                {/* <li
                                    className={`nav-item ${
                                        currentStep === 5
                                            ? "active"
                                            : currentStep > 5
                                              ? "activated"
                                              : ""
                                    }`}>
                                    <Link
                                        to="#"
                                        className="nav-link d-flex align-items-center">
                                        <i className="ti ti-id me-1" />
                                        Damages
                                    </Link>
                                </li> */}
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
                                        {/* Owner Selection */}
                                        <div className="border-bottom mb-4 pb-4">
                                            <div className="row row-gap-4 align-items-end">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">Car Owner</h6>
                                                    <p>Assign this car to an owner</p>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="row row-gap-3">
                                                        <div className="col-md-4">
                                                            <label className="form-label">Owner Type</label>
                                                            <select
                                                                className="form-select"
                                                                value={ownerType}
                                                                onChange={e => setOwnerType(e.target.value as "admin" | "carPartner")}
                                                            >
                                                                <option value="admin">Admin</option>
                                                                <option value="carPartner">Car Partner</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <label className="form-label">
                                                                {ownerType === "admin" ? "Admin" : "Car Partner"}
                                                            </label>
                                                            {ownerType === "admin" ? (
                                                                <input
                                                                    className="form-control"
                                                                    value={adminProfile ? `${adminProfile.name}${adminProfile.phoneNum ? ` (${adminProfile.phoneNum})` : ""}` : "Loading..."}
                                                                    disabled
                                                                    readOnly
                                                                />
                                                            ) : (
                                                                <select
                                                                    className="form-select"
                                                                    value={selectedOwnerId}
                                                                    onChange={e => setSelectedOwnerId(e.target.value)}
                                                                >
                                                                    {carPartners.length === 0 && (
                                                                        <option value="">No car partners found</option>
                                                                    )}
                                                                    {carPartners.map(cp => (
                                                                        <option key={cp.id} value={cp.id}>
                                                                            {cp.name || "Unnamed"}{cp.phoneNum ? ` (${cp.phoneNum})` : cp.email ? ` (${cp.email})` : ""}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-bottom mb-4 pb-4">
                                            <div className="row row-gap-4">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">
                                                        Featured Image
                                                    </h6>
                                                    <p>Upload Featured Image</p>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="d-flex align-items-center flex-wrap row-gap-3 upload-pic">
                                                        <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 border rounded-circle frames">
                                                            {thumbnailPreview ? (
                                                                <img
                                                                    src={thumbnailPreview}
                                                                    className="img-fluid rounded-circle"
                                                                    alt="thumbnail"
                                                                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                                                                />
                                                            ) : (
                                                                <ImageWithBasePath
                                                                    src="assets/admin/img/car/car-02.jpg"
                                                                    className="img-fluid rounded-circle"
                                                                    alt="brands"
                                                                />
                                                            )}
                                                            {thumbnailPreview && (
                                                                <button
                                                                    type="button"
                                                                    className="upload-img-trash trash-end btn btn-sm rounded-circle"
                                                                    onClick={() => {
                                                                        setThumbnailFile(null);
                                                                        setThumbnailPreview(null);
                                                                    }}
                                                                >
                                                                    <i className="ti ti-trash fs-12" />
                                                                </button>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <label className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2" style={{ cursor: "pointer" }}>
                                                                <i className="ti ti-photo me-1" />
                                                                {thumbnailFile ? "Change" : "Upload"}
                                                                <input
                                                                    type="file"
                                                                    className="form-control image-sign"
                                                                    accept="image/jpeg,image/png,image/webp"
                                                                    style={{ display: "none" }}
                                                                    onChange={e => {
                                                                        const file = e.target.files?.[0] ?? null;
                                                                        setThumbnailFile(file);
                                                                        if (file) {
                                                                            setThumbnailPreview(URL.createObjectURL(file));
                                                                        } else {
                                                                            setThumbnailPreview(null);
                                                                        }
                                                                    }}
                                                                />
                                                            </label>
                                                            <p>
                                                                Recommended size
                                                                is 500px x 500px
                                                            </p>
                                                            {thumbnailFile && (
                                                                <p className="fs-13 text-success">{thumbnailFile.name}</p>
                                                            )}
                                                            {step1Touched && !thumbnailFile && (
                                                                <p className="fs-12 text-danger">Featured Image is required.</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-bottom mb-2 pb-2">
                                            <div className="row row-gap-4">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">
                                                        Car Info
                                                    </h6>
                                                    <p>
                                                        Add Information About
                                                        Car
                                                    </p>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Name{" "}
                                                            <span className="text-danger">
                                                                *
                                                            </span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className={`form-control ${step1Touched && !carName.trim() ? "is-invalid" : ""}`}
                                                            value={carName}
                                                            onChange={e =>
                                                                setCarName(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            placeholder="Enter car name"
                                                        />
                                                        {step1Touched && !carName.trim() && (
                                                            <div className="invalid-feedback">Car Name is required.</div>
                                                        )}
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <label className="form-label">
                                                                        Car Type{" "}
                                                                        <span className="text-danger">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <CustomSelect
                                                                    options={CarType}
                                                                    className="select d-flex"
                                                                    placeholder="Select"
                                                                    onChange={(opt: unknown) => {
                                                                        const label = (opt as { label?: unknown })?.label;
                                                                        setCarType(typeof label === "string" ? label : String(label ?? ""));
                                                                    }}
                                                                />
                                                                {step1Touched && !carType.trim() && (
                                                                    <div className="text-danger fs-12 mt-1">Car Type is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <label className="form-label">
                                                                        Brand{" "}
                                                                        <span className="text-danger">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                                <CustomSelect
                                                                    options={
                                                                        Brand
                                                                    }
                                                                    className="select d-flex"
                                                                    placeholder="Select"
                                                                    onChange={(
                                                                        opt: unknown,
                                                                    ) => {
                                                                        const label =
                                                                            (
                                                                                opt as {
                                                                                    label?: unknown;
                                                                                }
                                                                            )
                                                                                ?.label;
                                                                        setBrand(
                                                                            typeof label ===
                                                                                "string"
                                                                                ? label
                                                                                : String(
                                                                                      label ??
                                                                                          "",
                                                                                  ),
                                                                        );
                                                                    }}
                                                                />
                                                                {step1Touched && !brand.trim() && (
                                                                    <div className="text-danger fs-12 mt-1">Brand is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <label className="form-label">
                                                                        Model{" "}
                                                                        <span className="text-danger">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                </div>

                                                                <CustomSelect
                                                                    options={CarModal}
                                                                    className="select d-flex"
                                                                    placeholder="Select"
                                                                    onChange={(opt: unknown) => {
                                                                        const label = (opt as { label?: unknown })?.label;
                                                                        setCarModel(typeof label === "string" ? label : String(label ?? ""));
                                                                    }}
                                                                />
                                                                {step1Touched && !carModel.trim() && (
                                                                    <div className="text-danger fs-12 mt-1">Model is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Category{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>

                                                                <CustomSelect
                                                                    options={CarModal}
                                                                    className="select d-flex"
                                                                    placeholder="Select"
                                                                    onChange={(opt: unknown) => {
                                                                        const label = (opt as { label?: unknown })?.label;
                                                                        setCategory(typeof label === "string" ? label : String(label ?? ""));
                                                                    }}
                                                                />
                                                                {step1Touched && !category.trim() && (
                                                                    <div className="text-danger fs-12 mt-1">Category is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Plate Number{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className={`form-control ${step1Touched && !plateNumber.trim() ? "is-invalid" : ""}`}
                                                                    value={plateNumber}
                                                                    onChange={e => setPlateNumber(e.target.value)}
                                                                    placeholder="e.g. MH12AB1234"
                                                                />
                                                                {step1Touched && !plateNumber.trim() && (
                                                                    <div className="invalid-feedback">Plate Number is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">Car Number</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={carNumber}
                                                                    onChange={e => setCarNumber(e.target.value)}
                                                                    placeholder="e.g. internal fleet ID"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Location{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>

                                                                <CustomSelect
                                                                    options={MainLocation}
                                                                    className="select d-flex"
                                                                    placeholder="Select"
                                                                    onChange={(opt: unknown) => {
                                                                        const label = (opt as { label?: unknown })?.label;
                                                                        setLocation(typeof label === "string" ? label : String(label ?? ""));
                                                                    }}
                                                                />
                                                                {step1Touched && !location.trim() && (
                                                                    <div className="text-danger fs-12 mt-1">Location is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Fuel{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <CustomSelect
                                                                    options={
                                                                        Fuel
                                                                    }
                                                                    className="select d-flex"
                                                                    placeholder="Select"
                                                                    onChange={(
                                                                        opt: unknown,
                                                                    ) => {
                                                                        const label =
                                                                            (
                                                                                opt as {
                                                                                    label?: unknown;
                                                                                }
                                                                            )
                                                                                ?.label;
                                                                        setFuelLabel(
                                                                            typeof label ===
                                                                                "string"
                                                                                ? label
                                                                                : String(
                                                                                      label ??
                                                                                          "",
                                                                                  ),
                                                                        );
                                                                    }}
                                                                />
                                                                {step1Touched && !fuelLabel.trim() && (
                                                                    <div className="text-danger fs-12 mt-1">Fuel is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">Odometer</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Color{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <Select
                                                                    style={{
                                                                        width: "100%",
                                                                    }}
                                                                    placeholder="select one Color"
                                                                    className="Select"
                                                                    defaultValue={
                                                                        "Red"
                                                                    }
                                                                    options={
                                                                        options
                                                                    }
                                                                    onChange={value =>
                                                                        setColor(
                                                                            value,
                                                                        )
                                                                    }
                                                                    optionRender={option => (
                                                                        <>
                                                                            <span>
                                                                                <span
                                                                                    className={`color-icon bg-${option.data.bg}`}></span>
                                                                                {
                                                                                    option
                                                                                        .data
                                                                                        .label
                                                                                }
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
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <div className="input-icon-end position-relative">
                                                                    <DatePicker
                                                                        picker="year"
                                                                        className="form-control datetimepicker"
                                                                        placeholder="yyyy"
                                                                        onChange={(
                                                                            _,
                                                                            dateString,
                                                                        ) => {
                                                                            const year =
                                                                                Number(
                                                                                    dateString,
                                                                                );
                                                                            setModelYear(
                                                                                Number.isFinite(
                                                                                    year,
                                                                                )
                                                                                    ? year
                                                                                    : null,
                                                                            );
                                                                        }}
                                                                    />
                                                                    <span className="input-icon-addon">
                                                                        <i className="ti ti-calendar" />
                                                                    </span>
                                                                </div>
                                                                {step1Touched && !modelYear && (
                                                                    <div className="text-danger fs-12 mt-1">Year of Car is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Transmission{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>

                                                                <CustomSelect
                                                                    options={
                                                                        Transmission
                                                                    }
                                                                    className="select d-flex"
                                                                    placeholder="Select"
                                                                    onChange={(
                                                                        opt: unknown,
                                                                    ) => {
                                                                        const label =
                                                                            (
                                                                                opt as {
                                                                                    label?: unknown;
                                                                                }
                                                                            )
                                                                                ?.label;
                                                                        setTransmissionLabel(
                                                                            typeof label ===
                                                                                "string"
                                                                                ? label
                                                                                : String(
                                                                                      label ??
                                                                                          "",
                                                                                  ),
                                                                        );
                                                                    }}
                                                                />
                                                                {step1Touched && !transmissionLabel.trim() && (
                                                                    <div className="text-danger fs-12 mt-1">Transmission is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    No of Seats{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <CustomSelect
                                                                    options={
                                                                        Seater
                                                                    }
                                                                    className="select d-flex"
                                                                    placeholder="Select"
                                                                    onChange={(
                                                                        opt: unknown,
                                                                    ) => {
                                                                        const labelValue =
                                                                            (
                                                                                opt as {
                                                                                    label?: unknown;
                                                                                }
                                                                            )
                                                                                ?.label;
                                                                        const label =
                                                                            typeof labelValue ===
                                                                            "string"
                                                                                ? labelValue
                                                                                : String(
                                                                                      labelValue ??
                                                                                          "",
                                                                                  );
                                                                        const parsed =
                                                                            Number(
                                                                                label.split(
                                                                                    " ",
                                                                                )[0],
                                                                            );
                                                                        setSeating(
                                                                            Number.isFinite(
                                                                                parsed,
                                                                            )
                                                                                ? parsed
                                                                                : null,
                                                                        );
                                                                    }}
                                                                />
                                                                {step1Touched && !seating && (
                                                                    <div className="text-danger fs-12 mt-1">No of Seats is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  No of Doors
                                </label>
                                <CustomSelect
                                  options={Doors}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                            </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    No of Air
                                                                    Bags{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className={`form-control ${step1Touched && !airBags.trim() ? "is-invalid" : ""}`}
                                                                    value={airBags}
                                                                    onChange={e => setAirBags(e.target.value)}
                                                                    placeholder="e.g. 6"
                                                                />
                                                                {step1Touched && !airBags.trim() && (
                                                                    <div className="invalid-feedback">No of Air Bags is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Description{" "}
                                                                    <span className="text-danger">*</span>
                                                                </label>
                                                                <textarea
                                                                    rows={4}
                                                                    className={`form-control ${step1Touched && !description.trim() ? "is-invalid" : ""}`}
                                                                    value={description}
                                                                    onChange={e => setDescription(e.target.value)}
                                                                    placeholder="Describe the car..."
                                                                />
                                                                {step1Touched && !description.trim() && (
                                                                    <div className="invalid-feedback">Description is required.</div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end pt-3">
                                            <button
                                                type="button"
                                                className="btn btn-light d-flex align-items-center me-2">
                                                <i className="ti ti-chevron-left me-1" />
                                                Cancel
                                            </button>
                                            <button
                                                className="btn btn-primary wizard-next d-flex align-items-center"
                                                type="button"
                                                onClick={handleNext}>
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
                                                    <h6 className="mb-1">
                                                        Features &amp; Amenities
                                                    </h6>
                                                    <p>
                                                        Add Information About
                                                        Car
                                                    </p>
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
                                                                        checked={
                                                                            allFeaturesSelected
                                                                        }
                                                                        onChange={e =>
                                                                            toggleAllFeatures(
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="select-all1">
                                                                        Check
                                                                        All
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
                                                                        value="Air Condition"
                                                                        checked={selectedFeatures.includes(
                                                                            "Air Condition",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Air Condition",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity">
                                                                        Air
                                                                        Condition
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
                                                                        value="Climate Control"
                                                                        checked={selectedFeatures.includes(
                                                                            "Climate Control",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Climate Control",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity1">
                                                                        Climate
                                                                        Control
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity2"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity2">
                                                                        Climate
                                                                        Control
                                                                        Two
                                                                        Zones
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity3"
                                                                        value="Luxury Climate Control"
                                                                        checked={selectedFeatures.includes(
                                                                            "Luxury Climate Control",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Luxury Climate Control",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity3">
                                                                        Luxury
                                                                        Climate
                                                                        Control
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
                                                                        value="Sunroof"
                                                                        checked={selectedFeatures.includes(
                                                                            "Sunroof",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Sunroof",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity4">
                                                                        Sunroof
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity5"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity5">
                                                                        Panoramic
                                                                        Sunroof
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity6"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity6">
                                                                        Moonroof
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity7"
                                                                        value="Push-button Start"
                                                                        checked={selectedFeatures.includes(
                                                                            "Push-button Start",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Push-button Start",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity7">
                                                                        Push-button
                                                                        Start
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity8"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity8">
                                                                        Keyless
                                                                        Access
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
                                                                        id="amenity9"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity9">
                                                                        Rear
                                                                        Parking
                                                                        Sensors
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity10"
                                                                        value="Parking Sensors"
                                                                        checked={selectedFeatures.includes(
                                                                            "Parking Sensors",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Parking Sensors",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity10">
                                                                        Parking
                                                                        Sensors
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity11"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity11">
                                                                        Built-in
                                                                        Sat Nav
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
                                                                        id="amenity12"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity12">
                                                                        Mobile
                                                                        Phone
                                                                        Technology
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity13"
                                                                        value="Bluetooth"
                                                                        checked={selectedFeatures.includes(
                                                                            "Bluetooth",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Bluetooth",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity13">
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
                                                                        value="Usb"
                                                                        checked={selectedFeatures.includes(
                                                                            "Usb",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Usb",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity14">
                                                                        Usb
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity15"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity15">
                                                                        Qi
                                                                        Wireless
                                                                        Charging
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
                                                                        id="amenity16"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity16">
                                                                        Audio/ipod
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity17"
                                                                        value="Cruise Control"
                                                                        checked={selectedFeatures.includes(
                                                                            "Cruise Control",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Cruise Control",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity17">
                                                                        Cruise
                                                                        Control
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity18"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity18">
                                                                        Adaptive
                                                                        Cruise
                                                                        Control
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
                                                                        id="amenity19"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity19">
                                                                        Apple
                                                                        Carplay
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity20"
                                                                        value="Android Auto"
                                                                        checked={selectedFeatures.includes(
                                                                            "Android Auto",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "Android Auto",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity20">
                                                                        Android
                                                                        Auto
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity21"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity21">
                                                                        Forward
                                                                        Collision
                                                                        Warning
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
                                                                        id="amenity22"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity22">
                                                                        Lane
                                                                        Departure
                                                                        Warning
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
                                                                        id="amenity23"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity23">
                                                                        Automatic
                                                                        Emergency
                                                                        Braking
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
                                                                        id="amenity24"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity24">
                                                                        Active
                                                                        Parking
                                                                        Assist
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
                                                                        id="amenity25"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity25">
                                                                        Automatic
                                                                        High
                                                                        Beams
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
                                                                        id="amenity26"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity26">
                                                                        Adaptive
                                                                        Headlights
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity27"
                                                                        value="360-degree Camera"
                                                                        checked={selectedFeatures.includes(
                                                                            "360-degree Camera",
                                                                        )}
                                                                        onChange={e =>
                                                                            toggleFeature(
                                                                                "360-degree Camera",
                                                                                e
                                                                                    .target
                                                                                    .checked,
                                                                            )
                                                                        }
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity27">
                                                                        360-degree
                                                                        Camera
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check form-checkbox mb-0">
                                                                    <input
                                                                        className="form-check-input"
                                                                        type="checkbox"
                                                                        id="amenity29"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity29">
                                                                        Rearview
                                                                        Camera
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
                                                                        id="amenity30"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity30">
                                                                        Towing
                                                                        Hook
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
                                                                        id="amenity31"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity31">
                                                                        Leather
                                                                        Interior
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
                                                                        id="amenity32"
                                                                    />
                                                                    <label
                                                                        className="form-check-label"
                                                                        htmlFor="amenity32">
                                                                        Fabric
                                                                        Interior
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end pt-3">
                                            <button
                                                type="button"
                                                className="btn btn-outline-light border wizard-prev me-2"
                                                onClick={handlePrev}>
                                                <i className="ti ti-chevron-left me-1" />
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="btn btn-primary wizard-next d-flex align-items-center">
                                                Add Tariff &amp; Pricing
                                                <i className="ti ti-chevron-right ms-1" />
                                            </button>
                                        </div>
                                    </form>
                                </fieldset>
                            )}
                            {currentStep === 3 && (
                                <fieldset style={{ display: "block" }}>
                                    <form>
                                        <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                                            <h4 className="d-flex align-items-center">
                                                <i className="ti ti-files text-secondary me-2" />
                                                Pricing{" "}
                                                {/* &amp; Tariff{" "} */}
                                            </h4>
                                        </div>
                                        <div className="border-bottom mb-4 pb-2 unlimited-price">
                                            <div className="row row-gap-4">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">
                                                        Pricing
                                                    </h6>
                                                    <p>Add Pricing for Cars</p>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Pricing Type{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
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
                                                                            htmlFor="price">
                                                                            Hourly
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
                                                                            htmlFor="price1">
                                                                            Daily
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
                                                                            htmlFor="price2">
                                                                            Weekly
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
                                                                            htmlFor="price3">
                                                                            Monthly
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Hourly Price{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={hourPrice}
                                                                    onChange={e => setHourPrice(e.target.value)}
                                                                    placeholder="₹ 0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Daily Price{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={dayPrice}
                                                                    onChange={e => setDayPrice(e.target.value)}
                                                                    placeholder="₹ 0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Weekly Price{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={weekPrice}
                                                                    onChange={e => setWeekPrice(e.target.value)}
                                                                    placeholder="₹ 0"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-3 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">
                                                                    Monthly Price{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={monthPrice}
                                                                    onChange={e => setMonthPrice(e.target.value)}
                                                                    placeholder="₹ 0"
                                                                />
                                                            </div>
                                                        </div>
                                                        {step3Touched && !hourPrice && !dayPrice && !weekPrice && !monthPrice && (
                                                            <div className="col-12">
                                                                <p className="text-danger fs-13">Please enter at least one price to continue.</p>
                                                            </div>
                                                        )}
                                                        {/* <div className="col-lg-6 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <label className="form-label">
                                                                        Base
                                                                        Kilometers
                                                                        (Per
                                                                        Day){" "}
                                                                        <span className="text-danger">
                                                                            *
                                                                        </span>
                                                                    </label>
                                                                    <div className="form-check unlimited-checkbox mb-2">
                                                                        <input
                                                                            className="form-check-input"
                                                                            type="checkbox"
                                                                            id="unlimited"
                                                                        />
                                                                        <label
                                                                            className="form-check-label"
                                                                            htmlFor="unlimited">
                                                                            Unlimited
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="mb-3 unlimited-wrap">
                                                                <label className="form-label">
                                                                    Kilometers
                                                                    Extra Price{" "}
                                                                    <span className="text-danger">
                                                                        *
                                                                    </span>
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                />
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="border-bottom mb-4 pb-2">
                                            <div className="row row-gap-4">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">
                                                        Tarrif
                                                    </h6>
                                                    <p>
                                                        Add Tariff Pricing for
                                                        Cars
                                                    </p>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                                        <Link
                                                            to="#"
                                                            className="btn btn-dark btn-md d-flex align-items-center"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#add-tarrif">
                                                            <i className="ti ti-plus me-1" />
                                                            Add New Tarrif Rate
                                                        </Link>
                                                    </div>
                                                    <div className="empty-data bg-light text-center mb-3">
                                                        <p className="fw-medium">
                                                            No Data Added
                                                        </p>
                                                    </div>
                                                    <div className="card bg-light mb-3">
                                                        <div className="card-body pb-3">
                                                            <h6 className="mb-3">
                                                                Total Tariffs :
                                                                21
                                                            </h6>
                                                            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
                                                                <div>
                                                                    <h6 className="fs-14 fw-semibold mb-1">
                                                                        4 to 5
                                                                        Days
                                                                    </h6>
                                                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                        <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                                                            Daily
                                                                            Price
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                $50
                                                                            </span>
                                                                        </p>
                                                                        <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                                                            Base
                                                                            Kilometers
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                25
                                                                            </span>
                                                                        </p>
                                                                        <p className="fs-13 fw-medium mb-0">
                                                                            Kilometers
                                                                            Extra
                                                                            Price
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                $200
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center icon-list">
                                                                    <Link
                                                                        to="#"
                                                                        className="edit-icon me-2"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit-tarrif">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="trash-icon"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#delete_tarrif">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border p-20 br-5 mb-1">
                                                                <div>
                                                                    <h6 className="fs-14 fw-semibold mb-1">
                                                                        5 to 8
                                                                        Days
                                                                    </h6>
                                                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                        <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                                                            Daily
                                                                            Price
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                $80
                                                                            </span>
                                                                        </p>
                                                                        <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                                                            Base
                                                                            Kilometers
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                15
                                                                            </span>
                                                                        </p>
                                                                        <p className="fs-13 fw-medium mb-0">
                                                                            Kilometers
                                                                            Extra
                                                                            Price
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                $150
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center icon-list">
                                                                    <Link
                                                                        to="#"
                                                                        className="edit-icon me-2"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit-tarrif">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="trash-icon"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#delete_tarrif">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="border-bottom mb-2 pb-2">
                                            <div className="row row-gap-4">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">Seasonal Pricing</h6>
                                                    <p>Add Seasonal Pricing for Car</p>
                                                </div>
                                                <div className="col-xl-9">
                                                    {/* Add / Edit form */}
                                                    {showSeasonalForm && (
                                                        <div className="card bg-light mb-3">
                                                            <div className="card-body">
                                                                <h6 className="mb-3">{editingSeasonalIdx !== null ? "Edit" : "Add"} Seasonal Pricing</h6>
                                                                <div className="row row-gap-3">
                                                                    <div className="col-md-12">
                                                                        <label className="form-label">Season Name <span className="text-danger">*</span></label>
                                                                        <input type="text" className="form-control" placeholder="e.g. Diwali, Christmas" value={seasonalForm.name} onChange={e => handleSeasonalFormChange("name", e.target.value)} />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label className="form-label">Start Date <span className="text-danger">*</span></label>
                                                                        <input type="date" className="form-control" value={seasonalForm.startDate} onChange={e => handleSeasonalFormChange("startDate", e.target.value)} />
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <label className="form-label">End Date <span className="text-danger">*</span></label>
                                                                        <input type="date" className="form-control" value={seasonalForm.endDate} onChange={e => handleSeasonalFormChange("endDate", e.target.value)} />
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Hourly Rate (₹)</label>
                                                                        <input type="number" className="form-control" placeholder="0" value={seasonalForm.hourPrice} onChange={e => handleSeasonalFormChange("hourPrice", e.target.value)} />
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Daily Rate (₹)</label>
                                                                        <input type="number" className="form-control" placeholder="0" value={seasonalForm.dayPrice} onChange={e => handleSeasonalFormChange("dayPrice", e.target.value)} />
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Weekly Rate (₹)</label>
                                                                        <input type="number" className="form-control" placeholder="0" value={seasonalForm.weekPrice} onChange={e => handleSeasonalFormChange("weekPrice", e.target.value)} />
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <label className="form-label">Monthly Rate (₹)</label>
                                                                        <input type="number" className="form-control" placeholder="0" value={seasonalForm.monthPrice} onChange={e => handleSeasonalFormChange("monthPrice", e.target.value)} />
                                                                    </div>
                                                                    <div className="col-12 d-flex gap-2 mt-1">
                                                                        <button type="button" className="btn btn-primary btn-sm" onClick={handleAddSeasonal} disabled={!seasonalForm.name || !seasonalForm.startDate || !seasonalForm.endDate}>
                                                                            {editingSeasonalIdx !== null ? "Update" : "Add"}
                                                                        </button>
                                                                        <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => { setShowSeasonalForm(false); setSeasonalForm(emptySeasonalForm); setEditingSeasonalIdx(null); }}>
                                                                            Cancel
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* List */}
                                                    {seasonalPricings.length === 0 && !showSeasonalForm && (
                                                        <div className="empty-data bg-light text-center p-3 mb-3 br-5">
                                                            <p className="fw-medium mb-0 text-muted">No seasonal pricing added yet</p>
                                                        </div>
                                                    )}
                                                    {seasonalPricings.map((sp, idx) => (
                                                        <div key={idx} className="card bg-light mb-2">
                                                            <div className="card-body pb-3">
                                                                <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20">
                                                                    <div>
                                                                        <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                                                            {sp.name}
                                                                            <span className="badge bg-secondary-transparent ms-2 fs-12">
                                                                                {new Date(sp.startDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })} – {new Date(sp.endDate).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                                                                            </span>
                                                                        </h6>
                                                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                            {sp.hourPrice && <p className="fs-13 fw-medium border-end pe-2 mb-0">Hourly : <span className="text-gray-9">₹{sp.hourPrice}</span></p>}
                                                                            {sp.dayPrice && <p className="fs-13 fw-medium border-end pe-2 mb-0">Daily : <span className="text-gray-9">₹{sp.dayPrice}</span></p>}
                                                                            {sp.weekPrice && <p className="fs-13 fw-medium border-end pe-2 mb-0">Weekly : <span className="text-gray-9">₹{sp.weekPrice}</span></p>}
                                                                            {sp.monthPrice && <p className="fs-13 fw-medium mb-0">Monthly : <span className="text-gray-9">₹{sp.monthPrice}</span></p>}
                                                                        </div>
                                                                    </div>
                                                                    <div className="d-flex align-items-center icon-list gap-2">
                                                                        <button type="button" className="edit-icon btn btn-sm btn-outline-primary p-1" onClick={() => handleEditSeasonal(idx)}>
                                                                            <i className="ti ti-edit" />
                                                                        </button>
                                                                        <button type="button" className="btn btn-sm btn-outline-danger p-1" onClick={() => handleDeleteSeasonal(idx)}>
                                                                            <i className="ti ti-trash" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    {!showSeasonalForm && (
                                                        <button type="button" className="btn btn-dark btn-md d-flex align-items-center mt-2" onClick={() => setShowSeasonalForm(true)}>
                                                            <i className="ti ti-plus me-1" />
                                                            Add Seasonal Pricing
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="border-bottom mb-2 pb-2">
                                            <div className="row row-gap-4">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">
                                                        Insurance
                                                    </h6>
                                                    <p>Add Insurance for Car</p>
                                                </div>
                                                <div className="col-xl-9">
                                                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                                        <Link
                                                            to="#"
                                                            className="btn btn-dark btn-md d-flex align-items-center"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#select_insurance">
                                                            <i className="ti ti-plus me-1" />
                                                            Select New Insurance
                                                        </Link>
                                                    </div>
                                                    <div className="empty-data bg-light text-center mb-3">
                                                        <p className="fw-medium">
                                                            No Data Added
                                                        </p>
                                                    </div>
                                                    <div className="card bg-light mb-3">
                                                        <div className="card-body pb-3">
                                                            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
                                                                <div>
                                                                    <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                                                        Full
                                                                        Premium
                                                                        Insurance
                                                                    </h6>
                                                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                        <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                                                            Price
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                $200
                                                                            </span>
                                                                        </p>
                                                                        <p className="fs-13 fw-medium mb-0">
                                                                            Benefits
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                04
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center icon-list">
                                                                    <Link
                                                                        to="#"
                                                                        className="edit-icon me-2"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit_insurance">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="trash-icon"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#delete_insurance">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-1">
                                                                <div>
                                                                    <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                                                                        Roadside
                                                                        Assistance{" "}
                                                                    </h6>
                                                                    <div className="d-flex align-items-center gap-2 flex-wrap">
                                                                        <p className="fs-13 fw-medium border-end pe-2 mb-0">
                                                                            Price
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                $250
                                                                            </span>
                                                                        </p>
                                                                        <p className="fs-13 fw-medium mb-0">
                                                                            Benefits
                                                                            :{" "}
                                                                            <span className="text-gray-9">
                                                                                06
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center icon-list">
                                                                    <Link
                                                                        to="#"
                                                                        className="edit-icon me-2"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#edit_insurance">
                                                                        <i className="ti ti-edit" />
                                                                    </Link>
                                                                    <Link
                                                                        to="#"
                                                                        className="trash-icon"
                                                                        data-bs-toggle="modal"
                                                                        data-bs-target="#delete_insurance">
                                                                        <i className="ti ti-trash" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="d-flex align-items-center justify-content-end pt-3">
                                            <button
                                                type="button"
                                                className="btn btn-outline-light border wizard-prev me-2"
                                                onClick={handlePrev}>
                                                <i className="ti ti-chevron-left me-1" />
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="btn btn-primary wizard-next d-flex align-items-center">
                                                Add Extra Services
                                                <i className="ti ti-chevron-right ms-1" />
                                            </button>
                                        </div>
                                    </form>
                                </fieldset>
                            )}
                            {/* currentStep === 4 && (
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
                                                    data-bs-target="#edit_price">
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
                                                                <p className="fs-13">
                                                                    Using GPS
                                                                    while travel
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Wi-Fi
                                                                    Hotspot
                                                                </h6>
                                                                <p className="fs-13">
                                                                    Constant
                                                                    portable
                                                                    internet
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                One time
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Child Safety
                                                                    Seats
                                                                </h6>
                                                                <p className="fs-13">
                                                                    Secure
                                                                    infant/toddler
                                                                    car seat
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Fuel
                                                                    Pre-Purchase
                                                                </h6>
                                                                <p className="fs-13">
                                                                    Full tank,
                                                                    return
                                                                    hassle-free
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Roadside
                                                                    Assistance
                                                                </h6>
                                                                <p className="fs-13">
                                                                    24/7
                                                                    emergency
                                                                    car support
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Satellite
                                                                    Radio
                                                                </h6>
                                                                <p className="fs-13">
                                                                    {" "}
                                                                    Unlimited
                                                                    premium
                                                                    music
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Fast
                                                                    charging for
                                                                    devices
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Express
                                                                    Check-in/out
                                                                </h6>
                                                                <p className="fs-13">
                                                                    Fast pickup
                                                                    &amp; return
                                                                    process
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                <p className="fs-13">
                                                                    Skip toll
                                                                    booth lines
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Full
                                                                    coverage
                                                                    protection
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
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
                                                                    Records
                                                                    trips extra
                                                                    security
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="fs-13 mb-1">
                                                                Per Day
                                                            </p>
                                                            <h6 className="fs-14 fw-semibold">
                                                                $10
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-end pt-3">
                                            <button
                                                type="button"
                                                className="btn btn-outline-light border wizard-prev me-2"
                                                onClick={handlePrev}>
                                                <i className="ti ti-chevron-left me-1" />
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="btn btn-primary wizard-next d-flex align-items-center">
                                                Uploads
                                                <i className="ti ti-chevron-right ms-1" />
                                            </button>
                                        </div>
                                    </form>
                                </fieldset>
                            ) */}
                            {currentStep === 4 && (
                                <fieldset style={{ display: "block" }}>
                                    <form>
                                        <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                                            <h4 className="d-flex align-items-center">
                                                <i className="ti ti-photo text-secondary me-2" />
                                                Uploads &amp; Policies
                                            </h4>
                                        </div>

                                        {/* ── Car Images ── */}
                                        <div className="border-bottom mb-4 pb-4">
                                            <div className="row row-gap-4">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">Car Images</h6>
                                                    <p>Upload multiple images of your Car</p>
                                                </div>
                                                <div className="col-xl-9">
                                                    <label style={{ display: "block", cursor: "pointer" }}>
                                                        <div className="document-upload text-center bg-light br-5 mb-3">
                                                            <ImageWithBasePath
                                                                src="assets/admin/img/icons/upload-icon.svg"
                                                                alt="img"
                                                                className="mb-2"
                                                            />
                                                            <p className="mb-2">
                                                                Drop images here or{" "}
                                                                <span className="text-info text-decoration-underline">
                                                                    Browse
                                                                </span>
                                                            </p>
                                                            <p className="fs-12 mb-0">Maximum size 10mb each</p>
                                                            <input
                                                                type="file"
                                                                className="form-control image-sign"
                                                                multiple
                                                                accept="image/jpeg,image/png,image/webp"
                                                                style={{ display: "none" }}
                                                                onChange={e => {
                                                                    if (e.target.files) {
                                                                        const files = Array.from(e.target.files);
                                                                        setImageFiles(prev => [...prev, ...files]);
                                                                        const newPreviews = files.map(f => URL.createObjectURL(f));
                                                                        setImagePreviews(prev => [...prev, ...newPreviews]);
                                                                    }
                                                                }}
                                                            />
                                                        </div>
                                                    </label>
                                                    <p className="fs-13 text-muted mb-3">Formats: JPG, PNG, WEBP · Max 10MB each</p>

                                                    {/* Image preview grid */}
                                                    {imagePreviews.length > 0 && (
                                                        <div className="d-flex flex-wrap gap-2">
                                                            {imagePreviews.map((src, idx) => (
                                                                <div key={idx} style={{ position: "relative", width: 90, height: 90 }}>
                                                                    <img
                                                                        src={src}
                                                                        alt={`preview-${idx}`}
                                                                        style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 6, border: "1px solid #dee2e6" }}
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => {
                                                                            setImageFiles(prev => prev.filter((_, i) => i !== idx));
                                                                            setImagePreviews(prev => prev.filter((_, i) => i !== idx));
                                                                        }}
                                                                        style={{
                                                                            position: "absolute", top: 2, right: 2,
                                                                            background: "rgba(220,53,69,0.85)", border: "none",
                                                                            borderRadius: "50%", width: 20, height: 20,
                                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                                            cursor: "pointer", padding: 0, color: "#fff", fontSize: 11,
                                                                        }}
                                                                    >
                                                                        <i className="ti ti-x" />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* ── Car Documents ── */}
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
                                                            <div className="document-upload text-center bg-light br-5 mb-3">
                                                                <ImageWithBasePath
                                                                    src="assets/admin/img/icons/upload-icon.svg"
                                                                    alt="img"
                                                                    className="mb-2"
                                                                />
                                                                <p className="mb-2">
                                                                    Drop your files here or{" "}
                                                                    <span className="text-info text-decoration-underline">Browse</span>
                                                                </p>
                                                                <p className="fs-12 mb-0">Maximum size 50mb</p>
                                                                <input
                                                                    type="file"
                                                                    className="form-control image-sign"
                                                                    multiple
                                                                    accept=".pdf,.doc,.docx,.txt"
                                                                    onChange={e => {
                                                                        if (e.target.files) {
                                                                            setDocumentFiles(Array.from(e.target.files));
                                                                        }
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="mb-3">
                                                                <p className="fs-13 mb-1">Upload Insurance, Car Registration, Documents</p>
                                                                <p className="fs-13">Formats PDF, Word</p>
                                                            </div>
                                                            {documentFiles.length > 0 ? (
                                                                documentFiles.map((f, idx) => (
                                                                    <div key={idx} className="d-flex align-items-center justify-content-between bg-white border br-5 gap-3 flex-wrap p-20 mb-2">
                                                                        <div className="d-flex align-items-center">
                                                                            <span>
                                                                                <ImageWithBasePath src="assets/admin/img/icons/pdf-icon.svg" alt="img" />
                                                                            </span>
                                                                            <div className="ms-2">
                                                                                <h6 className="fs-14 fw-medium">{f.name}</h6>
                                                                                <p className="fs-13">{(f.size / 1024).toFixed(2)} KB</p>
                                                                            </div>
                                                                        </div>
                                                                        <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => setDocumentFiles(prev => prev.filter((_, i) => i !== idx))}>
                                                                            <i className="ti ti-trash fs-16" />
                                                                        </button>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                <p className="fs-13 text-muted">No documents selected yet.</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="d-flex align-items-center justify-content-end pt-3">
                                            <button
                                                type="button"
                                                onClick={handlePrev}
                                                className="btn btn-outline-light border wizard-prev me-2">
                                                <i className="ti ti-chevron-left me-1" />
                                                Back
                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={handleNext}
                                                                disabled={isSubmitting}
                                                                className="btn btn-primary wizard-next d-flex align-items-center">
                                                                {isSubmitting ? (
                                                                    <>
                                                                        <span className="spinner-border spinner-border-sm me-2" role="status" />
                                                                        Saving...
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <i className="ti ti-check me-1" />
                                                                        Submit &amp; Save
                                                                    </>
                                                                )}
                                                            </button>
                                                        </div>
                                                    </form>
                                                </fieldset>
                                            )}
                                            {/* {currentStep === 5 && (
                                <fieldset style={{ display: "block" }}>
                                    <form>
                                        <div className="filterbox p-20 mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                                            <h4 className="d-flex align-items-center">
                                                <i className="ti ti-id text-secondary me-2" />
                                                Damages
                                            </h4>
                                        </div>
                                        <div className="border-bottom mb-2 pb-4">
                                            <div className="row row-gap-4">
                                                <div className="col-xl-3">
                                                    <h6 className="mb-1">
                                                        Damages
                                                    </h6>
                                                    <p>Add Damages On Car</p>
                                                </div>
                                                <div className="col-xl-9">
                                                    <Link
                                                        to="#"
                                                        className="btn btn-dark btn-md d-inline-flex align-items-center mb-3"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#add-damage">
                                                        <i className="ti ti-plus me-1" />
                                                        Add Damage
                                                    </Link>
                                                    <div className="card border-0 bg-light mb-0">
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
                                                                <h6>
                                                                    Total
                                                                    Damages : 04
                                                                </h6>
                                                            </div>
                                                            <div className="bg-white p-20 br-5 border mb-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-xxl-8 col-md-7">
                                                                        <div className="d-flex align-items-center gap-2 mb-1">
                                                                            <h6 className="fs-14 fw-medium">
                                                                                Scratch
                                                                            </h6>
                                                                            <span className="badge bg-pink-transparent badge-sm">
                                                                                Interior
                                                                            </span>
                                                                        </div>
                                                                        <p className="fs-13">
                                                                            Minor
                                                                            surface
                                                                            marks,
                                                                            often
                                                                            from
                                                                            keys,
                                                                            branches,
                                                                            or
                                                                            road
                                                                            debris.
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                                                                            <p className="mb-0">
                                                                                Added
                                                                                on
                                                                                :
                                                                                15
                                                                                Jan
                                                                                2025
                                                                            </p>
                                                                            <div className="icon-list d-flex align-items-center">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="edit-icon me-2"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#edit-damage">
                                                                                    <i className="ti ti-edit" />
                                                                                </Link>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="trash-icon"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#delete_damage">
                                                                                    <i className="ti ti-trash" />
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-white p-20 br-5 border mb-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-xxl-8 col-md-7">
                                                                        <div className="d-flex align-items-center gap-2 mb-1">
                                                                            <h6 className="fs-14 fw-medium">
                                                                                Dent
                                                                            </h6>
                                                                            <span className="badge bg-secondary-transparent badge-sm">
                                                                                Exterior
                                                                            </span>
                                                                        </div>
                                                                        <p className="fs-13">
                                                                            Cracks,
                                                                            scratches,
                                                                            or
                                                                            faded
                                                                            surfaces
                                                                            due
                                                                            to
                                                                            heat
                                                                            exposure.
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                                                                            <p className="mb-0">
                                                                                Added
                                                                                on
                                                                                :
                                                                                15
                                                                                Jan
                                                                                2025
                                                                            </p>
                                                                            <div className="icon-list d-flex align-items-center">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="edit-icon me-2"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#edit-damage">
                                                                                    <i className="ti ti-edit" />
                                                                                </Link>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="trash-icon"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#delete_damage">
                                                                                    <i className="ti ti-trash" />
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-white p-20 br-5 border mb-2">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-xxl-8 col-md-7">
                                                                        <div className="d-flex align-items-center gap-2 mb-1">
                                                                            <h6 className="fs-14 fw-medium">
                                                                                Crack
                                                                            </h6>
                                                                            <span className="badge bg-pink-transparent badge-sm">
                                                                                Interior
                                                                            </span>
                                                                        </div>
                                                                        <p className="fs-13">
                                                                            Seats,
                                                                            door
                                                                            panels,
                                                                            or
                                                                            carpets
                                                                            with
                                                                            stains,
                                                                            rips,
                                                                            or
                                                                            burns.
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                                                                            <p className="mb-0">
                                                                                Added
                                                                                on
                                                                                :
                                                                                15
                                                                                Jan
                                                                                2025
                                                                            </p>
                                                                            <div className="icon-list d-flex align-items-center">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="edit-icon me-2"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#edit-damage">
                                                                                    <i className="ti ti-edit" />
                                                                                </Link>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="trash-icon"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#delete_damage">
                                                                                    <i className="ti ti-trash" />
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="bg-white p-20 br-5 border mb-0">
                                                                <div className="row align-items-center row-gap-3">
                                                                    <div className="col-xxl-8 col-md-7">
                                                                        <div className="d-flex align-items-center gap-2 mb-1">
                                                                            <h6 className="fs-14 fw-medium">
                                                                                Clip
                                                                            </h6>
                                                                            <span className="badge bg-pink-transparent badge-sm">
                                                                                Interior
                                                                            </span>
                                                                        </div>
                                                                        <p className="fs-13">
                                                                            Non-functional
                                                                            windows,
                                                                            AC,
                                                                            or
                                                                            infotainment
                                                                            system
                                                                            damage.
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-xxl-4 col-md-5">
                                                                        <div className="d-flex align-items-center justify-content-md-end gap-2 flex-wrap">
                                                                            <p className="mb-0">
                                                                                Added
                                                                                on
                                                                                :
                                                                                15
                                                                                Jan
                                                                                2025
                                                                            </p>
                                                                            <div className="icon-list d-flex align-items-center">
                                                                                <Link
                                                                                    to="#"
                                                                                    className="edit-icon me-2"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#edit-damage">
                                                                                    <i className="ti ti-edit" />
                                                                                </Link>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="trash-icon"
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#delete_damage">
                                                                                    <i className="ti ti-trash" />
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
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
                                                onClick={handlePrev}
                                                className="btn btn-outline-light border wizard-prev me-2">
                                                <i className="ti ti-chevron-left me-1" />
                                                Back
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                className="btn btn-primary wizard-next d-flex align-items-center">
                                                Add Faq
                                                <i className="ti ti-chevron-right ms-1" />
                                            </button>
                                        </div>
                                    </form>
                                </fieldset>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>
            <VideoModal
                show={showModal}
                handleClose={handleCloseModal}
                videoUrl={videoUrl}
            />
            <CarBookingModal />
        </>
    );
};

export default AddCar;
