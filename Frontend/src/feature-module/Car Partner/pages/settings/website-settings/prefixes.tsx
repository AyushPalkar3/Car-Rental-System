
import { Link } from 'react-router-dom'

const Prefixes = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5 className="fw-bold">Website Settings</h5>
  </div>
  <form action="#">
    <div className="card-body pb-1">
      <h6 className="fw-bold mb-3">Prefixes</h6>
      <div className="row">
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label">Reservations</label>
            <div className="input-group d-flex align-items-center mb-3">
              <span className="input-group-text border-end-0 fs-14 pe-1">
                RES -
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label">Reservations</label>
            <div className="input-group d-flex align-items-center mb-3">
              <span className="input-group-text border-end-0 fs-14 pe-1">
                QUO -
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label">Enquiries</label>
            <div className="input-group d-flex align-items-center mb-3">
              <span className="input-group-text border-end-0 fs-14 pe-1">
                ENQ -
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label">Companies</label>
            <div className="input-group d-flex align-items-center mb-3">
              <span className="input-group-text border-end-0 fs-14 pe-1">
                COM -
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label">Inspections</label>
            <div className="input-group d-flex align-items-center mb-3">
              <span className="input-group-text border-end-0 fs-14 pe-1">
                INS -
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label">Invoice</label>
            <div className="input-group d-flex align-items-center mb-3">
              <span className="input-group-text border-end-0 fs-14 pe-1">
                INV -
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label">Reports</label>
            <div className="input-group d-flex align-items-center mb-3">
              <span className="input-group-text border-end-0 fs-14 pe-1">
                REP -
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                aria-label="Username"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="mb-3">
            <label className="form-label">Customers</label>
            <div className="input-group d-flex align-items-center mb-3">
              <span className="input-group-text border-end-0 fs-14 pe-1">
                CUS -
              </span>
              <input
                type="text"
                className="form-control border-start-0 ps-0"
                aria-label="Username"
              />
            </div>
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

export default Prefixes