import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import FooterThree from "./footer-three";
import HeaderThree from "./header-three";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";
import { Dropdown } from "primereact/dropdown";
import CountUp from "react-countup";

const HomeThree = () => {
  const routes = all_routes;
const [nav1, setNav1] = useState<Slider | null>(null);
const [nav2, setNav2] = useState<Slider | null>(null);
  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };
  const types = [{ name: "Cruiser" }, { name: "Scooters" }];
  const bikemodal = [{ name: "KTM 300" }, { name: "KTM RC 390" }];
  const Location = [{ name: "Newyork" }, { name: "Los Angeles" }];
 const slider1 = useRef<Slider | null>(null);
const slider2 = useRef<Slider | null>(null);
  const [selectedPersons, setSelectedPersons] = useState(null);
  const [SelectedModal, setSelectedModal] = useState(null);
  const [SelectedLocation, setSelectedLocation] = useState(null);
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    Infinity:false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    asNavFor: nav2,
  };

  const thumbnailConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    focusOnSelect: true,
  };
  const testimonials = [
    {
      name: "Marian Hendriques",
      location: "Dubai, Emirates",
      title: "From a Satisfied Business Traveler",
      content:
        "As a frequent business traveler, I rely on Dreams Rent for all my transportation needs. Their extensive fleet of vehicles, convenient locations, and competitive pricing make them my go-to choice every time. Plus, their friendly staff always go the extra mile to ensure a seamless rental experience.",
    },
    {
      name: "Lyon Avenue",
      location: "Derby, UK",
      title: "David's Urban Exploration",
      content:
        "As a frequent traveler, finding reliable bike rental services is crucial for me. I stumbled upon this website during my recent trip, and I'm glad I did. The process of booking was seamless, and the prices were reasonable. The best part was the quality of the bikes; they were well-maintained and comfortable to ride.",
    },
    {
      name: "Westfall Avenue",
      location: "New York, USA",
      title: "Sarah's Adventure",
      content:
        "Absolutely loved my experience with Dreams Rent! Booking was a breeze; their website is user-friendly and intuitive. The bike I rented was in excellent condition, which made exploring the city a joy. What stood out the most was the exceptional customer service.",
    },
    {
      name: "Saint Clair Street",
      location: "Norwich, UK",
      title: "Edward's Scenic Ride",
      content:
        "From start to finish, renting a bike through this website was an absolute pleasure. The website interface was easy to navigate, and I could quickly find the perfect bike for my needs. When I arrived to pick up the bike, I was impressed by its excellent condition. It was evident that they take pride in maintaining their fleet.",
    },
  ];
  const thumbnails = [
    { img: "assets/img/profiles/avatar-11.jpg" },
    { img: "assets/img/profiles/avatar-02.jpg" },
    { img: "assets/img/profiles/avatar-03.jpg" },
    { img: "assets/img/profiles/avatar-04.jpg" },
  ];

  const bikecategoryslideroption = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  const bikefeatureslideroption = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const imgslideroption = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  useEffect(() => {
    setIsSliderVisible(true); // Trigger re-render to ensure slider initializes
    window.dispatchEvent(new Event("resize"));
  }, []);
  const brandimgslideroption = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  const imgblogslideroption = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const recommendslideroption = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: '20px',
    centerMode:true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },

      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  return (
    <div className=" home-three">
      <HeaderThree />
      <>
        {/* Banner */}
        <section className="banner-section banner-slider">
          <div className="container">
            <div className="home-banner">
              <div className="row align-items-center">
                <div className="col-lg-7" data-aos="fade-down">
                  <h1>
                    Make your Ride Easy with <span>Dreams rent </span>
                  </h1>
                  <h4>We prioritizes customer satisfaction</h4>
                  <div className="banner-search">
                    <form
                      action={routes.listingGrid}
                      className="form-block d-flex align-items-center"
                    >
                      <div className="search-input">
                        <div className="input-block  customdropdown">
                          <label>Any type</label>

                          <Dropdown
                            value={selectedPersons}
                            onChange={(e) => setSelectedPersons(e.value)}
                            options={types}
                            optionLabel="name"
                            placeholder="Cruiser"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="input-block  customdropdown">
                          <label>Model</label>

                          <Dropdown
                            value={SelectedModal}
                            onChange={(e) => setSelectedModal(e.value)}
                            options={bikemodal}
                            optionLabel="name"
                            placeholder="KTM 300"
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="search-input">
                        <div className="input-block customdropdown">
                          <label>Location</label>

                          <Dropdown
                            value={SelectedLocation}
                            onChange={(e) => setSelectedLocation(e.value)}
                            options={Location}
                            optionLabel="name"
                            placeholder="Newyork"
                            className="w-100 "
                          />
                        </div>
                      </div>
                      <div className="search-btn">
                        <button className="btn btn-primary" type="submit">
                          <i className="bx bx-search-alt" />
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                  <p>
                    Experience the ultimate freedown of Dreamsrental - tailor
                    adventure by choosing from Premium bikes
                  </p>
                  <div className="customer-list">
                    <div className="users-wrap">
                      <ul className="users-list">
                        <li>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-11.jpg"
                            className="img-fluid aos"
                            alt="bannerimage"
                          />
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-15.jpg"
                            className="img-fluid aos"
                            alt="bannerimage"
                          />
                        </li>
                        <li>
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            className="img-fluid aos"
                            alt="bannerimage"
                          />
                        </li>
                      </ul>
                      <div className="customer-info">
                        <h4>6K + Customers</h4>
                        <p>has used our renting services </p>
                      </div>
                    </div>
                    <div className="view-all">
                      <Link
                        to={routes.listingGrid}
                        className="btn btn-view d-inline-flex align-items-center"
                      >
                        Rent a Bike
                      </Link>
                      <Link
                        to={routes.listingGrid}
                        className="btn btn-secondary d-inline-flex align-items-center"
                      >
                        <i className="bx bxs-plus-circle" />
                        Add a Bike{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-image">
            <div className="banner-bg-img" data-aos="fade-left">
              <ImageWithBasePath
                src="assets/img/banner-img-01.png"
                className="img-fluid"
                alt="img"
              />
              <div className="banner-bg">
                <ImageWithBasePath
                  src="assets/img/bg/ban-bg.png"
                  className="img-fluid"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="banner-bgs">
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-01.png"
              className="shape-01 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-02.png"
              className="shape-02 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-03.png"
              className="shape-03 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-04.png"
              className="shape-04 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-05.png"
              className="shape-05 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-06.png"
              className="shape-06 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-07.png"
              className="shape-07 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-05.png"
              className="shape-08 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-06.png"
              className="shape-09 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-03.png"
              className="shape-10 img-fluid"
              alt="img"
            />
          </div>
        </section>
        {/* /Banner */}
        {/* Category  Section */}
        <section className="section category-section">
          <div className="category-bg">
            <ImageWithBasePath
              src="assets/img/bg/category-bg.png"
              className="img-fluid shape-01"
              alt="image"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-05.png"
              className="img-fluid shape-02"
              alt="image"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* Heading title*/}
                <div
                  className="section-heading heading-three"
                  data-aos="fade-down"
                >
                  <h2>
                    Popular Bike <span>Categories</span>
                  </h2>
                  <p>
                    Most popular worldwide Category due to their reliability,
                    affordability, and features.
                  </p>
                </div>
                {/* /Heading title */}
                {/* Category List */}
                <div className="bike-category-slider nav-center ">
                  <Slider {...bikecategoryslideroption}>
                    <div className="item">
                      <Link to="#" className="category-wrap">
                        <span className="category-img">
                          <ImageWithBasePath
                            src="assets/img/icons/category-bike-01.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h6>Off Road </h6>
                        <p>35 Bikes</p>
                      </Link>
                    </div>
                    <div className="item">
                      <Link to="#" className="category-wrap">
                        <span className="category-img">
                          <ImageWithBasePath
                            src="assets/img/icons/category-bike-02.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h6>Cruiser</h6>
                        <p>15 Bikes</p>
                      </Link>
                    </div>
                    <div className="item">
                      <Link to="#" className="category-wrap">
                        <span className="category-img">
                          <ImageWithBasePath
                            src="assets/img/icons/category-bike-03.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h6>Scooters</h6>
                        <p>40 Bikes</p>
                      </Link>
                    </div>
                    <div className="item">
                      <Link to="#" className="category-wrap">
                        <span className="category-img">
                          <ImageWithBasePath
                            src="assets/img/icons/category-bike-04.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h6>Tourers</h6>
                        <p>10 Bikes</p>
                      </Link>
                    </div>
                    <div className="item">
                      <Link to="#" className="category-wrap">
                        <span className="category-img">
                          <ImageWithBasePath
                            src="assets/img/icons/category-bike-05.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h6>Sports</h6>
                        <p>20 Bikes</p>
                      </Link>
                    </div>
                    <div className="item">
                      <Link to="#" className="category-wrap">
                        <span className="category-img">
                          <ImageWithBasePath
                            src="assets/img/icons/category-bike-06.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h6>Electric</h6>
                        <p>30 Bikes</p>
                      </Link>
                    </div>
                    <div className="item">
                      <Link to="#" className="category-wrap">
                        <span className="category-img">
                          <ImageWithBasePath
                            src="assets/img/icons/category-bike-07.svg"
                            className="img-fluid"
                            alt="image"
                          />
                        </span>
                        <h6>Scrambler</h6>
                        <p>20 Bikes</p>
                      </Link>
                    </div>
                  </Slider>
                </div>
                {/* /Category List */}
                <div
                  className="view-all-btn text-center aos"
                  data-aos="fade-down"
                >
                  <Link to={routes.listingGrid} className="btn btn-secondary">
                    View all Categories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Category  Section */}
        {/* Featured Services */}
        <section className="section features-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* Heading title*/}
                <div
                  className="section-heading heading-three mx-auto"
                  data-aos="fade-down"
                >
                  <h2>
                    Featured &amp; <span>Top Rated Bikes</span>
                  </h2>
                  <p>
                    Here&apos;s a list of some of the most popular Bikes
                    globally, based on sales and customer preferences
                  </p>
                </div>
                {/* /Heading title */}
                <div className="bike-feature-slider nav-center">
                  <Slider {...bikefeatureslideroption}>
                    <div className="item">
                      <div className="listing-item bike-list">
                        <div className="listing-img">
                          <div className="image-slider listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike1-slide-01.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike1-slide-02.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike1-slide-03.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike1-slide-04.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end">
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-04.jpg"
                                alt="author"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-center justify-content-between">
                            <div className="list-rating">
                              <div className="list-ratings">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>138 Reviews</span>
                              </div>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Harley Davidson
                                </Link>
                              </h3>
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
                                    src="assets/img/icons/bike-icon-01.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Drum</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-02.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>35 Km/hr</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-03.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-04.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Tubeless</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-button">
                            <div className="listing-price">
                              <h6>
                                $160 <span>/ Day</span>
                              </h6>
                            </div>
                            <div
                              className="d-flex align-items-center"
                              key={1}
                              onClick={() => handleItemClick(1)}
                            >
                              <Link
                                to="#"
                                className={`fav-icon ${
                                  selectedItems[1] ? "selected" : ""
                                }`}
                              >
                                <i className="feather  icon-heart" />
                              </Link>
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                          <div className="feature-text">
                            <span className="bg-danger">Featured</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="listing-item bike-list">
                        <div className="listing-img">
                          <div className="image-slider listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike2-slide-01.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike2-slide-02.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike2-slide-03.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike2-slide-04.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end">
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-07.jpg"
                                alt="author"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-center justify-content-between">
                            <div className="list-rating">
                              <div className="list-ratings">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>150 Reviews</span>
                              </div>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  KTM RC 390
                                </Link>
                              </h3>
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
                                    src="assets/img/icons/bike-icon-01.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Disc</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-02.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>30 Km/L</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-03.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-04.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Tubeless</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-button">
                            <div className="listing-price">
                              <h6>
                                $180 <span>/ Day</span>
                              </h6>
                            </div>
                            <div
                              className="d-flex align-items-center"
                              key={2}
                              onClick={() => handleItemClick(2)}
                            >
                              <Link
                                to="#"
                                className={`fav-icon ${
                                  selectedItems[2] ? "selected" : ""
                                }`}
                              >
                                <i className="feather  icon-heart" />
                              </Link>
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="feature-text">
                          <span className="bg-warning">Top Rated</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="listing-item bike-list">
                        <div className="listing-img">
                          <div className="image-slider listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike3-slide-01.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike3-slide-02.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike3-slide-03.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike3-slide-04.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end">
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-14.jpg"
                                alt="author"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-center justify-content-between">
                            <div className="list-rating">
                              <div className="list-ratings">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>110 Reviews</span>
                              </div>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Ducati Hypermotard
                                </Link>
                              </h3>
                            </div>
                            <div className="list-km">
                              <span className="km-count">
                                <ImageWithBasePath
                                  src="assets/img/icons/map-pin.svg"
                                  alt="author"
                                />
                                3.8m
                              </span>
                            </div>
                          </div>
                          <div className="listing-details-group">
                            <ul>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-01.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Drum</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-02.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>19 Km/L</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-03.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-04.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Tubeless</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-button">
                            <div className="listing-price">
                              <h6>
                                $190 <span>/ Day</span>
                              </h6>
                            </div>
                            <div
                              className="d-flex align-items-center"
                              key={3}
                              onClick={() => handleItemClick(3)}
                            >
                              <Link
                                to="#"
                                className={`fav-icon ${
                                  selectedItems[3] ? "selected" : ""
                                }`}
                              >
                                <i className="feather  icon-heart" />
                              </Link>
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                          <div className="feature-text">
                            <span className="bg-danger">Featured</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="listing-item bike-list">
                        <div className="listing-img">
                          <div className="image-slider listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike4-slide-01.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike4-slide-02.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike4-slide-03.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike4-slide-04.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end">
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-11.jpg"
                                alt="author"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-center justify-content-between">
                            <div className="list-rating">
                              <div className="list-ratings">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span>180 Reviews</span>
                              </div>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  TVS Apache RR BS6
                                </Link>
                              </h3>
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
                                    src="assets/img/icons/bike-icon-01.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Disc</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-02.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>41 Km/L</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-03.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-04.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Tubeless</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-button">
                            <div className="listing-price">
                              <h6>
                                $120 <span>/ Day</span>
                              </h6>
                            </div>
                            <div
                              className="d-flex align-items-center"
                              key={4}
                              onClick={() => handleItemClick(4)}
                            >
                              <Link
                                to="#"
                                className={`fav-icon ${
                                  selectedItems[4] ? "selected" : ""
                                }`}
                              >
                                <i className="feather  icon-heart" />
                              </Link>
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="feature-text">
                          <span className="bg-warning">Top Rated</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="listing-item bike-list">
                        <div className="listing-img">
                          <div className="image-slider listing-page-slider">
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike1-slide-01.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike1-slide-02.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike1-slide-03.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike1-slide-04.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="fav-item justify-content-end">
                            <span className="img-count">
                              <i className="feather icon-image" />
                              04
                            </span>
                            <Link to="#" className="author-img">
                              <ImageWithBasePath
                                src="assets/img/profiles/avatar-07.jpg"
                                alt="author"
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-center justify-content-between">
                            <div className="list-rating">
                              <div className="list-ratings">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>100 Reviews</span>
                              </div>
                              <h3 className="listing-title">
                                <Link to={routes.listingDetails}>
                                  Harley X220
                                </Link>
                              </h3>
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
                                    src="assets/img/icons/bike-icon-01.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Drum</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-02.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>10 KM / L</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-03.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Diesel</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/bike-icon-04.svg"
                                    alt="img"
                                  />
                                </span>
                                <p>Tubeless</p>
                              </li>
                            </ul>
                          </div>
                          <div className="listing-button">
                            <div className="listing-price">
                              <h6>
                                $77 <span>/ Day</span>
                              </h6>
                            </div>
                            <div
                              className="d-flex align-items-center"
                              key={5}
                              onClick={() => handleItemClick(5)}
                            >
                              <Link
                                to="#"
                                className={`fav-icon ${
                                  selectedItems[5] ? "selected" : ""
                                }`}
                              >
                                <i className="feather  icon-heart" />
                              </Link>
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-order"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div
                  className="view-all-btn text-center aos"
                  data-aos="fade-down"
                >
                  <Link to={routes.listingGrid} className="btn btn-secondary">
                    View all Bikes
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="feature-bg">
            <ImageWithBasePath
              src="assets/img/bg/destination-bg-01.png"
              className="img-fluid shape-01"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/feature-bg.png"
              className="img-fluid shape-02"
              alt="img"
            />
          </div>
        </section>
        {/* /Featured Services */}
        {/* Choose Us Section */}
        <section className="section choose-us-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                {/* Heading title*/}
                <div
                  className="section-heading heading-three"
                  data-aos="fade-down"
                >
                  <h2>
                    Why People love to use <span>Dreams Rent</span>
                  </h2>
                  <p>
                    Using Dreams Rent for bike rentals because it offers quality
                    bikes, convenience, flexibility, affordability, excellent
                    customer service &amp; a commitment to community engagement
                    &amp; sustainability.
                  </p>
                </div>
                {/* /Heading title */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="quality-wrap" data-aos="fade-down">
                      <span>
                        <i className="bx bxs-bookmarks" />
                      </span>
                      <h6>Quality Bikes</h6>
                      <p>
                        Dreams Rent offers a fleet of high-quality bikes, that
                        including mountain bikes, road bikes, city bikes.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="quality-wrap" data-aos="fade-down">
                      <span>
                        <i className="bx bxs-bolt-circle" />
                      </span>
                      <h6>Variety of Options</h6>
                      <p>
                        Whether customers are looking for bikes for leisurely
                        rides, commuting, or adventure cycling.--
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="quality-wrap" data-aos="fade-down">
                      <span>
                        <i className="bx bxs-calendar-heart" />
                      </span>
                      <h6>Flexible Rental Periods</h6>
                      <p>
                        Customers appreciate the flexibility of choosing rental
                        durations that suit their schedules.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="quality-wrap" data-aos="fade-down">
                      <span>
                        <i className="bx bxs-badge-dollar" />
                      </span>
                      <h6>Affordable Pricing</h6>
                      <p>
                        Dreams Rent offers competitive pricing for bike rentals,
                        making cycling accessible to a wide range of people.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="quality-img">
            <ImageWithBasePath
              src="assets/img/quality-img.png"
              data-aos="fade-left"
              className="img-fluid"
              alt="img"
            />
          </div>
          <div className="quality-bg">
            <ImageWithBasePath
              src="assets/img/bg/quality-bg.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </section>
        {/* /Choose Us Section */}
        {/* Works Section */}
        <section className="section work-section">
          <div className="work-bg">
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-01.png"
              className="shape-01 img-fluid"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-03.png"
              className="shape-02 img-fluid"
              alt="img"
            />
          </div>
          <div className="container">
            {/* Heading title*/}
            <div className="row">
              <div className="col-lg-12">
                <div
                  className="section-heading heading-three"
                  data-aos="fade-down"
                >
                  <h2>
                    How Dreams rent <span>Works</span>
                  </h2>
                  <p>
                    Here&apos;s a basic outline of how our bike rental typically
                    Works
                  </p>
                </div>
              </div>
            </div>
            {/* /Heading title */}
            <div className="work-wrapper">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="work-card flex-fill">
                    <div className="work-head">
                      <span className="num-icon">01</span>
                      <div className="work-icon">
                        <i className="bx bxs-been-here" />
                      </div>
                    </div>
                    <div className="work-content">
                      <h5>Select Pickup/ Delivery Date &amp; Location</h5>
                      <p>
                        Determine the date &amp; location for your Bike rental.
                        Consider factors such as your travel itinerary,
                        pickup/drop-off locations.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="work-card flex-fill">
                    <div className="work-head">
                      <span className="num-icon">02</span>
                      <div className="work-icon bg-secondary1">
                        <i className="bx bx-current-location" />
                      </div>
                    </div>
                    <div className="work-content">
                      <h5>Reserve your Bike</h5>
                      <p>
                        Check the availability of your desired vehicle type for
                        your chosen dates and location. Ensure that the rental
                        rates.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-12 d-flex"
                  data-aos="fade-down"
                >
                  <div className="work-card flex-fill">
                    <div className="work-head">
                      <span className="num-icon">03</span>
                      <div className="work-icon">
                        <i className="bx bx-like" />
                      </div>
                    </div>
                    <div className="work-content">
                      <h5>Enjoy Your Ride</h5>
                      <p>
                        Check the availability of your desired vehicle type for
                        your chosen dates and location. Ensure that the rental
                        rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Brand Slider */}
            <div className="row">
              <div className="col-md-12">
                <div className="brand-sec">
                  <div
                    className="section-heading heading-three"
                    data-aos="fade-down"
                  >
                    <p>Bikes from popular Brands around the world</p>
                  </div>
                  <div className="brand-slider ">
                    <Slider {...brandimgslideroption}>
                      <div className="brand-item">
                        <ImageWithBasePath
                          src="assets/img/brand/brand-01.svg"
                          className="img-fluid"
                          alt="brand"
                        />
                      </div>
                      <div className="brand-item">
                        <ImageWithBasePath
                          src="assets/img/brand/brand-02.svg"
                          className="img-fluid"
                          alt="brand"
                        />
                      </div>
                      <div className="brand-item">
                        <ImageWithBasePath
                          src="assets/img/brand/brand-03.svg"
                          className="img-fluid"
                          alt="brand"
                        />
                      </div>
                      <div className="brand-item">
                        <ImageWithBasePath
                          src="assets/img/brand/brand-04.svg"
                          className="img-fluid"
                          alt="brand"
                        />
                      </div>
                      <div className="brand-item">
                        <ImageWithBasePath
                          src="assets/img/brand/brand-05.svg"
                          className="img-fluid"
                          alt="brand"
                        />
                      </div>
                      <div className="brand-item">
                        <ImageWithBasePath
                          src="assets/img/brand/brand-06.svg"
                          className="img-fluid"
                          alt="brand"
                        />
                      </div>
                      <div className="brand-item">
                        <ImageWithBasePath
                          src="assets/img/brand/brand-07.svg"
                          className="img-fluid"
                          alt="brand"
                        />
                      </div>
                      <div className="brand-item">
                        <ImageWithBasePath
                          src="assets/img/brand/brand-04.svg"
                          className="img-fluid"
                          alt="brand"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            {/* /Brand Slider */}
          </div>
        </section>
        {/* /Works Section */}
        {/* Popular Section */}
        <section className="section popular-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* Heading title*/}
                <div
                  className="section-heading heading-three mx-auto"
                  data-aos="fade-down"
                >
                  <h2>
                    Most Popular <span>Bikes</span>
                  </h2>
                  <p>
                    Here&apos;s a list of some of the most popular Bikes
                    globally, based on sales and customer preferences
                  </p>
                </div>
                {/* /Heading title */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <div className="img-slider ">
                          {isSliderVisible && (
                            <Slider {...imgslideroption}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike5-slide-01.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike5-slide-02.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike5-slide-03.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/bike/bike5-slide-04.png"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          )}
                        </div>
                        <div className="fav-item justify-content-start">
                          <Link to="#" className="author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-11.jpg"
                              alt="author"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>140 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                Royal Enfield
                              </Link>
                            </h3>
                          </div>
                          <div className="list-km">
                            <span className="km-count">
                              <ImageWithBasePath
                                src="assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.9m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>35 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $110 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={6}
                            onClick={() => handleItemClick(6)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[6] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <div className="img-slider ">
                          <Slider {...imgslideroption}>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike6-slide-01.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike6-slide-02.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike6-slide-03.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike6-slide-02.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                          </Slider>
                        </div>
                        <div className="fav-item justify-content-start">
                          <Link to="#" className="author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-05.jpg"
                              alt="author"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>140 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                Ducati Street fighter
                              </Link>
                            </h3>
                          </div>
                          <div className="list-km">
                            <span className="km-count">
                              <ImageWithBasePath
                                src="assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.9m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>35 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $150 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={7}
                            onClick={() => handleItemClick(7)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[7] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <div className="img-slider ">
                          <Slider {...imgslideroption}>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike7-slide-01.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike7-slide-02.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike7-slide-03.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike7-slide-04.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                          </Slider>
                        </div>
                        <div className="fav-item justify-content-start">
                          <Link to="#" className="author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-06.jpg"
                              alt="author"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <span>180 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                TVS Apache RR 310
                              </Link>
                            </h3>
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
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>35 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $120 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={8}
                            onClick={() => handleItemClick(8)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[8] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <div className="img-slider ">
                          <Slider {...imgslideroption}>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike8-slide-01.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike8-slide-02.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike8-slide-03.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/bike/bike8-slide-04.png"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                            </div>
                          </Slider>
                        </div>
                        <div className="fav-item justify-content-start">
                          <Link to="#" className="author-img">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-12.jpg"
                              alt="author"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>180 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                Kawasaki Ninja 400
                              </Link>
                            </h3>
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
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>41 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $120 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={9}
                            onClick={() => handleItemClick(9)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[9] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bike-bg">
            <ImageWithBasePath
              src="assets/img/bg/bike-bg.png"
              className="img-fluid"
              alt="img"
            />
          </div>
        </section>
        {/* /Popular Section */}
        {/* Quote Section */}
        <section className="quote-section">
          <div className="container">
            <div className="quote-list">
              <ul>
                <li>
                  <ImageWithBasePath
                    src="assets/img/icons/quote-01.svg"
                    className="img-fluid"
                    alt="img"
                  />
                </li>
                <li>
                  <ImageWithBasePath
                    src="assets/img/icons/quote-02.svg"
                    className="img-fluid"
                    alt="img"
                  />
                </li>
                <li>
                  <ImageWithBasePath
                    src="assets/img/icons/quote-03.svg"
                    className="img-fluid"
                    alt="img"
                  />
                </li>
                <li>
                  <ImageWithBasePath
                    src="assets/img/icons/quote-04.svg"
                    className="img-fluid"
                    alt="img"
                  />
                </li>
                <li>
                  <ImageWithBasePath
                    src="assets/img/icons/quote-05.svg"
                    className="img-fluid"
                    alt="img"
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /Quote Section */}
        {/* Destinations Section */}
        <section className="section destination-section">
          <div className="destination-bg">
            <ImageWithBasePath
              src="assets/img/bg/destination-bg-01.png"
              className="img-fluid shape-01"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/destination-bg-02.png"
              className="img-fluid shape-02"
              alt="img"
            />
          </div>
          <div className="container">
            {/* Heading title*/}
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div
                  className="section-heading heading-three mx-auto"
                  data-aos="fade-down"
                >
                  <h2>
                    Featured <span>Destinations</span>
                  </h2>
                  <p>
                    Here&apos;s a list of some of the most popular Bikes
                    globally, based on sales and customer preferences
                  </p>
                </div>
              </div>
            </div>
            {/* /Heading title */}
            <div className="row">
              <div className="col-lg-3 col-sm-6 order-lg-1 order-sm-1">
                <div className="destination-wrap" data-aos="fade-down">
                  <div className="destination-img">
                    <ImageWithBasePath
                      src="assets/img/destination/destination-01.jpg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="destination-content">
                    <h5>Dubai</h5>
                    <p>50 Bikes</p>
                    <Link to="#" className="btn btn-primary">
                      Explore all bikes
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-6 order-lg-2 order-sm-5">
                <div className="destination-wrap" data-aos="fade-down">
                  <div className="destination-img">
                    <ImageWithBasePath
                      src="assets/img/destination/destination-02.jpg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="destination-content">
                    <h5>Antalya</h5>
                    <p>87 Bikes</p>
                    <Link to="#" className="btn btn-primary">
                      Explore all bikes
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 order-lg-3 order-sm-3">
                <div className="destination-wrap" data-aos="fade-down">
                  <div className="destination-img">
                    <ImageWithBasePath
                      src="assets/img/destination/destination-03.jpg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="destination-content">
                    <h5>Honk kong</h5>
                    <p>153 Bikes</p>
                    <Link to="#" className="btn btn-primary">
                      Explore all bikes
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-6 order-lg-4 order-sm-last">
                <div className="destination-wrap" data-aos="fade-down">
                  <div className="destination-img">
                    <ImageWithBasePath
                      src="assets/img/destination/destination-04.jpg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="destination-content">
                    <h5>Paris</h5>
                    <p>146 Bikes</p>
                    <Link to="#" className="btn btn-primary">
                      Explore all bikes
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 order-lg-5 order-sm-2">
                <div className="destination-wrap" data-aos="fade-down">
                  <div className="destination-img">
                    <ImageWithBasePath
                      src="assets/img/destination/destination-05.jpg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="destination-content">
                    <h5>Bangkok</h5>
                    <p>50 Bikes</p>
                    <Link to="#" className="btn btn-primary">
                      Explore all bikes
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 order-lg-6 order-sm-4">
                <div className="destination-wrap" data-aos="fade-down">
                  <div className="destination-img">
                    <ImageWithBasePath
                      src="assets/img/destination/destination-06.jpg"
                      alt="image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="destination-content">
                    <h5>Newyork</h5>
                    <p>140 Bikes</p>
                    <Link to="#" className="btn btn-primary">
                      Explore all bikes
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Destinations Section */}
        {/* Recommended Section */}
        <section className="section recommend-section">
          <div className="container-fluid">
            {/* Heading title*/}
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <div
                  className="section-heading heading-three mx-auto"
                  data-aos="fade-down"
                >
                  <h2>
                    Highly <span>Recommended</span>
                  </h2>
                  <p>
                    Here&apos;s a list of some of the most popular Bikes
                    globally, based on sales and customer preferences
                  </p>
                </div>
              </div>
            </div>
            {/* /Heading title */}
            <div className="row">
              <div className="col-md-12">
                <div className="recommend-slider">
                  <Slider {...recommendslideroption}>
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/bike/bike-01.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>138 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                KTM 1290 Super Duke R EVO
                              </Link>
                            </h3>
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
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>41 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $160 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={10}
                            onClick={() => handleItemClick(10)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[10] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/bike/bike-03.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>112 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                Honda Rebel 300
                              </Link>
                            </h3>
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
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>20 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $150 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={11}
                            onClick={() => handleItemClick(11)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[11] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/bike/bike-02.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>125 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                Kawasaki z900
                              </Link>
                            </h3>
                          </div>
                          <div className="list-km">
                            <span className="km-count">
                              <ImageWithBasePath
                                src="assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.0m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>17 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $180 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={12}
                            onClick={() => handleItemClick(12)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[12] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/bike/bike-01.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>138 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                KTM 1290 Super Duke R EVO
                              </Link>
                            </h3>
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
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>41 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $160 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={10}
                            onClick={() => handleItemClick(10)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[10] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/bike/bike-03.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>112 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                Honda Rebel 300
                              </Link>
                            </h3>
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
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>20 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $150 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={11}
                            onClick={() => handleItemClick(11)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[11] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="listing-item bike-list">
                      <div className="listing-img">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/bike/bike-02.png"
                            className="img-fluid"
                            alt="img"
                          />
                        </Link>
                      </div>
                      <div className="listing-content">
                        <div className="listing-features d-flex justify-content-between">
                          <div className="list-rating">
                            <div className="list-ratings">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                              <span>125 Reviews</span>
                            </div>
                            <h3 className="listing-title">
                              <Link to={routes.listingDetails}>
                                Kawasaki z900
                              </Link>
                            </h3>
                          </div>
                          <div className="list-km">
                            <span className="km-count">
                              <ImageWithBasePath
                                src="assets/img/icons/map-pin.svg"
                                alt="author"
                              />
                              3.0m
                            </span>
                          </div>
                        </div>
                        <div className="listing-details-group">
                          <ul>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-01.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Drum</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-02.svg"
                                  alt="img"
                                />
                              </span>
                              <p>17 Km/L</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-03.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Diesel</p>
                            </li>
                            <li>
                              <span>
                                <ImageWithBasePath
                                  src="assets/img/icons/bike-icon-04.svg"
                                  alt="img"
                                />
                              </span>
                              <p>Tubeless</p>
                            </li>
                          </ul>
                        </div>
                        <div className="listing-button">
                          <div className="listing-price">
                            <h6>
                              $180 <span>/ Day</span>
                            </h6>
                          </div>
                          <div
                            className="d-flex align-items-center"
                            key={12}
                            onClick={() => handleItemClick(12)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${
                                selectedItems[12] ? "selected" : ""
                              }`}
                            >
                              <i className="feather  icon-heart" />
                            </Link>
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              Book Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Recommended Section */}
        {/* FAQ  */}
        <section className="section faq-section-three">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                {/* Heading title*/}
                <div
                  className="section-heading heading-three"
                  data-aos="fade-down"
                >
                  <h2>Frequently Asked Questions</h2>
                  <p>
                    Feel free to customize them further to align with your
                    specific policies
                  </p>
                </div>
                {/* /Heading title */}
                <div className="faq-info">
                  <div className="faq-card" data-aos="fade-down">
                    <h4 className="faq-title">
                      <Link
                        className="collapseds"
                        data-bs-toggle="collapse"
                        to="#faqOne"
                        aria-expanded="true"
                      >
                        How old do I need to be to rent a Bike ?
                      </Link>
                    </h4>
                    <div id="faqOne" className="card-collapse collapse show">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact cars, sedans, SUVs and luxury
                        vehicles. You can browse our selection online or contact
                        us for assistance in choosing the right vehicle for you
                      </p>
                    </div>
                  </div>
                  <div className="faq-card" data-aos="fade-down">
                    <h4 className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqTwo"
                        aria-expanded="false"
                      >
                        What documents do I need to rent a Bike?
                      </Link>
                    </h4>
                    <div id="faqTwo" className="card-collapse collapse">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact cars, sedans, SUVs and luxury
                        vehicles. You can browse our selection online or contact
                        us for assistance in choosing the right vehicle for you
                      </p>
                    </div>
                  </div>
                  <div className="faq-card" data-aos="fade-down">
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
                        including compact cars, sedans, SUVs and luxury
                        vehicles. You can browse our selection online or contact
                        us for assistance in choosing the right vehicle for you
                      </p>
                    </div>
                  </div>
                  <div className="faq-card" data-aos="fade-down">
                    <h4 className="faq-title">
                      <Link
                        className="collapsed"
                        data-bs-toggle="collapse"
                        to="#faqFour"
                        aria-expanded="false"
                      >
                        Can I rent a Bike with a debit card?
                      </Link>
                    </h4>
                    <div id="faqFour" className="card-collapse collapse">
                      <p>
                        We offer a diverse fleet of vehicles to suit every need,
                        including compact cars, sedans, SUVs and luxury
                        vehicles. You can browse our selection online or contact
                        us for assistance in choosing the right vehicle for you
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="customer-content">
                  <p>
                    Overall, car rental counters serve as the primary point of
                    contact for customers to pick up their rental vehicles and
                    complete the necessary paperwork before embarking on their
                    journey. The rental agents are there to assist customers
                    every step of the way and ensure a smooth and seamless
                    rental experience.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="count-box">
                        <span className="counts-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/count-01.svg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="count-info">
                          <h3>
                            <CountUp
                              className="counterUp"
                              end={625}
                              duration={3}
                              separator=","
                            />
                            +
                          </h3>
                          <p>Locations to Pickup</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="count-box">
                        <span className="counts-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/count-02.svg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="count-info">
                          <h3>
                            <CountUp
                              className="counterUp"
                              end={2547}
                              duration={3}
                              separator=","
                            />
                            +
                          </h3>
                          <p>Count of Bikes</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="count-box">
                        <span className="counts-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/count-03.svg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="count-info">
                          <h3>
                            <CountUp
                              className="counterUp"
                              end={15000}
                              duration={3}
                              separator=","
                            />
                          </h3>
                          <p>Total Kilometers</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="count-box">
                        <span className="counts-icon">
                          <ImageWithBasePath
                            src="assets/img/icons/count-04.svg"
                            className="img-fluid"
                            alt="img"
                          />
                        </span>
                        <div className="count-info">
                          <h3>
                            <CountUp
                              className="counterUp"
                              end={16}
                              duration={3}
                              separator=","
                            />
                            +
                          </h3>
                          <p>Happy Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-bg">
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-01.png"
              className="img-fluid shape-01"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/faq-bg-01.png"
              className="img-fluid shape-02"
              alt="img"
            />
            <ImageWithBasePath
              src="assets/img/bg/faq-bg-02.png"
              className="img-fluid shape-03"
              alt="img"
            />
          </div>
        </section>
        {/* /FAQ */}
        {/* Bike Section */}
        <section className="section bike-section">
          <div className="container">
            <div className="bike-wrap">
              <div className="bike-content">
                <h2>Want to add your Bike for rent in Dreams rent</h2>
              </div>
              <div className="bike-btn">
                <Link to={routes.register} className="btn btn-theme">
                  Add your Listing
                </Link>
              </div>
            </div>
          </div>
          <div className="bike-bg">
            <ImageWithBasePath
              className="img-fluid shape-01"
              src="assets/img/bg/ban-bg-05.png"
              alt="Image"
            />
            <ImageWithBasePath
              className="img-fluid shape-02"
              src="assets/img/bg/ban-bg-06.png"
              alt="Image"
            />
            <ImageWithBasePath
              className="img-fluid shape-03"
              src="assets/img/bg/shape-bg.png"
              alt="Image"
            />
            <ImageWithBasePath
              className="img-fluid shape-04"
              src="assets/img/bg/ban-bg-06.png"
              alt="Image"
            />
          </div>
        </section>
        {/* /Bike Section */}
        {/* Pricing Plan */}
        <section className="price-section">
          <div className="container">
            {/* Heading title*/}
            <div
              className="section-heading heading-three mx-auto"
              data-aos="fade-down"
            >
              <h2 className="mx-auto">
                Scrutinize the Optimum Pricing Scheme <span>to Begin</span>.
              </h2>
              <p>
                Pricing plans for businesses at every stage of growth. Try our
                risk-free for 14 days. No credit card required.
              </p>
            </div>
            {/* /Heading title */}
            {/* Plan Selected */}
            <div className="price-tab">
              <ul className="nav">
                <li>
                  <Link
                    to="#"
                    data-bs-toggle="tab"
                    data-bs-target="#month"
                    className="active"
                  >
                    Monthly
                  </Link>
                </li>
                <li>
                  <Link to="#" data-bs-toggle="tab" data-bs-target="#year">
                    Yearly<span>Save 20%</span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* /Plan Selected */}
            <div className="tab-content">
              <div className="tab-pane show active" id="month">
                <div className="row align-items-center justify-content-center">
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    data-aos="fade-down"
                  >
                    <div className="price-wrap">
                      <div className="price-head">
                        <span className="level-badge">Basic </span>
                        <p>
                          For all individuals and starters who want to start
                          with domaining.
                        </p>
                      </div>
                      <div className="price-level">
                        <h3>$15</h3>
                        <p>Per member, per Month</p>
                        <span className="trial-day">
                          Start free 14-day Trial
                        </span>
                      </div>
                      <div className="price-details">
                        <ul>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Access to All Features
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            1k lookups / per month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            10 Monitoring Quota
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            30K API Credits / month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            60 minutes Monitoring intervel
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            20% discount on backorders
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Domain Name Appraisal{" "}
                            <span className="coming-soon">Coming Soon</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    data-aos="fade-down"
                  >
                    <div className="price-wrap active">
                      <div className="price-head">
                        <span className="level-badge bg-green">
                          Commercial{" "}
                        </span>
                        <p>
                          For all individuals and starters who want to start
                          with domaining.
                        </p>
                      </div>
                      <div className="price-level">
                        <h3>$55</h3>
                        <p>Per member, per Month</p>
                        <span className="trial-day bg-primary">
                          Start free 14-day Trial
                        </span>
                      </div>
                      <div className="price-details">
                        <ul>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Access to All Features
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            1k lookups / per month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            10 Monitoring Quota
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            30K API Credits / month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            60 minutes Monitoring intervel
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            20% discount on backorders
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Domain Name Appraisal{" "}
                            <span className="coming-soon">Coming Soon</span>
                          </li>
                        </ul>
                      </div>
                      <div className="feature-text">
                        <span className="bg-danger">Best Value</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    data-aos="fade-down"
                  >
                    <div className="price-wrap">
                      <div className="price-head">
                        <span className="level-badge bg-purple">Premium </span>
                        <p>
                          For all individuals and starters who want to start
                          with domaining.
                        </p>
                      </div>
                      <div className="price-level">
                        <h3>$105</h3>
                        <p>Per member, per Month</p>
                        <span className="trial-day">
                          Start free 14-day Trial
                        </span>
                      </div>
                      <div className="price-details">
                        <ul>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Access to All Features
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            1k lookups / per month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            10 Monitoring Quota
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            30K API Credits / month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            60 minutes Monitoring intervel
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            20% discount on backorders
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Domain Name Appraisal
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="year">
                <div className="row align-items-center justify-content-center">
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    data-aos="fade-down"
                  >
                    <div className="price-wrap">
                      <div className="price-head">
                        <span className="level-badge">Basic </span>
                        <p>
                          For all individuals and starters who want to start
                          with domaining.
                        </p>
                      </div>
                      <div className="price-level">
                        <h3>$55</h3>
                        <p>Per member, per Month</p>
                        <span className="trial-day">
                          Start free 14-day Trial
                        </span>
                      </div>
                      <div className="price-details">
                        <ul>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Access to All Features
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            1k lookups / per month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            10 Monitoring Quota
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            30K API Credits / month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            60 minutes Monitoring intervel
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            20% discount on backorders
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Domain Name Appraisal{" "}
                            <span className="coming-soon">Coming Soon</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    data-aos="fade-down"
                  >
                    <div className="price-wrap active">
                      <div className="price-head">
                        <span className="level-badge bg-green">
                          Commercial{" "}
                        </span>
                        <p>
                          For all individuals and starters who want to start
                          with domaining.
                        </p>
                      </div>
                      <div className="price-level">
                        <h3>$85</h3>
                        <p>Per member, per Month</p>
                        <span className="trial-day bg-primary">
                          Start free 14-day Trial
                        </span>
                      </div>
                      <div className="price-details">
                        <ul>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Access to All Features
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            1k lookups / per month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            10 Monitoring Quota
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            30K API Credits / month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            60 minutes Monitoring intervel
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            20% discount on backorders
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Domain Name Appraisal{" "}
                            <span className="coming-soon">Coming Soon</span>
                          </li>
                        </ul>
                      </div>
                      <div className="feature-text">
                        <span className="bg-danger">Best Value</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-12"
                    data-aos="fade-down"
                  >
                    <div className="price-wrap">
                      <div className="price-head">
                        <span className="level-badge bg-purple">Premium </span>
                        <p>
                          For all individuals and starters who want to start
                          with domaining.
                        </p>
                      </div>
                      <div className="price-level">
                        <h3>$105</h3>
                        <p>Per member, per Month</p>
                        <span className="trial-day">
                          Start free 14-day Trial
                        </span>
                      </div>
                      <div className="price-details">
                        <ul>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Access to All Features
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            1k lookups / per month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            10 Monitoring Quota
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            30K API Credits / month
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            60 minutes Monitoring intervel
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            20% discount on backorders
                          </li>
                          <li>
                            <i className="bx bxs-check-circle" />
                            Domain Name Appraisal
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="price-bg">
              <ImageWithBasePath
                className="img-fluid shape-01"
                src="assets/img/bg/price-bg.png"
                alt="Image"
              />
              <ImageWithBasePath
                src="assets/img/bg/destination-bg-01.png"
                className="img-fluid shape-02"
                alt="img"
              />
              <ImageWithBasePath
                src="assets/img/bg/price-bg-01.png"
                className="img-fluid shape-03"
                alt="img"
              />
            </div>
          </div>
        </section>
        {/* /Pricing Plan */}
        {/* About us Testimonials */}
        <section className="section testimonials-three">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="testimonial-feedback">
                  {/* Heading title*/}
                  <div
                    className="section-heading heading-three"
                    data-aos="fade-down"
                  >
                    <h2 className="title">
                      What Our <br />
                      <span>Customers Say</span>{" "}
                    </h2>
                  </div>
                  {/* /Heading title */}
                  <ImageWithBasePath
                    src="assets/img/testimonial-img.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                  <div className="feedback-item">
                    <div className="feedback-info">
                      <h6>Great</h6>
                      <div className="rate-icon">
                        <span>
                          <i className="bx bxs-star" />
                        </span>
                        <span>
                          <i className="bx bxs-star" />
                        </span>
                        <span>
                          <i className="bx bxs-star" />
                        </span>
                        <span>
                          <i className="bx bxs-star" />
                        </span>
                        <span>
                          <i className="bx bxs-star" />
                        </span>
                      </div>
                      <p>Based on 5,801 Reviews</p>
                    </div>
                    <div className="feedback-user">
                      <h3>
                        <i className="bx bxs-star" />
                        Trustpilot
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="testimonial-wrapper">
                  <Slider
                    {...slideConfig}
                    ref={slider1}
                    className="testimonial-slider"
                    asNavFor={slider2.current || undefined}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="testimonial-wrap">
                        <div className="users-info">
                          <div className="testimonial-name">
                            <h6>{testimonial.name}</h6>
                            <p>{testimonial.location}</p>
                          </div>
                          <div className="users-rating">
                            <div className="rate-icon">
                              <span>
                                <i className="bx bxs-star" />
                              </span>
                              <span>
                                <i className="bx bxs-star" />
                              </span>
                              <span>
                                <i className="bx bxs-star" />
                              </span>
                              <span>
                                <i className="bx bxs-star" />
                              </span>
                              <span>
                                <i className="bx bxs-star" />
                              </span>
                            </div>
                            <p>
                              <i className="bx bxs-check-circle" /> Verified
                            </p>
                          </div>
                        </div>
                        <div className="testimonial-content">
                          <h3>{testimonial.title}</h3>
                          <p>{testimonial.content}</p>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <Slider
                    {...thumbnailConfig}
                    ref={slider2}
                    className="testimonial-thumbnails"
                    asNavFor={slider1.current || undefined}
                  >
                    {thumbnails.map((thumbnail, index) => (
                      <div key={index}>
                        <ImageWithBasePath src={thumbnail.img} alt="image" />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-bg">
            <ImageWithBasePath
              className="img-fluid shape-01"
              src="assets/img/bg/ban-bg-04.png"
              alt="Image"
            />
            <ImageWithBasePath
              src="assets/img/bg/ban-bg-01.png"
              className="img-fluid shape-02"
              alt="img"
            />
          </div>
        </section>
        {/* About us Testimonials */}
        {/* Blog Section */}
        <section className="blog-section bike-news">
          <div className="container">
            {/* Heading title*/}
            <div
              className="section-heading heading-three mx-auto"
              data-aos="fade-down"
            >
              <h2>
                Contemporary news and insights <span>for you</span>
              </h2>
              <p>
                Here`&apos;`s a hypothetical blog post about car rental services
              </p>
            </div>
            {/* /Heading title */}
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-slider nav-center ">
                  <Slider {...imgblogslideroption}>
                    {/* Blog List */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-bike-01.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Unlocking the Freedom of Travel: The Ultimate Guide.
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Are you planning your next adventure but feeling over
                          whelmed by the logistics of transportation...
                        </p>
                        <div className="blog-footer">
                          <p>
                            <i className="bx bx-calendar" />
                            Apr 21, 2024
                          </p>
                          <Link to={routes.blogDetails} className="read-more">
                            Read More
                            <i className="bx bx-right-arrow-alt" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Blog List */}
                    {/* Blog List */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-bike-02.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Tips for a Seamless Rental Experience
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Book your rental car in advance to secure the best
                          rates and availability, especially during...
                        </p>
                        <div className="blog-footer">
                          <p>
                            <i className="bx bx-calendar" />
                            Apr 27, 2024
                          </p>
                          <Link to={routes.blogDetails} className="read-more">
                            Read More
                            <i className="bx bx-right-arrow-alt" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Blog List */}
                    {/* Blog List */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-bike-03.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Embark on Your Next Adventure with Confidence.
                          </Link>
                        </h3>
                        <p className="blog-description">
                          With the freedom and flexibility of car rentals, the
                          world is yours to explore!...
                        </p>
                        <div className="blog-footer">
                          <p>
                            <i className="bx bx-calendar" />
                            May 02, 2024
                          </p>
                          <Link to={routes.blogDetails} className="read-more">
                            Read More
                            <i className="bx bx-right-arrow-alt" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Blog List */}
                    {/* Blog List */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-bike-04.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Exploring the Outdoors: A Guide to Bike Rentals and
                            Adventure
                          </Link>
                        </h3>
                        <p className="blog-description">
                          One of the first steps in planning your biking
                          adventure is selecting the right bike...
                        </p>
                        <div className="blog-footer">
                          <p>
                            <i className="bx bx-calendar" />
                            May 16, 2024
                          </p>
                          <Link to={routes.blogDetails} className="read-more">
                            Read More
                            <i className="bx bx-right-arrow-alt" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Blog List */}
                    {/* Blog List */}
                    <div className="blog grid-blog">
                      <div className="blog-image">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-bike-05.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Ride into Adventure: Exploring Nature`&apos;`s
                            Beauty with Bikes{" "}
                          </Link>
                        </h3>
                        <p className="blog-description">
                          From rugged mountain trails and scenic coastal paths
                          to tranquil forested routes, the great...
                        </p>
                        <div className="blog-footer">
                          <p>
                            <i className="bx bx-calendar" />
                            May 25, 2024
                          </p>
                          <Link to={routes.blogDetails} className="read-more">
                            Read More
                            <i className="bx bx-right-arrow-alt" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* /Blog List */}
                  </Slider>
                </div>
              </div>
            </div>
            <div
              className="view-all-btn text-center aos-init aos-animate"
              data-aos="fade-down"
            >
              <Link to={routes.blogDetails} className="btn btn-secondary">
                View all Blog
              </Link>
            </div>
          </div>
        </section>
        {/* /Blog Section */}
        {/* Best Section */}
        <section className="section rental-section">
          <div className="container">
            <div className="rental-wrap">
              <div className="rental-content">
                <h2>We Make Finding The Right Bike Simple</h2>
                <div className="btn-item">
                  <Link to={routes.listingGrid} className="btn btn-theme">
                    View all Bikes
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="rental-bg">
            <ImageWithBasePath
              className="img-fluid ban-bg"
              src="assets/img/bg/bike-bg.jpg"
              alt="Image"
            />
            <ImageWithBasePath
              className="img-fluid shape-01"
              src="assets/img/bg/ban-bg-05.png"
              alt="Image"
            />
            <ImageWithBasePath
              className="img-fluid shape-02"
              src="assets/img/bg/ban-bg-06.png"
              alt="Image"
            />
            <ImageWithBasePath
              className="img-fluid shape-03"
              src="assets/img/bg/shape-bg.png"
              alt="Image"
            />
            <ImageWithBasePath
              className="img-fluid shape-04"
              src="assets/img/bg/ban-bg-04.png"
              alt="Image"
            />
          </div>
        </section>
        {/* /Best Section */}
      </>
      <FooterThree />
    </div>
  );
};

export default HomeThree;
