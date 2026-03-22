import React, { useState } from "react";
import { all_routes } from "../../../../router/all_routes";
import { Link } from "react-router-dom";
import { couponsData } from "../../common/json/couponsList";
import CommonDatatable from "../../common/dataTable";
import CustomSelect from "../../common/select/commonSelect";
import { Applicable, couponsType } from "../../common/json/selectOption";
import { DatePicker } from "antd";
import DefaultEditor from "react-simple-wysiwyg";

const CouponsList = () => {
  const data = couponsData;
  const [searchValue, setSearchValue] = useState<string>("");
  const [values, setValueOne] = React.useState();

  function onChange(e: any) {
    setValueOne(e.target.value);
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "COUPON NAME",
      dataIndex: "COUPONNAME",
      render: (text: string) => (
        <p className="text-gray-9 fw-semibold">{text}</p>
      ),
      sorter: (a: any, b: any) => a.COUPONNAME.length - b.COUPONNAME.length,
    },
    {
      title: "CODE",
      dataIndex: "CODE",
      render: (text: string) => (
        <span className="badge badge-soft-violet border">{text}</span>
      ),
      sorter: (a: any, b: any) => a.CODE.length - b.CODE.length,
    },
    {
      title: "DESCRIPTION",
      dataIndex: "DESCRIPTION",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DESCRIPTION.length - b.DESCRIPTION.length,
    },
    {
      title: "DISCOUNT TYPE",
      dataIndex: "DISCOUNTTYPE",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DISCOUNTTYPE.length - b.DISCOUNTTYPE.length,
    },
    {
      title: "DISCOUNT",
      dataIndex: "DISCOUNT",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DISCOUNT.length - b.DISCOUNT.length,
    },
    {
      title: "LIMIT",
      dataIndex: "LIMIT",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.LIMIT.length - b.LIMIT.length,
    },
    {
      title: "VALID",
      dataIndex: "VALID",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.VALID.length - b.VALID.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
          <i
            className={`ti ti-point-filled me-1 ${text === "Active" ? "text-success" : "text-danger"}`}
          />
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
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#edit_coupons"
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
                data-bs-target="#delete_coupons"
              >
                <i className="ti ti-trash me-1" />
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const columnsOne = [
    {
      title: "COUPON NAME",
      dataIndex: "COUPONNAME",
      render: (text: string) => (
        <p className="text-gray-9 fw-semibold">{text}</p>
      ),
      sorter: (a: any, b: any) => a.COUPONNAME.length - b.COUPONNAME.length,
    },
    {
      title: "CODE",
      dataIndex: "CODE",
      render: (text: string) => (
        <span className="badge badge-soft-violet border">{text}</span>
      ),
      sorter: (a: any, b: any) => a.CODE.length - b.CODE.length,
    },
    {
      title: "DESCRIPTION",
      dataIndex: "DESCRIPTION",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DESCRIPTION.length - b.DESCRIPTION.length,
    },
    {
      title: "DISCOUNT TYPE",
      dataIndex: "DISCOUNTTYPE",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DISCOUNTTYPE.length - b.DISCOUNTTYPE.length,
    },
    {
      title: "DISCOUNT",
      dataIndex: "DISCOUNT",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DISCOUNT.length - b.DISCOUNT.length,
    },
    {
      title: "LIMIT",
      dataIndex: "LIMIT",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.LIMIT.length - b.LIMIT.length,
    },
    {
      title: "VALID",
      dataIndex: "VALID",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.VALID.length - b.VALID.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: () => (
        <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
          <i className="ti ti-point-filled me-1 text-success" />
          Active
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
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#edit_coupons"
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
                data-bs-target="#delete_coupons"
              >
                <i className="ti ti-trash me-1" />
                Delete
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  const columnsTwo = [
    {
      title: "COUPON NAME",
      dataIndex: "COUPONNAME",
      render: (text: string) => (
        <p className="text-gray-9 fw-semibold">{text}</p>
      ),
      sorter: (a: any, b: any) => a.COUPONNAME.length - b.COUPONNAME.length,
    },
    {
      title: "CODE",
      dataIndex: "CODE",
      render: (text: string) => (
        <span className="badge badge-soft-violet border">{text}</span>
      ),
      sorter: (a: any, b: any) => a.CODE.length - b.CODE.length,
    },
    {
      title: "DESCRIPTION",
      dataIndex: "DESCRIPTION",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DESCRIPTION.length - b.DESCRIPTION.length,
    },
    {
      title: "DISCOUNT TYPE",
      dataIndex: "DISCOUNTTYPE",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DISCOUNTTYPE.length - b.DISCOUNTTYPE.length,
    },
    {
      title: "DISCOUNT",
      dataIndex: "DISCOUNT",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.DISCOUNT.length - b.DISCOUNT.length,
    },
    {
      title: "LIMIT",
      dataIndex: "LIMIT",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.LIMIT.length - b.LIMIT.length,
    },
    {
      title: "VALID",
      dataIndex: "VALID",
      render: (text: string) => <p>{text}</p>,
      sorter: (a: any, b: any) => a.VALID.length - b.VALID.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: () => (
        <span className="badge badge-outline d-inline-flex align-items-center badge-sm">
          <i className="ti ti-point-filled me-1 text-danger" />
          Inactive
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
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#edit_coupons"
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
                data-bs-target="#delete_coupons"
              >
                <i className="ti ti-trash me-1" />
                Delete
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
            <h2 className="mb-1">Coupons</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Coupons
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_coupons"
              >
                <i className="ti ti-plus me-2" />
                Add Coupon
              </Link>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Coupons tabs */}
        <div className="coupons-tabs">
          <ul className="nav nav-pills mb-3" role="tablist">
            <li className="nav-item">
              <Link
                className="nav-link active"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                to="#all-coupons"
                aria-selected="true"
              >
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                to="#active-coupons"
                aria-selected="false"
              >
                Active Coupons
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-bs-toggle="tab"
                role="tab"
                aria-current="page"
                to="#completed-coupons"
                aria-selected="false"
              >
                Completed Coupons
              </Link>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane show active"
              id="all-coupons"
              role="tabpanel"
            >
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
                              COUPON NAME
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
                              CODE
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
                              DESCRIPTION
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
                              DISCOUNT TYPE
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
                              DISCOUNT
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
                              LIMIT
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
                              VALID
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
                      Discount Type
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
                          Percentage
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Fixed Amount
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
                      <li className="dropdown-item d-flex align-items-center rounded-1">
                        Active
                      </li>
                      <li className="dropdown-item d-flex align-items-center rounded-1">
                        Inactive
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
            <div className="tab-pane" id="active-coupons" role="tabpanel">
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
                  <div className="dropdown">
                    <Link
                      to="#filtercollapse2"
                      className="filtercollapse coloumn d-inline-flex align-items-center"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="filtercollapse2"
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
                              COUPON NAME
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
                              CODE
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
                              DESCRIPTION
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
                              DISCOUNT TYPE
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
                              DISCOUNT
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
                              LIMIT
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
                              VALID
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
              <div className="collapse" id="filtercollapse2">
                <div className="filterbox mb-3 d-flex align-items-center">
                  <h6 className="me-3">Filters</h6>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      Discount Type
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
                          Percentage
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Fixed Amount
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
                      <li className="dropdown-item d-flex align-items-center rounded-1">
                        Active
                      </li>
                      <li className="dropdown-item d-flex align-items-center rounded-1">
                        Active
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
                columns={columnsOne}
                searchValue={searchValue}
              />
            </div>
            <div className="tab-pane" id="completed-coupons" role="tabpanel">
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
                  <div className="dropdown">
                    <Link
                      to="#filtercollapse3"
                      className="filtercollapse coloumn d-inline-flex align-items-center"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="filtercollapse3"
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
                              COUPON NAME
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
                              CODE
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
                              DESCRIPTION
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
                              DISCOUNT TYPE
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
                              DISCOUNT
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
                              LIMIT
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
                              VALID
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
              <div className="collapse" id="filtercollapse3">
                <div className="filterbox mb-3 d-flex align-items-center">
                  <h6 className="me-3">Filters</h6>
                  <div className="dropdown me-2">
                    <Link
                      to="#"
                      className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      Discount Type
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
                          Percentage
                        </label>
                      </li>
                      <li>
                        <label className="dropdown-item d-flex align-items-center rounded-1">
                          <input
                            className="form-check-input m-0 me-2"
                            type="checkbox"
                          />
                          Fixed Amount
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
                      <li className="dropdown-item d-flex align-items-center rounded-1">
                        Active
                      </li>
                      <li className="dropdown-item d-flex align-items-center rounded-1">
                        Inactive
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
                columns={columnsTwo}
                searchValue={searchValue}
              />
            </div>
          </div>
        </div>
        {/* /Coupons tabs */}
      </div>

      <>
        {/* Add Coupons */}
        <div className="modal fade" id="add_coupons">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="mb-0">Add Coupon</h5>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Coupon Name <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Coupon Code <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Type <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={couponsType}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Discount Value <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Start Date <span className="text-danger"> *</span>{" "}
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        End Date <span className="text-danger"> *</span>{" "}
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Applicable To <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={Applicable}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Limit <span className="text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                      <span className="text-gray-5 fs-13 mt-1">
                        Enter 0 for unlimited
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-0">
                      <label className="form-label">Description </label>
                      <DefaultEditor value={values} onChange={onChange} />
                      <p className="mt-2 fs-14">Maximum 60 Words</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
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
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Create New
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Add Coupons */}
        {/* Edit Coupons */}
        <div className="modal fade" id="edit_coupons">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="mb-0">Edit Coupon</h4>
                <button
                  type="button"
                  className="btn-close custom-btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ti ti-x fs-16" />
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Coupon Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="Summer Sale 2025"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Coupon Code <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="SUMMER2024"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Type <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={couponsType}
                        defaultValue={couponsType[1]}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Discount Value <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue="25%"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Start Date <span className="text-danger"> *</span>{" "}
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        End Date <span className="text-danger"> *</span>{" "}
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          placeholder="dd/mm/yyyy"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Applicable To <span className="text-danger">*</span>
                      </label>
                      <CustomSelect
                        options={Applicable}
                        defaultValue={Applicable[0]}
                        className="select d-flex"
                        placeholder="Select"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Limit <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={15}
                        className="form-control"
                      />
                      <span className="text-gray-5 fs-13 mt-1">
                        Enter 0 for unlimited
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-0">
                      <label className="form-label">Description </label>
                      <DefaultEditor value={values} onChange={onChange} />
                      <p className="mt-2 fs-14">Maximum 60 Words</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
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
                    data-bs-dismiss="modal"
                    className="btn btn-primary"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Edit Coupons */}
      </>

      {/* Delete Modal  */}
      <div className="modal fade" id="delete_coupons">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Coupon</h4>
              <p className="mb-3">Are you sure you want to delete Coupon?</p>
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
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal*/}
    </>
  );
};

export default CouponsList;
