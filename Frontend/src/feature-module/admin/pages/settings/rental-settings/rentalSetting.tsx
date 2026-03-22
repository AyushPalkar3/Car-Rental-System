
import { Link } from 'react-router-dom'
import CustomSelect from '../../../common/select/commonSelect'
import { BufferTime, ReservationTime } from '../../../common/json/selectOption'

const RentalSetting = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5>Rental Settings</h5>
  </div>
  <form action="#">
    <div className="card-body pb-0">
      <div className="localization-content mb-3">
        <div>
          <h6 className="mb-3">Reservation</h6>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Booking</p>
            <div>
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
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Enquiries</p>
            <div>
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
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Reservation</p>
            <div>
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
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Minimum Advance Reservation Time
            </p>
            <div>
              
              <CustomSelect
                options={ReservationTime}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Maximum Advance Reservation Time
            </p>
            <div>
            <CustomSelect
                options={ReservationTime}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Cancellation Buffer Time</p>
            <div>
            <CustomSelect
                options={BufferTime}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Reschedule Buffer Time</p>
            <div>
            <CustomSelect
                options={BufferTime}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
        </div>
      </div>
      <div className="localization-content border-0">
        <div>
          <h6 className="mb-3">Vehicles</h6>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Seasonal Pricing</p>
            <div>
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
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Faq</p>
            <div>
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
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Damages</p>
            <div>
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
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Extra Service</p>
            <div>
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
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">Pricing</p>
            <div>
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
    <div className="card-footer">
      <div className="d-flex align-items-center justify-content-end">
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

export default RentalSetting