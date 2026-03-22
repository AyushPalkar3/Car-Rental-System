
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'

const IntegrationsSettings = () => {
  return (
  <div className="card">
    <div className="card-header">
      <h5>Account Settings</h5>
    </div>
    <div className="card-body pb-0">
      <div className="integration-content">
        <h6 className="mb-3">Integrations</h6>
        <div className="row">
          <div className="col-xl-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">
                    <ImageWithBasePath
                      src="assets/admin/img/icons/email-icon.svg"
                      alt="image"
                      className="img-flui"
                    />
                  </span>
                  <h6 className="fs-14 fw-medium">Gmail</h6>
                </div>
                <p>
                  Send booking confirmations, receipts &amp; updates directly
                  from Gmail for professional communication.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
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
          <div className="col-xl-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span className="me-2">
                    <ImageWithBasePath
                      src="assets/admin/img/icons/calendar-icon.svg"
                      alt="image"
                      className="img-flui"
                    />
                  </span>
                  <h6 className="fs-14 fw-medium">Google Calendar</h6>
                </div>
                <p>
                  Sync booking schedules &amp; appointments with Google Calendar
                  for effortless management.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
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


  )
}

export default IntegrationsSettings