import  { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../../router/all_routes";
import CustomSelect from "../../../common/select/commonSelect";
import { addBlogCategory } from "../../../common/json/selectOption";
import { Chips, type ChipsChangeEvent } from "primereact/chips";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";

const EditBlog = () => {
  const [value, setValue] = useState<any>(["Book car", "Online"]);
  const customChip = (item: string) => {
    return (
      <div>
        <span className="tag label ">{item}</span>
      </div>
    );
  };
  return (
    <>
      <div className="content me-0 me-md-0 me-lg-4">
        {/* Add Blogs */}
        <div className="add-blog-content">
          <div className="mb-4">
            <Link
              to={all_routes.adminBlogsList}
              className="d-inline-flex align-items-center fw-medium"
            >
              <i className="ti ti-arrow-narrow-left me-1" />
              Blogs
            </Link>
          </div>
          <div className="card">
            <div className="card-header">
              <h5>Edit Blog</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <label className="form-label">
                      Featured Image <span className="text-danger">*</span>
                    </label>
                    <div className="d-flex align-items-center flex-wrap row-gap-3 mb-3">
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl border me-3 flex-shrink-0 text-dark frames p-2">
                        <ImageWithBasePath
                          src="assets/admin/img/blog/blog-6.jpg"
                          className="rounded-2 img-fluid"
                          alt="brands"
                        />
                        <Link
                          to="#"
                          className="upload-img-trash btn btn-sm btn-danger-light rounded-circle"
                        >
                          <i className="ti ti-trash fs-12" />
                        </Link>
                      </div>
                      <div className="profile-upload">
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-md btn-dark">
                            <i className="ti ti-photo-up fs-14" />
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="fs-14">
                            Upload Image size 180*180, within 5MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Title <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="How to Find the Best Car Rental Deals & Discounts"
                  />
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <CustomSelect
                      options={addBlogCategory}
                      defaultValue={addBlogCategory[0]}
                      className="select d-flex"
                      placeholder="Select"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Tags</label>
                    <Chips
                      value={value}
                      className="input-tags  h-100 w-100"
                      onChange={(e: ChipsChangeEvent) => setValue(e.value)}
                      itemTemplate={customChip}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-0">
                    <label className="form-label">Description</label>
                    <div className="editor">
                      Discover expert tips on finding the best car rental deals
                      and discounts. Learn how to use promo codes, book early,
                      compare prices, and take advantage of loyalty programs for
                      maximum savings.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between align-items-center w-100 flex-wrap gap-2">
                <div className="form-check form-check-md form-switch me-2">
                  <label className="form-check-label form-label mt-0 mb-0">
                    <input
                      className="form-check-input form-label me-2"
                      type="checkbox"
                      role="switch"
                      defaultChecked
                    />
                    Status
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <Link
                    to="#"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                  <Link
                    to={all_routes.adminBlogsList}
                    className="btn btn-primary"
                  >
                    Save Changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Add Blogs */}
      </div>
    </>
  );
};

export default EditBlog;
