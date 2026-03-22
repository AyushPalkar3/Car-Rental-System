
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import CustomSelect from '../../../common/select/commonSelect'
import { City, Country, Industry, Owner, State, TeamSize } from '../../../common/json/selectOption'

const CompanySetting = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5>Website Settings</h5>
  </div>
  <form action="#">
    <div className="card-body">
      <div className="localization-content mb-3">
        <div>
          <h6 className="mb-3">Company Settings</h6>
          <div className="mb-3">
            <p className="fw-medium mb-0 text-gray-9 mb-1">Profile Photo</p>
            <div className="d-flex align-items-center flex-wrap row-gap-3  mb-3">
              <div className="d-flex align-items-center justify-content-center avatar avatar-xxl  me-3 flex-shrink-0 text-dark frames">
                <ImageWithBasePath
                  src="assets/admin/img/settings/company-logo-01.jpg"
                  className="rounded-circle"
                  alt="img"
                />
                <span className="avatar-badge avatar-badge-end bg-white p-1">
                  <i className="ti ti-trash text-danger fs-12" />
                </span>
              </div>
              <div className="profile-upload">
                <div className="profile-uploader d-flex align-items-center">
                  <div className="drag-upload-btn btn btn-md btn-dark">
                    <i className="ti ti-photo-up fs-14" />
                    Change
                    <input
                      type="file"
                      className="form-control image-sign"
                      multiple
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="fs-14">Recommended size is 500px x 500px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="localization-content mb-3">
        <h6 className="mb-3">Basic Information</h6>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Organization Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Owner Name <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Email Address <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Phone Number <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Industry <span className="text-danger">*</span>
              </label>
              
              <CustomSelect
                options={Industry}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">
                Team Size <span className="text-danger">*</span>
              </label>
              
              <CustomSelect
                options={TeamSize}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="localization-content mb-3">
        <h6 className="mb-3">Address Information</h6>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Address Line</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Country</label>
              <CustomSelect
                options={Country}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">State</label>
              <CustomSelect
                options={State}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">City</label>
              <CustomSelect
                options={City}
                className="select d-flex"
                placeholder="Select"
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Postal Code</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mb-0">
        <h6 className="mb-1">Transfer Ownership</h6>
        <p className="mb-2">
          As the current owner of this workspace, you must select an existing
          admin to transfer ownership.
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-end justify-content-between">
              <div className="w-100 me-3">
                <label className="form-label">Owner</label>
                
                <CustomSelect
                options={Owner}
                className="select d-flex"
                placeholder="Select"
                />
              </div>
              <Link to="#" className="btn btn-primary mb-1">
                Update
              </Link>
            </div>
          </div>
          <div></div>
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

export default CompanySetting