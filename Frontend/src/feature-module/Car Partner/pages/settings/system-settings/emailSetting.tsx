
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'

const EmailSetting = () => {
  return (
    <>
    <div className="card">
      <div className="card-header">
        <h5>System Settings</h5>
      </div>
      <div className="card-body pb-0">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="mb-3">Email Settings</h6>
          <Link
            to="#"
            className="btn btn-primary mb-3"
            data-bs-toggle="modal"
            data-bs-target="#sendgrid"
          >
            <i className="ti ti-send me-1" />
            Send Test Email
          </Link>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="border-bottom mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-lg bg-light me-2 p-2">
                        <ImageWithBasePath
                          src="assets/admin/img/settings/phpmail.svg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <p className="text-gray-9">PHP Mailer</p>
                    </div>
                    <span className="badge badge-dark-transparent text-gray-9">
                      <i className="ti ti-point-filled text-success" />
                      Connected
                    </span>
                  </div>
                  <p className="fs-13 mb-3">
                    Used to send emails safely and easily via PHP code from a web
                    server.
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    to="#"
                    className="fw-medium text-gray-9 d-flex align-items-center mb-0"
                    data-bs-toggle="modal"
                    data-bs-target="#phpmailersettings"
                  >
                    <i className="ti ti-settings me-1" />
                    Configure
                  </Link>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="border-bottom mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-lg bg-light me-2 p-2">
                        <ImageWithBasePath
                          src="assets/admin/img/settings/smtp.svg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <p className="text-gray-9">SMTP</p>
                    </div>
                    <span className="badge badge-dark-transparent text-gray-9">
                      <i className="ti ti-point-filled text-success" />
                      Connected
                    </span>
                  </div>
                  <p className="fs-13 mb-3">
                    SMTP is used to send, relay or forward messages from a mail
                    client.
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    to="#"
                    className="fw-medium text-gray-9 d-flex align-items-center mb-0"
                    data-bs-toggle="modal"
                    data-bs-target="#smtpsettings"
                  >
                    <i className="ti ti-settings me-1" />
                    Configure
                  </Link>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div className="border-bottom mb-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-lg bg-light me-2 p-2">
                        <ImageWithBasePath
                          src="assets/admin/img/settings/sendgrid.svg"
                          className="img-fluid"
                          alt="img"
                        />
                      </span>
                      <p className="text-gray-9">Send Grid</p>
                    </div>
                    <span className="badge badge-dark-transparent text-gray-9">
                      <i className="ti ti-point-filled text-success" />
                      Connected
                    </span>
                  </div>
                  <p className="fs-13 mb-3">
                    Cloud-based email marketing tool that assists marketers and
                    developers .
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <Link
                    to="#"
                    className="fw-medium text-gray-9 d-flex align-items-center mb-0"
                  >
                    <i className="ti ti-settings me-1" />
                    Configure
                  </Link>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
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
    {/* Add php mailer */}
    <div className="modal fade" id="phpmailersettings">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="mb-0">PHP Mailer</h5>
            <button
              type="button"
              className="btn-close custom-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti ti-x fs-16" />
            </button>
          </div>
          <form action="#">
            <div className="modal-body pb-1">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      From Email Address <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Email Password <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      From Email Name <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex align-items-center justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-light border me-3"
                >
                  Cancel
                </button>
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* /Add php mailer */}
    {/* Add sendgrid */}
    <div className="modal fade" id="sendgrid">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="mb-0">Test Mail</h5>
            <button
              type="button"
              className="btn-close custom-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti ti-x fs-16" />
            </button>
          </div>
          <form action="#">
            <div className="modal-body pb-1">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Enter Email Address <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex align-items-center justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-light border me-3"
                >
                  Cancel
                </button>
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* /Add sendgrid */}
    {/* Add sendgrid */}
    <div className="modal fade" id="smtpsettings">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="mb-0">SMTP</h5>
            <button
              type="button"
              className="btn-close custom-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <i className="ti ti-x fs-16" />
            </button>
          </div>
          <form action="#">
            <div className="modal-body pb-1">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      From Email Address <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Email Password <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Email Host <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Port <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex align-items-center justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-light border me-3"
                >
                  Cancel
                </button>
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* /Add sendgrid */}
  </>
  
  )
}

export default EmailSetting