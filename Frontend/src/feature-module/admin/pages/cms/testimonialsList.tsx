import React, { useState } from "react";
import { all_routes } from "../../../../router/all_routes";
import { Link } from "react-router-dom";
import { testimonialsData } from "../../common/json/testimonialsList";
import CommonDatatable from "../../common/dataTable";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import CustomSelect from "../../common/select/commonSelect";
import { Ratings } from "../../common/json/selectOption";

const TestimonialsList = () => {
  const data = testimonialsData;
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "CUSTOMER",
      dataIndex: "CUSTOMER",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.customerDetails}
            className="avatar avatar-rounded me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/customer/${record.IMAGE}`}
              alt=""
            />
          </Link>
          <div>
            <Link to={all_routes.customerDetails} className="fw-semibold">
              {text}
            </Link>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CUSTOMER.length - b.CUSTOMER.length,
    },
    {
      title: "RATING",
      dataIndex: "RATING",
      render: (text: string) => (
        <div className="d-flex align-items-center">
          <span className="me-1">
            <i className="ti ti-star-filled text-warning" />
          </span>
          <span className="me-1">
            <i className="ti ti-star-filled text-warning" />
          </span>
          <span className="me-1">
            <i className="ti ti-star-filled text-warning" />
          </span>
          <span className="me-1">
            <i className="ti ti-star-filled text-warning" />
          </span>
          <span className="me-1">
            <i className="ti ti-star-filled text-warning" />
          </span>
          <span>{text}</span>
        </div>
      ),
      sorter: (a: any, b: any) => a.RATING.length - b.RATING.length,
    },
    {
      title: "REVIEW",
      dataIndex: "REVIEW",
      render: (text: string) => <Link to="#">{text}</Link>,
      sorter: (a: any, b: any) => a.REVIEW.length - b.REVIEW.length,
    },
    {
      title: "CREATED DATE",
      dataIndex: "CREATEDDATE",
      sorter: (a: any, b: any) => a.CREATEDDATE.length - b.CREATEDDATE.length,
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
                data-bs-target="#edit_testimonial"
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
                data-bs-target="#delete_testimonials"
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
            <h2 className="mb-1">Testimonials</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Testimonials
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2">
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#add_testimonial"
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add Testimonial
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
          </div>
        </div>
        {/* /Table Header */}
        <div className="collapse" id="filtercollapse">
          <div className="filterbox mb-3 d-flex align-items-center">
            <h6 className="me-3">Filters</h6>
            <div className="dropdown me-3">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Rating
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
                    5 Star
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    4 Star
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    3 Star
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    2 Star
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    1 Star
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
      <div className="modal fade" id="add_testimonial">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Add Testimonial</h5>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">
                  Image <span className="text-danger">*</span>
                </label>
                <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
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
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Customer <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Ratings <span className="text-danger">*</span>
                </label>
                <CustomSelect
                  options={Ratings}
                  className="select d-flex"
                  placeholder="Select"
                />
              </div>
              <div className="mb-0">
                <label className="form-label">
                  Review <span className="text-danger">*</span>
                </label>
                <textarea className="form-control" defaultValue={""} />
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
                <Link
                  to={all_routes.adminTestimonialsList}
                  className="btn btn-primary"
                >
                  Create New
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Extra Service */}
      {/* Edit Brand */}
      <div className="modal fade" id="edit_testimonial">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Testimonial</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x fs-16" />
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">
                  Image <span className="text-danger">*</span>
                </label>
                <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames p-2">
                    <ImageWithBasePath
                      src="assets/admin/img/customer/customer-01.jpg"
                      className="rounded-2 img-fluid"
                      alt="brands"
                    />
                    <Link
                      to="#"
                      className="upload-img-trash btn btn-sm btn-danger-light rounded-circle"
                    >
                      <i className="ti ti-trash fs-12" />
                    </Link>
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
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Customer <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Andrew Simmons"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Ratings <span className="text-danger">*</span>
                </label>
                <CustomSelect
                  options={Ratings}
                  defaultValue={Ratings[1]}
                  className="select d-flex"
                  placeholder="Select"
                />
              </div>
              <div className="mb-0">
                <label className="form-label">
                  Review <span className="text-danger">*</span>
                </label>
                <textarea
                  className="form-control"
                  defaultValue={"The rental was spotless, great host!"}
                />
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
                  <Link
                    to={all_routes.adminTestimonialsList}
                    className="btn btn-primary"
                  >
                    Create New
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Brand */}

      {/* Delete Extra Service */}
      <div className="modal fade" id="delete_testimonials">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash fs-26" />
              </span>
              <h4 className="mb-1">Delete Testimonial</h4>
              <p className="mb-3">
                Are you sure you want to delete testimonial?
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

export default TestimonialsList;
