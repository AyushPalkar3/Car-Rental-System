import  { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../core/data/img/ImageWithBasePath'
import CustomSelect from '../select/commonSelect'
import { Language } from '../json/selectOption'
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
const CompanyModal = () => {
  const [value, setValue] = useState<any>()
  return (
    <>
  {/* Add Company */}
  <div className="modal fade" id="add_company">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Company</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">
                Image <span className="text-danger">*</span>
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
                    <p className="fs-14">
                      Upload Image size 180*180, within 5MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Company Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Contact Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <PhoneInput
                placeholder="Enter phone number"
                country="US"
                value={value}
                onChange={setValue} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Language <span className="text-danger">*</span>
                </label>
                <CustomSelect
                options={Language}
                className="select d-flex"
                placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Website <span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  Address <span className="text-danger">*</span>
                </label>
                <input className="form-control" type="text" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Notes</label>
                <textarea className="form-control" defaultValue={""} />
              </div>
            </div>
            <div className="col-md-12">
              <label className="form-label"> Document</label>
              <div className="document-upload text-center br-3 mb-3">
                <ImageWithBasePath
                  src="assets/admin/img/icons/upload-icon.svg"
                  alt="img"
                  className="mb-2"
                />
                <p className="mb-2">
                  Drop your files here or{" "}
                  <span className="text-info text-decoration-underline">
                    Browse
                  </span>
                </p>
                <p className="fs-12 mb-0">Maximum size 50mb</p>
                <input
                  type="file"
                  className="form-control image-sign"
                  multiple
                  accept=".pdf, .txt, .doc, .docx"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
              Create New
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Company */}
  {/* Edit Company */}
  <div className="modal fade" id="edit_company">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Company</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body pb-1">
          <div className="row">
            <div className="mb-3">
              <label className="form-label">
                Image <span className="text-danger">*</span>
              </label>
              <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">
                <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                  <ImageWithBasePath
                    src="assets/admin/img/companies/Toyota.jpg"
                    className="img-fluid rounded"
                    alt="img"
                  />
                  <span className="avatar-badge bg-light text-danger m-1">
                    <i className="ti ti-trash" />
                  </span>
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
                    <p className="fs-14">
                      Upload Image size 180*180, within 5MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Company Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="TechNova Solutions"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Contact Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="Andrew Simons"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <PhoneInput
                placeholder="Enter phone number"
                country="US"
                value={value}
                onChange={setValue} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue="andr72@example.com"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Language <span className="text-danger">*</span>
                </label>
                <CustomSelect
                options={Language}
                defaultValue={Language[1]}
                className="select d-flex"
                placeholder="Select"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Website <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue="https://www.example.com"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  Address <span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  defaultValue="2881 Jarvis Street"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">Notes</label>
                <textarea className="form-control" defaultValue={""} />
              </div>
            </div>
            <div className="col-md-12">
              <label className="form-label"> Document</label>
              <div className="document-upload text-center br-3 mb-3">
                <ImageWithBasePath
                  src="assets/admin/img/icons/upload-icon.svg"
                  alt="img"
                  className="mb-2"
                />
                <p className="mb-2">
                  Drop your files here or{" "}
                  <span className="text-info text-decoration-underline">
                    Browse
                  </span>
                </p>
                <p className="fs-12 mb-0">Maximum size 50mb</p>
                <input
                  type="file"
                  className="form-control image-sign"
                  multiple
                  accept=".pdf, .txt, .doc, .docx"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex justify-content-center">
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
      </div>
    </div>
  </div>
  {/* /Edit Company */}
  {/* Delete  */}
  <div className="modal fade" id="delete_modal">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Client</h4>
          <p className="mb-3">Are you sure you want to delete Client?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to="#" data-bs-dismiss="modal" className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</>

  )
}

export default CompanyModal