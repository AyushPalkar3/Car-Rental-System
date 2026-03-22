import  { useEffect, useState } from "react";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import Aos from "aos";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import DashboardMenu from "../common/dashboard-menu";

const UserWishList = () => {
  const routes = all_routes;
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <div>
      {/* Breadscrumb Section */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">User Wishlist</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.homeOne}>Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    User Wishlist
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadscrumb Section */}
      {/* Dashboard Menu */}
      <DashboardMenu />
      {/* /Dashboard Menu */}
      {/* Page Content */}
      <div className="content dashboard-content">
        <div className="container">
          {/* Content Header */}
          <div className="content-header">
            <h4>Wishlist</h4>
          </div>
          {/* /Content Header */}
          <div className="row">
            {/* Wishlist */}
            <div className="col-md-12">
              <div className="wishlist-wrap">
                <div className="listview-car">
                  <div className="card">
                    <div className="blog-widget d-flex">
                      <div className="blog-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/car-list-2.jpg"
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id="tooltip-id">
                              Remove From Wishlist
                            </Tooltip>
                          }
                        >
                          <Link
                            to="#"
                            key={1}
                            onClick={() => handleItemClick(1)}
                            className={`fav-icon ${
                              selectedItems[1] ? "selected" : ""
                            }`}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <div className="bloglist-content w-100">
                        <div className="card-body">
                          <div className="blog-list-head d-flex">
                            <div className="blog-list-title">
                              <h3>
                                <Link to={routes.listingDetails}>
                                  BMW 640 XI Gran Turismo
                                </Link>
                              </h3>
                              <h6>
                                Category : <span>BMW</span>
                              </h6>
                            </div>
                            <div className="blog-list-rate">
                              <div className="list-rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <span>(5.0)</span>
                              </div>
                              <h6>
                                $60 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>4600 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Petrol</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Normal</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt='2018'
                                  />
                                </span>
                                <p>2021</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>6 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin me-2" />
                                    Pattaya, Thailand
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="listing-button">
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                <span>
                                  <i className="feather icon-calendar me-2" />
                                </span>
                                Rent Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listview-car">
                  <div className="card">
                    <div className="blog-widget d-flex">
                      <div className="blog-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/car-list-1.jpg"
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id="tooltip-id">
                              Remove From Wishlist
                            </Tooltip>
                          }
                        >
                          <Link
                            to="#"
                            key={2}
                            onClick={() => handleItemClick(2)}
                            className={`fav-icon ${
                              selectedItems[2] ? "selected" : ""
                            }`}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <div className="bloglist-content w-100">
                        <div className="card-body">
                          <div className="blog-list-head d-flex">
                            <div className="blog-list-title">
                              <h3>
                                <Link to={routes.listingDetails}>
                                  Ferrari 458 MM Speciale
                                </Link>
                              </h3>
                              <h6>
                                Category : <span>Ferrarai</span>
                              </h6>
                            </div>
                            <div className="blog-list-rate">
                              <div className="list-rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <span>(5.0)</span>
                              </div>
                              <h6>
                                $100 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>10 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Petrol</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt='2018'
                                  />
                                </span>
                                <p>2018</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin me-2" />
                                    Newyork, USA
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="listing-button">
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                <span>
                                  <i className="feather icon-calendar me-2" />
                                </span>
                                Rent Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listview-car">
                  <div className="card">
                    <div className="blog-widget d-flex">
                      <div className="blog-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/car-list-3.jpg"
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id="tooltip-id">Add to Wishlist</Tooltip>
                          }
                        >
                          <Link
                            to="#"
                            key={3}
                            onClick={() => handleItemClick(3)}
                            className={`fav-icon ${
                              selectedItems[3] ? "selected" : ""
                            }`}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <div className="bloglist-content w-100">
                        <div className="card-body">
                          <div className="blog-list-head d-flex">
                            <div className="blog-list-title">
                              <h3>
                                <Link to={routes.listingDetails}>
                                  Ford Mustang, Blue 2014
                                </Link>
                              </h3>
                              <h6>
                                Category : <span>Ford</span>
                              </h6>
                            </div>
                            <div className="blog-list-rate">
                              <div className="list-rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <span>(5.0)</span>
                              </div>
                              <h6>
                                $400 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>2500 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Petrol</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt='2018'
                                  />
                                </span>
                                <p>2019</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>4 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin me-2" />
                                    Lasvegas, USA
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="listing-button">
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                <span>
                                  <i className="feather icon-calendar me-2" />
                                </span>
                                Rent Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listview-car">
                  <div className="card">
                    <div className="blog-widget d-flex">
                      <div className="blog-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/car-list-5.jpg"
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id="tooltip-id">Add to Wishlist</Tooltip>
                          }
                        >
                          <Link
                            to="#"
                            key={4}
                            onClick={() => handleItemClick(4)}
                            className={`fav-icon ${
                              selectedItems[4] ? "selected" : ""
                            }`}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <div className="bloglist-content w-100">
                        <div className="card-body">
                          <div className="blog-list-head d-flex">
                            <div className="blog-list-title">
                              <h3>
                                <Link to={routes.listingDetails}>
                                  Audi A3 2019 new
                                </Link>
                              </h3>
                              <h6>
                                Category : <span>Audi</span>
                              </h6>
                            </div>
                            <div className="blog-list-rate">
                              <div className="list-rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <span>(5.0)</span>
                              </div>
                              <h6>
                                $45 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>1700 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Petrol</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt='2018'
                                  />
                                </span>
                                <p>2019</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>4 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin me-2" />
                                    Newyork, USA
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="listing-button">
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                <span>
                                  <i className="feather icon-calendar me-2" />
                                </span>
                                Rent Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listview-car">
                  <div className="card">
                    <div className="blog-widget d-flex">
                      <div className="blog-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/car-list-4.jpg"
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>

                        <OverlayTrigger
                          placement="right"
                          overlay={
                            <Tooltip id="tooltip-id">Add to Wishlist</Tooltip>
                          }
                        >
                          <Link
                            to="#"
                            key={5}
                            onClick={() => handleItemClick(5)}
                            className={`fav-icon ${
                              selectedItems[5] ? "selected" : ""
                            }`}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </OverlayTrigger>
                      </div>
                      <div className="bloglist-content w-100">
                        <div className="card-body">
                          <div className="blog-list-head d-flex">
                            <div className="blog-list-title">
                              <h3>
                                <Link to={routes.listingDetails}>
                                  2018 Chevrolet Camaro
                                </Link>
                              </h3>
                              <h6>
                                Category : <span>Chevrolet</span>
                              </h6>
                            </div>
                            <div className="blog-list-rate">
                              <div className="list-rating">
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <i className="fas fa-star filled me-1" />
                                <span>(5.0)</span>
                              </div>
                              <h6>
                                $36 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>1200 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Petrol"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Power"
                                  />
                                </span>
                                <p>Power</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt='2018'
                                  />
                                </span>
                                <p>2018</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>4 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin me-2" />
                                    Lasvegas, USA
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="listing-button">
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                <span>
                                  <i className="feather icon-calendar me-2" />
                                </span>
                                Rent Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Wishlist */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </div>
  );
};

export default UserWishList;
