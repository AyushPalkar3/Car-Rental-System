
import Breadcrumbs from "../common/breadcrumbs";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../router/all_routes";

const routes = all_routes;
const BlogList = () => {
  
 

  return (
    <>
      <div className="main-wrapper">
        <Breadcrumbs title="Blog List" subtitle="Blogs" />
        {/* Blog List*/}
        <div className="blog-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-list-01.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author">
                                <div className="post-author-img">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-13.jpg"
                                    alt="author"
                                  />
                                </div>
                                <Link to="#">
                                  {" "}
                                  <span> Alphonsa Daniel </span>
                                </Link>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>Feb 6, 2023</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                            <Link to="#" className="me-1">
                              <span>Dealers</span>
                            </Link>
                            <Link to="#">
                              <span>Car Showcase</span>
                            </Link>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Tesla Model S: Top Secret Car Collector’s Garage
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Everyone has the right to freedom of thought,
                          conscience and religion; this right includes freedom
                          to change his religion or belief, and freedom, either
                          alone...
                        </p>
                        <Link
                          to={routes.blogDetails}
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Read More <i className="feather icon-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-list-02.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author">
                                <div className="post-author-img">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-03.jpg"
                                    alt="author"
                                  />
                                </div>
                                <Link to="#">
                                  {" "}
                                  <span> Helan </span>
                                </Link>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>Feb 15, 2023</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                            <Link to="#" className="me-1">
                              <span>Dealers</span>
                            </Link>
                            <Link to="#">
                              <span>Car Showcase</span>
                            </Link>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Tesla Model S: Top Secret Car Collector’s Garage
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Everyone has the right to freedom of thought,
                          conscience and religion; this right includes freedom
                          to change his religion or belief, and freedom, either
                          alone...
                        </p>
                        <Link
                          to={routes.blogDetails}
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Read More <i className="feather icon-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-list-03.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author">
                                <div className="post-author-img">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-05.jpg"
                                    alt="author"
                                  />
                                </div>
                                <Link to="#">
                                  {" "}
                                  <span> Rabien Ustoc </span>
                                </Link>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>Feb 17, 2023</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                            <Link to="#" className="me-1">
                              <span>Dealers</span>
                            </Link>
                            <Link to="#">
                              <span>Car Showcase</span>
                            </Link>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Tesla Model S: Top Secret Car Collector’s Garage
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Everyone has the right to freedom of thought,
                          conscience and religion; this right includes freedom
                          to change his religion or belief, and freedom, either
                          alone...
                        </p>
                        <Link
                          to={routes.blogDetails}
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Read More <i className="feather icon-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 d-lg-flex">
                    <div className="blog grid-blog">
                      <div className="blog-image-list">
                        <Link to={routes.blogDetails}>
                          <ImageWithBasePath
                            className="img-fluid"
                            src="assets/img/blog/blog-list-04.jpg"
                            alt="Post Image"
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <div className="blog-list-date">
                          <ul className="meta-item-list">
                            <li>
                              <div className="post-author">
                                <div className="post-author-img">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-06.jpg"
                                    alt="author"
                                  />
                                </div>
                                <Link to="#">
                                  {" "}
                                  <span> Valerie L. Ellis </span>
                                </Link>
                              </div>
                            </li>
                            <li className="date-icon ms-3">
                              <i className="fa-solid fa-calendar-days" />{" "}
                              <span>Mar 10, 2023</span>
                            </li>
                          </ul>
                          <p className="blog-category mb-0">
                            <Link to="#" className="me-1">
                              <span>Dealers</span>
                            </Link>
                            <Link to="#">
                              <span>Car Showcase</span>
                            </Link>
                          </p>
                        </div>
                        <h3 className="blog-title">
                          <Link to={routes.blogDetails}>
                            Tesla Model S: Top Secret Car Collector’s Garage
                          </Link>
                        </h3>
                        <p className="blog-description">
                          Everyone has the right to freedom of thought,
                          conscience and religion; this right includes freedom
                          to change his religion or belief, and freedom, either
                          alone...
                        </p>
                        <Link
                          to={routes.blogDetails}
                          className="viewlink btn btn-primary justify-content-center"
                        >
                          Read More <i className="feather icon-arrow-right ms-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Pagination*/}
                <div className="pagination">
                  <nav>
                    <ul className="pagination mt-0">
                      <li className="previtem">
                        <Link className="page-link" to="#">
                          <i className="fas fa-regular fa-arrow-left me-2" />{" "}
                          Prev
                        </Link>
                      </li>
                      <li className="justify-content-center pagination-center">
                        <div className="page-group">
                          <ul>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                1
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="active page-link" to="#">
                                2{" "}
                                <span className="visually-hidden">
                                  (current)
                                </span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                3
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                4
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" to="#">
                                5
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="nextlink">
                        <Link className="page-link" to="#">
                          Next{" "}
                          <i className="fas fa-regular fa-arrow-right ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/*/Pagination*/}
              </div>
              <div className="col-lg-4 theiaStickySidebar">
                <div className="stickybar">
                  <div className="rightsidebar">
                    <div className="card">
                      <h4>
                        <ImageWithBasePath
                          src="assets/img/icons/details-icon.svg"
                          alt="details-icon"
                        />{" "}
                        Filter
                      </h4>
                      <div className="filter-content looking-input input-block mb-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="To Search type and hit enter"
                        />
                      </div>
                    </div>
                    <div className="card">
                      <h4>
                        <ImageWithBasePath
                          src="assets/img/icons/category-icon.svg"
                          alt="details-icon"
                        />{" "}
                        Categories
                      </h4>
                      <ul className="blogcategories-list">
                        <li>
                          <Link to="#">Accept Credit Cards</Link>
                        </li>
                        <li>
                          <Link to="#">Smoking Allowed</Link>
                        </li>
                        <li>
                          <Link to="#">Bike Parking</Link>
                        </li>
                        <li>
                          <Link to="#">Street Parking</Link>
                        </li>
                        <li>
                          <Link to="#">Wireless Internet</Link>
                        </li>
                        <li>
                          <Link to="#">Pet Friendly</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="card tags-widget">
                      <h4>
                        <i className="feather icon-tag" /> Tags
                      </h4>
                      <ul className="tags">
                        <li>Air </li>
                        <li>Engine </li>
                        <li>Item </li>
                        <li>On Road </li>
                        <li>Rims </li>
                        <li>Speed </li>
                        <li>Make </li>
                        <li>Transmission </li>
                      </ul>
                    </div>
                    <div className="card">
                      <h4>
                        <i className="feather icon-tag" />
                        Top Article
                      </h4>
                      <div className="article">
                        <div className="article-blog">
                          <Link to={routes.blogDetails}>
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-3.jpg"
                              alt="Blog"
                            />
                          </Link>
                        </div>
                        <div className="article-content">
                          <h5>
                            <Link to={routes.blogDetails}>
                              Great Business Tips in 2023
                            </Link>
                          </h5>
                          <div className="article-date">
                            <i className="fa-solid fa-calendar-days" />
                            <span>Jan 6, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="article">
                        <div className="article-blog">
                          <Link to={routes.blogDetails}>
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-4.jpg"
                              alt="Blog"
                            />
                          </Link>
                        </div>
                        <div className="article-content">
                          <h5>
                            <Link to={routes.blogDetails}>
                              Excited News About Cars.
                            </Link>
                          </h5>
                          <div className="article-date">
                            <i className="fa-solid fa-calendar-days" />
                            <span>Feb 5, 2023</span>
                          </div>
                        </div>
                      </div>
                      <div className="article">
                        <div className="article-blog">
                          <Link to={routes.blogDetails}>
                            <ImageWithBasePath
                              className="img-fluid"
                              src="assets/img/blog/blog-5.jpg"
                              alt="Blog"
                            />
                          </Link>
                        </div>
                        <div className="article-content">
                          <h5>
                            <Link to={routes.blogDetails}>
                              8 Amazing Tricks About Business
                            </Link>
                          </h5>
                          <div className="article-date">
                            <i className="fa-solid fa-calendar-days" />
                            <span>March 10, 2023</span>
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
        {/* /Blog Grid*/}
      </div>
    </>
  );
};

export default BlogList;
