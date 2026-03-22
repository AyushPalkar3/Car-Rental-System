

const NotificationsSetting = () => {
  return (
    <div className="card">
  <div className="card-header">
    <h5>Account Settings</h5>
  </div>
  <div className="card-body">
    <div className="security-content">
      <h6 className="mb-3">Notifications</h6>
      <div className="card mb-3">
        <div className="card-body">
          <div className="notification-settings">
            <h6 className="fs-14 fw-medium mb-1">Notify me about</h6>
            <div className="d-flex align-items-center gap-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  All New Messages
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  Mentions Only
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
                <label className="form-check-label" htmlFor="flexRadioDefault3">
                  Nothing
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div>
              <h6 className="fs-14 fw-medium mb-1">Notify me about</h6>
              <p className="fs-13">
                Enable desktop notifications to get instant updates on bookings,
                payments, and tenant requests.
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
            <div>
              <h6 className="fs-14 fw-medium mb-1">
                Unread Notification Badge
              </h6>
              <p className="fs-13">
                Ensure you never miss important rental updates or car status
                changes with the unread notification badge.
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <div className="form-check form-check-md form-switch">
                <input
                  className="form-check-input form-label"
                  type="checkbox"
                  role="switch"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 className="mb-3">Notification Type</h6>
      <div className="notification-type">
        <ul>
          <li>
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div>
                <h6 className="fs-14 fw-medium mb-1">
                  Booking &amp; Rental Updates
                </h6>
                <p className="fs-13">
                  Get immediate alerts for any changes to bookings or rental
                  details to ensure you’re always in the loop.
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="form-check form-check-md form-switch">
                  <input
                    className="form-check-input form-label"
                    type="checkbox"
                    role="switch"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div>
                <h6 className="fs-14 fw-medium mb-1">
                  Payment &amp; Invoice Notifications
                </h6>
                <p className="fs-13">
                  Ensure you never miss important rental updates or car status
                  changes with the unread notification badge.
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="form-check form-check-md form-switch">
                  <input
                    className="form-check-input form-label"
                    type="checkbox"
                    role="switch"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div>
                <h6 className="fs-14 fw-medium mb-1">
                  User &amp; Tenant Notifications
                </h6>
                <p className="fs-13">
                  Get immediate alerts for every payment received, failed
                  transactions, and new invoices for smooth financial
                  management.
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="form-check form-check-md form-switch">
                  <input
                    className="form-check-input form-label"
                    type="checkbox"
                    role="switch"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div>
                <h6 className="fs-14 fw-medium mb-1">Vehicle Management</h6>
                <p className="fs-13">
                  Stay informed about vehicle availability and maintenance
                  status for a smooth fleet management experience.
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="form-check form-check-md form-switch">
                  <input
                    className="form-check-input form-label"
                    type="checkbox"
                    role="switch"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div>
                <h6 className="fs-14 fw-medium mb-1">Discounts &amp; Offers</h6>
                <p className="fs-13">
                  Receive real-time updates on all the latest deals and special
                  promotions, ensuring you&apos;re always informed
                </p>
              </div>
              <div className="d-flex justify-content-end">
                <div className="form-check form-check-md form-switch">
                  <input
                    className="form-check-input form-label"
                    type="checkbox"
                    role="switch"
                    defaultChecked
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

  )
}

export default NotificationsSetting