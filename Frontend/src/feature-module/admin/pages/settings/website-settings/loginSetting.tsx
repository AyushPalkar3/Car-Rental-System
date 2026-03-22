
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'

const LoginSetting = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5 className="fw-bold">Website Settings</h5>
    </div>
    <div className="card-body pb-0">
      <h6 className="fw-bold mb-3">Login &amp; Register</h6>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div className="d-flex align-items-center">
                  <Link
                    to="#"
                    className="p-2 bg-light rounded-circle d-flex align-items-center justify-content-center me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#google_login"
                  >
                    <ImageWithBasePath src="assets/admin/img/brands/google.svg" alt="img" />
                  </Link>
                  <Link
                    to="#"
                    className="fs-13"
                    data-bs-toggle="modal"
                    data-bs-target="#google_login"
                  >
                    Google
                  </Link>
                </div>
                <span className="badge badge-dark-transparent d-inline-flex align-items-center fs-12">
                  <i className="ti ti-point-filled text-success" />
                  Connected
                </span>
              </div>
              <p className="fs-14">
                Streamline your access using your Google account for secure and
                efficient login.
              </p>
            </div>
            <div className="card-footer py-2">
              <div className="d-flex align-items-center justify-content-between">
                <Link
                  to="#"
                  className="d-flex align-items-center fw-medium"
                  data-bs-toggle="modal"
                  data-bs-target="#google_login"
                >
                  <i className="ti ti-settings me-1" />
                  Configure
                </Link>
                <div className="form-check form-check-md form-switch">
                  <input
                    className="form-check-input form-label"
                    type="checkbox"
                    role="switch"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <div className="d-flex align-items-center">
                  <span
                    className="p-2 bg-light rounded-circle d-flex align-items-center justify-content-center me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#facebook_login"
                  >
                    <ImageWithBasePath src="assets/admin/img/brands/facebook.svg" alt="img" />
                  </span>
                  <Link
                    to="#"
                    className="fs-13"
                    data-bs-toggle="modal"
                    data-bs-target="#facebook_login"
                  >
                    Facebook
                  </Link>
                </div>
                <span className="badge badge-dark-transparent d-inline-flex align-items-center fs-12">
                  <i className="ti ti-point-filled text-success" />
                  Connected
                </span>
              </div>
              <p className="fs-14">
                Quickly log in or register using your Facebook account, making
                it easy to manage operations.
              </p>
            </div>
            <div className="card-footer py-2">
              <div className="d-flex align-items-center justify-content-between">
                <Link
                  to="#"
                  className="d-flex align-items-center fw-medium"
                  data-bs-toggle="modal"
                  data-bs-target="#facebook_login"
                >
                  <i className="ti ti-settings me-1" />
                  Configure
                </Link>
                <div className="form-check form-check-md form-switch">
                  <input
                    className="form-check-input form-label"
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
  {/* Google Login Settings */}
  <div className="modal fade" id="google_login">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Google Login Settings</h5>
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
              Client ID<span className="text-danger ms-1">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Client Secret Key<span className="text-danger ms-1">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-0">
            <label className="form-label">
              Login Redirect URL<span className="text-danger ms-1">*</span>
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
            <Link to="#" className="btn btn-primary">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Google Login Settings */}
  {/* Facebook Login Settings */}
  <div className="modal fade" id="facebook_login">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Facebook Login Settings</h5>
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
              API ID<span className="text-danger ms-1">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              API Secret Key<span className="text-danger ms-1">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-0">
            <label className="form-label">
              Login Redirect URL<span className="text-danger ms-1">*</span>
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
            <Link to="#" className="btn btn-primary">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Facebook Login Settings */}
</>

  )
}

export default LoginSetting