
import { Link } from 'react-router-dom'
import CustomSelect from '../select/commonSelect'
import { Brand, DamageLocation, DamageType, OneTime } from '../json/selectOption'
import { DatePicker } from 'antd'
import { all_routes } from '../../../../router/all_routes'

const CarBookingModal = () => {
  return (
    <>
  {/* Add New Tarrif */}
  <div className="modal fade" id="add-tarrif">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Add New Tarrif</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Tariff Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Daily Price <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    From Days <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    To Days <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">
                      Base Kilometers (Per Day){" "}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="unlimited1"
                      />
                      <label className="form-check-label" htmlFor="unlimited1">
                        Unlimited
                      </label>
                    </div>
                  </div>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Kilometers Extra Price{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
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
                Create Tarrif
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add New Tarrif */}
  {/* Edit Tarrif */}
  <div className="modal fade" id="edit-tarrif">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Tarrif</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Tariff Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="4 to 5 days"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Daily Price <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={'50'}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    From Days <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={'4'}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    To Days <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={'5'}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label">
                      Base Kilometers (Per Day){" "}
                      <span className="text-danger">*</span>
                    </label>
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="unlimited2"
                      />
                      <label className="form-check-label" htmlFor="unlimited2">
                        Unlimited
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={'100'}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Kilometers Extra Price{" "}
                    <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue={'50'}
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
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Tarrif */}
  {/* Delete Tarrif */}
  <div className="modal fade" id="delete_tarrif">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Tarrif</h4>
          <p className="mb-3">Are you sure you want to delete Tarrif?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.carPartnerAddCar} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Damage */}
  {/* Add Brand */}
  <div className="modal fade" id="add_brand">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Brand</h5>
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
          <div className="mb-3">
            <label className="form-label">
              Brand Image <span className="text-danger">*</span>
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
          <div className="mb-3">
            <label className="form-label">
              Brand Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Total Cars <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
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
  {/* /Add Brand */}
  {/* Add Type */}
  <div className="modal fade" id="add_type">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Type</h5>
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
                  <p className="fs-14">Upload Image size 180*180, within 5MB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
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
  {/* /Add Type */}
  {/* Add Model */}
  <div className="modal fade" id="add_model">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Model</h5>
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
          <div className="mb-3">
            <label className="form-label">
              Model <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Brand <span className="text-danger">*</span>
            </label>
            
            <CustomSelect
                options={Brand}
                className="select d-flex"
                placeholder="Select"
                />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Total Cars <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
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
  {/* /Add Model */}
  {/* Create Seasonal Pricing */}
  <div className="modal fade" id="add_price">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Create Seasonal Pricing</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Season Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Start Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                  <DatePicker
                        className="form-control datetimepicker"
                        placeholder="dd/mm/yyyy"
                      />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    End Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                  <DatePicker
                        className="form-control datetimepicker"
                        placeholder="dd/mm/yyyy"
                      />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Daily Rate <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Weekly Rate <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Monthly Rate <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control " />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Late Fees <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control " />
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
        </form>
      </div>
    </div>
  </div>
  {/* /Create Seasonal Pricing */}
  {/* Select Seasonal Pricing */}
  <div className="modal fade" id="select_price">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Seasonal Pricing</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
              <div>
                <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Halloween
                  <span className="badge bg-secondary-transparent ms-2">
                    01 Oct 2025 - 31 Oct 2025{" "}
                  </span>
                </h6>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Daily Rate : <span className="text-gray-9">$200</span>
                  </p>
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Weekly Rate : <span className="text-gray-9">$1400</span>
                  </p>
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Monthly Rate : <span className="text-gray-9">$4800</span>
                  </p>
                  <p className="fs-13 fw-medium mb-0 pe-2 mb-0">
                    Late Fee : <span className="text-gray-9">$200</span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center icon-list delivery-add">
                <Link to="#">
                  <i className="ti ti-plus plus-active" />
                  <i className="ti ti-check check-active" />
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
              <div>
                <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Easter
                  <span className="badge bg-secondary-transparent ms-2">
                    01 Apr 2025 - 30 Apr 2025{" "}
                  </span>
                </h6>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Daily Rate : <span className="text-gray-9">$220</span>
                  </p>
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Weekly Rate : <span className="text-gray-9">$1540</span>
                  </p>
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Monthly Rate : <span className="text-gray-9">$6600</span>
                  </p>
                  <p className="fs-13 fw-medium mb-0 pe-2 mb-0">
                    Late Fee : <span className="text-gray-9">$250</span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center icon-list delivery-add">
                <Link to="#">
                  <i className="ti ti-plus plus-active" />
                  <i className="ti ti-check check-active" />
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
              <div>
                <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  New Year
                  <span className="badge bg-secondary-transparent ms-2">
                    01 Jan 2025 - 15 Jan 2025
                  </span>
                </h6>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Daily Rate : <span className="text-gray-9">$240</span>
                  </p>
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Weekly Rate : <span className="text-gray-9">$1680</span>
                  </p>
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Monthly Rate : <span className="text-gray-9">$6720</span>
                  </p>
                  <p className="fs-13 fw-medium mb-0 pe-2 mb-0">
                    Late Fee : <span className="text-gray-9">$150</span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center icon-list delivery-add">
                <Link to="#">
                  <i className="ti ti-plus plus-active" />
                  <i className="ti ti-check check-active" />
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
              <div>
                <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Christmas
                  <span className="badge bg-secondary-transparent ms-2">
                    01 Dec 2024 - 31 Dec 2025
                  </span>
                </h6>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Daily Rate : <span className="text-gray-9">$250</span>
                  </p>
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Weekly Rate : <span className="text-gray-9">$1750</span>
                  </p>
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Monthly Rate : <span className="text-gray-9">$7000</span>
                  </p>
                  <p className="fs-13 fw-medium mb-0 pe-2 mb-0">
                    Late Fee : <span className="text-gray-9">$300</span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center icon-list delivery-add">
                <Link to="#">
                  <i className="ti ti-plus plus-active" />
                  <i className="ti ti-check check-active" />
                </Link>
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Select Seasonal Pricing */}
  {/* Select Seasonal Pricing */}
  <div className="modal fade" id="select_insurance">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Insurance</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
              <div>
                <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Full Premium Insurance
                </h6>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Price : <span className="text-gray-9">$200</span>
                  </p>
                  <p className="fs-13 fw-medium mb-0">
                    Benefits : <span className="text-gray-9">4</span>
                    <i
                      className="ti ti-info-circle-filled text-gray-5 ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="No additional charges for emergency roadside services"
                    />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center icon-list delivery-add">
                <Link to="#">
                  <i className="ti ti-plus plus-active" />
                  <i className="ti ti-check check-active" />
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
              <div>
                <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Roadside Assistance
                </h6>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Price : <span className="text-gray-9">$250</span>
                  </p>
                  <p className="fs-13 fw-medium mb-0">
                    Benefits : <span className="text-gray-9">6</span>
                    <i
                      className="ti ti-info-circle-filled text-gray-5 ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="No additional charges for emergency roadside services"
                    />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center icon-list delivery-add">
                <Link to="#">
                  <i className="ti ti-plus plus-active" />
                  <i className="ti ti-check check-active" />
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
              <div>
                <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Liability Insurance
                </h6>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Price : <span className="text-gray-9">$150</span>
                  </p>
                  <p className="fs-13 fw-medium mb-0">
                    Benefits : <span className="text-gray-9">4</span>
                    <i
                      className="ti ti-info-circle-filled text-gray-5 ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="No additional charges for emergency roadside services"
                    />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center icon-list delivery-add">
                <Link to="#">
                  <i className="ti ti-plus plus-active" />
                  <i className="ti ti-check check-active" />
                </Link>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap bg-white gap-3 border br-5 p-20 mb-3">
              <div>
                <h6 className="fs-14 fw-semibold d-inline-flex align-items-center mb-1">
                  Personal Accident Insurance
                </h6>
                <div className="d-flex align-items-center gap-2 flex-wrap">
                  <p className="fs-13 fw-medium border-end pe-2 mb-0">
                    Price : <span className="text-gray-9">$300</span>
                  </p>
                  <p className="fs-13 fw-medium mb-0">
                    Benefits : <span className="text-gray-9">5</span>
                    <i
                      className="ti ti-info-circle-filled text-gray-5 ms-1"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      data-bs-original-title="No additional charges for emergency roadside services"
                    />
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center icon-list delivery-add">
                <Link to="#">
                  <i className="ti ti-plus plus-active" />
                  <i className="ti ti-check check-active" />
                </Link>
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Select Seasonal Pricing */}
  {/* Edit Insurance */}
  <div className="modal fade" id="edit_insurance">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">Edit Insurance</h4>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">
                Insurane Name <span className="text-danger"> *</span>
              </label>
              <input
                type="text"
                className="form-control"
                defaultValue="Full Premium Insurance"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Price Type <span className="text-danger"> *</span>
              </label>
              <div className="d-flex align-items-center">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="Radio-sm">
                    Daily
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm2"
                  />
                  <label className="form-check-label" htmlFor="Radio-sm2">
                    Fixed
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="Radio"
                    id="Radio-sm3"
                  />
                  <label className="form-check-label" htmlFor="Radio-sm3">
                    Percentage
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Price <span className="text-danger"> *</span>
              </label>
              <input type="text" className="form-control" defaultValue="$200" />
            </div>
            <div className="add-insurance-benifit-2">
              <div className="mb-1">
                <label className="form-label">
                  Benefit <span className="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="No additional charges for emergency roadside services."
                />
              </div>
            </div>
            <Link
              to="#"
              className="d-inline-flex align-items-center text-info add-new-benifit-2"
            >
              <i className="ti ti-plus me-1" />
              Add New
            </Link>
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
        </form>
      </div>
    </div>
  </div>
  {/* /Edit  Insurance */}
  {/* Edit Seasonal Pricing */}
  <div className="modal fade" id="edit_seasonal_price">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Seasonal Pricing</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="row">
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Season Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Halloween"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    Start Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                    <input
                      type="text"
                      className="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                      defaultValue="28-01-2025"
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label">
                    End Date <span className="text-danger">*</span>
                  </label>
                  <div className="input-icon-end position-relative">
                    <input
                      type="text"
                      className="form-control datetimepicker"
                      placeholder="dd/mm/yyyy"
                      defaultValue="02-02-2025"
                    />
                    <span className="input-icon-addon">
                      <i className="ti ti-calendar" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Daily Rate <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    defaultValue={'50'}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Weekly Rate <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    defaultValue={'100'}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Monthly Rate <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    defaultValue={'150'}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <label className="form-label">
                    Late Fees <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    defaultValue={'200'}
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
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Seasonal Pricing */}
  {/* Delete Pricing */}
  <div className="modal fade" id="delete_price">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Pricing</h4>
          <p className="mb-3">Are you sure you want to delete Pricing?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.carPartnerAddCar} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Pricing */}
  {/* Delete Insurance */}
  <div className="modal fade" id="delete_insurance">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Insurance</h4>
          <p className="mb-3">Are you sure you want to delete Insurance?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.carPartnerAddCar} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Insurance */}
  {/* Edit Pricing */}
  <div className="modal fade" id="edit_price">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Pricing</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <table className="table custom-table1">
              <thead className="thead-white">
                <tr>
                  <th className="py-0">Extra Features</th>
                  <th className="py-0">Pricing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="fw-medium text-gray-9">Navigation</td>
                  <td>
                    <div className="d-flex align-items-center">
                    <CustomSelect
                options={OneTime}
                className="select d-flex"
                placeholder="Select"
                />
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={'90'}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-medium text-gray-9">Satellite Radio</td>
                  <td>
                    <div className="d-flex align-items-center">
                    <CustomSelect
                        options={OneTime}
                        defaultValue={OneTime[1]}
                        className="select d-flex"
                        placeholder="Select"
                        />
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={'25'}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-medium text-gray-9">Roadside Assistance</td>
                  <td>
                    <div className="d-flex align-items-center">
                    <CustomSelect
                        options={OneTime}
                        defaultValue={OneTime[1]}
                        className="select d-flex"
                        placeholder="Select"
                        />
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={'47'}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-medium text-gray-9">
                    Express Check-in/out
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                    <CustomSelect
                        options={OneTime}
                        defaultValue={OneTime[1]}
                        className="select d-flex"
                        placeholder="Select"
                        />
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={'75'}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-medium text-gray-9">Child Safety Seats</td>
                  <td>
                    <div className="d-flex align-items-center">
                    <CustomSelect
                        options={OneTime}
                        defaultValue={OneTime[1]}
                        className="select d-flex"
                        placeholder="Select"
                        />
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={'22'}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="fw-medium text-gray-9">Roadside Assistance</td>
                  <td>
                    <div className="d-flex align-items-center">
                    <CustomSelect
                        options={OneTime}
                        defaultValue={OneTime[1]}
                        className="select d-flex"
                        placeholder="Select"
                        />
                      <div className="input-icon-start position-relative w-100 ms-2">
                        <span className="input-icon-addon">
                          <i className="ti ti-currency-dollar" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={'48'}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Pricing */}
  {/* Add New Damage */}
  <div className="modal fade" id="add-damage">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Add New Damage</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="mb-3">
              <label className="form-label">
                Damage Location <span className="text-danger">*</span>
              </label>
              <CustomSelect
                        options={DamageLocation}
                        className="select d-flex"
                        placeholder="Select"
                        />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Damage Type <span className="text-danger">*</span>
              </label>
              <CustomSelect
                        options={DamageType}
                        className="select d-flex"
                        placeholder="Select"
                        />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows={3} defaultValue={""} />
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
        </form>
      </div>
    </div>
  </div>
  {/* /Add New Damage */}
  {/* Edit Damage */}
  <div className="modal fade" id="edit-damage">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Edit Damage</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="mb-3">
              <label className="form-label">
                Damage Location <span className="text-danger">*</span>
              </label>
              <CustomSelect
                        options={DamageLocation}
                        defaultValue={DamageLocation[1]}
                        className="select d-flex"
                        placeholder="Select"
                        />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Damage Type <span className="text-danger">*</span>
              </label>
              <CustomSelect
                        options={DamageType}
                        defaultValue={DamageType[1]}
                        className="select d-flex"
                        placeholder="Select"
                        />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows={3}
                defaultValue={
                  "Cracks, scratches, or faded surfaces due to heat exposure."
                }
              />
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
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Damage */}
  {/* Delete Damage */}
  <div className="modal fade deletemodal" id="delete_damage">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
            <i className="ti ti-trash-x fs-26" />
          </span>
          <h4 className="mb-1">Delete Damage</h4>
          <p className="mb-3">Are you sure you want to delete Damage?</p>
          <div className="d-flex justify-content-center">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link to={all_routes.carPartnerAddCar} className="btn btn-primary">
              Yes, Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Damage */}
  {/* Create FAQ */}
  <div className="modal fade" id="add-faq">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Create FAQ</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <form >
          <div className="modal-body pb-1">
            <div className="mb-3">
              <label className="form-label">
                Question <span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Answer <span className="text-danger">*</span>
              </label>
              <textarea className="form-control" rows={3} defaultValue={""} />
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
        </form>
      </div>
    </div>
  </div>
  {/* /Create FAQ */}
</>

  )
}

export default CarBookingModal