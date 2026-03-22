
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../../router/all_routes";

const BlogsList = () => {
  return (
    <>
      <div className="content me-0 me-md-0 me-lg-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Blogs</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Blogs
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="p-1 border rounded bg-white me-3 mb-2">
              <Link
                to="#"
                className="p-1 rounded d-inline-flex align-items-center justify-content-center me-1"
              >
                <i className="ti ti-list-tree" />
              </Link>
              <Link
                to="#"
                className="p-1 rounded text-white bg-primary d-inline-flex align-items-center justify-content-center"
              >
                <i className="ti ti-layout-grid fs-14" />
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to={all_routes.adminAddBlog}
                className="btn btn-primary d-flex align-items-center"
              >
                <i className="ti ti-plus me-2" />
                Add Blogs
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
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}
        <div className="collapse" id="filtercollapse">
          <div className="filterbox mb-3 d-flex align-items-center">
            <h6 className="me-3">Filters</h6>
            <div className="dropdown me-3">
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
                      defaultChecked
                    />
                    Travel Tips
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      defaultChecked
                    />
                    Car Reviews
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Rental Policies
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Insurance &amp; Coverage
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      defaultChecked
                    />
                    Budget Rentals
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Luxury Car Rentals
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      defaultChecked
                    />
                    Road Trip Guides
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                      defaultChecked
                    />
                    Eco-Friendly Rentals
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Seasonal Deals
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Customer Stories
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
        {/* Blogs */}
        <div className="row blogs-cover">
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-1.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      Sustainability
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-01.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        Bryan Bradfield
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      Why Electric Cars Are the Future of Car Rentals
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-2.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      Money-Saving
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-01.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        James Carter
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      How to Save Money on Your Next Car Rental
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-3.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      Ride-Sharing Insights
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-03.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        Ethan Reynolds
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      Car Rental vs. Ride-Sharing: Which One is Right for You?
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-4.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      Travel Inspiration
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-04.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        Liam Bennett
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      The Best Road Trip Routes to Take in a Rental Car
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-5.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      Booking Tips
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-05.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        Daniel Foster
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      Step-by-Step Guide to Booking a Rental Car Online
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-6.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      Insurance &amp; Protection
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-06.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        Noah Harrison
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      What You Need to Know About Rental Car Insurance
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-7.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      Customer Experience
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-07.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        David Rodriguez
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      Returning a Rental Car: Common Mistakes to Avoid
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-8.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      Product Design
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-08.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        Lily Johnson
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      10 Tips for Creating Engaging User Interfaces
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card blog-item-1">
              <div className="card-body p-0">
                <div className="blog-img">
                  <Link to={all_routes.adminblogDetails}>
                    <ImageWithBasePath
                      src="assets/admin/img/blog/blog-9.jpg"
                      alt="img"
                    />
                  </Link>
                  <div className="edit-delete-btns d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <Link
                        to={all_routes.adminEditBlog}
                        className="blog-edit me-2"
                      >
                        <i className="ti ti-edit" />
                      </Link>
                      <Link
                        to="#"
                        className="blog-delete"
                        data-bs-toggle="modal"
                        data-bs-target="#delete_blogs"
                      >
                        <i className="ti ti-trash" />
                      </Link>
                    </div>
                    <span className="badge badge-info badge-md">
                      User Research
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                      <Link to="#">
                        <ImageWithBasePath
                          src="assets/admin/img/customer/customer-09.jpg"
                          alt="img"
                          className="avatar avatar-sm rounded-circle me-1"
                        />
                      </Link>
                      <Link to="#" className="fs-16">
                        David Rodriguez
                      </Link>
                    </div>
                    <span className="d-flex align-items-center fs-16">
                      <i className="ti ti-calendar me-1" />
                      14 Mar 2025
                    </span>
                  </div>
                  <h5>
                    <Link to={all_routes.adminblogDetails}>
                      Understanding Customer Behavior in E-commerce
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Link to="#" className="load-btn">
              <i className="ti ti-loader me-1" /> Load More
            </Link>
          </div>
        </div>
        {/* Blogs */}
      </div>

      {/* Delete Blogs */}
      <div className="modal fade" id="delete_blogs">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash fs-26" />
              </span>
              <h4 className="mb-1">Delete Blog</h4>
              <p className="mb-3">Are you sure you want to delete Blog?</p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" className="btn btn-primary">
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Blogs */}
    </>
  );
};

export default BlogsList;
