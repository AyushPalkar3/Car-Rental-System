import  { useState } from "react";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CustomSelect from "../select/commonSelect";
import { City, Country, State } from "../json/selectOption";
import { TimePicker } from "antd";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";

const LocationModal = () => {
  const [value, setValue] = useState<any>();
  return (
    <>
      {/* Add Location */}
      <div className="modal fade" id="add_location">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Location</h5>
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
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
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
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Location Title <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
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
                      onChange={setValue}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Location <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Country <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={Country}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={State}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      City <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={City}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Pincode <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <label className="form-label mb-2">
                  Working Days <span className="text-danger">*</span>
                </label>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Monday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Tuesday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Wednesday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Thursday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Friday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Saturday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Sunday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
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
      {/* /Add Driver */}
      {/* Edit Driver */}
      <div className="modal fade" id="edit_location">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Edit Location</h5>
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
                  <div className="d-flex align-items-center flex-wrap row-gap-3">
                    <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 p-2 flex-shrink-0 text-dark frames">
                      <ImageWithBasePath
                        src="assets/img/locations/location-01.jpg"
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
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Location Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="Johnson Dealer Zone"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="johnsondealer@example.com"
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
                      onChange={setValue}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Location <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      defaultValue="2881 Jarvis Street"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Country <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={Country}
                      defaultValue={Country[1]}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      State <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={State}
                      defaultValue={State[1]}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      City <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={City}
                      defaultValue={City[1]}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Pincode <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <label className="form-label mb-2">
                  Working Days <span className="text-danger">*</span>
                </label>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        defaultChecked
                      />
                      Monday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light" placeholder="9:30 AM"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <input
                        type="text"
                        className="form-control timepicker"
                        defaultValue="6:30 AM"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        defaultChecked
                      />
                      Tuesday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light" placeholder="9:30 AM"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <input
                        type="text"
                        className="form-control timepicker"
                        defaultValue="6:30 AM"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        defaultChecked
                      />
                      Wednesday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light" placeholder="9:30 AM"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <input
                        type="text"
                        className="form-control timepicker"
                        defaultValue="6:30 AM"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        defaultChecked
                      />
                      Thursday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light" placeholder="9:30 AM"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <input
                        type="text"
                        className="form-control timepicker"
                        defaultValue="6:30 AM"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                        defaultChecked
                      />
                      Friday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light" placeholder="9:30 AM"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill ">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light" placeholder="9:30 AM"/>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Saturday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="form-check form-check-md form-switch me-2">
                    <label className="form-check-label mt-0 mb-0 text-gray-5">
                      <input
                        className="form-check-input form-label me-2"
                        type="checkbox"
                        role="switch"
                      />
                      Sunday
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="input-icon-start position-relative flex-fill  me-3">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                    <p className="text-gray-5 me-3 mb-0 fs-14">to</p>
                    <div className="input-icon-start position-relative flex-fill bg-light">
                      <span className="input-icon-addon">
                        <i className="ti ti-clock" />
                      </span>
                      <TimePicker className="form-control timepicker bg-light"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="d-flex justify-content-between align-items-center w-100">
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
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link to="#" className="btn btn-primary">
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Driver */}
      {/* Delete  */}
      <div className="modal fade" id="delete_location">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Location</h4>
              <p className="mb-3">Are you sure you want to delete location?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete */}
    </>
  );
};

export default LocationModal;
