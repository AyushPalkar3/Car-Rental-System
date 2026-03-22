import { useEffect, useRef, useState } from "react";
import Breadcrumbs from "../common/breadcrumbs";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import { all_routes } from "../../router/all_routes";
import { Dropdown } from "primereact/dropdown";
import { TimePicker } from "antd";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { carAPI } from "../../api/user/car.api";
import { bookingAPI } from "../../api/user/booking.api";
import { useDispatch } from "react-redux";
import { setBookingCar } from "../booking/checkoutSlice";

import {
  type AvailabilityBlock,
  classifyDayCalendarStatus,
} from "../../utils/bookingAvailability";
import {
  BOOKING_CALENDAR_CELL_STYLES,
  BookingCalendarLegend,
} from "./booking-calendar-legend";

function MiniBookingCalendar({ blocks }: { blocks: AvailabilityBlock[] }) {
  const [cursor, setCursor] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });

  const y = cursor.getFullYear();
  const m = cursor.getMonth();
  const firstWeekday = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const weekdayLabels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const now = new Date();
  const isToday = (day: number) =>
    day === now.getDate() &&
    m === now.getMonth() &&
    y === now.getFullYear();

  return (
    <div className="avail-cal">
      <div className="avail-cal__head">
        <button
          type="button"
          className="avail-cal__nav"
          onClick={() => setCursor(new Date(y, m - 1, 1))}
          aria-label="Previous month"
        >
          ‹
        </button>
        <div className="avail-cal__title-wrap">
          <span className="avail-cal__title">
            {cursor.toLocaleString(undefined, { month: "long", year: "numeric" })}
          </span>
          <span className="avail-cal__title-accent" aria-hidden />
        </div>
        <button
          type="button"
          className="avail-cal__nav"
          onClick={() => setCursor(new Date(y, m + 1, 1))}
          aria-label="Next month"
        >
          ›
        </button>
      </div>

      <div className="avail-cal__body">
        <div className="avail-cal__grid">
          {weekdayLabels.map((w) => (
            <div key={w} className="avail-cal__weekday">
              {w}
            </div>
          ))}
          {cells.map((day, idx) => {
            if (day === null) {
              return <div key={`e-${idx}`} />;
            }
            const cellDate = new Date(y, m, day);
            const status = classifyDayCalendarStatus(cellDate, blocks);
            const st = BOOKING_CALENDAR_CELL_STYLES[status];
            const ariaHint =
              status === "available"
                ? "available"
                : status === "unavailable_booked"
                  ? "unavailable, booked"
                  : status === "unavailable_blocked"
                    ? "unavailable, blocked"
                    : "unavailable, buffer";
            const today = isToday(day);
            return (
              <div
                key={day}
                className={`avail-cal__day${today ? " avail-cal__day--today" : ""}`}
                style={{
                  background: st.bg,
                  color: st.color,
                }}
                aria-label={`${day}, ${ariaHint}${today ? ", today" : ""}`}
              >
                {day}
              </div>
            );
          })}
        </div>
        <BookingCalendarLegend embedded className="mt-3 pt-3" />
      </div>
    </div>
  );
}

const listingDetails = () => {
  const { id } = useParams();
  const routes = all_routes;
  const navigate = useNavigate();
  const [date1, setDate1] = useState<any>();
  const bigImgSliderRef = useRef<Slider | null>(null);
  const thumbnailSliderRef = useRef<Slider | null>(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocation1, setSelectedLocation1] = useState(null);
  const [date2, setDate2] = useState<any>();
  const [date3, setDate3] = useState<any>();
  const [car, setCar] = useState<any>(null);
  const [isLoading, setLoading] = useState(false)
  const [priceId, setPriceId] = useState();
  const dispatch:any = useDispatch();

  
  

  const types = [
    { name: " Newyork Office - 78, 10th street Laplace USA" },
    { name: "Newyork Office - 12, 5th street USA" },
  ];
  const Location = [
    { name: " Newyork Office - 78, 10th street Laplace USA" },
    { name: "Newyork Office - 12, 5th street USA" },
  ];



  const fetchCar = async (id: any) => {
    try {
      setLoading(true);
      const res = await carAPI.getCar(id);
      setCar(res.data);
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }
  }


  const onBooking = async () => {
    try {
      console.log("Click on booking", car)
      dispatch(setBookingCar(car));
      navigate(routes.bookingCheckout);
    }
    catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    if (!id) return;
    console.log(id)
    fetchCar(id)
  }, [id])

  const [selectedItems, setSelectedItems] = useState(Array(10).fill(false));
  const handleItemClick = (index: number) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedSelectedItems = [...prevSelectedItems];
      updatedSelectedItems[index] = !updatedSelectedItems[index];
      return updatedSelectedItems;
    });
  };

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      thumb: "assets/img/gallery/gallery-thumb-01.jpg",
      big: "/src/assets/img/gallery/gallery-big-01.jpg",
    },
    {
      thumb: "assets/img/gallery/gallery-thumb-02.jpg",
      big: "/src/assets/img/gallery/gallery-big-02.jpg",
    },
    {
      thumb: "assets/img/gallery/gallery-thumb-03.jpg",
      big: "/src/assets/img/gallery/gallery-big-03.jpg",
    },
    {
      thumb: "assets/img/gallery/gallery-thumb-04.jpg",
      big: "/src/assets/img/gallery/gallery-big-04.jpg",
    },
  ];

  const settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
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

  useEffect(() => {
    if (bigImgSliderRef.current && thumbnailSliderRef.current) {
      bigImgSliderRef.current.slickGoTo?.(0);
      thumbnailSliderRef.current.slickGoTo?.(0);
    }
  }, []);
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  const openLightbox = (index: any) => {
    setCurrentIndex(index);
    setOpen(true);
  };
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const settings1 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: nav2 || undefined, // Link to the second slider
    ref: (slider: any) => (sliderRef1.current = slider), // Assign the slider ref

  };

  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: nav1 || undefined, // Link to the first slider
    ref: (slider: any) => (sliderRef2.current = slider), // Assign the slider ref

  };


  return (
    <div className="main-wrapper">
      {/* <Breadcrumbs title="Chevrolet Camaro" subtitle="Listings" /> */}
      <div className="breadcrumb-bar"></div>
      <>
        {/* Detail Page Head*/}
        <section className="product-detail-head">
          <div className="container">
            <div className="detail-page-head">
              <div className="detail-headings">
                <div className="star-rated">
                  <ul className="list-rating">
                    <li>
                      <div className="car-brand">
                        <span>
                          <ImageWithBasePath
                            src="assets/img/icons/car-icon.svg"
                            alt="img"
                          />
                        </span>
                        Sedan
                      </div>
                    </li>
                    <li>
                      <span className="year">2023</span>
                    </li>
                    <li className="ratings">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <span className="d-inline-block average-list-rating">
                        (5.0)
                      </span>
                    </li>
                  </ul>
                  <div className="camaro-info">
                    <h3>Tata Nexon</h3>
                    {/* <div className="camaro-location">
                      <div className="camaro-location-inner">
                        <i className="bx bx-map" />
                        <span>Location : Miami St, Destin, FL 32550, USA </span>
                      </div>
                      <div className="camaro-location-inner">
                        <i className="bx bx-show" />
                        <span>Views : 250 </span>
                      </div>
                      <div className="camaro-location-inner">
                        <i className="bx bx-car" />
                        <span>Views : Listed on: 01 Jan, 2024 </span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="details-btn">
                <span className="total-badge">
                  <i className="bx bx-calendar-edit" />
                  Total Booking : 300
                </span>

              </div>
            </div>
          </div>
        </section>
        {/* /Detail Page Head*/}
      </>

      <section className="section product-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="detail-product">
                <div className="pro-info">
                  {/* <div className="pro-badge">

                    <Link to="#" className="fav-icon">
                      <i className="fa-regular fa-heart" />

                    </Link>
              
                  </div> */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "20px",
                        width: "20px",
                        borderRadius: "50%",
                        background: car?.hexCode,
                        cursor: "pointer",
                        boxShadow: `0 0 0 4px ${car?.hexCode}55, 0 6px 14px rgba(0,0,0,0.35)`,
                        transform: "scale(1.15)",
                        border:
                          car?.hexCode === "#FFFFFF"
                            ? "1px solid #9CA3AF"
                            : "none",
                      }}
                    >

                    </div>
                  </div>
                  <ul>
                    <li className="del-airport">
                      <i className="fa-solid fa-check" />
                      Home delivery
                    </li>
                    <li className="del-home">
                      <i className="fa-solid fa-check" />
                      ₹25/km
                    </li>
                  </ul>
                </div>


                <div className="slider detail-bigimg">
                  <Slider {...settings1}>
                    {car && car.images.map((element: any) => {
                      return <div className="product-img">
                        <img src={`http://localhost:4000${element}`} alt="Slider" />
                      </div>
                    })}
                    {/* <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-01.jpg" alt="Slider" />
                    </div>
                    <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-02.jpg" alt="Slider" />
                    </div>
                    <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-03.jpg" alt="Slider" />
                    </div>
                    <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-04.jpg" alt="Slider" />
                    </div>
                    <div className="product-img">
                    <ImageWithBasePath src="assets/img/cars/slider-05.jpg" alt="Slider" />
                    </div> */}
                  </Slider>
                </div>
                <div className="slider slider-nav-thumbnails">
                  <Slider {...settings2}>
                    {car && car.images.map((element: any) => {
                      return <div>
                        <img
                          src={`http://localhost:4000${element}`}
                          alt="product image"
                        />
                      </div>
                    })}
                    {/* <div>
                    <ImageWithBasePath
                        src="assets/img/cars/slider-thum-01.jpg"
                        alt="product image"
                      />
                    </div>
                    <div>
                    <ImageWithBasePath
                        src="assets/img/cars/slider-thum-02.jpg"
                        alt="product image"
                      />
                    </div>
                    <div>
                    <ImageWithBasePath
                        src="assets/img/cars/slider-thum-03.jpg"
                        alt="product image"
                      />
                    </div>
                    <div>
                    <ImageWithBasePath
                        src="assets/img/cars/slider-thum-04.jpg"
                        alt="product image"
                      />
                    </div>
                    <div>
                    <ImageWithBasePath
                        src="assets/img/cars/slider-thum-05.jpg"
                        alt="product image"
                      />
                    </div> */}
                  </Slider>
                </div>

              </div>
              <>
                {/* <div className="review-sec pb-0">
                  <div className="review-header">
                    <h4>Extra Service</h4>
                  </div>
                  <div className="lisiting-service">
                    <div className="row">
                      <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/icons/service-01.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-info">
                          <p>GPS Navigation Systems</p>
                        </div>
                      </div>
                      <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/icons/service-02.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-info">
                          <p>Wi-Fi Hotspot</p>
                        </div>
                      </div>
                      <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/icons/service-03.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-info">
                          <p>Child Safety Seats</p>
                        </div>
                      </div>
                      <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/icons/service-04.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-info">
                          <p>Fuel Options</p>
                        </div>
                      </div>
                      <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/icons/service-05.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-info">
                          <p>Roadside Assistance</p>
                        </div>
                      </div>
                      <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/icons/service-06.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-info">
                          <p>Satellite Radio</p>
                        </div>
                      </div>
                      <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/icons/service-07.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-info">
                          <p>Additional Accessories</p>
                        </div>
                      </div>
                      <div className="servicelist d-flex align-items-center col-xxl-3 col-xl-4 col-sm-6">
                        <div className="service-img">
                          <ImageWithBasePath
                            src="assets/img/icons/service-08.svg"
                            alt="Icon"
                          />
                        </div>
                        <div className="service-info">
                          <p>Express Check-in/out</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* Listing Section */}
                <div className="review-sec mb-0">
                  <div className="review-header">
                    <h4>Description of Listing</h4>
                  </div>
                  <div className="description-list">
                    <p>{car?.description}</p>
                    {/* <div className="read-more">
                      <div className="more-text">
                        <p>{car?.description}</p>
                      </div>
                      <Link to="#" className="more-link">
                        Show More
                      </Link>
                    </div> */}
                  </div>
                </div>
                {/* /Listing Section */}
                {/* Specifications */}
                <div className="review-sec specification-card ">
                  <div className="review-header">
                    <h4>Specifications</h4>
                  </div>
                  <div className="card-body">
                    <div className="lisiting-featues">
                      <div className="row">
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-1.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Body </span>
                            <h6> Sedan</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-2.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Make </span>
                            <h6> Nisssan</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-3.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Transmission </span>
                            <h6> Automatic</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-4.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Fuel Type </span>
                            <h6> Diesel</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-5.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Mileage </span>
                            <h6>16 Km</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-6.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Drivetrian </span>
                            <h6>Front Wheel</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-7.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Year</span>
                            <h6> 2018</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-8.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>AC </span>
                            <h6> Air Condition</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-9.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>VIN </span>
                            <h6> 45456444</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-10.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Door </span>
                            <h6> 4 Doors</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-11.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Brake </span>
                            <h6> ABS</h6>
                          </div>
                        </div>
                        <div className="featureslist d-flex align-items-center col-xl-3 col-md-4 col-sm-6">
                          <div className="feature-img">
                            <ImageWithBasePath
                              src="assets/img/specification/specification-icon-12.svg"
                              alt="Icon"
                            />
                          </div>
                          <div className="featues-info">
                            <span>Engine (Hp) </span>
                            <h6> 3,000</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Specifications */}
                {/* Car Features */}
                <div className="review-sec listing-feature">
                  <div className="review-header">
                    <h4>Car Features</h4>
                  </div>
                  <div className="listing-description">
                    <div className="row">
                      {Array.from({ length: 3 }).map((_, colIndex) => (
                        <div className="col-md-4" key={colIndex}>
                          <ul>
                            {car?.features
                              ?.slice(
                                colIndex * Math.ceil(car.features.length / 3),
                                (colIndex + 1) * Math.ceil(car.features.length / 3)
                              )
                              .map((feature: any, index: any) => (
                                <li key={index}>
                                  <span>
                                    <i className="bx bx-check-double" />
                                  </span>
                                  {feature}
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* /Car Features */}
                <>
                  {/* Tariff */}
                  <div className="review-sec listing-feature">
                    <div className="review-header">
                      <h4>Tariff</h4>
                    </div>
                    <div className="table-responsive">
                      <table className="table border mb-3">
                        <thead className="thead-dark">
                          <tr>
                            <th>Name</th>
                            <th>Daily Price</th>
                            <th>Base Kilometers</th>
                            <th>Kilometers Extra Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>4 to 5 Days</td>
                            <td>₹150</td>
                            <td>25</td>
                            <td>₹28</td>
                          </tr>
                          <tr>
                            <td>5 to 8 Days</td>
                            <td>₹250</td>
                            <td>90</td>
                            <td>₹45</td>
                          </tr>
                          <tr>
                            <td>8 to 15 Days</td>
                            <td>₹380</td>
                            <td>120</td>
                            <td>₹60</td>
                          </tr>
                          <tr>
                            <td>16 to 25 Days</td>
                            <td>₹500</td>
                            <td>500</td>
                            <td>₹80</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* /Tariff */}
                </>

                {/* Gallery */}
                {/* <div className="review-sec mb-0 pb-0">
                  <div className="review-header">
                    <h4>Gallery</h4>
                  </div>
                  <div className="gallery-list">
                    <div className="d-flex">
                      <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={images.map((image) => ({ src: image.big }))}
                        index={currentIndex}
                      />
                      {images.map((image, index) => (
                        <div key={index}>
                          {" "}
                          <ul>
                            <li>
                              <div className="gallery-widget">
                                <Link
                                  to="#"
                                  data-fancybox="gallery"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    openLightbox(index);
                                  }}
                                >
                                  <ImageWithBasePath
                                    className="img-fluid"
                                    alt="Image"
                                    src={image.thumb}
                                  />
                                </Link>
                              </div>
                            </li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
                {/* /Gallery */}
                {/* Video */}
                {/* <div className="review-sec mb-0">
                  <div className="review-header">
                    <h4>Video</h4>
                  </div>
                  <div className="short-video">
                    <iframe
                      src="https://www.youtube.com/embed/ExJZAegsOis"
                      width={100}
                      height={350}
                    />
                  </div>
                </div> */}
                {/* /Video */}
                {/* FAQ */}
                <div className="review-sec faq-feature">
                  <div className="review-header">
                    <h4>FAQ’s</h4>
                  </div>
                  <div className="faq-info">
                    <div className="faq-card">
                      <h4 className="faq-title">
                        <Link
                          className="collapsed"
                          data-bs-toggle="collapse"
                          to="#faqOne"
                          aria-expanded="false"
                        >
                          How old do I need to be to rent a car?
                        </Link>
                      </h4>
                      <div id="faqOne" className="card-collapse collapse">
                        <p>
                          We offer a diverse fleet of vehicles to suit every
                          need, including compact cars, sedans, SUVs and luxury
                          vehicles. You can browse our selection online or
                          contact us for assistance in choosing the right
                          vehicle for you
                        </p>
                      </div>
                    </div>
                    <div className="faq-card">
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
                          We offer a diverse fleet of vehicles to suit every
                          need, including compact cars, sedans, SUVs and luxury
                          vehicles. You can browse our selection online or
                          contact us for assistance in choosing the right
                          vehicle for you
                        </p>
                      </div>
                    </div>
                    <div className="faq-card">
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
                          We offer a diverse fleet of vehicles to suit every
                          need, including compact cars, sedans, SUVs and luxury
                          vehicles. You can browse our selection online or
                          contact us for assistance in choosing the right
                          vehicle for you
                        </p>
                      </div>
                    </div>
                    <div className="faq-card">
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
                          We offer a diverse fleet of vehicles to suit every
                          need, including compact cars, sedans, SUVs and luxury
                          vehicles. You can browse our selection online or
                          contact us for assistance in choosing the right
                          vehicle for you
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /FAQ */}
                {/* Policies */}
                <div className="review-sec">
                  <div className="review-header">
                    <h4>Policies</h4>
                  </div>
                  <div className="policy-list">
                    <div className="policy-item">
                      <div className="policy-info">
                        <h6>Cancellation Charges</h6>
                        <p>
                          Cancellation charges will be applied as per the policy
                        </p>
                      </div>
                      <Link to={routes.privacyPolicy}>Know More</Link>
                    </div>
                    <div className="policy-item">
                      <div className="policy-info">
                        <h6>Policy</h6>
                        <p>
                          I hereby agree to the terms and conditions of the
                          Lease Agreement with Host
                        </p>
                      </div>
                      <Link to={routes.privacyPolicy}>View Details</Link>
                    </div>
                  </div>
                </div>
                {/* /Policies */}
                {/* Reviews */}
                <div className="review-sec listing-review">
                  <div className="review-header">
                    <h4>Reviews</h4>
                  </div>
                  <div className="rating-wrapper">
                    <div className="rating-wraps">
                      <h2>
                        4.5<span>/5</span>
                      </h2>
                      <p>Excellent</p>
                      <h6>Based on 256 Reviews</h6>
                    </div>
                    <div className="rating-progress">
                      <div className="progress-info">
                        <h6>Service</h6>
                        <div className="progress" role="progressbar">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "70%" }}
                          />
                        </div>
                        <div className="progress-percent">4.6</div>
                      </div>
                      <div className="progress-info">
                        <h6>Location</h6>
                        <div className="progress" role="progressbar">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "85%" }}
                          />
                        </div>
                        <div className="progress-percent">4.8</div>
                      </div>
                      <div className="progress-info">
                        <h6>Value for Money</h6>
                        <div className="progress" role="progressbar">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "60%" }}
                          />
                        </div>
                        <div className="progress-percent">3.0</div>
                      </div>
                      <div className="progress-info">
                        <h6>Facilities</h6>
                        <div className="progress" role="progressbar">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "65%" }}
                          />
                        </div>
                        <div className="progress-percent">4.5</div>
                      </div>
                      <div className="progress-info">
                        <h6>Cleanliness</h6>
                        <div className="progress" role="progressbar">
                          <div
                            className="progress-bar bg-primary"
                            style={{ width: "90%" }}
                          />
                        </div>
                        <div className="progress-percent">4.8</div>
                      </div>
                    </div>
                  </div>
                  <div className="review-card">
                    <div className="review-head">
                      <h6>Showing 3 guest reviews</h6>
                    </div>
                    <ul>
                      <li>
                        <div className="review-wraps">
                          <div className="review-header-group">
                            <div className="review-widget-header">
                              <span className="review-widget-img">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-01.jpg"
                                  className="img-fluid"
                                  alt="User"
                                />
                              </span>
                              <div className="review-design">
                                <h6>Johnson</h6>
                                <p>02 Jan 2023</p>
                              </div>
                            </div>
                            <div className="reviewbox-list-rating">
                              <p>
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span> (5.0)</span>
                              </p>
                            </div>
                          </div>
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.It
                            was popularised in the 1960s{" "}
                          </p>
                          <div className="review-reply">
                            <Link className="btn" to="#">
                              <i className="fa-solid fa-reply" />
                              Reply
                            </Link>
                            <div className="review-action">
                              <Link to="#">
                                <i className="fa-regular fa-thumbs-up" />
                                10
                              </Link>
                              <Link to="#">
                                <i className="fa-regular fa-thumbs-down" />
                                12
                              </Link>
                              <Link to="#">
                                <i className="fa-regular fa-heart" />
                                15
                              </Link>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <div className="review-wraps">
                              <div className="review-header-group">
                                <div className="review-widget-header">
                                  <span className="review-widget-img">
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-01.jpg"
                                      className="img-fluid"
                                      alt="User"
                                    />
                                  </span>
                                  <div className="review-design">
                                    <h6>Johnson</h6>
                                    <p>02 Jan 2023</p>
                                  </div>
                                </div>
                                <div className="reviewbox-list-rating">
                                  <p>
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <span> (5.0)</span>
                                  </p>
                                </div>
                              </div>
                              <p>
                                It was popularised in the 1960s with the release
                                of Letraset sheets containing Lorem Ipsum
                                passages, and more recently with desktop
                                publishing software like Aldus PageMaker
                                including versions of Lorem Ipsum.It was
                                popularised in the 1960s{" "}
                              </p>
                              <div className="review-reply">
                                <Link className="btn" to="#">
                                  <i className="fa-solid fa-reply" />
                                  Reply
                                </Link>
                                <div className="review-action">
                                  <Link to="#">
                                    <i className="fa-regular fa-thumbs-up" />
                                    10
                                  </Link>
                                  <Link to="#">
                                    <i className="fa-regular fa-thumbs-down" />
                                    12
                                  </Link>
                                  <Link to="#">
                                    <i className="fa-regular fa-heart" />
                                    15
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div className="review-wraps wrap-card">
                          <div className="review-header-group">
                            <div className="review-widget-header">
                              <span className="review-widget-img">
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-02.jpg"
                                  className="img-fluid"
                                  alt="User"
                                />
                              </span>
                              <div className="review-design">
                                <h6>Casandra</h6>
                                <p>Reviewed 25 March 2024</p>
                              </div>
                            </div>
                            <div className="reviewbox-list-rating">
                              <p>
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span> (5.0)</span>
                              </p>
                            </div>
                          </div>
                          <p>
                            It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.It
                            was popularised in the 1960s with the elease of
                            Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like
                            Aldus Page Maker including versions of Lorem Ipsum.
                          </p>
                          <div className="review-reply">
                            <Link className="btn" to="#">
                              <i className="fa-solid fa-reply" />
                              Reply
                            </Link>
                            <div className="review-action">
                              <Link to="#">
                                <i className="fa-regular fa-thumbs-up" />
                                10
                              </Link>
                              <Link to="#">
                                <i className="fa-regular fa-thumbs-down" />
                                12
                              </Link>
                              <Link to="#">
                                <i className="fa-regular fa-heart" />
                                15
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /Reviews */}
                {/* Leave a Reply */}
                <div className="review-sec leave-reply-form mb-0">
                  <div className="review-header">
                    <h4>Leave a Reply</h4>
                  </div>
                  <div className="review-list-rating">
                    <div className="row">
                      <div className="col-xl-4 col-md-6">
                        <div className="set-rating">
                          <p>Service</p>
                          <div className="rating-selection">
                            <input
                              type="checkbox"
                              id="service1"
                              defaultValue={1}
                            />
                            <label htmlFor="service1" />
                            <input
                              type="checkbox"
                              id="service2"
                              defaultValue={2}
                            />
                            <label htmlFor="service2" />
                            <input
                              type="checkbox"
                              id="service3"
                              defaultValue={3}
                            />
                            <label htmlFor="service3" />
                            <input
                              type="checkbox"
                              id="service4"
                              defaultValue={4}
                            />
                            <label htmlFor="service4" />
                            <input
                              type="checkbox"
                              id="service5"
                              defaultValue={5}
                            />
                            <label htmlFor="service5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-6">
                        <div className="set-rating">
                          <p>Location</p>
                          <div className="rating-selection">
                            <input type="checkbox" id="loc1" defaultValue={1} />
                            <label htmlFor="loc1" />
                            <input type="checkbox" id="loc2" defaultValue={2} />
                            <label htmlFor="loc2" />
                            <input type="checkbox" id="loc3" defaultValue={3} />
                            <label htmlFor="loc3" />
                            <input type="checkbox" id="loc4" defaultValue={4} />
                            <label htmlFor="loc4" />
                            <input type="checkbox" id="loc5" defaultValue={5} />
                            <label htmlFor="loc5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-6">
                        <div className="set-rating">
                          <p>Facilities</p>
                          <div className="rating-selection">
                            <input type="checkbox" id="fac1" defaultValue={1} />
                            <label htmlFor="fac1" />
                            <input type="checkbox" id="fac2" defaultValue={2} />
                            <label htmlFor="fac2" />
                            <input type="checkbox" id="fac3" defaultValue={3} />
                            <label htmlFor="fac3" />
                            <input type="checkbox" id="fac4" defaultValue={4} />
                            <label htmlFor="fac4" />
                            <input type="checkbox" id="fac5" defaultValue={5} />
                            <label htmlFor="fac5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-6">
                        <div className="set-rating">
                          <p>Value for Money</p>
                          <div className="rating-selection">
                            <input type="checkbox" id="val1" defaultValue={1} />
                            <label htmlFor="val1" />
                            <input type="checkbox" id="val2" defaultValue={2} />
                            <label htmlFor="val2" />
                            <input type="checkbox" id="val3" defaultValue={3} />
                            <label htmlFor="val3" />
                            <input type="checkbox" id="val4" defaultValue={4} />
                            <label htmlFor="val4" />
                            <input type="checkbox" id="val5" defaultValue={5} />
                            <label htmlFor="val5" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-md-6">
                        <div className="set-rating">
                          <p>Cleanliness</p>
                          <div className="rating-selection">
                            <input
                              type="checkbox"
                              id="clean1"
                              defaultValue={1}
                            />
                            <label htmlFor="clean1" />
                            <input
                              type="checkbox"
                              id="clean2"
                              defaultValue={2}
                            />
                            <label htmlFor="clean2" />
                            <input
                              type="checkbox"
                              id="clean3"
                              defaultValue={3}
                            />
                            <label htmlFor="clean3" />
                            <input
                              type="checkbox"
                              id="clean4"
                              defaultValue={4}
                            />
                            <label htmlFor="clean4" />
                            <input
                              type="checkbox"
                              id="clean5"
                              defaultValue={5}
                            />
                            <label htmlFor="clean5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="review-list">
                      <ul>
                        <li className="review-box feedbackbox mb-0">
                          <div className="review-details">
                            <form className="#">
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="input-block">
                                    <label>
                                      Full Name{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-6">
                                  <div className="input-block">
                                    <label>
                                      Email Address{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="email"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="input-block">
                                    <label>Comments </label>
                                    <textarea
                                      rows={4}
                                      className="form-control"
                                      defaultValue={""}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="submit-btn text-end">
                                <button
                                  className="btn btn-primary submit-review"
                                  type="submit"
                                >
                                  {" "}
                                  Submit Review
                                </button>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Leave a Reply */}
              </>
            </div>
            <div className="col-lg-4 theiaStickySidebar">
              <div className="stickybar">
                <div className="review-sec mt-0">
                  <div className="review-header">
                    <h4>Pricing</h4>
                  </div>
                  {car && (
                    <MiniBookingCalendar
                      blocks={car.availability?.blocks ?? []}
                    />
                  )}
                  <>
                    <div className="mb-3">
                      {car?.pricing?.map((element: any) => (
                        <div
                          key={element.id}
                          style={{
                            padding: "10px 14px",
                            marginBottom: "10px",
                            borderRadius: "8px",
                          }}
                        >
                          <span
                            className="booking_checkmark"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "20px",
                            }}
                          >
                            <span
                              className="checked-title"
                              style={{ fontWeight: "500" }}
                            >
                              {element.duration}
                            </span>

                            <span
                              className="price-rate"
                              style={{ fontWeight: "600" }}
                            >
                              ₹{element.price}
                            </span>
                          </span>
                        </div>
                      ))}

                      {/* <label className="booking_custom_check bookin-check-2">
                        <input type="radio" name="price_rate" />
                        <span className="booking_checkmark">
                          <span className="checked-title">Weekly</span>
                          <span className="price-rate">₹820</span>
                        </span>
                      </label>
                      <label className="booking_custom_check bookin-check-2">
                        <input type="radio" name="price_rate" />
                        <span className="booking_checkmark">
                          <span className="checked-title">Monthly</span>
                          <span className="price-rate">₹2400</span>
                        </span>
                      </label>
                      <label className="booking_custom_check bookin-check-2">
                        <input type="radio" name="price_rate" />
                        <span className="booking_checkmark">
                          <span className="checked-title">Yearly</span>
                          <span className="price-rate">₹9400</span>
                        </span>
                      </label> */}
                    </div>
                    <div className="location-content">
                      {/* <div className="delivery-tab">
                        <ul className="nav">
                          <li>
                            <label
                              className="booking_custom_check"
                              data-bs-toggle="tab"
                              data-bs-target="#delivery"
                            >
                              <input
                                type="radio"
                                name="rent_type"
                                defaultChecked
                              />
                              <span className="booking_checkmark">
                                <span className="checked-title">Delivery</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label
                              className="booking_custom_check"
                              data-bs-toggle="tab"
                              data-bs-target="#pickup"
                            >
                              <input type="radio" name="rent_type" />
                              <span className="booking_checkmark">
                                <span className="checked-title">Self Pickup</span>
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div> */}
                      <div className="tab-content">
                        <div className="tab-pane fade active show" id="delivery">
                          <form className="">
                            <ul>
                              {/* <li className="column-group-main">
                                <div className="input-block">
                                  <label>Delivery Location</label>
                                  <div className="group-img">
                                    <div className="form-wrap">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="45, 4th Avanue  Mark Street USA"
                                      />
                                      <span className="form-icon">
                                        <i className="fa-solid fa-location-crosshairs" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li> */}
                              {/* <li className="column-group-main">
                                <div className="input-block">
                                  <label className="custom_check d-inline-flex location-check m-0">
                                    <span>Return to same location</span>
                                    <input type="checkbox" name="remeber" />
                                    <span className="checkmark" />
                                  </label>
                                </div>
                              </li> */}
                              {/* <li className="column-group-main">
                                <div className="input-block">
                                  <label>Return Location</label>
                                  <div className="group-img">
                                    <div className="form-wrap">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="78, 10th street Laplace USA"
                                      />
                                      <span className="form-icon">
                                        <i className="fa-solid fa-location-crosshairs" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li> */}


                              <li className="column-group-last">
                                <div className="input-block mb-0">
                                  <div className="search-btn">
                                    <Link onClick={onBooking}
                                      to={routes.bookingCheckout}
                                      className="btn btn-primary check-available w-100"
                                      
                                    >
                                      Book
                                    </Link>

                                  </div>
                                </div>
                              </li>
                            </ul>
                          </form>
                        </div>
                        <div className="tab-pane fade" id="pickup">
                          <form className="">
                            <ul>
                              <li className="column-group-main">
                                <div className="input-block">
                                  <label>Delivery Location</label>
                                  <div className="group-img">
                                    <Dropdown
                                      value={selectedLocation1}
                                      onChange={(e) =>
                                        setSelectedLocation1(e.value)
                                      }
                                      options={Location}
                                      optionLabel="name"
                                      placeholder="Newyork Office - 78, 10th street Laplace USA"
                                      className="w-100"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li className="column-group-main">
                                <div className="input-block">
                                  <label className="custom_check d-inline-flex location-check m-0">
                                    <span>Return to same location</span>
                                    <input type="checkbox" name="remeber" />
                                    <span className="checkmark" />
                                  </label>
                                </div>
                              </li>
                              <li className="column-group-main">
                                <div className="input-block">
                                  <label>Delivery Location</label>
                                  <div className="group-img">
                                    <Dropdown
                                      value={selectedLocation}
                                      onChange={(e) =>
                                        setSelectedLocation(e.value)
                                      }
                                      options={types}
                                      optionLabel="name"
                                      placeholder="Newyork Office - 78, 10th street Laplace USA"
                                      className="w-100"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li className="column-group-main">
                                <div className="input-block">
                                  <label>Return Location</label>
                                  <div className="group-img">
                                    <div className="form-wrap">
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="78, 10th street Laplace USA"
                                      />
                                      <span className="form-icon">
                                        <i className="fa-solid fa-location-crosshairs" />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="column-group-main">
                                <div className="input-block m-0">
                                  <label>Pickup Date</label>
                                </div>
                                <div className="input-block-wrapp sidebar-form">
                                  <div className="input-block  me-lg-2">
                                    <div className="group-img">
                                      <div className="form-wrap">
                                        <input
                                          type="text"
                                          className="form-control datetimepicker"
                                          placeholder="04/11/2023"
                                        />
                                        <span className="form-icon">
                                          <i className="fa-regular fa-calendar-days" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-block">
                                    <div className="group-img">
                                      <div className="form-wrap">
                                        <TimePicker className="form-control timepicker bg-light" />
                                        <span className="form-icon">
                                          <i className="fa-regular fa-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="column-group-main">
                                <div className="input-block m-0">
                                  {" "}
                                  <label>Return Date</label>
                                </div>
                                <div className="input-block-wrapp sidebar-form">
                                  <div className="input-block me-2">
                                    <div className="group-img">
                                      <div className="form-wrap">
                                        {/* <input
                                        type="text"
                                        className="form-control datetimepicker"
                                        placeholder="04/11/2023"
                                      /> */}
                                        <Calendar
                                          value={date3}
                                          onChange={(e) => setDate3(e.value)}
                                          placeholder="04/11/2023"
                                        />
                                        <span className="form-icon">
                                          <i className="fa-regular fa-calendar-days" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="input-block">
                                    <div className="group-img">
                                      <div className="form-wrap">
                                        <TimePicker className="form-control timepicker bg-light" />
                                        <span className="form-icon">
                                          <i className="fa-regular fa-clock" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="column-group-last">
                                <div className="input-block mb-0">
                                  <div className="search-btn">
                                    <Link
                                      to={routes.bookingCheckout}
                                      className="btn btn-primary check-available w-100"
                                    >
                                      Book
                                    </Link>
                                    <Link
                                      to="#"
                                      data-bs-toggle="modal"
                                      data-bs-target="#enquiry"
                                      className="btn btn-theme"
                                    >
                                      Enquire Us
                                    </Link>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </form>
                        </div>
                      </div>
                    </div>
                  </>

                </div>

                {/* <div className="review-sec extra-service mt-0">
                  <div className="review-header">
                    <h4>Listing Owner Details</h4>
                  </div>
                  <div className="owner-detail">
                    <div className="owner-img">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-07.jpg"
                          alt="User"
                        />
                      </Link>
                      <span className="badge-check">
                        <ImageWithBasePath
                          src="assets/img/icons/badge-check.svg"
                          alt="User"
                        />
                      </span>
                    </div>
                    <div className="reviewbox-list-rating">
                      <h5>
                        <Link to="#">Brooklyn Cars</Link>
                      </h5>
                      <p>
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <i className="fas fa-star filled" />
                        <span> (5.0)</span>
                      </p>
                    </div>
                  </div>
                  <ul className="booking-list">
                    <li>
                      Email
                      <span>info@example.com</span>
                    </li>
                    <li>
                      Phone Number
                      <span>+1 14XXX XXX78</span>
                    </li>
                    <li>
                      Location
                      <span>4635 Pheasant Ridge Road, City Hollywood, USA</span>
                    </li>
                  </ul>
                  <div className="message-btn">
                    <Link to="#" className="btn btn-order">
                      Message to owner
                    </Link>
                    <Link to="#" className="chat-link">
                      <i className="fa-brands fa-whatsapp" />
                      Chat Via Whatsapp
                    </Link>
                  </div>
                </div> */}
                {/* <div className="review-sec share-car mt-0">
                  <div className="review-header">
                    <h4>View Car Location</h4>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509170.989457427!2d-123.80081967108484!3d37.192957227641294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1669181581381!5m2!1sen!2sin"
                    className="iframe-video"
                  />
                </div> */}
                {/* <div className="review-sec share-car mt-0 mb-0">
                  <div className="review-header">
                    <h4>Share</h4>
                  </div>
                  <ul className="nav-social">
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f fa-facebook fi-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-instagram fi-icon" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter fi-icon" />{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-linkedin fi-icon" />
                      </Link>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="details-car-grid">
                <div className="details-slider-heading">
                  <h3>You May be Interested in</h3>
                </div>
                <div className="rental-deal-slider details-car owl-carousel">
                  <Slider {...settings}>
                    <div className="rental-car-item">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-03.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div
                            className="fav-item justify-content-end"
                            key={2}
                            onClick={() => handleItemClick(2)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${selectedItems[2] ? "selected" : ""
                                }`}
                            >
                              <i className="feather icon-heart" />
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
                                    alt="Icons"
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
                                <i className="feather-map-pin" />
                              </span>
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                ₹45 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather-calendar me-2" />
                              </span>
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="rental-car-item">
                      <div className="listing-item pb-0">
                        <Link to={routes.listingDetails}>
                          <ImageWithBasePath
                            src="assets/img/cars/car-01.jpg"
                            className="img-fluid"
                            alt="Toyota"
                          />
                        </Link>
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
                                  Toyota Camry SE 350
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
                                    alt="{2018}"
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
                                <i className="feather-map-pin" />
                              </span>
                              Washington
                            </div>
                            <div className="listing-price">
                              <h6>
                                ₹160 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather-calendar me-2" />
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

                    <div className="rental-car-item">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-04.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div
                            className="fav-item justify-content-end"
                            key={3}
                            onClick={() => handleItemClick(3)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${selectedItems[3] ? "selected" : ""
                                }`}
                            >
                              <i className="feather icon-heart" />
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
                                    alt="{2022}"
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
                                <i className="feather-map-pin" />
                              </span>
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                ₹160 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather-calendar me-2" />
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

                    <div className="rental-car-item">
                      <div className="listing-item pb-0">
                        <div className="listing-img">
                          <Link to={routes.listingDetails}>
                            <ImageWithBasePath
                              src="assets/img/cars/car-05.jpg"
                              className="img-fluid"
                              alt="Audi"
                            />
                          </Link>
                          <div
                            className="fav-item justify-content-end"
                            key={4}
                            onClick={() => handleItemClick(4)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${selectedItems[4] ? "selected" : ""
                                }`}
                            >
                              <i className="feather icon-heart" />
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
                                    alt="{2018}"
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
                                <i className="feather-map-pin" />
                              </span>
                              Germany
                            </div>
                            <div className="listing-price">
                              <h6>
                                ₹36 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather-calendar me-2" />
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

                    <div className="rental-car-item">
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
                            className="fav-item justify-content-end"
                            key={5}
                            onClick={() => handleItemClick(5)}
                          >
                            <Link
                              to="#"
                              className={`fav-icon ${selectedItems[5] ? "selected" : ""
                                }`}
                            >
                              <i className="feather icon-heart" />
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
                                    alt="{2013}"
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
                                <i className="feather-map-pin" />
                              </span>
                              Newyork, USA
                            </div>
                            <div className="listing-price">
                              <h6>
                                ₹30 <span>/ Day</span>
                              </h6>
                            </div>
                          </div>
                          <div className="listing-button">
                            <Link
                              to={routes.listingDetails}
                              className="btn btn-order"
                            >
                              <span>
                                <i className="feather-calendar me-2" />
                              </span>
                              Rent Now
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

      <div
        className="modal custom-modal fade check-availability-modal"
        id="pages_edit"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <div className="form-header text-start mb-0">
                <h4 className="mb-0 text-dark fw-bold">Availability Details</h4>
              </div>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="align-center" aria-hidden="true">
                  ×
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="available-for-ride">
                    <p>
                      <i className="fa-regular fa-circle-check" />
                      Chevrolet Camaro is available for a ride
                    </p>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="row booking-info">
                    <div className="col-md-4 pickup-address">
                      <h5>Pickup</h5>
                      <p>45, 4th Avanue Mark Street USA</p>
                      <span>Date &amp; time : 11 Jan 2023</span>
                    </div>
                    <div className="col-md-4 drop-address">
                      <h5>Drop Off</h5>
                      <p>78, 10th street Laplace USA</p>
                      <span>Date &amp; time : 11 Jan 2023</span>
                    </div>
                    <div className="col-md-4 booking-amount">
                      <h5>Booking Amount</h5>
                      <h6>
                        <span>₹300 </span> /day
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="booking-info seat-select">
                    <h6>Extra Service</h6>
                    <label className="custom_check">
                      <input
                        type="checkbox"
                        name="rememberme"
                        className="rememberme"
                      />
                      <span className="checkmark" />
                      Baby Seat - <span className="ms-2">₹10</span>
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="booking-info pay-amount">
                    <h6>Deposit Option</h6>
                    <div className="radio radio-btn">
                      <label>
                        <input type="radio" name="radio" /> Pay Deposit
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="radio" /> Full Amount
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6" />
                <div className="col-md-6">
                  <div className="booking-info service-tax">
                    <ul>
                      <li>
                        Booking Price <span>$300</span>
                      </li>
                      <li>
                        Extra Service <span>₹10</span>
                      </li>
                      <li>
                        Tax <span>5</span>
                      </li>
                    </ul>
                  </div>
                  <div className="grand-total">
                    <h5>Grand Total</h5>
                    <span>$315</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link to={routes.booking} className="btn btn-back">
                Go to Details
                <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default listingDetails;
