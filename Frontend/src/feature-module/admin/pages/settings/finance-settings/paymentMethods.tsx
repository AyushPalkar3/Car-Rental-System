
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../../../router/all_routes'

const PaymentMethods = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5>System Settings</h5>
    </div>
    <div className="card-body pb-0">
      <div className="payment-section">
        <h6 className="mb-3">Payment Methods</h6>
        <div className="row">
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath src="assets/admin/img/icons/paypal-name.svg" alt="image" />
                    </span>
                    <Link
                      to="#"
                      data-bs-toggle="modal"
                      data-bs-target="#add_paypal"
                    >
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    PayPal is the faster, safer way to send and receive money{" "}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
                  <div className="form-check form-check-sm form-switch p-0 m-0">
                    <input
                      className="form-check-input form-label m-0"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath src="assets/admin/img/icons/stripe-icon.svg" alt="image" />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    APIs to accept cards, manage subscriptions, send money.
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath src="assets/admin/img/icons/brain-tree.svg" alt="image" />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Braintree offers more fraud protection and security
                    features.
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/Razorpay-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Razorpay is an India&apos;s all in one payment solution.
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/2checkout-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Works stably and reliably and features are valuable{" "}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
                  <div className="form-check form-check-sm form-switch p-0 m-0">
                    <input
                      className="form-check-input form-label m-0"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath src="assets/admin/img/icons/skrill-icon.svg" alt="image" />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Allows send international money transfers and payments
                    quickly{" "}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath src="assets/admin/img/icons/payu-icon.svg" alt="image" />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Provide payment solution to individuals to make payments
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/apple-pay-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Replaces your physical cards and cash with private and
                    secure{" "}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/payonner-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Fast, Low-Cost Solution for your International Business.
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/mercad-pago-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Online payment platform that enables to send &amp; receive
                    money{" "}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/payment-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Paytm is a leading Indian digital payments &amp; financial
                    services platform.
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
                  <div className="form-check form-check-sm form-switch p-0 m-0">
                    <input
                      className="form-check-input form-label m-0"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/midtrans-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Midtrans provides the maximum number of payment methods
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/pytorch-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    PyTorch, a network through which your customers transfer
                    funds
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-success me-1" />
                    Connected
                  </span>
                  <div className="form-check form-check-sm form-switch p-0 m-0">
                    <input
                      className="form-check-input form-label m-0"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/bank-transfer-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Direct transfer of funds from one bank account into another.
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill">
              <div className="card-body">
                <div>
                  <div className="payment-content">
                    <span>
                      <ImageWithBasePath
                        src="assets/admin/img/icons/cash-delivery-icon.svg"
                        alt="image"
                      />
                    </span>
                    <Link to="#">
                      <i className="ti ti-settings" />
                    </Link>
                  </div>
                  <p className="fs-13">
                    Indicating that goods must be paid for at the time of
                    delivery.{" "}
                  </p>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge badge-outline d-inline-flex align-items-center text-gray-9">
                    <i className="ti ti-point-filled text-dark me-1" />
                    Not Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Add paypal */}
  <div className="modal fade" id="add_paypal">
    <div className="modal-dialog modal-dialog-centered modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title mb-0">Paypal</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x fs-16" />
          </button>
        </div>
        <div className="modal-body">
          <div className="mb-3">
            <label className="form-label">
              From Email Address <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              API Keys <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Secret Key <span className="text-danger">*</span>
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
            <Link to={all_routes.paymentMethods} className="btn btn-primary">
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add paypal */}
</>

  )
}

export default PaymentMethods