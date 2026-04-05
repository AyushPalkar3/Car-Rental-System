import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../../router/all_routes";
import PredefinedDateRanges from "../../../common/range-picker/datePicker";
import CommonDatatable from "../../../common/dataTable";
import axios from "axios";
import Cookies from "js-cookie";
import { formatBookingDisplayId } from "../../../../../core/utils/bookingDisplayId";
import { getApiBaseUrl, getMediaBaseUrl } from "../../../../../core/utils/envUrls";

// Status mapping utilities similar to what we did for User Bookings
const statusColors: Record<string, string> = {
  COMPLETED: "bg-success-transparent",
  CONFIRMED: "bg-orange-transparent",
  PENDING: "bg-warning-transparent",
  CANCELLED: "bg-danger-transparent",
};

const statusLabels: Record<string, string> = {
  COMPLETED: "Completed",
  CONFIRMED: "In Progress",
  PENDING: "Upcoming",
  CANCELLED: "Cancelled",
};

// Date Formatter helper
const formatDate = (dateString: string) => {
  if (!dateString) return { day: "--", monthYear: "--", time: "--" };
  const d = new Date(dateString);
  return {
    day: d.getDate().toString().padStart(2, '0'),
    monthYear: `${d.toLocaleString("default", { month: "short" })}, ${d.getFullYear()}`,
    time: d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
  };
};

const ReservationsList = () => {
  const [reservations, setReservations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  // Filters
  const [statusFilter, setStatusFilter] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>("latest"); // latest, asc, desc

  const token = Cookies.get("carPartnerAccessToken");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const toggleStatusFilter = (status: string) => {
    setStatusFilter((prev) =>
      prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
    );
  };

  const clearFilters = () => {
    setStatusFilter([]);
    setSearchValue("");
    setSortOrder("latest");
  };

  useEffect(() => {
    const fetchReservations = async () => {
      if (!token) return;
      try {
        setLoading(true);
        const res = await axios.get(`${getApiBaseUrl()}/car-partner/bookings`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Transform the backend booking models to the shape expected by the frontend table
        const formattedData = res.data.map((booking: any) => {
          const pDate = formatDate(booking.pickupDate);
          const dDate = formatDate(booking.returnDate);
          
          return {
            key: booking.id,
            originalData: booking,
            CAR_ID: booking.car?.id,
            CAR_IMG: booking.car?.images?.[0] || "",
            CAR_NO: formatBookingDisplayId(booking.id),
            CAR: booking.car?.name || "Unknown Car",
            CUSTOMER: `${booking.user?.firstName || ""} ${booking.user?.lastName || ""}`.trim() || "Unknown",
            BADGE: "Client", 
            PICK_UP_DATE: pDate.day,
            PICK_UP_MONTHYEAR: pDate.monthYear,
            PICK_UP_TIME: pDate.time,
            PICK_UP_DETAILS: booking.deliveryAddress || booking.pickupLocation || "N/A",
            DROP_OFF_DATE: dDate.day,
            DROP_OFF_MONTHYEAR: dDate.monthYear,
            DROP_OFF_TIME: dDate.time,
            DROP_OFF_DETAILS: booking.returnAddress || booking.dropoffLocation || "N/A",
            STATUS: booking.status,
            CREATED_AT: new Date(booking.createdAt).getTime(), 
          };
        });
        
        setReservations(formattedData);
      } catch (err) {
        console.error("Failed to fetch car partner reservations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [token]);


  // Apply client-side filters
  let filteredData = reservations.filter((record) => {
    // 1. Text Search Filter
    const searchLower = searchValue.toLowerCase();
    const matchSearch = 
      record.CAR.toLowerCase().includes(searchLower) ||
      record.CAR_NO.toLowerCase().includes(searchLower) ||
      record.CUSTOMER.toLowerCase().includes(searchLower) ||
      record.PICK_UP_DETAILS.toLowerCase().includes(searchLower) ||
      record.DROP_OFF_DETAILS.toLowerCase().includes(searchLower);

    // 2. Status Filter
    const matchStatus = statusFilter.length === 0 || statusFilter.includes(record.STATUS);

    return matchSearch && matchStatus;
  });

  // Apply Sort
  filteredData.sort((a, b) => {
    if (sortOrder === "asc") return a.CAR.localeCompare(b.CAR);
    if (sortOrder === "desc") return b.CAR.localeCompare(a.CAR);
    if (sortOrder === "latest") return b.CREATED_AT - a.CREATED_AT;
    return 0; // default
  });



  const columns = [
    {
      title: "CAR",
      dataIndex: "CAR",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <Link
            to={
              record.CAR_ID
                ? `${all_routes.carPartnerCarDetails}?id=${record.CAR_ID}`
                : all_routes.carPartnerCarsList
            }
            className="avatar me-2 flex-shrink-0"
          >
            <img
              src={
                record.CAR_IMG?.startsWith("http")
                  ? record.CAR_IMG
                  : `${getMediaBaseUrl()}${record.CAR_IMG || ""}`
              }
              onError={(e:any) => e.target.src = "assets/admin/img/car/car-01.jpg"}
              alt="car"
            />
          </Link>
          <div>
            <Link
              to={`${all_routes.carPartnerReservationDetails}/${record.key}`}
              className="text-info d-block mb-1"
            >
              #{record.CAR_NO}
            </Link>
            <h6 className="fs-14">
              <Link
                to={
                  record.CAR_ID
                    ? `${all_routes.carPartnerCarDetails}?id=${record.CAR_ID}`
                    : all_routes.carPartnerCarsList
                }
              >
                {text}
              </Link>
            </h6>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CAR.length - b.CAR.length,
    },
    {
      title: "CUSTOMER",
      dataIndex: "CUSTOMER",
      render: (text: string, record: any) => (
        <div>
          <h6 className="mb-1 fs-14">
            <Link to={`${all_routes.carPartnerReservationDetails}/${record.key}`}>{text}</Link>
          </h6>
          <span
            className={`badge  ${record.BADGE === "Client" ? "bg-secondary-transparent" : "bg-violet-transparent"} rounded-pill`}
          >
            {record.BADGE}
          </span>
        </div>
      ),
      sorter: (a: any, b: any) => a.CUSTOMER.length - b.CUSTOMER.length,
    },

    {
      title: "PICK UP DETAILS",
      dataIndex: "PICK_UP_DETAILS",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <div className="border rounded text-center flex-shrink-0 p-1 me-2" style={{minWidth:"50px"}}>
            <h5 className="mb-1 fs-16">{record.PICK_UP_DATE}</h5>
            <span className="fw-medium fs-11 bg-light p-1 rounded-1 d-inline-block text-gray-9">
              {record.PICK_UP_MONTHYEAR}
            </span>
          </div>
          <div>
            <p className="text-gray-9 mb-0">{text} </p>
            <span className="fs-13">{record.PICK_UP_TIME}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        a.PICK_UP_DETAILS.length - b.PICK_UP_DETAILS.length,
    },
    {
      title: "DROP OFF DETAILS",
      dataIndex: "DROP_OFF_DETAILS",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <div className="border rounded text-center flex-shrink-0 p-1 me-2" style={{minWidth:"50px"}}>
            <h5 className="mb-1 fs-16">{record.DROP_OFF_DATE}</h5>
            <span className="fw-medium fs-11 bg-light p-1 rounded-1 d-inline-block text-gray-9">
              {record.DROP_OFF_MONTHYEAR}
            </span>
          </div>
          <div>
            <p className="text-gray-9 mb-0">{text} </p>
            <span className="fs-13">{record.DROP_OFF_TIME}</span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) =>
        a.DROP_OFF_DETAILS.length - b.DROP_OFF_DETAILS.length,
    },
    {
      title: "STATUS",
      dataIndex: "STATUS",
      render: (text: string) => (
        <span
          className={`badge ${statusColors[text] || "bg-secondary-transparent"} d-inline-flex align-items-center badge-sm `}
        >
          <i className="ti ti-point-filled me-1" />
          {statusLabels[text] || text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
    {
      title: "Action",
      dataIndex: "",
      render: (_, record:any) => (
        <div className="dropdown">
          <button
            className="btn btn-icon btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ti ti-dots-vertical" />
          </button>
          <ul className="dropdown-menu dropdown-menu-end p-2">
            <li>
              <Link
                className="dropdown-item rounded-1"
                to={`${all_routes.carPartnerReservationDetails}/${record.key}`}
              >
                <i className="ti ti-eye me-1" />
                View Details
              </Link>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="content me-4">
        {/* Breadcrumb */}
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">All Reservations</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.carPartnerDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  All Reservations
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* /Breadcrumb */}
        
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-sort-ascending me-1" /> Sort By : {sortOrder === "latest" ? "Latest" : sortOrder === "asc" ? "Ascending A-Z" : "Descending Z-A"}
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-2">
                <li>
                  <button className="dropdown-item rounded-1" onClick={() => setSortOrder('latest')}>
                    Latest
                  </button>
                </li>
                <li>
                  <button className="dropdown-item rounded-1" onClick={() => setSortOrder('asc')}>
                    Ascending (A-Z)
                  </button>
                </li>
                <li>
                  <button className="dropdown-item rounded-1" onClick={() => setSortOrder('desc')}>
                    Descending (Z-A)
                  </button>
                </li>
              </ul>
            </div>
          
            <div className="dropdown">
              <Link
                to="#filtercollapse"
                className="filtercollapse coloumn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="filtercollapse"
              >
                <i className="ti ti-filter me-1" /> Filter{" "}
                {statusFilter.length > 0 && (
                   <span className="badge badge-xs rounded-pill bg-danger ms-2">
                    {statusFilter.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content align-items-center flex-wrap row-gap-3">
            <div className="top-search me-2">
              <div className="top-search-group">
                <span className="input-icon">
                  <i className="ti ti-search" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Cars / Customers"
                  value={searchValue} 
                  onChange={handleSearchChange} 
                />
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}
        
        <div className="collapse" id="filtercollapse">
          <div className="filterbox mb-3 d-flex align-items-center">
            <h6 className="me-3">Filters</h6>
            
            <div className="dropdown me-3">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ti ti-badge me-1" />
                Status
              </Link>
              <ul className="dropdown-menu dropdown-menu-lg p-2 filter-dropdown-menu">
                {Object.keys(statusLabels).map(status => (
                    <li key={status}>
                      <label className="dropdown-item d-flex align-items-center rounded-1">
                        <input
                          className="form-check-input m-0 me-2"
                          type="checkbox"
                          checked={statusFilter.includes(status)}
                          onChange={() => toggleStatusFilter(status)}
                        />
                        {statusLabels[status]}
                      </label>
                    </li>
                ))}
            
              </ul>
            </div>
            
            {statusFilter.length > 0 && (
                <button onClick={clearFilters} className="btn btn-sm btn-white text-danger">
                  Clear Filters
                </button>
            )}
          </div>
        </div>
        
        {/* Custom Data Table */}
        {loading ? (
           <div className="d-flex justify-content-center p-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
           </div>
        ) : (
          <CommonDatatable
            dataSource={filteredData}
            columns={columns}
            searchValue={searchValue}
            showRowSelection={false}
          />
        )}
      </div>
    </>
  );
};

export default ReservationsList;
