
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import { Link } from 'react-router-dom'

const SignaturesSetting = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5 className="fw-bold">App Settings</h5>
    </div>
    <div className="card-body">
      <h6 className="fw-bold mb-3">Signatures</h6>
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
        <div className="d-flex align-items-center flex-wrap row-gap-3">
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
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
          <Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#add_signatures"
            className="btn btn-primary d-flex align-items-center"
          >
            <i className="ti ti-plus me-2" />
            Add New Signature
          </Link>
        </div>
      </div>
      <div className="custom-datatable-filter table-responsive">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>SIGNATURE NAME</th>
              <th>SIGNATURE</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link to="#">Allen</Link>
                  <span className=" ms-2 badge badge-soft-purple">Default</span>
                </h6>
              </td>
              <td>
                <ImageWithBasePath src="assets/admin/img/icons/sign.svg" alt="" />
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
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
                        data-bs-target="#edit_signature"
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
                        data-bs-target="#delete_signature"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link to="#">Raymond</Link>
                </h6>
              </td>
              <td>
                <ImageWithBasePath src="assets/admin/img/icons/sign.svg" alt="" />
              </td>
              <td>
                <span className="badge badge-danger-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Inactive
                </span>
              </td>
              <td>
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
                        data-bs-target="#edit_signature"
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
                        data-bs-target="#delete_signature"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link to="#">Ralph</Link>
                </h6>
              </td>
              <td>
                <ImageWithBasePath src="assets/admin/img/icons/sign.svg" alt="" />
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
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
                        data-bs-target="#edit_signature"
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
                        data-bs-target="#delete_signature"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link to="#">Steven</Link>
                </h6>
              </td>
              <td>
                <ImageWithBasePath src="assets/admin/img/icons/sign.svg" alt="" />
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
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
                        data-bs-target="#edit_signature"
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
                        data-bs-target="#delete_signature"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="modal fade" id="add_signatures">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Signature</h5>
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
          <div className="row">
            <div className="mb-3">
              <label className="form-label">
                Image <span className="text-danger">*</span>
              </label>
              <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">
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
            <label className="form-check-label form-label mb-3">
              <input
                className="form-check-input form-label"
                type="checkbox"
                role="switch"
                defaultChecked
              />
              Mark as Default
            </label>
            <div className="mb-0">
              <label className="form-label">
                Signature Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
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
              Create New
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="edit_signature">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Signature</h5>
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
          <div className="row">
            <div className="mb-3">
              <label className="form-label">
                Image <span className="text-danger">*</span>
              </label>
              <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                  <ImageWithBasePath
                    src="assets/admin/img/icons/sign.svg"
                    className="img-fluid rounded object-fit-contain"
                    alt="img"
                  />
                  <span className="avatar-badge bg-light text-danger m-1">
                    <i className="ti ti-trash" />
                  </span>
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
            <label className="form-check-label form-label mb-3">
              <input
                className="form-check-input form-label"
                type="checkbox"
                role="switch"
                defaultChecked
              />
              Mark as Default
            </label>
            <div className="mb-0">
              <label className="form-label">
                Signature Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                defaultValue="Allen"
                className="form-control"
              />
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-between">
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
          <div className="d-flex justify-content-center ">
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
      </div>
    </div>
  </div>
  {/* Delete  */}
  <div className="modal fade" id="delete_signature">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <form>
            <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
              <i className="ti ti-trash-x fs-26" />
            </span>
            <h4 className="mb-1">Delete Signatures</h4>
            <p className="mb-3">Are you sure you want to delete Signatures?</p>
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
                Yes, Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</>

  )
}

export default SignaturesSetting