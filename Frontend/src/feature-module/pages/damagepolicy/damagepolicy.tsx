import { useEffect } from "react";
import Breadcrumbs from "../../common/breadcrumbs";
import AOS from "aos";
import "aos/dist/aos.css";

const DamagePolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div className="main-wrapper">
      <Breadcrumbs title="Damage Policy" subtitle="Pages" />

      <div className="privacy-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-policy">
                <p data-aos="fade-down">
                  Please understand all damage-related charges and penalties
                  before renting a self-drive vehicle.
                </p>

                <h3 data-aos="fade-down">1. Damage and Penalties</h3>

                <h4 data-aos="fade-down">1.2 Late Hours Charges</h4>
                <ul data-aos="fade-down">
                  <li>
                    Overtime charges of Rs. 500 plus double the hourly fare will
                    be applicable if the customer continues using the vehicle
                    without requesting an extension.
                  </li>
                </ul>

                <h4 data-aos="fade-down">1.3 Late Hours Charges</h4>
                <ul data-aos="fade-down">
                  <li>
                    If any subsequent booking is affected or collides due to
                    usage without extension, the customer may be charged 50% of
                    the impacted booking amount.
                  </li>
                </ul>

                <h3 data-aos="fade-down">3. Damage Charges</h3>
                <div className="table-responsive" data-aos="fade-down">
                  <table className="table table-bordered mb-4">
                    <thead>
                      <tr>
                        <th>S. No.</th>
                        <th>Part Name</th>
                        <th>Minor Price (Rs.)</th>
                        <th>Major Price (Rs.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Front Bumper</td>
                        <td>4500</td>
                        <td>8000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Hood (Front Bonnet)</td>
                        <td>6000</td>
                        <td>8000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Door</td>
                        <td>6000</td>
                        <td>8000</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Quarter Panel</td>
                        <td>6000</td>
                        <td>8000</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Boot Lid</td>
                        <td>6000</td>
                        <td>8000</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Rear Bumper</td>
                        <td>4500</td>
                        <td>8000</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Rear View Mirror Assembly (Exterior/Cabin)</td>
                        <td>0</td>
                        <td>4500</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Running Board</td>
                        <td>2500</td>
                        <td>4000</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Side Mirror (Glass Only)</td>
                        <td>0</td>
                        <td>2500</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Interior Cleaning Charges</td>
                        <td>0</td>
                        <td>2500</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>Jack and Spanner</td>
                        <td>0</td>
                        <td>4000</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>Stereo</td>
                        <td>0</td>
                        <td>6000</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <td>Wheel Caps (per piece)</td>
                        <td>0</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <td>Halogen Headlight (per piece)</td>
                        <td>0</td>
                        <td>6000</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <td>Projector/LED Headlight</td>
                        <td>0</td>
                        <td>As per MRP</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <td>Tail Lamp (per piece)</td>
                        <td>0</td>
                        <td>6000</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <td>Fog Lamp</td>
                        <td>0</td>
                        <td>2500</td>
                      </tr>
                      <tr>
                        <td>18</td>
                        <td>Number Plate (per piece)</td>
                        <td>0</td>
                        <td>1500</td>
                      </tr>
                      <tr>
                        <td>19</td>
                        <td>Front Windshield</td>
                        <td>0</td>
                        <td>7000</td>
                      </tr>
                      <tr>
                        <td>20</td>
                        <td>Rear Windshield</td>
                        <td>0</td>
                        <td>6000</td>
                      </tr>
                      <tr>
                        <td>21</td>
                        <td>Keys</td>
                        <td>0</td>
                        <td>9999</td>
                      </tr>
                      <tr>
                        <td>22</td>
                        <td>Tyre</td>
                        <td>0</td>
                        <td>9999</td>
                      </tr>
                      <tr>
                        <td>23</td>
                        <td>Window Glass</td>
                        <td>0</td>
                        <td>5000</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>Vehicle Documents</td>
                        <td>0</td>
                        <td>9999</td>
                      </tr>
                      <tr>
                        <td>25</td>
                        <td>Smoking</td>
                        <td>0</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>26</td>
                        <td>Cleanliness (Sand, Wet Seat, Pets)</td>
                        <td>0</td>
                        <td>2000</td>
                      </tr>
                      <tr>
                        <td>27</td>
                        <td>
                          Puncture (Refundable deposit equal to tyre price
                          required)
                        </td>
                        <td>0</td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <td>28</td>
                        <td>Low Fuel (Penalty + Fuel Cost)</td>
                        <td>0</td>
                        <td>350</td>
                      </tr>
                      <tr>
                        <td>29</td>
                        <td>Pick-up from Another Location (End Ride Case)</td>
                        <td>1500 (Within City)</td>
                        <td>15000 (Outstation)</td>
                      </tr>
                      <tr>
                        <td>30</td>
                        <td>RTO / Traffic Fine</td>
                        <td>As per data</td>
                        <td>As per data</td>
                      </tr>
                      <tr>
                        <td>31</td>
                        <td>Clutch Wear (due to half-clutch driving)</td>
                        <td>0</td>
                        <td>9999</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p data-aos="fade-down">
                  These charges apply only to mid-range vehicles costing below
                  Rs. 9,00,000.
                </p>

                <h4 data-aos="fade-down">3.1 Damage Assessment</h4>
                <p data-aos="fade-down">
                  Only EkaloDrive, its staff, or authorized vendors have the
                  authority to assess damage severity. Customers are liable for
                  full repair costs in case of consequential damages.
                </p>

                <h4 data-aos="fade-down">3.2 Additional Charges</h4>
                <p data-aos="fade-down">
                  An additional 10% to 25% may be charged on part-wise damage
                  penalties.
                </p>

                <h4 data-aos="fade-down">3.3 Major Damage Liability</h4>
                <p data-aos="fade-down">
                  The customer is liable to pay Rs. 39,999 in the following
                  cases:
                </p>
                <ul data-aos="fade-down">
                  <li>Frontal damage</li>
                  <li>Damage to radiator, condenser, or engine components</li>
                  <li>Oil leakage or engine seizure</li>
                  <li>Damage to tie members</li>
                  <li>Repair estimates exceeding Rs. 24,999</li>
                </ul>
                <p data-aos="fade-down">
                  For vehicles priced Rs. 9,00,000 or above, the penalty is Rs.
                  50,000.
                </p>

                <h4 data-aos="fade-down">3.4 Towing Charges</h4>
                <p data-aos="fade-down">
                  Towing charges in case of an accident must be paid separately
                  by the customer.
                </p>

                <h4 data-aos="fade-down">3.5 Insurance Claims</h4>
                <p data-aos="fade-down">
                  Damage charges apply even if an insurance claim is filed.
                </p>

                <h4 data-aos="fade-down">3.6 Document Submission</h4>
                <p data-aos="fade-down">Customers must submit:</p>
                <ul data-aos="fade-down">
                  <li>Vehicle keys</li>
                  <li>Original vehicle documents</li>
                  <li>Insurance-related documents</li>
                </ul>
                <p data-aos="fade-down">
                  within 12 hours at the EkaloDrive pickup location.
                </p>

                <h4 data-aos="fade-down">3.7 Insurance Claim Requirements</h4>
                <p data-aos="fade-down">
                  Customers must submit the following details (via email and
                  written form) to EkaloDrive, vendor, insurance company, and
                  local police:
                </p>
                <ul data-aos="fade-down">
                  <li>Accident PNR and vehicle number</li>
                  <li>Vehicle vendor details</li>
                  <li>List of co-passengers</li>
                  <li>Accident date, time, and destination</li>
                  <li>Vehicle speed at the time of accident</li>
                  <li>
                    Customer/driver details (name, DL number, full address)
                  </li>
                </ul>
                <p data-aos="fade-down">Supporting documents:</p>
                <ul data-aos="fade-down">
                  <li>FIR or NOC from local police station</li>
                  <li>Signed accident description with witness signature</li>
                  <li>Self-attested KYC (DL, Aadhaar, local ID proof)</li>
                  <li>Signed insurance claim form</li>
                </ul>

                <h4 data-aos="fade-down">3.8 Security Deposit for Claims</h4>
                <p data-aos="fade-down">
                  If documents are not submitted at the end of the ride, a Rs.
                  5,000 security deposit will be retained until submission.
                </p>

                <h4 data-aos="fade-down">3.9 Speed Limit</h4>
                <p data-aos="fade-down">
                  Self-drive vehicles are limited to 80-120 km/hr, as per
                  applicable road and RTO regulations.
                </p>

                <h3 data-aos="fade-down">4. Over-Speeding</h3>
                <ul data-aos="fade-down">
                  <li>Over-speeding will attract fines.</li>
                  <li>
                    If traveling out of state, ensure required permits are
                    obtained.
                  </li>
                  <li>Fine: Rs. 2,000 per instance</li>
                </ul>

                <h3 data-aos="fade-down">5. RTO / Traffic Penalties and Challans</h3>
                <ul data-aos="fade-down">
                  <li>The customer is solely responsible for all traffic violations.</li>
                  <li>All fines must be cleared by the end of the rental period.</li>
                </ul>
                <p data-aos="fade-down">Late payment charges:</p>
                <ul data-aos="fade-down">
                  <li>Rs. 500 per incident</li>
                  <li>Rs. 50 per day additional delay</li>
                  <li>
                    Beyond 7 days: Rs. 3,000 per month legal charges payable to
                    EkaloDrive's appointed legal representative
                  </li>
                </ul>

                <h3 data-aos="fade-down">User Agreement (Public Document)</h3>
                <p className="mb-0" data-aos="fade-down">
                  By using the EkaloDrive platform, the Individual Partner /
                  Franchise Partner agrees to be bound by this agreement between
                  EkaloDrive (or its vendor) and the Partner. This agreement is
                  legally valid under Section 10(A) of the Information Technology
                  Act, 2000 and Section 10 of the Indian Contract Act, 1872.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DamagePolicy;
