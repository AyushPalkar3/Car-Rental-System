
import { Link } from "react-router-dom";
import ImageWithBasePath from "../img/ImageWithBasePath";
import { all_routes } from "../../../router/all_routes";

const AddPayment = () => {
    const routes = all_routes
  return (
    <>
      {/* Add Payment Modal */}
      <div
        className="modal new-modal multi-step fade"
        id="add_payment"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Payment</h4>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="total-payment">
                <p>Total Amount</p>
                <h6>$22314</h6>
              </div>
              <div className="choose-payment-info">
                <h5>Choose your Payment Method</h5>
                <div className="choose-payment">
                  <label className="custom_radio">
                    <input
                      type="radio"
                      name="payment_one"
                      defaultValue="wallet_one"
                    />
                    <span className="checkmark" />
                    <ImageWithBasePath src="assets/img/icons/payment-1.svg" alt="Icon" />
                  </label>
                  <label className="custom_radio">
                    <input
                      type="radio"
                      name="payment_one"
                      defaultValue="wallet_one"
                    />
                    <span className="checkmark" />
                    <ImageWithBasePath src="assets/img/icons/payment-2.svg" alt="Icon" />
                  </label>
                  <label className="custom_radio">
                    <input
                      type="radio"
                      name="payment_one"
                      defaultValue="wallet_one"
                      defaultChecked={true}
                    />
                    <span className="checkmark" />
                    <ImageWithBasePath src="assets/img/icons/payment-3.svg" alt="Icon" />
                  </label>
                </div>
                <div className="add-payment-table-info">
                  <div className="wallet-table add-payment-table">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <label className="custom_radio">
                                <input
                                  type="radio"
                                  name="payment_two"
                                  defaultValue="wallet_two"
                                  defaultChecked={true}

                                />
                                <span className="checkmark" />
                                <ImageWithBasePath
                                  src="assets/img/icons/wallet-01.svg"
                                  alt="Icon"
                                />
                              </label>
                            </td>
                            <td>
                              <h6>3210 **** **** **12</h6>
                              <p>Card Number</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="wallet-table add-payment-table">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <label className="custom_radio">
                                <input
                                  type="radio"
                                  name="payment_two"
                                  defaultValue="wallet_two"
                                />
                                <span className="checkmark" />
                                <ImageWithBasePath
                                  src="assets/img/icons/wallet-02.svg"
                                  alt="Icon"
                                />
                              </label>
                            </td>
                            <td>
                              <h6>7847 **** **** **78</h6>
                              <p>Card Number</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="wallet-table add-payment-table">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <label className="custom_radio">
                                <input
                                  type="radio"
                                  name="payment_two"
                                  defaultValue="wallet_two"
                                />
                                <span className="checkmark" />
                                <ImageWithBasePath
                                  src="assets/img/icons/wallet-03.svg"
                                  alt="Icon"
                                />
                              </label>
                            </td>
                            <td>
                              <h6>4710 **** **** **64</h6>
                              <p>Card Number</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-btn">
                <button
                  className="btn btn-secondary w-100"
                  data-bs-target="#order_success"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Add to Wallet
                </button>
                <button
                  className="btn btn-outline-cancel"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Payment Modal */}
      {/* Order Success Modal */}
      <div
        className="modal new-modal order-success-modal fade"
        id="order_success"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="order-success-info">
                <span className="order-success-icon">
                  <ImageWithBasePath src="assets/img/icons/check-icon.svg" alt="Icon" />
                </span>
                <h4>Successful</h4>
                <p>
                  You Amount “$1000” has been successfully added. Order id :{" "}
                  <span>#50641</span>
                </p>
                <div className="modal-btn">
                  <Link to={routes.userWallet} className="btn btn-secondary">
                    Back to My Wallet <i className="feather icon-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Order Success Modal */}
    </>
  );
};

export default AddPayment;
