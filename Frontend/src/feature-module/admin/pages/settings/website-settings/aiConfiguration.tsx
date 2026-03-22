
import { Link } from 'react-router-dom'

const AiConfiguration = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5 className="fw-bold">Website Settings</h5>
  </div>
  <form action="#">
    <div className="card-body pb-0">
      <h6 className="fw-bold mb-3">AI Configuration</h6>
      <div className="row align-items-center mb-3">
        <div className="col-md-4">
          <label className="form-label mb-0">
            API Key<span className="text-danger ms-1">*</span>
          </label>
        </div>
        <div className="col-md-4">
          <input type="text" className="form-control" />
        </div>
      </div>
      <div className="row align-items-center mb-3">
        <div className="col-md-4">
          <label className="form-label mb-0">Enable AI Chat Globally</label>
        </div>
        <div className="col-md-4">
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
      <div className="row align-items-center mb-3">
        <div className="col-md-4">
          <label className="form-label mb-0">Enable AI for Admin</label>
        </div>
        <div className="col-md-4">
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
      <div className="row align-items-center mb-3">
        <div className="col-md-4">
          <label className="form-label mb-0">Enable AI for Users</label>
        </div>
        <div className="col-md-4">
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
    <div className="card-footer">
      <div className="d-flex justify-content-end">
        <Link
          to="#"
          className="btn btn-light me-3"
          data-bs-dismiss="modal"
        >
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

export default AiConfiguration