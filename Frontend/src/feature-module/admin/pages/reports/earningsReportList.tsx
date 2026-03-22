import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import { earningsReportData } from "../../common/json/earningsReportList";
import CommonDatatable from "../../common/dataTable";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import ReactApexChart from "react-apexcharts";

const EarningsReportList = () => {
  const data = earningsReportData;
  const [totalEarnings] = useState<any>({
    series: [
      {
        name: "Sales Analysis",
        data: [300, 300, 300, 600, 600, 600, 550, 80, 100, 700, 700, 800],
      },
    ],
    options: {
      chart: {
        height: 247,
        type: "area",
        zoom: {
          enabled: false,
        },
      },
      colors: ["#FF9F43"],
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
          offsetX: -15,
          formatter: (val: any) => {
            return `$${val}K`;
          },
        },
      },
    },
  });
  const [projectReport] = useState<any>({
    series: [10, 20, 50],
    options: {
      chart: {
        width: 171,
        type: "pie",
      },
      labels: [
        "Maintenance Charges Collected",
        "Late Fees & Extra",
        "Rental Charges",
        "Completed",
      ], // Set your labels here
      colors: ["#0AB9A5", "#FFA633", "#AB47BC", "#03C95A"], // Custom colors for each segment
      dataLabels: {
        enabled: false, // Disable data labels to remove numbers
      },
      legend: {
        show: false, // Hide the legend
      },
      tooltip: {
        y: {
          formatter: function (value: any) {
            return "Value: " + value; // Customize the tooltip text
          },
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
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
      render: (text: string) => (
        <Link to={all_routes.admininvoiceDetails}>{text}</Link>
      ),
      sorter: (a: any, b: any) => a.INVOICENO.length - b.INVOICENO.length,
    },
    {
      title: "NAME",
      dataIndex: "NAME",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.customerDetails}
            className="avatar avatar-rounded me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/profiles/${record.IMAGE}`}
              alt=""
            />
          </Link>
          <div>
            <h6 className="fs-14 fw-semibold">
              <Link to={all_routes.customerDetails}>{text} </Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.NAME.length - b.NAME.length,
    },
    {
      title: "AMOUNT",
      dataIndex: "AMOUNT",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.AMOUNT.length - b.AMOUNT.length,
    },
    {
      title: "PAYMENT METHOD",
      dataIndex: "PAYMENTMETHOD",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) =>
        a.PAYMENTMETHOD.length - b.PAYMENTMETHOD.length,
    },
    {
      title: "DATE",
      dataIndex: "DATE",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.DATE.length - b.DATE.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${text === "Completed" ? "badge-soft-success" : text === "Refunded" ? "badge-soft-purple" : text === "Pending" ? "badge-soft-info" : "badge-soft-danger"} d-inline-flex align-items-center badge-sm`}
        >
          <i
            className={`ti ti-point-filled me-1 ${text === "Completed" ? "text-success" : text === "Refunded" ? "text-purple" : text === "Pending" ? "text-info" : "text-danger"}`}
          />
          {text}
        </span>
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
            <h2 className="mb-1">Earnings Reports</h2>
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
                <div className="card flex-fill position-relative">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-2  border-bottom border-gray">
                      <div>
                        <span className="fs-14 fw-normal text-truncate mb-1">
                          Total Earnings
                        </span>
                        <h5>$45,000</h5>
                      </div>
                      <Link
                        to="#"
                        className="avatar avatar-md avatar-rounded bg-orange border border-primary"
                      >
                        <span className="text-primary">
                          <i className="ti ti-currency-dollar text-white" />
                        </span>
                      </Link>
                    </div>
                    <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2">
                      <span className="text-success fs-12 d-flex align-items-center me-1">
                        <i className="ti ti-arrow-wave-right-up me-1" />
                        +12%
                      </span>{" "}
                      from Last Month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 d-flex">
                <div className="card flex-fill position-relative">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-2  border-bottom border-gray">
                      <div>
                        <span className="fs-14 fw-normal text-truncate mb-1">
                          Revenue Breakdown
                        </span>
                        <h5>$11,000</h5>
                      </div>
                      <Link
                        to="#"
                        className="avatar avatar-md avatar-rounded bg-success border border-success"
                      >
                        <span className="text-primary">
                          <i className="ti ti-chart-donut-4 text-white" />
                        </span>
                      </Link>
                    </div>
                    <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2">
                      <span className="text-success fs-12 d-flex align-items-center me-1">
                        <i className="ti ti-arrow-wave-right-up me-1" />
                        +21.99%
                      </span>{" "}
                      from Last Month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 d-flex">
                <div className="card flex-fill position-relative">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-2  border-bottom border-gray">
                      <div>
                        <span className="fs-14 fw-normal text-truncate mb-1">
                          Net Profit
                        </span>
                        <h5>$34,000</h5>
                      </div>
                      <Link
                        to="#"
                        className="avatar avatar-md avatar-rounded bg-info border border-info"
                      >
                        <span className="text-primary">
                          <i className="ti ti-stairs-up text-white" />
                        </span>
                      </Link>
                    </div>
                    <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2">
                      <span className="text-success fs-12 d-flex align-items-center me-1">
                        <i className="ti ti-arrow-wave-right-up me-1" />
                        +19.26%
                      </span>{" "}
                      from Last Month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3 d-flex">
                <div className="card flex-fill position-relative">
                  <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between pb-2  border-bottom border-gray">
                      <div>
                        <span className="fs-14 fw-normal text-truncate mb-1">
                          Top Performing Vehicles
                        </span>
                        <h5>Tesla: $950</h5>
                      </div>
                      <Link
                        to="#"
                        className="avatar avatar-md avatar-rounded bg-danger border border-danger"
                      >
                        <span className="text-primary">
                          <i className="ti ti-car text-white" />
                        </span>
                      </Link>
                    </div>
                    <p className="fs-12 fw-normal d-flex align-items-center justify-content-center text-truncate mt-2">
                      <span className="text-success fs-12 d-flex align-items-center me-1">
                        <i className="ti ti-arrow-wave-right-up me-1" />
                        +19.26%
                      </span>{" "}
                      from Last Month
                    </p>
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
                      <i className="ti ti-currency-dollar text-orange" />
                    </span>
                    <h5>Total Earnings </h5>
                  </div>
                  <div className="earning-square d-flex align-items-center">
                    <span className="me-2" />
                    <p className="fs-12 text-gray-5">Earnings</p>
                  </div>
                </div>
              </div>
              <div className="card-body py-0">
                <div id="expense-analysis">
                  <ReactApexChart
                    options={totalEarnings.options}
                    series={totalEarnings.series}
                    type="area"
                    height={247}
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
                      <i className="ti ti-currency-dollar text-success" />
                    </span>
                    <h5>Earnings Breakdown</h5>
                  </div>
                </div>
              </div>
              <div className="card-body py-0">
                <div id="project-report">
                  <ReactApexChart
                    options={projectReport.options}
                    series={projectReport.series}
                    type="pie"
                    height={171}
                  />
                </div>
                <div>
                  <ul className="breakdown-reports">
                    <li>
                      <p className="text-gray-9 fs-10 d-flex align-items-center mb-0">
                        <i className="ti ti-point-filled text-purple" />
                        Rental Charges
                      </p>
                      <span className="fs-10 text-gray-5">$11,000</span>
                    </li>
                    <li>
                      <p className="text-gray-9 fs-10 d-flex align-items-center mb-0">
                        <i className="ti ti-point-filled text-orange" />
                        Late Fees &amp; Extras
                      </p>
                      <span className="fs-10 text-gray-5">$2,500</span>
                    </li>
                    <li>
                      <p className="text-gray-9 fs-10 d-flex align-items-center mb-0">
                        <i className="ti ti-point-filled text-teal" />
                        Maintenance Charges Collected
                      </p>
                      <span className="fs-10 text-gray-5">$1,500</span>
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
          <h5 className="mb-3">Earnings</h5>
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
                          NAME
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
                          PAYMENT METHOD
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
                Payment Method
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
                    Credit Card
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Debit Card
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    PayPal
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Bank Transfer
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Digital Payment
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
                    Pending
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Refunded
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Failed
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

export default EarningsReportList;
