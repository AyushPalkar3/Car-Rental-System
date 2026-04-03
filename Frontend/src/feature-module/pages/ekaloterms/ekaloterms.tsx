import { useEffect } from "react";
import Breadcrumbs from "../../common/breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const EkaloTermsConditions = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="main-wrapper">
      <Breadcrumbs title="EKALO Drive Terms & Conditions" subtitle="Pages" />

      <div className="privacy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-policy">
                <h3 data-aos="fade-down">1. Online Booking</h3>
                <p data-aos="fade-down">
                  Customers must book vehicles through the official EKALO Drive
                  online platform or at an EKALO Drive hub. The booking ID must
                  be presented to the team at the time of vehicle pickup.
                </p>

                <h3 data-aos="fade-down">2. Documentation</h3>
                <p data-aos="fade-down">
                  Customers are required to provide all necessary documents at
                  the time of pickup. Documents must be valid and verifiable
                  through government websites or apps (for example, UIDAI, Digi
                  Locker, etc.).
                </p>

                <h3 data-aos="fade-down">3. Vehicle Pickup</h3>
                <p data-aos="fade-down">
                  Customers must take clear photos or videos of the vehicle at
                  the time of pickup to record its condition.
                </p>

                <h3 data-aos="fade-down">4. Home Delivery</h3>
                <p data-aos="fade-down">
                  Home delivery is available based on availability and
                  applicable charges.
                </p>
                <ul data-aos="fade-down">
                  <li>Free delivery is limited to the distance specified on the website.</li>
                  <li>Beyond the free delivery limit, an additional charge of Rs. 40 per kilometer will apply.</li>
                </ul>

                <h3 data-aos="fade-down">5. Booking Extension</h3>
                <p data-aos="fade-down">
                  Customers must request booking extensions in advance through
                  the official online platform only.
                </p>
                <ul data-aos="fade-down">
                  <li>
                    Using the vehicle without formally extending the booking
                    will result in heavy extension penalties and additional
                    charges.
                  </li>
                  <li>
                    If a late drop-off results in the cancellation of the next
                    booking, the customer will be liable to pay the full charges
                    for that booking.
                  </li>
                </ul>

                <h3 data-aos="fade-down">6. Vehicle Condition</h3>
                <p data-aos="fade-down">
                  The vehicle must be returned in the same condition as it was
                  at the time of pickup.
                </p>

                <h3 data-aos="fade-down">7. Additional Charges</h3>
                <p data-aos="fade-down">Customers are responsible for the following:</p>
                <ul data-aos="fade-down">
                  <li>Fuel costs</li>
                  <li>Extra kilometers driven</li>
                  <li>Toll charges, taxes, and cantonment fees</li>
                  <li>Tyre punctures or damage</li>
                  <li>Accidental damages</li>
                  <li>Traffic violations and penalties</li>
                </ul>

                <h3 data-aos="fade-down">8. FASTag & Fuel Policy</h3>
                <p data-aos="fade-down">
                  Customers must maintain the same FASTag balance and fuel
                  percentage at the time of return as at pickup.
                </p>
                <ul data-aos="fade-down">
                  <li>
                    If fuel levels drop within 2 km of the drop location,
                    customers must provide timestamped and location-tagged
                    photos to avoid a low-fuel penalty.
                  </li>
                </ul>

                <h3 data-aos="fade-down">9. Personal Belongings</h3>
                <p data-aos="fade-down">
                  EKALO Drive is not responsible for any personal belongings
                  left in the vehicle after drop-off.
                </p>

                <h3 data-aos="fade-down">10. Cleanliness Policy</h3>
                <p data-aos="fade-down">
                  Smoking, drinking, or carrying pets inside the vehicle may
                  result in cleaning charges of up to Rs. 1,500.
                </p>

                <p className="mb-0" data-aos="fade-down">
                  For detailed Terms & Conditions, please visit our official
                  website and review the policies, terms, and lease/rental
                  agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EkaloTermsConditions;
