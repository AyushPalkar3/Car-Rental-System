import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Calendar } from "primereact/calendar";
import CountUp from "react-countup";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import dayjs from "dayjs";
import { TimePicker } from "antd";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../router/all_routes";
import { testimonialsData } from "../../../core/data/json/testimonials_data";
import Header from "../../common/header";
import Footer from "../../common/footer";

const HomeOne = () => {
  const routes = all_routes;
  const testimonials = testimonialsData;
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const [date1, setDate1] = useState<any>(null);
  const [date2, setDate2] = useState<any>(null);

  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };

  const settings = {
    dots: false,
    nav: true,
    
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
     
    ],
   
  };
  const imgslideroption = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const rentalslideroption = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nav: false,
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
    <Header/>
      {/* Banner */}
      <section className="banner-section banner-slider">
        <div className="container">
          <div className="home-banner">
            <div className="row align-items-center">
              <div className="col-lg-6" data-aos="fade-down">
                <p className="explore-text">
                  {" "}
                  <span>
                    <i className="fa-solid fa-thumbs-up me-2"></i>
                  </span>
                  100% Trusted car rental platform in the World
                </p>
                <h1>
                  <span>Find Your Best</span> <br />
                  Dream Car for Rental
                </h1>
                <p>
                  Experience the ultimate in comfort, performance, and
                  sophistication with our luxury car rentals. From sleek sedans
                  and stylish coupes to spacious SUVs and elegant convertibles,
                  we offer a range of premium vehicles to suit your preferences
                  and lifestyle.
                </p>
                <div className="view-all">
                  <Link
                    to={routes.listingGrid}
                    className="btn btn-view d-inline-flex align-items-center "
                  >
                    View all Cars{" "}
                    <span>
                      <i className="feather icon-arrow-right ms-2" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-down">
                <div className="banner-imgs">
                  <ImageWithBasePath
                    src="assets/img/car-right.png"
                    className="img-fluid aos"
                    alt="bannerimage"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Banner */}
      {/* Search */}
      <div className="section-search">
        <div className="container">
          <div className="search-box-banner">
            <form>
              <ul className="align-items-center">
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Pickup Location</label>
                    <div className="group-img">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter City, Airport, or Address"
                      />
                      <span>
                        <i className="feather icon-map-pin" />
                      </span>
                    </div>
                  </div>
                </li>
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Pickup Date</label>
                  </div>
                  <div className="input-block-wrapp">
                    <div className="input-block date-widget">
                      <div className="group-img">
                        <Calendar
                          value={date1}
                          onChange={(e) => setDate1(e.value)}
                          placeholder="04/11/2023"
                        />
                        {/* <input type="text" className="form-control datetimepicker" placeholder="04/11/2023" /> */}
                        <span>
                          <i className="feather icon-calendar"></i>
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                        <TimePicker
                          placeholder="11:00 AM"
                          className="form-control timepicker"
                          defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                        />
                        <span>
                          <i className="feather icon-clock"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Return Date</label>
                  </div>
                  <div className="input-block-wrapp">
                    <div className="input-block date-widge">
                      <div className="group-img">
                        <Calendar
                          value={date2}
                          onChange={(e) => setDate2(e.value)}
                          placeholder="04/11/2023"
                        />
                        <span>
                          <i className="feather icon-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                        <TimePicker
                          placeholder="11:00 AM"
                          className="form-control timepicker"
                          defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                        />
                        <span>
                          <i className="feather icon-clock"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="column-group-last">
                  <div className="input-block">
                    <div className="search-btn">
                      <button className="btn search-button" type="submit">
                        {" "}
                        <i className="fa fa-search" aria-hidden="true" />
                        Search
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      {/* /Search */}
      {/* services */}
      <section className="section services">
        <div className="service-right">
          <ImageWithBasePath
            src="assets/img/bg/service-right.svg"
            className="img-fluid"
            alt="services right"
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>How It Works</h2>
            <p>
              Booking a car rental is a straightforward process that typically
              involves the following steps
            </p>
          </div>
          {/* /Heading title */}
          <div className="services-work">
            <div className="row">
              <div
                className="col-lg-4 col-md-4 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="services-group service-date flex-fill">
                  <div className="services-icon border-secondary">
                    <ImageWithBasePath
                      className="icon-img bg-secondary"
                      src="assets/img/icons/services-icon-01.svg"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>1. Choose Date & Locations</h3>
                    <p>
                      Determine the date & location for your car rental.
                      Consider factors such as your travel itinerary,
                      pickup/drop-off locations (e.g., airport, city center),
                      and duration of rental.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-12  d-flex"
                data-aos="fade-down"
              >
                <div className="services-group service-loc flex-fill">
                  <div className="services-icon border-warning">
                    <ImageWithBasePath
                      className="icon-img bg-warning"
                      src="assets/img/icons/services-icon-02.svg"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>2. Pick-Up Locations</h3>
                    <p>
                      Check the availability of your desired vehicle type for
                      your chosen dates and location. Ensure that the rental
                      rates, taxes, fees, and any additional charges.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-4 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="services-group service-book flex-fill">
                  <div className="services-icon border-dark">
                    <ImageWithBasePath
                      className="icon-img bg-dark"
                      src="assets/img/icons/services-icon-03.svg"
                      alt="Choose Locations"
                    />
                  </div>
                  <div className="services-content">
                    <h3>3. Book your Car</h3>
                    <p>
                      Once you`&lsquo;`ve found car rental option, proceed to
                      make a reservation. Provide the required information,
                      including your details, driver`&lsquo;`s license, contact
                      info, and payment details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /services */}
      {/* Popular Services */}
      <section className="section popular-services popular-explore no-margin">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Explore Most Popular Cars</h2>
            <p>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s,
            </p>
          </div>
          {/* /Heading title */}
          <div className="row justify-content-center">
            <div className="col-lg-12" data-aos="fade-down">
              <div className="listing-tabs-group">
                <ul className="nav listing-buttons gap-3" data-bs-tabs="tabs">
                  <li>
                    <Link
                      className="active"
                      aria-current="true"
                      data-bs-toggle="tab"
                      to="#Carmazda"
                    >
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-01.svg"
                          alt="Mazda"
                        />
                      </span>
                      Tata Nexon
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Caraudi">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-02.svg"
                          alt="Audi"
                        />
                      </span>
                      Tata Nexon
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Carhonda">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-03.svg"
                          alt="Honda"
                        />
                      </span>
                      Honda
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Cartoyota">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-04.svg"
                          alt="Toyota"
                        />
                      </span>
                      Toyota
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Caracura">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-05.svg"
                          alt="Acura"
                        />
                      </span>
                      Acura
                    </Link>
                  </li>
                  <li>
                    <Link data-bs-toggle="tab" to="#Cartesla">
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/car-icon-06.svg"
                          alt="Tesla"
                        />
                      </span>
                      Tata Nexon
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="Carmazda">
              <div className="row">
                <>
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    data-aos="fade-down"
                  >
                    <div className="listing-item">
                      <div className="listing-img">
                        <div className="img-slider ">
                          <Slider {...imgslideroption} className="img-slider">
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/cars/car-01.jpg"
                                  className="img-fluid"
                                  alt="Toyota"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/cars/car-01-slide1.jpg"
                                  className="img-fluid"
                                  alt="Toyota"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/cars/car-01-slide2.jpg"
                                  className="img-fluid"
                                  alt="Toyota"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/cars/car-01-slide3.jpg"
                                  className="img-fluid"
                                  alt="Toyota"
                                />
                              </Link>
                            </div>
                          </Slider>
                        </div>
                        <div className="fav-item justify-content-end"   key={1}
                      onClick={() => handleItemClick(1)}>
                          <span className="img-count">
                            <i className="feather icon-image" />
                            04
                          </span>
                          <Link to="#" className={`fav-icon ${
                          selectedItems[1] ? 'selected' : ''
                        }`}>
                            <i className="feather  icon-heart" /> 
                          </Link>
                        </div>
                        <span className="featured-text">Toyota</span>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex align-items-end justify-content-between">
                          <div className="list-rating">
                            <Link to="#" className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-04.jpg"
                                alt="author"
                              />
                            </Link>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                Tata Nexon
                              </Link>
                            </h3>
                            <div className="list-rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>(4.0) 138 Reviews</span>
                            </div>
                          </div>
                          <div className="list-km">
                            <span className="km-count">
                              <ImageWithBasePath
                                src="assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.2m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/car-parts-01.svg"
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
                          </ul>
                          <ul>
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
                                  alt={'2018'}
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
                        <div className="listing-location-details">
                          <div className="listing-price">
                            <span>
                              <i className="feather icon-map-pin" />
                            </span>
                            Washington
                          </div>
                          <div className="listing-price">
                            <h6>
                              $160 <span>/ Day</span>
                            </h6>
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
                      <div className="feature-text">
                        <span className="bg-danger">Featured</span>
                      </div>
                    </div>
                  </div>
                  <>
                    {/* col */}
                    <div
                      className="col-lg-4 col-md-6 col-12"
                      data-aos="fade-down"
                    >
                      <div className="listing-item">
                        <div className="listing-img">
                          <div className="img-slider listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-02.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-02-slide1.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-02-slide2.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-02-slide3.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end"   key={2}
                      onClick={() => handleItemClick(2)}>
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className={`fav-icon ${
                          selectedItems[2] ? 'selected' : ''
                        }`}>
                              <i className="feather  icon-heart" /> 
                            </Link>
                          </div>
                          <span className="featured-text">KIA</span>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <Link
                                to="#"
                                className="author-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-02.jpg"
                                  alt="author"
                                />
                              </Link>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>Kia Soul 2016</Link>
                              </h3>
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>(4.0) 170 Reviews</span>
                              </div>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                4.0m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-01.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="22 KM"
                                  />
                                </span>
                                <p>22 KM</p>
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
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt={'2016'}
                                  />
                                </span>
                                <p>2016</p>
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
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              Belgium
                            </div>
                            <div className="listing-price">
                              <h6>
                                $80 <span>/ Day</span>
                              </h6>
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
                    {/* /col */}
                  </>
                  <>
                    {/* col */}
                    <div
                      className="col-lg-4 col-md-6 col-12"
                      data-aos="fade-down"
                    >
                      <div className="listing-item">
                        <div className="listing-img">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-03.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item justify-content-end"   key={3}
                      onClick={() => handleItemClick(3)}>
                            <Link to="#" className={`fav-icon ${
                          selectedItems[3] ? 'selected' : ''
                        }`}>
                              <i className="feather  icon-heart" /> 
                            </Link>
                          </div>
                          <span className="featured-text">Audi</span>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <Link
                                to="#"
                                className="author-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-03.jpg"
                                  alt="author"
                                />
                              </Link>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Audi A3 2019 new
                                </Link>
                              </h3>
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>(4.0) 150 Reviews</span>
                              </div>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                3.5m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
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
                            </ul>
                            <ul>
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
                                    alt={'2019'}
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
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                $45 <span>/ Day</span>
                              </h6>
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
                    {/* /col */}
                  </>
                  <>
                    {/* col */}
                    <div
                      className="col-lg-4 col-md-6 col-12"
                      data-aos="fade-down"
                    >
                      <div className="listing-item">
                        <div className="listing-img">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-04.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item justify-content-end"   key={4}
                      onClick={() => handleItemClick(4)}>
                            <Link to="#" className={`fav-icon ${
                          selectedItems[4] ? 'selected' : ''
                        }`}>
                              <i className="feather  icon-heart" /> 
                            </Link>
                          </div>
                          <span className="featured-text">Ferrai</span>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <Link
                                to="#"
                                className="author-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-04.jpg"
                                  alt="author"
                                />
                              </Link>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Ferrari 458 MM Speciale
                                </Link>
                              </h3>
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>(4.0) 160 Reviews</span>
                              </div>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                3.5m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="14 KM"
                                  />
                                </span>
                                <p>14 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-04.svg"
                                    alt="Basic"
                                  />
                                </span>
                                <p>Basic</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt={'2022'}
                                  />
                                </span>
                                <p>2022</p>
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
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                $160 <span>/ Day</span>
                              </h6>
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
                        <div className="feature-text">
                          <span className="bg-danger">Featured</span>
                        </div>
                      </div>
                    </div>
                    {/* /col */}
                    {/* col */}
                    <div
                      className="col-lg-4 col-md-6 col-12"
                      data-aos="fade-down"
                    >
                      <div className="listing-item">
                        <div className="listing-img">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-05.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item justify-content-end"   key={5}
                      onClick={() => handleItemClick(5)}>
                            <Link to="#" className={`fav-icon ${
                          selectedItems[5] ? 'selected' : ''
                        }`}>
                              <i className="feather  icon-heart" /> 
                            </Link>
                          </div>
                          <span className="featured-text">Chevrolet</span>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <Link
                                to="#"
                                className="author-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-05.jpg"
                                  alt="author"
                                />
                              </Link>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  2018 Chevrolet Camaro
                                </Link>
                              </h3>
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span>(5.0) 200 Reviews</span>
                              </div>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                4.5m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
                                  />
                                </span>
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="18 KM"
                                  />
                                </span>
                                <p>18 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                            </ul>
                            <ul>
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
                                    alt={'2018'}
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
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              Germany
                            </div>
                            <div className="listing-price">
                              <h6>
                                $36 <span>/ Day</span>
                              </h6>
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
                        <div className="feature-text">
                          <span className="bg-warning">Top Rated</span>
                        </div>
                      </div>
                    </div>
                    {/* /col */}
                    {/* col */}
                    <div
                      className="col-lg-4 col-md-6 col-12"
                      data-aos="fade-down"
                    >
                      <div className="listing-item">
                        <div className="listing-img">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-06.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div className="fav-item justify-content-end"   key={6}
                      onClick={() => handleItemClick(6)}>
                            <Link to="#" className={`fav-icon ${
                          selectedItems[6] ? 'selected' : ''
                        }`}>
                              <i className="feather  icon-heart" /> 
                            </Link>
                          </div>
                          <span className="featured-text">Acura</span>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <Link
                                to="#"
                                className="author-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-06.jpg"
                                  alt="author"
                                />
                              </Link>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Acura Sport Version
                                </Link>
                              </h3>
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>(4.0) 125 Reviews</span>
                              </div>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                3.2m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-01.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="12 KM"
                                  />
                                </span>
                                <p>12 KM</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                            </ul>
                            <ul>
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
                                    alt={'2013'}
                                  />
                                </span>
                                <p>2013</p>
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
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                $30 <span>/ Day</span>
                              </h6>
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
                    {/* /col */}
                  </>
                  <>
                    {/* col */}
                    <div
                      className="col-lg-4 col-md-6 col-12"
                      data-aos="fade-down"
                    >
                      <div className="listing-item">
                        <div className="listing-img">
                          <div className="img-slider listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-07.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-07-slide1.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-07-slide2.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-07-slide3.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end"   key={7}
                      onClick={() => handleItemClick(7)}>
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className={`fav-icon ${
                          selectedItems[7] ? 'selected' : ''
                        }`}>
                              <i className="feather  icon-heart" /> 
                            </Link>
                          </div>
                          <span className="featured-text">Chevrolet</span>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <Link
                                to="#"
                                className="author-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-07.jpg"
                                  alt="author"
                                />
                              </Link>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Chevrolet Pick Truck 3.5L
                                </Link>
                              </h3>
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>(4.0) 165 Reviews</span>
                              </div>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                3.6m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="Manual"
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
                            </ul>
                            <ul>
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
                                    alt={'2012'}
                                  />
                                </span>
                                <p>2012</p>
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
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              Spain
                            </div>
                            <div className="listing-price">
                              <h6>
                                $77 <span>/ Day</span>
                              </h6>
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
                    {/* /col */}
                    {/* col */}
                    <div
                      className="col-lg-4 col-md-6 col-12"
                      data-aos="fade-down"
                    >
                      <div className="listing-item">
                        <div className="listing-img">
                          <div className="img-slider  listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-08.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-08-slide1.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-08-slide2.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-08-slide3.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end"   key={8}
                      onClick={() => handleItemClick(8)}>
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className={`fav-icon ${
                          selectedItems[8] ? 'selected' : ''
                        }`}>
                              <i className="feather  icon-heart" /> 
                            </Link>
                          </div>
                          <span className="featured-text">Toyota</span>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <Link
                                to="#"
                                className="author-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-08.jpg"
                                  alt="author"
                                />
                              </Link>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Toyota Tacoma 4WD
                                </Link>
                              </h3>
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>(4.0) 138 Reviews</span>
                              </div>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                4.1m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-01.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="22 miles"
                                  />
                                </span>
                                <p>22 miles</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-03.svg"
                                    alt="Diesel"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                            </ul>
                            <ul>
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
                                    alt={'2019'}
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
                                <p>5 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              Dallas, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                $30 <span>/ Day</span>
                              </h6>
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
                    {/* /col */}
                    {/* col */}
                    <div
                      className="col-lg-4 col-md-6 col-12"
                      data-aos="fade-down"
                    >
                      <div className="listing-item">
                        <div className="listing-img">
                          <div className="img-slider listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-10.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-10-slide1.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-10-slide2.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/cars/car-10-slide3.jpg"
                                    className="img-fluid"
                                    alt="Toyota"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end"   key={9}
                      onClick={() => handleItemClick(9)}>
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className={`fav-icon ${
                          selectedItems[9] ? 'selected' : ''
                        }`} >
                              <i className="feather  icon-heart" /> 
                            </Link>
                          </div>
                          <span className="featured-text">Ford</span>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <Link
                                to="#"
                                className="author-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-10.jpg"
                                  alt="author"
                                />
                              </Link>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Ford Mustang 4.0 AT
                                </Link>
                              </h3>
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>(4.0) 170 Reviews</span>
                              </div>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                4.1m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-01.svg"
                                    alt="Auto"
                                  />
                                </span>
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="22 miles"
                                  />
                                </span>
                                <p>42 miles</p>
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
                            </ul>
                            <ul>
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
                                    alt={'2019'}
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
                                <p>5 Persons</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-location-details">
                            <div className="listing-price">
                              <span>
                                <i className="feather icon-map-pin" />
                              </span>
                              Dallas, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                $80 <span>/ Day</span>
                              </h6>
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
                        <div className="feature-text">
                          <span className="bg-danger">Featured</span>
                        </div>
                      </div>
                    </div>
                    {/* /col */}
                  </>
                </>
              </div>
            </div>
            <div className="tab-pane fade" id="Caraudi">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={10}
                        onClick={() => handleItemClick(10)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[10] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $45 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={11}
                        onClick={() => handleItemClick(11)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[11] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $160 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={12}
                        onClick={() => handleItemClick(12)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[12] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $36 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={13}
                        onClick={() => handleItemClick(13)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[13] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2013</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={14}
                        onClick={() => handleItemClick(14)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[14] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2012</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            $77 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={15}
                        onClick={() => handleItemClick(15)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[15] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={16}
                        onClick={() => handleItemClick(16)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[16] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-0.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $400 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={17}
                        onClick={() => handleItemClick(17)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[17] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
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
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={18}
                        onClick={() => handleItemClick(18)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[18] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
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
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Carhonda">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={19}
                        onClick={() => handleItemClick(19)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[19] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={20}
                        onClick={() => handleItemClick(20)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[20] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-0.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $400 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={21}
                        onClick={() => handleItemClick(21)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[21] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
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
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={22}
                        onClick={() => handleItemClick(22)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[22] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $45 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={23}
                        onClick={() => handleItemClick(23)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[23] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $160 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={24}
                        onClick={() => handleItemClick(24)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[24] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $36 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={25}
                        onClick={() => handleItemClick(25)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[25] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2013</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={26}
                        onClick={() => handleItemClick(26)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[26] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2012</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            $77 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={27}
                        onClick={() => handleItemClick(27)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[27] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
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
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Cartoyota">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={28}
                        onClick={() => handleItemClick(28)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[28] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-0.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $400 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={29}
                        onClick={() => handleItemClick(29)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[29] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
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
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={30}
                        onClick={() => handleItemClick(30)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[30] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $45 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={31}
                        onClick={() => handleItemClick(31)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[31] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $160 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={32}
                        onClick={() => handleItemClick(32)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[32] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $36 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={33}
                        onClick={() => handleItemClick(33)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[33] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2013</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={34}
                        onClick={() => handleItemClick(34)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[34] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2012</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            $77 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={35}
                        onClick={() => handleItemClick(35)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[35] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={36}
                        onClick={() => handleItemClick(36)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[36] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
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
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Caracura">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={37}
                        onClick={() => handleItemClick(37)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[37] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-0.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $400 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={38}
                        onClick={() => handleItemClick(38)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[38] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
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
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={39}
                        onClick={() => handleItemClick(39)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[39] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $45 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={40}
                        onClick={() => handleItemClick(40)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[40] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $160 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={41}
                        onClick={() => handleItemClick(41)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[41] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $36 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={42}
                        onClick={() => handleItemClick(42)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[42] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2013</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={43}
                        onClick={() => handleItemClick(43)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[43] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2012</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            $77 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={44}
                        onClick={() => handleItemClick(44)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[44] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={45}
                        onClick={() => handleItemClick(45)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[45] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-10.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
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
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
              </div>
            </div>
            <div className="tab-pane fade" id="Cartesla">
              <div className="row">
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-08.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={46}
                        onClick={() => handleItemClick(46)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[46] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Tacoma 4WD
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>22 miles</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={47}
                        onClick={() => handleItemClick(47)}
                      >
                        <span className="featured-text">Toyota</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[47] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-0.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Toyota Camry SE 350
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $400 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-02.jpg"
                          className="img-fluid"
                          alt="KIA"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={48}
                        onClick={() => handleItemClick(48)}
                      >
                        <span className="featured-text">KIA</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[48] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Kia Soul 2016</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 KM"
                              />
                            </span>
                            <p>22 KM</p>
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
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2016</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Belgium
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-03.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={49}
                        onClick={() => handleItemClick(49)}
                      >
                        <span className="featured-text">Audi</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[49] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Audi A3 2019 new
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $45 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-04.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={50}
                        onClick={() => handleItemClick(50)}
                      >
                        <span className="featured-text">Ferrai</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[50] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Ferrari 458 MM Speciale
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="14 KM"
                              />
                            </span>
                            <p>14 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-04.svg"
                                alt="Basic"
                              />
                            </span>
                            <p>Basic</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt=""
                              />
                            </span>
                            <p>2022</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $160 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-05.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={51}
                        onClick={() => handleItemClick(51)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[51] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-05.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            2018 Chevrolet Camaro
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
                              />
                            </span>
                            <p>Manual</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="18 KM"
                              />
                            </span>
                            <p>18 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Germany
                        </div>
                        <div className="listing-price">
                          <h6>
                            $36 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-06.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={52}
                        onClick={() => handleItemClick(52)}
                      >
                        <span className="featured-text">Acura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[52] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-06.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Acura Sport Version
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="12 KM"
                              />
                            </span>
                            <p>12 KM</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-03.svg"
                                alt="Diesel"
                              />
                            </span>
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2013</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Newyork, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $30 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-07.jpg"
                          className="img-fluid"
                          alt="Audi"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={53}
                        onClick={() => handleItemClick(53)}
                      >
                        <span className="featured-text">Chevrolet</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[53] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-07.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Chevrolet Pick Truck 3.5L
                          </Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-05.svg"
                                alt="Manual"
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
                        </ul>
                        <ul>
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
                                alt=""
                              />
                            </span>
                            <p>2012</p>
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
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Spain
                        </div>
                        <div className="listing-price">
                          <h6>
                            $77 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
                {/* col */}
                <div className="col-lg-4 col-md-6 col-12" data-aos="fade-down">
                  <div className="listing-item">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/car-09.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div
                        className="fav-item"
                        key={54}
                        onClick={() => handleItemClick(54)}
                      >
                        <span className="featured-text">Accura</span>
                        <Link
                          to="#"
                          className={`fav-icon ${
                            selectedItems[54] ? "selected" : ""
                          }`}
                        >
                          <i className="feather icon-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <Link to="#" className="author-img">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="author"
                          />
                        </Link>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Acura RDX FWD</Link>
                        </h3>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
                                alt="Auto"
                              />
                            </span>
                            <p>Auto</p>
                          </li>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-02.svg"
                                alt="22 miles"
                              />
                            </span>
                            <p>42 miles</p>
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
                        </ul>
                        <ul>
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
                                alt=""
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
                            <p>5 Persons</p>
                          </li>
                        </ul>
                      </div>
                      <div className="listing-location-details">
                        <div className="listing-price">
                          <span>
                            <i className="feather icon-map-pin" />
                          </span>
                          Dallas, USA
                        </div>
                        <div className="listing-price">
                          <h6>
                            $80 <span>/ Day</span>
                          </h6>
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
                {/* /col */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Popular Services */}
      {/* Popular Cartypes */}
      <section className="section popular-car-type">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Most Popular Cartypes</h2>
            <p>
            Most popular worldwide Car Category due to their reliability, affordability, and features.
            </p>
          </div>
          {/* /Heading title */}
          <div className="row">
            <div className="popular-slider-group ">
              <div className="popular-cartype-slider">
              <Slider {...settings} className="service-slider">
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-01.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Crossover</h6>
                    <p>35 Cars</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-02.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Sports Coupe</h6>
                    <p>45 Cars</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-03.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Sedan</h6>
                    <p>15 Cars</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-04.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Pickup</h6>
                    <p>17 Cars</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-05.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Family MPV</h6>
                    <p>24 Cars</p>
                  </div>
                </div>
                <div className="listing-owl-item">
                  <div className="listing-owl-group">
                    <div className="listing-owl-img">
                      <ImageWithBasePath
                        src="assets/img/cars/mp-vehicle-05.png"
                        className="img-fluid"
                        alt="Popular Cartypes"
                      />
                    </div>
                    <h6>Family MPV</h6>
                    <p>24 Cars</p>
                  </div>
                </div>
              </Slider>
              </div>
            </div>
          </div>
          {/* View More */}
          <div className="view-all text-center" data-aos="fade-down">
            <Link
              to={routes.listingGrid}
              className="btn btn-view d-inline-flex align-items-center"
            >
              View all Cars{" "}
              <span>
                <i className="feather icon-arrow-right ms-2" />
              </span>
            </Link>
          </div>
          {/* View More */}
        </div>
      </section>
      {/* /Popular Cartypes */}
      {/* Facts By The Numbers */}
      <section className="section facts-number">
        <div className="facts-left">
          <ImageWithBasePath
            src="assets/img/bg/facts-left.png"
            className="img-fluid"
            alt="facts left"
          />
        </div>
        <div className="facts-right">
          <ImageWithBasePath
            src="assets/img/bg/facts-right.png"
            className="img-fluid"
            alt="facts right"
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title text-white">Facts By The Numbers</h2>
            <p className="description text-white">
            Here are some dreamsrent interesting facts presented by the numbers
            </p>
          </div>
          {/* /Heading title */}
          <div className="counter-group">
            <div className="row">
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-heart.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={16000}
                          duration={3}
                          separator=","
                        />
                        K<br />
                      </h4>
                      <p> Happy Customer </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-car.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={2547}
                          duration={3}
                          separator=","
                        />
                        +<br />
                      </h4>
                      <p>Count of Cars</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-headphone.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={625}
                          duration={3}
                          separator=","
                        />
                        K+
                        <br />
                      </h4>
                      <p>Car Center Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="count-group flex-fill">
                  <div className="customer-count d-flex align-items-center">
                    <div className="count-img">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-history.svg"
                        alt=""
                      />
                    </div>
                    <div className="count-content">
                      <h4>
                        <CountUp
                          className="counterUp"
                          end={200}
                          duration={3}
                          separator=","
                        />
                        K+
                        <br />
                      </h4>
                      <p>Total Kilometer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Facts By The Numbers */}
      {/* Rental deals */}
      <section className="section popular-services">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Recommended Car Rental deals</h2>
            <p>
            Here are some versatile options that cater to different needs
            </p>
          </div>
          {/* /Heading title */}
          <div className="row">
            <div className="popular-slider-group">
              <div className=" rental-deal-slider ">
              <Slider {...rentalslideroption} className="rental-slider">
                {/* owl carousel item */}
                <div className="rental-car-item">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/rental-car-01.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div className="fav-item justify-content-end"  key={55}
                        onClick={() => handleItemClick(55)}>
                        <Link to="#" className={`fav-icon ${
                          selectedItems[55] ? 'selected' : ''
                        }`} >
                          <i className="feather  icon-heart" /> 
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <div className="featured-text">
                            $400<span>/day</span>
                          </div>
                        </div>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            BMW 640 XI Gran Turismo
                          </Link>
                        </h3>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                            <p>Diesel</p>
                          </li>
                        </ul>
                        <ul>
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
                                src="assets/img/icons/car-parts-07.svg"
                                alt={'2018'}
                              />
                            </span>
                            <p>AC</p>
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
                {/* /owl carousel item */}
                {/* owl carousel item */}
                <div className="rental-car-item">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/rental-car-02.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div className="fav-item justify-content-end"  key={56}
                        onClick={() => handleItemClick(56)}>
                        <Link to="#" className={`fav-icon ${
                          selectedItems[56] ? 'selected' : ''
                        }`}>
                          <i className="feather  icon-heart" /> 
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <div className="featured-text">
                            $210<span>/day</span>
                          </div>
                        </div>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>
                            Camz Ferrari Portofino M
                          </Link>
                        </h3>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                            <p>30 KM</p>
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
                        </ul>
                        <ul>
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
                                src="assets/img/icons/car-parts-07.svg"
                                alt={'2018'}
                              />
                            </span>
                            <p>AC</p>
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
                {/* /owl carousel item */}
                {/* owl carousel item */}
                <div className="rental-car-item">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <div className="img-slider listing-page-slider">
                      <Slider {...imgslideroption}>
                        <div className="slide-images">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/rental-car-03.jpg"
                              className="img-fluid"
                              alt="Toyota"
                            />
                          </Link>
                        </div>
                        <div className="slide-images">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/rental-car-03-slider1.jpg"
                              className="img-fluid"
                              alt="Toyota"
                            />
                          </Link>
                        </div>
                        <div className="slide-images">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/rental-car-03-slider2.jpg"
                              className="img-fluid"
                              alt="Toyota"
                            />
                          </Link>
                        </div>
                        <div className="slide-images">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/rental-car-03-slider3.jpg"
                              className="img-fluid"
                              alt="Toyota"
                            />
                          </Link>
                        </div>
                        </Slider>
                      </div>
                      <div className="fav-item justify-content-end"  key={57}
                        onClick={() => handleItemClick(57)}>
                        <Link to="#" className={`fav-icon ${
                          selectedItems[57] ? 'selected' : ''
                        }`}>
                          <i className="feather  icon-heart" /> 
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <div className="featured-text">
                            $380<span>/day</span>
                          </div>
                        </div>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(5.0)</span>
                        </div>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Mercedes-Benz</Link>
                        </h3>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                            <p>30 KM</p>
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
                        </ul>
                        <ul>
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
                                src="assets/img/icons/car-parts-07.svg"
                                alt={'2018'}
                              />
                            </span>
                            <p>AC</p>
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
                {/* /owl carousel item */}
                {/* owl carousel item */}
                <div className="rental-car-item">
                  <div className="listing-item mb-0">
                    <div className="listing-img">
                      <Link to={routes.listingDetails}>
                        <ImageWithBasePath
                          src="assets/img/cars/rental-car-04.jpg"
                          className="img-fluid"
                          alt="Toyota"
                        />
                      </Link>
                      <div className="fav-item justify-content-end"  key={58}
                        onClick={() => handleItemClick(58)}>
                        <Link to="#" className={`fav-icon ${
                          selectedItems[58] ? 'selected' : ''
                        }`}>
                          <i className="feather  icon-heart" /> 
                        </Link>
                      </div>
                    </div>
                    <div className="listing-content">
                      <div className="listing-features">
                        <div className="fav-item-rental">
                          <span className="featured-text">$250/day</span>
                        </div>
                        <div className="list-rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <span>(4.5)</span>
                        </div>
                        <h3 className="listing-title">
                          <Link to={routes.listingDetails}>Range Rover</Link>
                        </h3>
                      </div>
                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <span>
                              <ImageWithBasePath
                                src="assets/img/icons/car-parts-01.svg"
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
                            <p>28 KM</p>
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
                        </ul>
                        <ul>
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
                                src="assets/img/icons/car-parts-07.svg"
                                alt={'2018'}
                              />
                            </span>
                            <p>AC</p>
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
                {/* /owl carousel item */}
                </Slider>
              </div>
            </div>
          </div>

          {/* View More */}
          <div className="view-all text-center" data-aos="fade-down">
            <Link
              to={routes.listingGrid}
              className="btn btn-view d-inline-flex align-items-center"
            >
              Go to all Cars{" "}
              <span>
                <i className="feather icon-arrow-right ms-2" />
              </span>
            </Link>
          </div>
          {/* View More */}
        </div>
      </section>
      {/* /Rental deals */}
      {/* Why Choose Us */}
      <section className="section why-choose popular-explore">
        <div className="choose-left">
          <ImageWithBasePath
            src="assets/img/bg/choose-left.png"
            className="img-fluid"
            alt="Why Choose Us"
          />
        </div>
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Why Choose Us</h2>
            <p>
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s,
            </p>
          </div>
          {/* /Heading title */}
          <div className="why-choose-group">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-black">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-selection.svg"
                        alt=""
                      />
                    </div>
                    <div className="choose-content">
                      <h4>Easy &amp; Fast Booking</h4>
                      <p>
                        Completely carinate e business testing process whereas
                        fully researched customer service. Globally extensive
                        content with quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-secondary">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-crown.svg"
                        alt=""
                      />
                    </div>
                    <div className="choose-content">
                      <h4>Many Pickup Location</h4>
                      <p>
                        Enthusiastically magnetic initiatives with
                        cross-platform sources. Dynamically target testing
                        procedures through effective.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-12 d-flex"
                data-aos="fade-down"
              >
                <div className="card flex-fill">
                  <div className="card-body">
                    <div className="choose-img choose-primary">
                      <ImageWithBasePath
                        src="assets/img/icons/bx-user-check.svg"
                        alt=""
                      />
                    </div>
                    <div className="choose-content">
                      <h4>Customer Satisfaction</h4>
                      <p>
                        Globally user centric method interactive. Seamlessly
                        revolutionize unique portals corporate collaboration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Why Choose Us */}
      {/* About us Testimonials */}
      <section className="section about-testimonial testimonials-section">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2 className="title text-white">What People say about us? </h2>
            <p className="description text-white">
            Discover what our customers have think about us
            </p>
          </div>
          {/* /Heading title */}
          <div className="owl-carousel about-testimonials testimonial-group mb-0 owl-theme">
            {/* /Carousel Item  */}
            {/* Carousel Item */}
            <Slider {...setting}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item d-flex">
                  <div className="card flex-fill">
                    <div className="card-body">
                      <div className="quotes-head" />
                      <div className="review-box">
                        <div className="review-profile">
                          <div className="review-img">
                            <ImageWithBasePath
                              src={testimonial.image}
                              className="img-fluid"
                              alt="img"
                            />
                          </div>
                        </div>
                        <div className="review-details">
                          <h6>{testimonial.name}</h6>
                          <div className="list-rating">
                            <div className="list-rating-star">
                              {[...Array(Math.floor(testimonial.rating))].map(
                                (_, i) => (
                                  <i key={i} className="fas fa-star filled" />
                                )
                              )}
                            </div>
                            <p>
                              <span>({testimonial.rating})</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <p>{testimonial.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* /Carousel Item  */}
            {/* Carousel Item */}

            {/* /Carousel Item  */}
          </div>
        </div>
      </section>
      {/* About us Testimonials */}
      {/* FAQ  */}
      <section className="section faq-section bg-light-primary">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Frequently Asked Questions </h2>
            <p>Find answers to your questions from our previous answers</p>
          </div>
          {/* /Heading title */}
          <div className="faq-info">
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapseds"
                  data-bs-toggle="collapse"
                  to="#faqOne"
                  aria-expanded="true"
                >
                  How old do I need to be to rent a car?
                </Link>
              </h4>
              <div id="faqOne" className="card-collapse collapse show">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqTwo"
                  aria-expanded="false"
                >
                  What documents do I need to rent a car?
                </Link>
              </h4>
              <div id="faqTwo" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqThree"
                  aria-expanded="false"
                >
                  What types of vehicles are available for rent?
                </Link>
              </h4>
              <div id="faqThree" className="card-collapse collapse">
                <p>
                  We offer a diverse fleet of vehicles to suit every need,
                  including compact cars, sedans, SUVs and luxury vehicles. You
                  can browse our selection online or contact us for assistance
                  in choosing the right vehicle for you
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqFour"
                  aria-expanded="false"
                >
                  Can I rent a car with a debit card?
                </Link>
              </h4>
              <div id="faqFour" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqFive"
                  aria-expanded="false"
                >
                  What is your fuel policy?
                </Link>
              </h4>
              <div id="faqFive" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqSix"
                  aria-expanded="false"
                >
                  Can I add additional drivers to my rental agreement?
                </Link>
              </h4>
              <div id="faqSix" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="faq-card bg-white" data-aos="fade-down">
              <h4 className="faq-title">
                <Link
                  className="collapsed"
                  data-bs-toggle="collapse"
                  to="#faqSeven"
                  aria-expanded="false"
                >
                  What happens if I return the car late?
                </Link>
              </h4>
              <div id="faqSeven" className="card-collapse collapse">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /FAQ */}
      {/* Pricing Plan */}
      <section className="pricing-section pricing-page pricing-section-bottom">
        <div className="container">
          {/* Heading title*/}
          <div className="section-heading" data-aos="fade-down">
            <h2>Transparent Pricing For you</h2>
            <p>Choose a package that suits you</p>
          </div>
          {/* /Heading title */}
          {/* Plan Selected */}
          <div className="plan-selected" data-aos="fade-down">
            <h4>Monthly</h4>
            <div className="status-toggle me-2 ms-2">
              <input
                id="list-rating_1"
                className="px-4 check"
                type="checkbox"
              />
              <label
                htmlFor="list-rating_1"
                className="px-4 checktoggle checkbox-bg"
              >
                checkbox
              </label>
            </div>
            <h4>Annually</h4>
          </div>
          {/* /Plan Selected */}
          <div className="row">
            <div
              className="col-lg-3 d-flex col-md-6 col-12"
              data-aos="fade-down"
            >
              <div className="price-card price-selected flex-fill">
                <div className="price-head">
                  <h2>Save more with Good Plans</h2>
                  <p>
                    Choose a plan and get onboard in Minutes, then get $100 with
                    next payment
                  </p>
                </div>
                <div className="price-body">
                  <ImageWithBasePath
                    className="img-fluid"
                    src="assets/img/price-plan.png"
                    alt="Price Plan"
                  />
                </div>
              </div>
            </div>
            <>
              <div
                className="col-lg-3 d-flex col-md-6 col-12"
                data-aos="fade-down"
              >
                <div className="price-card flex-fill">
                  <div className="price-head">
                    <div className="price-level">
                      <h6>Basic Rental </h6>
                      <p>For the basics</p>
                    </div>
                    <h4>$49</h4>
                    <span>Per user per month</span>
                  </div>
                  <div className="price-details">
                    <ul>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        50% Downpayment
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Insurance not Included
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Doorstep delivery
                      </li>
                      <li className="price-uncheck">
                        <span>
                          <i className="fa-regular fa-circle-xmark" />
                        </span>
                        Safe &amp; Sanitized
                      </li>
                      <li className="price-uncheck">
                        <span>
                          <i className="fa-regular fa-circle-xmark" />
                        </span>
                        No Long term Commitment
                      </li>
                      <li className="price-uncheck">
                        <span>
                          <i className="fa-regular fa-circle-xmark" />
                        </span>
                        Refundable deposit has to pay
                      </li>
                      <li className="price-uncheck">
                        <span>
                          <i className="fa-regular fa-circle-xmark" />
                        </span>
                        No Flexible timing &amp; extension
                      </li>
                    </ul>
                    <Link to={routes.login} className="btn viewdetails-btn">
                      Buy Package
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 d-flex col-md-6 col-12"
                data-aos="fade-down"
              >
                <div className="price-card flex-fill active">
                  <div className="price-head">
                    <div className="price-level price-level-popular">
                      <h6>Recommended</h6>
                      <p>For the Users</p>
                    </div>
                    <h4>$95</h4>
                    <span>Per user per month</span>
                  </div>
                  <div className="price-details">
                    <ul>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        50% Downpayment
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Insurance not Included
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Doorstep delivery
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Safe &amp; Sanitized
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Long term Commitment 1 month
                      </li>
                      <li className="price-uncheck">
                        <span>
                          <i className="fa-regular fa-circle-xmark" />
                        </span>
                        Refundable deposit has to pay
                      </li>
                      <li className="price-uncheck">
                        <span>
                          <i className="fa-regular fa-circle-xmark" />
                        </span>
                        No Flexible timing &amp; extension
                      </li>
                    </ul>
                    <Link
                      to={routes.login}
                      className="btn viewdetails-btn btn-popular"
                    >
                      Buy Package
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 d-flex col-md-6 col-12"
                data-aos="fade-down"
              >
                <div className="price-card flex-fill">
                  <div className="price-head">
                    <div className="price-level">
                      <h6>Pro</h6>
                      <p>For the Pro</p>
                    </div>
                    <h4>$154</h4>
                    <span>Per user per month</span>
                  </div>
                  <div className="price-details">
                    <ul>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        50% Downpayment
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Insurance not Included
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Doorstep delivery
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Safe &amp; Sanitized
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        Long term Commitment 1 month
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        No Refundable deposit
                      </li>
                      <li className="price-check">
                        <span>
                          <i className="fa-regular fa-circle-check" />
                        </span>
                        No Flexible timing &amp; extension
                      </li>
                    </ul>
                    <Link to={routes.login} className="btn viewdetails-btn">
                      Buy Package
                    </Link>
                  </div>
                </div>
              </div>
            </>
          </div>
          {/* App Available */}
          <div className="user-app-group">
            <div className="app-left">
              <ImageWithBasePath
                src="assets/img/bg/app-left.png"
                className="img-fluid"
                alt="App Available"
              />
            </div>
            <div className="app-right">
              <ImageWithBasePath
                src="assets/img/bg/app-right.png"
                className="img-fluid"
                alt="App Available"
              />
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="userapp-heading">
                  <h2 data-aos="fade-down">
                    Dreamsrental User Friendly App Available
                  </h2>
                  <p data-aos="fade-down">
                    Appropriately monetize one-to-one interfaces rather than
                    cutting-edge Competently disinte rmediate backward.
                  </p>
                  <div className="download-btn">
                    <div className="app-avilable" data-aos="fade-down">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/play-store.svg"
                          alt="PlayStore"
                        />
                      </Link>
                    </div>
                    <div className="app-avilable" data-aos="fade-down">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/apple.svg"
                          alt="AppStore"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-none d-lg-block">
                <div className="car-holder">
                  <ImageWithBasePath
                    className="app-car img-fluid"
                    src="assets/img/app-car.png"
                    alt="App Available"
                    data-aos="fade-down"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /App Available */}
        </div>
      </section>
      {/* /Pricing Plan */}
      <>
        {/* Blog Section */}
        <section className="blog-section news-section pt-0">
          <div className="container">
            {/* Heading title*/}
            <div className="section-heading" data-aos="fade-down">
              <h2>News &amp; Insights For You</h2>
              <p>This blog post provides valuable insights into the benefits</p>
            </div>
            {/* /Heading title */}
            <div className="row">
              <div className="col-lg-4 col-md-6 d-lg-flex">
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-4.jpg"
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <p className="blog-category">
                      <Link to="#">
                        <span>Journey</span>
                      </Link>
                    </p>
                    <h3 className="blog-title">
                      <Link to={routes.blogDetails}>
                        The 2023 Ford F-150 Raptor – A First Look
                      </Link>
                    </h3>
                    <p className="blog-description">
                      Covers all aspects of the automotive industry with a focus
                      on accessibility
                    </p>
                    <ul className="meta-item mb-0">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-04.jpg"
                              alt="author"
                            />
                          </div>
                          <Link to="#">
                            {" "}
                            <span> Hellan </span>
                          </Link>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days" />{" "}
                        <span>October 6, 2022</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-lg-flex">
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-3.jpg"
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <p className="blog-category">
                      <Link to="#">
                        <span>Tour &amp; tip</span>
                      </Link>
                    </p>
                    <h3 className="blog-title">
                      <Link to={routes.blogDetails}>
                        Tesla Model S: Top Secret Car Collector’s Garage
                      </Link>
                    </h3>
                    <p className="blog-description">
                      Catering to driving enthusiasts, Road &amp; Track provides
                      engaging content on...
                    </p>
                    <ul className="meta-item mb-0">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-13.jpg"
                              alt="author"
                            />
                          </div>
                          <Link to="#">
                            {" "}
                            <span> Alphonsa Daniel </span>
                          </Link>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days" />{" "}
                        <span>March 6, 2023</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-lg-flex">
                <div className="blog grid-blog">
                  <div className="blog-image">
                    <Link to={routes.blogDetails}>
                      <ImageWithBasePath
                        className="img-fluid"
                        src="assets/img/blog/blog-10.jpg"
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <p className="blog-category">
                      <Link to="#">
                        <span>Updates</span>
                      </Link>
                    </p>
                    <h3 className="blog-title">
                      <Link to={routes.blogDetails}>
                        Dedicated To Cars, Covering Everything
                      </Link>
                    </h3>
                    <p className="blog-description">
                      Known for its irreverent take on car culture, offers a mix
                      of news, reviews...
                    </p>
                    <ul className="meta-item mb-0">
                      <li>
                        <div className="post-author">
                          <div className="post-author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-13.jpg"
                              alt="author"
                            />
                          </div>
                          <Link to="#">
                            {" "}
                            <span> Hellan</span>
                          </Link>
                        </div>
                      </li>
                      <li className="date-icon">
                        <i className="fa-solid fa-calendar-days" />{" "}
                        <span>March 6, 2023</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="view-all text-center aos-init aos-animate"
              data-aos="fade-down"
            >
              <Link
                to={routes.blogDetails}
                className="btn btn-view-custom d-inline-flex align-items-center"
              >
                View all Blogs{" "}
                <span>
                  <i className="feather icon-arrow-right ms-2" />
                </span>
              </Link>
            </div>
          </div>
        </section>
        {/* /Blog Section */}
      </>
      <Footer/>
    </>
  );
};

export default HomeOne;
