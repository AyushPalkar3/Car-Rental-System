import { useEffect } from "react";
import Breadcrumbs from "../../common/breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const CancellationRefundPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Cancellation & Refund Policy" subtitle="Pages" />

      <div className="privacy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-policy">
                <p data-aos="fade-down">
                  Applicable to all self-drive rentals. Customers are advised to
                  carefully review this policy before confirming a booking with
                  EkaloDrive.
                </p>

                <h3 data-aos="fade-down">1. Cancellation Policy</h3>
                <p data-aos="fade-down">
                  Reservations may be cancelled through the EkaloDrive platform
                  or by contacting our customer support team.
                </p>

                <h4 data-aos="fade-down">1.1 Refund Structure</h4>
                <p data-aos="fade-down">
                  Refund eligibility is determined based on the time remaining
                  before the scheduled pickup.
                </p>
                <div className="table-responsive" data-aos="fade-down">
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>Time Before Pickup</th>
                        <th>Refund Percentage (of Booking Amount)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>More than 48 Hours</td>
                        <td>90% Refund</td>
                      </tr>
                      <tr>
                        <td>24-48 Hours</td>
                        <td>50% Refund</td>
                      </tr>
                      <tr>
                        <td>7-24 Hours</td>
                        <td>25% Refund</td>
                      </tr>
                      <tr>
                        <td>0-6 Hours</td>
                        <td>0% Refund</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 data-aos="fade-down">1.2 Refund Processing</h4>
                <ul data-aos="fade-down">
                  <li>
                    Eligible refunds will be processed within 5-7 working days
                    to the original payment method (bank account, UPI, card,
                    etc.).
                  </li>
                  <li>
                    If a promo code was applied, the refundable amount may be
                    credited to the EkaloDrive Wallet or processed as per the
                    applicable promotional terms.
                  </li>
                  <li>
                    Any voucher used for a cancelled booking shall be deemed
                    utilized and will not be reissued.
                  </li>
                </ul>

                <h4 data-aos="fade-down">1.3 No-Show Policy</h4>
                <p data-aos="fade-down">
                  No refund (except security deposit, where applicable) shall be
                  provided in the following cases:
                </p>
                <ol data-aos="fade-down">
                  <li>
                    The customer fails to report for pickup ("No-Show").
                  </li>
                  <li>
                    The customer is unable to present a valid Driving License at
                    the time of pickup.
                  </li>
                  <li>
                    Vehicle-related complaints are raised after 30 minutes from
                    the start of the ride.
                  </li>
                </ol>
                <p data-aos="fade-down">
                  If cancellation occurs within 6 hours of pickup time or in case
                  of No-Show, only the refundable security deposit (if
                  applicable) shall be returned.
                </p>

                <h4 data-aos="fade-down">1.4 License Verification</h4>
                <p data-aos="fade-down">
                  The customer's Driving License must be successfully verified
                  prior to trip commencement. If verification fails, the booking
                  may be cancelled. In cases where a booking is made using a
                  blocked or invalid license, 10% of the booking amount will be
                  retained, and the remaining amount will be refunded.
                </p>

                <h4 data-aos="fade-down">1.5 Security Deposit Refund</h4>
                <p data-aos="fade-down">
                  The refundable security deposit (after applicable deductions,
                  if any) will be processed within 24-48 business hours after the
                  completion of the ride.
                </p>

                <h4 data-aos="fade-down">1.6 Non-Refundable Charges</h4>
                <p data-aos="fade-down">The following charges are strictly non-refundable:</p>
                <ul data-aos="fade-down">
                  <li>Puncture repair charges</li>
                  <li>FASTag recharge amounts</li>
                  <li>Toll charges</li>
                  <li>Parking fees</li>
                  <li>Traffic penalties</li>
                </ul>
                <p data-aos="fade-down">
                  If the remaining FASTag balance exceeds Rs. 500, it shall be
                  refunded. Balances of Rs. 500 or below are non-refundable.
                </p>

                <h4 data-aos="fade-down">1.7 Full Refund Coupon Option</h4>
                <p data-aos="fade-down">
                  To avoid deduction under the 90% refund category, the customer
                  must email support@ekalodrive.com before the ride start time to
                  request a coupon code (subject to eligibility). Approval is at
                  the sole discretion of EkaloDrive.
                </p>

                <h4 data-aos="fade-down">1.8 Cancellation Assistance</h4>
                <p data-aos="fade-down">
                  To cancel your reservation, contact:
                </p>
                <ul data-aos="fade-down">
                  <li>
                    Email: <a href="mailto:support@ekalodrive.com">support@ekalodrive.com</a>
                  </li>
                  <li>
                    Phone: <a href="tel:9373061567">9373061567</a>
                  </li>
                </ul>

                <h3 data-aos="fade-down">2. Booking Modification Policy (Date & Time Change)</h3>

                <h4 data-aos="fade-down">2.1 Modification Restrictions</h4>
                <p data-aos="fade-down">
                  Direct modification of an existing booking is not permitted. To
                  change the booking date or time, the customer must:
                </p>
                <ul data-aos="fade-down">
                  <li>Create a new booking with revised details.</li>
                  <li>Ensure the new booking is of equal or higher duration.</li>
                  <li>
                    Ensure the total booking value is equal to or higher than the
                    original booking amount.
                  </li>
                </ul>
                <p data-aos="fade-down">
                  Downgrades in duration or booking value are not permitted. The
                  revised booking start date must be either on the same date as
                  the original booking or within 24 hours of the original ride
                  start date.
                </p>

                <h4 data-aos="fade-down">2.2 Cancellation of Original Booking</h4>
                <p data-aos="fade-down">
                  The customer must cancel the original booking and notify
                  EkaloDrive by emailing support@ekalodrive.com with booking
                  details. Refund for the cancelled booking will be processed
                  within 3-5 working days to the original payment method after
                  notification and verification.
                </p>

                <h3 data-aos="fade-down">3. Towing Policy</h3>
                <p data-aos="fade-down">
                  Towing charges are fixed at Rs. 40 per kilometer. In the event
                  of a verified mechanical breakdown (not caused by customer
                  negligence), towing charges shall be reimbursed. Reimbursement
                  is subject to inspection and approval by the Company's
                  authorized vendor. Approvals are processed during office hours
                  (Monday-Friday, 11:00 AM to 6:00 PM). Towing reimbursements
                  cannot be processed instantly.
                </p>

                <h3 data-aos="fade-down">4. User Agreement (Public Document)</h3>
                <p className="mb-0" data-aos="fade-down">
                  By accessing or using the EkaloDrive platform, any User,
                  Customer, Individual Partner, or Franchise Partner agrees to
                  be legally bound by this online agreement between EkaloDrive
                  (or its authorized vendor) and the respective party.
                  Electronic acceptance of these terms constitutes a legally
                  valid and binding agreement under Section 10(A) of the
                  Information Technology Act, 2000 and Indian Contract Act 1872
                  of Section 10.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;
