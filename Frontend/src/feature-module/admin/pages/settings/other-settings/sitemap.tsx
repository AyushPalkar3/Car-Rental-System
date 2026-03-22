
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../../router/all_routes'

const Sitemap = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>Other Settings</h5>
    </div>
    <div className="card-body">
      <div className="payment-section">
        <h6 className="mb-3">Sitemap</h6>
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
              />
            </div>
          </div>
          <div>
            <div>
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_sitemap"
              >
                <i className="ti ti-plus me-2" />
                Add New
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
                <th>URL</th>
                <th>FILE NAME</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p className="text-gray-9 fw-semibold fs-14">
                    https://localhost/dreamsrent
                  </p>
                </td>
                <td>
                  <p className="text-gray-9">sitemap18725604.xml</p>
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
                          data-bs-target="#delete_sitemap"
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
  {/* Add Sitemap */}
  <div className="modal fade" id="add_sitemap">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Sitemap</h5>
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
          <div className="mb-0">
            <label className="form-label">
              Sitemap URL <span className="text-danger">*</span>
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
            <Link to={all_routes.sitemap} className="btn btn-primary">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Sitemap */}
  {/* Delete Sitemap  */}
  <div className="modal fade" id="delete_sitemap">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Sitemap</h4>
          <p className="mb-3">Are you sure you want to delete sitemap?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.sitemap} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Sitemap */}
</>

  )
}

export default Sitemap