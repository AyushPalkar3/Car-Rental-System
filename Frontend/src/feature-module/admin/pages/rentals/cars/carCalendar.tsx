import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import type { EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { all_routes } from "../../../../../router/all_routes";
import { adminCarAPI } from "../../../service/api/car";
import {
  listReservations,
  type AdminReservation,
  type BookingStatus,
} from "../../../service/api/reservations";

function statusColors(status: BookingStatus): { backgroundColor: string; textColor: string } {
  switch (status) {
    case "CONFIRMED":
      return { backgroundColor: "#E8F5E9", textColor: "#2E7D32" };
    case "PENDING":
      return { backgroundColor: "#FFF8E1", textColor: "#E65100" };
    case "COMPLETED":
      return { backgroundColor: "#E3F2FD", textColor: "#1565C0" };
    case "CANCELLED":
      return { backgroundColor: "#ECEFF1", textColor: "#607D8B" };
    default:
      return { backgroundColor: "#F3E5F5", textColor: "#6A1B9A" };
  }
}

/** Order and labels for the on-page legend (matches `statusColors`). */
const CALENDAR_STATUS_LEGEND: { status: BookingStatus; label: string }[] = [
  { status: "PENDING", label: "Pending" },
  { status: "CONFIRMED", label: "Confirmed" },
  { status: "COMPLETED", label: "Completed" },
  { status: "CANCELLED", label: "Cancelled" },
];

function statusBadgeClass(status: BookingStatus): string {
  switch (status) {
    case "CONFIRMED":
      return "badge-soft-success";
    case "PENDING":
      return "badge-soft-warning";
    case "COMPLETED":
      return "badge-soft-info";
    case "CANCELLED":
      return "badge-dark-transparent";
    default:
      return "badge-soft-dark";
  }
}

function customerLabel(r: AdminReservation): string {
  const u = r.user;
  const name = [u?.firstName, u?.lastName].filter(Boolean).join(" ").trim();
  if (name) return name;
  if (u?.phoneNum) return u.phoneNum;
  return "Booking";
}

const fmt = (d: string) =>
  new Date(d).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });

const CarCalendar = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get("id");

  const [car, setCar] = useState<any>(null);
  const [reservations, setReservations] = useState<AdminReservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<AdminReservation | null>(null);
  const calendarRef = useRef(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!carId) {
        setCar(null);
        setReservations([]);
        setError(null);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const [carRes, list] = await Promise.all([
          adminCarAPI.getCar(carId),
          listReservations({ carId }),
        ]);
        if (!mounted) return;
        setCar(carRes?.data?.data ?? carRes?.data ?? null);
        setReservations(list);
      } catch (e: any) {
        if (!mounted) return;
        setCar(null);
        setReservations([]);
        setError(e?.message || "Failed to load calendar");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, [carId]);

  const events = useMemo(() => {
    return reservations.map(r => {
      const { backgroundColor, textColor } = statusColors(r.status);
      return {
        id: r.id,
        title: `${customerLabel(r)} · ${r.status}`,
        start: r.pickupDate,
        end: r.returnDate,
        backgroundColor,
        textColor,
        borderColor: "transparent",
        extendedProps: { reservation: r },
      };
    });
  }, [reservations]);

  const handleEventClick = (arg: EventClickArg) => {
    const r = arg.event.extendedProps?.reservation as AdminReservation | undefined;
    if (r) setSelected(r);
  };

  if (!carId) {
    return (
      <div className="content me-4">
        <div className="alert alert-warning mb-0">
          Select a car from the <Link to={all_routes.adminCarsList}>cars list</Link> to view its
          calendar.
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="content d-flex align-items-center justify-content-center" style={{ minHeight: 300 }}>
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="content me-4">
        <div className="alert alert-danger">{error}</div>
        <Link to={all_routes.adminCarsList} className="btn btn-primary">
          Back to cars
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="content me-4">
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h4 className="mb-1">{car?.name ? `${car.name} — Calendar` : "Car calendar"}</h4>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminCarsList}>Cars</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to={`${all_routes.carDetails}?id=${carId}`}>Car details</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Calendar
                </li>
              </ol>
            </nav>
          </div>
          <div className="d-flex gap-2 flex-wrap">
            <Link
              to={`${all_routes.carDetails}?id=${carId}`}
              className="btn btn-white d-flex align-items-center">
              <i className="ti ti-arrow-left me-1" />
              Car details
            </Link>
            <Link
              to={`${all_routes.editCar}?id=${carId}`}
              className="btn btn-primary d-flex align-items-center">
              <i className="ti ti-edit me-1" />
              Edit car
            </Link>
          </div>
        </div>

        <div className="card mb-0">
          <div className="card-body">
            <p className="text-muted small mb-2">
              Booking bars use the colors below. The pale yellow cell on the grid is{" "}
              <strong>today</strong> (not a status color).
            </p>
            <div className="d-flex flex-wrap align-items-center gap-3 gap-y-2 mb-3 small">
              <span className="text-muted text-uppercase fw-medium" style={{ fontSize: "0.7rem" }}>
                Legend
              </span>
              {CALENDAR_STATUS_LEGEND.map(({ status, label }) => {
                const c = statusColors(status);
                return (
                  <span key={status} className="d-inline-flex align-items-center gap-2">
                    <span
                      className="rounded flex-shrink-0"
                      style={{
                        width: 14,
                        height: 14,
                        backgroundColor: c.backgroundColor,
                        boxShadow: `inset 0 0 0 1px ${c.textColor}40`,
                      }}
                      aria-hidden
                    />
                    <span>
                      <span className="fw-medium" style={{ color: c.textColor }}>
                        {label}
                      </span>
                    </span>
                  </span>
                );
              })}
            </div>
            <div className="calendar">
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                editable={false}
                droppable={false}
                displayEventEnd
                headerToolbar={{
                  center: "title",
                  start: "prev,next,today",
                  end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                eventClick={handleEventClick}
                ref={calendarRef}
              />
            </div>
          </div>
        </div>
      </div>

      <Modal show={!!selected} onHide={() => setSelected(null)} size="lg" centered>
        <div className="modal-header">
          <h4 className="mb-0">Reservation</h4>
          <button
            type="button"
            className="btn-close custom-btn-close"
            aria-label="Close"
            onClick={() => setSelected(null)}>
            <i className="ti ti-x" />
          </button>
        </div>
        {selected && (
          <div className="modal-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <span className={`badge ${statusBadgeClass(selected.status)}`}>{selected.status}</span>
              <span className="text-gray-9 fs-14">₹{selected.totalPrice}</span>
            </div>
            <div className="border-bottom pb-3 mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-gray-6">Pickup</span>
                <span>{fmt(selected.pickupDate)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span className="text-gray-6">Return</span>
                <span>{fmt(selected.returnDate)}</span>
              </div>
            </div>
            <div className="border-bottom pb-3 mb-3">
              <h6 className="fs-14 fw-medium mb-2">Customer</h6>
              <p className="mb-0">{customerLabel(selected)}</p>
              {selected.user?.phoneNum && (
                <p className="mb-0 text-muted fs-13">{selected.user.phoneNum}</p>
              )}
            </div>
            <Link
              to={`${all_routes.reservationDetails}/${selected.id}`}
              className="btn btn-primary w-100"
              onClick={() => setSelected(null)}>
              Open full details
            </Link>
          </div>
        )}
      </Modal>
    </>
  );
};

export default CarCalendar;
