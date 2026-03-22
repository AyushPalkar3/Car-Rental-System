
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import { all_routes } from '../../../../../router/all_routes'

const LanguageSetting = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5 className="fw-bold">Website Settings</h5>
  </div>
  <div className="card-body">
    <div className="d-flex align-items-center justify-content-between mb-3">
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
    <div className="d-flex align-items-center justify-content-between mb-3">
      <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
        <div className="top-search me-2">
          <div className="top-search-group">
            <span className="input-icon">
              <i className="ti ti-search" />
            </span>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
      </div>
      <Link to="#" className="btn btn-dark">
        <i className="ti ti-download me-1" />
        Import Sample
      </Link>
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
            <th>CODE</th>
            <th>RTL</th>
            <th>DEFAULT</th>
            <th>TOTAL</th>
            <th>DONE</th>
            <th>PROGRESS</th>
            <th>STATUS</th>
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
              <div className="d-flex align-items-center">
                <Link to={all_routes.language2Setting} className=" me-2">
                  <ImageWithBasePath
                    src="assets/admin/img/flags/usa.svg"
                    alt="img"
                    className="avatar avatar-md rounded-circle"
                  />
                </Link>
                <Link to={all_routes.language2Setting} className="fw-semibold">
                  English
                </Link>
              </div>
            </td>
            <td>en</td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>1620</td>
            <td>1296</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="circle-progress" data-value={80}>
                  <span className="progress-left">
                    <span className="progress-bar border-warning" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-warning" />
                  </span>
                </div>
                <div className="progress-value ms-2">80%</div>
              </div>
            </td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to={all_routes.language2Setting} className="btn btn-white me-1">
                  Web
                </Link>
                <Link to={all_routes.language2Setting} className="btn btn-white me-1">
                  App
                </Link>
                <Link to={all_routes.language2Setting} className="btn btn-white">
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
              <div className="d-flex align-items-center">
                <Link to={all_routes.language2Setting} className=" me-2">
                  <ImageWithBasePath
                    src="assets/admin/img/flags/germany.svg"
                    alt="img"
                    className="avatar avatar-md rounded-circle"
                  />
                </Link>
                <Link to={all_routes.language2Setting} className="fw-semibold">
                  German
                </Link>
              </div>
            </td>
            <td>de</td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </td>
            <td>1620</td>
            <td>972</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="circle-progress" data-value={70}>
                  <span className="progress-left">
                    <span className="progress-bar border-skyblue" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-skyblue" />
                  </span>
                </div>
                <div className="progress-value ms-2">70%</div>
              </div>
            </td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to={all_routes.language2Setting} className="btn btn-white me-1">
                  Web
                </Link>
                <Link to={all_routes.language2Setting} className="btn btn-white me-1">
                  App
                </Link>
                <Link to={all_routes.language2Setting} className="btn btn-white">
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
              <div className="d-flex align-items-center">
                <Link to={all_routes.language2Setting} className=" me-2">
                  <ImageWithBasePath
                    src="assets/admin/img/flags/uae.svg"
                    alt="img"
                    className="avatar avatar-md rounded-circle"
                  />
                </Link>
                <Link to={all_routes.language2Setting} className="fw-semibold">
                  Arabic
                </Link>
              </div>
            </td>
            <td>ar</td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </td>
            <td>1620</td>
            <td>810</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="circle-progress" data-value={50}>
                  <span className="progress-left">
                    <span className="progress-bar border-purple" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-purple" />
                  </span>
                </div>
                <div className="progress-value ms-2">50%</div>
              </div>
            </td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to={all_routes.language2Setting} className="btn btn-white me-1">
                  Web
                </Link>
                <Link to={all_routes.language2Setting} className="btn btn-white me-1">
                  App
                </Link>
                <Link to={all_routes.language2Setting} className="btn btn-white">
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
              <div className="d-flex align-items-center">
                <Link to={all_routes.language2Setting} className=" me-2">
                  <ImageWithBasePath
                    src="assets/admin/img/flags/france.svg"
                    alt="img"
                    className="avatar avatar-md rounded-circle"
                  />
                </Link>
                <Link to={all_routes.language2Setting} className="fw-semibold">
                  French
                </Link>
              </div>
            </td>
            <td>fr</td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                />
              </div>
            </td>
            <td>1620</td>
            <td>324</td>
            <td>
              <div className="d-flex align-items-center">
                <div className="circle-progress" data-value={20}>
                  <span className="progress-left">
                    <span className="progress-bar border-danger" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar border-danger" />
                  </span>
                </div>
                <div className="progress-value ms-2">20%</div>
              </div>
            </td>
            <td>
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </td>
            <td>
              <div className="d-flex align-items-center">
                <Link to={all_routes.language2Setting} className="btn btn-white me-1">
                  Web
                </Link>
                <Link to={all_routes.language2Setting} className="btn btn-white me-1">
                  App
                </Link>
                <Link to={all_routes.language2Setting} className="btn btn-white">
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
  </div>
</div>

  )
}

export default LanguageSetting