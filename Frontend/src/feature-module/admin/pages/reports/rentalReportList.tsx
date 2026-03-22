import React, { useState } from "react";
import { Link } from "react-router-dom";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import { rentalReportData } from "../../common/json/rentalReportList";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import CommonDatatable from "../../common/dataTable";
import { all_routes } from "../../../../router/all_routes";
import ReactApexChart from "react-apexcharts";

const RentalReportList = () => {
  const data = rentalReportData;

  const [searchValue, setSearchValue] = useState<string>("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const [totalBookings] = useState<any>({
    series: [
      {
        name: "Bookings",
        data: [750, 400, 580, 230, 580, 100, 410, 750, 600, 250, 470, 630],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          horizontal: false,
          endingShape: "rounded",
        },
      },
      colors: ["#fff"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "",
        align: "left",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
      yaxis: {
        min: 0,
        max: 800,
        tickAmount: 5, // Ensuring 5 ticks (0, 200, 400, 600, 800)
        labels: {
          formatter: (val: any) => {
            return `$${val}`;
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.35,
          gradientToColors: ["#FF9F43"], // Second gradient color
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
    },
  });
  const [Chart] = useState<any>({
    series: [70, 30, 10],
    options: {
      chart: {
        type: "donut",
      },
      colors: ["#0AB9A5", "#FF0000", "#FFA633"],
      labels: ["Ferrari 458 MM", "Ford Endeavour", "Ford Mustang"],

      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          stroke: {
            show: true,
            width: 10, // Width of the gap
            colors: ["#FFFFFF"], // Color of the gap
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false, // Set this to false to hide the legend
      },
      annotations: {
        position: "front", // Ensure it appears above other elements
        style: {
          fontSize: "24px", // Adjust font size
          fontWeight: "bold",
          color: "#000000", // Change color if needed
        },
        text: {
          // Set the annotation text
          text: "+14%",
          // Optional styling for the text box
          background: {
            enabled: true,
            foreColor: "#FFFFFF", // Text color
            border: "#000000", // Border color
            borderWidth: 1,
            borderRadius: 2,
            opacity: 0.7,
          },
        },
        x: "50%", // Center horizontally
        y: "50%", // Center vertically
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false, // Also hide legend on smaller screens
            },
          },
        },
      ],
    },
  });
  const columns = [
    {
      title: "INVOICE NO",
      dataIndex: "INVOICENO",
      render: (text: string) => (
        <Link to={all_routes.admininvoiceDetails}>{text}</Link>
      ),
      sorter: (a: any, b: any) => a.INVOICENO.length - b.INVOICENO.length,
    },
    {
      title: "CAR",
      dataIndex: "CAR",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.carDetails}
            className="avatar me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/car/${record.CARIMAGE}`}
              alt=""
            />
          </Link>
          <div>
            <Link className="d-block fw-semibold" to={all_routes.carDetails}>
              {text}
            </Link>
            <span className="fs-13">{record.CAROWNER}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CAR.length - b.CAR.length,
    },
    {
      title: "CUSTOMER",
      dataIndex: "CUSTOMER",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.customerDetails}
            className="avatar avatar-rounded me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/customer/${record.IMAGE}`}
              alt=""
            />
          </Link>
          <div>
            <Link
              className="d-block fw-semibold"
              to={all_routes.customerDetails}
            >
              {text}
            </Link>
            <span
              className={`badge ${record.CUSTOMERNAME === "Client" ? "bg-secondary-transparent" : "bg-violet-transparent"} rounded-pill`}
            >
              {record.CUSTOMERNAME}
            </span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CUSTOMER.length - b.CUSTOMER.length,
    },
    {
      title: "AMOUNT",
      dataIndex: "AMOUNT",
      sorter: (a: any, b: any) => a.AMOUNT.length - b.AMOUNT.length,
    },
    {
      title: "DATE",
      dataIndex: "DATE",
      sorter: (a: any, b: any) => a.DATE.length - b.DATE.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${text === "Completed" ? "badge-soft-success" : text === "Confirmed" ? "badge-soft-warning" : text === "In Rental" ? "badge-soft-violet" : "badge-soft-danger"} d-inline-flex align-items-center badge-sm`}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
        // <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
        //     <i className="ti ti-point-filled me-1 text-success" />
        //     Completed
        // </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
  ];
  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Rental Reports</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Reports
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <Link to="#" className="btn btn-white d-flex align-items-center">
                <i className="ti ti-printer me-2" />
                Print
              </Link>
            </div>
            <div className="mb-2">
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Charts */}
        <div className="row">
          {/* Total Earnings */}
          <div className="col-xl-12 d-flex">
            <div className="row flex-fill earnings-report">
              <div className="col-md-6 col-xl-3 d-flex">
                <div className="card flex-fill position-relative orange-highlights">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="fs-14 fw-normal text-truncate d-block mb-2">
                          Total Bookings
                        </span>
                        <div className="d-flex align-items-center">
                          <h6 className="me-1 fw-semibold">5,450</h6>
                          <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate ">
                            Rentals
                            <span className="text-success fs-12 d-flex align-items-center ms-1">
                              <i className="ti ti-arrow-wave-right-up me-1" />
                              +12%
                            </span>
                          </p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="avatar avatar-md avatar-rounded bg-orange-transparent border border-primary"
                      >
                        <i className="text-primary ti ti-bookmarks fs-18" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 d-flex">
                <div className="card flex-fill position-relative success-highlights">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="fs-14 fw-normal text-truncate d-block mb-2">
                          Most Rented Car
                        </span>
                        <div className="d-flex align-items-center">
                          <h6 className="me-1 fw-semibold">Toyota (320)</h6>
                          <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate ">
                            <span className="text-success fs-12 d-flex align-items-center ms-1">
                              <i className="ti ti-arrow-wave-right-up me-1" />
                              +17.02%
                            </span>
                          </p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="avatar avatar-md avatar-rounded bg-success-transparent border border-success"
                      >
                        <i className="text-success ti ti-car fs-18" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 d-flex">
                <div className="card flex-fill position-relative info-highlights">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="fs-14 fw-normal text-truncate d-block mb-2">
                          Revenue Generated
                        </span>
                        <div className="d-flex align-items-center">
                          <h6 className="me-1 fw-semibold">$45,221</h6>
                          <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate ">
                            <span className="text-success fs-12 d-flex align-items-center ms-1">
                              <i className="ti ti-arrow-wave-right-up me-1" />
                              +10.13%
                            </span>
                          </p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="avatar avatar-md avatar-rounded bg-info-transparent border border-info"
                      >
                        <i className="text-info ti ti-currency-dollar fs-18" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 d-flex">
                <div className="card flex-fill position-relative danger-highlights">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="fs-14 fw-normal text-truncate d-block mb-2">
                          Customer Ratings
                        </span>
                        <div className="d-flex align-items-center">
                          <h6 className="me-1 fw-semibold">
                            4.7<span className="text-gray-5">/5</span>
                          </h6>
                          <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate ">
                            <span className="text-success fs-12 d-flex align-items-center ms-1">
                              <i className="ti ti-arrow-wave-right-up me-1" />
                              +0.5%
                            </span>
                          </p>
                        </div>
                      </div>
                      <Link
                        to="#"
                        className="avatar avatar-md avatar-rounded bg-danger-transparent border border-danger"
                      >
                        <i className="text-danger ti ti-star fs-18" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Total Earnings */}
          {/* Total Earnings */}
          <div className="col-xl-8 d-flex">
            <div className="card flex-fill earnings-chart">
              <div className="card-header border-0 pb-0">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="d-flex align-items-center ">
                    <span className="avatar avatar-md avatar-rounded bg-orange-transparent border-orange me-2">
                      <i className="ti ti-bookmarks fs-14 text-orange" />
                    </span>
                    <h5>Total Bookings </h5>
                  </div>
                  <div className="earning-square d-flex align-items-center">
                    <span className="me-2" />
                    <p className="fs-12 text-gray-5">Bookings</p>
                  </div>
                </div>
              </div>
              <div className="card-body py-0">
                <div id="total-bookings">
                  <ReactApexChart
                    options={totalBookings.options}
                    series={totalBookings.series}
                    type="bar"
                    height={350}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Total Earnings */}
          {/* Total Earnings */}
          <div className="col-xl-4 d-flex">
            <div className="card flex-fill earnings-chart">
              <div className="card-header border-0 pb-0">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="d-flex align-items-center ">
                    <span className="avatar avatar-md avatar-rounded bg-success-transparent border-success me-2">
                      <i className="ti ti-car fs-14 text-success" />
                    </span>
                    <h5>Most Rented Car</h5>
                  </div>
                </div>
              </div>
              <div className="card-body py-0">
                <div id="chart">
                  <ReactApexChart
                    options={Chart.options}
                    series={Chart.series}
                    type="donut"
                  />
                </div>
                <div>
                  <ul className="breakdown-reports">
                    <li>
                      <p className="text-gray-9 fs-10 d-flex align-items-center mb-0">
                        <i className="ti ti-point-filled text-danger me-1" />
                        Ford Endeavour
                      </p>
                      <span className="fs-10 text-gray-5">245</span>
                    </li>
                    <li>
                      <p className="text-gray-9 fs-10 d-flex align-items-center mb-0">
                        <i className="ti ti-point-filled text-teal me-1" />
                        Ferrari 458 MM
                      </p>
                      <span className="fs-10 text-gray-5">286</span>
                    </li>
                    <li>
                      <p className="text-gray-9 fs-10 d-flex align-items-center mb-0">
                        <i className="ti ti-point-filled text-warning me-1" />
                        Ford Mustang
                      </p>
                      <span className="fs-10 text-gray-5">135</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* /Total Earnings */}
        </div>
        {/* /Charts */}
        {/* Table Header */}
        <div>
          <h5 className="mb-3">Rentals</h5>
          <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
            <div className="d-flex align-items-center flex-wrap row-gap-3">
              <div className="dropdown me-2">
                <Link
                  to="#"
                  className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-filter me-1" /> Sort By : Latest
                </Link>
                <ul className="dropdown-menu  dropdown-menu-end p-2">
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Latest
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Ascending
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Desending
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Last Month
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item rounded-1">
                      Last 7 Days
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="me-2">
                <div className="input-icon-start position-relative topdatepicker">
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar" />
                  </span>
                  <PredefinedDateRanges />
                </div>
              </div>
              <div className="dropdown">
                <Link
                  to="#filtercollapse"
                  className="filtercollapse coloumn d-inline-flex align-items-center"
                  data-bs-toggle="collapse"
                  role="button"
                  aria-expanded="false"
                  aria-controls="filtercollapse"
                >
                  <i className="ti ti-filter me-1" /> Filter{" "}
                  <span className="badge badge-xs rounded-pill bg-danger ms-2">
                    0
                  </span>
                </Link>
              </div>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
              <div className="top-search me-2">
                <div className="top-search-group">
                  <span className="input-icon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    value={searchValue} // Controlled input
                    onChange={handleSearchChange} // Update search value
                  />
                </div>
              </div>
              <div className="dropdown">
                <Link
                  to="#"
                  className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center"
                  data-bs-toggle="dropdown"
                >
                  <i className="ti ti-layout-board me-1" /> Columns
                </Link>
                <div className="dropdown-menu dropdown-menu-lg p-2">
                  <ul>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span className="d-inline-flex align-items-center">
                          <i className="ti ti-grip-vertical me-1" />
                          INVOICE NO
                        </span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input
                            className="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span>
                          <i className="ti ti-grip-vertical me-1" />
                          CAR
                        </span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input
                            className="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span>
                          <i className="ti ti-grip-vertical me-1" />
                          CUSTOMER
                        </span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input
                            className="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span>
                          <i className="ti ti-grip-vertical me-1" />
                          AMOUNT
                        </span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input
                            className="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span>
                          <i className="ti ti-grip-vertical me-1" />
                          DATE
                        </span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input
                            className="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                        <span>
                          <i className="ti ti-grip-vertical me-1" />
                          STATUS
                        </span>
                        <div className="form-check form-check-sm form-switch mb-0">
                          <input
                            className="form-check-input form-label"
                            type="checkbox"
                            role="switch"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}
        <div className="collapse" id="filtercollapse">
          <div className="filterbox mb-3 d-flex align-items-center">
            <h6 className="me-3">Filters</h6>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Select Cars
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-2">
                <li>
                  <div className="top-search m-2">
                    <div className="top-search-group">
                      <span className="input-icon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Ford Endeavour
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Ferrari 458 MM
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Ford Mustang
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Toyota Tacoma 4
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Chevrolet Pick Truck
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Etios Carmen
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Acura Sport Version
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Kia Soul 2016
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Chevrolet Camaro
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Toyota Camry SE 350
                  </label>
                </li>
              </ul>
            </div>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Status
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-2">
                <li>
                  <div className="top-search m-2">
                    <div className="top-search-group">
                      <span className="input-icon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Completed
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Confirmed
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    In Rental
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Rejected
                  </label>
                </li>
              </ul>
            </div>
            <Link to="#" className="me-2 text-purple links">
              Apply
            </Link>
            <Link to="#" className="text-danger links">
              Clear All
            </Link>
          </div>
        </div>
        {/* Custom Data Table */}
        <CommonDatatable
          dataSource={data}
          columns={columns}
          searchValue={searchValue}
        />
      </div>
    </>
  );
};

export default RentalReportList;
