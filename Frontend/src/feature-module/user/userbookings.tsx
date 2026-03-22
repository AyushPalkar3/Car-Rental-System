import { useCallback, useEffect, useState } from "react";
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
  ExtendBookingModal,
  BookingTableSkeleton,
} from "./common/bookingUtils";

const UserBookings = () => {
  const routes = all_routes;
  const userInfo = useSelector((state: any) => state.user.userInfo);
  const [allBookings, setAllBookings] = useState<any[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [extendBooking, setExtendBooking] = useState<any>(null);
  const [searchInput, setSearchInput] = useState("");
  const [dateFilter, setDateFilter] = useState("all");
  const [sortMode, setSortMode] = useState("desc");
  const [loading, setLoading] = useState(false);

  const fetchBookings = useCallback(async () => {
    try {
      const userId = userInfo?.user?.id || userInfo?.id;
      if (!userId) return;
      setLoading(true);
      const res = await axios.get(
        `http://localhost:4000/api/bookings/user/${userId}`,
        { headers: { Authorization: `Bearer ${getAccessToken()}` } }
      );
      setAllBookings(res.data.map(formatBooking));
    } catch (e) {
      console.error("Failed to fetch bookings:", e);
    } finally {
      setLoading(false);
    }
  }, [userInfo]);

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
    fetchBookings();
  }, [fetchBookings]);

  const openExtendModal = (raw: any) => {
    setExtendBooking(raw);
    setTimeout(() => {
      const el = document.getElementById("extend_booking_modal");
      const B = (window as unknown as {
        bootstrap?: { Modal: { getOrCreateInstance: (n: HTMLElement) => { show: () => void } } };
      }).bootstrap;
      if (el && B) B.Modal.getOrCreateInstance(el).show();
    }, 0);
  };

  const filteredData = applySort(
    applyDateFilter(allBookings, dateFilter).filter((b) => {
      const q = searchInput.toLowerCase();
      return (
        b.bookingId.toLowerCase().includes(q) ||
        b.carName.toLowerCase().includes(q) ||
        b.status.toLowerCase().includes(q) ||
        b.total.toLowerCase().includes(q)
      );
    }),
    sortMode
  );

  const BookingId = (res: any) => (
    <Link
      to="#"
      data-bs-toggle="modal"
      data-bs-target="#booking_detail_modal"
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

  const statusBadge = (res: any) => (
    <span
      className={
        res.status === "Upcoming"
          ? "badge badge-light-secondary"
          : res.status === "Inprogress"
          ? "badge badge-light-warning"
          : res.status === "Cancelled"
          ? "badge badge-light-danger"
          : "badge badge-light-success"
      }
    >
      {res.status}
    </span>
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
          data-bs-target="#booking_detail_modal"
          onClick={() => setSelectedBooking(res.originalData)}
        >
          <i className="feather icon-eye" /> View
        </Link>
        {res.originalData?.status === "CONFIRMED" ? (
          <Link
            className="dropdown-item"
            to="#"
            onClick={(e) => {
              e.preventDefault();
              openExtendModal(res.originalData);
            }}
          >
            <i className="feather icon-clock" /> Extend
          </Link>
        ) : null}
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
      : sortMode === "desc"
      ? "Sort By Descending"
      : sortMode === "alpha"
      ? "Sort By Alphabet"
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
          <div className="row">
            <div className="col-lg-12">
              <div className="sorting-info">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-7 col-lg-8 col-sm-12 col-12">
                    <div className="booking-lists">
                      <ul className="nav">
                        <li>
                          <Link className="active" to={routes.userBookings}>
                            All Bookings
                          </Link>
                        </li>
                        <li>
                          <Link to={routes.userBookingUpcoming}>Upcoming</Link>
                        </li>
                        <li>
                          <Link to={routes.userBookingInprogress}>Inprogress</Link>
                        </li>
                        <li>
                          <Link to={routes.userBookingComplete}>Completed</Link>
                        </li>
                        <li>
                          <Link to={routes.userBookingCancelled}>Cancelled</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-4 col-sm-12 col-12">
                    <div className="filter-group">
                      <div className="sort-week sort">
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                            {dateLabel} <i className="fas fa-chevron-down" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            {[
                              ["all", "All Time"],
                              ["week", "This Week"],
                              ["month", "This Month"],
                              ["30days", "Last 30 Days"],
                            ].map(([val, label]) => (
                              <button
                                key={val}
                                className="dropdown-item"
                                onClick={() => setDateFilter(val)}
                              >
                                {label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="sort-relevance sort">
                        <div className="dropdown dropdown-action">
                          <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                            {sortLabel} <i className="fas fa-chevron-down" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end">
                            {[
                              ["desc", "Sort By Relevance"],
                              ["asc", "Sort By Ascending"],
                              ["alpha", "Sort By Alphabet"],
                            ].map(([val, label]) => (
                              <button
                                key={val}
                                className="dropdown-item"
                                onClick={() => setSortMode(val)}
                              >
                                {label}
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

          <div className="row">
            <div className="col-lg-12 d-flex">
              <div className="card book-card flex-fill mb-0">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <h4>
                        All Bookings <span>{filteredData.length}</span>
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
                    <BookingTableSkeleton />
                  ) : (
                    <div className="table-responsive dashboard-table">
                      <DataTable
                        className="table datatable"
                        value={filteredData}
                        emptyMessage="No bookings found."
                      >
                        <Column field="bookingId" header="Booking ID" body={BookingId} />
                        <Column field="carName" header="Car Name" body={carName} />
                        <Column field="rentalType" header="Rental Type" />
                        <Column
                          field="deliveryStatus"
                          header="Pickup / Delivery"
                          body={delivery}
                        />
                        <Column field="location" header="Dropoff Location" body={location} />
                        <Column field="bookedOn" header="Booked On" />
                        <Column field="total" header="Total" />
                        <Column field="status" header="Status" body={statusBadge} />
                        <Column field="action" header="Action" body={action} />
                      </DataTable>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingModal booking={selectedBooking} userInfo={userInfo} modalId="booking_detail_modal" />
      <ExtendBookingModal
        booking={extendBooking}
        userInfo={userInfo}
        onSuccess={fetchBookings}
        onClose={() => setExtendBooking(null)}
      />
    </>
  );
};

export default UserBookings;
