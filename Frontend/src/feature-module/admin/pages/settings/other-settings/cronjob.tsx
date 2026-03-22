
import { Link } from 'react-router-dom'

const Cronjob = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5>Other Settings</h5>
  </div>
  <form action="#">
    <div className="card-body">
      <div>
        <h6 className="mb-3">Cronjob</h6>
        <div className="row">
          <div className="col-md-12">
            <div className="row align-items-center mb-3">
              <div className="col-md-3">
                <p className="fw-medium text-gray-9">
                  Cronjob Link <span className="text-danger">*</span>
                </p>
              </div>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-md-3">
                <p className="fw-medium text-gray-9">
                  Execution Intervel <span className="text-danger">*</span>
                </p>
              </div>
              <div className="col-md-7">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-footer">
      <div className="d-flex align-items-center justify-content-end px-3 mx-1">
        <Link to="#" className="btn btn-light me-2">
          Cancel
        </Link>
        <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </div>
  </form>
</div>

  )
}

export default Cronjob