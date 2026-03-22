
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import { all_routes } from '../../../../../router/all_routes'

const SmsGateways = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>System Settings</h5>
    </div>
    <div className="card-body pb-0">
      <div className="sms-gateway">
        <h6 className="mb-3">SMS Gateways</h6>
        <div className="row">
          <div className="col-xxl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <ImageWithBasePath
                    src="assets/admin/img/icons/nexmo-logo-icon.svg"
                    alt="image"
                    className="img-flui"
                  />
                  <span className="badge badge-outline d-flex align-items-center">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
                </div>
                <p className="mb-0">
                  Enables seamless communication through SMS, voice, and APIs.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <Link
                    to="#"
                    className="d-inline-flex align-items-center text-gray-9"
                    data-bs-toggle="modal"
                    data-bs-target="#add_nexmo"
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
          <div className="col-xxl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <ImageWithBasePath
                    src="assets/admin/img/icons/two-factor-icon.svg"
                    alt="image"
                    className="img-flui"
                  />
                  <span className="badge badge-outline d-flex align-items-center">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
                </div>
                <p className="mb-0">
                  2Factor offers simple sms integration API&nbsp;and sample code
                  to send SMS
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <Link
                    to="#"
                    className="d-inline-flex align-items-center text-gray-9"
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
          <div className="col-xxl-4 col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <ImageWithBasePath
                    src="assets/admin/img/icons/twilio-icon.svg"
                    alt="image"
                    className="img-flui"
                  />
                  <span className="badge badge-outline d-flex align-items-center">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
                </div>
                <p className="mb-0">
                  Twilio provides APIs for messaging, voice, and video
                  integration.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <Link
                    to="#"
                    className="d-inline-flex align-items-center text-gray-9"
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
  </div>
  {/* Add nexom */}
  <div className="modal fade" id="add_nexmo">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Nexmo</h5>
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
              API Key <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              API Secret Key <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Sender ID <span className="text-danger">*</span>
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
            <Link to={all_routes.smsGateways} className="btn btn-primary">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add nexom */}
</>

  )
}

export default SmsGateways