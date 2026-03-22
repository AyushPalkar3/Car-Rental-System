import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import { all_routes } from "../../../../router/all_routes";
import { inspectionsData } from "../../common/json/inspectionsList";
import CommonDatatable from "../../common/dataTable";
import CustomSelect from "../../common/select/commonSelect";
import {
  InspectionBy,
  InspectionStatus,
  invoiceCar,
  RepairStatus,
} from "../../common/json/selectOption";
import { DatePicker } from "antd";

const InspectionsList = () => {
  const data = inspectionsData;
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "CAR",
      dataIndex: "CAR",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.carDetails}
            className="avatar me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/car/${record.IMAGE}`}
              alt=""
            />
          </Link>
          <div>
            <Link to={all_routes.carDetails} className="fw-semibold d-block">
              {text}
            </Link>
            <span className="fs-13">{record.MODAL}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CAR.length - b.CAR.length,
    },
    {
      title: "INSPECTED STATUS",
      dataIndex: "INSPECTEDSTATUS",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Completed"
              ? "badge-soft-success"
              : text === "Inprogress"
                ? "badge-soft-info"
                : text === "Pending"
                  ? "badge-soft-purple"
                  : text === "On Hold"
                    ? "badge-soft-warning"
                    : "badge-soft-danger"
          } d-inline-flex align-items-center badge-sm`}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) =>
        a.INSPECTEDSTATUS.length - b.INSPECTEDSTATUS.length,
    },
    {
      title: "INSPECTIONDATE",
      dataIndex: "INSPECTIONDATE",
      render: (text: string) => <p className="text-gray-9 mb-0">{text} </p>,
      sorter: (a: any, b: any) =>
        a.INSPECTIONDATE.length - b.INSPECTIONDATE.length,
    },
    {
      title: "INSPECTED BY",
      dataIndex: "INSPECTEDBY",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar avatar-rounded me-2 flex-shrink-0">
            <ImageWithBasePath
              src={`assets/admin/img/profiles/${record.INSPECTEDIMAGE}`}
              alt=""
              className="rounded-circle"
            />
          </Link>
          <div>
            <Link to="#" className="fw-semibold d-block">
              {text}
            </Link>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.INSPECTEDBY.length - b.INSPECTEDBY.length,
    },
    {
      title: "REPAIR STATUS",
      dataIndex: "REPAIRSTATUS",
      render: (text: string) => (
        <span
          className={`badge ${
            text === "Completed"
              ? "badge-success-transparent"
              : text === "Pending"
                ? "badge-info-transparent"
                : text === "Need Repair"
                  ? "badge-orange-transparent"
                  : text === "Inprogress"
                    ? "badge-purple-transparent"
                    : "badge-warning-transparent"
          } d-inline-flex align-items-center badge-sm`}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.REPAIRSTATUS.length - b.REPAIRSTATUS.length,
    },
    {
      title: "Action",
      dataIndex: "",
      render: () => (
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
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#edit_inspection"
              >
                <i className="ti ti-edit me-1" />
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete"
              >
                <i className="ti ti-trash me-1" />
                Delete
              </Link>
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
            <h2 className="mb-1">Inspection</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Inspection
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <Link to="#" className="btn btn-white d-flex align-items-center">
                <i className="ti ti-printer me-2" />
                Print
              </Link>
            </div>
            <div className="me-2 mb-2">
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export
                </Link>
              </div>
            </div>
            <div className="mb-2">
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#add_inspection"
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add New Inspection
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
                <i className="ti ti-filter me-1" /> Sort By : Latest
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Latest
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Ascending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Desending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Last Month
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Last 7 Days
                  </Link>
                </li>
              </ul>
            </div>
            <div className="me-2">
              <div className="input-icon-start position-relative topdatepicker">
                <span className="input-icon-addon">
                  <i className="ti ti-calendar" />
                </span>
                <PredefinedDateRanges />
              </div>
            </div>
            <div className="dropdown">
              <Link
                to="#filtercollapse"
                className="filtercollapse coloumn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="filtercollapse"
              >
                <i className="ti ti-filter me-1" /> Filter{" "}
                <span className="badge badge-xs rounded-pill bg-danger ms-2">
                  0
                </span>
              </Link>
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
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-layout-board me-1" /> Columns
              </Link>
              <div className="dropdown-menu dropdown-menu-lg p-2">
                <ul>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span className="d-inline-flex align-items-center">
                        <i className="ti ti-grip-vertical me-1" />
                        CAR
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        INSPECTED STATUS
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        INSPECTION DATE
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        INSPECTED BY
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        REPAIR STATUS
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}
        <div className="collapse" id="filtercollapse">
          <div className="filterbox mb-3 d-flex align-items-center">
            <h6 className="me-3">Filters</h6>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Select Inspected Status
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-3">
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Completed
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Inprogress
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Pending
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    On Hold
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Rejected
                  </label>
                </li>
              </ul>
            </div>
            <div className="dropdown me-3">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Select Repair Status
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-3">
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Completed
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Inprogress
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Pending
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    On Hold
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Rejected
                  </label>
                </li>
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
        {/* Custom Data Table */}
        <CommonDatatable
          dataSource={data}
          columns={columns}
          searchValue={searchValue}
        />
        {/* Custom Data Table */}
      </div>

      {/* Add Extra Service */}
      <div className="modal fade" id="add_inspection">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Inspection</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form action="#">
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Car <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={invoiceCar}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Inspection Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Inspection By <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={InspectionBy}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
                <h6 className="mb-2">Incoming Details</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Odometer <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Fuel <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <h6 className="mb-2">Checklist</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-1"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-1"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Body Condition
                        </label>
                        <p className="ms-2">
                          Look for dents, scratches, rust, or paint damage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-2"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-2"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Glass &amp; Mirrors
                        </label>
                        <p className="ms-2">Ensure no cracks or chips.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-3"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-3"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Lights
                        </label>
                        <p className="ms-2">
                          Test headlights, turn signals, and fog lights.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-4"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-4"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Tires &amp; Wheels
                        </label>
                        <p className="ms-2">
                          Inspect depth, pressure and signs of damage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-5"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-5"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Engine Oil, Coolant &amp; Brake Fluid
                        </label>
                        <p className="ms-2">
                          Check level, condition and any leaks
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-6"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-6"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Battery
                        </label>
                        <p className="ms-2">
                          Check terminals for corrosion and test charge.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-7"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-7"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Seats &amp; Seatbelts
                        </label>
                        <p className="ms-2">
                          Look for dents, scratches, rust, or paint damage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-8"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-8"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          AC &amp; Heater
                        </label>
                        <p className="ms-2">Verify proper functioning.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-19"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-19"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Brakes &amp; Suspension
                        </label>
                        <p className="ms-2">
                          Listen for grinding or squeaking noises
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-10"
                          type="checkbox"
                        />
                        <label
                          htmlFor="check-10"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Exhaust System{" "}
                        </label>
                        <p className="ms-2">
                          Look for rust, holes, or excessive smoke.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Notes</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Inspection Status <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={InspectionStatus}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Repair Status <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={RepairStatus}
                        className="select d-flex"
                        placeholder="Select"
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
                  <Link to="#" className="btn btn-primary">
                    Create New
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Extra Service */}
      {/* Edit Extra Service */}
      <div className="modal fade" id="edit_inspection">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Inspection</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <form action="#">
              <div className="modal-body pb-1">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Car <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={invoiceCar}
                        defaultValue={invoiceCar[0]}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Inspection Date <span className="text-danger">*</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Inspection By <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={InspectionBy}
                        defaultValue={InspectionBy[0]}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                </div>
                <h6 className="mb-2">Incoming Details</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Odometer <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="12,000 km"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Fuel <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="2 litres"
                      />
                    </div>
                  </div>
                </div>
                <h6 className="mb-2">Checklist</h6>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-11"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-11"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Body Condition
                        </label>
                        <p className="ms-2">
                          Look for dents, scratches, rust, or paint damage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-12"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-12"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Glass &amp; Mirrors
                        </label>
                        <p className="ms-2">Ensure no cracks or chips.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-13"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-13"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Lights
                        </label>
                        <p className="ms-2">
                          Test headlights, turn signals, and fog lights.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-14"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-14"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Tires &amp; Wheels
                        </label>
                        <p className="ms-2">
                          Inspect depth, pressure and signs of damage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-15"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-15"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Engine Oil, Coolant &amp; Brake Fluid
                        </label>
                        <p className="ms-2">
                          Check level, condition and any leaks
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-16"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-16"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Battery
                        </label>
                        <p className="ms-2">
                          Check terminals for corrosion and test charge.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-17"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-17"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Seats &amp; Seatbelts
                        </label>
                        <p className="ms-2">
                          Look for dents, scratches, rust, or paint damage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-18"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-18"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          AC &amp; Heater
                        </label>
                        <p className="ms-2">Verify proper functioning.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-20"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-20"
                          className="form-check-label text-gray-19 fs-14 mt-0"
                        >
                          Brakes &amp; Suspension
                        </label>
                        <p className="ms-2">
                          Listen for grinding or squeaking noises
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <div className="form-check form-check-md mb-0">
                        <input
                          className="form-check-input"
                          id="check-39"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          htmlFor="check-39"
                          className="form-check-label text-gray-9 fs-14 mt-0"
                        >
                          Exhaust System{" "}
                        </label>
                        <p className="ms-2">
                          Look for rust, holes, or excessive smoke.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Notes</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Inspection Status <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={InspectionStatus}
                        defaultValue={InspectionStatus[0]}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Repair Status <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={RepairStatus}
                        defaultValue={RepairStatus[0]}
                        className="select d-flex"
                        placeholder="Select"
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
                  <Link to="#" className="btn btn-primary">
                    Save Changes
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Extra Service */}

      {/* Delete Extra Service */}
      <div className="modal fade" id="delete">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Inspection</h4>
              <p className="mb-3">
                Are you sure you want to delete inspection?
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Extra Service */}
    </>
  );
};

export default InspectionsList;
