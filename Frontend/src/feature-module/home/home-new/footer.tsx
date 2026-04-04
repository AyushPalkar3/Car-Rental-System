
import { Link } from 'react-router-dom'
import { all_routes } from '../../../router/all_routes'
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath'

const NewFooter = () => {
  return (
    <footer className="footer footer-four">
  {/* Footer Top */}
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="footer-contact footer-widget">
            <div className="footer-logo">
              <ImageWithBasePath
                src="assets/img/logo-lite.png"
                className="img-fluid aos"
                alt="logo"
              />
            </div>
            <div className="footer-contact-info">
              <p>
                We offer a diverse fleet of vehicles to suit every need,
                including compact cars, sedans, SUVs and luxury vehicles.{" "}
              </p>
            </div>
            <div className="d-flex align-items-center gap-1 app-icon">
              <Link to="#">
                <ImageWithBasePath
                  src="assets/img/icons/gpay.svg"
                  className="img-fluid"
                  alt="logo"
                />
              </Link>
              <Link to="#">
                <ImageWithBasePath
                  src="assets/img/icons/app.svg"
                  className="img-fluid"
                  alt="logo"
                />
              </Link>
            </div>
            <ul className="social-icon">
              <li>
                <Link to="https://www.facebook.com/ekalodrive?mibextid=wwXIfr&rdid=89hfw2WnCKHJzEMN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18G5FUDoaE%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link to="https://www.instagram.com/ekalodrive?igsh=MXRlMzdyY2tiYTN6bQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-instagram" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">Useful Links</h5>
                <ul>
                  <li>
                    <Link to={all_routes.cancellationRefundPolicy}>
                      Cancellation & Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link to={all_routes.bookingProcedure}>
                      Booking Procedure & Rental Terms
                    </Link>
                  </li>
                  <li>
                    <Link to={all_routes.ekaloTermsConditions}>
                      Terms & Conditions
                    </Link>
                  </li>
                   <li>
                    <Link to={all_routes.damagePolicy}>Damage Policy</Link>
                  </li>
                  <li>
                    <Link to={all_routes.faq}>FAQs</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-menu">
                <h5 className="footer-title">Pages</h5>
                <ul>
                  <li>
                    <Link to={all_routes.aboutUs}>About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Become a Partner</Link>
                  </li>
                  <li>
                    <Link to={all_routes.faq}>Faq’s</Link>
                  </li>
                  <li>
                    <Link to={all_routes.testimonial}>Car</Link>
                  </li>
                  <li>
                    <Link to={all_routes.contactUs}>Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* /Footer Widget */}
            </div>
            <div className="col-lg-5 col-md-6">

                        <div className="footer-contact footer-widget">
                  <h5 className="footer-title">Contact Info</h5>
                  <div className="footer-contact-info">									
                    <div className="footer-address">											
                      <span><i className="feather icon-phone-call" /></span>
                      <div className="addr-info">
                        <Link to="tel:+919168527197">+91 9168527197</Link>
                      </div>
                    </div>
                    <div className="footer-address">
                      <span><i className="feather icon-mail" /></span>
                      <div className="addr-info">
                        <Link to="mailto:support@ekalodrive.com">support@ekalodrive.com</Link>
                      </div>
                    </div>
                    <div className="update-form">
                      <form action="#">
                        <span><i className="feather icon-mail" /></span> 
                        <input type="email" className="form-control" placeholder="Enter You Email Here" />
                        <button type="submit" className="btn btn-subscribe"><span><i className="feather icon-send" /></span></button>
                      </form>
                    </div>
                  </div>								
                </div>
             
              {/* <div className="footer-widget footer-menu">
                <h5 className="footer-title">Useful Links</h5>
                <ul>
                  <li>
                    <Link to="#">My account</Link>
                  </li>
                  <li>
                    <Link to="#">Campaigns</Link>
                  </li>
                  <li>
                    <Link to="#">Dreams rent Dealers</Link>
                  </li>
                  <li>
                    <Link to="#">Deals and Incentive</Link>
                  </li>
                  <li>
                    <Link to="#">Financial Services</Link>
                  </li>
                </ul>
              </div> */}
         
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Footer Top */}
  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="container">
      {/* Copyright */}
      <div className="copyright">
        <div className="row align-items-center row-gap-3">
          <div className="col-lg-4">
            <div className="copyright-text">
              <p>Copyright © 2026 BombayBug. All Rights Reserved.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="payment-list">
              <Link to="#">
                <ImageWithBasePath src="assets/img/icons/payment-01.svg" alt="img" />
              </Link>
              <Link to="#">
                <ImageWithBasePath src="assets/img/icons/payment-02.svg" alt="img" />
              </Link>
              <Link to="#">
                <ImageWithBasePath src="assets/img/icons/upi.svg" alt="img" />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      {/* /Copyright */}
    </div>
  </div>
  {/* /Footer Bottom */}
</footer>

  )
}

export default NewFooter