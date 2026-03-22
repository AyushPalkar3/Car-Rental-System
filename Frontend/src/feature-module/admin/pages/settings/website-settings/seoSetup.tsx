import  { useState } from 'react'
import { Link } from 'react-router-dom'
import { Chips, type  ChipsChangeEvent } from "primereact/chips";
const SeoSetup = () => {
  const [value, setValue] = useState<any>(['Text']);
  const [value1, setValue1] = useState<any>(['Text']);
  const customChip = (item: string) => {
    return (
      <div >
          <span className="tag label ">{item}</span>
      </div>
    );
};
  return (
    <div className="card">
  <div className="card-header">
    <h5 className="fw-bold">Website Settings</h5>
  </div>
  <form action="#">
    <div className="card-body">
      <h6 className="fw-bold mb-3">SEO Setup - Site Meta</h6>
      <div className="mb-3">
        <label className="form-label">
          Meta Title<span className="text-danger ms-1">*</span>
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Site Description<span className="text-danger ms-1">*</span>
        </label>
        <textarea className="form-control" rows={3} defaultValue={""} />
      </div>
      <div className="mb-3 pb-3 border-bottom">
        <label className="form-label">
          Keywords<span className="text-danger ms-1">*</span>
        </label>
        
        <Chips value={value1} className="input-tags  h-100 w-100" onChange={(e: ChipsChangeEvent) => setValue1(e.value)} itemTemplate={customChip} />
      </div>
      <h6 className="fw-bold mb-3">SEO Setup - OG Meta</h6>
      <div className="mb-3">
        <label className="form-label">
          Meta Image <span className="text-danger">*</span>
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
        <label className="form-label">
          Meta Title<span className="text-danger ms-1">*</span>
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">
          Site Description<span className="text-danger ms-1">*</span>
        </label>
        <textarea className="form-control" rows={3} defaultValue={""} />
      </div>
      <div className="mb-0">
        <label className="form-label">
          Keywords<span className="text-danger ms-1">*</span>
        </label>
        <Chips value={value} className="input-tags  h-100 w-100" onChange={(e: ChipsChangeEvent) => setValue(e.value)} itemTemplate={customChip} />

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

export default SeoSetup