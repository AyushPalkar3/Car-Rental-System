import { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import CustomSelect from "../select/commonSelect";
import { Gender, Language, OneTime } from "../json/selectOption";
import { DatePicker } from "antd";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
const BookingModal = () => {
  const [value, setValue] = useState<any>()
  return (
    <>
      {/* Edit Pricing */}
      <div className="modal fade" id="edit_price1">
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
                              defaultValue={90}
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
                              defaultValue={25}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-gray-9">
                        Roadside Assistance
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
                              defaultValue={47}
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
                              defaultValue={75}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-gray-9">
                        Child Safety Seats
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
                              defaultValue={22}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-medium text-gray-9">
                        Roadside Assistance
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
                              defaultValue={48}
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Drivers <span className="text-danger">*</span>
                      </label>
                      <div className="d-flex align-items-center mt-2">
                        <Link
                          to="#"
                          className="avatar avatar-sm avatar-rounded me-2 flex-shrink-0"
                        >
                          <ImageWithBasePath
                            src="assets/admin/img/profiles/avatar-05.jpg"
                            alt=""
                          />
                        </Link>
                        <div>
                          <Link className="d-block fw-semibold" to="#">
                            Reuben Keen
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Pricing <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="$ 90"
                        className="form-control"
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
      {/* /Edit Pricing */}
      {/* Add Driver */}
      <div className="modal fade" id="add_driver">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="mb-0">Create Driver</h5>
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
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Driver Name <span className="text-danger">*</span>
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Gender <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={Gender}
                      className="select d-flex"
                      placeholder="Select"
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
                <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Card Number <span className="text-danger">*</span>
                    </label>
                    <input className="form-control" type="text" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Date of Issue <span className="text-danger">*</span>
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
                <div className="col-md-4">
                  <div className="mb-3">
                    <label className="form-label">
                      Valid Date <span className="text-danger">*</span>
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
      {/* /Add Driver */}
      <>
        {/* Add Client */}
        <div className="modal fade" id="add_client">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Create Client</h5>
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
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Client Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Date of Birth <span className="text-danger">*</span>
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
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Gender <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={Gender}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
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
                  <div className="col-md-4">
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
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
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
                  <h6 className="fs-16 fw-medium mb-2">License Details</h6>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Card Number <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Date of Issue <span className="text-danger">*</span>
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
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Valid Date <span className="text-danger">*</span>
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
        {/* /Add Client */}
      </>
    </>
  );
};

export default BookingModal;
