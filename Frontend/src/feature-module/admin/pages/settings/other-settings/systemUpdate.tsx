
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import { Link } from 'react-router-dom'

const SystemUpdate = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5>Other Settings</h5>
  </div>
  <div className="card-body pb-0">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h6 className="mb-3">System Update</h6>
      <Link to="#" className="btn btn-primary">
        Check for Updates
      </Link>
    </div>
    <div>
      <div className="d-flex align-items-center mb-3">
        <span className="d-inline-flex align-items-center justify-content-center p-2 bg-light rounded me-2">
          <ImageWithBasePath
            src="assets/admin/img/icons/check-rotate.svg"
            alt="img"
            className="img-fluid"
          />
        </span>
        <div>
          <div className="d-flex align-items-center">
            <h6 className="fs-14 me-2">You are up to date</h6>
            <span className="badge badge-soft-violet badge-md">
              Current Version : 8.0
            </span>
          </div>
          <span className="fs-13">Last Checked : Today 10:30 AM</span>
        </div>
      </div>
      <div className="alert alert-solid-light alert-dismissible fade show d-flex align-items-center">
        <i className="ti ti-info-circle text-info fs-14 me-2" />
        Before updating, it&apos;s best to back up your files and database and review
        the changelog.
        <button
          type="button"
          className="btn-close text-default"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <i className="fas fa-xmark" />
        </button>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              Purchase Key<span className="text-danger ms-1">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">
              User Name<span className="text-danger ms-1">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SystemUpdate