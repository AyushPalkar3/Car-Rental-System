
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'

const Language2Setting = () => {
  return (
    <>
  <div className="card h-100">
    <div className="card-header">
      <h5 className="fw-bold">Website Settings</h5>
    </div>
    <div className="card-body">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <h6 className="fw-bold">Language</h6>
        <div className="d-flex align-items-center">
          <div className="dropdown me-3">
            <Link
              to="#"
              className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <i className="ti ti-language me-1" />
              Language
            </Link>
            <ul className="dropdown-menu dropdown-menu-lg p-2">
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  English
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  German
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  Arabic
                </label>
              </li>
              <li>
                <label className="dropdown-item d-flex align-items-center rounded-1">
                  French
                </label>
              </li>
            </ul>
          </div>
          <Link to="#" className="btn btn-primary">
            <i className="ti ti-plus me-1" />
            Add New Language
          </Link>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
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
        <div className="d-flex align-items-center">
          <Link to="#" className="btn btn-dark me-2">
            <i className="ti ti-arrow-left me-1" />
            Back to Translations
          </Link>
          <Link to="#" className="btn btn-white">
            <ImageWithBasePath
              src="assets/admin/img/flags/uae.svg"
              alt="img"
              className="avatar avatar-sm rounded-circle me-1"
            />
            Arabic
          </Link>
        </div>
      </div>
      {/* Custom Data Table */}
      <div className="custom-datatable-filter table-responsive">
        <table className="table datatable">
          <thead className="thead-light">
            <tr>
              <th className="no-sort">
                <div className="form-check form-check-md">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="select-all"
                  />
                </div>
              </th>
              <th>LANGUAGE</th>
              <th>TOTAL</th>
              <th>DONE</th>
              <th>PROGRESS</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <Link to="#" className="fw-semibold">
                  Main
                </Link>
              </td>
              <td>1620</td>
              <td>1296</td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="progress progress-xs" style={{ width: 120 }}>
                    <div
                      className="progress-bar bg-success rounded"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="d-inline-flex fs-12 ms-2">100%</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white me-1"
                  >
                    Web
                  </Link>
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white me-1"
                  >
                    App
                  </Link>
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white"
                  >
                    Admin
                  </Link>
                </div>
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
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        
                        
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
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <Link to="#" className="fw-semibold">
                  Bookings
                </Link>
              </td>
              <td>1620</td>
              <td>972</td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="progress progress-xs" style={{ width: 120 }}>
                    <div
                      className="progress-bar bg-pink rounded"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="d-inline-flex fs-12 ms-2">70%</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white me-1"
                  >
                    Web
                  </Link>
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white me-1"
                  >
                    App
                  </Link>
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white"
                  >
                    Admin
                  </Link>
                </div>
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
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        
                        
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
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <Link to="#" className="fw-semibold">
                  Rentals
                </Link>
              </td>
              <td>1620</td>
              <td>810</td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="progress progress-xs" style={{ width: 120 }}>
                    <div
                      className="progress-bar bg-warning rounded"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="d-inline-flex fs-12 ms-2">50%</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white me-1"
                  >
                    Web
                  </Link>
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white me-1"
                  >
                    App
                  </Link>
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white"
                  >
                    Admin
                  </Link>
                </div>
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
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        
                        
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
                <div className="form-check form-check-md">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </td>
              <td>
                <Link to="#" className="fw-semibold">
                  Others
                </Link>
              </td>
              <td>1620</td>
              <td>324</td>
              <td>
                <div className="d-flex align-items-center">
                  <div className="progress progress-xs" style={{ width: 120 }}>
                    <div
                      className="progress-bar bg-danger rounded"
                      role="progressbar"
                      style={{ width: "30%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="d-inline-flex fs-12 ms-2">30%</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white me-1"
                  >
                    Web
                  </Link>
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white me-1"
                  >
                    App
                  </Link>
                  <Link
                    to="#"
                    
                    data-bs-target="#language_setup"
                    className="btn btn-white"
                  >
                    Admin
                  </Link>
                </div>
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
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        
                        
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
      {/* Custom Data Table */}
      {/* <div class="table-footer"></div> */}
    </div>
  </div>
  {/* Language Setup */}
  <div className="modal language fade" id="language_setup">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Language Setup</h5>
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
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
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
            <div className="d-flex align-items-center flex-wrap gap-2">
              <Link to="#" className="btn btn-dark me-2">
                <i className="ti ti-arrow-left me-1" />
                Back to Translations
              </Link>
              <Link to="#" className="btn btn-white me-2">
                <ImageWithBasePath
                  src="assets/admin/img/flags/uae.svg"
                  alt="img"
                  className="avatar avatar-sm rounded-circle me-1"
                />
                Arabic
              </Link>
              <div className="progress-percent">
                <span className="text-gray-9 fs-10">Progress</span>
                <div className="d-flex align-items-center">
                  <div className="progress progress-xs" style={{ width: 120 }}>
                    <div
                      className="progress-bar bg-success rounded"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <span className="d-inline-flex fs-12 ms-2">80%</span>
                </div>
              </div>
            </div>
          </div>
          {/* Custom Data Table */}
          <div className="custom-datatable-filter table-responsive">
            <table className="table datatable">
              <thead className="thead-light">
                <tr>
                  <th>ENGLISH</th>
                  <th>ARABIC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Reservations</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="التحفظات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Calendar</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="تقويم"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Quotations</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="الاقتباسات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Enquiries</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="الاستفسارات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Units</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="الوحدات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>People</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="الناس"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Companies</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="شركات"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Drivers</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="السائقين"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Locations</td>
                  <td>
                    <input
                      type="text"
                      dir="rtl"
                      className="form-control text-end"
                      defaultValue="المواقع"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Custom Data Table */}
        </div>
      </div>
    </div>
  </div>
  {/* /Language Setup */}
</>

  )
}

export default Language2Setting