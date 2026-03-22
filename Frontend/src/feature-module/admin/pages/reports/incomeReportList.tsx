import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import { incomeReportData } from "../../common/json/incomeReportList";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import CommonDatatable from "../../common/dataTable";
import { expenceReportData } from "../../common/json/expenceReportList";
import ReactApexChart from "react-apexcharts";

const IncomeReportList = () => {
  const data = incomeReportData;
  const dataOne = expenceReportData;
  const [salesStatistics] = useState<any>({
    series: [
      {
        name: "Revenue",
        data: [22, 22, 28, 25, 15, 22, 20],
      },
      {
        name: "Expenses",
        data: [-9, -25, -5, -10, -10, -25, -5],
      },
    ],
    options: {
      grid: {
        padding: {
          top: 5, // Adds space on the left
          right: 5, // Adds space on the right
        },
      },
      colors: ["#FFA633", "#FFDBAD"],
      chart: {
        type: "bar",
        height: 290,
        stacked: true,
        zoom: {
          enabled: true,
        },
      },
      responsive: [
        {
          breakpoint: 280,
          options: {
            legend: {
              position: "bottom",
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "70%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: (val: any) => {
            return val / 1 + "K";
          },
        },
        min: -30,
        max: 30,
        tickAmount: 6,
      },
      xaxis: {
        categories: [
          " 25 Jan ",
          "26 Jan",
          "27 Jan",
          "28 Jan",
          "29 Jan",
          "30 Jan",
          "31 Jan",
        ],
      },
      legend: { show: false },
      fill: {
        opacity: 1,
      },
    },
  });
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "INVOICE NO",
      dataIndex: "INVOICENO",
      render: (text: string) => <Link to="#">{text}</Link>,
      sorter: (a: any, b: any) => a.INVOICENO.length - b.INVOICENO.length,
    },
    {
      title: "CAR",
      dataIndex: "CAR",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link to="#" className="avatar me-2 flex-shrink-0">
            <ImageWithBasePath
              src={`assets/admin/img/car/${record.IMAGE}`}
              className="rounded-3"
              alt=""
            />
          </Link>
          <div>
            <h6>
              <Link to="#" className="fw-semibold fs-14">
                {text}
              </Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CAR.length - b.CAR.length,
    },
    {
      title: "RENTAL FEES",
      dataIndex: "RENTALFEES",
      render: (text: string) => <p className="fs-14 text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.RENTALFEES.length - b.RENTALFEES.length,
    },
    {
      title: "LATE FEES",
      dataIndex: "LATEFEES",
      sorter: (a: any, b: any) => a.LATEFEES.length - b.LATEFEES.length,
    },
    {
      title: "ADDITIONAL SERVICES",
      dataIndex: "ADDITIONALSERVICES",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) =>
        a.ADDITIONALSERVICES.length - b.ADDITIONALSERVICES.length,
    },
    {
      title: "TOTAL INCOME",
      dataIndex: "TOTALINCOME",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.TOTALINCOME.length - b.TOTALINCOME.length,
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
          className={`badge ${text === "Paid" ? "badge-soft-success" : text === "Pending" ? "badge-soft-info" : text === "Overdue" ? "badge-soft-violet" : "badge-soft-danger"}
         d-inline-flex align-items-center badge-sm`}
        >
          <i
            className={`ti ti-point-filled ${text === "Paid" ? "text-success" : text === "Pending" ? "text-info" : text === "Overdue" ? "text-violet" : "text-danger"} me-1`}
          />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
  ];
  const columnsOne = [
    {
      title: "INVOICE NO",
      dataIndex: "INVOICENO",
      render: (text: string) => <Link to="#">{text}</Link>,
      sorter: (a: any, b: any) => a.INVOICENO.length - b.INVOICENO.length,
    },
    {
      title: "CATEGORY",
      dataIndex: "CATEGORY",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.CATEGORY.length - b.CATEGORY.length,
    },
    {
      title: "VEHICLE RELATED",
      dataIndex: "VEHICLERELATED",
      render: (text: string) => <p className="fs-14 text-gray-9">{text}</p>,
      sorter: (a: any, b: any) =>
        a.VEHICLERELATED.length - b.VEHICLERELATED.length,
    },
    {
      title: "OPERATIONAL",
      dataIndex: "OPERATIONAL",
      sorter: (a: any, b: any) => a.OPERATIONAL.length - b.OPERATIONAL.length,
    },
    {
      title: "MISCELLANEOUS",
      dataIndex: "MISCELLANEOUS",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) =>
        a.MISCELLANEOUS.length - b.MISCELLANEOUS.length,
    },
    {
      title: "TOTAL EXPENSE",
      dataIndex: "TOTALEXPENSE",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.TOTALEXPENSE.length - b.TOTALEXPENSE.length,
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
          className={`badge ${text === "Paid" ? "badge-soft-success" : text === "Pending" ? "badge-soft-info" : text === "Overdue" ? "badge-soft-violet" : "badge-soft-danger"}
         d-inline-flex align-items-center badge-sm`}
        >
          <i
            className={`ti ti-point-filled ${text === "Paid" ? "text-success" : text === "Pending" ? "text-info" : text === "Overdue" ? "text-violet" : "text-danger"} me-1`}
          />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
  ];
  return (
    <>
      <div className="content me-4 pb-0">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Income vs Expenses</h4>
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
        <div className="row border-bottom mb-4">
          {/* Total Earnings */}
          <div className="col-xl-4">
            <div className="card flex-fill mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="border-end pe-4 me-4">
                      <p className="mb-0">Total Income</p>
                      <h6 className="fw-semibold">$48,900</h6>
                    </div>
                    <div>
                      <p className="mb-0">Top Earning Car</p>
                      <h6 className="fw-semibold">Tesla Model 3</h6>
                    </div>
                  </div>
                  <span className="avatar avatar-md bg-orange rounded-circle">
                    <i className="ti ti-currency-dollar fs-18" />
                  </span>
                </div>
                <div className="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2">
                  <p className="text-gray-500 mb-0 fs-12">Last Week</p>
                  <span className="text-success fs12">
                    <i className="ti ti-arrow-wave-right-up me-1" />
                    +12%
                  </span>
                </div>
              </div>
            </div>
            <div className="card flex-fill mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="border-end pe-4 me-4">
                      <p className="mb-0">Total Expenses</p>
                      <h6 className="fw-semibold">$19,400</h6>
                    </div>
                    <div>
                      <p className="mb-0">Highest Expense</p>
                      <h6 className="fw-semibold">Vehicle Repairs</h6>
                    </div>
                  </div>
                  <span className="avatar avatar-md bg-success rounded-circle">
                    <i className="ti ti-stairs-down fs-18" />
                  </span>
                </div>
                <div className="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2">
                  <p className="text-gray-500 mb-0 fs-12">Last Week</p>
                  <span className="text-danger fs12">
                    <i className="ti ti-arrow-wave-right-down me-1" />
                    -5.78%
                  </span>
                </div>
              </div>
            </div>
            <div className="card flex-fill mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="border-end pe-4 me-4">
                      <p className="mb-0">Net Profit</p>
                      <h6 className="fw-semibold">$29,500</h6>
                    </div>
                    <div>
                      <p className="mb-0">Profit Margin</p>
                      <h6 className="fw-semibold">54%</h6>
                    </div>
                  </div>
                  <span className="avatar avatar-md bg-info rounded-circle">
                    <i className="ti ti-stairs-up fs-18" />
                  </span>
                </div>
                <div className="bg-gray-100 d-inline-flex justify-content-between align-items-center w-100 rounded p-2">
                  <p className="text-gray-500 mb-0 fs-12">Last Week</p>
                  <span className="text-success fs12">
                    <i className="ti ti-arrow-wave-right-up me-1" />
                    +19.26%
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* /Total Earnings */}
          {/* Total Earnings */}
          <div className="col-xl-8 d-flex">
            <div className="card flex-fill earnings-chart">
              <div className="card-header border-0 pb-0">
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
                  <h5>Income &amp; Expenses</h5>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center me-4">
                      <span className="chart-color bg-primary me-1" />
                      <p className="fs-13">Income</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="chart-color bg-primary-300 me-1" />
                      <p className="fs-13">Expense</p>
                    </div>
                  </div>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                    >
                      <i className="ti ti-calendar me-1" /> This Week
                    </Link>
                    <ul className="dropdown-menu  dropdown-menu-end p-2">
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          This Month
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          This Week
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item rounded-1">
                          Last Week
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border rounded p-2 me-4">
                    <p className="mb-0 text-gray-5">Income This Week</p>
                    <h5>
                      $96896{" "}
                      <span className="text-success fs-13 fw-semibold">
                        +34%
                      </span>
                    </h5>
                  </div>
                  <div className="border rounded p-2">
                    <p className="mb-0 text-gray-5">Expenses This Week</p>
                    <h5>
                      $12489{" "}
                      <span className="text-danger fs-13 fw-semibold">
                        -12%
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="card-body py-0">
                <div id="income_expense_chart">
                  <ReactApexChart
                    options={salesStatistics.options}
                    series={salesStatistics.series}
                    type="bar"
                    height={270}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Total Earnings */}
        </div>
        {/* /Charts */}
        {/* Table Header */}
        {/* /Table Header */}
        <div className="coupons-tabs">
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item">
              <Link
                className="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                to="#income"
                aria-selected="true"
              >
                Income
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                to="#expense"
                aria-selected="false"
              >
                Expence
              </Link>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane show active" id="income" role="tabpanel">
              {/* Table Header */}
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
                              RENTAL FEES
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
                              LATE FEES
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
                              ADDITIONAL SERVICES
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
                              TOTAL INCOME
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
                              value={searchValue} // Controlled input
                              onChange={handleSearchChange} // Update search value
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
            <div className="tab-pane" id="expense" role="tabpanel">
              {/* Table Header */}
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
                              CATEGORY
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
                              VEHICLE RELATED
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
                              OPERATIONAL
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
                              MISCELLANEOUS
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
                              TOTAL EXPENSE
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
                      Category
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
                          Vehicle Repairs
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Fuel &amp; Maintenance
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Staff Salaries
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Office Rent
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Marketing
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Insurance
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Website Hosting
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Cleaning Supplies
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Car Loan Payment
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Software Subscription
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
                dataSource={dataOne}
                columns={columnsOne}
                searchValue={searchValue}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncomeReportList;
