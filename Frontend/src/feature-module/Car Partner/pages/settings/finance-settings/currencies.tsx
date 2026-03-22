
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../../router/all_routes'

const Currencies = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>System Settings</h5>
    </div>
    <div className="card-body">
      <div className="payment-section">
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <h6>Currencies</h6>
          <div>
            <div>
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_currency"
              >
                <i className="ti ti-plus me-2" />
                Add New Currency
              </Link>
            </div>
          </div>
        </div>
        {/* /Table Header */}
        {/* Custom Data Table */}
        <div className="custom-datatable-filter table-responsive brandstable country-table">
          <table className="table datatable">
            <thead className="thead-light">
              <tr>
                <th>CURRENCY</th>
                <th>CODE</th>
                <th>SYMBOL</th>
                <th>EXCHANGE RATE</th>
                <th>STATUS</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="text-gray-9 fw-semibold fs-14">Dhirams</p>
                </td>
                <td>
                  <p className="text-gray-9">AED</p>
                </td>
                <td>
                  <p className="text-gray-9">د.إ</p>
                </td>
                <td>
                  <p className="text-gray-9">3.67</p>
                </td>
                <td>
                  <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                    <i className="ti ti-point-filled me-1 text-success" />
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
                          data-bs-target="#edit_currencies"
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
                          data-bs-target="#delete_currencies"
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
                  <p className="text-gray-9 fw-semibold fs-14">Rupee</p>
                </td>
                <td>
                  <p className="text-gray-9">INR</p>
                </td>
                <td>
                  <p className="text-gray-9">₹</p>
                </td>
                <td>
                  <p className="text-gray-9">86.62</p>
                </td>
                <td>
                  <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                    <i className="ti ti-point-filled me-1 text-success" />
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
                          data-bs-target="#edit_currencies"
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
                          data-bs-target="#delete_currencies"
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
                  <p className="text-gray-9 fw-semibold fs-14">Pound</p>
                </td>
                <td>
                  <p className="text-gray-9">GBP</p>
                </td>
                <td>
                  <p className="text-gray-9">£</p>
                </td>
                <td>
                  <p className="text-gray-9">0.81</p>
                </td>
                <td>
                  <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                    <i className="ti ti-point-filled me-1 text-success" />
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
                          data-bs-target="#edit_currencies"
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
                          data-bs-target="#delete_currencies"
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
                  <p className="text-gray-9 fw-semibold fs-14">Euro</p>
                </td>
                <td>
                  <p className="text-gray-9">EUR</p>
                </td>
                <td>
                  <p className="text-gray-9">€</p>
                </td>
                <td>
                  <p className="text-gray-9">0.96</p>
                </td>
                <td>
                  <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                    <i className="ti ti-point-filled me-1 text-success" />
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
                          data-bs-target="#edit_currencies"
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
                          data-bs-target="#delete_currencies"
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
                  <p className="text-gray-9 fw-semibold fs-14">Dollar</p>
                </td>
                <td>
                  <p className="text-gray-9">USD</p>
                </td>
                <td>
                  <p className="text-gray-9">$</p>
                </td>
                <td>
                  <p className="text-gray-9">01</p>
                </td>
                <td>
                  <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                    <i className="ti ti-point-filled me-1 text-success" />
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
                          data-bs-target="#edit_currencies"
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
                          data-bs-target="#delete_currencies"
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
        {/* Custome Data Tabel */}
      </div>
    </div>
  </div>
  {/* Add Currency */}
  <div className="modal fade" id="add_currency">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Currency</h5>
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
              Currency Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Exchange Rate <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Code <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Symbol <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
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
            <Link to={all_routes.currencies} className="btn btn-primary">
              Create New
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Currency */}
  {/* Edit Currency */}
  <div className="modal fade" id="edit_currencies">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Currency</h5>
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
              Currency Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue="Dhirams"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Exchange Rate <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" defaultValue="3.67" />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Code <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="AED"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Symbol <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="د.إ"
                />
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
              <Link to={all_routes.currencies} className="btn btn-primary">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Currency */}
  {/* Delete Currency  */}
  <div className="modal fade" id="delete_currency">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Currency</h4>
          <p className="mb-3">Are you sure you want to delete currency?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.currencies} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Currency */}
</>

  )
}

export default Currencies