
import { Link } from "react-router-dom";
import CustomSelect from "../../common/select/commonSelect";
import { editMenu } from "../../common/json/selectOption";
import { all_routes } from "../../../../router/all_routes";

const EditMenu = () => {
  return (
    <>
      <div className="content me-4">
        <div className="edit-menu-header">
          <p>
            <Link
              to={all_routes.adminMenuManagementList}
              className="d-flex align-items-center"
            >
              <i className="ti ti-arrow-narrow-left me-1" />
              Back to List
            </Link>
          </p>
        </div>
        <div className="filterbox menu-filter">
          <div>
            <h4 className="d-flex align-items-center">
              <span className="me-1">
                <i className="ti ti-menu-2 text-secondary fw-normal" />
              </span>
              Menu Management
            </h4>
          </div>
        </div>
        <div className="card mb-0">
          <div className="card-body">
            <div className="row mb-3">
              <div className="col-md-3">
                <label className="form-label fw-normal">
                  Select the menu you want to edit
                </label>
                <CustomSelect
                  options={editMenu}
                  className="select d-flex"
                  placeholder="Select"
                />
              </div>
            </div>
            <div className="row row-gap-4">
              <div className="col-md-8">
                <div className="card mb-0">
                  <div className="card-header">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <label className="form-label me-2 mb-0">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="nav-menu"
                        />
                      </div>
                      <div>
                        <Link to="#" className="btn btn-primary">
                          Save Menu
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="edit-menu-header">
                      <h5 className="mb-2">Menu Structure</h5>
                      <p className="text-gray-9">
                        Place each item in the order you prefer. Click on the
                        arrow to the right of the item to display more
                        configuration options.
                      </p>
                    </div>
                    <div className="edit-menu-list">
                      <ol
                        className="list-group sortable-list list-group-numbered"
                        id="simple-list"
                      >
                        <li className="list-group-item">
                          <div className="accordion " id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <span className="me-2">
                                    <i className="ti ti-grid-dots" />
                                  </span>
                                  Home
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Menu{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">
                                      Permalink
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="https://www.example.com/contact/"
                                    />
                                  </div>
                                  <p>
                                    Preview :{" "}
                                    <Link to="#" className="text-info">
                                      https://www.example.com
                                    </Link>{" "}
                                  </p>
                                  <div className="form-check form-check-md form-switch me-2">
                                    <label className="form-check-label form-label mt-0 mb-0">
                                      Status
                                    </label>
                                    <input
                                      className="form-check-input form-label me-2"
                                      type="checkbox"
                                      role="switch"
                                      defaultChecked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="accordion " id="accordionExample2">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapsetwo"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <span className="me-2">
                                    <i className="ti ti-grid-dots" />
                                  </span>
                                  Listings
                                </button>
                              </h2>
                              <div
                                id="collapsetwo"
                                className="accordion-collapse collapse "
                                data-bs-parent="#accordionExample2"
                              >
                                <div className="accordion-body">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Menu{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">
                                      Permalink
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="https://www.example.com/contact/"
                                    />
                                  </div>
                                  <p>
                                    Preview :{" "}
                                    <Link to="#" className="text-info">
                                      https://www.example.com
                                    </Link>{" "}
                                  </p>
                                  <div className="form-check form-check-md form-switch me-2">
                                    <label className="form-check-label form-label mt-0 mb-0">
                                      Status
                                    </label>
                                    <input
                                      className="form-check-input form-label me-2"
                                      type="checkbox"
                                      role="switch"
                                      defaultChecked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="accordion " id="accordionExample3">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapsethree"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <span className="me-2">
                                    <i className="ti ti-grid-dots" />
                                  </span>
                                  User
                                </button>
                              </h2>
                              <div
                                id="collapsethree"
                                className="accordion-collapse collapse "
                                data-bs-parent="#accordionExample3"
                              >
                                <div className="accordion-body">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Menu{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">
                                      Permalink
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="https://www.example.com/contact/"
                                    />
                                  </div>
                                  <p>
                                    Preview :{" "}
                                    <Link to="#" className="text-info">
                                      https://www.example.com
                                    </Link>{" "}
                                  </p>
                                  <div className="form-check form-check-md form-switch me-2">
                                    <label className="form-check-label form-label mt-0 mb-0">
                                      Status
                                    </label>
                                    <input
                                      className="form-check-input form-label me-2"
                                      type="checkbox"
                                      role="switch"
                                      defaultChecked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="accordion " id="accordionExample4">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapsefour"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <span className="me-2">
                                    <i className="ti ti-grid-dots" />
                                  </span>
                                  Pages
                                </button>
                              </h2>
                              <div
                                id="collapsefour"
                                className="accordion-collapse collapse "
                                data-bs-parent="#accordionExample4"
                              >
                                <div className="accordion-body">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Menu{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">
                                      Permalink
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="https://www.example.com/contact/"
                                    />
                                  </div>
                                  <p>
                                    Preview :{" "}
                                    <Link to="#" className="text-info">
                                      https://www.example.com
                                    </Link>{" "}
                                  </p>
                                  <div className="form-check form-check-md form-switch me-2">
                                    <label className="form-check-label form-label mt-0 mb-0">
                                      Status
                                    </label>
                                    <input
                                      className="form-check-input form-label me-2"
                                      type="checkbox"
                                      role="switch"
                                      defaultChecked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="accordion " id="accordionExample5">
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapsefive"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <span className="me-2">
                                    <i className="ti ti-grid-dots" />
                                  </span>
                                  Blog
                                </button>
                              </h2>
                              <div
                                id="collapsefive"
                                className="accordion-collapse collapse "
                                data-bs-parent="#accordionExample5"
                              >
                                <div className="accordion-body">
                                  <div className="mb-3">
                                    <label className="form-label">
                                      Menu{" "}
                                      <span className="text-danger">*</span>
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">
                                      Permalink
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="https://www.example.com/contact/"
                                    />
                                  </div>
                                  <p>
                                    Preview :{" "}
                                    <Link to="#" className="text-info">
                                      https://www.example.com
                                    </Link>{" "}
                                  </p>
                                  <div className="form-check form-check-md form-switch me-2">
                                    <label className="form-check-label form-label mt-0 mb-0">
                                      Status
                                    </label>
                                    <input
                                      className="form-check-input form-label me-2"
                                      type="checkbox"
                                      role="switch"
                                      defaultChecked
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="d-flex align-items-center justify-content-start">
                      <Link to="#" className="btn btn-light me-2">
                        Cancel
                      </Link>
                      <Link to="#" className="btn btn-primary">
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="menu-right">
                  <div className="accordion" id="accordionright">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapserightone"
                          aria-expanded="true"
                          aria-controls="collapserightone"
                        >
                          Pages
                        </button>
                      </h2>
                      <div
                        id="collapserightone"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionright"
                      >
                        <div className="accordion-body p-0">
                          <ul>
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
                                Home
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                />
                                Listings
                              </label>
                            </li>
                            <li>
                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                />
                                Users
                              </label>
                            </li>
                          </ul>
                          <div className=" menu-rightfooter border border-top">
                            <div className="d-flex align-items-center justify-content-between">
                              <label className="dropdown-item d-flex align-items-center rounded-1">
                                <input
                                  className="form-check-input m-0 me-2"
                                  type="checkbox"
                                />
                                Select All
                              </label>
                              <Link to="#" className="p-2">
                                Add to Menu
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion mb-0" id="accordionright2">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapserighttwo"
                          aria-expanded="true"
                          aria-controls="collapserighttwo"
                        >
                          Custom Link
                        </button>
                      </h2>
                      <div
                        id="collapserighttwo"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionright2"
                      >
                        <div className="accordion-body">
                          <div className="mb-3">
                            <label className="form-label">
                              URL <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="http://"
                            />
                          </div>
                          <div className="mb-2">
                            <label className="form-label">Label</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Placeholder"
                            />
                          </div>
                          <div className=" menu-rightfooter border border-top">
                            <div className="d-flex align-items-center justify-content-end">
                              <Link to="#" className="p-2">
                                Add to Menu
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMenu;
