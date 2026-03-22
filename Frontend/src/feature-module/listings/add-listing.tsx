import  { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { Dropdown } from "primereact/dropdown";

const AddListing = () => {
  const [options1, setSelectedOptions1] = useState<any>(null);
  const [options2, setSelectedOptions2] = useState<any>(null);
  const [options3, setSelectedOptions3] = useState<any>(null);
  const [options4, setSelectedOptions4] = useState<any>(null);
  const [options5, setSelectedOptions5] = useState<any>(null);
  const [options6, setSelectedOptions6] = useState<any>(null);
  const [options7, setSelectedOptions7] = useState<any>(null);
  const [options8, setSelectedOptions8] = useState<any>(null);
  const [options9, setSelectedOptions9] = useState<any>(null);
  const [options10, setSelectedOptions10] = useState<any>(null);
  const [options11, setSelectedOptions11] = useState<any>(null);
  const [options12, setSelectedOptions12] = useState<any>(null);
  const [options13, setSelectedOptions13] = useState<any>(null);
  const [options14, setSelectedOptions14] = useState<any>(null);
  const [options15, setSelectedOptions15] = useState<any>(null);
  const [options16, setSelectedOptions16] = useState<any>(null);
  const [options17, setSelectedOptions17] = useState<any>(null);
  const [options18, setSelectedOptions18] = useState<any>(null);
  const [items, setItems] = useState<string[]>([]);

  const addNewItem = () => {
    setItems([...items, ""]);
  };


  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };
  const Vehiclecondition = [{ name: "Used Vehicle" }, { name: "New Vehicle" }];
  const Year = [{ name: "2015" }, { name: "2016" }, { name: "2017" }];
  const RentalCategory = [{ name: "New" }, { name: "Old" }];
  const Vehicletype = [{ name: "Sedan" }, { name: "XUV" }];
  const Model = [{ name: "A8" }, { name: "A7" }, { name: "Q3" }];
  const Curency = [{ name: "USD" }, { name: "INR" }];
  const Hourly = [{ name: "24" }, { name: "48" }, { name: "64" }];
  const Days = [{ name: "1" }, { name: "2" }, { name: "3" }];
  const Weekly = [{ name: "1 week" }, { name: "2 week" }];
  const Monthly = [{ name: "1 Month" }, { name: "2 Month" }];
  const Bodytype = [{ name: "Fat" }, { name: "Slim" }, { name: "Fit" }];
  const Transmission = [{ name: "Manual" }, { name: "Automatic" }];
  const Fueltype = [{ name: "Petrol" }, { name: "Diesel" }];
  const Door = [{ name: "2" }, { name: "4" }, { name: "5" }];
  const Brake = [{ name: "ABS" }, { name: "Drum" }];
  const Drivetrian = [{ name: "Drivetrian" }, { name: "Battery" }];
  const AC = [{ name: "air conditioner" }, { name: "without air conditioner" }];
  const CancelBooking = [{ name: "4" }, { name: "5" }, { name: "6" }];
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center text-center">
            <div className="col-md-12 col-12">
              <h2 className="breadcrumb-title">Add Your Vehicle Information</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.homeOne}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="#">Listings</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Add your Car Information
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <>
        {/* Detail Page Head*/}
        <section className="product-detail-head">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-information">
                  <ul id="navbar-example2">
                    <li>
                      <Link to="#info" className="active page-link">
                        Basic Info
                      </Link>
                    </li>
                    <li>
                      <Link to="#registration" className="page-link">
                        Registration
                      </Link>
                    </li>
                    <li>
                      <Link to="#pricing" className="page-link">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link to="#service" className="page-link">
                        Additional Service
                      </Link>
                    </li>
                    <li>
                      <Link to="#specifications" className="page-link">
                        Specifications
                      </Link>
                    </li>
                    <li>
                      <Link to="#description" className="page-link">
                        Description
                      </Link>
                    </li>
                    <li>
                      <Link to="#terms" className="page-link">
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link to="#policy" className="page-link">
                        Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="#cancellation" className="page-link">
                        Cancellation
                      </Link>
                    </li>
                    <li>
                      <Link to="#features" className="page-link">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link to="#gallery" className="page-link">
                        {" "}
                        Gallery / Video
                      </Link>
                    </li>
                    <li>
                      <Link to="#location" className="page-link">
                        Location
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Detail Page Head*/}
        <section className="section product-details add-listing">
          <div
            data-bs-spy="scroll"
            data-bs-target="#navbar-example2"
            className="container"
          >
            <div className="row" id="info">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Basic Info</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Your Vehicle title{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Vehicle condition{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options1}
                            onChange={(e) => setSelectedOptions1(e.value)}
                            options={Vehiclecondition}
                            optionLabel="name"
                            placeholder="Vehicle condition"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Vehicle Year <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options2}
                            onChange={(e) => setSelectedOptions2(e.value)}
                            options={Year}
                            optionLabel="name"
                            placeholder="2015"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Rental category{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options3}
                            onChange={(e) => setSelectedOptions3(e.value)}
                            options={RentalCategory}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Make <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Audi"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Model <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options4}
                            onChange={(e) => setSelectedOptions4(e.value)}
                            options={Model}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Vehicle type <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options5}
                            onChange={(e) => setSelectedOptions5(e.value)}
                            options={Vehicletype}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="registration">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Registration &amp; VIN</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            License plate number
                            <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Vehicle VIN <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Vehicle Registration Number
                            <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Registration<span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="pricing">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Vehicle Price</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="check-listprice">
                        <ul>
                          <li>
                            <div className="input-block m-0">
                              <label className="custom_check d-inline-flex location-check m-0">
                                <span>Hourly</span>
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="input-block m-0">
                              <label className="custom_check d-inline-flex location-check m-0">
                                <span>Daily</span>
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="input-block m-0">
                              <label className="custom_check d-inline-flex location-check m-0">
                                <span>Weekly</span>
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="input-block m-0">
                              <label className="custom_check d-inline-flex location-check m-0">
                                <span>Monthly</span>
                                <input type="checkbox" defaultChecked />
                                <span className="checkmark" />
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            currency <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options6}
                            onChange={(e) => setSelectedOptions6(e.value)}
                            options={Curency}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Hourly<span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options7}
                            onChange={(e) => setSelectedOptions7(e.value)}
                            options={Hourly}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Days<span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options8}
                            onChange={(e) => setSelectedOptions8(e.value)}
                            options={Days}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Weekly<span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options9}
                            onChange={(e) => setSelectedOptions9(e.value)}
                            options={Weekly}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Monthly<span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options10}
                            onChange={(e) => setSelectedOptions10(e.value)}
                            options={Monthly}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="service">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Additional Service</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="service-Price">
                      <div className="row ">
                        <div className="col-lg-6 col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Name of the Service{" "}
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter the Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="mb-3">
                            <label className="form-label">
                              Price <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter the Amount"
                            />
                          </div>
                        </div>
                      </div>
                      {items.map((_item, index) => (
                        <div className="row" key={index}>
                          <div className="col-lg-6 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Name of the Service{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Name"
                                
                              />
                            </div>
                          </div>
                          <div className="col-lg-5 col-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Price <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Amount"
                              />
                            </div>
                          </div>
                          <div className="col-lg-1">
                            <label className="form-label d-block">&nbsp;</label>
                            <Link
                              to="#"
                              className="remove-approval delete-links"
                              onClick={(e) => {
                                e.preventDefault();
                                removeItem(index);
                              }}
                            >
                              <i className="feather icon-x" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="row">
                      <div className="col-lg-12 text-end">
                        <div className="add-service">
                          <button
                            type="button"
                            onClick={addNewItem}
                            className="add-text-link bg-transparent border-0"
                          >
                            <i className="fa fa-plus-circle" /> Add New
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="specifications">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Specifications</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Body type <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options11}
                            onChange={(e) => setSelectedOptions11(e.value)}
                            options={Bodytype}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Transmission <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options12}
                            onChange={(e) => setSelectedOptions12(e.value)}
                            options={Transmission}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Fuel type <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options13}
                            onChange={(e) => setSelectedOptions13(e.value)}
                            options={Fueltype}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Mileage <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mileage"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            VIN <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter VIN number"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Door <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options14}
                            onChange={(e) => setSelectedOptions14(e.value)}
                            options={Door}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Brake <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options15}
                            onChange={(e) => setSelectedOptions15(e.value)}
                            options={Brake}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Drivetrian <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options16}
                            onChange={(e) => setSelectedOptions16(e.value)}
                            options={Drivetrian}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            AC <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options17}
                            onChange={(e) => setSelectedOptions17(e.value)}
                            options={AC}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Engine HP<span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter HP of your car engine"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="description">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Description of Listing</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Enter Description"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="terms">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Terms &amp; Condition</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Enter Description"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="policy">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Policies</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Enter Description"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="cancellation">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Cancellation</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            No of Days to Cancel Booking{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <Dropdown
                            value={options18}
                            onChange={(e) => setSelectedOptions18(e.value)}
                            options={CancelBooking}
                            optionLabel="name"
                            placeholder="choose"
                            className="select w-100"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Enter Description"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="features">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Vehicle Features</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="check-listli">
                      <ul>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Multi-zone A/C</span>
                              <input type="checkbox" defaultChecked />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Adaptive Cruise Control</span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Sunroof</span>
                              <input type="checkbox" defaultChecked />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Heated front seats</span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Cooled Seats</span>
                              <input type="checkbox" defaultChecked />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Panoramic roof</span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Navigation system</span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Keyles Start</span>
                              <input type="checkbox" defaultChecked />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Tinted glass</span>
                              <input type="checkbox" defaultChecked />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Heated front seats</span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Cooled Seats</span>
                              <input type="checkbox" defaultChecked />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Panoramic roof</span>
                              <input type="checkbox" defaultChecked />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Adaptive Cruise Control</span>
                              <input type="checkbox" defaultChecked />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Multi-zone A/C</span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-block m-0">
                            <label className="custom_check d-inline-flex location-check m-0">
                              <span>Sunroof</span>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="gallery ">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Car Gallery</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="upload-div">
                          <input type="file" />
                          <div className="upload-photo-drag">
                            <span>
                              <i className="fa fa-upload me-2" /> Upload Photo
                            </span>
                            <h6>or Drag Photos</h6>
                          </div>
                        </div>
                        <div className="upload-list">
                          <ul>
                            <li>
                              The maximum photo size is 8 MB. Formats: jpeg,
                              jpg, png. Put the main picture first
                            </li>
                            <li>
                              The maximum video size is 10MB. Formats: mp4, mov.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" id="location">
              <div className="col-lg-4 col-md-12">
                <div className="heading-lising">
                  <h4>Location</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s
                  </p>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Country/Region{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Country"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="mb-3">
                          <label className="form-label">
                            State <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter  state"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Street address{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full address"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25144741.241913226!2d-118.76482692447117!3d39.70759859406427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1715415878101!5m2!1sen!2sin"
                          width={600}
                          height={450}
                          style={{ border: 0 }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-info-btns d-flex justify-content-end">
              <Link
                to={all_routes.bookingCheckout}
                className="btn btn-secondary"
              >
                Preview
              </Link>
              <button
                className="btn btn-primary continue-book-btn"
                type="submit"
              >
                Save Listing
              </button>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default AddListing;
