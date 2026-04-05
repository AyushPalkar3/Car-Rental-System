import { useEffect, useState } from "react";
import Aos from "aos";
import Breadcrumbs from "../common/breadcrumbs";
import DashboardMenu from "./common/dashboard-menu";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { all_routes } from "../../router/all_routes";
import { useSelector } from "react-redux";
import axios from "axios";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import {
  getAccessToken,
  formatBooking,
  applyDateFilter,
  applySort,
  BookingModal,
  BookingTableSkeleton,
} from "./common/bookingUtils";
import { getApiBaseUrl } from "../../core/utils/envUrls";

const UserBookingComplete = () => {
  const routes = all_routes;
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const [allBookings, setAllBookings] = useState<any[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [searchInput, setSearchInput] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortMode, setSortMode] = useState("desc");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
    const fetchBookings = async () => {
      try {
        const userId = userInfo?.user?.id || userInfo?.id;
        if (!userId) return;
        setLoading(true);
        const res = await axios.get(
          `${getApiBaseUrl()}/bookings/user/${userId}`,
          { headers: { Authorization: `Bearer ${getAccessToken()}` } }
        );
        // COMPLETED status
        const formatted = res.data
          .filter((b: any) => b.status === "COMPLETED")
          .map(formatBooking);
        setAllBookings(formatted);
      } catch (e) {
        console.error("Failed to fetch completed bookings:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [userInfo]);

  const filteredData = applySort(
    applyDateFilter(allBookings, dateFilter).filter((b) => {
      const q = searchInput.toLowerCase();
      return (
        b.bookingId.toLowerCase().includes(q) ||
        b.carName.toLowerCase().includes(q) ||
        b.total.toLowerCase().includes(q)
      );
    }),
    sortMode
  );

  const BookingId = (res: any) => (
    <Link
      to="#"
      data-bs-toggle="modal"
      data-bs-target="#complete_detail_modal"
      className="bookbyid"
      onClick={() => setSelectedBooking(res.originalData)}
    >
      {res.bookingId}
    </Link>
  );

  const carName = (res: any) => (
    <div className="table-avatar">
      <Link to="#" className="avatar avatar-lg flex-shrink-0">
        <ImageWithBasePath className="avatar-img" src={res.img} alt="Booking" />
      </Link>
      <div className="table-head-name flex-grow-1">
        <Link to="#">{res.carName}</Link>
        <p>{res.deliveryStatus}</p>
      </div>
    </div>
  );

  const delivery = (res: any) => (
    <p>
      {res.pickupDeliveryLocation1}
      <span className="d-block">{res.pickupDeliveryLocation2}</span>
    </p>
  );

  const location = (res: any) => (
    <p>
      {res.dropoffLocation1}
      <span className="d-block">{res.dropoffLocation2}</span>
    </p>
  );

  const statusBadge = () => (
    <span className="badge badge-light-success">Completed</span>
  );

  const action = (res: any) => (
    <div className="dropdown dropdown-action">
      <Link
        to="#"
        className="dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fas fa-ellipsis-vertical" />
      </Link>
      <div className="dropdown-menu dropdown-menu-end">
        <Link
          className="dropdown-item"
          to="#"
          data-bs-toggle="modal"
          data-bs-target="#complete_detail_modal"
          onClick={() => setSelectedBooking(res.originalData)}
        >
          <i className="feather icon-eye" /> View
        </Link>
      </div>
    </div>
  );

  const dateLabel =
    dateFilter === "week"
      ? "This Week"
      : dateFilter === "month"
      ? "This Month"
      : dateFilter === "30days"
      ? "Last 30 Days"
      : "All Time";

  const sortLabel =
    sortMode === "asc"
      ? "Sort By Ascending"
      : sortMode === "alpha"
      ? "Sort By Alphabet"
      : sortMode === "desc"
      ? "Sort By Descending"
      : "Sort By Relevance";

  return (
    <>
      <Breadcrumbs title="My Bookings" subtitle="My Bookings" />
      <DashboardMenu />
      <div className="content">
        <div className="container">
          <div className="content-header">
            <h4>My Bookings</h4>
          </div>

          {/* Filter Bar */}
          <div className="row">
            <div className="col-lg-12">
              <div className="sorting-info">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-7 col-lg-8 col-sm-12 col-12">
                    <div className="booking-lists">
                      <ul className="nav">
                        <li><Link to={routes.userBookings}>All Bookings</Link></li>
                        <li><Link to={routes.userBookingUpcoming}>Upcoming</Link></li>
                        <li><Link to={routes.userBookingInprogress}>Inprogress</Link></li>
                        <li>
                          <Link className="active" to={routes.userBookingComplete}>
                            Completed
                          </Link>
                        </li>
                        <li><Link to={routes.userBookingCancelled}>Cancelled</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-4 col-sm-12 col-12">
                    <div className="filter-group">
                      <div className="sort-week sort">
                        <div className="dropdown dropdown-action">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            {dateLabel} <i className="fas fa-chevron-down" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            {[
                              ["all", "All Time"],
                              ["week", "This Week"],
                              ["month", "This Month"],
                              ["30days", "Last 30 Days"],
                            ].map(([v, l]) => (
                              <button
                                key={v}
                                className="dropdown-item"
                                onClick={() => setDateFilter(v)}
                              >
                                {l}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="sort-relevance sort">
                        <div className="dropdown dropdown-action">
                          <Link
                            to="#"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                          >
                            {sortLabel} <i className="fas fa-chevron-down" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            {[
                              ["desc", "Sort By Relevance"],
                              ["asc", "Sort By Ascending"],
                              ["alpha", "Sort By Alphabet"],
                            ].map(([v, l]) => (
                              <button
                                key={v}
                                className="dropdown-item"
                                onClick={() => setSortMode(v)}
                              >
                                {l}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="card book-card flex-fill mb-0">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <h4>
                        Completed <span>{filteredData.length}</span>
                      </h4>
                    </div>
                    <div className="col-md-7 text-md-end">
                      <div className="table-search">
                        <div id="tablefilter">
                          <label>
                            <input
                              type="text"
                              value={searchInput}
                              onChange={(e) => setSearchInput(e.target.value)}
                              placeholder="Search"
                              className="inputsearch"
                            />
                          </label>
                        </div>
                        <Link to={routes.listingGrid} className="btn btn-add">
                          <i className="feather icon-plus-circle" /> Add Booking
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  {loading ? (
                    <BookingTableSkeleton pickupHeader="Pickup / Delivery Location" />
                  ) : (
                    <div className="table-responsive dashboard-table">
                      <DataTable
                        className="table datatable"
                        value={filteredData}
                        emptyMessage="No completed bookings found."
                      >
                        <Column
                          field="bookingId"
                          header="Booking ID"
                          body={BookingId}
                        />
                        <Column
                          field="carName"
                          header="Car Name"
                          body={carName}
                        />
                        <Column field="rentalType" header="Rental Type" />
                        <Column
                          field="deliveryStatus"
                          header="Pickup / Delivery Location"
                          body={delivery}
                        />
                        <Column
                          field="location"
                          header="Dropoff Location"
                          body={location}
                        />
                        <Column field="bookedOn" header="Booked On" />
                        <Column field="total" header="Total" />
                        <Column
                          field="status"
                          header="Status"
                          body={statusBadge}
                        />
                        <Column
                          field="action"
                          header="Action"
                          body={action}
                        />
                      </DataTable>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        booking={selectedBooking}
        userInfo={userInfo}
        modalId="complete_detail_modal"
      />
    </>
  );
};

export default UserBookingComplete;
