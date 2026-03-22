
import { Link } from 'react-router-dom'
import CustomSelect from '../../../common/select/commonSelect'
import { InputType, Module } from '../../../common/json/selectOption'

const CustomFields = () => {
  return (
    <>
  <div className="card h-100">
    <div className="card-header">
      <h5 className="fw-bold">App Settings</h5>
    </div>
    <div className="card-body">
      <h6 className="fw-bold mb-3">Custom Fields</h6>
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
            data-bs-target="#add_field"
            className="btn btn-primary d-flex align-items-center"
          >
            <i className="ti ti-plus me-2" />
            Add New Field
          </Link>
        </div>
      </div>
      <div className="custom-datatable-filter table-responsive">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>MODULE</th>
              <th>LABEL</th>
              <th>TYPE</th>
              <th>DEFAULT VALUE</th>
              <th>REQUIRED/DISABLE</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link to="#">Drivers</Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">Total Rides</p>
              </td>
              <td>
                <p className="text-dark">Number</p>
              </td>
              <td>
                <p className="text-dark">0</p>
              </td>
              <td>
                <p className="text-dark">Required</p>
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
                        data-bs-target="#edit_field"
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
                        data-bs-target="#delete_field"
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
                  <Link to="#">Maintenance</Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">Fuel</p>
              </td>
              <td>
                <p className="text-dark">Number</p>
              </td>
              <td>
                <p className="text-dark">0</p>
              </td>
              <td>
                <p className="text-dark">Required</p>
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
                        data-bs-target="#edit_field"
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
                        data-bs-target="#delete_field"
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
                  <Link to="#">Inspection</Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">Inspection Type</p>
              </td>
              <td>
                <p className="text-dark">Select</p>
              </td>
              <td>
                <p className="text-dark">Routine</p>
              </td>
              <td>
                <p className="text-dark">Required</p>
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
                        data-bs-target="#edit_field"
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
                        data-bs-target="#delete_field"
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
  <div className="modal fade" id="add_field">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Custom Field</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body ">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Module <span className="text-danger">*</span>
                </label>
                
                <CustomSelect
                options={Module}
                className="select d-flex"
                placeholder="Select"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Input Type <span className="text-danger">*</span>
                </label>
                <CustomSelect
                options={InputType}
                className="select d-flex"
                placeholder="Select"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Label <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Default Value <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="d-flex align-items-center gap-2 ">
                <p className="text-gray-9 me-2 mb-0">Required</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    No
                  </label>
                </div>
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
              Create New
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="edit_field">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Custom Field</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body ">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label">
                  Module <span className="text-danger">*</span>
                </label>
                <CustomSelect
                options={Module}
                defaultValue={Module[0]}
                className="select d-flex"
                placeholder="Select"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Input Type <span className="text-danger">*</span>
                </label>
                <CustomSelect
                options={InputType}
                defaultValue={InputType[0]}
                className="select d-flex"
                placeholder="Select"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Label <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  defaultValue="Total Rides"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Default Value <span className="text-danger">*</span>
                </label>
                <input type="text" defaultValue={0} className="form-control" />
              </div>
              <div className="d-flex align-items-center gap-2 ">
                <p className="text-gray-9 me-2 mb-0">Required</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault3"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault4"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault4"
                  >
                    No
                  </label>
                </div>
              </div>
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
  <div className="modal fade" id="delete_field">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <form>
            <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
              <i className="ti ti-trash-x fs-26" />
            </span>
            <h4 className="mb-1">Delete Custom Fields</h4>
            <p className="mb-3">
              Are you sure you want to delete custom fields?
            </p>
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

export default CustomFields