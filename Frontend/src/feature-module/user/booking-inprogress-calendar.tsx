import React from 'react'
import DashboardMenu from './common/dashboard-menu'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Link } from 'react-router-dom';
import { all_routes } from '../../router/all_routes';

const BookingInprogressCalendar = () => {
  const routes = all_routes;
  const events = [{ title: "Meeting", start: new Date() }];
  function renderEventContent(eventInfo: { timeText: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; event: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }; }) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  return (
    <div>
        <>
  {/* Breadscrumb Section */}
  <div className="breadcrumb-bar">
    <div className="container">
      <div className="row align-items-center text-center">
        <div className="col-md-12 col-12">
          <h2 className="breadcrumb-title">User Bookings</h2>
          <nav aria-label="breadcrumb" className="page-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={routes.homeOne}>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User Bookings
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* /Breadscrumb Section */}
  <DashboardMenu />
  {/* Page Content */}
  <div className="content">
    <div className="container">
      {/* Content Header */}
      <div className="content-header d-flex align-items-center justify-content-between">
        <h4>My Bookings</h4>
        <ul className="booking-nav">
          <li>
            <Link to={routes.userBookingInprogress}>
              <i className="fa-solid fa-list" />
            </Link>
          </li>
          <li>
            <Link to={routes.BookingInprogressCalendar} className="active">
              <i className="fa-solid fa-calendar-days" />
            </Link>
          </li>
        </ul>
      </div>
      {/* /Content Header */}
      {/* Sort By */}
      <div className="row">
        <div className="col-lg-12">
          <div className="sorting-info">
            <div className="row d-flex align-items-center">
              <div className="col-xl-7 col-lg-8 col-sm-12 col-12">
                <div className="booking-lists">
                <ul className="nav">
                    <li>
                      <Link to={routes.userBookings}>All Bookings</Link>
                    </li>
                    <li>
                      <Link to={routes.userBookingUpcoming}>Upcoming</Link>
                    </li>
                    <li>
                      <Link to={routes.userBookingInprogress}>Inprogress</Link>
                    </li>
                    <li>
                      <Link className="active" to={routes.userBookingComplete}>
                        Completed
                      </Link>
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
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Monthly <i className="fas fa-chevron-down" />
                      </Link>
                      <div className="dropdown-menu dropdown-menu-end">
                        <Link className="dropdown-item" to="#">
                          Monthly
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Last Month
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Yearly
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
      {/* Sort By */}
      <div className="row">
        {/* Inprogress */}
        <div className="col-lg-12 ">
          <div className="card calendar-card mb-0">
            <div className="card-body">
              <div id="inprogress-calendar" />
              <FullCalendar
                      plugins={[dayGridPlugin]}
                      initialView="dayGridMonth"
                      weekends={false}
                      events={events}
                      eventContent={renderEventContent}
                    />
            </div>
          </div>
        </div>
        {/* /Inprogress */}
      </div>
      {/* /Dashboard */}
    </div>
  </div>
  {/* /Page Content */}
</>

    </div>
  )
}

export default BookingInprogressCalendar