
import { Link } from 'react-router-dom'
import CustomSelect from '../../../common/select/commonSelect'
import { Currency, CurrencyPosition, CurrencySymbol, DateFormat, Language, Seperator, TimeFormat, TimeZone, Week } from '../../../common/json/selectOption'

const LocalizationSetting = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5>Website Settings</h5>
  </div>
  <form action="#">
    <div className="card-body pb-0">
      <div className="localization-content mb-3">
        <div>
          <h6 className="mb-3">Localization</h6>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Time Zone <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={TimeZone}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Start Week On <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={Week}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Date Format <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={DateFormat}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Time Format <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={TimeFormat}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Default Language <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={Language}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Language Switcher <span className="text-danger">*</span>
            </p>
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
      <div className="localization-content border-0">
        <div>
          <h6 className="mb-3">Currency Information</h6>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Currency <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={Currency}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Currency Symbol <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={CurrencySymbol}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Currency Position <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={CurrencyPosition}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Decimal Seperator <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={Seperator}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="localization-list">
            <p className="text-gray-9 fw-medium">
              Thousand Seperator <span className="text-danger">*</span>
            </p>
            <div>
            <CustomSelect
                options={Seperator}
                className="select d-flex"
                placeholder="Select"
                />
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

export default LocalizationSetting