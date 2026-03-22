import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../../router/all_routes";
import ImageWithBasePath from "../../../../../core/data/img/ImageWithBasePath";
import PredefinedDateRanges from "../../../common/range-picker/datePicker";
import CommonDatatable from "../../../common/dataTable";
import { listReservations, deleteReservation } from "../../../service/api/reservations";
import { mapReservationToTableRow } from "./reservationUtils";

const ReservationsList = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [listError, setListError] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const imageBaseUrl = useMemo(() => {
    const base = (import.meta as unknown as { env?: { VITE_API_BASE_URL_IMAGE?: string } })
      .env?.VITE_API_BASE_URL_IMAGE;
    return typeof base === "string" ? base.replace(/\/$/, "") : "";
  }, []);

  const refresh = useCallback(async () => {
    setListError(null);
    setLoading(true);
    try {
      const rows = await listReservations();
      setData(rows.map((b) => mapReservationToTableRow(b, imageBaseUrl)));
    } catch (e: unknown) {
      setListError(
        e && typeof e === "object" && "message" in e
          ? String((e as { message: string }).message)
          : "Failed to load reservations"
      );
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [imageBaseUrl]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const confirmDelete = async () => {
    if (!deleteId) return;
    setDeleting(true);
    try {
      await deleteReservation(deleteId);
      setDeleteId(null);
      await refresh();
      document.getElementById("delete_reservation_modal_hide")?.click();
    } catch {
      setListError("Could not delete reservation");
    } finally {
      setDeleting(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value); // Update search state
  };
  const columns = [
    {
      title: "CAR",
      dataIndex: "CAR",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
            <Link
              to={all_routes.carDetails}
              className="avatar me-2 flex-shrink-0"
            >
            {record.CAR_IMG ? (
              <img
                src={record.CAR_IMG}
                alt="car"
                className="avatar-img rounded"
                style={{ width: 40, height: 40, objectFit: "cover" }}
              />
            ) : (
              <ImageWithBasePath
                src="assets/admin/img/car/car-01.jpg"
                alt="car"
              />
            )}
          </Link>
          <div>
            <Link
              to={`${all_routes.reservationDetails}/${record.bookingId}`}
              className="text-info d-block mb-1"
            >
              {record.CAR_NO}
            </Link>
            <h6 className="fs-14">
              <Link to={all_routes.carDetails}>{text}</Link>
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
        <div className="d-flex align-items-center">
          <Link
            to={all_routes.companyDetails}
            className="avatar avatar-rounded me-2 flex-shrink-0"
          >
            <ImageWithBasePath
              src={`assets/admin/img/customer/${record.CUSTOMER_IMG}`}
              alt=""
            />
          </Link>
          <div>
            <h6 className="mb-1 fs-14">
              <Link to={all_routes.companyDetails}>{text}</Link>
            </h6>
            <span
              className={`badge  ${record.BADGE === "Client" ? "bg-secondary-transparent" : "bg-violet-transparent"} rounded-pill`}
            >
              {record.BADGE}
            </span>
          </div>
        </div>
      ),
      sorter: (a: any, b: any) => a.CUSTOMER.length - b.CUSTOMER.length,
    },

    {
      title: "PICK UP DETAILS",
      dataIndex: "PICK_UP_DETAILS",
      render: (text: string, record: any) => (
        <div className="d-flex align-items-center">
          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
            <h5 className="mb-2 fs-16">{record.PICK_UP_DATE}</h5>
            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
              {record.PICK_UP_MONTH}
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
          <div className="border rounded text-center flex-shrink-0 p-1 me-2">
            <h5 className="mb-2 fs-16">{record.DROP_OFF_DATE}</h5>
            <span className="fw-medium fs-12 bg-light p-1 rounded-1 d-inline-block text-gray-9">
              {record.DROP_OFF_MONTH}
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
          className={`badge  ${text === "Completed" ? "bg-success-transparent" : text === "Confirmed" || text === "Pending" ? "bg-orange-transparent" : text === "In Rental" ? "bg-violet-transparent" : "bg-danger-transparent"} d-inline-flex align-items-center badge-sm `}
        >
          <i className="ti ti-point-filled me-1" />
          {text}
        </span>
      ),
      sorter: (a: any, b: any) => a.STATUS.length - b.STATUS.length,
    },
    {
      title: "Action",
      dataIndex: "",
      render: (_: unknown, record: any) => (
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
                to={`${all_routes.reservationDetails}/${record.bookingId}`}
              >
                <i className="ti ti-eye me-1" />
                View Details
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to={`${all_routes.adminEditReservations}/${record.bookingId}`}
              >
                <i className="ti ti-edit me-1" />
                Edit
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item rounded-1"
                to="#"
                data-bs-toggle="modal"
                data-bs-target="#delete_modal"
                onClick={() => setDeleteId(record.bookingId)}
              >
                <i className="ti ti-trash me-1" />
                Delete
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
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  All Reservations
                </li>
              </ol>
            </nav>
          </div>
          {/* <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
            <div className="mb-2 me-2">
              <Link to="#" className="btn btn-white d-flex align-items-center">
                <i className="ti ti-printer me-2" />
                Print
              </Link>
            </div>
            <div className="mb-2">
              <div className="dropdown">
                <Link
                  to="#"
                  className="btn btn-dark d-inline-flex align-items-center"
                >
                  <i className="ti ti-upload me-1" />
                  Export
                </Link>
              </div>
            </div>
          </div> */}
        </div>
        {/* /Breadcrumb */}
        {listError && (
          <div className="alert alert-danger" role="alert">
            {listError}
          </div>
        )}
        {loading && (
          <div className="text-muted small mb-2">Loading reservations…</div>
        )}
        {/* Table Header */}
        <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
          <div className="d-flex align-items-center flex-wrap row-gap-3">
            <div className="dropdown me-2">
              <Link
                to="#"
                className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
              >
                <i className="ti ti-filter me-1" /> Sort By : Latest
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-2">
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Latest
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Ascending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Desending
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Last Month
                  </Link>
                </li>
                <li>
                  <Link to="#" className="dropdown-item rounded-1">
                    Last 7 Days
                  </Link>
                </li>
              </ul>
            </div>
            <div className="me-2">
              <div className="input-icon-start position-relative topdatepicker">
                <span className="input-icon-addon">
                  <i className="ti ti-calendar" />
                </span>
                <PredefinedDateRanges />
              </div>
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
                <span className="badge badge-xs rounded-pill bg-danger ms-2">
                  0
                </span>
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
                  placeholder="Search"
                  value={searchValue} // Controlled input
                  onChange={handleSearchChange} // Update search value
                />
              </div>
            </div>
            <div className="dropdown">
              <Link
                to="#"
                className="dropdown-toggle coloumn btn btn-white d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ti ti-layout-board me-1" /> Columns
              </Link>
              <div className="dropdown-menu dropdown-menu-lg p-2">
                <ul>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span className="d-inline-flex align-items-center">
                        <i className="ti ti-grip-vertical me-1" />
                        CAR
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        CUSTOMER
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        PICK UP DETAILS
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        DROP OFF DETAILS
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-item d-flex align-items-center justify-content-between rounded-1">
                      <span>
                        <i className="ti ti-grip-vertical me-1" />
                        STATUS
                      </span>
                      <div className="form-check form-check-sm form-switch mb-0">
                        <input
                          className="form-check-input form-label"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Table Header */}
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
                Pick Up Location
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
                    Los Angles
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    New York City
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Houston
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Munich
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Montreal
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
                Drop Off Location
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
                    Los Angles
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    New York City
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Houston
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Munich
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Montreal
                  </label>
                </li>
              </ul>
            </div>
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
                    Completed
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Confirmed
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    In Rental
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    Rejected
                  </label>
                </li>
                <li>
                  <label className="dropdown-item d-flex align-items-center rounded-1">
                    <input
                      className="form-check-input m-0 me-2"
                      type="checkbox"
                    />
                    In Progress
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
        {/* Custom Data Table */}
        <CommonDatatable
          dataSource={data}
          columns={columns}
          searchValue={searchValue}
          showRowSelection={false}
        />
      </div>
      <div className="modal fade" id="delete_modal">
        <div className="modal-dialog modal-dialog-centered modal-sm">
          <div className="modal-content">
            <div className="modal-body text-center">
              <button
                type="button"
                id="delete_reservation_modal_hide"
                className="d-none"
                data-bs-dismiss="modal"
                aria-hidden="true"
              />
              <span className="avatar avatar-lg bg-transparent-danger rounded-circle text-danger mb-3">
                <i className="ti ti-trash-x fs-26" />
              </span>
              <h4 className="mb-1">Delete Reservation</h4>
              <p className="mb-3">
                Are you sure you want to delete Reservation?
              </p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={deleting}
                  onClick={confirmDelete}
                >
                  {deleting ? "Deleting…" : "Yes, Delete"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservationsList;
