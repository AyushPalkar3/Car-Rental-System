
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import { DatePicker } from "antd";
import CustomSelect from "../../common/select/commonSelect";
import {
  invoiceCar,
  invoiceCurrency,
  invoiceFrom,
  invoicePayment,
  invoiceStatus,
} from "../../common/json/selectOption";

const AddInvoice = () => {
  return (
    <>
      <div className="content me-4">
        <div className="mb-3">
          <Link
            to={all_routes.adminInvoicesList}
            className="d-inline-flex align-items-center fw-medium"
          >
            <i className="ti ti-arrow-narrow-left me-2" />
            Back to List
          </Link>
        </div>
        <div className="alert alert-info mb-3" role="alert">
          Invoices are generated from{" "}
          <Link to={all_routes.adminPaymentsList} className="alert-link">
            Payments
          </Link>
          . Open a payment to view, print, or download PDF (with or without 18% GST).
        </div>
        <div className="filterbox mb-3 d-flex align-items-center invoice-title">
          <h4 className="me-3">
            <i className="ti ti-menu-2 me-2" />
            Add Invoice
          </h4>
        </div>
        <div className="card mb-0">
          <div className="card-body">
            <div className="border-bottom mb-3">
              <div className="row">
                <div className="col-lg-6">
                  <div className="me-lg-3">
                    <h5 className="mb-3">Invoice Details</h5>
                    <div className="row gx-3">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Invoice Number</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue={5432}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Car</label>
                          <CustomSelect
                            options={invoiceCar}
                            className="select d-flex"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">From Date</label>
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
                          <label className="form-label">Due Date</label>
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
                          <label className="form-label">Currency</label>
                          <CustomSelect
                            options={invoiceCurrency}
                            className="select d-flex"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Status</label>
                          <CustomSelect
                            options={invoiceStatus}
                            className="select d-flex"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ms-lg-3">
                    <h5 className="mb-3">Billing Details</h5>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">From</label>
                          <CustomSelect
                            options={invoiceFrom}
                            className="select d-flex"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <div className="d-flex align-items-center justify-content-between">
                            <label className="form-label">To</label>
                            <Link to="#" className="text-info d-block mb-1">
                              Add New
                            </Link>
                          </div>
                          <CustomSelect
                            options={invoiceFrom}
                            className="select d-flex"
                            placeholder="Select"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className="mb-3">Rental Details</h5>
              <div className="table-responsive border border-gray br-10 mb-3">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th className="w-50">DESCRIPTION</th>
                      <th>QUANTITY</th>
                      <th>NET PRICE</th>
                      <th>TAX</th>
                      <th>TOTAL PRICE</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pe-0">
                        <div>
                          <input type="text" className="form-control" />
                        </div>
                      </td>
                      <td className="pe-0">
                        <div>
                          <input type="text" className="form-control" />
                        </div>
                      </td>
                      <td className="pe-0">
                        <div>
                          <input type="text" className="form-control" />
                        </div>
                      </td>
                      <td className="pe-0">
                        <div>
                          <input type="text" className="form-control" />
                        </div>
                      </td>
                      <td className="pe-0">
                        <div>
                          <input type="text" className="form-control" />
                        </div>
                      </td>
                      <td>
                        <div>
                          <Link
                            to=""
                            className="btn btn-icon btn-sm text-danger"
                          >
                            <i className="ti ti-trash" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                <Link
                  to="#"
                  className="btn btn-secondary d-inline-flex align-items-center me-2"
                >
                  <i className="ti ti-plus me-1" />
                  Add More
                </Link>
                <Link
                  to="#"
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#link_reservation"
                >
                  Link Reservation
                </Link>
              </div>
              <div className="border-bottom mb-3">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="me-lg-4">
                      <h5 className="mb-3">Others</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label className="form-label">Payment Method</label>
                            <CustomSelect
                              options={invoicePayment}
                              className="select d-flex"
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Terms &amp; Conditions{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Notes <span className="text-danger">*</span>
                            </label>
                            <textarea
                              className="form-control"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="card bg-light">
                      <div className="card-body">
                        <div className="border-bottom mb-3">
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>Subtotal</span>
                            <h6>$0.00</h6>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>Discount (0%)</span>
                            <h6 className="text-danger fs-14 fw-medium">
                              $0.00
                            </h6>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>TAX (0%)</span>
                            <h6>$0.00</h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <h4>Total Amount </h4>
                          <h4>$0.00</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center">
              <Link to="#" className="btn btn-light me-2">
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary">
                Save &amp; Send
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInvoice;
