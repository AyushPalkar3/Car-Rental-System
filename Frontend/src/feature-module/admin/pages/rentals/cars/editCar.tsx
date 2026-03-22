import { useMemo, useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import { message } from "antd";
import { Seater } from "../../../common/json/selectOption";
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

const CAR_TYPES   = ["Sedan", "Hatchback", "SUV", "Coupes"];
const FUELS       = ["Petrol", "Diesel", "Electric", "CNG", "Hybrid"];
const TRANSMISSIONS = ["Automatic", "Semi-Automatic", "Manual"];
const LOCATIONS   = ["Johnson Dealer Zone", "Miller Auto Trade Zone", "Thompson Dealer Parking"];

const EditCar = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const carId = searchParams.get("id");

    const [currentStep, setCurrentStep] = useState(1);
    const [loadingCar, setLoadingCar] = useState(false);

    const [step1Touched, setStep1Touched] = useState(false);
    const [step3Touched, setStep3Touched] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    // Owner
    const [ownerType, setOwnerType] = useState<"admin" | "carPartner">("admin");
    const [selectedOwnerId, setSelectedOwnerId] = useState("");
    const [carPartners, setCarPartners] = useState<{ id: string; name: string; phoneNum?: string; email?: string }[]>([]);
    const [adminProfile, setAdminProfile] = useState<{ id: string; name: string; phoneNum?: string } | null>(null);

    // Basic fields
    const [carName, setCarName]               = useState("");
    const [carType, setCarType]               = useState("");
    const [brand, setBrand]                   = useState("");
    const [carModel, setCarModel]             = useState("");
    const [plateNumber, setPlateNumber]       = useState("");
    const [carNumber, setCarNumber]           = useState("");
    const [location, setLocation]             = useState("");
    const [modelYear, setModelYear]           = useState("");
    const [fuelType, setFuelType]             = useState("Petrol");
    const [transmission, setTransmission]     = useState("Automatic");
    const [seating, setSeating]               = useState("");
    const [airBags, setAirBags]               = useState("");
    const [mileageKm, setMileageKm]           = useState("");
    const [color, setColor]                   = useState("White");
    const [description, setDescription]       = useState("");

    // Thumbnail
    const [thumbnailFile, setThumbnailFile]       = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [existingThumbnail, setExistingThumbnail] = useState<string | null>(null);

    // Images
    const [imageFiles, setImageFiles]           = useState<File[]>([]);
    const [imagePreviews, setImagePreviews]     = useState<string[]>([]);
    const [existingImages, setExistingImages]   = useState<string[]>([]);

    // Documents
    const [documentFiles, setDocumentFiles]         = useState<File[]>([]);
    const [existingDocuments, setExistingDocuments] = useState<string[]>([]);

    // Pricing
    const [hourPrice, setHourPrice]   = useState("");
    const [dayPrice, setDayPrice]     = useState("");
    const [weekPrice, setWeekPrice]   = useState("");
    const [monthPrice, setMonthPrice] = useState("");

    // Features
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

    // Seasonal Pricing
    type SeasonalEntry = { name: string; startDate: string; endDate: string; hourPrice: string; dayPrice: string; weekPrice: string; monthPrice: string; };
    const emptySeasonalForm: SeasonalEntry = { name: "", startDate: "", endDate: "", hourPrice: "", dayPrice: "", weekPrice: "", monthPrice: "" };
    const [seasonalPricings, setSeasonalPricings]     = useState<SeasonalEntry[]>([]);
    const [showSeasonalForm, setShowSeasonalForm]     = useState(false);
    const [seasonalForm, setSeasonalForm]             = useState<SeasonalEntry>(emptySeasonalForm);
    const [editingSeasonalIdx, setEditingSeasonalIdx] = useState<number | null>(null);

    const imageBaseUrl = useMemo(() => {
        const base = (import.meta as any)?.env?.VITE_API_BASE_URL_IMAGE;
        return typeof base === "string" ? base.replace(/\/$/, "") : "http://localhost:4000";
    }, []);

    const getImageUrl = (path: string | null | undefined): string => {
        if (!path) return "/assets/admin/img/car/car-01.jpg";
        if (path.startsWith("http")) return path;
        return `${imageBaseUrl}/${path.replace(/^\//, "")}`;
    };

    // Load helpers + car partners
    useEffect(() => {
        carPartnerAPI.getAll().then((res: any) => {
            const list = Array.isArray(res.data) ? res.data : (res.data?.data || []);
            setCarPartners(list);
        }).catch(() => {});
        getAdmin().then((admin: any) => {
            if (admin) setAdminProfile(admin);
        }).catch(() => {});
    }, []);

    // Load car data
    useEffect(() => {
        if (!carId) return;
        setLoadingCar(true);
        adminCarAPI.getCar(carId)
            .then((res: any) => {
                const car = res?.data?.data ?? res?.data ?? null;
                if (!car) return;

                setCarName(car.name ?? "");
                setBrand(car.brand ?? "");
                setCarModel("");
                setLocation(car.location ?? "");
                setModelYear(car.modelYear ? String(car.modelYear) : "");
                setSeating(car.seating ? String(car.seating) : "");
                setColor(car.color ?? "White");
                setDescription(car.description ?? "");
                setMileageKm(car.mileageKm != null ? String(car.mileageKm) : "");
                setAirBags(car.airBags != null ? String(car.airBags) : "");
                setPlateNumber(car.plateNumber ?? "");
                setCarNumber(car.carNumber ?? "");

                // Enums → display
                const txMap: Record<string, string> = { AUTO: "Automatic", SEMI_AUTO: "Semi-Automatic", MANUAL: "Manual" };
                const fuelMap: Record<string, string> = { PETROL: "Petrol", DIESEL: "Diesel", ELECTRIC: "Electric", CNG: "CNG", HYBRID: "Hybrid" };
                setTransmission(txMap[car.transmission] ?? "Automatic");
                setFuelType(fuelMap[car.fuelType] ?? "Petrol");
                setCarType(car.carType ?? car.category ?? "");

                // Owner
                if (car.partnerId) { setOwnerType("carPartner"); setSelectedOwnerId(car.partnerId); }
                else if (car.adminId) { setOwnerType("admin"); setSelectedOwnerId(car.adminId); }

                // Images
                if (car.thumbnail) {
                    const url = getImageUrl(car.thumbnail);
                    setExistingThumbnail(url);
                    setThumbnailPreview(url);
                }
                if (Array.isArray(car.images)) setExistingImages(car.images);
                if (Array.isArray(car.documents)) setExistingDocuments(car.documents);

                // Features
                if (Array.isArray(car.features)) setSelectedFeatures(car.features.filter((f: any) => typeof f === "string"));

                // Pricing
                if (Array.isArray(car.pricing)) {
                    for (const p of car.pricing) {
                        if (p.duration === "HOUR") setHourPrice(String(p.price));
                        if (p.duration === "DAY")  setDayPrice(String(p.price));
                        if (p.duration === "WEEK") setWeekPrice(String(p.price));
                        if (p.duration === "MONTH") setMonthPrice(String(p.price));
                    }
                }

                // Seasonal pricing
                if (Array.isArray(car.seasonalPricing) && car.seasonalPricing.length > 0) {
                    setSeasonalPricings(car.seasonalPricing.map((s: any) => ({
                        name: s.name ?? "",
                        startDate: s.startDate ? s.startDate.split("T")[0] : "",
                        endDate: s.endDate ? s.endDate.split("T")[0] : "",
                        hourPrice: s.hourPrice != null ? String(s.hourPrice) : "",
                        dayPrice: s.dayPrice != null ? String(s.dayPrice) : "",
                        weekPrice: s.weekPrice != null ? String(s.weekPrice) : "",
                        monthPrice: s.monthPrice != null ? String(s.monthPrice) : "",
                    })));
                }

                setIsVerified(!!car.isVerified);
            })
            .catch(() => message.error("Failed to load car data."))
            .finally(() => setLoadingCar(false));
    }, [carId]);

    // Open last step when coming from list (Verify) or ?step=4
    useEffect(() => {
        if (loadingCar || !carId) return;
        const step = searchParams.get("step");
        const verify = searchParams.get("verify");
        if (step === "4" || verify === "1") setCurrentStep(4);
    }, [loadingCar, carId, searchParams]);

    const toTransmissionEnum = (label: string) => ({ Automatic: "AUTO", "Semi-Automatic": "SEMI_AUTO", Manual: "MANUAL" } as Record<string, string>)[label] ?? "AUTO";
    const toFuelEnum = (label: string) => ({ Petrol: "PETROL", Diesel: "DIESEL", Electric: "ELECTRIC", CNG: "CNG", Hybrid: "HYBRID" } as Record<string, string>)[label] ?? "PETROL";

    const allFeaturesSelected = selectedFeatures.length === AMENITY_OPTIONS.length;
    const toggleFeature = (label: string, checked: boolean) =>
        setSelectedFeatures(prev => checked ? Array.from(new Set([...prev, label])) : prev.filter(x => x !== label));
    const toggleAll = (checked: boolean) => setSelectedFeatures(checked ? [...AMENITY_OPTIONS] : []);

    const handleSeasonalFormChange = (field: keyof SeasonalEntry, value: string) =>
        setSeasonalForm(prev => ({ ...prev, [field]: value }));

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

    const submitCar = async () => {
        if (!carId) { message.error("No car ID."); return; }
        try {
            setIsSubmitting(true);
            const fd = new FormData();
            fd.append("name", carName);
            fd.append("brand", brand);
            fd.append("modelYear", modelYear);
            fd.append("category", carType);
            fd.append("location", location);
            fd.append("transmission", toTransmissionEnum(transmission));
            fd.append("fuelType", toFuelEnum(fuelType));
            fd.append("powerType", "POWER");
            fd.append("description", description.trim() || carModel.trim());
            fd.append("mileageKm", mileageKm || "0");
            fd.append("seating", seating || "0");
            fd.append("plateNumber", plateNumber);
            fd.append("carNumber", carNumber);
            fd.append("airBags", airBags.trim() === "" ? "" : airBags);
            fd.append("color", color);
            fd.append("hexCode", "#000000");
            fd.append("features", JSON.stringify(selectedFeatures));
            fd.append("specifications", JSON.stringify([]));
            fd.append("ownerType", ownerType);
            fd.append("selectedOwnerId", selectedOwnerId);
            fd.append("isVerified", isVerified ? "true" : "false");

            const pricing: Array<{ duration: string; price: number }> = [];
            const pushRate = (raw: string, duration: string) => {
                const t = String(raw ?? "").trim();
                if (t === "") return;
                const n = Number(t);
                if (Number.isNaN(n)) return;
                pricing.push({ duration, price: n });
            };
            pushRate(hourPrice, "HOUR");
            pushRate(dayPrice, "DAY");
            pushRate(weekPrice, "WEEK");
            pushRate(monthPrice, "MONTH");
            if (pricing.length) fd.append("pricing", JSON.stringify(pricing));

            if (seasonalPricings.length) {
                fd.append("seasonalPricing", JSON.stringify(seasonalPricings.map(s => ({
                    name: s.name, startDate: s.startDate, endDate: s.endDate,
                    hourPrice: s.hourPrice ? Number(s.hourPrice) : null,
                    dayPrice:  s.dayPrice  ? Number(s.dayPrice)  : null,
                    weekPrice: s.weekPrice ? Number(s.weekPrice) : null,
                    monthPrice:s.monthPrice? Number(s.monthPrice): null,
                }))));
            }

            if (thumbnailFile) fd.append("thumbnail", thumbnailFile);
            for (const f of imageFiles) fd.append("images", f);
            for (const f of documentFiles) fd.append("documents", f);

            await adminCarAPI.updateCar(carId, fd);
            message.success("Car updated successfully!");
            setTimeout(() => navigate(all_routes.adminCarsList), 1200);
        } catch {
            message.error("Failed to update car. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleNext = () => {
        if (currentStep === 1) {
            const errors: string[] = [];
            if (!carName.trim()) errors.push("Name");
            if (!carType.trim()) errors.push("Category");
            if (!brand.trim()) errors.push("Brand");
            if (!carModel.trim() && !description.trim()) errors.push("Model");
            if (!location.trim()) errors.push("Location");
            if (!fuelType) errors.push("Fuel");
            if (!modelYear) errors.push("Year");
            if (!transmission) errors.push("Transmission");
            if (!seating) errors.push("Seats");
            if (errors.length) { setStep1Touched(true); message.error(`Please fill: ${errors.join(", ")}`); return; }
        }
        if (currentStep === 3 && !hourPrice && !dayPrice && !weekPrice && !monthPrice) {
            setStep3Touched(true); message.error("Enter at least one price."); return;
        }
        if (currentStep === 4) { submitCar(); return; }
        setCurrentStep(s => s + 1);
    };

    const handlePrev = () => setCurrentStep(s => s - 1);

    return (
        <div className="content me-0 edit-car-page">
            <div className="mb-3">
                <Link to={all_routes.adminCarsList} className="d-inline-flex align-items-center fw-medium">
                    <i className="ti ti-arrow-left me-1" />Back to List
                </Link>
            </div>
            <div className="card mb-0">
                <div className="card-body">
                    {loadingCar ? (
                        <div className="d-flex align-items-center justify-content-center py-5">
                            <div className="spinner-border text-primary" />
                            <span className="ms-3 text-gray-9">Loading car data...</span>
                        </div>
                    ) : (
                        <div className="add-wizard car-steps">
                            {/* Step Nav */}
                            <ul className="nav d-flex align-items-center flex-wrap gap-3 mb-4">
                                {[
                                    { step: 1, icon: "ti-info-circle", label: "Basic" },
                                    { step: 2, icon: "ti-flame",       label: "Features" },
                                    { step: 3, icon: "ti-files",       label: "Pricing" },
                                    { step: 4, icon: "ti-file-invoice",label: "Uploads" },
                                ].map(({ step, icon, label }) => (
                                    <li key={step} className={`nav-item ${currentStep === step ? "active" : currentStep > step ? "activated" : ""}`}>
                                        <button
                                            type="button"
                                            className="nav-link d-flex align-items-center car-step-tab"
                                            onClick={() => setCurrentStep(step)}
                                            aria-current={currentStep === step ? "step" : undefined}
                                        >
                                            <i className={`ti ${icon} me-1`} />{label}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {/* ── Step 1: Basic Info ── */}
                            {currentStep === 1 && (
                                <div>
                                    <div className="filterbox p-20 mb-4 d-flex align-items-center flex-wrap gap-3">
                                        <h4 className="d-flex align-items-center">
                                            <i className="ti ti-info-circle text-secondary me-2" />Basic Info
                                        </h4>
                                    </div>

                                    {/* Owner */}
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4 align-items-end">
                                            <div className="col-xl-3"><h6 className="mb-1">Car Owner</h6><p>Assign this car to an owner</p></div>
                                            <div className="col-xl-9">
                                                <div className="row row-gap-3">
                                                    <div className="col-md-4">
                                                        <label className="form-label">Owner Type</label>
                                                        <select className="form-select" value={ownerType} onChange={e => setOwnerType(e.target.value as "admin" | "carPartner")}>
                                                            <option value="admin">Admin</option>
                                                            <option value="carPartner">Car Partner</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-8">
                                                        <label className="form-label">{ownerType === "admin" ? "Admin" : "Car Partner"}</label>
                                                        {ownerType === "admin" ? (
                                                            <input className="form-control" value={adminProfile ? `${adminProfile.name}${adminProfile.phoneNum ? ` (${adminProfile.phoneNum})` : ""}` : "Loading..."} disabled readOnly />
                                                        ) : (
                                                            <select className="form-select" value={selectedOwnerId} onChange={e => setSelectedOwnerId(e.target.value)}>
                                                                {carPartners.length === 0 && <option value="">No car partners found</option>}
                                                                {carPartners.map(cp => (
                                                                    <option key={cp.id} value={cp.id}>{cp.name}{cp.phoneNum ? ` (${cp.phoneNum})` : ""}</option>
                                                                ))}
                                                            </select>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Featured Image */}
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4">
                                            <div className="col-xl-3"><h6 className="mb-1">Featured Image</h6><p>Upload Featured Image</p></div>
                                            <div className="col-xl-9">
                                                <div className="d-flex align-items-center flex-wrap row-gap-3 upload-pic">
                                                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl me-3 flex-shrink-0 border rounded-circle frames">
                                                        {thumbnailPreview ? (
                                                            <img src={thumbnailPreview} className="img-fluid rounded-circle" alt="thumbnail"
                                                                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                                                                onError={e => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "/assets/admin/img/car/car-02.jpg"; }} />
                                                        ) : (
                                                            <ImageWithBasePath src="assets/admin/img/car/car-02.jpg" className="img-fluid rounded-circle" alt="thumbnail" />
                                                        )}
                                                    </div>
                                                    <div>
                                                        <label className="drag-upload-btn btn btn-md btn-dark d-inline-flex align-items-center mb-2" style={{ cursor: "pointer" }}>
                                                            <i className="ti ti-photo me-1" />
                                                            {thumbnailFile ? "Change" : existingThumbnail ? "Replace" : "Upload"}
                                                            <input type="file" accept="image/*" style={{ display: "none" }}
                                                                onChange={e => {
                                                                    const file = e.target.files?.[0] ?? null;
                                                                    setThumbnailFile(file);
                                                                    setThumbnailPreview(file ? URL.createObjectURL(file) : existingThumbnail);
                                                                }} />
                                                        </label>
                                                        <p>Recommended size is 500px x 500px</p>
                                                        {thumbnailFile && <p className="fs-13 text-success">{thumbnailFile.name}</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Car Info fields */}
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4">
                                            <div className="col-xl-3"><h6 className="mb-1">Car Info</h6><p>Edit Car Information</p></div>
                                            <div className="col-xl-9">
                                                <div className="mb-3">
                                                    <label className="form-label">Name <span className="text-danger">*</span></label>
                                                    <input type="text" className={`form-control ${step1Touched && !carName.trim() ? "is-invalid" : ""}`}
                                                        value={carName} onChange={e => setCarName(e.target.value)} placeholder="Car name" />
                                                    {step1Touched && !carName.trim() && <div className="invalid-feedback">Name is required.</div>}
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Category <span className="text-danger">*</span></label>
                                                            <select className={`form-select ${step1Touched && !carType ? "is-invalid" : ""}`} value={carType} onChange={e => setCarType(e.target.value)}>
                                                                <option value="">Select</option>
                                                                {CAR_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                                                            </select>
                                                            {step1Touched && !carType && <div className="invalid-feedback">Category is required.</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Brand <span className="text-danger">*</span></label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${step1Touched && !brand.trim() ? "is-invalid" : ""}`}
                                                                value={brand}
                                                                onChange={e => setBrand(e.target.value)}
                                                                placeholder="e.g. Toyota"
                                                            />
                                                            {step1Touched && !brand.trim() && <div className="invalid-feedback">Brand is required.</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Model <span className="text-danger">*</span></label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${step1Touched && !carModel.trim() && !description.trim() ? "is-invalid" : ""}`}
                                                                value={carModel}
                                                                onChange={e => setCarModel(e.target.value)}
                                                                placeholder="e.g. Urban Cruiser"
                                                            />
                                                            {step1Touched && !carModel.trim() && !description.trim() && <div className="invalid-feedback">Model or description is required.</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Car Number</label>
                                                            <input type="text" className="form-control" value={carNumber} onChange={e => setCarNumber(e.target.value)} placeholder="e.g. internal fleet ID" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Plate Number</label>
                                                            <input type="text" className="form-control" value={plateNumber} onChange={e => setPlateNumber(e.target.value)} placeholder="e.g. ABC 1234" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Location <span className="text-danger">*</span></label>
                                                            <select className={`form-select ${step1Touched && !location ? "is-invalid" : ""}`} value={location} onChange={e => setLocation(e.target.value)}>
                                                                <option value="">Select</option>
                                                                {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                                                            </select>
                                                            {step1Touched && !location && <div className="invalid-feedback">Location is required.</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Fuel <span className="text-danger">*</span></label>
                                                            <select className="form-select" value={fuelType} onChange={e => setFuelType(e.target.value)}>
                                                                {FUELS.map(f => <option key={f} value={f}>{f}</option>)}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Year of Car <span className="text-danger">*</span></label>
                                                            <input type="number" className={`form-control ${step1Touched && !modelYear ? "is-invalid" : ""}`}
                                                                value={modelYear} onChange={e => setModelYear(e.target.value)} placeholder="e.g. 2022" />
                                                            {step1Touched && !modelYear && <div className="invalid-feedback">Year is required.</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Transmission <span className="text-danger">*</span></label>
                                                            <select className="form-select" value={transmission} onChange={e => setTransmission(e.target.value)}>
                                                                {TRANSMISSIONS.map(t => <option key={t} value={t}>{t}</option>)}
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">No of Seats <span className="text-danger">*</span></label>
                                                            <select
                                                                className={`form-select ${step1Touched && !seating ? "is-invalid" : ""}`}
                                                                value={seating}
                                                                onChange={e => setSeating(e.target.value)}
                                                            >
                                                                <option value="">Select</option>
                                                                {Seater.map((s) => {
                                                                    const n = Number(String(s.label).split(/\s+/)[0]);
                                                                    return (
                                                                        <option key={s.value} value={String(n)}>{s.label}</option>
                                                                    );
                                                                })}
                                                            </select>
                                                            {step1Touched && !seating && <div className="invalid-feedback">Seats is required.</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">No of Air Bags</label>
                                                            <input type="text" className="form-control" value={airBags} onChange={e => setAirBags(e.target.value)} placeholder="e.g. 6" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="mb-3">
                                                            <label className="form-label">Color <span className="text-danger">*</span></label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                value={color}
                                                                onChange={e => setColor(e.target.value)}
                                                                placeholder="e.g. White"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Description</label>
                                                            <textarea className="form-control" rows={3} value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the car..." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-end flex-wrap gap-2 pt-3 edit-car-actions">
                                        <Link to={all_routes.adminCarsList} className="btn btn-light d-flex align-items-center me-2">
                                            <i className="ti ti-chevron-left me-1" />Cancel
                                        </Link>
                                        <button className="btn btn-primary d-flex align-items-center" type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(); }}>
                                            Add Features <i className="ti ti-chevron-right ms-1" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* ── Step 2: Features ── */}
                            {currentStep === 2 && (
                                <div>
                                    <div className="filterbox p-20 mb-4 d-flex align-items-center flex-wrap gap-3">
                                        <h4 className="d-flex align-items-center">
                                            <i className="ti ti-flame text-secondary me-2" />Features &amp; Amenities
                                        </h4>
                                    </div>
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4">
                                            <div className="col-xl-3"><h6 className="mb-1">Amenities</h6><p>Select available features</p></div>
                                            <div className="col-xl-9">
                                                <div className="row">
                                                    <div className="col-12 mb-3">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="check-all-edit" checked={allFeaturesSelected} onChange={e => toggleAll(e.target.checked)} />
                                                            <label className="form-check-label" htmlFor="check-all-edit">Check All</label>
                                                        </div>
                                                    </div>
                                                    {AMENITY_OPTIONS.map((amenity, idx) => (
                                                        <div key={amenity} className="col-lg-4 col-md-6">
                                                            <div className="mb-3">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" id={`edit-amenity-${idx}`}
                                                                        checked={selectedFeatures.includes(amenity)}
                                                                        onChange={e => toggleFeature(amenity, e.target.checked)} />
                                                                    <label className="form-check-label" htmlFor={`edit-amenity-${idx}`}>{amenity}</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-end flex-wrap gap-2 pt-3 edit-car-actions">
                                        <button type="button" className="btn btn-outline-light border me-2" onClick={handlePrev}>
                                            <i className="ti ti-chevron-left me-1" />Back
                                        </button>
                                        <button type="button" className="btn btn-primary d-flex align-items-center" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(); }}>
                                            Add Pricing <i className="ti ti-chevron-right ms-1" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* ── Step 3: Pricing ── */}
                            {currentStep === 3 && (
                                <div>
                                    <div className="filterbox p-20 mb-4 d-flex align-items-center flex-wrap gap-3">
                                        <h4 className="d-flex align-items-center">
                                            <i className="ti ti-files text-secondary me-2" />Pricing
                                        </h4>
                                    </div>

                                    {/* Base pricing */}
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4">
                                            <div className="col-xl-3"><h6 className="mb-1">Base Pricing</h6><p>Set rental rates</p></div>
                                            <div className="col-xl-9">
                                                {step3Touched && !hourPrice && !dayPrice && !weekPrice && !monthPrice && (
                                                    <div className="alert alert-danger py-2 mb-3">Please enter at least one price.</div>
                                                )}
                                                <div className="row">
                                                    {[
                                                        { label: "Hourly (₹)", val: hourPrice, set: setHourPrice },
                                                        { label: "Daily (₹)",  val: dayPrice,  set: setDayPrice },
                                                        { label: "Weekly (₹)", val: weekPrice, set: setWeekPrice },
                                                        { label: "Monthly (₹)",val: monthPrice,set: setMonthPrice },
                                                    ].map(({ label, val, set }) => (
                                                        <div key={label} className="col-lg-3 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label">{label}</label>
                                                                <input type="number" className="form-control" value={val} onChange={e => set(e.target.value)} placeholder="0" />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Seasonal pricing */}
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4">
                                            <div className="col-xl-3"><h6 className="mb-1">Seasonal Pricing</h6><p>Override for date ranges</p></div>
                                            <div className="col-xl-9">
                                                {seasonalPricings.length > 0 && (
                                                    <div className="table-responsive mb-3">
                                                        <table className="table table-bordered table-sm">
                                                            <thead className="table-light">
                                                                <tr><th>Name</th><th>Start</th><th>End</th><th>Hourly</th><th>Daily</th><th>Weekly</th><th>Monthly</th><th></th></tr>
                                                            </thead>
                                                            <tbody>
                                                                {seasonalPricings.map((s, idx) => (
                                                                    <tr key={idx}>
                                                                        <td>{s.name}</td><td>{s.startDate}</td><td>{s.endDate}</td>
                                                                        <td>{s.hourPrice||"-"}</td><td>{s.dayPrice||"-"}</td>
                                                                        <td>{s.weekPrice||"-"}</td><td>{s.monthPrice||"-"}</td>
                                                                        <td>
                                                                            <button type="button" className="btn btn-sm btn-outline-primary me-1" onClick={() => { setSeasonalForm({...s}); setEditingSeasonalIdx(idx); setShowSeasonalForm(true); }}><i className="ti ti-edit" /></button>
                                                                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => setSeasonalPricings(p => p.filter((_,i) => i !== idx))}><i className="ti ti-trash" /></button>
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                )}
                                                {showSeasonalForm && (
                                                    <div className="border rounded p-3 mb-3 bg-light">
                                                        <div className="row row-gap-2">
                                                            <div className="col-md-4">
                                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                                <input type="text" className="form-control" value={seasonalForm.name} onChange={e => handleSeasonalFormChange("name", e.target.value)} placeholder="e.g. Summer" />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="form-label">Start Date <span className="text-danger">*</span></label>
                                                                <input type="date" className="form-control" value={seasonalForm.startDate} onChange={e => handleSeasonalFormChange("startDate", e.target.value)} />
                                                            </div>
                                                            <div className="col-md-4">
                                                                <label className="form-label">End Date <span className="text-danger">*</span></label>
                                                                <input type="date" className="form-control" value={seasonalForm.endDate} onChange={e => handleSeasonalFormChange("endDate", e.target.value)} />
                                                            </div>
                                                            {(["hourPrice","dayPrice","weekPrice","monthPrice"] as (keyof SeasonalEntry)[]).map(field => (
                                                                <div key={field} className="col-md-3">
                                                                    <label className="form-label capitalize">{field.replace("Price"," Price (₹)")}</label>
                                                                    <input type="number" className="form-control" value={seasonalForm[field]} onChange={e => handleSeasonalFormChange(field, e.target.value)} placeholder="0" />
                                                                </div>
                                                            ))}
                                                            <div className="col-12 d-flex gap-2 mt-2">
                                                                <button type="button" className="btn btn-sm btn-primary" onClick={handleAddSeasonal}>{editingSeasonalIdx !== null ? "Update" : "Add"}</button>
                                                                <button type="button" className="btn btn-sm btn-light" onClick={() => { setShowSeasonalForm(false); setSeasonalForm(emptySeasonalForm); setEditingSeasonalIdx(null); }}>Cancel</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {!showSeasonalForm && (
                                                    <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => setShowSeasonalForm(true)}>
                                                        <i className="ti ti-plus me-1" />Add Seasonal Pricing
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-end flex-wrap gap-2 pt-3 edit-car-actions">
                                        <button type="button" className="btn btn-outline-light border me-2" onClick={handlePrev}>
                                            <i className="ti ti-chevron-left me-1" />Back
                                        </button>
                                        <button type="button" className="btn btn-primary d-flex align-items-center" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(); }}>
                                            Add Uploads <i className="ti ti-chevron-right ms-1" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* ── Step 4: Uploads ── */}
                            {currentStep === 4 && (
                                <div>
                                    <div className="filterbox p-20 mb-4 d-flex align-items-center flex-wrap gap-3">
                                        <h4 className="d-flex align-items-center">
                                            <i className="ti ti-file-invoice text-secondary me-2" />Uploads
                                        </h4>
                                    </div>

                                    {/* Car Images */}
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4">
                                            <div className="col-xl-3"><h6 className="mb-1">Car Images</h6><p>Add multiple car images</p></div>
                                            <div className="col-xl-9">
                                                {existingImages.length > 0 && (
                                                    <div className="mb-3">
                                                        <p className="fs-13 fw-medium mb-2">Existing Images</p>
                                                        <div className="d-flex flex-wrap gap-2">
                                                            {existingImages.map((img, idx) => (
                                                                <div key={idx} className="position-relative">
                                                                    <img src={getImageUrl(img)} alt={`img-${idx}`} style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 6, border: "1px solid #ddd" }}
                                                                        onError={e => { (e.target as HTMLImageElement).onerror = null; (e.target as HTMLImageElement).src = "/assets/admin/img/car/car-01.jpg"; }} />
                                                                    <button type="button" className="btn btn-sm btn-danger position-absolute top-0 end-0 p-0" style={{ width: 20, height: 20, fontSize: 10 }}
                                                                        onClick={() => setExistingImages(p => p.filter((_,i) => i !== idx))}>
                                                                        <i className="ti ti-x" />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {imagePreviews.length > 0 && (
                                                    <div className="mb-3">
                                                        <p className="fs-13 fw-medium mb-2">New Images</p>
                                                        <div className="d-flex flex-wrap gap-2">
                                                            {imagePreviews.map((preview, idx) => (
                                                                <div key={idx} className="position-relative">
                                                                    <img src={preview} alt={`new-${idx}`} style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 6, border: "1px solid #ddd" }} />
                                                                    <button type="button" className="btn btn-sm btn-danger position-absolute top-0 end-0 p-0" style={{ width: 20, height: 20, fontSize: 10 }}
                                                                        onClick={() => { setImageFiles(p => p.filter((_,i) => i !== idx)); setImagePreviews(p => p.filter((_,i) => i !== idx)); }}>
                                                                        <i className="ti ti-x" />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                <label className="btn btn-dark d-inline-flex align-items-center" style={{ cursor: "pointer" }}>
                                                    <i className="ti ti-photo me-1" />Add Images
                                                    <input type="file" multiple accept="image/*" style={{ display: "none" }}
                                                        onChange={e => {
                                                            const files = Array.from(e.target.files ?? []);
                                                            if (!files.length) return;
                                                            setImageFiles(p => [...p, ...files]);
                                                            setImagePreviews(p => [...p, ...files.map(f => URL.createObjectURL(f))]);
                                                        }} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Documents */}
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4">
                                            <div className="col-xl-3"><h6 className="mb-1">Documents</h6><p>RC, Insurance, etc.</p></div>
                                            <div className="col-xl-9">
                                                {existingDocuments.length > 0 && (
                                                    <div className="mb-3">
                                                        <p className="fs-13 fw-medium mb-2">Existing Documents</p>
                                                        {existingDocuments.map((doc, idx) => (
                                                            <div key={idx} className="d-flex align-items-center gap-2 mb-2">
                                                                <i className="ti ti-file-description text-primary fs-5" />
                                                                <span className="fs-13">{doc.split("/").pop()}</span>
                                                                <button type="button" className="btn btn-sm btn-outline-danger py-0 px-1"
                                                                    onClick={() => setExistingDocuments(p => p.filter((_,i) => i !== idx))}>
                                                                    <i className="ti ti-x fs-12" />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                {documentFiles.length > 0 && (
                                                    <div className="mb-3">
                                                        <p className="fs-13 fw-medium mb-2">New Documents</p>
                                                        {documentFiles.map((file, idx) => (
                                                            <div key={idx} className="d-flex align-items-center gap-2 mb-2">
                                                                <i className="ti ti-file-description text-success fs-5" />
                                                                <span className="fs-13">{file.name}</span>
                                                                <button type="button" className="btn btn-sm btn-outline-danger py-0 px-1"
                                                                    onClick={() => setDocumentFiles(p => p.filter((_,i) => i !== idx))}>
                                                                    <i className="ti ti-x fs-12" />
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                                <label className="btn btn-dark d-inline-flex align-items-center" style={{ cursor: "pointer" }}>
                                                    <i className="ti ti-upload me-1" />Upload Documents
                                                    <input type="file" multiple style={{ display: "none" }}
                                                        onChange={e => {
                                                            const files = Array.from(e.target.files ?? []);
                                                            if (files.length) setDocumentFiles(p => [...p, ...files]);
                                                        }} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Verification (admin) */}
                                    <div className="border-bottom mb-4 pb-4">
                                        <div className="row row-gap-4 align-items-center">
                                            <div className="col-xl-3">
                                                <h6 className="mb-1">Verification</h6>
                                                <p className="fs-13 text-muted mb-0">Mark this car as verified after review</p>
                                            </div>
                                            <div className="col-xl-9">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="edit-car-verified"
                                                        checked={isVerified}
                                                        onChange={e => setIsVerified(e.target.checked)}
                                                    />
                                                    <label className="form-check-label fw-medium" htmlFor="edit-car-verified">
                                                        Car is verified
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex align-items-center justify-content-end flex-wrap gap-2 pt-3 edit-car-actions">
                                        <button type="button" className="btn btn-outline-light border me-2" onClick={handlePrev}>
                                            <i className="ti ti-chevron-left me-1" />Back
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary d-flex align-items-center"
                                            style={{ touchAction: "manipulation" }}
                                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleNext(); }}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting
                                                ? <><span className="spinner-border spinner-border-sm me-2" />Updating...</>
                                                : <>Update Car <i className="ti ti-check ms-1" /></>
                                            }
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditCar;
