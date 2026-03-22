import  { useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";
import { quotationsData } from "../../../common/json/quotationsList";
import CommonDatatable from "../../../common/dataTable";
import PredefinedDateRanges from "../../../common/range-picker/datePicker";

const QuotationsList = () => {
  const data = quotationsData;
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "CUSTOMER",
      dataIndex: "CUSTOMER",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.carPartnerCustomersList}
            className="avatar avatar-rounded me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/customer/${record.CUSTOMER_IMG}`}
              alt=""
            />
          </Link>
          <div>
            <h6 className="mb-1 fs-14">
              <Link to={all_routes.carPartnerCustomersList}>{text}</Link>
            </h6>
            <span
              className={`badge  ${record.BADGE === "Client" ? "bg-secondary-transparent" : "bg-violet-transparent"} rounded-pill`}
            >
              {record.BADGE}
            </span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CUSTOMER.length - b.CUSTOMER.length,
    },
    {
      title: "CAR",
      dataIndex: "CAR",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.carPartnerCarsList}
            className="avatar me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/car/${record.CAR_IMG}`}
              alt="car"
            />
          </Link>
          <div>
            <Link to={all_routes.carPartnerCarsList} className="fw-semibold d-block">
              {text}
            </Link>
            <span className="fs-13">{record.CAR_TYPE}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CAR.length - b.CAR.length,
    },
    {
      title: "PICK UP DETAILS",
      dataIndex: "PICK_UP_DETAILS",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
            <h5 className="mb-2 fs-16">{text}</h5>
            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
              Feb, 2025
            </span>
          </div>
          <div>
            <p className="text-gray-9 mb-0">{record.PICK_UP_LOCATION} </p>
            <span className="fs-13">01:00 PM</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        a.PICK_UP_DETAILS.length - b.PICK_UP_DETAILS.length,
    },
    {
      title: "DROP OFF DETAILS",
      dataIndex: "DROP_OFF_DETAILS",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
            <h5 className="mb-2 fs-16">{text}</h5>
            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
              Feb, 2025
            </span>
          </div>
          <div>
            <p className="text-gray-9 mb-0">{record.DROP_OFF_LOCATION} </p>
            <span className="fs-13">01:00 PM</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        a.DROP_OFF_DETAILS.length - b.DROP_OFF_DETAILS.length,
    },
    {
      title: "PASSENGERS",
      dataIndex: "PASSENGERS",
      render: (text: string) => <p className="text-gray-9 mb-0">{text}</p>,
      sorter: (a: any, b: any) => a.PASSENGERS.length - b.PASSENGERS.length,
    },
    {
      title: "PRICE",
      dataIndex: "PRICE",
      render: (text: string) => <p className="text-gray-9 mb-0">{text}</p>,
      sorter: (a: any, b: any) => a.PRICE.length - b.PRICE.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${text === "Approved" ? "badge-soft-success" : "badge-soft-danger"} d-inline-flex align-items-center badge-sm`}
        >
          <i className="ti ti-point-filled me-1"></i>
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
    {
      title: "Action",
      dataIndex: "",
      render: () => (
        <div className="dropdown">
          <button
            className="btn btn-icon btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-dots-vertical" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end p-2">
            <li>
              <Link
                className="dropdown-item rounded-1"
                to={all_routes.quotationDetails}
              >
                <i className="ti ti-eye me-1" />
                View{" "}
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to={all_routes.editQuotation}
              >
                <i className="ti ti-edit me-1" />
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_quotation"
              >
                <i className="ti ti-trash me-1" />
                Delete
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to={all_routes.carPartnerAddReservation}
              >
                <i className="ti ti-calendar me-1" />
                Convert to Bookings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item rounded-1" to="#">
                <i className="ti ti-send me-1" />
                Send
              </Link>
            </li>
            <li>
              <Link className="dropdown-item rounded-1" to="#">
                <i className="ti ti-download me-1" />
                Download
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Quotations</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.carPartnerDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Quotations
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
            <div className="mb-2 me-2">
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
            <div className="mb-2">
              <Link
                to={all_routes.addQuotation}
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add New Quotation
              </Link>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
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
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-edit me-1" /> Bulk Actions
              </Link>
              <ul className="dropdown-menu dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Delete
                  </Link>
                </li>
              </ul>
            </div>
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
                        PICK UP DETAILS
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
                        DROP OFF DETAILS
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
                        PASSENGERS
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
                        PRICE
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
                Pick Up Location
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
                    Los Angles
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    New York City
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Houston
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Munich
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Montreal
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
                Drop Off Location
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
                    Los Angles
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    New York City
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Houston
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Munich
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Montreal
                  </label>
                </li>
              </ul>
            </div>
            <div className="dropdown me-3">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ti ti-badge me-1" />
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
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    In Progress
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
        {/* Custom Data Table */}
      </div>

      {/* Delete Quotation */}
      <div className="modal fade" id="delete_quotation">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Quotation</h4>
              <p className="mb-3">Are you sure you want to delete Quotation?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to="#"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Quotation */}
    </>
  );
};

export default QuotationsList;
