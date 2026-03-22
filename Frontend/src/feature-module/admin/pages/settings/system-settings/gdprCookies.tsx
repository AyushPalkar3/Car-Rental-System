import React from 'react'
import { Link } from 'react-router-dom'
import CustomSelect from '../../../common/select/commonSelect'
import { Position } from '../../../common/json/selectOption'
import DefaultEditor from 'react-simple-wysiwyg'

const GdprCookies = () => {
  const [values, setValue] = React.useState();

  function onChange(e:any) {
    setValue(e.target.value);
  }
  return (
    <div className="card">
  <div className="card-header">
    <h5>System Settings</h5>
  </div>
  <form action="#">
    <div className="card-body">
      <div className="sms-gateway">
        <h6 className="mb-3">GDPR Cookies</h6>
        <div className="row mb-3 align-items-center">
          <div className="col-xl-4 d-flex">
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="fw-medium fs-14">
                Cookies Content Text <span className="text-danger">*</span>
              </h6>
            </div>
          </div>
          <div className="col-xl-8">
            <div>
            <DefaultEditor value={values} onChange={onChange} />
              <p className="mt-2">Maximum 60 Words</p>
            </div>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <div className="col-xl-4 d-flex">
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="fw-medium fs-14">
                Cookies Position <span className="text-danger">*</span>
              </h6>
            </div>
          </div>
          <div className="col-xl-6">
            <div>
            <CustomSelect
                options={Position}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <div className="col-xl-4 d-flex">
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="fw-medium fs-14">
                Agree Button Text <span className="text-danger">*</span>
              </h6>
            </div>
          </div>
          <div className="col-xl-6">
            <div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <div className="col-xl-4 d-flex">
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="fw-medium fs-14">
                Decline Button Text <span className="text-danger">*</span>
              </h6>
            </div>
          </div>
          <div className="col-xl-6">
            <div>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row mb-3 align-items-center">
          <div className="col-xl-4 d-flex">
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="fw-medium fs-14">
                Show Decline Button <span className="text-danger">*</span>
              </h6>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="form-check form-check-md form-switch me-2">
              <input
                className="form-check-input form-label me-2"
                type="checkbox"
                role="switch"
                defaultChecked
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-4 d-flex">
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="fw-medium fs-14">
                Links for Cookies Page <span className="text-danger">*</span>
              </h6>
            </div>
          </div>
          <div className="col-xl-8">
            <div>
              <input type="text" className="form-control" />
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

export default GdprCookies