import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import { announcementsData } from "../../common/json/announcementsList";
import CommonDatatable from "../../common/dataTable";
import CustomSelect from "../../common/select/commonSelect";
import { AnnouncementType, Users } from "../../common/json/selectOption";
import DefaultEditor from "react-simple-wysiwyg";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";

const AnnouncementsList = () => {
  const data = announcementsData;
  const [searchValue, setSearchValue] = useState<string>("");
  const [values, setValueOne] = React.useState();

  function onChange(e: any) {
    setValueOne(e.target.value);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "DATE",
      dataIndex: "DATE",
      render: (text: string, record: any) => (
        <div>
          <p className="text-gray-9 mb-0">{text}</p>
          <p className="fs-13 text-gray-5">{record.TIME}</p>
        </div>
      ),
      sorter: (a: any, b: any) => a.DATE.length - b.DATE.length,
    },
    {
      title: "ANNOUNCEMENT",
      dataIndex: "ANNOUNCEMENT",
      render: (text: string, record: any) => (
        <div>
          <p className="text-gray-9 mb-0">{text}</p>
          <p className="fs-13 text-gray-5">{record.CONTENT}</p>
        </div>
      ),
      sorter: (a: any, b: any) => a.ANNOUNCEMENT.length - b.ANNOUNCEMENT.length,
    },
    {
      title: "TYPE",
      dataIndex: "TYPE",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.TYPE.length - b.TYPE.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${text === "Published" ? "badge-soft-success" : "badge-soft-danger"} d-inline-flex align-items-center badge-sm`}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
    {
      title: "",
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
                data-bs-target="#edit_announcement"
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
                data-bs-target="#announcement_detail"
              >
                <i className="ti ti-eye me-1" />
                Details
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_announcement"
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
            <h4 className="mb-1">Announcement</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Announcement
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2">
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_announcement"
              >
                <i className="ti ti-plus me-2" />
                Add Announcement
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
            <div className="dropdown">
              <Link
                to="#filtercollapse"
                className="filtercollapse coloumn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="filtercollapse"
              >
                <i className="ti ti-filter me-1" /> Filter
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
                />
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
                <span className="badge badge-xs rounded-pill bg-success me-2">
                  4
                </span>
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
                        value={searchValue} // Controlled input
                        onChange={handleSearchChange} // Update search value
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      defaultChecked
                    />
                    New Rental Service
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Special Offer
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      defaultChecked
                    />
                    New Vehicle Addition
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      defaultChecked
                    />
                    Seasonal Promotion
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Policy Update
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Branch Opening
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      defaultChecked
                    />
                    Customer Safety
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Loyalty Program
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Emergency Closure
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Online Booking Update
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
                Status
              </Link>
              <ul className="dropdown-menu dropdown-menu-md p-2">
                <li className="dropdown-item">Published</li>
                <li className="dropdown-item">Unpublish</li>
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

      <>
        {/* Add Announcement */}
        <div className="modal fade" id="add_announcement">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Add Announcement</h5>
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
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Announcement Title{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Announcement Type <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={AnnouncementType}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Users <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={Users}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Description <span className="text-danger">*</span>
                      </label>
                      <DefaultEditor value={values} onChange={onChange} />
                      <p className="mt-2">Maximum 60 Words</p>
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
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Create New
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Announcement */}
        {/* Edit Announcement */}
        <div className="modal fade" id="edit_announcement">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Edit Announcement</h5>
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
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Announcement Title{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Limited-Time Offer!"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Announcement Type <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={AnnouncementType}
                        defaultValue={AnnouncementType[0]}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Users <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={Users}
                        defaultValue={Users[0]}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Description <span className="text-danger">*</span>
                      </label>
                      {/* <div className="editor">
                        We are now offering premium car rentals in your city!
                        Book your ride today and enjoy unbeatable rates.
                      </div> */}
                      <DefaultEditor value={values} onChange={onChange} />
                      <p className="mt-2">Maximum 60 Words</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label form-label mt-0 mb-0">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        defaultChecked
                      />
                      Status
                    </label>
                  </div>
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
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Announcement */}
        {/* Announcement Details */}
        <div className="modal fade" id="announcement_detail">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Announcement Details</h5>
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
                <div className="mb-3">
                  <p className="text-gray-9 fw-medium mb-0">
                    Announcement Type
                  </p>
                  <p>New Rental Servicepe</p>
                </div>
                <div className="mb-3">
                  <p className="text-gray-9 fw-medium mb-0">Description</p>
                  <p>Limited-Time Offer!</p>
                </div>
                <div className="mb-3">
                  <p className="text-gray-9 fw-medium mb-0">
                    Announcement Type
                  </p>
                  <p>
                    {" "}
                    We are now offering premium car rentals in your city! Book
                    your ride today and enjoy unbeatable rates.
                  </p>
                </div>
                <div className="mb-3">
                  <p className="text-gray-9 fw-medium mb-0">Date</p>
                  <p>10 Jan 2025</p>
                </div>
                <h6 className="mb-3">Announcement Views</h6>
                <div className="custom-datatable-filter table-responsive brandstable mb-3">
                  <table className="table">
                    <thead className="thead-light">
                      <tr>
                        <th>USER</th>
                        <th>ROLE</th>
                        <th>VIEWED DATE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar me-2 flex-shrink-0"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-20.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </Link>
                            <h6>
                              <Link to="##" className="fs-14 fw-semibold">
                                Andrew Simons
                              </Link>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9">Admin</p>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-0">29 Nov 2024</p>
                          <p className="fs-13 text-gray-5">01:00 PM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar me-2 flex-shrink-0"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-21.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </Link>
                            <h6>
                              <Link to="##" className="fs-14 fw-semibold">
                                David Steiger
                              </Link>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9">Manager</p>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-0">19 Dec 2024</p>
                          <p className="fs-13 text-gray-5">10:00 AM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar me-2 flex-shrink-0"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-12.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </Link>
                            <h6>
                              <Link to="##" className="fs-14 fw-semibold">
                                Virginia Phu
                              </Link>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9">Customer</p>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-0">24 Dec 2024</p>
                          <p className="fs-13 text-gray-5">12:32 PM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar me-2 flex-shrink-0"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-22.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </Link>
                            <h6>
                              <Link to="##" className="fs-14 fw-semibold">
                                Walter Hartmann
                              </Link>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9">Accountant</p>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-0">29 Nov 2024</p>
                          <p className="fs-13 text-gray-5">03:15 PM</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              to="car-details"
                              className="avatar me-2 flex-shrink-0"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-27.jpg"
                                className="rounded-circle"
                                alt=""
                              />
                            </Link>
                            <h6>
                              <Link to="##" className="fs-14 fw-semibold">
                                Andrea Jermaine
                              </Link>
                            </h6>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9">Inspector</p>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-0">03 Nov 2024</p>
                          <p className="fs-13 text-gray-5">04:10 PM</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Announcement Details */}
      </>

      {/* Delete  */}
      <div className="modal fade" id="delete_announcement">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Announcement</h4>
              <p className="mb-3">
                Are you sure you want to delete announcement?
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to={all_routes.adminAnnouncementsList}
                  className="btn btn-primary"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}
    </>
  );
};

export default AnnouncementsList;
