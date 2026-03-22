
import ImageWithBasePath from '../../../../../core/data/img/ImageWithBasePath'
import { Link } from 'react-router-dom'

const InvoiceTemplate = () => {
  return (
    <>
  <div className="card">
    <div className="card-header">
      <h5 className="fw-bold">App Settings</h5>
    </div>
    <div className="card-body pb-0">
      <h6 className="fw-bold mb-3">Invoice Template</h6>
      <div className="row gx-3">
        <div className="col-md-3">
          <div className="card invoice-template">
            <div className="card-body p-2">
              <div className="invoice-img">
                <Link to="#">
                  <ImageWithBasePath src="assets/admin/img/invoice/invoice-01.svg" alt="invoice" />
                </Link>
                <Link
                  to="#"
                  className="invoice-view-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#invoice_view_1"
                >
                  <i className="ti ti-eye" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="#" className="text-gray-9">
                  General Invoice 1
                </Link>
                <Link
                  to="#"
                  className="invoice-star d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-star fs-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card invoice-template">
            <div className="card-body p-2">
              <div className="invoice-img">
                <Link to="#">
                  <ImageWithBasePath src="assets/admin/img/invoice/invoice-02.svg" alt="invoice" />
                </Link>
                <Link
                  to="#"
                  className="invoice-view-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#invoice_view_2"
                >
                  <i className="ti ti-eye" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="#" className="text-gray-9">
                  General Invoice 2
                </Link>
                <Link
                  to="#"
                  className="invoice-star d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-star fs-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card invoice-template">
            <div className="card-body p-2">
              <div className="invoice-img">
                <Link to="#">
                  <ImageWithBasePath src="assets/admin/img/invoice/invoice-03.svg" alt="invoice" />
                </Link>
                <Link
                  to="#"
                  className="invoice-view-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#invoice_view_3"
                >
                  <i className="ti ti-eye" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="#" className="text-gray-9">
                  General Invoice 3
                </Link>
                <Link
                  to="#"
                  className="invoice-star d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-star fs-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card invoice-template">
            <div className="card-body p-2">
              <div className="invoice-img">
                <Link to="#">
                  <ImageWithBasePath src="assets/admin/img/invoice/invoice-04.svg" alt="invoice" />
                </Link>
                <Link
                  to="#"
                  className="invoice-view-icon"
                  data-bs-toggle="modal"
                  data-bs-target="#invoice_view_4"
                >
                  <i className="ti ti-eye" />
                </Link>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <Link to="#" className="text-gray-9">
                  General Invoice 4
                </Link>
                <Link
                  to="#"
                  className="invoice-star d-flex align-items-center justify-content-center"
                >
                  <i className="ti ti-star fs-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Invoivce View */}
  <div className="modal fade addmodal" id="invoice_view_1">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">General Invoice 1</h4>
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
          <div>
            <ImageWithBasePath
              src="assets/admin/img/invoice/invoice-view-01.svg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Invoivce View */}
  {/* Invoivce View */}
  <div className="modal fade addmodal" id="invoice_view_2">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">General Invoice 2</h4>
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
          <div>
            <ImageWithBasePath
              src="assets/admin/img/invoice/invoice-view-02.svg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Invoivce View */}
  {/* Invoivce View */}
  <div className="modal fade addmodal" id="invoice_view_3">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">General Invoice 3</h4>
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
          <div>
            <ImageWithBasePath
              src="assets/admin/img/invoice/invoice-view-03.svg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Invoivce View */}
  {/* Invoivce View */}
  <div className="modal fade addmodal" id="invoice_view_4">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="mb-0">General Invoice 4</h4>
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
          <div>
            <ImageWithBasePath
              src="assets/admin/img/invoice/invoice-view-04.svg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Invoivce View */}
</>

  )
}

export default InvoiceTemplate