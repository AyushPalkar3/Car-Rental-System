

import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import Breadcrumbs from "../../common/breadcrumbs";
import { pricingData } from "../../../core/data/json/pricing_data";


const routes = all_routes
const Pricing = () => {
  const data = pricingData;

  return (
    <>
      <div className="main-wrapper">
        <Breadcrumbs title="Pricing Plan" subtitle="Pages" />
      </div>

      <section className="section pricing-section pricing-page">
        <div className="container">
          <div className="row">
            {data.map((pricing, index) => {
              return (
                <div
                  className="col-lg-4 col-md-4 col-12"
                  key={index}
                  // data-aos="fade-down"
                  // data-aos-duration={1200}
                  // data-aos-delay={200}
                >
                  <div className="price-card">
                    <div className="price-head">
                      <div className="price-level">
                        <h6>{pricing.level}</h6>
                        <p>{pricing.description}</p>
                      </div>
                      <h4>{pricing.price}</h4>
                      <span>{pricing.billing}</span>
                    </div>
                    <div className="price-details">
                      <ul>
                        <li className="price-check">
                          <span>
                            <i className="fa-regular fa-circle-check" />
                          </span>
                          {pricing.message}
                        </li>
                        <li className="price-check">
                          <span>
                            <i className="fa-regular fa-circle-check" />
                          </span>
                          {pricing.extend}
                        </li>
                        <li className="price-check">
                          <span>
                            <i className="fa-regular fa-circle-check" />
                          </span>
                          {pricing.tax}
                        </li>
                        <li className="price-uncheck">
                          <span>
                            <i className="fa-regular fa-circle-xmark" />
                          </span>
                          {pricing.return}
                        </li>
                        <li className="price-uncheck">
                          <span>
                            <i className="fa-regular fa-circle-xmark" />
                          </span>
                          {pricing.delivery}
                        </li>
                        <li className="price-uncheck">
                          <span>
                            <i className="fa-regular fa-circle-xmark" />
                          </span>
                          {pricing.carsystem}
                        </li>
                        <li className="price-uncheck">
                          <span>
                            <i className="fa-regular fa-circle-xmark" />
                          </span>
                          {pricing.validity}
                        </li>
                      </ul>
                      <div>
                       <Link to={routes.login} className="btn viewdetails-btn">
                          Request a demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
