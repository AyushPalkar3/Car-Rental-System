
import Breadcrumbs from "../common/breadcrumbs";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";


const Booking = () => {
  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Order Confirmation" subtitle="Pages" />
      <section className="order-confirmation">
        <div className="container">
          <div className="confirm-order">
            <div className="section-title">
              <h3>Order Confirmation</h3>
              <h5>
                Order Total : <span>$315.00</span>
              </h5>
            </div>
            <div className="booking-details order-confirm-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Car Details</h4>
                    <Link to="#">Edit</Link>
                  </div>
                  <div className="order-car">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/detail-smallcar-img-2.jpg"
                        alt="img"
                      />
                    </span>
                    <h5>
                      Chevrolet Camaro<span>$315</span>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Extra Service</h4>
                    <Link to="#">Edit</Link>
                  </div>
                  <ul className="address-info">
                    <li>Baby Seat : $10</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Payment details</h4>
                    <Link to="#">Edit</Link>
                  </div>
                  <div className="visa-card">
                    <Link to="#">
                      <ImageWithBasePath src="assets/img/visa.svg" alt="#" />
                    </Link>
                    <h6>Visa card ending in 1245</h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Pickup Location &amp; Date</h4>
                    <Link to="#">Edit</Link>
                  </div>
                  <ul className="address-info">
                    <li>45, 4th Avanue Mark Street USA</li>
                    <li>11 Jan 2023 - 11:00 PM</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Your Information</h4>
                    <Link to="#">Edit</Link>
                  </div>
                  <ul className="address-info">
                    <li>Casandra</li>
                    <li>casandra@example.com</li>
                    <li>+1 73940 45355</li>
                    <li>45, 4th Avanue Mark Street USA</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="confirmation-title">
                    <h4>Drop Off Location</h4>
                    <Link to="#">Edit</Link>
                  </div>
                  <ul className="address-info mb-0">
                    <li>45, 4th Avanue Mark Street USA</li>
                    <li>11 Jan 2023 - 11:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="place-order-btn">
              <Link
                to="#"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#pages_edit"
              >
                <i className="feather icon-bar-chart me-2" />
               
              
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal custom-modal fade check-availability-modal payment-success-modal"
        id="pages_edit"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body">
              <div className="payment-success">
                <span className="check">
                  <i className="fa-solid fa-check-double">
                  </i>
                </span>
                <h5>Order Confirmed</h5>
                <p>
                  You Payment has been successfully done. Trasaction id :
                  <span> #5064164454</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
