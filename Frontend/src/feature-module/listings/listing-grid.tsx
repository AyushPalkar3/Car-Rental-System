import { useEffect, useState } from "react";
import Breadcrumbs from "../common/breadcrumbs";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { TimePicker } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { toast } from "react-toastify";
import Sliders from "rc-slider";
import "rc-slider/assets/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { all_routes, listingDetailsPath } from "../../router/all_routes";
import { carAPI, type CarListSearchParams } from "../../api/user/car.api";
import { BOOKING_BUFFER_HOURS } from "../../utils/bookingAvailability";
import { getCarDayRate } from "../../utils/carPricing";
import { carfilterData } from "./carFilter";
import { FaCogs, FaRoad, FaGasPump, FaBolt, FaCalendarAlt, FaUsers } from "react-icons/fa";


const ListingGrid = () => {
  const routes = all_routes;
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [isLoading, setLoading] = useState(false)
  const [date1, setDate1] = useState<Date | undefined>();
  const [date2, setDate2] = useState<Date | undefined>();
  const [timePickup, setTimePickup] = useState<Dayjs | null>(null);
  const [timeReturn, setTimeReturn] = useState<Dayjs | null>(null);
  const [cars, setCars] = useState<any>([])
  const [listMeta, setListMeta] = useState<{
    bookingBufferHours?: number;
    searchApplied?: boolean;
  } | null>(null);
  const [activeHearts, setActiveHearts] = useState({
    heart1: false,
    heart2: false,
    heart3: false,
    heart4: false,
    heart5: false,
    heart6: false,
    heart7: false,
    heart8: false,
    heart9: false,
  });


  const [searchQuery, setSearchQuery] = useState("");

  const [filters, setFilters] = useState({
    brands: [] as string[],
    categories: [] as string[],
    years: [] as number[],
    fuelType: "",
    specifications: [] as string[],
    seating: [] as number[],
    transmission: "",
  });

  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);


  const handleCheckboxChange = (
    field: string,
    value: string | number,
    checked: boolean
  ) => {
    setFilters((prev: any) => {
      const updatedValues = checked
        ? [...prev[field], value]
        : prev[field].filter((item: any) => item !== value);

      return { ...prev, [field]: updatedValues };
    });
  };

  const handleRadioChange = (field: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };


  const combineDateTime = (date: Date | undefined, time: Dayjs | null) => {
    if (!date || !time) return null;
    const base = dayjs(date);
    const t = dayjs(time);
    const combined = base
      .hour(t.hour())
      .minute(t.minute())
      .second(0)
      .millisecond(0);
    if (!combined.isValid()) return null;
    return combined;
  };

  const fetchCarData = async (search?: CarListSearchParams) => {
    try {
      setLoading(true);
      const res = await carAPI.getAllCars(search);
      if (res.status == 200) {
        setCars(res.data.data);
        setListMeta(res.data.meta ?? null);
      }
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }

  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pickup = combineDateTime(date1, timePickup);
    const ret = combineDateTime(date2, timeReturn);
    if (!pickup || !ret) {
      toast.error("Please choose pickup and return date and time.");
      return;
    }
    if (!pickup.isBefore(ret)) {
      toast.error("Return must be after pickup.");
      return;
    }
    fetchCarData({
      pickup: pickup.toISOString(),
      returnAt: ret.toISOString(),
    });
  };


  const filteredCars = cars.filter((car: any) => {
    const q = searchQuery.trim().toLowerCase();
    const searchMatch =
      !q ||
      (car.name && car.name.toLowerCase().includes(q)) ||
      (car.brand && car.brand.toLowerCase().includes(q));

    const brandMatch =
      filters.brands.length === 0 ||
      filters.brands.includes(car.brand);

    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(car.category);

    const yearMatch =
      filters.years.length === 0 ||
      filters.years.includes(car.modelYear);

    const fuelMatch =
      !filters.fuelType ||
      car.fuelType === filters.fuelType;

    const seatingMatch =
      filters.seating.length === 0 ||
      filters.seating.includes(car.seating);

    const transmissionMatch =
      !filters.transmission ||
      car.transmission === filters.transmission;

    return (
      searchMatch &&
      brandMatch &&
      categoryMatch &&
      yearMatch &&
      fuelMatch &&
      seatingMatch &&
      transmissionMatch
    );
  });

  // Reset to first page whenever filters or search query change
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, searchQuery]);

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const paginatedCars = filteredCars.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    fetchCarData();
  }, [])

  const toggleLike = (key: string) => {
    setActiveHearts((prevState: any) => ({ ...prevState, [key]: !prevState[key] }));
  };

  const number = [
    { name: "5" },
    { name: "10" },
    { name: "15" },
    { name: "20" },
    { name: "25" },
    { name: "30" },
  ];
  const sort = [
    { name: "Newest" },
    { name: "Relevance" },
    { name: "Low to High" },
    { name: "High to Low" },
    { name: "Best Rated" },
    { name: "Distance" },
    { name: "Popularity" },
  ];



  const settings1 = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
  const settings2 = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
  const settings3 = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
  const settings4 = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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
  const settings5 = {
    dots: true,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
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

  return (
    <div className="listing-page">
      {/* <Breadcrumbs title="Car Listings" subtitle="Listings" /> */}
      {/* Search */}
      <div className="breadcrumb-bar">
      </div>
      <div className="section-search page-search">
        <div className="container">
          <div className="search-box-banner">
            <form onSubmit={handleSearchSubmit}>
              <ul className="align-items-center">
                {/* <li className="column-group-main">
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
                </li> */}
                <li className="column-group-main">
                  <div className="input-block">
                    <label>Pickup Date</label>
                  </div>
                  <div className="input-block-wrapp">
                    <div className="input-block date-widget">
                      <div className="group-img">
                        <Calendar
                          className="datetimepicker bg-custom"
                          value={date1}
                          onChange={(e: any) => setDate1(e.value)}
                          placeholder="Choose Date"
                        />
                        <span>
                          <i className="feather icon-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                        <TimePicker
                          value={timePickup}
                          onChange={(v) => setTimePickup(v)}
                          format="HH:mm"
                          needConfirm={false}
                          placeholder="Choose Time"
                          className="form-control timepicker"
                        />
                        <span>
                          <i className="feather icon-clock" />
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
                          className="datetimepicker bg-custom"
                          value={date2}
                          onChange={(e: any) => setDate2(e.value)}
                          placeholder="Choose Date"
                        />
                        <span>
                          <i className="feather icon-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                        <TimePicker
                          value={timeReturn}
                          onChange={(v) => setTimeReturn(v)}
                          format="HH:mm"
                          needConfirm={false}
                          placeholder="Choose Time"
                          className="form-control timepicker"
                        />
                        <span>
                          <i className="feather icon-clock" />
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
            <p className="small text-muted mt-2 mb-0 px-1">
              Availability uses a {BOOKING_BUFFER_HOURS}-hour buffer before pickup and after return.
              {listMeta?.searchApplied
                ? " “Booked” means another reservation (or approved downtime) overlaps your range including that buffer."
                : " Run Search with dates and times to see which cars are free for that window."}
            </p>
          </div>
        </div>
      </div>
      {/* /Search */}
      {/* Sort By */}
      <div className="sort-section">
        <div className="container">
          <div className="sortby-sec">
            <div className="sorting-div">
              <div className="row d-flex align-items-center">
                <div className="col-xl-4 col-lg-3 col-sm-12 col-12">
                  <div className="count-search">
                    <p>
                      Showing {filteredCars.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, filteredCars.length)} of {filteredCars.length} Cars
                    </p>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                  <div className="product-filter-group">
                    <div className="sortbyset">
                      <ul className="d-flex">
                        {/* <li>
                          <span className="sortbytitle">Show : </span>
                          <div className="sorting-select select-one">
                            <Dropdown
                              value={selectedNumber}
                              onChange={(e: any) => setSelectedNumber(e.value)}
                              options={number}
                              optionLabel="name"
                              placeholder="5"
                            />
                          </div>
                        </li> */}
                        {/* <li>
                          <span className="sortbytitle">Sort By </span>
                          <div className="sorting-select select-two">
                            <Dropdown
                              value={selectedSort}
                              onChange={(e: any) => setSelectedSort(e.value)}
                              options={sort}
                              optionLabel="name"
                              placeholder="Newest"
                              className="w-100"
                            />
                          </div>
                        </li> */}
                      </ul>
                    </div>
                    <div className="grid-listview">
                      <ul>
                        <li>
                          <Link to={routes.listingGrid} className="active">
                            <i className="feather icon-grid" />
                          </Link>
                        </li>
                        {/* <li>
                          <Link to={routes.listingList}>
                            <i className="feather icon-list" />
                          </Link>
                        </li> */}
                        <li>
                          {/* <Link to={all_routes.listingMap}>
                            <i className="feather icon-map-pin" />
                          </Link> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Sort By */}
      {/* Car Grid View */}
      <section className="section car-listing pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-sm-12 col-12 theiaStickySidebar">
              <div className="stickybar">
                <form action="#" autoComplete="off" className="sidebar-form">
                  <div className="sidebar-heading">
                    <h3>What Are You Looking For</h3>
                  </div>
                  <div className="product-search">
                    <div className="form-custom">
                      <input
                        type="text"
                        className="form-control"
                        id="member_search1"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/search.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                  {/* <div className="product-availability">
                    <h6>Availability</h6>
                    <div className="status-toggle">
                      <input
                        id="mobile_notifications"
                        className="check"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        htmlFor="mobile_notifications"
                        className="checktoggle"
                      >
                        checkbox
                      </label>
                    </div>
                  </div> */}
                  <div className="accord-list">
                    {carfilterData?.map((section, index) => (
                      <div className="accordion" key={section.key}>
                        <div className="card-header-new">
                          <h6 className="filter-title">
                            <Link
                              to="#"
                              className="w-100 collapsed"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse-${section.key}`}
                              aria-expanded="false"
                            >
                              {section.name}
                              <span className="float-end">
                                <i className="fa-solid fa-chevron-down" />
                              </span>
                            </Link>
                          </h6>
                        </div>

                        <div
                          id={`collapse-${section.key}`}
                          className="collapse"
                        >
                          <div className="card-body-chat">
                            <div className="selectBox-cont">

                              {section.type === "checkbox" &&
                                section.values.map((item: any, i: number) => (
                                  <label className="custom_check w-100" key={i}>
                                    <input
                                      type="checkbox"
                                      onChange={(e) =>
                                        handleCheckboxChange(
                                          section.key,
                                          item.value,
                                          e.target.checked
                                        )
                                      }
                                    />
                                    <span className="checkmark" />
                                    {item.label}
                                  </label>
                                ))}

                              {section.type === "radio" &&
                                <div className="fuel-list">
                                  <ul>
                                    {section.values.map((item: any, i: number) => (
                                      <li key={i}>
                                        <div className="input-selection">
                                          <input
                                            type="radio"
                                            name={section.key}
                                            id={`${section.key}-${i}`}
                                            onChange={() =>
                                              handleRadioChange(section.key, item.value)
                                            }
                                          />
                                          <label htmlFor={`${section.key}-${i}`}>
                                            {item.label}
                                          </label>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              }

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="d-inline-flex align-items-center justify-content-center btn w-100 btn-primary filter-btn"
                  >
                    <span>
                      <i className="feather icon-filter me-2" />
                    </span>
                    Filter results
                  </button>
                  <Link to="#" className="reset-filter" onClick={() =>
                    setFilters({
                      brands: [],
                      categories: [],
                      years: [],
                      fuelType: "",
                      specifications: [],
                      seating: [],
                      transmission: "",
                    })
                  }>
                    Reset Filter
                  </Link>
                </form>
              </div>
            </div>

            {isLoading ?
              <div className="col-lg-9">
                <div className="row">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                      <div className="bg-white rounded-xl shadow-md p-4 animate-pulse">

                        {/* Image Skeleton */}
                        <div className="w-full h-48 bg-gray-300 rounded-lg mb-4 relative">
                          <div className="absolute top-3 left-3 w-16 h-6 bg-gray-400 rounded"></div>
                        </div>

                        {/* Brand */}
                        <div className="h-4 bg-gray-300 rounded w-24 mb-3"></div>

                        {/* Car Name */}
                        <div className="h-6 bg-gray-300 rounded w-32 mb-4"></div>

                        {/* Specs Section */}
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div key={i} className="h-4 bg-gray-300 rounded"></div>
                          ))}
                        </div>

                        {/* Price */}
                        <div className="h-10 bg-gray-300 rounded mb-4"></div>

                        {/* Button */}
                        <div className="h-12 bg-gray-400 rounded-lg"></div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>


              : <div className="col-lg-9">
                <div className="row">
                  {paginatedCars?.map((car: any) => {
                    const dayRate = getCarDayRate(car.pricing);
                    return (
                    <div key={car.id} className="col-xxl-4 col-lg-6 col-md-6 col-12">
                      <div className="listing-item">
                        <div className="listing-img">
                          <div className="img-slider listing-page-slider">
                            <Slider {...car.sliderSettings}>
                              {car.images.map((img: any, index: any) => (
                                <div key={index} className="slide-images">
                                  <Link to={listingDetailsPath(car.id)}>
                                    <img
                                      src={`${import.meta.env.VITE_API_BASE_URL_IMAGE}${img}`}
                                      className="img-fluid"
                                      alt={car.name}
                                    />
                                  </Link>
                                </div>
                              ))}
                            </Slider>
                          </div>

                          <div className="fav-item justify-content-end">
                            <span className="img-count">
                              <i className="feather icon-image" />
                              {car.images.length.toString().padStart(2, "0")}
                            </span>

                            <Link
                              to="#"
                              className={`fav-icon ${activeHearts[car.heartKey] ? "selected" : ""
                                }`}
                              onClick={() => toggleLike(car.heartKey)}
                            >
                              <i className="feather icon-heart" />
                            </Link>
                          </div>

                          <span className="featured-text">{car.brand}</span>
                        </div>

                        <div className="listing-content">
                          <div className="listing-features d-flex align-items-end justify-content-between">
                            <div className="list-rating">
                              <h3 className="listing-title">
                                <Link to={listingDetailsPath(car.id)}>{car.name}</Link>
                              </h3>

                              {/* <div className="list-rating">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`fas fa-star ${i < Math.floor(car.rating) ? "filled" : ""
                                    }`}
                                />
                              ))}
                              <span>({car.rating}) {car.reviews} Reviews</span>
                            </div> */}
                            </div>

                            {/* <div className="list-km">
                            <span className="km-count">
                              <ImageWithBasePath
                                src="assets/img/icons/map-pin.svg"
                                alt="location"
                              />
                              {car.distance}
                            </span>
                          </div> */}
                          </div>

                          <div className="listing-details-group">
                            <ul>
                              <li className="detail-item">
                                <FaCogs className="detail-icon" />
                                <p>{car.transmission}</p>
                              </li>

                              <li className="detail-item">
                                <FaRoad className="detail-icon" />
                                <p>{car.mileageKm} km</p>
                              </li>

                              <li className="detail-item">
                                <FaGasPump className="detail-icon" />
                                <p>{car.fuelType}</p>
                              </li>
                            </ul>

                            <ul>
                              <li className="detail-item">
                                <FaBolt className="detail-icon" />
                                <p>{car.powerType}</p>
                              </li>

                              <li className="detail-item">
                                <FaCalendarAlt className="detail-icon" />
                                <p>{car.modelYear}</p>
                              </li>

                              <li className="detail-item">
                                <FaUsers className="detail-icon" />
                                <p>{car.seating} Seats</p>
                              </li>
                            </ul>
                          </div>

                          <div className="listing-location-details">
                            {/* <div className="listing-price">
                            <span><i className="feather icon-map-pin" /></span>
                            {car.location}
                          </div> */}
                            <div className="listing-price">
                              <h6>
                                {dayRate != null ? (
                                  <>
                                    ₹{dayRate} <span>/ Day</span>
                                  </>
                                ) : (
                                  <span className="text-muted">—</span>
                                )}
                              </h6>
                            </div>
                          </div>

                          <div className="listing-button">
                            {listMeta?.searchApplied && car.isUnavailableForSearch ? (
                              <span
                                className="btn btn-order disabled w-100 text-center"
                                style={{ cursor: "not-allowed", opacity: 0.85 }}
                                title="Not available for your selected pickup and return window (includes turnaround buffer)."
                              >
                                Booked
                              </span>
                            ) : (
                              <Link to={listingDetailsPath(car.id)} className="btn btn-order">
                                <i className="feather icon-calendar me-2" />
                                Rent Now
                              </Link>
                            )}
                          </div>
                        </div>

                        {car.featured && (
                          <div className="feature-text">
                            <span className="bg-danger">Featured</span>
                          </div>
                        )}
                      </div>
                    </div>
                    );
                  })}
                </div>
                {/*Pagination*/}
                {totalPages > 1 && (
                  <div className="blog-pagination">
                    <nav>
                      <ul className="pagination page-item justify-content-center">
                        <li className="previtem">
                          <Link
                            className={`page-link${currentPage === 1 ? " disabled" : ""}`}
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage > 1) setCurrentPage((p) => p - 1);
                            }}
                          >
                            <i className="fas fa-regular fa-arrow-left me-2" /> Prev
                          </Link>
                        </li>
                        <li className="justify-content-center pagination-center">
                          <div className="page-group">
                            <ul>
                              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <li className="page-item" key={page}>
                                  <Link
                                    className={`page-link${currentPage === page ? " active" : ""}`}
                                    to="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setCurrentPage(page);
                                    }}
                                  >
                                    {page}
                                    {currentPage === page && (
                                      <span className="visually-hidden">(current)</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                        <li className="nextlink">
                          <Link
                            className={`page-link${currentPage === totalPages ? " disabled" : ""}`}
                            to="#"
                            onClick={(e) => {
                              e.preventDefault();
                              if (currentPage < totalPages) setCurrentPage((p) => p + 1);
                            }}
                          >
                            Next{" "}
                            <i className="fas fa-regular fa-arrow-right ms-2" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                )}
                {/*/Pagination*/}
              </div>}
          </div>
        </div>
      </section>
      {/* /Car Grid View */}
    </div>
  );
};

export default ListingGrid;
