
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../../router/all_routes'

const InsuranceSetting = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>Rental Settings</h5>
    </div>
    <div className="card-body">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-3">Insurance</h6>
        <div className="d-flex align-items-center">
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
          <Link
            to="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-insurance"
          >
            <i className="ti ti-plus me-1" />
            Add Insurance
          </Link>
        </div>
      </div>
      <div className="custom-datatable-filter table-responsive">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>INSURANCE NAME </th>
              <th>PRICE</th>
              <th>BENEFITS</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6 className="fw-medium fs-14">Full Premium Insurance</h6>
              </td>
              <td>$200</td>
              <td>
                <div className="d-flex align-items-center">
                  4 Benefits
                  <Link
                    to="#"
                    className="btn btn-xs btn-info-light border-info fs-14 py-0 px-1 ms-1"
                    data-bs-toggle="modal"
                    data-bs-target="#view-benifits"
                  >
                    <i className="ti ti-external-link" />
                  </Link>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-inline-flex align-items-center">
                  <i className="ti ti-point-filled text-success me-1" />
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
                        data-bs-target="#edit-insurance"
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
                        data-bs-target="#delete_backup"
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
                <h6 className="fw-medium fs-14">Roadside Assistance </h6>
              </td>
              <td>$250</td>
              <td>
                <div className="d-flex align-items-center">
                  6 Benefits
                  <Link
                    to="#"
                    className="btn btn-xs btn-info-light border-info fs-14 py-0 px-1 ms-1"
                    data-bs-toggle="modal"
                    data-bs-target="#view-benifits"
                  >
                    <i className="ti ti-external-link" />
                  </Link>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-inline-flex align-items-center">
                  <i className="ti ti-point-filled text-success me-1" />
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
                        data-bs-target="#edit-insurance"
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
                        data-bs-target="#delete_backup"
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
                <h6 className="fw-medium fs-14">Liability Insurance</h6>
              </td>
              <td>$150</td>
              <td>
                <div className="d-flex align-items-center">
                  3 Benefits
                  <Link
                    to="#"
                    className="btn btn-xs btn-info-light border-info fs-14 py-0 px-1 ms-1"
                    data-bs-toggle="modal"
                    data-bs-target="#view-benifits"
                  >
                    <i className="ti ti-external-link" />
                  </Link>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-inline-flex align-items-center">
                  <i className="ti ti-point-filled text-danger me-1" />
                  Inctive
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
                        data-bs-target="#edit-insurance"
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
                        data-bs-target="#delete_backup"
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
                <h6 className="fw-medium fs-14">
                  Personal Accident Insurance{" "}
                </h6>
              </td>
              <td>$300</td>
              <td>
                <div className="d-flex align-items-center">
                  3 Benefits
                  <Link
                    to="#"
                    className="btn btn-xs btn-info-light border-info fs-14 py-0 px-1 ms-1"
                    data-bs-toggle="modal"
                    data-bs-target="#view-benifits"
                  >
                    <i className="ti ti-external-link" />
                  </Link>
                </div>
              </td>
              <td>
                <span className="badge badge-dark-transparent d-inline-flex align-items-center">
                  <i className="ti ti-point-filled text-success me-1" />
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
                        data-bs-target="#edit-insurance"
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
                        data-bs-target="#delete_backup"
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
  {/* Add Insurance */}
  <div className="modal fade" id="add-insurance">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Add New Insurance</h4>
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
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Insurane Name <span className="text-danger"> *</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Price Type <span className="text-danger"> *</span>
              </label>
              <div className="d-flex align-items-center">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm4"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="Radio-sm4">
                    Daily
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm5"
                  />
                  <label className="form-check-label" htmlFor="Radio-sm5">
                    Fixed
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm6"
                  />
                  <label className="form-check-label" htmlFor="Radio-sm6">
                    Percentage
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Price <span className="text-danger"> *</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="add-insurance-benifit">
              <div className="mb-1">
                <label className="form-label">
                  Benefit <span className="text-danger"> *</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <Link
              to="#"
              className="d-inline-flex align-items-center text-info add-new-benifit"
            >
              <i className="ti ti-plus me-1" />
              Add New
            </Link>
          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center justify-content-end">
              <Link
                to="#"
                className="btn btn-light me-2"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                Create Insurance
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Insurance */}
  {/* Edit Insurance */}
  <div className="modal fade" id="edit-insurance">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Insurance</h4>
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
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Insurane Name <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="Full Premium Insurance"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Price Type <span className="text-danger"> *</span>
              </label>
              <div className="d-flex align-items-center">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="Radio-sm">
                    Daily
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm2"
                  />
                  <label className="form-check-label" htmlFor="Radio-sm2">
                    Fixed
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm3"
                  />
                  <label className="form-check-label" htmlFor="Radio-sm3">
                    Percentage
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Price <span className="text-danger"> *</span>
              </label>
              <input type="text" className="form-control" defaultValue="$200" />
            </div>
            <div className="add-insurance-benifit-2">
              <div className="mb-1">
                <label className="form-label">
                  Benefit <span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="No additional charges for emergency roadside services."
                />
              </div>
            </div>
            <Link
              to="#"
              className="d-inline-flex align-items-center text-info add-new-benifit-2"
            >
              <i className="ti ti-plus me-1" />
              Add New
            </Link>
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
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit  Insurance */}
  {/* Benifits Insurance */}
  <div className="modal fade" id="view-benifits">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Benefits</h4>
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
          <div>
            <p className="d-flex align-items-center mb-2">
              <i className="ti ti-checks text-success me-1" />
              No additional charges for emergency roadside services.
            </p>
            <p className="d-flex align-items-center mb-2">
              <i className="ti ti-checks text-success me-1" />
              Quick assistance for unexpected breakdowns.
            </p>
            <p className="d-flex align-items-center mb-2">
              <i className="ti ti-checks text-success me-1" />
              Coverage for lost or stolen personal belongings
            </p>
            <p className="d-flex align-items-center">
              <i className="ti ti-checks text-success me-1" />
              Covers the cost if the rental car is stolen.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Benifits Insurance */}
  {/* Delete  */}
  <div className="modal fade" id="delete_backup">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Insurance</h4>
          <p className="mb-3">Are you sure you want to delete insurance?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.insuranceSetting} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</>

  )
}

export default InsuranceSetting