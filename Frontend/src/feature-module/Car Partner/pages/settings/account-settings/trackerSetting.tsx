import  { useState } from 'react'
import { Link } from 'react-router-dom'
import CustomSelect from '../../../common/select/commonSelect'
import { Status } from '../../../common/json/selectOption'

const TrackerSetting = () => {
  const [currentPassword, setCurrentPassword] = useState<boolean>(true);
  return (
    <div className="card">
  <div className="card-header">
    <h5>Account Settings</h5>
  </div>
  <div className="card-body">
    <div className="tracker-content">
      <h6 className="mb-3">Tacker</h6>
      <div className="row">
        <div className="col-xl-6">
          <div className="mb-3">
            <label className="form-label">
              Status <span className="text-danger">*</span>
            </label>
            <CustomSelect
                options={Status}
                className="select d-flex"
                placeholder="Select"
                />
          </div>
          <div className="mb-3">
            <label className="form-label">
              URL <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              User Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <div className="pass-group">
            <input type={currentPassword ? "password" : "text"} className="pass-inputs form-control" />
                  <span onClick={()=>setCurrentPassword((prev) => !prev)}
                      className={`ti toggle-password  ${
                        currentPassword ? "ti-eye-off" : "ti-eye"
                      }`} />
            </div>
          </div>
          <div className="mb-3">
            <Link to="#" className="btn btn-dark">
              Configure
            </Link>
          </div>
        </div>
      </div>
      <ul className="tracker-links">
        <li>
          <p className="text-truncate">
            <span className="fw-bold fs-14 text-gray-9">CRON URL : </span>
            https://example.com/tracker
          </p>
        </li>
        <li>
          <p className="text-truncate">
            <span className="fw-bold fs-14 text-gray-9">CRON COMMAND : </span>0
            * * * * /path/to/car_tracker_script.sh
          </p>
        </li>
        <li>
          <p className="text-truncate text-info">Run Cron Manually</p>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default TrackerSetting