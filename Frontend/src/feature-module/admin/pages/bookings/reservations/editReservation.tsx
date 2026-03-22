import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useReservationWizard } from "./useReservationWizard";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import CustomSelect from "../../../common/select/commonSelect";
import {
  Driver,
  PickupLocation,
  RentalType,
  ReturnLocation,
  Tarrif,
} from "../../../common/json/selectOption";
import { DatePicker, TimePicker } from "antd";
import { all_routes } from "../../../../../router/all_routes";

const EditReservation = () => {
  const { id } = useParams<{ id: string }>();
  const [currentStep, setCurrentStep] = useState(1);
  const w = useReservationWizard(id);

  const tariffSelectValue = useMemo(() => {
    const o = Tarrif.find((t) => t.value === w.tariffValue);
    return o ? { value: o.value, label: o.label } : undefined;
  }, [w.tariffValue]);

  const rentalSelectValue = useMemo(() => {
    const o = RentalType.find((t) => t.value === w.rentalTypeValue);
    return o ? { value: o.value, label: o.label } : undefined;
  }, [w.rentalTypeValue]);

  const pickupSelectValue = useMemo(() => {
    const o = PickupLocation.find((p) => p.label === w.deliveryAddress);
    return o ? { value: o.value, label: o.label } : undefined;
  }, [w.deliveryAddress]);

  const returnSelectValue = useMemo(() => {
    const o = ReturnLocation.find((p) => p.label === w.returnAddress);
    return o ? { value: o.value, label: o.label } : undefined;
  }, [w.returnAddress]);

  const customerSelectValue = useMemo(() => {
    const o = w.customerOptions.find((c) => c.value === w.userId);
    return o ? { value: o.value, label: o.label } : undefined;
  }, [w.customerOptions, w.userId]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleFinish = async () => {
    const ok = await w.submitUpdate();
    if (ok) {
      document.getElementById("trigger_reservation_done_modal")?.click();
    }
  };

  return (
    <>
      <button
        type="button"
        id="trigger_reservation_done_modal"
        className="d-none"
        data-bs-toggle="modal"
        data-bs-target="#reservation_completed"
        aria-hidden="true"
      />
      <div className="content me-4 pb-0">
        {w.loadError && (
          <div className="alert alert-danger mb-2">{w.loadError}</div>
        )}
        {w.submitError && (
          <div className="alert alert-warning mb-2">{w.submitError}</div>
        )}
        {!id && (
          <div className="alert alert-warning mb-2">
            Missing reservation id. Open edit from the reservations list.
          </div>
        )}
        <div className="mb-3">
          <Link
            to={all_routes.adminReservationsList}
            className="d-inline-flex align-items-center fw-medium"
          >
            <i className="ti ti-arrow-narrow-left me-2" />
            Reservation
          </Link>
        </div>
        <div className="wizard-form">
          {currentStep === 1 && (
            <fieldset id="first-field">
              <div className="row">
                <div className="col-lg-8">
                  <form>
                    <div className="card">
                      <div className="card-body">
                        <div className="reservation-wizard mb-4">
                          <ul
                            className="d-flex align-items-center flex-wrap row-gap-2"
                            id="progressbar"
                          >
                            <li className="d-flex align-items-center active me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-calendar" />
                              </span>
                              <h6>Car &amp; Dates Info</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-user-check" />
                              </span>
                              <h6>Customer</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-float-center" />
                              </span>
                              <h6>Extra Services</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-file-invoice" />
                              </span>
                              <h6>Billing Details</h6>
                            </li>
                          </ul>
                        </div>
                        <div className="card card-bg">
                          <div className="card-body">
                            <h4 className="d-flex align-items-center">
                              <i className="ti ti-info-circle me-2 text-secondary fs-24" />
                              Basic Info
                            </h4>
                          </div>
                        </div>
                        <div>
                          <div className="mb-3">
                            <h5 className="mb-1">Date &amp; Time Of Travel</h5>
                            <p>Add Information on Date of Travel</p>
                          </div>
                          <div className="border-bottom mb-3 pb-3">
                            <div className="row gx-3">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">Tarrif</label>
                                  <CustomSelect
                                    options={Tarrif}
                                    className="select d-flex"
                                    placeholder="Select"
                                    value={tariffSelectValue}
                                    onChange={(v: { value?: string }) =>
                                      w.setTariffValue(String(v?.value ?? "2"))
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Rental Type
                                  </label>

                                  <CustomSelect
                                    options={RentalType}
                                    className="select d-flex"
                                    placeholder="Select"
                                    value={rentalSelectValue}
                                    onChange={(v: { value?: string }) =>
                                      w.setRentalTypeValue(String(v?.value ?? "2"))
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    No of Passengers
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-xl-6">
                                <div className="row gx-3">
                                  <div className="col-md-7">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Start Date{" "}
                                        <span className="text-danger"> *</span>{" "}
                                      </label>
                                      <div className="input-icon-end position-relative">
                                        <DatePicker
                                          className="form-control datetimepicker"
                                          placeholder="dd/mm/yyyy"
                                          value={w.pickupDate}
                                          onChange={(d) => w.setPickupDate(d)}
                                        />
                                        <span className="input-icon-addon">
                                          <i className="ti ti-calendar" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Time{" "}
                                        <span className="text-danger"> *</span>{" "}
                                      </label>
                                      <div className="input-icon-end position-relative flex-fill">
                                        <TimePicker
                                          className="form-control timepicker"
                                          value={w.pickupTime || undefined}
                                          onChange={(t) => w.setPickupTime(t)}
                                        />
                                        <span className="input-icon-addon">
                                          <i className="ti ti-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6">
                                <div className="row gx-3">
                                  <div className="col-md-7">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        End Date{" "}
                                        <span className="text-danger"> *</span>{" "}
                                      </label>
                                      <div className="input-icon-end position-relative">
                                        <DatePicker
                                          className="form-control datetimepicker"
                                          placeholder="dd/mm/yyyy"
                                          value={w.returnDate}
                                          onChange={(d) => w.setReturnDate(d)}
                                        />
                                        <span className="input-icon-addon">
                                          <i className="ti ti-calendar" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-5">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Time{" "}
                                        <span className="text-danger"> *</span>{" "}
                                      </label>
                                      <div className="input-icon-end position-relative">
                                        <TimePicker
                                          className="form-control timepicker"
                                          value={w.returnTime || undefined}
                                          onChange={(t) => w.setReturnTime(t)}
                                        />
                                        <span className="input-icon-addon">
                                          <i className="ti ti-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row gx-3">
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Pickup Location{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <CustomSelect
                                    options={PickupLocation}
                                    className="select d-flex"
                                    placeholder="Select"
                                    value={pickupSelectValue}
                                    onChange={(v: { label?: string }) =>
                                      w.setDeliveryAddress(String(v?.label ?? ""))
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Return Location{" "}
                                    <span className="text-danger">*</span>
                                  </label>
                                  <CustomSelect
                                    options={ReturnLocation}
                                    className="select d-flex"
                                    placeholder="Select"
                                    value={returnSelectValue}
                                    onChange={(v: { label?: string }) =>
                                      w.setReturnAddress(String(v?.label ?? ""))
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Security Deposit{" "}
                                  </label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                            <label className="d-flex align-items-center">
                              <input
                                className="form-check-input m-0 me-2"
                                type="checkbox"
                                checked={w.sameReturn}
                                onChange={(e) => {
                                  const v = e.target.checked;
                                  w.setSameReturn(v);
                                  if (v) w.setReturnAddress(w.deliveryAddress);
                                }}
                              />
                              Return Same Location
                            </label>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <h5 className="mb-1">Select Vehicle</h5>
                                <p>Select Vehicle for your rental</p>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="d-flex align-items-center justify-content-end flex-wrap row-gap-3 mb-3">
                                <div className="dropdown me-2">
                                  <Link
                                    to="#filtercollapse"
                                    className="filtercollapse coloumn d-inline-flex align-items-center"
                                    data-bs-toggle="collapse"
                                    role="button"
                                    aria-expanded="true"
                                    aria-controls="filtercollapse"
                                  >
                                    <i className="ti ti-filter me-1" /> Filter{" "}
                                    <span className="badge badge-xs rounded-pill bg-danger ms-2">
                                      0
                                    </span>
                                  </Link>
                                </div>
                                <div className="top-search me-2">
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
                                <div>
                                  <Link
                                    to="#"
                                    className="btn btn-dark d-inline-flex align-items-center"
                                  >
                                    <i className="ti ti-plus me-1" />
                                    Add New
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="collapse" id="filtercollapse">
                            <div className="filterbox mb-3 px-3">
                              <div className="row align-items-center">
                                <div className="col-lg-10">
                                  <div className=" d-flex align-items-center flex-wrap row-gap-3">
                                    <div className="dropdown me-2">
                                      <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        aria-expanded="false"
                                      >
                                        Select Brand
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
                                            Toyota
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Honda
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Ford
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Chevrolet
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            BMW
                                          </label>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="dropdown me-2">
                                      <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                      >
                                        Select Type
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
                                            Economy
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Compact
                                          </label>
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
                                            SUV
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Luxury
                                          </label>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="dropdown me-2">
                                      <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                      >
                                        <i className="ti ti-badge me-1" />
                                        Select Model
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
                                            Urban Cruiser
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Fortuner
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            V8
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Q3
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Huracan
                                          </label>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="dropdown">
                                      <Link
                                        to="#"
                                        className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                      >
                                        <i className="ti ti-badge me-1" />
                                        Select Color
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
                                            White
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Black
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Silver
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Gray
                                          </label>
                                        </li>
                                        <li>
                                          <label className="dropdown-item d-flex align-items-center rounded-1">
                                            <input
                                              className="form-check-input m-0 me-2"
                                              type="checkbox"
                                            />
                                            Blue
                                          </label>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-2">
                                  <div className="d-flex align-items-center justify-content-end">
                                    <Link
                                      to="#"
                                      className="me-3 text-purple links"
                                    >
                                      Apply
                                    </Link>
                                    <Link to="#" className="text-danger links">
                                      Clear
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="car-select">
                            {w.cars.length === 0 ? (
                              <p className="text-muted small mb-0">
                                No vehicles found. Add cars in the fleet section first.
                              </p>
                            ) : (
                              w.cars.map((car) => {
                                const pr =
                                  car.pricing?.find(
                                    (p) => p.duration === w.durationEnum
                                  ) || car.pricing?.[0];
                                const imgPath = car.thumbnail || car.images?.[0];
                                const imgSrc = imgPath
                                  ? `${w.imageBaseUrl}${imgPath}`
                                  : null;
                                const checked = w.carId === car.id;
                                return (
                                  <div className="card" key={car.id}>
                                    <div className="card-body">
                                      <div className="row gy-3">
                                        <div className="col-lg-4">
                                          <div className="d-flex align-items-center">
                                            <div className="form-check form-check-md me-3">
                                              <input
                                                className="form-check-input"
                                                type="radio"
                                                name="pickCar"
                                                checked={checked}
                                                onChange={() => w.pickCar(car.id)}
                                              />
                                            </div>
                                            <span className="avatar flex-shrink-0 me-2">
                                              {imgSrc ? (
                                                <img
                                                  src={imgSrc}
                                                  alt=""
                                                  className="rounded"
                                                  style={{
                                                    width: 48,
                                                    height: 48,
                                                    objectFit: "cover",
                                                  }}
                                                />
                                              ) : (
                                                <ImageWithBasePath
                                                  src="assets/admin/img/car/car-01.jpg"
                                                  alt=""
                                                />
                                              )}
                                            </span>
                                            <div>
                                              <p className="mb-0">
                                                {car.category || car.brand}
                                              </p>
                                              <h6 className="fs-14">{car.name}</h6>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-5">
                                          <div className="row gy-3">
                                            <div className="col-md-4">
                                              <div>
                                                <p className="mb-1">Color</p>
                                                <h6 className="fs-14 d-inline-flex align-items-center">
                                                  <i
                                                    className="ti ti-square-filled me-1"
                                                    style={{ color: car.hexCode || "#ccc" }}
                                                  />
                                                  {car.color}
                                                </h6>
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div>
                                                <p className="mb-1">Year</p>
                                                <h6 className="fs-14">{car.modelYear}</h6>
                                              </div>
                                            </div>
                                            <div className="col-md-4">
                                              <div>
                                                <p className="mb-1">Price</p>
                                                <h6 className="fs-14">
                                                  ₹{pr?.price ?? "—"}
                                                  <span className="text-gray-5">
                                                    /{String(pr?.duration || "").toLowerCase()}
                                                  </span>
                                                </h6>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-lg-3">
                                          <div className="float-md-end">
                                            <span className="badge bg-success-transparent d-inline-flex align-items-center badge-sm mb-1">
                                              <i className="ti ti-point-filled me-1" />
                                              {car.isAvailable === false
                                                ? "Unavailable"
                                                : "Available"}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })
                            )}
                          </div>
                        </div>
                      </div>
                        <div className="card-footer px-0 pb-0">
                          <div className="d-flex align-items-center justify-content-end flex-wrap row-gap-3">
                            <div className="field-btns">
                              <button
                                className="btn btn-light me-2"
                                type="button"
                              >
                                <i className="ti ti-chevron-left me-1" />
                                Cancel
                              </button>
                            </div>
                            <div className="field-btns">
                              <button
                                className="btn btn-primary wizard-next-btn"
                                type="button"
                                onClick={handleNext}
                              >
                                Add Customer
                                <i className="ti ti-chevron-right ms-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header bg-gray-900 rounded-top-3">
                      <h5 className="text-white">Summary</h5>
                    </div>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Start Date</h6>
                        <p>
                          {w.pickupDateTime
                            ? w.pickupDateTime.format("DD MMM YYYY, hh:mm A")
                            : "—"}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">End Date</h6>
                        <p>
                          {w.returnDateTime
                            ? w.returnDateTime.format("DD MMM YYYY, hh:mm A")
                            : "—"}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Rental Period</h6>
                        <p>{w.durationEnum}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Rental Type</h6>
                        <p>
                          {w.rentalTypeValue === "1" ? "Delivery" : "Self Pickup"}
                        </p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Pickup Location</h6>
                        <p>{w.deliveryAddress || "—"}</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Return Location</h6>
                        <p>
                          {w.sameReturn
                            ? w.deliveryAddress || "—"
                            : w.returnAddress || "—"}
                        </p>
                      </div>
                      <div>
                        <Link to="#" className="text-decoration-underline">
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link to="#" className="btn btn-danger w-100 mb-4">
                    <i className="ti ti-x me-1" />
                    Cancel Booking
                  </Link>
                </div>
              </div>
            </fieldset>
          )}
          {currentStep === 2 && (
            <fieldset style={{ display: "block" }}>
              <div className="row">
                <div className="col-lg-8">
                  <form>
                    <div className="card">
                      <div className="card-body">
                        <div className="reservation-wizard mb-4">
                          <ul
                            className="d-flex align-items-center flex-wrap row-gap-2"
                            id="progressbar1"
                          >
                            <li className="d-flex align-items-center activated me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-calendar" />
                              </span>
                              <span className="active-check me-2">
                                <i className="ti ti-check" />
                              </span>
                              <h6>Car &amp; Dates Info</h6>
                            </li>
                            <li className="d-flex align-items-center active me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-user-check" />
                              </span>
                              <h6>Customer</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-float-center" />
                              </span>
                              <h6>Extra Services</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-file-invoice" />
                              </span>
                              <h6>Billing Details</h6>
                            </li>
                          </ul>
                        </div>
                        <div className="card card-bg">
                          <div className="card-body">
                            <h4 className="d-flex align-items-center">
                              <i className="ti ti-user-check me-2 text-secondary fs-24" />
                              Customer
                            </h4>
                          </div>
                        </div>
                        <div className="border-bottom mb-3">
                          <div className="mb-3">
                            <h6 className="mb-1">Select Customer </h6>
                            <p>Add Information of Customer</p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Customer <span className="text-danger">*</span>
                            </label>
                            <div className="d-flex align-items-center">
                              <div className="flex-fill ">
                                <CustomSelect
                                  options={w.customerOptions}
                                  className="select d-flex"
                                  placeholder="Select"
                                  value={customerSelectValue}
                                  onChange={(v: { value?: string }) =>
                                    w.setUserId(String(v?.value ?? ""))
                                  }
                                />
                              </div>
                              <div className="ms-4">
                                <Link
                                  to="#"
                                  className="btn btn-dark d-inline-flex align-items-center"
                                >
                                  <i className="ti ti-plus me-1" />
                                  Add New
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="card bg-light">
                            <div className="card-body">
                              <div className="row align-items-center gy-3">
                                <div className="col-md-11">
                                  <div className="row gx-2 gy-3">
                                    <div className="col-md-4">
                                      <div className="d-flex align-items-center">
                                        <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                          <ImageWithBasePath
                                            src="assets/admin/img/customer/customer-03.jpg"
                                            alt=""
                                          />
                                        </span>
                                        <div>
                                          <h6 className="fs-14 mb-1">
                                            {w.selectedUser
                                              ? [w.selectedUser.firstName, w.selectedUser.lastName]
                                                  .filter(Boolean)
                                                  .join(" ")
                                                  .trim() || w.selectedUser.phoneNum
                                              : "—"}
                                          </h6>
                                          <span className="badge bg-info-transparent">
                                            Customer
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <h6 className="fs-14 mb-1">Phone</h6>
                                        <p>{w.selectedUser?.phoneNum ?? "—"}</p>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <h6 className="fs-14 mb-1">Email</h6>
                                        <p>{w.selectedUser?.email ?? "—"}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-1">
                                  <div className="d-flex align-items-center justify-content-end">
                                    <Link to="#" className="me-2">
                                      <i className="ti ti-eye" />
                                    </Link>
                                    <Link to="#">
                                      <i className="ti ti-trash" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mb-3">
                            <h6 className="mb-1">Select Driver </h6>
                            <p>Add Information of Driver</p>
                          </div>
                          <div className="mb-3">
                            <label className="form-label">
                              Driver <span className="text-danger">*</span>
                            </label>
                            <div className="d-flex align-items-center">
                              <div className="flex-fill ">
                                <CustomSelect
                                  options={Driver}
                                  className="select d-flex"
                                  placeholder="Select"
                                />
                              </div>
                              <div className="ms-4">
                                <Link
                                  to="#"
                                  className="btn btn-dark d-inline-flex align-items-center"
                                >
                                  <i className="ti ti-plus me-1" />
                                  Add New
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center justify-content-end mb-3">
                            <Link
                              to="#"
                              className="text-purple text-decoration-underline fw-medium"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_price"
                            >
                              Edit Price
                            </Link>
                          </div>
                          <div className="card bg-light">
                            <div className="card-body">
                              <div className="row align-items-center gy-3">
                                <div className="col-md-11">
                                  <div className="row gx-2 gy-3">
                                    <div className="col-md-5">
                                      <div className="d-flex align-items-center">
                                        <div className="form-check form-check-md me-3">
                                          <input
                                            className="form-check-input"
                                            type="checkbox"
                                          />
                                        </div>
                                        <span className="avatar avatar-rounded flex-shrink-0 me-2">
                                          <ImageWithBasePath
                                            src="assets/admin/img/customer/customer-01.jpg"
                                            alt=""
                                          />
                                        </span>
                                        <div>
                                          <h6 className="fs-14 mb-1">
                                            Reuben Keen
                                          </h6>
                                          <span className="badge bg-violet-transparent">
                                            50 Rides
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-4">
                                      <div>
                                        <h6 className="fs-14 mb-1">Phone</h6>
                                        <p>+1 58514 45546</p>
                                      </div>
                                    </div>
                                    <div className="col-md-3">
                                      <div>
                                        <h6 className="fs-14 mb-1">Price</h6>
                                        <p>$18 </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-1">
                                  <div className="d-flex align-items-center justify-content-end">
                                    <Link to="#" className="me-2">
                                      <i className="ti ti-eye" />
                                    </Link>
                                    <Link to="#">
                                      <i className="ti ti-trash" />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer px-0 pb-0">
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="field-btns">
                              <button
                                className="btn btn-light wizard-prev-btn me-2"
                                type="button"
                                onClick={handlePrev}
                              >
                                <i className="ti ti-chevron-left me-1" />
                                Back
                              </button>
                            </div>
                            <div className="field-btns">
                              <button
                                className="btn btn-primary wizard-next-btn"
                                type="button"
                                onClick={handleNext}
                              >
                                Add Extra Services
                                <i className="ti ti-chevron-right ms-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header bg-gray-900 rounded-top-3">
                      <h5 className="text-white">Summary</h5>
                    </div>
                    <div className="card-body">
                      <div className="border rounded p-3 bg-light mb-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <span className="avatar flex-shrink-0 me-2">
                                <ImageWithBasePath
                                  src="assets/admin/img/car/car-01.jpg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <p className="mb-0">Sedan</p>
                                <h6 className="fs-14">Ford Endeavour</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="text-end">
                              <p className="mb-0">Price</p>
                              <h6 className="fs-14">
                                $60<span className="text-gray-5">/day</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Start Date</h6>
                        <p>10 Feb 2025, 12:00 PM</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">End Date</h6>
                        <p>11 Feb 2025, 01:00 PM</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Rental Period</h6>
                        <p>2 Days</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Rental Type</h6>
                        <p>Self Pickup</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Pickup Location</h6>
                        <p>2nd Avenue, Lasvegas</p>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Return Location</h6>
                        <p>4th Street, Newyork</p>
                      </div>
                      <div>
                        <Link to="#" className="text-decoration-underline">
                          Edit
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Link to="#" className="btn btn-danger w-100 mb-4">
                    <i className="ti ti-x me-1" />
                    Cancel Booking
                  </Link>
                </div>
              </div>
            </fieldset>
          )}
          {currentStep === 3 && (
            <fieldset style={{ display: "block" }}>
              <div className="row">
                <div className="col-lg-8">
                  <form>
                    <div className="card">
                      <div className="card-body">
                        <div className="reservation-wizard mb-4">
                          <ul
                            className="d-flex align-items-center flex-wrap row-gap-2"
                            id="progressbar2"
                          >
                            <li className="d-flex align-items-center activated me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-calendar" />
                              </span>
                              <span className="active-check me-2">
                                <i className="ti ti-check" />
                              </span>
                              <h6>Car &amp; Dates Info</h6>
                            </li>
                            <li className="d-flex align-items-center activated  me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-user-check" />
                              </span>
                              <span className="active-check me-2">
                                <i className="ti ti-check" />
                              </span>
                              <h6>Customer</h6>
                            </li>
                            <li className="d-flex align-items-center active me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-float-center" />
                              </span>
                              <h6>Extra Services</h6>
                            </li>
                            <li className="d-flex align-items-center me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-file-invoice" />
                              </span>
                              <h6>Billing Details</h6>
                            </li>
                          </ul>
                        </div>
                        <div className="card card-bg">
                          <div className="card-body">
                            <h4 className="d-flex align-items-center">
                              <i className="ti ti-float-center me-2 text-secondary fs-24" />
                              Extra Service
                            </h4>
                          </div>
                        </div>
                        <div className="border-bottom mb-3">
                          <div className="mb-3">
                            <h6 className="mb-1">Select Extra Services</h6>
                            <p>Add extra services for your rental</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="custom-checkbox active">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-1"
                                  defaultChecked
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-1"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Navigation
                                  </span>
                                  <span className="d-block">
                                    Using GPS while travel
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-2"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-2"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Wi-Fi Hotspot
                                  </span>
                                  <span className="d-block">
                                    Constant portable internet
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-3"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-3"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Fuel Pre-Purchase
                                  </span>
                                  <span className="d-block">
                                    Full tank, return hassle-free
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">One Time</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-4"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-4"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Satellite Radio
                                  </span>
                                  <span className="d-block">
                                    {" "}
                                    Unlimited premium music
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-5"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-5"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    USB Charger
                                  </span>
                                  <span className="d-block">
                                    Fast charging for devices
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-6"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-6"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Toll Pass
                                  </span>
                                  <span className="d-block">
                                    Skip toll booth lines
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">One Time</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-7"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-7"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Dash Cam
                                  </span>
                                  <span className="d-block">
                                    Records trips extra security
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-8"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-8"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Express Check-in/out
                                  </span>
                                  <span className="d-block">
                                    Fast pickup &amp; return process
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox active">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-9"
                                  defaultChecked
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-9"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Child Safety Seats
                                  </span>
                                  <span className="d-block">
                                    Secure infant/toddler car seat
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="custom-checkbox">
                              <div className="form-check form-check-md">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="custom-check-10"
                                />
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                <label
                                  className="form-check-label ms-2 ps-4"
                                  htmlFor="custom-check-10"
                                >
                                  <span className="fw-semibold text-gray-9 d-block mb-1">
                                    Roadside Assistance
                                  </span>
                                  <span className="d-block">
                                    24/7 emergency car support
                                  </span>
                                </label>
                                <div className="text-end">
                                  <p className="mb-1">Per Day</p>
                                  <h6>$10</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer px-0 pb-0">
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="field-btns">
                              <button
                                className="btn btn-light wizard-prev-btn me-2"
                                type="button"
                                onClick={handlePrev}
                              >
                                <i className="ti ti-chevron-left me-1" />
                                Back
                              </button>
                            </div>
                            <div className="field-btns">
                              <button
                                className="btn btn-primary wizard-next-btn"
                                type="button"
                                onClick={handleNext}
                              >
                                Proceed to Billing
                                <i className="ti ti-chevron-right ms-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header bg-gray-900 rounded-top-3">
                      <h5 className="text-white">Summary</h5>
                    </div>
                    <div className="card-body">
                      <div className="border rounded p-3 bg-light mb-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <span className="avatar flex-shrink-0 me-2">
                                <ImageWithBasePath
                                  src="assets/admin/img/car/car-01.jpg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <p className="mb-0">Sedan</p>
                                <h6 className="fs-14">Ford Endeavour</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="text-end">
                              <p className="mb-0">Price</p>
                              <h6 className="fs-14">
                                $60<span className="text-gray-5">/day</span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Start Date</h6>
                        <p>10 Feb 2025, 12:00 PM</p>
                      </div>
                      <div className="border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">End Date</h6>
                          <p>11 Feb 2025, 01:00 PM</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">Rental Period</h6>
                          <p>2 Days</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">Rental Type</h6>
                          <p>Self Pickup</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">Pickup Location</h6>
                          <p>2nd Avenue, Lasvegas</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">Return Location</h6>
                          <p>4th Street, Newyork</p>
                        </div>
                        <div>
                          <Link to="#" className="text-decoration-underline">
                            Edit
                          </Link>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="mb-3">
                            <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                              Customer
                              <Link to="#" className="ms-2">
                                <i className="ti ti-edit" />
                              </Link>
                            </h6>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <span className="avatar avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/admin/img/customer/customer-02.jpg"
                                alt=""
                              />
                            </span>
                            <div>
                              <h6 className="fs-14 fw-medium mb-1">
                                Andrew Simons
                              </h6>
                              <p>+1 56598 98956</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="mb-3">
                            <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                              Driver
                              <Link to="#" className="ms-2">
                                <i className="ti ti-edit" />
                              </Link>
                            </h6>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <span className="avatar avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/admin/img/customer/customer-01.jpg"
                                alt=""
                              />
                            </span>
                            <div>
                              <h6 className="fs-14 fw-medium mb-1">
                                Reuben Keen
                              </h6>
                              <p>+1 56598 98956</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3 pb-2">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium fs-14">Pricing of Car</h6>
                          <p>$120</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            3 Extra Services
                            <Link
                              to="#"
                              className="me-2 ms-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-original-title="Navigation, USB Charger, Dash Cam"
                            >
                              <i className="ti ti-info-circle-filled" />
                            </Link>
                            <Link to="#">
                              <i className="ti ti-edit" />
                            </Link>
                          </h6>
                          <p>$30</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            Security Deposit
                            <Link to="#" className="ms-2">
                              <i className="ti ti-edit" />
                            </Link>
                          </h6>
                          <p>$150</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            Driver Price
                            <Link to="#" className="ms-2">
                              <i className="ti ti-edit" />
                            </Link>
                          </h6>
                          <p>$180</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h6>Total Price</h6>
                        <h6>$300</h6>
                      </div>
                    </div>
                  </div>
                  <Link to="#" className="btn btn-danger w-100 mb-4">
                    <i className="ti ti-x me-1" />
                    Cancel Booking
                  </Link>
                </div>
              </div>
            </fieldset>
          )}
          {currentStep === 4 && (
            <fieldset style={{ display: "block" }}>
              <div className="row">
                <div className="col-lg-8">
                  <form>
                    <div className="card">
                      <div className="card-body">
                        <div className="reservation-wizard mb-4">
                          <ul
                            className="d-flex align-items-center flex-wrap row-gap-2"
                            id="progressbar3"
                          >
                            <li className="d-flex align-items-center activated me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-calendar" />
                              </span>
                              <span className="active-check me-2">
                                <i className="ti ti-check" />
                              </span>
                              <h6>Car &amp; Dates Info</h6>
                            </li>
                            <li className="d-flex align-items-center activated  me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-user-check" />
                              </span>
                              <span className="active-check me-2">
                                <i className="ti ti-check" />
                              </span>
                              <h6>Customer</h6>
                            </li>
                            <li className="d-flex align-items-center activated me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-float-center" />
                              </span>
                              <span className="active-check me-2">
                                <i className="ti ti-check" />
                              </span>
                              <h6>Extra Services</h6>
                            </li>
                            <li className="d-flex align-items-center active me-2">
                              <span className="me-2 wizard-icon">
                                <i className="ti ti-file-invoice" />
                              </span>
                              <h6>Billing Details</h6>
                            </li>
                          </ul>
                        </div>
                        <div className="card card-bg">
                          <div className="card-body">
                            <h4 className="d-flex align-items-center">
                              <i className="ti ti-file-invoice me-2 text-secondary fs-24" />
                              Billing Details
                            </h4>
                          </div>
                        </div>
                        <div className="border-bottom mb-3">
                          <div className="mb-3">
                            <h6 className="mb-1">Rent &amp; Service Billing</h6>
                            <p>Add extra services for your rental</p>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-3">
                                <div className="d-flex align-items-center justify-content-between">
                                  <label className="form-label">
                                    Base Kilometers (Per Day)
                                  </label>
                                  <label className="d-flex align-items-center">
                                    <input
                                      className="form-check-input m-0 me-2"
                                      type="checkbox"
                                    />
                                    Unlimited
                                  </label>
                                </div>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-3">
                                <label className="form-label">
                                  Kilometers Extra Price{" "}
                                </label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <div>
                              <h6 className="mb-1">Insurance</h6>
                              <p>Add Insurance of Your Ride</p>
                            </div>
                            <div className="form-check form-check-md form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="switch-sm"
                              />
                              <label
                                className="form-check-label mt-0"
                                htmlFor="switch-sm"
                              >
                                Enable
                              </label>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="custom-checkbox active">
                                <div className="form-check form-check-md">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="custom-check-11"
                                    defaultChecked
                                  />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                  <label
                                    className="form-check-label ms-2 ps-4"
                                    htmlFor="custom-check-11"
                                  >
                                    <span className="fw-semibold text-gray-9 d-block mb-1">
                                      Full Premium Insurance
                                    </span>
                                    <span className="d-block text-info">
                                      +4 Benefits
                                      <i
                                        className="ti ti-info-circle-filled text-gray-5 ms-1"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-original-title="No additional charges for emergency roadside services"
                                      />
                                    </span>
                                  </label>
                                  <div className="text-end">
                                    <p className="mb-1">Onetime Ride</p>
                                    <h6>$200</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="custom-checkbox">
                                <div className="form-check form-check-md">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="custom-check-12"
                                  />
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                  <label
                                    className="form-check-label ms-2 ps-4"
                                    htmlFor="custom-check-12"
                                  >
                                    <span className="fw-semibold text-gray-9 d-block mb-1">
                                      Satellite Radio
                                    </span>
                                    <span className="d-block text-info">
                                      +6 Benefits
                                      <i
                                        className="ti ti-info-circle-filled text-gray-5 ms-1"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-original-title="Quick assistance for unexpected breakdowns"
                                      />
                                    </span>
                                  </label>
                                  <div className="text-end">
                                    <p className="mb-1">Onetime Ride</p>
                                    <h6>$250</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer px-0 pb-0">
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="field-btns">
                              <button
                                className="btn btn-light wizard-prev-btn me-2"
                                type="button"
                                onClick={handlePrev}
                              >
                                <i className="ti ti-chevron-left me-1" />
                                Back
                              </button>
                            </div>
                            <div className="field-btns">
                              <button
                                className="btn btn-primary"
                                type="button"
                                disabled={w.saving || !id}
                                onClick={handleFinish}
                              >
                                {w.saving ? "Saving…" : "Finish & Save"}
                                <i className="ti ti-chevron-right ms-1" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-header bg-gray-900 rounded-top-3">
                      <h5 className="text-white">Summary</h5>
                    </div>
                    <div className="card-body">
                      <div className="border rounded p-3 bg-light mb-3">
                        <div className="row">
                          <div className="col-8">
                            <div className="d-flex align-items-center">
                              <span className="avatar flex-shrink-0 me-2">
                                {w.selectedCar &&
                                (w.selectedCar.thumbnail || w.selectedCar.images?.[0]) ? (
                                  <img
                                    src={`${w.imageBaseUrl}${w.selectedCar.thumbnail || w.selectedCar.images?.[0]}`}
                                    alt=""
                                    className="rounded"
                                    style={{ width: 48, height: 48, objectFit: "cover" }}
                                  />
                                ) : (
                                  <ImageWithBasePath
                                    src="assets/admin/img/car/car-01.jpg"
                                    alt=""
                                  />
                                )}
                              </span>
                              <div>
                                <p className="mb-0">
                                  {w.selectedCar?.category || w.selectedCar?.brand || "—"}
                                </p>
                                <h6 className="fs-14">{w.selectedCar?.name ?? "—"}</h6>
                              </div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="text-end">
                              <p className="mb-0">Price</p>
                              <h6 className="fs-14">
                                ₹{w.computedTotalPrice || "—"}
                                <span className="text-gray-5">
                                  /{String(w.durationEnum).toLowerCase()}
                                </span>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium fs-14">Start Date</h6>
                        <p>
                          {w.pickupDateTime
                            ? w.pickupDateTime.format("DD MMM YYYY, hh:mm A")
                            : "—"}
                        </p>
                      </div>
                      <div className="border-bottom mb-3 pb-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">End Date</h6>
                          <p>
                            {w.returnDateTime
                              ? w.returnDateTime.format("DD MMM YYYY, hh:mm A")
                              : "—"}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">Rental Period</h6>
                          <p>{w.durationEnum}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">Rental Type</h6>
                          <p>
                            {w.rentalTypeValue === "1" ? "Delivery" : "Self Pickup"}
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">Pickup Location</h6>
                          <p>{w.deliveryAddress || "—"}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <h6 className="fw-medium fs-14">Return Location</h6>
                          <p>
                            {w.sameReturn
                              ? w.deliveryAddress || "—"
                              : w.returnAddress || "—"}
                          </p>
                        </div>
                        <div>
                          <Link to="#" className="text-decoration-underline">
                            Edit
                          </Link>
                        </div>
                      </div>
                      <div className="border-bottom mb-3">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="mb-3">
                            <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                              Customer
                              <Link to="#" className="ms-2">
                                <i className="ti ti-edit" />
                              </Link>
                            </h6>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <span className="avatar avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/admin/img/customer/customer-02.jpg"
                                alt=""
                              />
                            </span>
                            <div>
                              <h6 className="fs-14 fw-medium mb-1">
                                {w.selectedUser
                                  ? [w.selectedUser.firstName, w.selectedUser.lastName]
                                      .filter(Boolean)
                                      .join(" ")
                                      .trim() || w.selectedUser.phoneNum
                                  : "—"}
                              </h6>
                              <p>{w.selectedUser?.phoneNum ?? "—"}</p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="mb-3">
                            <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                              Driver
                              <Link to="#" className="ms-2">
                                <i className="ti ti-edit" />
                              </Link>
                            </h6>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <span className="avatar avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/admin/img/customer/customer-01.jpg"
                                alt=""
                              />
                            </span>
                            <div>
                              <h6 className="fs-14 fw-medium mb-1">
                                Reuben Keen
                              </h6>
                              <p>+1 56598 98956</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="border-bottom mb-3 pb-2">
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium fs-14">Pricing of Car</h6>
                          <p>₹{w.computedTotalPrice || "—"}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            3 Extra Services
                            <Link
                              to="#"
                              className="me-2 ms-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-original-title="Navigation, USB Charger, Dash Cam"
                            >
                              <i className="ti ti-info-circle-filled" />
                            </Link>
                            <Link to="#">
                              <i className="ti ti-edit" />
                            </Link>
                          </h6>
                          <p>$30</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            Security Deposit
                            <Link to="#" className="ms-2">
                              <i className="ti ti-edit" />
                            </Link>
                          </h6>
                          <p>$150</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <h6 className="fw-medium d-flex align-items-center fs-14">
                            Driver Price
                            <Link to="#" className="ms-2">
                              <i className="ti ti-edit" />
                            </Link>
                          </h6>
                          <p>$180</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <h6>Total Price</h6>
                        <h6>₹{w.computedTotalPrice || "—"}</h6>
                      </div>
                    </div>
                  </div>
                  <Link to="#" className="btn btn-danger w-100 mb-4">
                    <i className="ti ti-x me-1" />
                    Cancel Booking
                  </Link>
                </div>
              </div>
            </fieldset>
          )}
        </div>
      </div>
      {/* Completed */}
      <div className="modal fade" id="reservation_completed">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <form>
                <span className="avatar avatar-lg bg-transparent-success rounded-circle text-success mb-3">
                  <i className="ti ti-check fs-26" />
                </span>
                <h4 className="mb-1">Updated Successful</h4>
                <p className="mb-3">
                  Reservation saved for{" "}
                  <span className="text-gray-9">
                    “{w.selectedCar?.name ?? "vehicle"}”
                  </span>
                  .
                </p>
                <div className="d-flex justify-content-center">
                  <Link
                    to={
                      id
                        ? `${all_routes.reservationDetails}/${id}`
                        : all_routes.reservationDetails
                    }
                    className="btn btn-primary w-100"
                  >
                    View Details
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Completed */}
      {/* Edit Pricing */}
      <div className="modal fade" id="edit_price">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mb-0">Edit Pricing</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form>
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Drivers <span className="text-danger">*</span>
                      </label>
                      <div className="d-flex align-items-center mt-2">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded me-2 flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/profiles/avatar-05.jpg"
                            alt=""
                          />
                        </Link>
                        <div>
                          <Link className="d-block fw-semibold" to="#">
                            Reuben Keen
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Pricing <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="$ 90"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <button type="button" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Pricing */}
    </>
  );
};

export default EditReservation;
