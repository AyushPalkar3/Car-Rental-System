import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { brandsData } from "../../../common/json/brandsList";
import CommonDatatable from "../../../common/dataTable";

const BrandsList = () => {
  const data = brandsData;
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "NAME",
      dataIndex: "NAME",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center file-name-icon">
          <Link to="#" className="avatar avatar-lg border">
            <ImageWithBasePath
              src={`assets/admin/img/brands/${record.IMAGE}`}
              className="img-fluid"
              alt="brands"
            />
          </Link>
          <div className="ms-2">
            <h6 className="fw-medium">
              <Link to="#">{text}</Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.NAME.length - b.NAME.length,
    },

    {
      title: "TOTAL CARS",
      dataIndex: "TOTALCARS",
      sorter: (a: any, b: any) => a.TOTALCARS.length - b.TOTALCARS.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${text === "Active" ? "badge-success-transparent" : "badge-danger-transparent"} d-inline-flex align-items-center badge-sm`}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
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
                data-bs-target="#edit_brand"
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
                data-bs-target="#delete_brand"
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
            <h4 className="mb-1">Brands</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Brands
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
            </div> */}
            <div className="mb-2">
              <Link
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#add_brand"
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add New Brand
              </Link>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
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
              className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <i className="ti ti-badge me-1" /> Status
            </Link>
            <ul className="dropdown-menu  dropdown-menu-end p-2">
              <li>
                <Link to="#" className="dropdown-item rounded-1">
                  Active
                </Link>
              </li>
              <li>
                <Link to="#" className="dropdown-item rounded-1">
                  Inactive
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* /Table Header */}
        {/* Custom Data Table */}
        <CommonDatatable
          dataSource={data}
          columns={columns}
          searchValue={searchValue}
        />
        {/* Custom Data Table */}
      </div>

      {/* Add Brand */}
      <div className="modal fade" id="add_brand">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Brand</h5>
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
                <label className="form-label">
                  Brand Image <span className="text-danger">*</span>
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
                  Brand Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
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
          </div>
        </div>
      </div>
      {/* /Add Brand */}
      {/* Edit Brand */}
      <div className="modal fade" id="edit_brand">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="mb-0">Edit Brand</h4>
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
                <label className="form-label">
                  Brand Image <span className="text-danger">*</span>
                </label>
                <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                  <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                    <ImageWithBasePath
                      src="assets/admin/img/brands/toyota.svg"
                      className="upload-img img-fluid"
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
                  Brand Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Toyota"
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
                  <Link to="#" className="btn btn-primary">
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Brand */}

      {/* Delete Brand */}
      <div className="modal fade" id="delete_brand">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Brand</h4>
              <p className="mb-3">Are you sure you want to delete brand?</p>
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
      {/* /Delete Brand */}
    </>
  );
};

export default BrandsList;
