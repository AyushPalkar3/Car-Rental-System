import { useEffect, useState } from "react";
import Breadcrumbs from "../common/breadcrumbs";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import Aos from "aos";
import DashboardMenu from "./common/dashboard-menu";
import { all_routes } from "../../router/all_routes";
import { useSelector } from "react-redux";
import axios from "axios";
import { getAccessToken } from "./common/bookingUtils";

const statusBadgeClass: Record<string, string> = {
  PENDING: "badge-light-secondary",
  CONFIRMED: "badge-light-warning",
  COMPLETED: "badge-light-success",
  CANCELLED: "badge-light-danger",
};

const statusLabel: Record<string, string> = {
  PENDING: "Upcoming",
  CONFIRMED: "Inprogress",
  COMPLETED: "Completed",
  CANCELLED: "Cancelled",
};

const UserDashboard = () => {
  const routes = all_routes;
  const userInfo = useSelector((state: any) => state.user.userInfo);

  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
    const fetchStats = async () => {
      try {
        const userId = userInfo?.user?.id || userInfo?.id;
        if (!userId) return;
        setLoading(true);
        const res = await axios.get(
          `http://localhost:4000/api/bookings/user/${userId}/stats`,
          { headers: { Authorization: `Bearer ${getAccessToken()}` } }
        );
        setStats(res.data);
      } catch (e) {
        console.error("Failed to fetch dashboard stats:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, [userInfo]);

  const getCarImg = (car: any) => {
    if (car?.images?.[0]) return `http://localhost:4000${car.images[0]}`;
    return "assets/img/cars/car-01.jpg";
  };

  return (
    <>
      <Breadcrumbs title="User Dashboard" subtitle="User Dashboard" />
      <DashboardMenu />

      <div className="content dashboard-content">
        <div className="container">
          {/* Content Header */}
          <div className="content-header">
            <h4>Dashboard</h4>
          </div>

          {/* Stat Widgets */}
          <div className="row">
            {/* My Bookings */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="widget-box flex-fill">
                <div className="widget-header">
                  <div className="widget-content">
                    <h6>My Bookings</h6>
                    <h3>{loading ? "…" : stats?.totalBookings ?? 0}</h3>
                  </div>
                  <div className="widget-icon">
                    <span>
                      <ImageWithBasePath src="assets/img/icons/book-icon.svg" alt="icon" />
                    </span>
                  </div>
                </div>
                <Link to={routes.userBookings} className="view-link">
                  View all Bookings <i className="feather icon-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Total Transactions */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="widget-box flex-fill">
                <div className="widget-header">
                  <div className="widget-content">
                    <h6>Total Transactions</h6>
                    <h3>
                      {loading ? "…" : `₹${(stats?.totalSpent ?? 0).toLocaleString("en-IN")}`}
                    </h3>
                  </div>
                  <div className="widget-icon">
                    <span className="bg-success">
                      <ImageWithBasePath src="assets/img/icons/transaction-icon.svg" alt="icon" />
                    </span>
                  </div>
                </div>
                <Link to={routes.userPayment} className="view-link">
                  View all Transactions <i className="feather icon-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Upcoming */}
            <div className="col-lg-3 col-md-6 d-flex">
              <div className="widget-box flex-fill">
                <div className="widget-header">
                  <div className="widget-content">
                    <h6>Upcoming</h6>
                    <h3>{loading ? "…" : stats?.statusCounts?.PENDING ?? 0}</h3>
                  </div>
                  <div className="widget-icon">
                    <span className="bg-warning">
                      <ImageWithBasePath src="assets/img/icons/book-icon.svg" alt="icon" />
                    </span>
                  </div>
                </div>
                <Link to={routes.userBookingUpcoming} className="view-link">
                  View Upcoming <i className="feather icon-arrow-right" />
                </Link>
              </div>
            </div>

            {/* Completed */}
            {/* <div className="col-lg-3 col-md-6 d-flex">
              <div className="widget-box flex-fill">
                <div className="widget-header">
                  <div className="widget-content">
                    <h6>Completed</h6>
                    <h3>{loading ? "…" : stats?.statusCounts?.COMPLETED ?? 0}</h3>
                  </div>
                  <div className="widget-icon">
                    <span className="bg-success">
                      <ImageWithBasePath src="assets/img/icons/cars-icon.svg" alt="icon" />
                    </span>
                  </div>
                </div>
                <Link to={routes.userBookingComplete} className="view-link">
                  View Completed <i className="feather icon-arrow-right" />
                </Link>
              </div>
            </div> */}
          </div>

          {/* Tables */}
          <div className="row">
            {/* Last 5 Bookings */}
            <div className="col-lg-8 d-flex">
              <div className="card user-card flex-fill">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-sm-5">
                      <h5>Last 5 Bookings</h5>
                    </div>
                    <div className="col-sm-7 text-sm-end">
                      <div className="booking-select">
                        <Link to={routes.userBookings} className="view-link">
                          View all Bookings
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive dashboard-table dashboard-table-info">
                    {loading ? (
                      <p className="text-center py-4">Loading...</p>
                    ) : !stats?.recentBookings?.length ? (
                      <p className="text-center py-4 text-muted">No bookings yet.</p>
                    ) : (
                      <table className="table">
                        <tbody>
                          {stats.recentBookings.map((b: any) => (
                            <tr key={b.id}>
                              <td>
                                <div className="table-avatar">
                                  <Link to={routes.userBookings} className="avatar avatar-lg flex-shrink-0">
                                    <img
                                      className="avatar-img"
                                      src={getCarImg(b.car)}
                                      alt="car"
                                      onError={(e: any) => { e.target.src = "assets/img/cars/car-01.jpg"; }}
                                    />
                                  </Link>
                                  <div className="table-head-name flex-grow-1">
                                    <Link to={routes.userBookings}>{b.car?.name || "Unknown Car"}</Link>
                                    <p>Rent Type : {b.duration || "N/A"}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h6>Start date</h6>
                                <p>{b.pickupDate ? new Date(b.pickupDate).toLocaleString() : "—"}</p>
                              </td>
                              <td>
                                <h6>End Date</h6>
                                <p>{b.returnDate ? new Date(b.returnDate).toLocaleString() : "—"}</p>
                              </td>
                              <td>
                                <h6>Price</h6>
                                <h5 className="text-danger">₹{b.totalPrice ?? 0}</h5>
                              </td>
                              <td>
                                <span className={`badge ${statusBadgeClass[b.status] || "badge-light-secondary"}`}>
                                  {statusLabel[b.status] || b.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="col-lg-4 d-flex">
              <div className="card user-card flex-fill">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-sm-6">
                      <h5>Recent Transactions</h5>
                    </div>
                    <div className="col-sm-6 text-sm-end">
                      <Link to={routes.userPayment} className="view-link">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive dashboard-table dashboard-table-info">
                    {loading ? (
                      <p className="text-center py-4">Loading...</p>
                    ) : !stats?.recentPayments?.length ? (
                      <p className="text-center py-4 text-muted">No transactions yet.</p>
                    ) : (
                      <table className="table">
                        <tbody>
                          {stats.recentPayments.map((p: any) => (
                            <>
                              <tr key={p.id}>
                                <td className="border-0">
                                  <div className="table-avatar">
                                    <Link to={routes.userPayment} className="avatar avatar-md flex-shrink-0">
                                      <img
                                        className="avatar-img"
                                        src={getCarImg(p.booking?.car)}
                                        alt="car"
                                        onError={(e: any) => { e.target.src = "assets/img/cars/car-01.jpg"; }}
                                      />
                                    </Link>
                                    <div className="table-head-name flex-grow-1">
                                      <Link to={routes.userPayment}>
                                        {p.booking?.car?.name || "Unknown Car"}
                                      </Link>
                                      <p>₹{p.amount}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="border-0 text-end">
                                  <span className="badge badge-light-success">Paid</span>
                                </td>
                              </tr>
                              <tr key={`${p.id}-status`}>
                                <td colSpan={2} className="pt-0">
                                  <div className="status-box">
                                    <p>
                                      <span>Date : </span>
                                      {new Date(p.createdAt).toLocaleString()}
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Dashboard */}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
