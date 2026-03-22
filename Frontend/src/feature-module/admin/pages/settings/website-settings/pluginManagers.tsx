
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import { all_routes } from '../../../../../router/all_routes'

const PluginManagers = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>Website Settings</h5>
    </div>
    <div className="card-body pb-0">
      <div className="d-flex align-items-center justify-content-between">
        <h6 className="mb-3">Plugin Managers</h6>
        <Link
          to="#"
          className="btn btn-primary d-flex align-items-center"
          data-bs-toggle="modal"
          data-bs-target="#add_plugin"
        >
          <i className="ti ti-plus me-1" />
          Add New Plugin
        </Link>
      </div>
      <div className="plugin-content">
        <div className="row">
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <div className="plugin-icons me-2">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/paypal-icons.svg"
                          alt="image"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <h6 className="fw-normal fs-13">Google</h6>
                  </div>
                  <span className="badge badge-soft-purple d-inline-flex align-items-center">
                    Version : 8.78.1
                  </span>
                </div>
                <p className="fs-13">
                  PayPal is a global digital payments platform that enables
                  secure, fast online transactions.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-14 text-gray-9 d-flex align-items-center">
                    <i className="ti ti-trash me-1" />
                    Delete
                  </span>
                  <div className="form-check form-check-md form-switch me-2">
                    <input
                      className="form-check-input form-label me-2"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center">
                    <div className="plugin-icons  me-2">
                      <span>
                        <ImageWithBasePath
                          src="assets/admin/img/icons/google-analytics-icon.svg"
                          alt="image"
                          className="img-fluid"
                        />
                      </span>
                    </div>
                    <h6 className="fw-normal fs-13">Google Analytics</h6>
                  </div>
                  <span className="badge badge-soft-purple d-inline-flex align-items-center">
                    Version : GA4
                  </span>
                </div>
                <p className="fs-13">
                  Google Analytics tracks and analyzes website traffic and user
                  interactions to provide insights.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center">
                  <span className="fs-14 text-gray-9 d-flex align-items-center">
                    <i className="ti ti-trash me-1" />
                    Delete
                  </span>
                  <div className="form-check form-check-md form-switch me-2">
                    <input
                      className="form-check-input form-label me-2"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Add Plugin */}
  <div className="modal fade" id="add_plugin">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Add Plugin</h5>
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
          <div className="plugin-content-modal">
            <div className="d-flex flex-column align-items-center">
              <span className="mb-2">
                <i className="ti ti-files text-primary" />
              </span>
              <p className="mb-0">
                Drop your files here or <Link to="#">Browse</Link>
              </p>
              <p className="mb-0">Maximum size 50mb</p>
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
            <Link to={all_routes.pluginManagers} className="btn btn-primary">
              Install
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Plugin */}
</>

  )
}

export default PluginManagers