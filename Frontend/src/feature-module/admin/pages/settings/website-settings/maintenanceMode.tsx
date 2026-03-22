import React from 'react'
import { Link } from 'react-router-dom'
import DefaultEditor from 'react-simple-wysiwyg'

const MaintenanceMode = () => {
  const [values, setValue] = React.useState();

  function onChange(e:any) {
    setValue(e.target.value);
  }
  return (
    <div className="card">
  <div className="card-header">
    <h5 className="fw-bold">Website Settings</h5>
  </div>
  <form action="#">
    <div className="card-body">
      <h6 className="fw-bold mb-3">Maintenance Mode</h6>
      <div className="mb-3">
        <label className="form-label">
          Image <span className="text-danger">*</span>
        </label>
        <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
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
      <div className="mb-3">
        <label className="form-label">Description</label>
        <DefaultEditor value={values} onChange={onChange} />
      </div>
      <div className="form-check form-check-md form-switch me-2">
        <label className="form-check-label form-label mt-0 mb-0">
          <input
            className="form-check-input form-label me-2"
            type="checkbox"
            role="switch"
            defaultChecked
          />
          Status
        </label>
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

export default MaintenanceMode