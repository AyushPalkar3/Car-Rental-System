import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
// import { driversData } from "../../common/json/driversList";
import CommonDatatable from "../../common/dataTable";
import { all_routes } from "../../../../router/all_routes";
import { carPartnerAPI } from "../../service/api/carPartner";
import { toast } from "react-toastify";

const CarPartnerList = () => {
  const [driversData, setDriverData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [deactivatePartnerId, setDeactivatePartnerId] = useState<string | null>(null);
  const [statusUpdating, setStatusUpdating] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editAddressLine, setEditAddressLine] = useState("");
  const [editPhoneDisplay, setEditPhoneDisplay] = useState("");
  const [editLoading, setEditLoading] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);

  // Add Car Partner form state
  const [formName, setFormName] = useState("");
  const [formPhoneNum, setFormPhoneNum] = useState<any>();
  const [formPassword, setFormPassword] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const filteredData = driversData.filter((item) =>
    statusFilter ? item.status === statusFilter : true
  );

  useEffect(() => {
    getAllCarPartner()
  }, [])

  const getAllCarPartner = async () => {
    try {
      const response = await carPartnerAPI.getAll();
      console.log(response.data);
      setDriverData(response.data);
    } catch (error) {
      console.error("Error fetching car partners:", error);
    }
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const hideEditModal = () => {
    const el = document.getElementById("edit_driver");
    const bs = (window as unknown as { bootstrap?: { Modal: { getInstance: (n: HTMLElement) => { hide: () => void } | null } } }).bootstrap?.Modal?.getInstance(el as HTMLElement);
    bs?.hide();
  };

  const resetEditForm = () => {
    setEditId(null);
    setEditName("");
    setEditEmail("");
    setEditAddressLine("");
    setEditPhoneDisplay("");
    setEditError(null);
    setEditLoading(false);
  };

  const openEditPartner = (record: any) => {
    setEditId(record.id);
    setEditName(record.name?.trim() || "");
    setEditEmail(record.email?.trim() || "");
    setEditAddressLine(record.address?.trim() || "");
    setEditPhoneDisplay(record.phoneNum || "");
    setEditError(null);
  };

  const handleSaveEditPartner = async () => {
    if (!editId) return;
    if (!editName.trim()) {
      setEditError("Name is required.");
      return;
    }
    if (!editEmail.trim()) {
      setEditError("Email is required.");
      return;
    }
    setEditError(null);
    setEditLoading(true);
    try {
      await carPartnerAPI.update(editId, {
        name: editName.trim(),
        email: editEmail.trim(),
        address: editAddressLine.trim() || null,
      });
      toast.success("Car partner updated.");
      resetEditForm();
      hideEditModal();
      await getAllCarPartner();
    } catch (e: any) {
      const msg =
        e?.response?.data?.message || e?.message || "Could not save changes.";
      setEditError(msg);
      toast.error(msg);
    } finally {
      setEditLoading(false);
    }
  };

  const hideDeleteModal = () => {
    const el = document.getElementById("delete_driver");
    const bs = (window as unknown as { bootstrap?: { Modal: { getInstance: (n: HTMLElement) => { hide: () => void } | null } } }).bootstrap?.Modal?.getInstance(el as HTMLElement);
    bs?.hide();
  };

  const handleConfirmDeactivatePartner = async () => {
    if (!deactivatePartnerId) return;
    setStatusUpdating(true);
    try {
      await carPartnerAPI.delete(deactivatePartnerId);
      toast.success("Car partner deleted. Their cars were removed and active bookings cancelled.");
      setDeactivatePartnerId(null);
      hideDeleteModal();
      await getAllCarPartner();
    } catch (e: any) {
      toast.error(
        e?.response?.data?.message || e?.message || "Could not delete car partner"
      );
    } finally {
      setStatusUpdating(false);
    }
  };

  const handleCreateCarPartner = async () => {
    if (!formName.trim() || !formPhoneNum || !formPassword.trim()) {
      setFormError("All fields are required.");
      return;
    }
    setFormError(null);
    setFormLoading(true);
    try {
      await carPartnerAPI.create({
        name: formName.trim(),
        phoneNum: formPhoneNum,
        password: formPassword,
      });
      // Reset form
      setFormName("");
      setFormPhoneNum(undefined);
      setFormPassword("");
      // Close modal
      const modalEl = document.getElementById("add_driver");
      if (modalEl) {
        const bsModal = (window as any).bootstrap?.Modal?.getInstance(modalEl);
        bsModal?.hide();
      }
      // Refresh list
      getAllCarPartner();
    } catch (error: any) {
      console.log(error,"Partner error")
      setFormError(
        error?.message || "Failed to create car partner."
      );
    } finally {
      setFormLoading(false);
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <div>
            <h6 className="fs-14 fw-semibold">
              <Link to="#">{record.name}</Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNum",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.phoneNum.localeCompare(b.phoneNum),
    },
    {
      title: "Total cars",
      dataIndex: "_count",
      render: (_: unknown, record: any) => (
        <p className="text-gray-9 mb-0">{record._count?.cars ?? 0}</p>
      ),
      sorter: (a: any, b: any) =>
        (a._count?.cars ?? 0) - (b._count?.cars ?? 0),
    },
    {
      title: "Joining date",
      dataIndex: "createdAt",
      render: (iso: string) => (
        <p className="text-gray-9 mb-0">
          {iso
            ? new Date(iso).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : "—"}
        </p>
      ),
      sorter: (a: any, b: any) =>
        new Date(a.createdAt || 0).getTime() -
        new Date(b.createdAt || 0).getTime(),
    },
    // {
    //   title: "LICENSE NO",
    //   dataIndex: "LICENSE_NO",
    //   render: (text: string) => <p className="text-gray-9">{text}</p>,
    //   sorter: (a: any, b: any) => a.LICENSE_NO.length - b.LICENSE_NO.length,
    // },
    // {
    //   title: "EXPIRY DATE",
    //   dataIndex: "EXPIRY_DATE",
    //   render: (text: string) => <p className="text-gray-9">{text}</p>,
    //   sorter: (a: any, b: any) => a.EXPIRY_DATE.length - b.EXPIRY_DATE.length,
    // },
    {
      title: "Status",
      dataIndex: "status",
      render: (text: string) => (
        <span className="badge badge-dark-transparent d-flex align-items-center">
          <i
            className={`ti ti-point-filled  ${text === "Active" ? "text-success" : "text-danger"} me-1`}
          />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.status.localeCompare(b.status),
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
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#edit_driver"
                onClick={() => openEditPartner(record)}
              >
                <i className="ti ti-edit me-1" />
                Edit
              </Link>
            </li>
            {record.status === "Active" ? (
              <li>
                <Link
                  className="dropdown-item rounded-1"
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#delete_driver"
                  onClick={() => setDeactivatePartnerId(record.id)}
                >
                  <i className="ti ti-trash me-1" />
                  Delete
                </Link>
              </li>
            ) : null}
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
            <h4 className="mb-1">Car Partner</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Car Partner
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
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_driver"
              >
                <i className="ti ti-plus me-2" />
                Add New Car Partner
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
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ti ti-badge fs-16 me-1" />
                {statusFilter ? `Status: ${statusFilter}` : "Status"}
              </Link>
              <ul className="dropdown-menu dropdown-menu-md p-2">
                <li
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => setStatusFilter("Active")}
                >
                  Active
                </li>
                <li
                  className="dropdown-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => setStatusFilter("Inactive")}
                >
                  Inactive
                </li>
                {statusFilter && (
                  <li
                    className="dropdown-item text-danger"
                    style={{ cursor: "pointer" }}
                    onClick={() => setStatusFilter("")}
                  >
                    Clear Filter
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="dropdown me-2">
              
              <ul className="dropdown-menu dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Delete
                  </Link>
                </li>
              </ul>
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
                  value={searchValue} // Controlled input
                  onChange={handleSearchChange} // Update search value
                />
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown-menu dropdown-menu-lg p-2">
                <ul>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span className="d-inline-flex align-items-center">
                        <i className="ti ti-grip-vertical me-1" />
                        DRIVERS
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
                        EMAIL
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
                        LICENSE NO
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
                        EXPIRY DATE
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
                        STATUS
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
        {/* Custom Data Table */}
        <CommonDatatable
          dataSource={filteredData}
          columns={columns}
          searchValue={searchValue}
          showRowSelection={false}
        />
        {/* Custom Data Table */}
      </div>

      {/* Delete  */}
      <div className="modal fade" id="delete_driver">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete car partner</h4>
              <p className="mb-3 text-start small text-gray-9">
                This removes the partner from the list, withdraws all of their vehicles from the fleet,
                and cancels pending and active bookings on those cars. Past completed bookings and
                payment records stay for history.
              </p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={() => setDeactivatePartnerId(null)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={statusUpdating || !deactivatePartnerId}
                  onClick={() => void handleConfirmDeactivatePartner()}
                >
                  {statusUpdating ? "Deleting…" : "Yes, delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}
      {/* Add Driver */}
      <div className="modal fade" id="add_driver">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add Car Partner</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="row">
                {/* <div className="mb-3">
                  <label className="form-label">
                    Image <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                      <i className="ti ti-photo-up text-gray-4 fs-24" />
                    </div>
                    <div className="profile-upload">
                      <div className="profile-uploader d-flex align-items-center">
                        <div className="drag-upload-btn btn btn-md btn-dark">
                          <i className="ti ti-photo-up fs-14" />
                          Upload
                          <input
                            type="file"
                            className="form-control image-sign"
                            multiple
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="fs-14">
                          Upload Image size 180*180, within 5MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Driver Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter driver name"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter in 10 digit"
                      value={formPhoneNum ?? ""}
                      onChange={(e) => setFormPhoneNum(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Password <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Enter password"
                      value={formPassword}
                      onChange={(e) => setFormPassword(e.target.value)}
                    />
                  </div>
                </div>
                {formError && (
                  <div className="col-md-12">
                    <div className="alert alert-danger py-2 mb-2">{formError}</div>
                  </div>
                )}
                {/* <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Card Number <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div> */}
                {/* <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Date of Issue <span className="text-danger">*</span>
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
                </div> */}
                {/* <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Valid Date <span className="text-danger">*</span>
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
                </div> */}
                {/* <div className="col-md-12">
                  <label className="form-label"> Document</label>
                  <div className="document-upload text-center br-3 mb-3">
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
                    <p className="fs-12 mb-0">Maximum size 50mb</p>
                    <input
                      type="file"
                      className="form-control image-sign"
                      multiple
                      accept=".pdf, .txt, .doc, .docx"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setFormError(null);
                    setFormName("");
                    setFormPhoneNum(undefined);
                    setFormPassword("");
                  }}
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCreateCarPartner}
                  disabled={formLoading}
                >
                  {formLoading ? "Creating..." : "Create New"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Driver */}
      {/* Edit Car Partner */}
      <div className="modal fade" id="edit_driver">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit Car Partner</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={resetEditForm}
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body pb-1">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Partner name"
                      disabled={editLoading}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Phone number</label>
                    <input
                      type="text"
                      className="form-control bg-light"
                      value={editPhoneDisplay}
                      readOnly
                      tabIndex={-1}
                      aria-readonly
                    />
                    <p className="fs-12 text-muted mb-0 mt-1">
                      Phone number cannot be changed.
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      placeholder="email@example.com"
                      disabled={editLoading}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">Address Line</label>
                    <input
                      className="form-control"
                      type="text"
                      value={editAddressLine}
                      onChange={(e) => setEditAddressLine(e.target.value)}
                      placeholder="Street, area…"
                      disabled={editLoading}
                    />
                  </div>
                </div>
                {editError ? (
                  <div className="col-md-12">
                    <div className="alert alert-danger py-2 mb-0">{editError}</div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                  disabled={editLoading}
                  onClick={resetEditForm}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={editLoading || !editId}
                  onClick={() => void handleSaveEditPartner()}
                >
                  {editLoading ? "Saving…" : "Save changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Car Partner */}
    </>
  );
};

export default CarPartnerList;
