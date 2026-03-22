
import { Link } from 'react-router-dom'

const EmailTemplates = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5 className="fw-bold">System Settings</h5>
    </div>
    <div className="card-body">
      <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
        <div className="d-flex align-items-center flex-wrap row-gap-3">
          <h6 className="fw-bold mb-0">Email Templates</h6>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
          <Link
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#add_email"
            className="btn btn-primary d-flex align-items-center"
          >
            <i className="ti ti-plus me-2" />
            Add New Template
          </Link>
        </div>
      </div>
      <div className="custom-datatable-filter table-responsive">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>TEMPLATE NAME</th>
              <th>CREATED ON</th>
              <th>STATUS</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#view_email"
                  >
                    Welcome Email
                  </Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">24 Jan 2025</p>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_email"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_email"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#view_email"
                  >
                    Booking Confirmation
                  </Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">27 Dec 2024</p>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_email"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_email"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#view_email"
                  >
                    Booking Reminder
                  </Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">19 Dec 2024</p>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_email"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_email"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#view_email"
                  >
                    Booking Cancellation
                  </Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">08 Dec 2024</p>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_email"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_email"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#view_email"
                  >
                    Seasonal Promotions &amp; Discounts
                  </Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">25 Nov 2024</p>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_email"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_email"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h6 className="fw-medium">
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#view_email"
                  >
                    System Update
                  </Link>
                </h6>
              </td>
              <td>
                <p className="text-dark">20 Nov 2024</p>
              </td>
              <td>
                <span className="badge badge-success-transparent d-inline-flex align-items-center badge-sm">
                  <i className="ti ti-point-filled me-1" />
                  Active
                </span>
              </td>
              <td>
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-sm"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="ti ti-dots-vertical" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end p-2">
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#edit_email"
                      >
                        <i className="ti ti-edit me-1" />
                        Edit
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-1"
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_email"
                      >
                        <i className="ti ti-trash me-1" />
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="modal fade" id="add_email">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Create Template</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body ">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-0">
                <label className="form-label">
                  Template Name <span className="text-danger">*</span>
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
            <button type="button" className="btn btn-primary">
              Create New
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="edit_email">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Edit Template</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body ">
          <div className="row">
            <div className="col-lg-12">
              <div className="border br-10 p-2 mb-3">
                <p>
                  Hi{" "}
                  <span className="text-info">
                    {"{"}Customer Name{"}"}
                  </span>
                  ,<br />
                  Welcome to{" "}
                  <span className="text-info">
                    {"{"}Company Name{"}"}
                  </span>
                  !
                </p>
                <p>
                  We’re thrilled to have you as part of our community and are
                  excited to support you in finding the perfect car rental
                  solution. Thank you for choosing us – we truly appreciate your
                  trust and confidence.
                </p>
                <p>
                  At{" "}
                  <span className="text-info">
                    {"{"}Company Name{"}"}
                  </span>
                  , our mission is to make your experience as smooth and
                  efficient as possible. Whether you’re looking for the perfect
                  vehicle or need assistance with booking, we’re here to help
                  you every step of the way. If you have any questions or need
                  help, our dedicated support team is always ready to assist
                  you. Feel free to reach out at any time – we’re committed to
                  ensuring you have the best experience possible
                </p>
                <p>
                  Thank you again for choosing{" "}
                  <span className="text-info">
                    {"{"}Company Name{"}"}
                  </span>
                  . We’re excited to be part of your journey and look forward to
                  supporting you throughout your rental experience.
                </p>
                <p>
                  Best <br />
                  The{" "}
                  <span className="text-info">
                    {"{"}Company Name{"}"}
                  </span>
                  Team
                </p>
              </div>
              <label className="form-label">Tags</label>
              <ul className="d-flex flex-wrap gap-2">
                <li>
                  <span className="text-info">
                    {"{"}Company Name{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Booking Number{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Booking Date{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Car Name{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Invoice ID{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Receipt ID{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Pickup Location{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Pickup Date{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Drop-off Location{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Drop-off Date{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Rental Price{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Website URL{"}"}
                  </span>
                </li>
                <li>
                  <span className="text-info">
                    {"{"}Discount Code{"}"}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-between">
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
          <div className="d-flex justify-content-center ">
            <Link
              to="#"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <button type="button" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="view_email">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Preview Template</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body ">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Hi{" "}
                <span className="text-info">
                  {"{"}Customer Name{"}"}
                </span>
                ,<br />
                Welcome to{" "}
                <span className="text-info">
                  {"{"}Company Name{"}"}
                </span>
                !
              </p>
              <p>
                We’re thrilled to have you as part of our community and are
                excited to support you in finding the perfect car rental
                solution. Thank you for choosing us – we truly appreciate your
                trust and confidence.
              </p>
              <p>
                At{" "}
                <span className="text-info">
                  {"{"}Company Name{"}"}
                </span>
                , our mission is to make your experience as smooth and efficient
                as possible. Whether you’re looking for the perfect vehicle or
                need assistance with booking, we’re here to help you every step
                of the way. If you have any questions or need help, our
                dedicated support team is always ready to assist you. Feel free
                to reach out at any time – we’re committed to ensuring you have
                the best experience possible
              </p>
              <p>
                Thank you again for choosing{" "}
                <span className="text-info">
                  {"{"}Company Name{"}"}
                </span>
                . We’re excited to be part of your journey and look forward to
                supporting you throughout your rental experience.
              </p>
              <p>
                Best <br />
                The{" "}
                <span className="text-info">
                  {"{"}Company Name{"}"}
                </span>
                Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Delete  */}
  <div className="modal fade" id="delete_email">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body text-center">
          <form>
            <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
              <i className="ti ti-trash-x fs-26" />
            </span>
            <h4 className="mb-1">Delete Email Template</h4>
            <p className="mb-3">
              Are you sure you want to delete email template?
            </p>
            <div className="d-flex justify-content-center">
              <Link
                to="#"
                className="btn btn-light me-3"
                data-bs-dismiss="modal"
              >
                Cancel
              </Link>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
              >
                Yes, Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete */}
</>

  )
}

export default EmailTemplates