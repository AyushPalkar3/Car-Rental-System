import { useEffect } from "react";
import Breadcrumbs from "../../common/breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const BookingProcedure = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Booking Procedure & Rental Terms" subtitle="Pages" />

      <div className="privacy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-policy">
                <p data-aos="fade-down">
                  This Booking Procedure & Rental Terms ("Annexure") forms an
                  integral part of the Rental Agreement executed between
                  EkaloDrive (the "Company") and the User/Customer (the
                  "Renter"). By confirming a booking through the EkaloDrive
                  platform, the Renter agrees to abide by the terms stated
                  herein.
                </p>

                <h3 data-aos="fade-down">1. Parties & Responsibility</h3>
                <ul data-aos="fade-down">
                  <li>All transactions are executed between the Renter and the Company.</li>
                  <li>
                    The individual making the booking shall be deemed the
                    Primary Driver and shall remain fully responsible for the
                    vehicle and its use during the rental period.
                  </li>
                  <li>
                    The Renter shall be liable for all acts, omissions, damages,
                    penalties, and liabilities arising during the rental period.
                  </li>
                </ul>

                <h3 data-aos="fade-down">2. Eligibility & Age Requirement</h3>
                <ul data-aos="fade-down">
                  <li>The Renter must be at least eighteen (18) years of age.</li>
                  <li>
                    For select premium category vehicles, the minimum required
                    age shall be twenty-one (21) years.
                  </li>
                  <li>
                    The Company reserves the right to refuse booking if
                    eligibility criteria are not met.
                  </li>
                </ul>

                <h3 data-aos="fade-down">3. Mandatory Documentation</h3>
                <ul data-aos="fade-down">
                  <li>
                    The Renter must possess a valid Driving License issued by
                    the Government of India.
                  </li>
                  <li>
                    The Driving License must be uploaded on the Company's
                    platform at the time of booking.
                  </li>
                  <li>
                    The booking shall remain subject to successful verification
                    of the Driving License prior to commencement of the rental
                    period.
                  </li>
                  <li>
                    The Renter must present the following original documents at
                    the time of vehicle handover:
                    <ul>
                      <li>Original Driving License</li>
                      <li>Local Address Proof</li>
                      <li>One additional Government-issued ID proof</li>
                    </ul>
                  </li>
                  <li>Acceptable ID proofs include:</li>
                </ul>
                <ul data-aos="fade-down">
                  <li>Voter ID</li>
                  <li>Aadhaar Card</li>
                  <li>Passport</li>
                  <li>Electricity Bill or Rent Agreement</li>
                </ul>
                <p data-aos="fade-down">PAN Card shall not be accepted as valid identity proof.</p>
                <ul data-aos="fade-down">
                  <li>
                    In case identity verification fails, the booking shall stand
                    void without prejudice to the Company's rights.
                  </li>
                  <li>
                    In case of multiple bookings for overlapping time periods,
                    the Renter must designate an approved co-driver for at least
                    one such booking.
                  </li>
                </ul>

                <h3 data-aos="fade-down">4. Security Deposit</h3>
                <ul data-aos="fade-down">
                  <li>
                    A refundable security deposit shall be payable at the time
                    of booking, as determined by the Company.
                  </li>
                  <li>
                    The Company may waive or modify the security deposit
                    requirement at its sole discretion based on the Renter's
                    booking history.
                  </li>
                  <li>
                    Payments shall be accepted only through digital modes,
                    including UPI, Debit Card, Credit Card, Mobile Wallet, or
                    authorized Payment Link. Cash payments shall not be
                    accepted.
                  </li>
                  <li>
                    The Company reserves the right to deduct from the security
                    deposit any amounts payable towards:
                    <ul>
                      <li>Vehicle damages</li>
                      <li>Traffic violations and penalties</li>
                      <li>Overdue rental charges</li>
                      <li>Excess kilometer usage</li>
                      <li>Any other contractual dues</li>
                    </ul>
                  </li>
                  <li>
                    The balance amount, if any, shall be refunded in accordance
                    with the Company's refund policy.
                  </li>
                </ul>

                <h3 data-aos="fade-down">5. Vehicle Pick-Up</h3>
                <ul data-aos="fade-down">
                  <li>
                    The Renter shall collect the vehicle from the designated
                    pickup location specified in the booking confirmation.
                  </li>
                  <li>
                    The minimum booking duration shall be one (1) hour, subject
                    to variation depending on vehicle category or operational
                    city.
                  </li>
                  <li>
                    The Renter is advised to inspect the vehicle at the time of
                    delivery and report any visible damage prior to departure.
                  </li>
                </ul>

                <h3 data-aos="fade-down">6. Return of Vehicle</h3>
                <ul data-aos="fade-down">
                  <li>
                    The vehicle must be returned to the same pickup location
                    unless expressly approved otherwise in writing by the
                    Company.
                  </li>
                  <li>
                    The vehicle shall be returned in the same condition as
                    delivered, subject to normal wear and tear.
                  </li>
                  <li>
                    Delay in return without approved extension shall attract
                    penalties as per Company policy.
                  </li>
                </ul>

                <h3 data-aos="fade-down">7. FASTag, Toll & Incidental Charges</h3>
                <ul data-aos="fade-down">
                  <li>
                    In the event the vehicle is not equipped with an operational
                    FASTag, the Renter shall arrange the same at their own cost.
                  </li>
                  <li>
                    All toll charges, FASTag deductions, parking fees, state
                    entry taxes, and related charges shall be borne solely by
                    the Renter.
                  </li>
                </ul>

                <h3 data-aos="fade-down">8. Rental Fee Structure</h3>
                <ul data-aos="fade-down">
                  <li>
                    Rental charges shall be calculated based on the start and
                    end time selected at the time of booking.
                  </li>
                  <li>
                    Weekday rates shall apply from Monday 00:00 hours to Friday
                    23:59 hours.
                  </li>
                  <li>
                    Weekend rates shall apply from Saturday 00:00 hours to
                    Sunday 23:59 hours.
                  </li>
                  <li>
                    The applicable rate shall be determined by the Company's
                    system at the time of booking.
                  </li>
                </ul>

                <h3 data-aos="fade-down">9. Kilometer Policy</h3>
                <ul data-aos="fade-down">
                  <li>
                    Each booking includes a predefined kilometer allowance, as
                    specified for the selected vehicle.
                  </li>
                  <li>
                    Any usage exceeding the free kilometer limit shall attract
                    additional charges at prescribed rates.
                  </li>
                  <li>
                    Excess kilometer charges shall not be adjusted against the
                    security deposit unless expressly determined by the Company.
                  </li>
                </ul>

                <h3 data-aos="fade-down">10. Extension of Rental</h3>
                <ul data-aos="fade-down">
                  <li>
                    Requests for extension must be made prior to the scheduled
                    end time of the booking.
                  </li>
                  <li>
                    Extensions shall not be permitted within four (4) hours of
                    the scheduled return time.
                  </li>
                  <li>
                    Extension requests are subject to vehicle availability and
                    absence of subsequent confirmed bookings.
                  </li>
                  <li>Payment for the extended duration must be made in advance.</li>
                  <li>
                    No promotional discounts shall apply to extended rental
                    periods unless expressly stated.
                  </li>
                </ul>

                <h3 data-aos="fade-down">11. Legal Validity & Acceptance</h3>
                <ul data-aos="fade-down">
                  <li>
                    The Renter acknowledges that by completing the booking
                    through the EkaloDrive online platform, they accept and
                    agree to all applicable policies, including but not limited
                    to: Terms & Conditions, Privacy Policy, Cancellation Policy,
                    and Damage Policy.
                  </li>
                  <li>
                    The electronic acceptance of these terms constitutes a
                    valid and binding agreement under Section 10(A) of the
                    Information Technology Act, 2000 and Indian Contract Act
                    1872 of section 10.
                  </li>
                  <li>
                    This Annexure shall be read in conjunction with the Rental
                    Agreement and shall prevail in matters relating to booking
                    procedures and eligibility.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProcedure;
