import { useEffect, useState } from 'react'
import NewHeader from './header'
import NewFooter from './footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { all_routes, listingDetailsPath } from '../../../router/all_routes';
import { Dropdown } from "primereact/dropdown";
import { DatePicker } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { selectCar } from '../../../feature-module/listings/carSlice';  
import ImageWithBasePath from '../../../core/data/img/ImageWithBasePath';
const HomeNew = () => {
  const dispatch = useDispatch();
  
  const [bestCar, setBestCar] = useState([
    {
      "id": 1,
      "company": "Mahindra",
      "vehicle": "Thar",
      "description": "Mahindra Thar 4x2 Black",
      "transmission": "Manual",
      "fuel": "Diesel",
      "location": "Lasvegas",
      "price": 1600,
      "year": "2023",
      "km": "10 KM",
      "image": "assets/img/cars/black thar.png"
    },
    {
      "id": 2,
      "company": "Mahindra",
      "vehicle": "Thar",
      "description": "Mahindra Thar 4x4 Red",
      "transmission": "Automatic",
      "fuel": "Diesel",
      "location": "Lasvegas",
      "price": 1500,
      "year": "2024",
      "km": "12 KM",
      "image": "assets/img/cars/black thar.png"
    },
    {
      "id": 3,
      "company": "Mahindra",
      "vehicle": "XUV 700",
      "description": "Mahindra XUV 700",
      "transmission": "Manual",
      "fuel": "Diesel",
      "location": "Lasvegas",
      "price": 2000,
      "year": "2023",
      "km": "15 KM",
      "image": "assets/img/cars/xuv 700.png"
    },
    {
      "id": 4,
      "company": "Maruti Suzuki",
      "vehicle": "Fronx",
      "description": "Maruti Suzuki Fronx Delta Blue",
      "transmission": "Manual",
      "fuel": "CNG",
      "location": "Spain",
      "price": 1200,
      "year": "2024",
      "km": "18 KM",
      "image": "assets/img/cars/fronx.png"
    },
    {
      "id": 5,
      "company": "Hyundai",
      "vehicle": "Creta",
      "description": "Hyundai Creta Red",
      "transmission": "Manual",
      "fuel": "Diesel",
      "location": "Lasvegas",
      "price": 1800,
      "year": "2023",
      "km": "14 KM",
      "image": "assets/img/cars/creta red.png"
    },
    {
      "id": 6,
      "company": "Maruti Suzuki",
      "vehicle": "Ertiga",
      "description": "Maruti Suzuki Ertiga Vxi Smart Hybrid White",
      "transmission": "Manual",
      "fuel": "Petrol",
      "location": "Newyork, USA",
      "price": 1700,
      "year": "2022",
      "km": "16 KM",
      "image": "assets/img/cars/ertiga.png"
    }
  ])
  const CustomNextArrow = ({ onClick }: any) => (
    <div className="owl-nav right-nav">
      <button type="button" role="presentation" className="owl-next" onClick={onClick}>
        <i className="fa-solid fa-arrow-right" />
      </button>
    </div>

  );

  const CustomPrevArrow = ({ onClick }: any) => (
    <div className="owl-nav">
      <button type="button" role="presentation" className="owl-prev" onClick={onClick}>
        <i className="fa-solid fa-arrow-left" />
      </button>
    </div>
  );
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
  const Brands = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
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
  const Cars = {
    dots: false,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
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
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDropLocation, setSelectedDropLocation] = useState(null);

  const locations = [
    { name: 'New York' },
    { name: 'Dallas' },
    { name: 'Chicago' },
    { name: 'San Diego' }
  ];

  const dropLocations = [
    { name: 'San Francisco' },
    { name: 'Austin' },
    { name: 'Boston' },
    { name: 'Chicago' }
  ];
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      <NewHeader />
      <>
        {/* Banner */}
        <section className="banner-section-four">
          <div className="container">
            <div className="home-banner">
              <div className="row align-items-center">
                <div className="col-lg-5" data-aos="fade-down">
                  <div className="banner-content">
                    <h1>
                      Road Trips <span>Hill-Drives &amp; Pune </span> Adventures
                    </h1>
                    <p>
                      EKALODRIVE offers trusted self-drive rentals with well-maintained cars, affordable pricing, wide choices, easy booking, transparent costs, reliable service.

                    </p>
                    <div className="customer-list">
                      <div className="users-wrap">
                        <ul
                          style={{
                            display: "flex",
                            gap: "14px",
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {/* WhatsApp */}
                          <li>
                            <a
                              href="https://wa.me/919168527197"
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Chat on WhatsApp"
                              style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                background: "#25D366",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontSize: "22px",
                                textDecoration: "none",
                                transition: "transform 0.2s",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                              <i className="bx bxl-whatsapp" />
                            </a>
                          </li>

                          {/* Phone */}
                          <li>
                            <a
                              href="tel:+919168527197"
                              title="Call Us"
                              style={{
                                width: "48px",
                                height: "48px",
                                borderRadius: "50%",
                                background: "#0e86d4",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                fontSize: "22px",
                                textDecoration: "none",
                                transition: "transform 0.2s",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                              <i className="bx bx-phone-call" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="view-all d-flex align-items-center gap-3">
                        <Link
                          to={all_routes.listingGrid}
                          className="btn btn-primary d-inline-flex align-items-center"
                        >
                          Rent a Car
                          <i className="bx bx-right-arrow-alt ms-1" />
                        </Link>
                        <Link
                          to={all_routes.addListing}
                          className="btn btn-secondary d-inline-flex align-items-center"
                        >
                          <i className="bx bxs-plus-circle me-1" />
                          Add Your Car
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="banner-image">
                    <div className="banner-img" data-aos="fade-down">
                      <div className="amount-icon">
                        <span className="day-amt">
                          <p>Starts From</p>
                          <h6>
                            ₹650 <span> /day</span>
                          </h6>
                        </span>
                      </div>
                      <span className="rent-tag">
                        <i className="bx bxs-circle" /> Available for Rent
                      </span>
                      <ImageWithBasePath
                        src="assets/img/banner/banner.png"
                        className="img-fluid"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="banner-search new-home-banner">
              <form
                action={all_routes.listingGrid}
                className="form-block d-flex align-items-center"
              >
                <div className="search-input">
                  <div className="input-block">
                    <label>Pickup Date</label>
                    <div className="input-wrap">

                      <DatePicker
                        format="YYYY-MM-DD"
                        className="form-control flatpickr-datetime"

                      />
                      <span className="input-icon">
                        <i className="bx bx-chevron-down" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="search-input">
                  <div className="input-block">
                    <label>Pickup Time</label>
                    <div className="input-wrap">

                      <DatePicker
                        picker="time"
                        format="hh:mm A"
                        className="form-control flatpickr-datetime"
                        showTime={{ use12Hours: true }}
                      />
                      <span className="input-icon">
                        <i className="bx bx-chevron-down" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="search-input">
                  <div className="input-block">
                    <label>Drop Date</label>
                    <div className="input-wrap">

                      <DatePicker
                        format="YYYY-MM-DD"
                        className="form-control flatpickr-datetime"
                      />
                      <span className="input-icon">
                        <i className="bx bx-chevron-down" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="search-input input-end">
                  <div className="input-block">
                    <label>Drop Time</label>
                    <div className="input-wrap">
                      <DatePicker
                        picker="time"
                        format="hh:mm A"
                        className="form-control flatpickr-datetime"
                        showTime={{ use12Hours: true }}
                      />
                      <span className="input-icon">
                        <i className="bx bx-chevron-down" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="search-btn">
                  <Link to={all_routes.listingGrid} className="btn btn-primary" type="submit">
                    <i className="bx bx-search-alt" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <div className="banner-bgs">
            <ImageWithBasePath
              src="assets/img/bg/banner-bg-01.png"
              className="bg-01 img-fluid"
              alt="img"
            />
          </div>
        </section>
        {/* /Banner */}
                {/* Car Section */}
        <section className="car-section">
          <div className="container">
            <div className="section-heading heading-four" data-aos="fade-down">
              <h2>Explore Most Popular Cars</h2>
              <p>Here&apos;s a list of some of the most popular cars globally</p>
            </div>
            <div className="row">
              {bestCar?.map((car) => (
                <div className="col-lg-4 col-md-6" key={car.id}>
                  <div className="listing-item listing-item-two">
                    <div className="listing-img">
                      <Link to={listingDetailsPath(car.id)}>
                        <ImageWithBasePath
                          src={car.image}
                          className="img-fluid"
                          alt={car.vehicle}
                        />
                      </Link>

                      <div className="fav-item">
                        <div className="d-flex align-items-center gap-2">
                          <span className="featured-text">{car.company}</span>
                          <span className="availability">Available</span>
                        </div>
                        <Link to="#" className="fav-icon">
                          <i className="feather icon-heart" />
                        </Link>
                      </div>

                      <span className="location">
                        <i className="bx bx-map me-1" />
                        {car.location}
                      </span>
                    </div>

                    <div className="listing-content">
                      <div className="listing-features d-flex align-items-center justify-content-between">
                        <div className="list-rating">
                          <h3 className="listing-title">
                            <Link to={listingDetailsPath(car.id)}>
                              {car.description}
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

                        <div>
                          <h4 className="price">
                            ₹{car.price} <span>/ Day</span>
                          </h4>
                        </div>
                      </div>

                      <div className="listing-details-group">
                        <ul>
                          <li>
                            <ImageWithBasePath
                              src="assets/img/icons/car-parts-01.svg"
                              alt="Transmission"
                            />
                            <p>{car.transmission}</p>
                          </li>

                          <li>
                            <ImageWithBasePath
                              src="assets/img/icons/car-parts-02.svg"
                              alt="KM"
                            />
                            <p>{car.km}</p>
                          </li>

                          <li>
                            <ImageWithBasePath
                              src="assets/img/icons/car-parts-03.svg"
                              alt="Fuel"
                            />
                            <p>{car.fuel}</p>
                          </li>

                          <li>
                            <ImageWithBasePath
                              src="assets/img/icons/car-parts-05.svg"
                              alt="Year"
                            />
                            <p>{car.year}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all-btn text-center aos" data-aos="fade-down">
              <Link
                to={all_routes.listingGrid}
                className="btn btn-secondary d-inline-flex align-items-center"
              >
                View More Cars
                <i className="bx bx-right-arrow-alt ms-1" />
              </Link>
            </div>
          </div>
        </section>
        {/* /Car Section */}
        {/* Category  Section */}
        <section className="category-section-four">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* Heading title*/}
                <div className="section-heading heading-four" data-aos="fade-down">
                  <h2>Featured Categories</h2>
                  <p>
                    Know what you’re looking for? Browse our extensive selection of
                    cars
                  </p>
                </div>
                {/* /Heading title */}
                <div className="row row-gap-4">
                  {/* Category Item */}
                  <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
                    <div className="category-item flex-fill">
                      <div className="category-info d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="title">
                            <Link to={all_routes.listingGrid}>Sports Coupe</Link>
                          </h6>
                          <p>14 Cars</p>
                        </div>
                        <Link to={all_routes.listingGrid} className="link-icon">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="category-img">
                        <ImageWithBasePath
                          src="assets/img/category/category-01.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Category Item */}
                  {/* Category Item */}
                  <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
                    <div className="category-item flex-fill">
                      <div className="category-info d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="title">
                            <Link to={all_routes.listingGrid}>Sedan</Link>
                          </h6>
                          <p>12 Cars</p>
                        </div>
                        <Link to={all_routes.listingGrid} className="link-icon">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="category-img">
                        <ImageWithBasePath
                          src="assets/img/category/category-02.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Category Item */}
                  {/* Category Item */}
                  <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
                    <div className="category-item flex-fill">
                      <div className="category-info d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="title">
                            <Link to={all_routes.listingGrid}>Sports Car</Link>
                          </h6>
                          <p>35 Cars</p>
                        </div>
                        <Link to={all_routes.listingGrid} className="link-icon">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="category-img">
                        <ImageWithBasePath
                          src="assets/img/category/category-03.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Category Item */}
                  {/* Category Item */}
                  <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
                    <div className="category-item flex-fill">
                      <div className="category-info d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="title">
                            <Link to={all_routes.listingGrid}>Suv</Link>
                          </h6>
                          <p>35 Cars</p>
                        </div>
                        <Link to={all_routes.listingGrid} className="link-icon">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="category-img">
                        <ImageWithBasePath
                          src="assets/img/category/category-04.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Category Item */}
                  {/* Category Item */}
                  <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
                    <div className="category-item flex-fill">
                      <div className="category-info d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="title">
                            <Link to={all_routes.listingGrid}>Family MPV</Link>
                          </h6>
                          <p>35 Cars</p>
                        </div>
                        <Link to={all_routes.listingGrid} className="link-icon">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="category-img">
                        <ImageWithBasePath
                          src="assets/img/category/category-05.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Category Item */}
                  {/* Category Item */}
                  <div className="col-xl-2 col-md-4 col-sm-6 d-flex">
                    <div className="category-item flex-fill">
                      <div className="category-info d-flex align-items-center justify-content-between">
                        <div>
                          <h6 className="title">
                            <Link to={all_routes.listingGrid}>Crossover</Link>
                          </h6>
                          <p>30 Cars</p>
                        </div>
                        <Link to={all_routes.listingGrid} className="link-icon">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                      <div className="category-img">
                        <ImageWithBasePath
                          src="assets/img/category/category-06.png"
                          alt="img"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  {/* /Category Item */}
                </div>
                <div className="view-all-btn text-center aos" data-aos="fade-down">
                  <Link to={all_routes.listingGrid} className="btn btn-secondary">
                    View All
                    <i className="bx bx-right-arrow-alt ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Category  Section */}
        {/* Feature Section */}
        <section className="feature-section pt-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="feature-img">
                  <div
                    className="section-heading heading-four text-start"
                    data-aos="fade-down"
                  >
                    <h2>Best Platform for Car Rental</h2>
                    <p>
                      Traveling to a city feels easier with your own car from Relax Rent Cars, offering freedom, comfort, and confidence to explore independently without waiting or confusion, making every place home.

                    </p>
                  </div>
                  <ImageWithBasePath
                    src="assets/img/cars/car.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row row-gap-4">
                  {/* Feature Item */}
                  <div className="col-md-6 d-flex">
                    <div className="feature-item flex-fill">
                      <span className="feature-icon">
                        <i className="bx bxs-info-circle" />
                      </span>
                      <div>
                        <h6 className="mb-1">Well Maintained Fleet</h6>
                        <p>Regularly serviced, sanitized cars ensure safe travels.</p>
                      </div>
                    </div>
                  </div>
                  {/* /Feature Item */}
                  {/* Feature Item */}
                  <div className="col-md-6 d-flex">
                    <div className="feature-item flex-fill">
                      <span className="feature-icon">
                        <i className="bx bx-exclude" />
                      </span>
                      <div>
                        <h6 className="mb-1">Budget Weekdays</h6>
                        <p>Transparent pricing, no hidden fees, value-packed weekday deals.</p>
                      </div>
                    </div>
                  </div>
                  {/* /Feature Item */}
                  {/* Feature Item */}
                  <div className="col-md-6 d-flex">
                    <div className="feature-item flex-fill">
                      <span className="feature-icon">
                        <i className="bx bx-money" />
                      </span>
                      <div>
                        <h6 className="mb-1">Easy to Access</h6>
                        <p>Easy pickups, quick booking, hassle-free self-drive access.</p>
                      </div>
                    </div>
                  </div>
                  {/* /Feature Item */}
                  {/* Feature Item */}
                  <div className="col-md-6 d-flex">
                    <div className="feature-item flex-fill">
                      <span className="feature-icon">
                        <i className="bx bxs-car-mechanic" />
                      </span>
                      <div>
                        <h6 className="mb-1">Legal Platform</h6>
                        <p>Licensed, insured fleet ensuring legal, worry-free driving.</p>
                      </div>
                    </div>
                  </div>
                  {/* /Feature Item */}
                  {/* Feature Item */}
                  <div className="col-md-6 d-flex">
                    <div className="feature-item flex-fill">
                      <span className="feature-icon">
                        <i className="bx bx-support" />
                      </span>
                      <div>
                        <h6 className="mb-1">24/7 Roadside Assistance</h6>
                        <p>24/7 support for breakdowns, emergencies, stress-free driving.</p>
                      </div>
                    </div>
                  </div>
                  {/* /Feature Item */}
                  {/* Feature Item */}
                  <div className="col-md-6 d-flex">
                    <div className="feature-item flex-fill">
                      <span className="feature-icon">
                        <i className="bx bxs-coin" />
                      </span>
                      <div>
                        <h6 className="mb-1">Flexible Extensions</h6>
                        <p>Easy booking changes and flexible plans for trips.</p>
                      </div>
                    </div>
                  </div>
                  {/* /Feature Item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Feature Section */}

        {/* Brand Section */}
        <section className="brand-section">
          <div className="container">
            <div className="section-heading heading-four" data-aos="fade-down">
              <h2 className="text-white">Rent by Brands</h2>
              <p>Here&apos;s a list of some of the most popular cars globally</p>
            </div>
            <Slider {...Brands} className="brands-slider">
              <div className="brand-wrap">
                <ImageWithBasePath src="assets/img/brand/brand-09.svg" alt="img" />
                <p>Chevrolet</p>
              </div>
              <div className="brand-wrap">
                <ImageWithBasePath src="assets/img/brand/brand-10.svg" alt="img" />
                <p>Chevrolet</p>
              </div>
              <div className="brand-wrap">
                <ImageWithBasePath src="assets/img/brand/brand-11.svg" alt="img" />
                <p>Chevrolet</p>
              </div>
              <div className="brand-wrap">
                <ImageWithBasePath src="assets/img/brand/brand-12.svg" alt="img" />
                <p>Chevrolet</p>
              </div>
              <div className="brand-wrap">
                <ImageWithBasePath src="assets/img/brand/brand-13.svg" alt="img" />
                <p>Chevrolet</p>
              </div>
              <div className="brand-wrap">
                <ImageWithBasePath src="assets/img/brand/brand-14.svg" alt="img" />
                <p>Chevrolet</p>
              </div>
            </Slider>
            <div className="brand-img text-center">
              <ImageWithBasePath src="assets/img/bg/brand.png" alt="img" className="img-fluid" />
            </div>
          </div>
        </section>
        {/* /Brand Section */}
        {/* Rental Section */}
        <section className="rental-section-four">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="rental-img">
                  <ImageWithBasePath
                    src="assets/img/about/rent-car.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="grid-img">
                    <ImageWithBasePath
                      src="assets/img/about/car-grid.png"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="rental-content">
                  <div
                    className="section-heading heading-four text-start"
                    data-aos="fade-down"
                  >
                    <h2>Rent Our Cars in 3 Steps</h2>
                    <p>Check how it Works to Rent Cars in EkaloDrive</p>
                  </div>
                  <div className="step-item d-flex align-items-center">
                    <span className="step-icon bg-primary me-3">
                      <i className="bx bx-calendar-heart" />
                    </span>
                    <div>
                      <h5>Choose Date &amp; Locations</h5>
                      <p>
                        Determine the date &amp; location for your car rental.
                        Consider factors such as your travel itinerary,
                        pickup/drop-off locations
                      </p>
                    </div>
                  </div>
                  <div className="step-item d-flex align-items-center">
                    <span className="step-icon bg-secondary-100 me-3">
                      <i className="bx bxs-edit-location" />
                    </span>
                    <div>
                      <h5>Select Pick-Up &amp; Drop Locations</h5>
                      <p>
                        Check the availability of your desired vehicle type for your
                        chosen dates and location. Ensure that the rental rates,
                        taxes, fees, and any additional charges.
                      </p>
                    </div>
                  </div>
                  <div className="step-item d-flex align-items-center">
                    <span className="step-icon bg-dark me-3">
                      <i className="bx bx-coffee-togo" />
                    </span>
                    <div>
                      <h5>Book your Car</h5>
                      <p>
                        Determine the date &amp; location for your car rental.
                        Consider factors such as your travel itinerary,
                        pickup/drop-off locations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="count-sec">
              <div className="row row-gap-4">
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="count-item flex-fill">
                    <h3>
                      <span className="counterUp">16</span>K+
                    </h3>
                    <p>Happy Customers</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="count-item flex-fill">
                    <h3>
                      <span className="counterUp">2547</span>K+
                    </h3>
                    <p>Count of Cars</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="count-item flex-fill">
                    <h3>
                      <span className="counterUp">625</span>K+
                    </h3>
                    <p>Locations to Pickup</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="count-item flex-fill">
                    <h3>
                      <span className="counterUp">15000</span>K+
                    </h3>
                    <p>Total Kilometers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Rental Section */}
        {/* Popular Section */}
        <section className="popular-section-four">
          <div className="container">
            {/* Section Header */}
            <div className="section-heading heading-four" data-aos="fade-down">
              <h2>Popular Cars On Recommendations</h2>
              <p>Here are some versatile options that cater to different needs</p>
            </div>
            {/* /Section Header */}
            <Slider {...Cars} className="car-slider owl-carousel ">
              {/* Car Item */}
              {/* <div className="car-item">
                <h6>FORD</h6>
                <h2 className="display-1">MUSTANG</h2>
                <div className="car-img">
                  <ImageWithBasePath
                    src="assets/img/cars/car-15.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="amount-icon">
                    <span className="day-amt">
                      <p>Starts From</p>
                      <h6>
                        ₹650 <span> /day</span>
                      </h6>
                    </span>
                  </div>
                </div>
                <div className="spec-list">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-01.svg" alt="img" />
                    Auto
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-02.svg" alt="img" />
                    Power
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-03.svg" alt="img" />
                    30 K
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-04.svg" alt="img" />
                    AC
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />
                    Diesel
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />5 Persons
                  </span>
                </div>
                <Link to={all_routes.listingDetails} className="btn btn-primary">
                  Rent Now
                </Link>
              </div> */}
              {/* /Car Item */}
              {/* Car Item */}
              <div className="car-item">
                <h6>AUDI</h6>
                <h2 className="display-1">A3 2024 New</h2>
                <div className="car-img">
                  <ImageWithBasePath
                    src="assets/img/cars/car-16.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="amount-icon">
                    <span className="day-amt">
                      <p>Starts From</p>
                      <h6>
                        ₹6500 <span>/day</span>
                      </h6>
                    </span>
                  </div>
                </div>
                <div className="spec-list">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-01.svg" alt="img" />
                    Auto
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-02.svg" alt="img" />
                    Power
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-03.svg" alt="img" />
                    60 K
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-04.svg" alt="img" />
                    AC
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />
                    Gas
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />4 Persons
                  </span>
                </div>
                <Link to={all_routes.listingDetails} className="btn btn-primary">
                  Rent Now
                </Link>
              </div>
              {/* /Car Item */}
              {/* Car Item */}
              <div className="car-item">
                <h6>TOYOTO</h6>
                <h2 className="display-1">CAMREY SE 350</h2>
                <div className="car-img">
                  <ImageWithBasePath
                    src="assets/img/cars/car-17.png"
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="amount-icon">
                    <span className="day-amt">
                      <p>Starts From</p>
                      <h6>
                        ₹7990 <span>/day</span>
                      </h6>
                    </span>
                  </div>
                </div>
                <div className="spec-list">
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-01.svg" alt="img" />
                    Auto
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-02.svg" alt="img" />
                    Power
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-03.svg" alt="img" />
                    80 K
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-04.svg" alt="img" />
                    AC
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />
                    Petrol
                  </span>
                  <span>
                    <ImageWithBasePath src="assets/img/icons/spec-05.svg" alt="img" />6 Persons
                  </span>
                </div>
                <Link to={all_routes.listingDetails} className="btn btn-primary">
                  Rent Now
                </Link>
              </div>
              {/* /Car Item */}
            </Slider>
          </div>
        </section>
        {/* /Popular Section */}
        {/* Testimonial Section */}
        <section className="testimonial-section">
          <div className="container">
            <div className="section-heading heading-four" data-aos="fade-down">
              <h2>Our Clients Feedback</h2>
              <p>
                Provided by customers about&nbsp;their&nbsp;experience with a product
                or service.
              </p>
            </div>
            <div className="row row-gap-4 justify-content-center">
              {/* Testimonial Item */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="testimonial-item testimonial-item-two flex-fill">
                  <div className="user-img">
                    <ImageWithBasePath
                      src="assets/img/profiles/rahul.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                  <p>
                    Renting a car from ElaloDrive made my vacation so much smoother!
                    The process was quick
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                  </div>
                  <div className="user-info">
                    <h6>Rahul</h6>
                    <p>Pune Maharashtra</p>
                  </div>
                </div>
              </div>
              {/* /Testimonial Item */}
              {/* Testimonial Item */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="testimonial-item testimonial-item-two flex-fill">
                  <div className="user-img">
                    <ImageWithBasePath
                      src="assets/img/profiles/priya.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                  <p>
                    Their wide selection of vehicles, convenient locations, and
                    competitive prices
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                  </div>
                  <div className="user-info">
                    <h6>Sneha</h6>
                    <p>Satara, Maharashtra</p>
                  </div>
                </div>
              </div>
              {/* /Testimonial Item */}
              {/* Testimonial Item */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="testimonial-item testimonial-item-two flex-fill">
                  <div className="user-img">
                    <ImageWithBasePath
                      src="assets/img/profiles/arjun.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                  <p>
                    The spacious SUV we rented comfortably fit our family and all our
                    luggage
                  </p>
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                  </div>
                  <div className="user-info">
                    <h6>Amit</h6>
                    <p>Hinjewadi</p>
                  </div>
                </div>
              </div>
              {/* /Testimonial Item */}
            </div>
            <div className="view-all-btn text-center aos" data-aos="fade-down">
              <Link to={all_routes.listingGrid} className="btn btn-secondary">
                View All
                <i className="bx bx-right-arrow-alt ms-1" />
              </Link>
            </div>
            {/* <Slider {...Brands} className="client-slider owl-carousel">
              <div>
                <ImageWithBasePath src="assets/img/clients/client-01.svg" alt="img" />
              </div>
              <div>
                <ImageWithBasePath src="assets/img/clients/client-02.svg" alt="img" />
              </div>
              <div>
                <ImageWithBasePath src="assets/img/clients/client-03.svg" alt="img" />
              </div>
              <div>
                <ImageWithBasePath src="assets/img/clients/client-04.svg" alt="img" />
              </div>
              <div>
                <ImageWithBasePath src="assets/img/clients/client-05.svg" alt="img" />
              </div>
              <div>
                <ImageWithBasePath src="assets/img/clients/client-06.svg" alt="img" />
              </div>
            </Slider> */}
          </div>
        </section>
        {/* /Testimonial Section */}
        {/* Price Section */}
        <section className="pricing-section-four">
          <div className="container">
            <div className="section-heading heading-four" data-aos="fade-down">
              <h2>Best Pricing in Rental</h2>
              <p>Choose the Right Plan for Your Business</p>
            </div>

            <div className="row">
              {/* Price Item */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="price-item price-item-two flex-fill">
                  <div className="price-head">
                    <h6>Daily Plan</h6>
                    <div className="price-level">
                      <div>
                        <h3>₹999</h3>
                        <p>Per Day</p>
                      </div>
                    </div>
                  </div>
                  <div className="price-details">
                    <ul>
                      <li>Unlimited kilometers options</li>
                      <li>Pickup & drop across Pune</li>
                      <li>Perfect for weekend getaways</li>
                      <li>Student discounts available</li>
                      <li>24/7 roadside assistance available</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Price Item */}

              {/* Price Item */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="price-item price-item-two recommend flex-fill">
                  <span className="recommend-tag">
                    <i className="bx bxs-star me-1" />
                    Most Popular
                  </span>
                  <div className="price-head">
                    <h6>Weekly Packages</h6>
                    <div className="price-level">
                      <div>
                        <h3>₹5,999</h3>
                        <p>Per Week</p>
                      </div>
                    </div>
                  </div>
                  <div className="price-details">
                    <ul>
                      <li>Reduced weekly pricing</li>
                      <li>Roadside assistance</li>
                      <li>Easy Weekly Extensions</li>
                      <li>Great for group road trips</li>
                      <li>Well-maintained, sanitized vehicles</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Price Item */}

              {/* Price Item */}
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="price-item price-item-two flex-fill">
                  <div className="price-head">
                    <h6>Monthly Packages</h6>
                    <div className="price-level">
                      <div>
                        <h3>₹17,999</h3>
                        <p>Per Month</p>
                      </div>
                    </div>
                  </div>
                  <div className="price-details">
                    <ul>
                      <li>Best value per day pricing</li>
                      <li>Hassle Free Process</li>
                      <li>Customizable mileage options</li>
                      <li>Flexible renewal terms</li>
                      <li>Best long-term savings</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /Price Item */}
            </div>

            <div className="row">
              <div className="col-lg-6 mx-auto">
                <div className="view-all-btn text-center aos" data-aos="fade-down">
                  <p>
                    Whether you're booking for a day, a week, or a month — we offer
                    flexible rental plans designed to suit your needs at the best price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* /Price Section */}
        {/* Support Section */}
        <section className="support-section">
          <div
            className="horizontal-slide d-flex"
            data-direction="left"
            data-speed="slow"
          >
            <div className="slide-list d-flex">
              <div className="support-item">
                <h2>Best Rate Guarateed</h2>
              </div>
              <div className="support-item">
                <h2>Free Cancellation</h2>
              </div>
              <div className="support-item">
                <h2>Best Security</h2>
              </div>
              <div className="support-item">
                <h2>Home Deliver</h2>
              </div>
              <div className="support-item">
                <h2>Trusted Proof</h2>
              </div>
            </div>
          </div>
        </section>
        {/* /Support Section */}
        {/* FAQ Section */}
        <section className="faq-section-four pt-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-heading heading-four" data-aos="fade-down">
                  <h2>Frequently asked questions</h2>
                  <p>Explore to learn more about how can empower your business</p>
                </div>
          <div className="accordion faq-accordion" id="faqAccordion">

  {/* Documents Required */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqOne"
        aria-expanded="true"
        aria-controls="faqOne"
      >
        What documents do I need?
      </button>
    </h2>
    <div
      id="faqOne"
      className="accordion-collapse collapse show"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          Valid Indian driving license (min 1 year old), Aadhaar/Passport/Voter ID, and age proof (min 21 years). Upload originals during booking; verification takes 5 min.
        </p>
      </div>
    </div>
  </div>

  {/* Booking */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqTwo"
      >
        How do I book a car?
      </button>
    </h2>
    <div
      id="faqTwo"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          Search cars on ekalodrive.com, select dates/location, upload documents, and pay deposit + rental via UPI/card. Instant confirmation!
        </p>
      </div>
    </div>
  </div>

  {/* Minimum Duration */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqThree"
      >
        Minimum rental duration?
      </button>
    </h2>
    <div
      id="faqThree"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          2 hours for hourly rentals; 24 hours minimum for daily rentals. Extensions available subject to availability.
        </p>
      </div>
    </div>
  </div>

  {/* Included in Rates */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqFour"
      >
        What’s included in rates?
      </button>
    </h2>
    <div
      id="faqFour"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          Base rental, insurance, unlimited city km (250 km/24 hrs), fuel full at pickup, and 24/7 roadside assistance. GST (18%) included.
        </p>
      </div>
    </div>
  </div>

  {/* Security Deposit */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqFive"
      >
        Security deposit?
      </button>
    </h2>
    <div
      id="faqFive"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          ₹5,000 refundable (online/cash). Covers minor damages; full refund on clean return.
        </p>
      </div>
    </div>
  </div>

  {/* Extra KM / Fuel */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqSix"
      >
        Extra km or fuel charges?
      </button>
    </h2>
    <div
      id="faqSix"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          ₹10/km beyond limit. Return fuel to pickup level or pay the difference at ₹100/litre.
        </p>
      </div>
    </div>
  </div>

  {/* Cancellation */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqSeven"
      >
        Cancellation policy?
      </button>
    </h2>
    <div
      id="faqSeven"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          48+ hrs: 20% fee. 24–48 hrs: 25%. Less than 24 hrs: 1-day rental. No-show: Full amount charged.
        </p>
      </div>
    </div>
  </div>

  {/* Pets / Goods */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqEight"
      >
        Pet / goods policy?
      </button>
    </h2>
    <div
      id="faqEight"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          No pets or commercial loads allowed. Cleaning fee ₹1,000 if vehicle is soiled.
        </p>
      </div>
    </div>
  </div>

  {/* Late Return */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqNine"
      >
        Late return charges?
      </button>
    </h2>
    <div
      id="faqNine"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          ₹700 for the first hour; 50% of daily rate thereafter.
        </p>
      </div>
    </div>
  </div>

  {/* Roadside Assistance */}
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#faqTen"
      >
        Roadside assistance?
      </button>
    </h2>
    <div
      id="faqTen"
      className="accordion-collapse collapse"
      data-bs-parent="#faqAccordion"
    >
      <div className="accordion-body">
        <p>
          24/7 phone support. Towing is free within city limits.
        </p>
      </div>
    </div>
  </div>

</div>
              </div>
            </div>
          </div>
        </section>
        {/* /FAQ Section */}
      </>

      <NewFooter />
    </>
  )
}

export default HomeNew