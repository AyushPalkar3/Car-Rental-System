import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import { Chips, type ChipsChangeEvent } from "primereact/chips";
import DefaultEditor from "react-simple-wysiwyg";

const EditPages = () => {
  const [values, setValueOne] = React.useState();

  function onChange(e: any) {
    setValueOne(e.target.value);
  }

  const [value, setValue] = useState<any>(["Book Car", "Online"]);
  const customChip = (item: string) => {
    return (
      <div>
        <span className="tag label ">{item}</span>
      </div>
    );
  };
  return (
    <>
      <div className="content me-4">
        <div className="mb-4">
          <Link
            to={all_routes.adminPagesList}
            className="d-flex align-items-center"
          >
            <span className="me-1">
              <i className="ti ti-arrow-narrow-left" />
            </span>
            Pages
          </Link>
        </div>
        <div className="add_page">
          <div className="card mb-0">
            <div className="card-header">
              <h5>Edit Page</h5>
            </div>
            <form action="#">
              <div className="card-body pb-1">
                <div className="border-bottom mb-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Book Your Car Online"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Slug <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control text-info"
                          defaultValue="/book-your-car-online"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Keywords</label>
                        <Chips
                          value={value}
                          className="input-tags  h-100 w-100"
                          onChange={(e: ChipsChangeEvent) => setValue(e.value)}
                          itemTemplate={customChip}
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        {/* <div className="editor">
                    Book your car rental online with ease. Choose from a wide
                    variety of cars, from budget to luxury, all at affordable
                    prices.
                  </div> */}
                        <DefaultEditor value={values} onChange={onChange} />
                        <p className="mt-2 fs-14">Maximum 60 Words</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <h6>SEO Settings</h6>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Meta Title <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="Best Car Rental Deals & Discounts – XYZ Rentals"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Meta Keywords <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue="car rental deals, cheap car rentals, best car rental discounts"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Permalink <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control text-info"
                          defaultValue="https://www.dreamsrentals.com/best-deals"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <label className="form-label">Meta Description</label>
                        <textarea
                          rows={4}
                          className="form-control"
                          defaultValue={
                            "Find the best car rental deals, discounts, and offers. Compare prices & save on your next rental."
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <Link to="#" className="btn btn-light me-2">
                    {" "}
                    Cancel
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPages;
