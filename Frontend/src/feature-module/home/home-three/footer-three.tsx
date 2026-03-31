
import { Link } from 'react-router-dom'
import { all_routes } from '../../../router/all_routes';
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath';

const FooterThree = () => {
  const routes = all_routes;
  return (
    <div>
        <footer className="footer footer-three">
  {/* Footer Top */}
  <div className="footer-top aos" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="footer-contact footer-widget">
            <div className="footer-logo">
              <ImageWithBasePath
                src="assets/img/light-theme-logo-authentication.png"
                style={{maxWidth:'250px' , height:'auto'}}
                className="img-fluid aos"
                alt="logo"
              />
            </div>
            <div className="footer-contact-info">
              <h6>Want to book a bike instantly Contact Us !!!</h6>
              <div className="footer-address">
                <div className="addr-info">
                  <Link to="tel:+919168527197">
                    <i className="bx bxs-phone" />+91 9168527197
                  </Link>
                </div>
              </div>
              <div className="footer-address">
                <div className="addr-info">
                  <Link to="mailto:support@ekalodrive.com">
                    <i className="bx bxs-envelope" />
                    support@ekalodrive.com
                  </Link>
                </div>
              </div>
            </div>
            <ul className="store-icon">
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/play-icon.svg"
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <ImageWithBasePath
                    src="assets/img/icons/app-icon.svg"
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h5 className="footer-title">Company</h5>
            <ul>
              <li>
                <Link to={routes.aboutUs}>Our Company</Link>
              </li>
              <li>
                <Link to="#">Bike Rent</Link>
              </li>
              <li>
                <Link to="#">Dreams rent USA</Link>
              </li>
              <li>
                <Link to="#">Dreams rent Worldwide</Link>
              </li>
              <li>
                <Link to="#">Dreams rent Category</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h5 className="footer-title">Vehicles Type</h5>
            <ul>
              <li>
                <Link to="#">Electric</Link>
              </li>
              <li>
                <Link to="#">Scooters</Link>
              </li>
              <li>
                <Link to="#">Sports</Link>
              </li>
              <li>
                <Link to="#">Racing Bikes</Link>
              </li>
              <li>
                <Link to="#">Off-road</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h5 className="footer-title">Quick Links</h5>
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
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h5 className="footer-title">Resources</h5>
            <ul>
              <li>
                <Link to="#">Support</Link>
              </li>
              <li>
                <Link to="#">Security</Link>
              </li>
              <li>
                <Link to="#">Help Centers</Link>
              </li>
              <li>
                <Link to="#">Preferences</Link>
              </li>
              <li>
                <Link to="#">Preferences</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
        </div>
        <div className="col-lg-2 col-md-6">
          {/* Footer Widget */}
          <div className="footer-widget footer-menu">
            <h5 className="footer-title">Getting Started</h5>
            <ul>
              <li>
                <Link to="#">Introduction</Link>
              </li>
              <li>
                <Link to="#">Documentation</Link>
              </li>
              <li>
                <Link to="#">Usage</Link>
              </li>
              <li>
                <Link to="#">API</Link>
              </li>
              <li>
                <Link to="#">Elements</Link>
              </li>
            </ul>
          </div>
          {/* /Footer Widget */}
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
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="copyright-text">
              <p>
                Copyright © 2024 <span>Dreams Rent</span>. All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-list">
              <ul>
                <li className="country-flag">
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle nav-tog"
                      data-bs-toggle="dropdown"
                      to="#"
                    >
                      <ImageWithBasePath src="assets/img/flags/us.png" alt="Img" />
                      English
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item">
                        <ImageWithBasePath src="assets/img/flags/fr.png" alt="Img" />
                        French
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <ImageWithBasePath src="assets/img/flags/es.png" alt="Img" />
                        Spanish
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <ImageWithBasePath src="assets/img/flags/de.png" alt="Img" />
                        German
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="country-flag lang-nav">
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle nav-tog"
                      data-bs-toggle="dropdown"
                      to="#"
                    >
                      <i className="bx bx-globe" />
                      USD
                    </Link>
                    <div className="dropdown-menu dropdown-menu-end">
                      <Link to="#" className="dropdown-item">
                        <ImageWithBasePath src="assets/img/flags/fr.png" alt="Img" />
                        Euro
                      </Link>
                      <Link to="#" className="dropdown-item">
                        <ImageWithBasePath src="assets/img/flags/es.png" alt="Img" />
                        INR
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <ul className="social-icon">
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f fa-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-behance" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /Copyright */}
    </div>
  </div>
  {/* /Footer Bottom */}
</footer>

    </div>
  )
}

export default FooterThree