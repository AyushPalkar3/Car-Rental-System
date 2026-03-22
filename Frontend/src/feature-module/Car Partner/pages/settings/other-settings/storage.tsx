
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import { Link } from 'react-router-dom'

const Storage = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>Other Settings</h5>
    </div>
    <div className="card-body pb-0">
      <div>
        <h6 className="mb-3">Storage</h6>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/admin/img/icons/storage-icon-03.svg"
                        className="w-auto h-auto"
                        alt="Img"
                      />
                    </span>
                    <h6 className="fw-medium fs-14">Local Storage</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md form-switch">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        role="switch"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <span className="avatar avatar-lg bg-gray-100 me-2 flex-shrink-0">
                      <ImageWithBasePath
                        src="assets/admin/img/icons/aws.svg"
                        className="w-auto h-auto"
                        alt="Img"
                      />
                    </span>
                    <h6 className="fw-medium fs-14">AWS</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="btn btn-icon btn-sm me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#aws_settings"
                    >
                      <i className="ti ti-settings fs-20" />
                    </Link>
                    <div className="form-check form-check-md form-switch">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        role="switch"
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
  </div>
  {/*Add Cronjob */}
  <div className="modal fade" id="aws_settings">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">AWS Settings</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  AWS Access Key <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  Secret Key <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  Bucket Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  Region <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  Base URL <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-light me-2"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Cronjob */}
</>

  )
}

export default Storage