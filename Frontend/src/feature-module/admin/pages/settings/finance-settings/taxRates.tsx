
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../../router/all_routes'

const TaxRates = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>System Settings</h5>
    </div>
    <div className="card-body">
      <div className="payment-section">
        <div className="border-bottom pb-3">
          {/* Table Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <h6>Tax Rates</h6>
            <div>
              <div>
                <Link
                  to="#"
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_tax_rate"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Tax Rate
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
                  <th>TAX NAME</th>
                  <th>TAX RATE</th>
                  <th>CREATED ON</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-gray-9 fw-semibold fs-14">VAT</p>
                  </td>
                  <td>
                    <p className="text-gray-9">10%</p>
                  </td>
                  <td>
                    <p className="text-gray-9">24 Jan 2025</p>
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
                            data-bs-target="#edit_tax_rate"
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
                            data-bs-target="#delete_tax_rate"
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
                    <p className="text-gray-9 fw-semibold fs-14">CGST</p>
                  </td>
                  <td>
                    <p className="text-gray-9">08%</p>
                  </td>
                  <td>
                    <p className="text-gray-9">19 Dec 2024</p>
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
                            data-bs-target="#edit_tax_rate"
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
                            data-bs-target="#delete_tax_rate"
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
                    <p className="text-gray-9 fw-semibold fs-14">SGST</p>
                  </td>
                  <td>
                    <p className="text-gray-9">10%</p>
                  </td>
                  <td>
                    <p className="text-gray-9">19 Dec 2024</p>
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
                            data-bs-target="#edit_tax_rate"
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
                            data-bs-target="#delete_tax_rate"
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
        <div className="pt-3">
          {/* Table Header */}
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <h6>Tax Group</h6>
            <div>
              <div>
                <Link
                  to="#"
                  className="btn btn-primary d-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_tax_group"
                >
                  <i className="ti ti-plus me-2" />
                  Add New Tax Group
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
                  <th>TAX NAME</th>
                  <th>TAX RATE</th>
                  <th>CREATED ON</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p className="text-gray-9 fw-semibold fs-14">GST</p>
                  </td>
                  <td>
                    <p className="text-gray-9">18%</p>
                  </td>
                  <td>
                    <p className="text-gray-9">20 Dec 2024</p>
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
                            data-bs-target="#edit_tax_group"
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
                            data-bs-target="#delete_tax_group"
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
  </div>
  {/* Add Tax Rate */}
  <div className="modal fade" id="add_tax_rate">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Tax Rate</h5>
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
              Tax Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Tax Rate (%) <span className="text-danger">*</span>
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
            <Link to={all_routes.taxRates} className="btn btn-primary">
              Create New
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Tax Rate */}
  {/* Edit Tax Rate */}
  <div className="modal fade" id="edit_tax_rate">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Tax Rate</h5>
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
              Tax Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" defaultValue="VAT" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Tax Rate (%) <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" defaultValue={10} />
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
              <Link to={all_routes.taxRates} className="btn btn-primary">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Tax Rate */}
  {/* Delete Rate  */}
  <div className="modal fade" id="delete_tax_rate">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Tax Rate</h4>
          <p className="mb-3">Are you sure you want to delete tax rate?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.taxRates} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Rate */}
  {/* Add Tax Group */}
  <div className="modal fade" id="add_tax_group">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Tax Group</h5>
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
              Tax Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-2">
            <label className="form-label">
              Sub Taxes <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <p className="fs-13">Enter value separated by comma</p>
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
            <Link to={all_routes.taxRates} className="btn btn-primary">
              Create New
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Tax Group */}
  {/* Edit Tax Group */}
  <div className="modal fade" id="edit_tax_group">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Tax Group</h4>
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
              Tax Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" defaultValue="VAT" />
          </div>
          <div className="mb-3 ">
            <label className="form-label">
              Sub Taxes <span className="text-danger"> *</span>{" "}
            </label>
            <input
              className="input-tags form-control"
              placeholder="Add new"
              type="text"
              data-role="tagsinput"
              name="Label"
              defaultValue="CGST"
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
              <Link to={all_routes.taxRates} className="btn btn-primary">
                Save Changes
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Tax Rate */}
  {/* Delete Rate  */}
  <div className="modal fade" id="delete_tax_group">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Tax Group</h4>
          <p className="mb-3">Are you sure you want to delete tax group?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.taxRates} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Rate */}
</>

  )
}

export default TaxRates