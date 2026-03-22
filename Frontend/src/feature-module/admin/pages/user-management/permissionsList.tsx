
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";

const PermissionsList = () => {
  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="my-auto mb-3 pb-1">
          <Link
            to={all_routes.adminRolesPermissionsList}
            className="mb-1 text-gray-9 fw-medium"
          >
            <i className="ti ti-arrow-left me-1" />
            Back to List
          </Link>
        </div>
        {/* /Breadcrumb */}
        <div className="filterbox mb-3 d-flex align-items-center mb-3">
          <span className="avatar avatar-lg bg-white text-secondary rounded-2 me-2">
            <i className="ti ti-user-shield fs-25 fw-normal" />
          </span>
          <div>
            <p className="mb-0">Role</p>
            <h6 className="fw-medium">Administrator</h6>
          </div>
        </div>
        {/* Custom Data Table */}
        <div className="card mb-3">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h6>BOOKINGS</h6>
              <div className="no-sort">
                <div className="form-check form-check-md">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="select-all4"
                  />
                  <label className="form-check-label" htmlFor="select-all4">
                    Allow All
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="custom-datatable-filter table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>MODULE</th>
                    <th>CREATE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    <th>VIEW</th>
                    <th>ALLOW ALL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Reservations</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Calendar</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Quotations</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Enquiries</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Units</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">People</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Companies</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Drivers</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Locations</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check4">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h6>RENTALS</h6>
              <div className="no-sort">
                <div className="form-check form-check-md">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="select-all2"
                  />
                  <label className="form-check-label" htmlFor="select-all2">
                    Allow All
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="custom-datatable-filter table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>MODULE</th>
                    <th>CREATE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    <th>VIEW</th>
                    <th>ALLOW ALL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Cars</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input "
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Car Attributes</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Inspections</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Issues</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Tracking</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Maintanence</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check2">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h6>OTHERS</h6>
              <div className="no-sort">
                <div className="form-check form-check-md">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="select-all3"
                  />
                  <label className="form-check-label" htmlFor="select-all3">
                    Allow All
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="custom-datatable-filter table-responsive">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>MODULE</th>
                    <th>CREATE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    <th>VIEW</th>
                    <th>ALLOW ALL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Payments</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input "
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Reviews</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Messages</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Blogs</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Reports</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="text-gray-9 fw-medium">Settings</p>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <div className="form-check form-check-md check3">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="card mb-0">
          <div className="card-body py-2 my-1">
            <div className="d-flex justify-content-end align-items-center">
              <Link to="#" className="btn btn-light me-2">
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary me-2">
                Submit
              </Link>
            </div>
          </div>
        </div>
        {/* Custom Data Table */}
        <div className="table-footer" />
      </div>
    </>
  );
};

export default PermissionsList;
