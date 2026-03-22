import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import CustomSelect from "../../common/select/commonSelect";
import {
  invoiceCurrency,
  invoiceFrom,
  invoicePayment,
  invoiceStatus,
} from "../../common/json/selectOption";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../router/all_routes";
import {
  adminPaymentsApi,
  computeInvoiceTotals,
  downloadInvoicePdf,
  formatInvoiceCurrency,
  type AdminPayment,
} from "../../service/api/payments";

const EditInvoice = () => {
  const { paymentId } = useParams<{ paymentId: string }>();
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [payment, setPayment] = useState<
    (AdminPayment & { invoiceNo: string; invoiceStatusLabel: string }) | null
  >(null);
  const [gstPreview, setGstPreview] = useState<"none" | "gst18">("gst18");

  const load = useCallback(async () => {
    if (!paymentId) {
      setErr("Missing payment.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setErr(null);
    try {
      const res = await adminPaymentsApi.get(paymentId);
      setPayment(res.data.data);
    } catch (e: unknown) {
      const msg =
        typeof e === "object" && e !== null && "message" in e
          ? String((e as { message?: string }).message)
          : "Could not load invoice.";
      setErr(msg);
      setPayment(null);
    } finally {
      setLoading(false);
    }
  }, [paymentId]);

  useEffect(() => {
    load();
  }, [load]);

  const totals = useMemo(() => {
    if (!payment) return { subtotal: 0, gstAmount: 0, total: 0 };
    return computeInvoiceTotals(payment.amount, gstPreview);
  }, [payment, gstPreview]);

  if (loading) {
    return (
      <div className="content me-4">
        <p className="text-muted py-5">Loading…</p>
      </div>
    );
  }

  if (err || !payment) {
    return (
      <div className="content me-4">
        <div className="alert alert-warning">
          {err || "Not found."}{" "}
          <Link to={all_routes.adminInvoicesList}>Back to invoices</Link>
        </div>
      </div>
    );
  }

  const customerName =
    [payment.user?.firstName, payment.user?.lastName].filter(Boolean).join(" ") || "Customer";
  const car = payment.booking?.car;
  const desc = car
    ? `Car rental (${car.name}${car.brand ? ` · ${car.brand}` : ""})`
    : "Car rental";
  const period = payment.booking
    ? `${payment.booking.duration} · ${new Date(payment.booking.pickupDate).toLocaleDateString("en-IN")} – ${new Date(payment.booking.returnDate).toLocaleDateString("en-IN")}`
    : "—";

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
        <div className="filterbox mb-3 d-flex align-items-center flex-wrap gap-2 invoice-title">
          <h4 className="me-3 mb-0">
            <i className="ti ti-menu-2 me-2" />
            Edit Invoice
          </h4>
          <div className="ms-auto d-flex flex-wrap gap-2">
            <Link
              className="btn btn-outline-primary btn-sm"
              to={generatePath(all_routes.admininvoiceDetails, { paymentId: payment.id })}
            >
              View details
            </Link>
            <div className="dropdown">
              <button
                className="btn btn-dark btn-sm text-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                Download PDF
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => downloadInvoicePdf(payment.id, "0")}
                  >
                    Without GST
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => downloadInvoicePdf(payment.id, "18")}
                  >
                    With GST 18%
                  </button>
                </li>
              </ul>
            </div>
          </div>
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
                        <div className="mb-4">
                          <label className="form-label">Invoice Number</label>
                          <input
                            type="text"
                            className="form-control"
                            value={payment.invoiceNo}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Car</label>
                          <input
                            type="text"
                            className="form-control"
                            value={car?.name || "—"}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">From Date</label>
                          <div className="input-icon-end position-relative">
                            <DatePicker
                              className="form-control datetimepicker w-100"
                              value={
                                payment.booking?.pickupDate
                                  ? dayjs(payment.booking.pickupDate)
                                  : undefined
                              }
                              disabled
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Due Date</label>
                          <div className="input-icon-end position-relative">
                            <DatePicker
                              className="form-control datetimepicker w-100"
                              value={
                                payment.booking?.returnDate
                                  ? dayjs(payment.booking.returnDate)
                                  : undefined
                              }
                              disabled
                            />
                            <span className="input-icon-addon">
                              <i className="ti ti-calendar" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Currency</label>
                          <CustomSelect
                            options={invoiceCurrency}
                            defaultValue={invoiceCurrency[0]}
                            className="select d-flex"
                            placeholder="Select"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label className="form-label">Status</label>
                          <CustomSelect
                            options={invoiceStatus}
                            defaultValue={
                              invoiceStatus.find(
                                (o) => o.label === payment.invoiceStatusLabel
                              ) || invoiceStatus[0]
                            }
                            className="select d-flex"
                            placeholder="Select"
                            disabled
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
                        <div className="mb-4">
                          <label className="form-label">From</label>
                          <CustomSelect
                            options={invoiceFrom}
                            defaultValue={invoiceFrom[0]}
                            className="select d-flex"
                            placeholder="Select"
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-2">
                          <label className="form-label">To</label>
                        </div>
                        <div className="bg-light border p-3 rounded mb-3">
                          <div className="d-flex align-items-center mb-2">
                            <Link
                              to="#"
                              className="avatar avatar-lg me-2 avatar-rounded"
                            >
                              <ImageWithBasePath
                                src="assets/admin/img/profiles/avatar-21.jpg"
                                alt=""
                              />
                            </Link>
                            <div>
                              <h6 className="fs-14">
                                <Link to="#">{customerName}</Link>
                              </h6>
                              <p className="mb-0 small">
                                {payment.user?.address
                                  ? [
                                      payment.user.address.addressLine,
                                      payment.user.address.city,
                                      payment.user.address.state,
                                      payment.user.address.pincode,
                                    ]
                                      .filter(Boolean)
                                      .join(", ")
                                  : "—"}
                              </p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center flex-wrap gap-2">
                            <p className="mb-0 ">
                              Contact : {payment.user?.phoneNum || "—"}
                            </p>
                            <p className="mb-0">{payment.user?.email || "—"}</p>
                          </div>
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
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pe-0">
                        <input type="text" className="form-control" readOnly value={desc} />
                      </td>
                      <td className="pe-0">
                        <input type="text" className="form-control" readOnly value={period} />
                      </td>
                      <td className="pe-0">
                        <input
                          type="text"
                          className="form-control"
                          readOnly
                          value={totals.subtotal.toFixed(2)}
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="text"
                          className="form-control"
                          readOnly
                          value={totals.gstAmount.toFixed(2)}
                        />
                      </td>
                      <td className="pe-0">
                        <input
                          type="text"
                          className="form-control"
                          readOnly
                          value={totals.total.toFixed(2)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-flex align-items-center border-bottom pb-3 mb-3 flex-wrap gap-2">
                <label className="small text-muted mb-0">Totals preview</label>
                <select
                  className="form-select form-select-sm w-auto"
                  value={gstPreview}
                  onChange={(e) => setGstPreview(e.target.value as "none" | "gst18")}
                >
                  <option value="none">Without GST</option>
                  <option value="gst18">With GST 18% on subtotal</option>
                </select>
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
                              defaultValue={invoicePayment[0]}
                              className="select d-flex"
                              placeholder="Select"
                              disabled
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
                              readOnly
                              defaultValue="The car must be returned in the same condition as rented. Additional charges may apply for damages, late returns, or excessive mileage."
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
                              readOnly
                              defaultValue="Invoice amounts follow the recorded Razorpay payment. Use Download PDF for official GST / non-GST documents."
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
                            <h6>{formatInvoiceCurrency(totals.subtotal, payment.currency)}</h6>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>Discount (0%)</span>
                            <h6 className="text-danger fs-14 fw-medium">
                              {formatInvoiceCurrency(0, payment.currency)}
                            </h6>
                          </div>
                          <div className="d-flex align-items-center justify-content-between mb-3">
                            <span>{gstPreview === "gst18" ? "GST (18% on subtotal)" : "GST"}</span>
                            <h6>{formatInvoiceCurrency(totals.gstAmount, payment.currency)}</h6>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          <h4>Total Amount </h4>
                          <h4>{formatInvoiceCurrency(totals.total, payment.currency)}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end align-items-center flex-wrap gap-2">
              <Link
                to={all_routes.adminInvoicesList}
                className="btn btn-light"
              >
                Cancel
              </Link>
              <button type="button" className="btn btn-primary" disabled title="Persisting invoice edits requires a future Invoice API.">
                Save &amp; Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditInvoice;
