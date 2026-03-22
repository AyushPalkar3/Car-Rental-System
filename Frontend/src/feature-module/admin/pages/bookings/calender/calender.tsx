import  { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import CalenderModal from "../../../common/modal/calenderModal";
import { all_routes } from "../../../../../router/all_routes";

const Calender = () => {
    const [showEventDetailsModal, setShowEventDetailsModal] = useState(false);
    const calendarRef = useRef(null);
    const handleEventClick = () => {
        setShowEventDetailsModal(true);
      };
      const handleEventDetailsClose = () => setShowEventDetailsModal(false);

      const events = [
        {
          title: 'Francis Harris',
          className: 'badge badge-pink-transparent',
          backgroundColor: '#FFEDF6',
          textColor: "#FD3995",		
          start: new Date(Date.now() - 168000000).toJSON().slice(0, 10),
          end: new Date(Date.now() - 168000000).toJSON().slice(0, 10),
        },
        {
            title: 'Reuben Keen',	
            className: 'badge badge-secondary-transparent',
            backgroundColor: '#EDF2F4' ,
            textColor: "#0C4B5E",				  
            start: new Date(Date.now() + 338000000).toJSON().slice(0, 10)
        },
        {
            title: 'William Jones',
            className: 'badge badge-purple-transparent',
            backgroundColor: '#F7EEF9',		
            textColor: "#AB47BC",		  
            start: new Date(Date.now() - 338000000).toJSON().slice(0, 10) 
        },
        {
            title: 'Jay Beckman',
            className: 'badge badge-dark-transparent',
            backgroundColor: '#E8E9EA',		
            textColor: "#212529",				  
            start: new Date(Date.now() + 68000000).toJSON().slice(0, 10) 
        },
        {
            title: 'William Ward',
            className: 'badge badge-danger-transparent',
            backgroundColor: '#FAE7E7',	
            textColor: "#E70D0D",				  
            start: new Date(Date.now() + 88000000).toJSON().slice(0, 10) 
        },
      ];
  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">Calendar</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Calendar
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
            <div className="mb-2">
              <Link
                to="#"
                className="btn btn-primary d-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#add_booking"
              >
                <i className="ti ti-plus me-2" />
                Add New Booking
              </Link>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        <div className="row">
          <div className="col-md-10">
            <ul
              className="nav nav-tabs nav-tabs-solid custom-nav-tabs bg-transparent mb-3"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <Link className="nav-link active" to="#">
                  All Bookings
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="#">
                  In Progress
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="#">
                  Confirmed
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="#">
                  Completed
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link className="nav-link" to="#">
                  Rejected
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="text-end mb-3">
              <Link
                to="#filtercollapse"
                className="filtercollapse coloumn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="filtercollapse"
              >
                <i className="ti ti-filter me-1" /> Filter
                <span className="badge badge-xs rounded-pill bg-danger ms-2">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="collapse" id="filtercollapse">
          <div className="filterbox mb-3 d-flex align-items-center">
            <h6 className="me-3">Filters</h6>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Cars
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-2">
                <li>
                  <div className="top-search m-2">
                    <div className="top-search-group">
                      <span className="input-icon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Ford Endeavour
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Ferrari 458 MM
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Ford Mustang
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Toyota Tacoma 4
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Chevrolet Pick Truck
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Etios Carmen
                  </label>
                </li>
              </ul>
            </div>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Customer
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-2">
                <li>
                  <div className="top-search m-2">
                    <div className="top-search-group">
                      <span className="input-icon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Andrew Simons
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    David Steiger
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Darin Mabry
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Mark Neiman
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Jacob Johnson
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Walter Hartmann
                  </label>
                </li>
              </ul>
            </div>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Driver
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-2">
                <li>
                  <div className="top-search m-2">
                    <div className="top-search-group">
                      <span className="input-icon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Reuben Keen
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    William Jones
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Leonard Jandreau
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Adam Bolden
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Harvey Jimenez
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    William Ward
                  </label>
                </li>
              </ul>
            </div>
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                Rental Type
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-2">
                <li>
                  <div className="top-search m-2">
                    <div className="top-search-group">
                      <span className="input-icon">
                        <i className="ti ti-search" />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Sedan
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Hatchback
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    SUV
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Coupes
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Convertible
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Pickup Truck
                  </label>
                </li>
              </ul>
            </div>
            <Link to="#" className="me-2 text-purple links">
              Apply
            </Link>
            <Link to="#" className="text-danger links">
              Clear All
            </Link>
          </div>
        </div>
        <div>
          <div className="card mb-0">
            <div className="card-body">
              <div className="calendar">
              <FullCalendar
                      plugins={[
                        dayGridPlugin,
                        timeGridPlugin,
                        interactionPlugin,
                      ]}
                      initialView="dayGridMonth"
                      events={events}
                      editable={true}
                      droppable={true}
                      headerToolbar={{
                        center: "title",
                        start: "prev,next,today",
                        end: "dayGridMonth,dayGridWeek,dayGridDay",
                      }}
                      eventClick={handleEventClick}
                      ref={calendarRef}
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Event */}
      <Modal show={showEventDetailsModal} onHide={handleEventDetailsClose}>
        <div className="modal-header">
          <h4 className="d-inline-flex align-items-center">
            Booking Details
            <Link to="#" className="ms-2">
              <i className="ti ti-edit" />
            </Link>
          </h4>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleEventDetailsClose}
          >
            <i className="ti ti-x" />
          </button>
        </div>

        <div className="modal-body">
          <div className="border-bottom mb-3">
            <div className="border rounded p-3 bg-light mb-3">
              <div className="row">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="avatar flex-shrink-0 me-2">
                      <ImageWithBasePath src="assets/admin/img/car/car-01.jpg" alt="" />
                    </span>
                    <div>
                      <h6 className="fs-14 mb-1">Ford Endeavour</h6>
                      <p>Sedan</p>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div>
                    <h6 className="fs-14 mb-1">Price</h6>
                    <p className="fs-14 text-gray-9">
                      $60<span className="text-gray-5 fw-normal">/day</span>
                    </p>
                  </div>
                </div>
                <div className="col-3">
                  <div>
                    <h6 className="fs-14 mb-1">Status</h6>
                    <span className="badge badge-soft-success d-inline-flex align-items-center badge-sm">
                      <i className="ti ti-point-filled me-1" />
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-bottom mb-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Start Date</h6>
              <p>10 Feb 2025, 12:00 PM</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">End Date</h6>
              <p>11 Feb 2025, 01:00 PM</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Rental Period</h6>
              <p>2 Days</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Driving Type</h6>
              <p>Self</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Pickup Location</h6>
              <p>2nd Avenue, Lasvegas</p>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-medium fs-14">Return Location</h6>
              <p>4th Street, Newyork</p>
            </div>
          </div>
          <div className="border-bottom mb-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="mb-3">
                <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                  Customer
                </h6>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span className="avatar avatar-rounded flex-shrink-0 me-2">
                  <ImageWithBasePath src="assets/admin/img/customer/customer-02.jpg" alt="" />
                </span>
                <div>
                  <h6 className="fs-14 fw-medium mb-1">Andrew Simons</h6>
                  <p>+1 56598 98956</p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="mb-3">
                <h6 className="d-inline-flex align-items-center fs-14 fw-medium ">
                  Driver
                </h6>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span className="avatar avatar-rounded flex-shrink-0 me-2">
                  <ImageWithBasePath src="assets/admin/img/customer/customer-01.jpg" alt="" />
                </span>
                <div>
                  <h6 className="fs-14 fw-medium mb-1">Reuben Keen</h6>
                  <p>+1 56598 98956</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <h6>Total Price</h6>
            <h6>$120</h6>
          </div>
        </div>
      </Modal>
      {/* /Event */}
      <CalenderModal/>
    </>
  );
};

export default Calender;
