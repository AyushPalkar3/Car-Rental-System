import  { useState } from "react";
import Breadcrumbs from "../common/breadcrumbs";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { TimePicker } from "antd";
import { Link } from "react-router-dom";
import Sliders from "rc-slider";
import "rc-slider/assets/index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { all_routes } from "../../router/all_routes";

const Listinglist = () => {
  const routes = all_routes;
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);
  const [date1, setDate1] = useState<Date | null>(null);
  const [date2, setDate2] = useState<Date | null>(null);
 
  const [activeHearts, setActiveHearts] = useState({
    heart1: false,
    heart2: false,
    heart3: false,
    heart4: false,
    heart5: false,
    heart6: false,
    heart7: false,
  });

  const toggleLike = (key: string) => {
    setActiveHearts((prevState:any) => ({ ...prevState, [key]: !prevState[key] }));
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



  const settings = {
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
      <Breadcrumbs title="Car Listings" subtitle="Listings" />
      {/* Search */}
      <div className="section-search page-search">
        <div className="container">
          <div className="search-box-banner">
            <form >
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
                          className="datetimepicker bg-custom"
                          value={date1}
                          onChange={(e) => setDate1(e.value ?? null)}
                          placeholder="Choose Date"
                        />
                        <span>
                          <i className="feather icon-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                       <TimePicker className="form-control timepicker bg-light"/>
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
                          onChange={(e) => setDate2(e.value ?? null)}
                          placeholder="Choose Date"
                        />
                        <span>
                          <i className="feather icon-calendar" />
                        </span>
                      </div>
                    </div>
                    <div className="input-block time-widge">
                      <div className="group-img">
                               <TimePicker className="form-control timepicker bg-light"/>
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
                    <p>Showing 1-9 of 154 Cars</p>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-9 col-sm-12 col-12">
                  <div className="product-filter-group">
                    <div className="sortbyset">
                      <ul>
                        <li>
                          <span className="sortbytitle">Show : </span>
                          <div className="sorting-select select-one">
                            <Dropdown
                              value={selectedNumber}
                              onChange={(e) => setSelectedNumber(e.value)}
                              options={number}
                              optionLabel="name"
                              placeholder="5"
                              className="w-100"
                            />
                          </div>
                        </li>
                        <li>
                          <span className="sortbytitle">Sort By </span>
                          <div className="sorting-select select-two">
                            <Dropdown
                              value={selectedSort}
                              onChange={(e) => setSelectedSort(e.value)}
                              options={sort}
                              optionLabel="name"
                              placeholder="Newest"
                              className="w-100"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="grid-listview">
                      <ul>
                        <li>
                          <Link to={routes.listingGrid}>
                            <i className="feather icon-grid" />
                          </Link>
                        </li>
                        <li>
                          <Link to={routes.listingList} className="active">
                            <i className="feather icon-list" />
                          </Link>
                        </li>
                        <li>
                          <Link to={all_routes.listingMap}>
                            <i className="feather icon-map-pin" />
                          </Link>
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
                     
                      />
                      <span>
                        <ImageWithBasePath
                          src="assets/img/icons/search.svg"
                          alt="img"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="product-availability">
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
                  </div>
                  <div className="accord-list">
                    <div className="accordion" id="accordionMain1">
                      <div className="card-header-new" id="headingOne">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Car Brand
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample1"
                      >
                        <div className="card-body-chat">
                          <div className="row">
                            <div className="col-md-12">
                              <div id="checkBoxes1">
                                <div className="selectBox-cont">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Tesla
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Ford
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Mercediz Benz
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Audi
                                  </label>
                                  {/* View All */}
                                  <div className="view-content">
                                    <div className="viewall-One">
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Kia
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Honda
                                      </label>
                                      <label className="custom_check w-100">
                                        <input
                                          type="checkbox"
                                          name="username"
                                        />
                                        <span className="checkmark" /> Toyota
                                      </label>
                                    </div>
                                  </div>
                                  {/* /View All */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain2">
                      <div className="card-header-new" id="headingTwo">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            Car Category
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes2">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Convertible (25)
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Coupe (15)
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Sedan (10)
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> EV (5)
                              </label>
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Hatchback
                                    (123)
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Luxury (06)
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> SUV (6)
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Wagon (5)
                                  </label>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain3">
                      <div className="card-header-new" id="headingYear">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseYear"
                            aria-expanded="true"
                            aria-controls="collapseYear"
                          >
                            Year
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseYear"
                        className="collapse"
                        aria-labelledby="headingYear"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes3">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> 2024
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> 2022
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> 2021
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> 2020
                              </label>
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> 2019
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> 2018
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> 2019
                                  </label>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain4">
                      <div className="card-header-new" id="headingfuel">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefuel"
                            aria-expanded="true"
                            aria-controls="collapsefuel"
                          >
                            Fuel Type
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapsefuel"
                        className="collapse"
                        aria-labelledby="headingfuel"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="petrol"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="petrol">Petrol</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="diesel"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="diesel">Diesel</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="electric"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="electric">Electric</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="cng"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="cng">CNG</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain5">
                      <div className="card-header-new" id="headingmileage">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsemileage"
                            aria-expanded="true"
                            aria-controls="collapsemileage"
                          >
                            Mileage
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapsemileage"
                        className="collapse"
                        aria-labelledby="headingmileage"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="mileage"
                                    id="limited"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="limited">Limited</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="mileage"
                                    id="unlimited"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label htmlFor="unlimited">Unlimited</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain06">
                      <div className="card-header-new" id="headingrental">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapserental"
                            aria-expanded="true"
                            aria-controls="collapserental"
                          >
                            Rental Type
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapserental"
                        className="collapse"
                        aria-labelledby="headingrental"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input type="radio" name="any" id="any" />
                                  <label htmlFor="any">Any</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="day"
                                    id="day"
                                    defaultChecked
                                  />
                                  <label htmlFor="day">Per Day</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="hour"
                                    id="hour"
                                    defaultChecked
                                  />
                                  <label htmlFor="hour">Per Hour</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input type="radio" name="week" id="week" />
                                  <label htmlFor="week">Per Week</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain6">
                      <div className="card-header-new" id="headingspec">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsespec"
                            aria-expanded="true"
                            aria-controls="collapsespec"
                          >
                            Car Specifications
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapsespec"
                        className="collapse"
                        aria-labelledby="headingspec"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes02">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Air Conditioners
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Keyless
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Panoramic
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" /> Bluetooth
                              </label>
                              {/* View All */}
                              <div className="view-content">
                                <div className="viewall-One">
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Aux
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Top Window
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Speakers
                                  </label>
                                  <label className="custom_check w-100">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Automatic
                                    Window
                                  </label>
                                </div>
                              </div>
                              {/* /View All */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain7">
                      <div className="card-header-new" id="headingColor">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseColor"
                            aria-expanded="true"
                            aria-controls="collapseColor"
                          >
                            Colors
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseColor"
                        className="collapse"
                        aria-labelledby="headingColor"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="theme-colorsset">
                            <ul>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="greenColor"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="greenColor"
                                    className="green-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="yellowColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="yellowColor"
                                    className="yellow-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="brownColor"
                                    defaultValue="blue"
                                  />
                                  <label
                                    htmlFor="brownColor"
                                    className="brown-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="blackColor"
                                    defaultValue="green"
                                  />
                                  <label
                                    htmlFor="blackColor"
                                    className="black-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="redColor"
                                    defaultValue="red"
                                    defaultChecked
                                  />
                                  <label
                                    htmlFor="redColor"
                                    className="red-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="grayColor"
                                    defaultValue="blue"
                                  />
                                  <label
                                    htmlFor="grayColor"
                                    className="gray-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="gray100Color"
                                    defaultValue="green"
                                  />
                                  <label
                                    htmlFor="gray100Color"
                                    className="gray100-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="blueColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="blueColor"
                                    className="blue-clr"
                                  />
                                </div>
                              </li>
                              <li>
                                <div className="input-themeselects">
                                  <input
                                    type="radio"
                                    name="color"
                                    id="whiteColor"
                                    defaultValue="yellow"
                                  />
                                  <label
                                    htmlFor="whiteColor"
                                    className="white-clr"
                                  />
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain8">
                      <div className="card-header-new" id="headingThree">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            Capacity
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample3"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes6">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> 2 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> 4 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> 5 Seater
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="bystatus" />
                                <span className="checkmark" /> 7 Seater
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain9">
                      <div className="card-header-new" id="headingFour">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            Price
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample4"
                      >
                        <div className="card-body-chat">
                          <div className="filter-range">
                            <Sliders
                              className="input-range"
                              min={0}
                              max={100}
                              defaultValue={[0, 50]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain04">
                      <div className="card-header-new" id="headingtransmiss">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsetransmission"
                            aria-expanded="true"
                            aria-controls="collapsetransmission"
                          >
                            Transmission
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapsetransmission"
                        className="collapse"
                        aria-labelledby="headingtransmiss"
                        data-bs-parent="#accordionExample2"
                      >
                        <div className="card-body-chat">
                          <div className="fuel-list">
                            <ul>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="manual"
                                    defaultChecked
                                  />
                                  <label htmlFor="manual">Manual </label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="semi"
                                  />
                                  <label htmlFor="semi">Semi Automatic</label>
                                </div>
                              </li>
                              <li>
                                <div className="input-selection">
                                  <input
                                    type="radio"
                                    name="transmission"
                                    id="automatic"
                                  />
                                  <label htmlFor="automatic">Automatic</label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain10">
                      <div className="card-header-new" id="headingFive">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            Rating
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample5"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes4">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span className="rating-count">5.0</span>
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span className="rating-count">4.0</span>
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">3.0</span>
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">2.0</span>
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="username" />
                                <span className="checkmark" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <span className="rating-count">1.0</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionMain11">
                      <div className="card-header-new" id="headingSix">
                        <h6 className="filter-title">
                          <Link
                            to="#"
                            className="w-100 collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="true"
                            aria-controls="collapseSix"
                          >
                            Customer Recommendation
                            <span className="float-end">
                              <i className="fa-solid fa-chevron-down" />
                            </span>
                          </Link>
                        </h6>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-bs-parent="#accordionExample6"
                      >
                        <div className="card-body-chat">
                          <div id="checkBoxes5">
                            <div className="selectBox-cont">
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> 70% &amp; up
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> 60% &amp; up
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> 50% &amp; up
                              </label>
                              <label className="custom_check w-100">
                                <input type="checkbox" name="category" />
                                <span className="checkmark" /> 40% &amp; up
                              </label>
                              <div className="viewall-Two">
                                <label className="custom_check w-100">
                                  <input type="checkbox" name="username" />
                                  <span className="checkmark" />
                                  30% &amp; up
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  <Link to="#" className="reset-filter">
                    Reset Filter
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-sm-12 col-12">
              <div className="row">
                <div className="listview-car">
                  <div className="card">
                    <div className="blog-widget d-flex">
                      <div className="blog-img">
                        <div className="img-slider listing-page-slider">
                          <Slider {...settings}>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/car-list-1.jpg"
                                  className="img-fluid"
                                  alt="Toyota"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/car-list-1.jpg"
                                  className="img-fluid"
                                  alt="Toyota"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/car-list-1.jpg"
                                  className="img-fluid"
                                  alt="Toyota"
                                />
                              </Link>
                            </div>
                            <div className="slide-images">
                              <Link to={routes.listingDetails}>
                                <ImageWithBasePath
                                  src="assets/img/car-list-1.jpg"
                                  className="img-fluid"
                                  alt="Toyota"
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
                          <Link
                            to="#"
                            className={`fav-icon ${activeHearts.heart1 ? "selected" : ""}`}
                            onClick={() => toggleLike("heart1")}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </div>
                      </div>
                      <div className="bloglist-content w-100">
                        <div className="card-body">
                          <div className="blog-list-head d-flex">
                            <div className="blog-list-title">
                              <h3>
                                <Link to={routes.listingDetails}>
                                  Ferrari 458 MM Special
                                </Link>
                              </h3>
                              <h6>
                                Category : <span>Ferrarai</span>
                              </h6>
                            </div>
                            <div className="blog-list-rate">
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>180 Reviews</span>
                              </div>
                              <h6>
                                $160<span>/ Day</span>
                              </h6>
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
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="{2018}"
                                  />
                                </span>
                                <p>2022</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="car-list-icon">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-14.jpg"
                                    alt="user"
                                  />
                                </div>
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin" />
                                    Amsterdam, Netherland
                                  </h6>
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
                      <div className="feature-text">
                        <span className="bg-danger">Featured</span>
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
                            src="assets/img/car-list-2.jpg"
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <div className="fav-item justify-content-end">
                          <Link
                            to="#"
                            className={`fav-icon ${activeHearts.heart2 ? "selected" : ""}`}
                            onClick={() => toggleLike("heart2")}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </div>
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
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>165 Reviews</span>
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
                                <p>Auto</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>13 KM</p>
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
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>6 Persons</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="{2018}"
                                  />
                                </span>
                                <p>2021</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="car-list-icon">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="user"
                                  />
                                </div>
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin" />
                                    Pattaya, Thailand
                                  </h6>
                                </div>
                                <div className="list-km">
                                  <span className="km-count">
                                    <ImageWithBasePath
                                      src="assets/img/icons/map-pin.svg"
                                      alt="author"
                                    />
                                    3.7m
                                  </span>
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
                        <div className="fav-item justify-content-end">
                          <Link
                            to="#"
                            className={`fav-icon ${activeHearts.heart3 ? "selected" : ""}`}
                            onClick={() => toggleLike("heart3")}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </div>
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
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span>200 Reviews</span>
                              </div>
                              <h6>
                                $150<span>/ Day</span>
                              </h6>
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
                                <p>17 KM</p>
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
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>4 Persons</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="{2018}"
                                  />
                                </span>
                                <p>2019</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="car-list-icon">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-06.jpg"
                                    alt="user"
                                  />
                                </div>
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin" />
                                    Lasvegas, USA
                                  </h6>
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
                      <div className="feature-text">
                        <span className="bg-warning">Top Rated</span>
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
                        <div className="fav-item justify-content-end">
                          <Link
                            to="#"
                            className={`fav-icon ${activeHearts.heart4 ? "selected" : ""}`}
                            onClick={() => toggleLike("heart4")}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </div>
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
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>150 Reviews</span>
                              </div>
                              <h6>
                                $45<span>/ Day</span>
                              </h6>
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
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>4 Persons</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="{2018}"
                                  />
                                </span>
                                <p>2019</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="car-list-icon">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="user"
                                  />
                                </div>
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin" />
                                    Newyork, USA
                                  </h6>
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
                            src="assets/img/car-list-6.jpg"
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <div className="fav-item justify-content-end">
                          <Link
                            to="#"
                            className={`fav-icon ${activeHearts.heart5 ? "selected" : ""}`}
                            onClick={() => toggleLike("heart5")}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </div>
                      </div>
                      <div className="bloglist-content w-100">
                        <div className="card-body">
                          <div className="blog-list-head d-flex">
                            <div className="blog-list-title">
                              <h3>
                                <Link to={routes.listingDetails}>
                                  Ford Mustang 4.0 AT
                                </Link>
                              </h3>
                              <h6>
                                Category : <span>Ford</span>
                              </h6>
                            </div>
                            <div className="blog-list-rate">
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>170 Reviews</span>
                              </div>
                              <h6>
                                $90<span>/ Day</span>
                              </h6>
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
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="{2018}"
                                  />
                                </span>
                                <p>2019</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="car-list-icon">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-06.jpg"
                                    alt="user"
                                  />
                                </div>
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin" />
                                    Lasvegas, USA
                                  </h6>
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
                      <div className="feature-text">
                        <span className="bg-danger">Featured</span>
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
                            src="assets/img/car-list-7.jpg"
                            className="img-fluid"
                            alt="blog-img"
                          />
                        </Link>
                        <div className="fav-item justify-content-end">
                          <Link
                            to="#"
                            className={`fav-icon ${activeHearts.heart6 ? "selected" : ""}`}
                            onClick={() => toggleLike("heart6")}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </div>
                      </div>
                      <div className="bloglist-content w-100">
                        <div className="card-body">
                          <div className="blog-list-head d-flex">
                            <div className="blog-list-title">
                              <h3>
                                <Link to={routes.listingDetails}>
                                  Acura Sport Version
                                </Link>
                              </h3>
                              <h6>
                                Category : <span>Acura</span>
                              </h6>
                            </div>
                            <div className="blog-list-rate">
                              <div className="list-rating">
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star" />
                                <span>180 Reviews</span>
                              </div>
                              <h6>
                                $30<span>/ Day</span>
                              </h6>
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
                                <p>12 KM</p>
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
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-05.svg"
                                    alt="{2018}"
                                  />
                                </span>
                                <p>2019</p>
                              </li>
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="car-list-icon">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-09.jpg"
                                    alt="user"
                                  />
                                </div>
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin" />
                                    Newyork, USA
                                  </h6>
                                </div>
                                <div className="list-km">
                                  <span className="km-count">
                                    <ImageWithBasePath
                                      src="assets/img/icons/map-pin.svg"
                                      alt="author"
                                    />
                                    4.2m
                                  </span>
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
                        <div className="fav-item justify-content-end">
                          <Link
                            to="#"
                            className={`fav-icon ${activeHearts.heart7 ? "selected" : ""}`}
                            onClick={() => toggleLike("heart7")}
                          >
                            <i className="feather icon-heart" />
                          </Link>
                        </div>
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
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <i className="fas fa-star filled" />
                                <span>200 Reviews</span>
                              </div>
                              <h6>
                                $36<span>/ Day</span>
                              </h6>
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
                                <p>Manual</p>
                              </li>
                              <li>
                                <span>
                                  <ImageWithBasePath
                                    src="assets/img/icons/car-parts-02.svg"
                                    alt="10 KM"
                                  />
                                </span>
                                <p>18 KM</p>
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
                                    src="assets/img/icons/car-parts-06.svg"
                                    alt="Persons"
                                  />
                                </span>
                                <p>5 Persons</p>
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
                            </ul>
                          </div>
                          <div className="blog-list-head list-head-bottom d-flex">
                            <div className="blog-list-title">
                              <div className="title-bottom">
                                <div className="car-list-icon">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-13.jpg"
                                    alt="user"
                                  />
                                </div>
                                <div className="address-info">
                                  <h6>
                                    <i className="feather icon-map-pin" />
                                    Lasvegas, USA
                                  </h6>
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
                      <div className="feature-text">
                        <span className="bg-warning">Top Rated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Pagination*/}
              <div className="blog-pagination">
                <nav>
                  <ul className="pagination page-item justify-content-center">
                    <li className="previtem">
                      <Link className="page-link" to="#">
                        <i className="fas fa-regular fa-arrow-left me-2" /> Prev
                      </Link>
                    </li>
                    <li className="justify-content-center pagination-center">
                      <div className="page-group">
                        <ul>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              1
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="active page-link" to="#">
                              2{" "}
                              <span className="visually-hidden">(current)</span>
                            </Link>
                          </li>
                          <li className="page-item">
                            <Link className="page-link" to="#">
                              3
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="nextlink">
                      <Link className="page-link" to="#">
                        Next{" "}
                        <i className="fas fa-regular fa-arrow-right ms-2" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*/Pagination*/}
            </div>
          </div>
        </div>
      </section>
      {/* /Car Grid View */}
    </div>
  );
};

export default Listinglist;
