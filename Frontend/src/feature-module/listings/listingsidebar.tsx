
import { Link } from "react-router-dom";
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";


const ListingSidebar = () => {
  return (
    <>
      <form action="#" autoComplete="off" className="sidebar-form">
        {/* Customer */}
        <div className="sidebar-heading">
          <h3>What Are You Looking For</h3>
        </div>
        <div className="product-search">
          <div className="form-custom">
            <input type="text" className="form-control" id="member_search1" />
            <span>
              <ImageWithBasePath src="assets/img/icons/search.svg" alt="img" />
            </span>
          </div>
        </div>
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
                Car Category
                <span className="float-end">
                  <i className="fa-solid fa-chevron-down"></i>
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
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Kia
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
                            <span className="checkmark" /> Honda
                          </label>
                          <label className="custom_check w-100">
                            <input type="checkbox" name="username" />
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
        {/* /Customer */}
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
                Car Type
                <span className="float-end chev-up">
                  {" "}
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
                    <span className="checkmark" /> Convertible
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> Crossover
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> Sedan
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="username" />
                    <span className="checkmark" /> Wagon
                  </label>
                  {/* View All */}
                  <div className="view-content">
                    <div className="viewall-One">
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Pickup
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> Wagon
                      </label>
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" /> SUV
                      </label>
                    </div>
                  </div>
                  {/* /View All */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* By Status */}
        <div className="accordion" id="accordionMain3">
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
                <span className="float-end chev-up">
                  {" "}
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
              <div id="checkBoxes3">
                <div className="selectBox-cont">
                  <label className="custom_check w-100">
                    <input type="checkbox" name="bystatus" />
                    <span className="checkmark" /> 1-4
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="bystatus" />
                    <span className="checkmark" /> 1-6
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="bystatus" />
                    <span className="checkmark" /> 4-6
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="bystatus" />
                    <span className="checkmark" />
                    4-8
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="bystatus" />
                    <span className="checkmark" />
                    8+
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="bystatus" />
                    <span className="checkmark" /> 10+
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="bystatus" />
                    <span className="checkmark" /> 15+
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /By Status */}
        {/* Category */}
        <div className="accordion" id="accordionMain4">
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
                <span className="float-end chev-up">
                  {" "}
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
                <Slider
                  min={0}
                  max={100}
                  defaultValue={[0, 50]}
                  // Add any other props you want to customize
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Category */}
        <div className="accordion" id="accordionMain5">
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
                <span className="float-end chev-up">
                  {" "}
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
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="category" />
                    <span className="checkmark" />
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="category" />
                    <span className="checkmark" />
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </label>
                  <label className="custom_check w-100">
                    <input type="checkbox" name="category" />
                    <span className="checkmark" />
                    <i className="fas fa-star filled"></i>
                    <i className="fas fa-star filled"></i>
                  </label>
                  <div className="view-content">
                    <div className="viewall-Two">
                      <label className="custom_check w-100">
                        <input type="checkbox" name="username" />
                        <span className="checkmark" />
                        <i className="fas fa-star filled"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion" id="accordionMain6">
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
                <span className="float-end chev-up">
                  {" "}
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
    </>
  );
};

export default ListingSidebar;
