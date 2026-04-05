import React, { useEffect, useState } from "react";
import CustomerModal from "../../common/modal/customerModal";
import { Link, useParams } from "react-router-dom";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import { all_routes } from "../../../../router/all_routes";
import { userAPI } from "../../service/api/user";
import { toast } from "react-toastify";
import { getMediaBaseUrl } from "../../../../core/utils/envUrls";

function resolveDocumentUrl(path: string | null | undefined): string | null {
  if (path == null) return null;
  const p = String(path).trim();
  if (!p) return null;
  if (/^https?:\/\//i.test(p)) return p;
  const rel = p.startsWith("/") ? p : `/${p}`;
  return `${getMediaBaseUrl()}${rel}`;
}

const CustomerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await userAPI.getById(id);
        setUser(response.data);
      } catch (error: any) {
        toast.error(error.message || "Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) return <div className="p-5 text-center">Loading...</div>;
  if (!user) return <div className="p-5 text-center">User not found</div>;

  return (
    <>
      <div className="content me-0">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mb-3">
              <Link
                to={all_routes.adminCustomerList}
                className="d-inline-flex align-items-center fw-medium"
              >
                <i className="ti ti-arrow-left me-1" />
                Back to Customers
              </Link>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="border-bottom mb-3 pb-3">
                  <h5>Basic Details</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div>
                    <h6 className="mb-1">{user.firstName} {user.lastName}</h6>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 me-2">Added On : {new Date(user.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center flex-wrap gap-3">
                    <span className="badge badge-md bg-info-transparent">
                      License Number : {user.dlNumber || "N/A"}
                    </span>
                    <span className={`badge badge-md ${user.isBlocked ? "bg-danger-transparent" : "bg-success-transparent"}`}>
                      Status : {user.isBlocked ? "Blocked" : "Active"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-xl-0">
              <div className="card-header py-0">
                <ul className="nav nav-tabs nav-tabs-bottom tab-dark">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="#user-overview"
                      data-bs-toggle="tab"
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="#recent-rents"
                      data-bs-toggle="tab"
                    >
                      Recent Rents
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <div className="tab-content">
                  {/* Overview */}
                  <div className="tab-pane fade active show" id="user-overview">
                    <div className="border-bottom mb-3 pb-3">
                      <div className="row">
                        <div className="col-md-4 col-sm-6">
                          <div className="mb-3">
                            <h6 className="fs-14 fw-semibold mb-1">
                              Phone Number
                            </h6>
                            <p className="fs-13">{user.phoneNum}</p>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div className="mb-3">
                            <h6 className="fs-14 fw-semibold mb-1">Email</h6>
                            <p className="fs-13">{user.email || "N/A"}</p>
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="mb-3">
                            <h6 className="fs-14 fw-semibold mb-1">Address</h6>
                            <p className="fs-13">
                              {user.address ? (
                                `${user.address.addressLine}, ${user.address.city}, ${user.address.state}, ${user.address.country} - ${user.address.pincode}`
                              ) : (
                                "N/A"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                        <h6>Documents</h6>
                      </div>
                      <div className="d-flex align-items-center flex-wrap gap-4">
                        {[
                          {
                            label: "Driving License",
                            href: resolveDocumentUrl(user.dlPdf),
                          },
                          {
                            label: "Aadhaar Card",
                            href: resolveDocumentUrl(user.aadhaarPdf),
                          },
                          {
                            label: "Address Proof",
                            href: resolveDocumentUrl(user.addressProofPdf),
                          },
                        ]
                          .filter((d) => d.href)
                          .map(({ label, href }) => (
                            <div
                              key={label}
                              className="d-flex align-items-center border rounded px-3 py-2 bg-light"
                            >
                              <span className="me-2 flex-shrink-0">
                                <ImageWithBasePath
                                  src="assets/admin/img/icons/pdf-icon.svg"
                                  alt=""
                                />
                              </span>
                              <div>
                                <h6 className="fs-14 fw-medium mb-0">{label}</h6>
                                <a
                                  href={href!}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="fs-13 text-primary text-decoration-underline"
                                >
                                  View PDF
                                </a>
                              </div>
                            </div>
                          ))}
                        {!resolveDocumentUrl(user.dlPdf) &&
                          !resolveDocumentUrl(user.aadhaarPdf) &&
                          !resolveDocumentUrl(user.addressProofPdf) && (
                            <p className="text-muted mb-0">No documents uploaded</p>
                          )}
                      </div>
                    </div>
                  </div>
                  {/* /Overview */}
                  {/* Recent Rents */}
                  <div className="tab-pane fade" id="recent-rents">
                    {user.bookings?.length > 0 ? (
                      user.bookings.map((booking: any) => (
                        <div className="card" key={booking.id}>
                          <div className="card-body">
                            <div className="row gy-3 align-items-center">
                              <div className="col-lg-9">
                                <div className="row gy-3 align-items-center">
                                  <div className="col-lg-4">
                                    <div className="d-flex align-items-center">
                                      <span className="avatar flex-shrink-0 me-2">
                                        <ImageWithBasePath
                                          src={
                                            booking.car.thumbnail
                                              ? booking.car.thumbnail.startsWith("http")
                                                ? booking.car.thumbnail
                                                : `${getMediaBaseUrl()}${booking.car.thumbnail}`
                                              : "assets/admin/img/car/car-06.jpg"
                                          }
                                          alt=""
                                        />
                                      </span>
                                      <div>
                                        <h6 className="fs-14">{booking.car.name}</h6>
                                        <span className="badge bg-light text-dark">{booking.status}</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Booked on</h6>
                                      <p>{new Date(booking.createdAt).toLocaleString()}</p>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div>
                                      <h6 className="fs-14 mb-1">Amount</h6>
                                      <p>₹{booking.totalPrice}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No bookings found</p>
                    )}
                  </div>
                  {/* /Recent Rents */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CustomerModal />
    </>
  );
};

export default CustomerDetails;
