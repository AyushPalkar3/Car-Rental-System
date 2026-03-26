import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import type { EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { all_routes } from "../../../../../router/all_routes";
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

function customerLabel(r: AdminReservation): string {
  const u = r.user;
  const name = [u?.firstName, u?.lastName].filter(Boolean).join(" ").trim();
  if (name) return name;
  if (u?.phoneNum) return u.phoneNum;
  return "Booking";
}

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

const fmt = (d: string) =>
  new Date(d).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" });

type Props = { carId: string };

const CarDetailsMiniCalendar = ({ carId }: Props) => {
  const [reservations, setReservations] = useState<AdminReservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<AdminReservation | null>(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        setLoading(true);
        const list = await listReservations({ carId });
        if (mounted) setReservations(list);
      } catch {
        if (mounted) setReservations([]);
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

  return (
    <>
      <div className="card mb-0 mt-3">
        <div className="card-body">
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 border-bottom mb-2 pb-2">
            <h5 className="mb-0">Calendar</h5>
            <Link
              to={`${all_routes.adminCarCalendar}?id=${carId}`}
              className="btn btn-sm btn-outline-primary d-inline-flex align-items-center">
              <i className="ti ti-external-link me-1" />
              Full calendar
            </Link>
          </div>
          <p className="text-muted small mb-2">
            Bookings for this car. Click an event for details.
          </p>
          {loading ? (
            <div className="d-flex justify-content-center py-5">
              <div className="spinner-border spinner-border-sm text-primary" />
            </div>
          ) : (
            <div className="calendar car-details-mini-calendar" style={{ fontSize: "0.8rem" }}>
              <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                editable={false}
                droppable={false}
                displayEventEnd
                height="auto"
                contentHeight={300}
                fixedWeekCount={false}
                dayMaxEvents={2}
                headerToolbar={{
                  start: "prev",
                  center: "title",
                  end: "next",
                }}
                eventClick={handleEventClick}
              />
            </div>
          )}
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

export default CarDetailsMiniCalendar;
