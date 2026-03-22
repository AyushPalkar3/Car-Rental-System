
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../../router/all_routes'

const DatabaseBackup = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>Other Settings</h5>
    </div>
    <div className="card-body ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-3">System Backup</h6>
        <Link
          to="#"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#generate"
        >
          Generate Backup
        </Link>
      </div>
      <div className="custom-datatable-filter table-responsive">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>FILE NAME</th>
              <th>CREATED ON</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6 className="fw-semibold fs-14">
                  <Link to="#">
                    Full_Database_Backup_2024-12-11.sql
                  </Link>
                </h6>
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
                      >
                        <i className="ti ti-restore me-1" />
                        Restore
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
                <h6 className="fw-semibold fs-14">
                  <Link to="#">
                    Full_Database_Backup_2024-10-11.sql
                  </Link>
                </h6>
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
                      >
                        <i className="ti ti-restore me-1" />
                        Restore
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
                <h6 className="fw-semibold fs-14">
                  <Link to="#">
                    Full_Database_Backup_2024-09-11.sql
                  </Link>
                </h6>
              </td>
              <td>
                <p className="text-gray-9">29 Nov 2024</p>
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
                      >
                        <i className="ti ti-restore me-1" />
                        Restore
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
  {/* Generate  */}
  <div className="modal fade deletemodal" id="generate">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <form action="#">
            <span className="avatar avatar-lg bg-primary-transparent rounded-circle text-primary mb-3">
              <i className="ti ti-folders fs-26" />
            </span>
            <h4 className="mb-1">Generate Backup</h4>
            <p className="mb-3">
              Are you sure you want to generate database backup?
            </p>
            <div className="d-flex justify-content-center">
              <Link
                to="#"
                className="btn btn-light me-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                Generate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Generate */}
  {/* Delete  */}
  <div className="modal fade deletemodal" id="delete_backup">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Backup</h4>
          <p className="mb-3">Are you sure you want to delete backup?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.databaseBackup} className="btn btn-primary">
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

export default DatabaseBackup