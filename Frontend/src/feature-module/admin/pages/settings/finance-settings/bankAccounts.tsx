
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../../router/all_routes'

const BankAccounts = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>System Settings</h5>
    </div>
    <div className="card-body">
      <div className="payment-section">
        <h6 className="mb-3">Bank Accounts</h6>
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
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
          <div>
            <div className="mb-2 me-2">
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_bank"
              >
                <i className="ti ti-plus me-2" />
                Add New Account
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
                <th>NAME</th>
                <th>BANK</th>
                <th>BRANCH</th>
                <th>ACCOUNT NO</th>
                <th>IFSC</th>
                <th>CREATED ON</th>
                <th>STATUS</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="text-gray-9 fw-semibold fs-14">Andrew Simons</p>
                </td>
                <td>
                  <p className="text-gray-9">HDFC</p>
                </td>
                <td>
                  <p className="text-gray-9">Bringham</p>
                </td>
                <td>
                  <p className="text-gray-9">**** **** 1832</p>
                </td>
                <td>
                  <p className="text-gray-9">124547</p>
                </td>
                <td>
                  <p className="text-gray-9">24 Jan 2025</p>
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
                          data-bs-target="#edit_bank"
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
                          data-bs-target="#delete_bank"
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
                  <p className="text-gray-9 fw-semibold fs-14">David Steiger</p>
                </td>
                <td>
                  <p className="text-gray-9">SBI</p>
                </td>
                <td>
                  <p className="text-gray-9">Leicester</p>
                </td>
                <td>
                  <p className="text-gray-9">**** **** 1596</p>
                </td>
                <td>
                  <p className="text-gray-9">156723</p>
                </td>
                <td>
                  <p className="text-gray-9">19 Dec 2024</p>
                </td>
                <td>
                  <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
                    <i className="ti ti-point-filled me-1 text-danger" />
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
                          data-bs-target="#edit_bank"
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
                          data-bs-target="#delete_bank"
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
                  <p className="text-gray-9 fw-semibold fs-14">Darin Mabry</p>
                </td>
                <td>
                  <p className="text-gray-9">KVB</p>
                </td>
                <td>
                  <p className="text-gray-9">Bristol</p>
                </td>
                <td>
                  <p className="text-gray-9">**** **** 1982</p>
                </td>
                <td>
                  <p className="text-gray-9">198367</p>
                </td>
                <td>
                  <p className="text-gray-9">11 Dec 2024</p>
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
                          data-bs-target="#edit_bank"
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
                          data-bs-target="#delete_bank"
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
                  <p className="text-gray-9 fw-semibold fs-14">Mark Neiman</p>
                </td>
                <td>
                  <p className="text-gray-9">Canara Bank</p>
                </td>
                <td>
                  <p className="text-gray-9">Norwich</p>
                </td>
                <td>
                  <p className="text-gray-9">**** **** 1645</p>
                </td>
                <td>
                  <p className="text-gray-9">146026</p>
                </td>
                <td>
                  <p className="text-gray-9">29 Nov 2024</p>
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
                          data-bs-target="#edit_bank"
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
                          data-bs-target="#delete_bank"
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
  {/* Add bank */}
  <div className="modal fade" id="add_bank">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Bank Account</h5>
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
              Bank Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Account Number <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Account Holder Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Branch <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              IFSC <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckChecked"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Mark as Default
              </label>
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
            <Link to={all_routes.bankAccounts} className="btn btn-primary">
              Create New
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add bank */}
  {/* Edit bank */}
  <div className="modal fade" id="edit_bank">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Bank Account</h5>
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
              Bank Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" defaultValue="HDFC" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Account Number <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue="**** **** 1832"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Account Holder Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue="Andrew Simons"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Branch <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue="Bringham"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              IFSC <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" defaultValue={124547} />
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="flexCheckChecked1"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="flexCheckChecked1">
                Mark as Default
              </label>
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
              <Link to={all_routes.bankAccounts} className="btn btn-primary">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit bank */}
  {/* Delete */}
  <div className="modal fade" id="delete_bank">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Bank Account</h4>
          <p className="mb-3">Are you sure you want to delete bank account?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.bankAccounts} className="btn btn-primary">
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

export default BankAccounts