import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ImageWithBasePath from "../../../core/data/img/ImageWithBasePath";
import FooterTwo from "./footer-two";
import HeaderTwo from "./header-two";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";

const HomeTwo = () => {
  const routes = all_routes;
  const imgslideroption = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const imgslideroption2 = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const imgslideroption3 = {
    dots: false,
    nav: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
  };
  const yachtsslideroption = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const popularlocationslideroption = {
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <HeaderTwo />
      <>
        {/* Yacht Categories */}
        <section className="yacht-category-sec">
          <div className="sec-bg">
            <ImageWithBasePath
              src="assets/img/bg/yacht-cat-sec-bg-01.png"
              className="anchor-img"
              alt="Img"
            />
            <ImageWithBasePath
              src="assets/img/bg/yacht-cat-sec-bg-02.png"
              className="vector-round"
              alt="Img"
            />
            <ImageWithBasePath
              src="assets/img/bg/yacht-cat-sec-bg-03.png"
              className="design-round"
              alt="Img"
            />
          </div>
          <div className="sec-round-colors">
            <span className="bg-orange round-small" />
            <span className="bg-orange round-small" />
            <span className="bg-dark-blue round-small" />
            <span className="bg-dark-blue round-small" />
          </div>
          <div className="container">
            <div className="banner-yacht-type-slider">
              <Slider {...imgslideroption3}>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-01.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Standard</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-02.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Luxury</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-03.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>50+ Guests</h6>
                </div>
                <div className="slider-card slider-card-active">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-04.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Wedding</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-05.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Birthday</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-06.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>100+ Guests</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-04.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Fishing</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-08.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Party</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-09.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Corporate</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-10.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Community</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-02.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>Luxury</h6>
                </div>
                <div className="slider-card">
                  <div className="banner-slider-icon">
                    <span>
                      <ImageWithBasePath
                        src="assets/img/icons/banner-slider-03.svg"
                        alt="Img"
                      />
                    </span>
                  </div>
                  <h6>50+ Guests</h6>
                </div>
              </Slider>
            </div>
            <div className="section-header-two">
              <h2>Popular Yacht Categories</h2>
              <p>
                Know what you’re looking for? Browse our extensive selection of
                charter yachts from around the world.
              </p>
            </div>
            <div className="row yacht-category-lists">
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-01.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Motor yachts</Link>
                      </h4>
                      <span>30 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-02.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Sailing yachts</Link>
                      </h4>
                      <span>56 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-03.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Yacht gulet</Link>
                      </h4>
                      <span>21 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-04.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Catamaran</Link>
                      </h4>
                      <span>47 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-05.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Fishing yachts</Link>
                      </h4>
                      <span>32 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-06.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Sports Cruisers</Link>
                      </h4>
                      <span>15 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-07.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Displacement Yachts</Link>
                      </h4>
                      <span>75 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-08.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Classic Yachts</Link>
                      </h4>
                      <span>41 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-09.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Flybridge Yachts</Link>
                      </h4>
                      <span>65 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="custom-col">
                <div className="yacht-cat-grid">
                  <div className="yatch-card-img">
                    <Link to={routes.listingGrid}>
                      <ImageWithBasePath
                        src="assets/img/yacht/yacht-10.jpg"
                        className="img-fluid"
                        alt="yacht"
                      />
                    </Link>
                  </div>
                  <div className="card-content d-flex align-items-center justify-content-between">
                    <div>
                      <h4>
                        <Link to={routes.listingGrid}>Hybrid Yachts</Link>
                      </h4>
                      <span>145 Yachts</span>
                    </div>
                    <Link to={routes.listingGrid} className="arrow-right">
                      <i className="bx bx-right-arrow-alt" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="view-more-btn text-center">
                  <Link to={routes.listingGrid} className="btn btn-secondary">
                    View More Categories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Yacht Categories */}
        {/* Renting Yacht  */}
        <section className="renting-yacht-sec">
          <div className="sec-round-colors">
            <span className="bg-orange round-small" />
            <span className="bg-orange round-small" />
            <span className="bg-orange round-small" />
            <span className="bg-dark-blue round-small" />
            <span className="bg-dark-blue round-big" />
            <span className="bg-orange round-big" />
          </div>
          <div className="sec-bg">
            <ImageWithBasePath
              src="assets/img/bg/ship-part-bg-01.png"
              alt="Bg"
            />
          </div>
          <div className="container">
            <div className="section-header-two">
              <h2>Benefits Of Renting Yacht</h2>
              <p>
                Renting a yacht offers numerous benefits for individuals and
                groups looking to experience luxury, relaxation, and adventure
                on the water.
              </p>
            </div>
            <div className="renting-yacht-benifits d-flex align-items-center justify-content-between">
              <ul>
                <li>
                  <span className="benifit-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/benifits-icon-05.svg"
                      alt="icon"
                    />
                  </span>
                  <div className="benifit-contents">
                    <h5>Luxurious Experience</h5>
                    <p>
                      Yacht rental provides a unique and luxurious experience
                      that allows you to explore stunning coastal destinations.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="benifit-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/benifits-icon-04.svg"
                      alt="icon"
                    />
                  </span>
                  <div className="benifit-contents">
                    <h5>Customized Itineraries</h5>
                    <p>
                      Yacht charters offer flexibility and freedom to create
                      customized itineraries based on your interests and
                      preferences.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="benifit-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/benifits-icon-05.svg"
                      alt="icon"
                    />
                  </span>
                  <div className="benifit-contents">
                    <h5>Gourmet Dining and Catering</h5>
                    <p>
                      Many yacht charters offer gourmet dining options and
                      catering services, allowing you to indulge in delicious
                      cuisine.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="yatcht-center-img">
                <span>
                  <ImageWithBasePath
                    src="assets/img/bg/benifits-sec-bg-01.png"
                    className="img-fluid"
                    alt="Img"
                  />
                </span>
                <span className="roung-img-bg" />
              </div>
              <ul>
                <li>
                  <span className="benifit-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/benifits-icon-03.svg"
                      alt="icon"
                    />
                  </span>
                  <div className="benifit-contents">
                    <h5>Privacy and Exclusivity</h5>
                    <p>
                      With a private yacht charter, you have the opportunity to
                      escape the crowds and enjoy intimate moments with your
                      loved ones.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="benifit-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/benifits-icon-02.svg"
                      alt="icon"
                    />
                  </span>
                  <div className="benifit-contents">
                    <h5>Variety of Activities</h5>
                    <p>
                      Yacht rental provides a unique and Yachts offer a wide
                      range of onboard activities and amenities to keep you
                      entertained throughout your charter.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="benifit-icon">
                    <ImageWithBasePath
                      src="assets/img/icons/benifits-icon-01.svg"
                      alt="icon"
                    />
                  </span>
                  <div className="benifit-contents">
                    <h5>Relaxation and Wellness</h5>
                    <p>
                      Yacht charters offer the ultimate relaxation and wellness
                      experience, allowing you to unwind and rejuvenate in
                      tranquil surroundings.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* /Renting Yacht */}
        {/* Top Feature Yacht */}
        <section className="top-features-yachts">
          <div className="sec-bg">
            <ImageWithBasePath
              src="assets/img/bg/yacht-cat-sec-bg-01.png"
              className="anchor-img"
              alt="Img"
            />
            <ImageWithBasePath
              src="assets/img/bg/yacht-cat-sec-bg-03.png"
              className="design-round"
              alt="Img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ship-part-bg-01.png"
              alt="Bg"
            />
          </div>
          <div className="container">
            <div className="sec-title">
              <h4>Select From Professional Charter Companies</h4>
            </div>
            <div className="charter-company-slider">
              <Slider {...imgslideroption}>
                <div className="charter-company-logo">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/charter-company-01.svg"
                      alt="Icon"
                    />
                  </span>
                </div>
                <div className="charter-company-logo">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/charter-company-02.svg"
                      alt="Icon"
                    />
                  </span>
                </div>
                <div className="charter-company-logo">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/charter-company-03.svg"
                      alt="Icon"
                    />
                  </span>
                </div>
                <div className="charter-company-logo">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/charter-company-04.svg"
                      alt="Icon"
                    />
                  </span>
                </div>
                <div className="charter-company-logo">
                  <span>
                    <ImageWithBasePath
                      src="assets/img/icons/charter-company-05.svg"
                      alt="Icon"
                    />
                  </span>
                </div>
              </Slider>
            </div>
            <div className="top-rated-yachts">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="section-header-two">
                    <h2>Featured &amp; Top Rated Yachts</h2>
                    <p>
                      A premier collection of exceptional luxury yachts,
                      professionally staffed and privately owned, yet available
                      for you to experience as your own.
                    </p>
                    <div className="owl-nav slide-nav-1 nav-control" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="top-rated-yachts-slider ">
                    <Slider {...yachtsslideroption}>
                      <div className="top-rated-card">
                        <div className="rated-yacht-img slide-card-images">
                          <div className="image-slider listing-page-slider">
                            <Slider {...imgslideroption2}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-01.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-02.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-03.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-04.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="img-top-ribbon">
                            <span className="ribbon-text bg-danger">
                              Featured
                            </span>
                          </div>
                        </div>
                        <div className="rated-yacht-content">
                          <div className="yacht-content-head">
                            <div className="head-items-left">
                              <h4>
                                <Link to={routes.listingDetails}>
                                  Bavaria 50 Cruiser
                                </Link>
                              </h4>
                              <span className="d-flex align-items-center">
                                <i className="bx bx-map me-2" />
                                Chicago, IL
                              </span>
                            </div>
                            <div className="head-items-right">
                              <div className="rated-star">
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star" />
                              </div>
                              <span className="km-badge">
                                <i className="bx bx-map-pin me-2" />
                                3.2m
                              </span>
                            </div>
                          </div>
                          <div className="yacht-content-body">
                            <ul className="yacht-features-info">
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-01.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  People <span> : 8</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-02.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Length <span> : 4.6m</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-03.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Fuel <span> : Diesel</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-04.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Build <span> : 2024</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-05.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Engine <span> : MTU</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-06.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Cabins <span> :4</span>
                                </h6>
                              </li>
                            </ul>
                          </div>
                          <div className="yacht-content-footer">
                            <p>
                              From <span>$180 </span> /day
                            </p>
                            <div className="yacht-book-btn">
                              <Link
                                to="#"
                                className="yacht-user-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-14.jpg"
                                  alt="Img"
                                />
                              </Link>
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-secondary"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="top-rated-card">
                        <div className="rated-yacht-img slide-card-images">
                          <div className="image-slider listing-page-slider">
                            <Slider {...imgslideroption2}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-05.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-06.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-07.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-08.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="img-top-ribbon">
                            <span className="ribbon-text bg-warning">
                              Top Rated
                            </span>
                          </div>
                        </div>
                        <div className="rated-yacht-content">
                          <div className="yacht-content-head">
                            <div className="head-items-left">
                              <h4>
                                <Link to="#">
                                  My Fair Shaare
                                </Link>
                              </h4>
                              <span className="d-flex align-items-center">
                                <i className="bx bx-map me-2" />
                                Warwick, Cowesst mariana
                              </span>
                            </div>
                            <div className="head-items-right">
                              <div className="rated-star">
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star" />
                              </div>
                              <span className="km-badge">
                                <i className="bx bx-map-pin me-2" />
                                2.2m
                              </span>
                            </div>
                          </div>
                          <div className="yacht-content-body">
                            <ul className="yacht-features-info">
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-01.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  People <span> : 3</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-02.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Length <span> : 5.6m</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-03.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Fuel <span> : Diesel</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-04.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Build <span> : 2023</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-05.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Engine <span> : 57hp</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-06.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Cabins <span> :3</span>
                                </h6>
                              </li>
                            </ul>
                          </div>
                          <div className="yacht-content-footer">
                            <p>
                              From <span>$280 </span> /day
                            </p>
                            <div className="yacht-book-btn">
                              <Link
                                to="#"
                                className="yacht-user-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-15.jpg"
                                  alt="Img"
                                />
                              </Link>
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-secondary"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="top-rated-card">
                        <div className="rated-yacht-img slide-card-images">
                          <div className="image-slider listing-page-slider">
                            <Slider {...imgslideroption2}>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-05.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-06.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-07.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                              <div className="slide-images">
                                <Link to={routes.listingDetails}>
                                  <ImageWithBasePath
                                    src="assets/img/yacht/top-yacht-08.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </Link>
                              </div>
                            </Slider>
                          </div>
                          <div className="img-top-ribbon">
                            <span className="ribbon-text bg-warning">
                              Top Rated
                            </span>
                          </div>
                        </div>
                        <div className="rated-yacht-content">
                          <div className="yacht-content-head">
                            <div className="head-items-left">
                              <h4>
                                <Link to="#">
                                  My Fair Shaare
                                </Link>
                              </h4>
                              <span className="d-flex align-items-center">
                                <i className="bx bx-map me-2" />
                                Warwick, Cowesst mariana
                              </span>
                            </div>
                            <div className="head-items-right">
                              <div className="rated-star">
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star filled" />
                                <i className="bx bxs-star" />
                              </div>
                              <span className="km-badge">
                                <i className="bx bx-map-pin me-2" />
                                2.2m
                              </span>
                            </div>
                          </div>
                          <div className="yacht-content-body">
                            <ul className="yacht-features-info">
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-01.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  People <span> : 3</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-02.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Length <span> : 5.6m</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-03.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Fuel <span> : Diesel</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-04.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Build <span> : 2023</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-05.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Engine <span> : 57hp</span>
                                </h6>
                              </li>
                              <li>
                                <span className="yacht-feature-icon">
                                  <ImageWithBasePath
                                    src="assets/img/icons/yacht-feature-icon-06.svg"
                                    alt="Img"
                                  />
                                </span>
                                <h6>
                                  Cabins <span> :3</span>
                                </h6>
                              </li>
                            </ul>
                          </div>
                          <div className="yacht-content-footer">
                            <p>
                              From <span>$280 </span> /day
                            </p>
                            <div className="yacht-book-btn">
                              <Link
                                to="#"
                                className="yacht-user-img"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-15.jpg"
                                  alt="Img"
                                />
                              </Link>
                              <Link
                                to={routes.listingDetails}
                                className="btn btn-secondary"
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
          </div>
        </section>
        {/* /Top Feature Yacht */}
        {/* Boat Info Steps */}
        <section className="boat-info-steps-sec">
          <div className="sec-round-colors">
            <span className="bg-orange round-small" />
            <span className="bg-orange round-small" />
            <span className="bg-dark-blue round-big" />
            <span className="bg-dark-blue round-small" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="info-steps-card">
                  <div className="hex-hover">
                    <div className="hex d-flex align-items-center justify-content-center">
                      <div className="hexTop" />
                      <div className="hexBottom" />
                      <div className="hex-icon">
                        <i className="bx bx-map" />
                      </div>
                    </div>
                  </div>
                  <div className="steps-content">
                    <span className="step-badge">Step 1</span>
                    <h4>Browse thousands of boats, all around world</h4>
                    <p>
                      Determine the date &amp; location for your Yacht rental.
                      Consider factors such as your travel itinerary,
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-steps-card">
                  <div className="hex-hover">
                    <div className="hex d-flex align-items-center justify-content-center">
                      <div className="hexTop" />
                      <div className="hexBottom" />
                      <div className="hex-icon">
                        <i className="bx bx-chat" />
                      </div>
                    </div>
                  </div>
                  <div className="steps-content">
                    <span className="step-badge">Step 2</span>
                    <h4>Chat with boat owners to customize the perfect trip</h4>
                    <p>
                      Check the availability of your desired type for your
                      chosen dates and location. Ensure that the rental rates.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="info-steps-card">
                  <div className="hex-hover">
                    <div className="hex d-flex align-items-center justify-content-center">
                      <div className="hexTop" />
                      <div className="hexBottom" />
                      <div className="hex-icon">
                        <i className="bx bx-water" />
                      </div>
                    </div>
                  </div>
                  <div className="steps-content">
                    <span className="step-badge">Step 3</span>
                    <h4>Meet your captain and get out the water!</h4>
                    <p>
                      Check the availability of your desired type for your
                      chosen dates <br /> and location.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Boat Info Steps */}
        {/* Poplar Location */}
        <section className="popular-location-sec">
          <div className="sec-round-colors">
            <span className="bg-orange round-small" />
            <span className="bg-orange round-small" />
            <span className="bg-dark-blue round-big" />
            <span className="bg-dark-blue round-small" />
          </div>
          <div className="sec-bg">
            <ImageWithBasePath
              src="assets/img/bg/yacht-cat-sec-bg-02.png"
              className="vector-round"
              alt="Img"
            />
            <ImageWithBasePath
              src="assets/img/bg/ship-part-bg-01.png"
              alt="Bg"
            />
          </div>
          <div className="container">
            <div className="section-header-two">
              <h2>Popular Location</h2>
              <p>
                Most popular worldwide Category due to their reliability,
                affordability, and features.
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="popular-location-slider home-two-slider">
                  <Slider {...popularlocationslideroption}>
                    <div className="popular-location-card">
                      <div className="location-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/destination/popular-location-01.jpg"
                            alt="City Img"
                          />
                        </Link>
                      </div>
                      <div className="location-contents">
                        <div className="location-city-name">
                          <h4>
                            <Link to="#">Dubai</Link>
                          </h4>
                          <span>42 Yachts</span>
                        </div>
                        <Link to="#" className="arrow-right">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                    </div>
                    <div className="popular-location-card">
                      <div className="location-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/destination/popular-location-02.jpg"
                            alt="City Img"
                          />
                        </Link>
                      </div>
                      <div className="location-contents">
                        <div className="location-city-name">
                          <h4>
                            <Link to="#">Bangkok</Link>
                          </h4>
                          <span>50 Yachts</span>
                        </div>
                        <Link to="#" className="arrow-right">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                    </div>
                    <div className="popular-location-card">
                      <div className="location-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/destination/popular-location-03.jpg"
                            alt="City Img"
                          />
                        </Link>
                      </div>
                      <div className="location-contents">
                        <div className="location-city-name">
                          <h4>
                            <Link to="#">Newyork</Link>
                          </h4>
                          <span>78 Yachts</span>
                        </div>
                        <Link to="#" className="arrow-right">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                    </div>
                    <div className="popular-location-card">
                      <div className="location-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/destination/popular-location-04.jpg"
                            alt="City Img"
                          />
                        </Link>
                      </div>
                      <div className="location-contents">
                        <div className="location-city-name">
                          <h4>
                            <Link to="#">Singapore</Link>
                          </h4>
                          <span>124 Yachts</span>
                        </div>
                        <Link to="#" className="arrow-right">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                    </div>
                    <div className="popular-location-card">
                      <div className="location-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/destination/popular-location-05.jpg"
                            alt="City Img"
                          />
                        </Link>
                      </div>
                      <div className="location-contents">
                        <div className="location-city-name">
                          <h4>
                            <Link to="#">Honk kong</Link>
                          </h4>
                          <span>100 Yachts</span>
                        </div>
                        <Link to="#" className="arrow-right">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                    </div>
                    <div className="popular-location-card">
                      <div className="location-img">
                        <Link to="#">
                          <ImageWithBasePath
                            src="assets/img/destination/popular-location-06.jpg"
                            alt="City Img"
                          />
                        </Link>
                      </div>
                      <div className="location-contents">
                        <div className="location-city-name">
                          <h4>
                            <Link to="#">Paris</Link>
                          </h4>
                          <span>110 Yachts</span>
                        </div>
                        <Link to="#" className="arrow-right">
                          <i className="bx bx-right-arrow-alt" />
                        </Link>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Poplar Location */}
        {/* Yacht Offer */}
        <section className="yacht-offer-sec">
          <div className="sec-bg">
            <ImageWithBasePath
              src="assets/img/bg/sec-bg-wave.png"
              className="wave-bottom"
              alt="Bg"
            />
          </div>
          <div className="container">
            <div className="section-header-two">
              <h2>Yacht - Last Minute Offers!</h2>
              <p>
                Most popular worldwide Category due to their reliability,
                affordability, and features.
              </p>
            </div>
            <div className="yacht-list-cards">
              <div className="row">
                <div className="col-xl-6">
                  <div className="top-rated-card">
                    <div className="rated-yacht-img slide-card-images">
                      <div className="yacht-image-slider ">
                        <Slider {...imgslideroption2}>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-01.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-02.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-03.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-04.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="rated-yacht-content">
                      <div className="yacht-content-head">
                        <div className="head-items-left">
                          <h4>
                            <Link to={routes.listingDetails}>
                              Yacht Sun Odyssey 419
                            </Link>
                          </h4>
                          <span className="d-flex align-items-center">
                            <i className="bx bx-map me-2" />
                            Chicago, IL
                          </span>
                        </div>
                        <div className="head-items-right">
                          <div className="rated-star">
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star" />
                          </div>
                          <span className="km-badge">
                            <i className="bx bx-map-pin me-2" />
                            3.2m
                          </span>
                        </div>
                      </div>
                      <div className="yacht-content-body">
                        <ul className="yacht-features-info">
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-01.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              People <span> : 8</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-02.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Length <span> : 4.6m</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-04.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Build <span> : 2024</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-06.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Cabins <span> : 4</span>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="yacht-content-footer">
                        <p>
                          From <span>$180 </span> /day
                        </p>
                        <div className="yacht-book-btn">
                          <Link
                            to="#"
                            className="yacht-user-img"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-14.jpg"
                              alt="Img"
                            />
                          </Link>
                          <Link
                            to={routes.listingDetails}
                            className="btn btn-secondary"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="top-rated-card">
                    <div className="rated-yacht-img slide-card-images">
                      <div className="yacht-image-slider ">
                        <Slider {...imgslideroption2}>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-05.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-06.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-07.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-08.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="rated-yacht-content">
                      <div className="yacht-content-head">
                        <div className="head-items-left">
                          <h4>
                            <Link to={routes.listingDetails}>
                              Bavaria Cruiser | Oceanos
                            </Link>
                          </h4>
                          <span className="d-flex align-items-center">
                            <i className="bx bx-map me-2" />
                            Miami beach, Miami
                          </span>
                        </div>
                        <div className="head-items-right">
                          <div className="rated-star">
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star" />
                          </div>
                          <span className="km-badge">
                            <i className="bx bx-map-pin me-2" />
                            3.2m
                          </span>
                        </div>
                      </div>
                      <div className="yacht-content-body">
                        <ul className="yacht-features-info">
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-01.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              People <span> : 4</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-02.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Length <span> : 2.6m</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-04.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Build <span> : 2023</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-06.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Cabins <span> : 8</span>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="yacht-content-footer">
                        <p>
                          From <span>$150 </span> /day
                        </p>
                        <div className="yacht-book-btn">
                          <Link
                            to="#"
                            className="yacht-user-img"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-15.jpg"
                              alt="Img"
                            />
                          </Link>
                          <Link
                            to={routes.listingDetails}
                            className="btn btn-secondary"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="top-rated-card">
                    <div className="rated-yacht-img slide-card-images">
                      <div className="yacht-image-slider ">
                        <Slider {...imgslideroption2}>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-09.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-10.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-12.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-13.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="rated-yacht-content">
                      <div className="yacht-content-head">
                        <div className="head-items-left">
                          <h4>
                            <Link to={routes.listingDetails}>
                              Sailing yacht Dufour
                            </Link>
                          </h4>
                          <span className="d-flex align-items-center">
                            <i className="bx bx-map me-2" />
                            Key West, harbour
                          </span>
                        </div>
                        <div className="head-items-right">
                          <div className="rated-star">
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star" />
                          </div>
                          <span className="km-badge">
                            <i className="bx bx-map-pin me-2" />
                            7.1m
                          </span>
                        </div>
                      </div>
                      <div className="yacht-content-body">
                        <ul className="yacht-features-info">
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-01.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              People <span> : 2</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-02.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Length <span> : 4.6m</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-04.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Build <span> : 2023</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-06.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Cabins <span> : 3</span>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="yacht-content-footer">
                        <p>
                          From <span>$410 </span> /day
                        </p>
                        <div className="yacht-book-btn">
                          <Link
                            to="#"
                            className="yacht-user-img"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-13.jpg"
                              alt="Img"
                            />
                          </Link>
                          <Link
                            to={routes.listingDetails}
                            className="btn btn-secondary"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="top-rated-card">
                    <div className="rated-yacht-img slide-card-images">
                      <div className="yacht-image-slider ">
                        <Slider {...imgslideroption2}>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-11.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-14.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-15.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                          <div className="slide-images">
                            <Link to={routes.listingDetails}>
                              <ImageWithBasePath
                                src="assets/img/yacht/boat-16.jpg"
                                className="img-fluid"
                                alt="img"
                              />
                            </Link>
                          </div>
                        </Slider>
                      </div>
                    </div>
                    <div className="rated-yacht-content">
                      <div className="yacht-content-head">
                        <div className="head-items-left">
                          <h4>
                            <Link to={routes.listingDetails}>
                              Beneteau Oceanis 41.1
                            </Link>
                          </h4>
                          <span className="d-flex align-items-center">
                            <i className="bx bx-map me-2" />
                            Annopolis, Mariana
                          </span>
                        </div>
                        <div className="head-items-right">
                          <div className="rated-star">
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star filled" />
                            <i className="bx bxs-star" />
                          </div>
                          <span className="km-badge">
                            <i className="bx bx-map-pin me-2" />
                            7.1m
                          </span>
                        </div>
                      </div>
                      <div className="yacht-content-body">
                        <ul className="yacht-features-info">
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-01.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              People <span> : 3</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-02.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Length <span> : 5.6m</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-04.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Build <span> : 2024</span>
                            </h6>
                          </li>
                          <li>
                            <span className="yacht-feature-icon">
                              <ImageWithBasePath
                                src="assets/img/icons/yacht-feature-icon-06.svg"
                                alt="Img"
                              />
                            </span>
                            <h6>
                              Cabins <span> : 4</span>
                            </h6>
                          </li>
                        </ul>
                      </div>
                      <div className="yacht-content-footer">
                        <p>
                          From <span>$680 </span> /day
                        </p>
                        <div className="yacht-book-btn">
                          <Link
                            to="#"
                            className="yacht-user-img"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-13.jpg"
                              alt="Img"
                            />
                          </Link>
                          <Link
                            to={routes.listingDetails}
                            className="btn btn-secondary"
                          >
                            Book Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="view-more-btn text-center">
                    <Link to={routes.listingGrid} className="btn btn-secondary">
                      View all Yachts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Yacht Offer */}
        {/* More Boats Info */}
        <section className="more-boats-info-sec">
          <div className="container-fluid">
            <div className="sec-bottom-info">
              <div className="row bottom-text-row">
                <div className="col-xl-3 col-lg-6">
                  <div className="bottom-ship-info-card">
                    <div className="hover-ship-info w-100">
                      <h4>Classic Dancer premium A/C Boat rental</h4>
                      <div className="address-info">
                        <span>
                          <i className="bx bx-map" />
                          Hulbert, MI
                        </span>
                        <div className="rated-star">
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star" />
                          <span>55 Reviews</span>
                        </div>
                      </div>
                      <ul className="ship-features">
                        <li>Cabins : 4</li>
                        <li>People : 8</li>
                        <li>Length : 4.6</li>
                      </ul>
                      <div className="ship-pricing">
                        <h5>
                          From <span> $180 </span> /day
                        </h5>
                        <Link
                          to={routes.listingDetails}
                          className="btn btn-primary btn-buy"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="bottom-ship-info-card">
                    <div className="hover-ship-info w-100">
                      <h4>
                        Exclusive `&quot;`Classic Paradise`&quot;` Premium
                        Vessel
                      </h4>
                      <div className="address-info">
                        <span>
                          <i className="bx bx-map" />
                          Miami, FL
                        </span>
                        <div className="rated-star">
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star" />
                          <span>55 Reviews</span>
                        </div>
                      </div>
                      <ul className="ship-features">
                        <li>Cabins : 4</li>
                        <li>People : 8</li>
                        <li>Length : 4.6</li>
                      </ul>
                      <div className="ship-pricing">
                        <h5>
                          From <span> $180 </span> /day
                        </h5>
                        <Link
                          to={routes.listingDetails}
                          className="btn btn-primary btn-buy"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="bottom-ship-info-card">
                    <div className="hover-ship-info w-100">
                      <h4>Explore the water in Style: Exclusive Houseboat</h4>
                      <div className="address-info">
                        <span>
                          <i className="bx bx-map" />
                          Poug, NY
                        </span>
                        <div className="rated-star">
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star" />
                          <span>55 Reviews</span>
                        </div>
                      </div>
                      <ul className="ship-features">
                        <li>Cabins : 4</li>
                        <li>People : 8</li>
                        <li>Length : 4.6</li>
                      </ul>
                      <div className="ship-pricing">
                        <h5>
                          From <span> $180 </span> /day
                        </h5>
                        <Link
                          to={routes.listingDetails}
                          className="btn btn-primary btn-buy"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="bottom-ship-info-card">
                    <div className="hover-ship-info w-100">
                      <h4>2022 Sea Doo Pontoon for Exciting Adventure</h4>
                      <div className="address-info">
                        <span>
                          <i className="bx bx-map" />
                          Heflin, AL
                        </span>
                        <div className="rated-star">
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star filled" />
                          <i className="bx bxs-star" />
                          <span>55 Reviews</span>
                        </div>
                      </div>
                      <ul className="ship-features">
                        <li>Cabins : 4</li>
                        <li>People : 8</li>
                        <li>Length : 4.6</li>
                      </ul>
                      <div className="ship-pricing">
                        <h5>
                          From <span> $180 </span> /day
                        </h5>
                        <Link
                          to={routes.listingDetails}
                          className="btn btn-primary btn-buy"
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
        </section>
        {/* /More Boats Info */}
        {/* Boat marketplace */}
        <section className="boats-marketplace-sec">
          <div className="sec-round-colors">
            <span className="bg-orange round-small" />
            <span className="bg-dark-blue round-small" />
            <span className="bg-dark-blue round-small" />
            <span className="bg-dark-blue round-big" />
          </div>
          <div className="sec-bg">
            <ImageWithBasePath
              src="assets/img/bg/dotted-round-bg.png"
              alt="Bg"
            />
            <ImageWithBasePath src="assets/img/bg/anchor-img.png" alt="Bg" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="sec-col-left-imgs">
                  <span className="sec-left-one">
                    <ImageWithBasePath
                      src="assets/img/bg/sec-modal-img-01.jpg"
                      className="img-fluid"
                      alt="Img"
                    />
                  </span>
                  <span className="sec-left-two">
                    <ImageWithBasePath
                      src="assets/img/bg/sec-modal-img-02.jpg"
                      className="img-fluid"
                      alt="Img"
                    />
                  </span>
                  <div className="experience-info">
                    <h5>
                      15+{" "}
                      <span>
                        Years of <br /> Experience
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="section-header-two">
                  <h2>
                    Providing a large fleet of Boats marketplace for a perfect
                    and dreamy experience
                  </h2>
                  <h4>
                    Know what you looking for? Browse our extensive select of
                    charter yachts from around the world.
                  </h4>
                  <p>
                    Find and book your dream yacht through Floaty, the world’s
                    leading luxury yacht charter comparison site. View all
                    superyachts available to rent, get expert advice from our
                    comprehensive destination guides and be inspired by our
                    bespoke superyacht itineraries.
                  </p>
                  <Link
                    to={routes.listingDetails}
                    className="btn btn-primary d-flex align-items-center"
                  >
                    <i className="bx bx-bar-chart me-2" />
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="yacht-owner-card">
              <div className="sec-bg">
                <ImageWithBasePath
                  src="assets/img/bg/sec-bg-wave.png"
                  alt="Img"
                />
              </div>
              <div className="yacht-owner-title">
                <h3>Are you a Yacht Owner ?</h3>
                <p>List your boat on Boataround and earn money.</p>
                <Link to="#" className="btn btn-primary">
                  Get Started
                </Link>
              </div>
              <div className="yacht-owner-img">
                <ImageWithBasePath
                  src="assets/img/bg/yacht-owner-bg-01.png"
                  alt="Img"
                />
              </div>
            </div>
          </div>
        </section>
        {/* /Boat marketplace */}
        {/* Client Review */}
        <section className="our-client-review-sec">
          <div className="sec-bg">
            <ImageWithBasePath
              src="assets/img/bg/ship-part-bg-01.png"
              alt="Bg"
            />
          </div>
          <div className="sec-round-colors">
            <span className="bg-orange round-small" />
          </div>
          <div className="container">
            <div className="section-header-two">
              <h2>What Our Clients Speak’s</h2>
              <p>Discover what our customers have think about us</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="client-review-card flex-fill">
                  <div className="client-review-content">
                    <div className="client-img">
                      <Link to="#" className="img-avatar">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-16.jpg"
                          alt="Img"
                        />
                      </Link>
                      <p>
                        The crew went above and beyond to ensure that every
                        detail was perfect, from the gourmet dining experience
                        to the sunset cruise along the coast. It was truly a
                        dream come true, and we can`&quot;`t wait to do it
                        again!
                      </p>
                      <h5>
                        <Link to="#">Rabien Ustoc</Link>
                      </h5>
                      <span>Newyork, USA</span>
                      <div className="quataion-mark">
                        <ImageWithBasePath
                          src="assets/img/icons/quatation-mark.svg"
                          className="img-fluid"
                          alt="Img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="client-review-card flex-fill">
                  <div className="client-review-content">
                    <div className="client-img">
                      <Link to="#" className="img-avatar">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-17.jpg"
                          alt="Img"
                        />
                      </Link>
                      <p>
                        Our family vacation with Seaside Yacht Rentals was
                        simply spectacular! Renting a yacht was a new experience
                        for us, and it exceeded all our expectations. The kids
                        had a blast exploring the coastline.
                      </p>
                      <h5>
                        <Link to="#">Adrian Tres</Link>
                      </h5>
                      <span>Newyork, USA</span>
                      <div className="quataion-mark">
                        <ImageWithBasePath
                          src="assets/img/icons/quatation-mark.svg"
                          className="img-fluid"
                          alt="Img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 d-flex">
                <div className="client-review-card flex-fill">
                  <div className="client-review-content">
                    <div className="client-img">
                      <Link to="#" className="img-avatar">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-18.jpg"
                          alt="Img"
                        />
                      </Link>
                      <p>
                        Our weekend yacht rental with Ocean Escape Charters was
                        an absolute blast! We wanted to plan a memorable getaway
                        with our friends, and chartering a yacht seemed like the
                        perfect idea.
                      </p>
                      <h5>
                        <Link to="#">Mariana Fauzel</Link>
                      </h5>
                      <span>Newyork, USA</span>
                      <div className="quataion-mark">
                        <ImageWithBasePath
                          src="assets/img/icons/quatation-mark.svg"
                          className="img-fluid"
                          alt="Img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="view-all text-center">
                  <Link to={routes.testimonial} className="btn btn-secondary">
                    View all Testimonails
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Client Review */}
        {/* FAQ */}
        <section className="faq-sec-two">
          <div className="sec-round-colors">
            <span className="bg-orange round-small" />
            <span className="bg-orange round-small" />
            <span className="bg-dark-blue round-small" />
            <span className="bg-dark-blue round-big" />
          </div>
          <div className="sec-bg">
            <ImageWithBasePath src="assets/img/bg/anchor-img.png" alt="Bg" />
            <ImageWithBasePath
              src="assets/img/bg/ship-part-bg-02.png"
              alt="Bg"
            />
            <ImageWithBasePath
              src="assets/img/bg/ship-part-bg-03.png"
              alt="Bg"
            />
            <ImageWithBasePath src="assets/img/bg/sec-bg-wave.png" alt="Bg" />
          </div>
          <div className="container">
            <div className="counter-group counter-group-two">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12 d-flex">
                  <div className="count-group flex-fill">
                    <div className="customer-count d-flex align-items-center">
                      <div className="count-img">
                        <ImageWithBasePath
                          src="assets/img/icons/counter-icon-01.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="count-content">
                        <h4>
                          <CountUp
                            className="counterUp"
                            end={2447}
                            duration={3}
                            separator=","
                          />
                          +
                        </h4>
                        <p>Count of Yachts</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex">
                  <div className="count-group flex-fill">
                    <div className="customer-count d-flex align-items-center">
                      <div className="count-img">
                        <ImageWithBasePath
                          src="assets/img/icons/counter-icon-02.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="count-content">
                        <h4>
                          <span className="counterUp">16</span>k
                        </h4>
                        <p>Happy Customers</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex">
                  <div className="count-group flex-fill">
                    <div className="customer-count d-flex align-items-center">
                      <div className="count-img">
                        <ImageWithBasePath
                          src="assets/img/icons/counter-icon-03.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="count-content">
                        <h4>
                          <CountUp
                            className="counterUp"
                            end={15000}
                            duration={3}
                            separator=","
                          />
                        </h4>
                        <p>Total Nauticles</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 d-flex">
                  <div className="count-group flex-fill">
                    <div className="customer-count d-flex align-items-center">
                      <div className="count-img">
                        <ImageWithBasePath
                          src="assets/img/icons/counter-icon-04.svg"
                          alt="Icon"
                        />
                      </div>
                      <div className="count-content">
                        <h4>
                          <CountUp
                            className="counterUp"
                            end={5000}
                            duration={3}
                            separator=","
                          />
                          +
                        </h4>
                        <p>Booking Completed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="faq-items">
              <div className="section-header-two">
                <h2>Frequently Asked Questions</h2>
                <p>
                  Feel free to customize them further to align with your
                  specific policies
                </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="faq-main-items" id="faq-details">
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <Link
                          to="#"
                          className="accordion-button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What documents do I need to rent a Yacht?
                        </Link>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              We offer a diverse fleet of vehicles to suit every
                              need, including compact yachts. You can browse our
                              selection online or contact us for assistance in
                              choosing the right vehicle for you
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <Link
                          to="#"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          What types of Yacht’s are available for rent?
                        </Link>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              We offer a diverse fleet of vehicles to suit every
                              need, including compact yachts. You can browse our
                              selection online or contact us for assistance in
                              choosing the right vehicle for you
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <Link
                          to="#"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Can I rent a yacht for more than one week?
                        </Link>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              We offer a diverse fleet of vehicles to suit every
                              need, including compact yachts. You can browse our
                              selection online or contact us for assistance in
                              choosing the right vehicle for you
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFour">
                        <Link
                          to="#"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          How old do I need to be to rent a Yacht ?
                        </Link>
                      </h2>
                      <div
                        id="collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              We offer a diverse fleet of vehicles to suit every
                              need, including compact yachts. You can browse our
                              selection online or contact us for assistance in
                              choosing the right vehicle for you
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                    {/* FAQ Item */}
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingFive">
                        <Link
                          to="#"
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          Can I rent a Yacht with a debit card?
                        </Link>
                      </h2>
                      <div
                        id="collapseFive"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#faq-details"
                      >
                        <div className="accordion-body">
                          <div className="accordion-content">
                            <p>
                              We offer a diverse fleet of vehicles to suit every
                              need, including compact yachts. You can browse our
                              selection online or contact us for assistance in
                              choosing the right vehicle for you
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /FAQ Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /FAQ */}
        {/* Seasonal Special */}
        <section className="seasonal-special-sec">
          <div className="container">
            <div className="sec-title">
              <h2>Yacht Charter Seasonal Specials</h2>
              <p>
                Experience the ultimate in luxury and adventure with our yacht
                rental services.
              </p>
              <div className="sec-btns">
                <Link to={routes.login} className="btn btn-dark-blue">
                  Get Started
                </Link>
                <Link
                  to={routes.listingDetails}
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="bx bx-bar-chart me-2" />
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* /Seasonal Special */}
        {/* News & Insights */}
        <section className="news-insights-sec">
          <div className="sec-round-colors">
            <span className="bg-orange round-small" />
            <span className="bg-orange round-small" />
            <span className="bg-orange round-small" />
            <span className="bg-dark-blue round-small" />
            <span className="bg-dark-blue round-big" />
            <span className="bg-dark-blue round-big" />
          </div>
          <div className="sec-bg">
            <ImageWithBasePath
              src="assets/img/bg/ship-part-bg-01.png"
              alt="Img"
            />
          </div>
          <div className="container">
            <div className="section-header-two">
              <h2>News &amp; Insights For You</h2>
              <p>
                This blog post provides valuable insights into the benefits of
                yacht rentals and offers practical tips for planning the perfect
                charter.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="article-grid-card">
                  <div className="article-img">
                    <Link to={routes.blogGrid}>
                      <ImageWithBasePath
                        src="assets/img/blog/article-01.jpg"
                        className="img-fluid"
                        alt="Img"
                      />
                    </Link>
                    <span className="date-info">
                      <i className="bx bx-calendar me-2" />
                      Apr 21, 2024
                    </span>
                  </div>
                  <div className="user-head">
                    <Link to="#" className="img-avatar">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-14.jpg"
                        alt="Img"
                      />
                      By Sanax
                    </Link>
                    <div className="user-head-right">
                      <span className="me-3">
                        <i className="bx bx-comment-detail me-2" />
                        25 Comments
                      </span>
                      <span>
                        <i className="bx bx-like me-2" />
                        25 Likes
                      </span>
                    </div>
                  </div>
                  <div className="article-title">
                    <h4>
                      <Link to={routes.blogGrid}>
                        The Ultimate Guide to Yacht Rentals: Experience Luxury
                      </Link>
                    </h4>
                    <p>
                      Are you dreaming of a vacation where luxury meets
                      adventure? Look no further
                    </p>
                    <Link to={routes.blogDetails} className="read-more">
                      Read More <i className="bx bx-right-arrow-alt ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="article-grid-card">
                  <div className="article-img">
                    <Link to={routes.blogGrid}>
                      <ImageWithBasePath
                        src="assets/img/blog/article-02.jpg"
                        className="img-fluid"
                        alt="Img"
                      />
                    </Link>
                    <span className="date-info">
                      <i className="bx bx-calendar me-2" />
                      Apr 25, 2024
                    </span>
                  </div>
                  <div className="user-head">
                    <Link to="#" className="img-avatar">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-15.jpg"
                        alt="Img"
                      />
                      By Adrian
                    </Link>
                    <div className="user-head-right">
                      <span className="me-3">
                        <i className="bx bx-comment-detail me-2" />
                        25 Comments
                      </span>
                      <span>
                        <i className="bx bx-like me-2" />
                        25 Likes
                      </span>
                    </div>
                  </div>
                  <div className="article-title">
                    <h4>
                      <Link to={routes.blogGrid}>
                        Planning Your Yacht Charter this Summer{" "}
                      </Link>
                    </h4>
                    <p>
                      Start planning your yacht charter today and experience the
                      magic of luxury travel....
                    </p>
                    <Link to={routes.blogDetails} className="read-more">
                      Read More <i className="bx bx-right-arrow-alt ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="article-grid-card">
                  <div className="article-img">
                    <Link to={routes.blogGrid}>
                      <ImageWithBasePath
                        src="assets/img/blog/article-03.jpg"
                        className="img-fluid"
                        alt="Img"
                      />
                    </Link>
                    <span className="date-info">
                      <i className="bx bx-calendar me-2" />
                      Apr 30, 2024
                    </span>
                  </div>
                  <div className="user-head">
                    <Link to="#" className="img-avatar">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-16.jpg"
                        alt="Img"
                      />
                      By Hendrita
                    </Link>
                    <div className="user-head-right">
                      <span className="me-3">
                        <i className="bx bx-comment-detail me-2" />
                        25 Comments
                      </span>
                      <span>
                        <i className="bx bx-like me-2" />
                        25 Likes
                      </span>
                    </div>
                  </div>
                  <div className="article-title">
                    <h4>
                      <Link to={routes.blogGrid}>
                        Experience the Magic of Yacht Rentals in your Location
                      </Link>
                    </h4>
                    <p>
                      Whether you`&quot;`re cruising the Caribbean, exploring
                      the Mediterranean, or discovering the...
                    </p>
                    <Link to={routes.blogDetails} className="read-more">
                      Read More <i className="bx bx-right-arrow-alt ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="view-more text-center">
                  <Link to={routes.blogGrid} className="btn btn-secondary">
                    View all Articles
                  </Link>
                </div>
              </div>
            </div>
            <div className="yacht-owner-card party-rental-yacht">
              <div className="sec-bg">
                <ImageWithBasePath
                  src="assets/img/bg/sec-bg-wave.png"
                  alt="Img"
                />
              </div>
              <div className="row">
                <div className="col-md-4" />
                <div className="col-md-8">
                  <div className="yacht-owner-title">
                    <h3>Special Offers on Party rental Yachts!!!</h3>
                    <p>View all the yachts under the Offer</p>
                    <Link
                      to={routes.listingDetails}
                      className="btn btn-primary"
                    >
                      View Yachts
                    </Link>
                  </div>
                </div>
              </div>
              <div className="yacht-owner-img">
                <ImageWithBasePath
                  src="assets/img/bg/yacht-owner-bg-02.png"
                  alt="Img"
                />
              </div>
            </div>
          </div>
        </section>
        {/* /News & Insights */}
      </>
      <FooterTwo />
    </div>
  );
};

export default HomeTwo;
