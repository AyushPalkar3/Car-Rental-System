import React from 'react'
import { Link } from 'react-router-dom'
import CustomSelect from '../../../common/select/commonSelect'
import { Numbers } from '../../../common/json/selectOption'
import DefaultEditor from 'react-simple-wysiwyg'

const InvoiceSetting = () => {
  const [values, setValue] = React.useState();

  function onChange(e:any) {
    setValue(e.target.value);
  }
  return (
    <div className="card">
  <div className="card-header">
    <h5 className="fw-bold">App Settings</h5>
  </div>
  <form action="#">
    <div className="card-body">
      <h6 className="fw-bold mb-3">Invoice Settings</h6>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3">
            <label className="form-label">
              Invoice Logo <span className="text-danger">*</span>
            </label>
            <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">
              <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames">
                <i className="ti ti-photo-up text-gray-4 fs-24" />
              </div>
              <div className="profile-upload">
                <div className="profile-uploader d-flex align-items-center">
                  <div className="drag-upload-btn btn btn-md btn-dark">
                    <i className="ti ti-photo-up fs-14" />
                    Upload
                    <input
                      type="file"
                      className="form-control image-sign"
                      multiple  
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="fs-14">Upload Image size 180*180, within 5MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 col-sm-12">
          <label className="form-label">
            Invoice Prefix <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="mb-3">
            <input type="text" className="form-control" />
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 col-sm-12">
          <label className="form-label">
            Invoice Due <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="mb-3 d-flex align-items-center">
          <CustomSelect
                options={Numbers}
                className="select d-flex"
                placeholder="Select"
                />
            <span className=" ms-3 text-dark">Days</span>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 col-sm-12">
          <label className="form-label">
            Invoice Round Off <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="mb-3 d-flex align-items-center">
          
            <CustomSelect
                options={Numbers}
                className="select d-flex"
                placeholder="Select"
                />
            <div className="ms-3">
              <div className="form-check form-check-md form-switch">
                <label className="form-check-label form-label m-0">
                  <input
                    className="form-check-input form-label"
                    type="checkbox"
                    role="switch"
                    defaultChecked
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 col-sm-12">
          <label className="form-label">
            Show Company Details <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="form-check form-check-md form-switch">
            <label className="form-check-label form-label m-0">
              <input
                className="form-check-input form-label"
                type="checkbox"
                role="switch"
                defaultChecked
              />
            </label>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 col-sm-12">
          <label className="form-label">
            Invoice Terms <span className="text-danger">*</span>
          </label>
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="mb-1" >
            <DefaultEditor value={values} onChange={onChange} />
          </div>
          <p>Maximum 60 Words</p>
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

export default InvoiceSetting