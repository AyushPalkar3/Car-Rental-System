import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import { pagesData } from "../../common/json/pagesList";
import CommonDatatable from "../../common/dataTable";

const PagesList = () => {
  const data = pagesData;
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "PAGE",
      dataIndex: "PAGE",
      render: (text: string) => <h6 className="fs-14">{text}</h6>,
      sorter: (a: any, b: any) => a.PAGE.length - b.PAGE.length,
    },
    {
      title: "PAGE SLUG",
      dataIndex: "PAGESLUG",
      render: (text: string) => (
        <Link to="#" className="fs-12 text-info">
          {text}
        </Link>
      ),
      sorter: (a: any, b: any) => a.PAGESLUG.length - b.PAGESLUG.length,
    },
    {
      title: "LAST UPDATED",
      dataIndex: "LASTUPDATED",
      render: (text: string) => <p className="text-gray-9">{text}</p>,
      sorter: (a: any, b: any) => a.LASTUPDATED.length - b.LASTUPDATED.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${text === "Published" ? "badge-soft-success" : "badge-soft-danger"} d-inline-flex align-items-center badge-sm`}
        >
          <i className="ti ti-point-filled me-1" />
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
                to={all_routes.adminEditPages}
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
                data-bs-target="#delete_page"
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
            <h2 className="mb-1">Pages</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pages
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2">
              <div>
                <Link
                  to={all_routes.adminAddPages}
                  className="btn btn-primary btn-md d-inline-flex justify-content-center align-items-center"
                >
                  <i className="ti ti-plus me-1" />
                  Add Page
                </Link>
              </div>
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
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-badge me-1" /> Status
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Published
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Unpublish
                  </Link>
                </li>
              </ul>
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
          </div>
        </div>
        {/* /Table Header */}
        {/* Custom Data Table */}
        <CommonDatatable
          dataSource={data}
          columns={columns}
          searchValue={searchValue}
        />
      </div>

      {/* Delete Modal  */}
      <div className="modal fade" id="delete_page">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Page</h4>
              <p className="mb-3">Are you sure you want to delete page?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link
                  to={all_routes.adminPagesList}
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

export default PagesList;
