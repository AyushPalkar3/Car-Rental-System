
import ImageWithBasePath from "../img/ImageWithBasePath";
import { Link } from "react-router-dom";

const AddCard = () => {
  return (
    <>
      {/* Add Card Modal */}
      <div
        className="modal new-modal fade"
        id="add_card"
        data-keyboard="false"
        data-backdrop="static"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Card</h4>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#">
                <div className="modal-form-group">
                  <label>
                    Card Number <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Card Number"
                  />
                </div>
                <div className="modal-form-group">
                  <label>
                    Name on Card <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Card Name"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="modal-form-group">
                      <label>
                        CVV <span className="text-danger">*</span>
                      </label>
                      <div className="form-icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter CVV Number"
                        />
                        <span className="cus-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/lock-icon.svg"
                            alt="Icon"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="modal-form-group">
                      <label>
                        Expiry Date <span className="text-danger">*</span>
                      </label>
                      <div className="form-icon">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="DD/MM/YYYY"
                        />
                        <span className="cus-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/calendar-icon.svg"
                            alt="Icon"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-form-group">
                  <label className="custom_check">
                    <input
                      type="checkbox"
                      name="rememberme"
                      className="rememberme"
                    />
                    <span className="checkmark" />
                    Save this account for future transaction
                  </label>
                </div>
                <div className="modal-btn">
                  <Link to="#" className="btn btn-secondary w-100">
                    Pay $4700
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Card Modal */}
    </>
  );
};

export default AddCard;
