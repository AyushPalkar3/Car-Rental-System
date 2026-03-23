import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { Link, generatePath } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
// import PredefinedDateRanges from "../../common/range-picker/datePicker";
import ReactApexChart from "react-apexcharts";
import {
  getAdminDashboard,
  type AdminDashboardData,
} from "../../service/api/dashboard";

function formatMoney(n: number) {
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

function formatWhen(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

function formatDateShort(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function invoiceStatusBadgeClass(status: string) {
  if (status === "Paid") return "bg-success-transparent";
  if (status === "Overdue") return "bg-purple-transparent";
  return "bg-info-transparent";
}

function durationUi(d: string) {
  if (d === "DAY") return "Day";
  if (d === "WEEK") return "Week";
  if (d === "MONTH") return "Month";
  if (d === "HOUR") return "Hour";
  return d;
}

function sparkOptions(categories: string[], strokeColor: string, fillColor: string) {
  return {
    chart: {
      type: "bar" as const,
      width: 70,
      toolbar: { show: false },
      zoom: { enabled: false },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 14,
        blur: 4,
        opacity: 0.12,
        color: "#f7a1a1",
      },
      sparkline: { enabled: true },
    },
    markers: {
      size: 0,
      colors: [strokeColor],
      strokeColors: strokeColor,
      strokeWidth: 2,
      hover: { size: 7 },
    },
    plotOptions: {
      bar: { horizontal: false, columnWidth: "35%", endingShape: "rounded" },
    },
    dataLabels: { enabled: false },
    stroke: { show: true, width: 4.5, curve: "smooth" as const },
    colors: [fillColor],
    xaxis: { categories, labels: { show: false } },
    tooltip: { show: false, theme: "light", fixed: { enabled: false } },
  };
}

const SHIMMER: CSSProperties = {
  background: "linear-gradient(90deg,#e8e8e8 25%,#f5f5f5 50%,#e8e8e8 75%)",
  backgroundSize: "200% 100%",
  animation: "adminDashShimmer 1.4s infinite",
};

const skBar = (w: string | number, h: number, r = 6): CSSProperties => ({
  ...SHIMMER,
  width: w,
  height: h,
  borderRadius: r,
  display: "block",
});

const AdminDashboardSkeleton = () => (
  <>
    <div className="row">
      <div className="col-xl-8 d-flex flex-column">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="row align-items-center row-gap-3">
              <div className="col-sm-7">
                <span className="mb-3 d-block" style={skBar("72%", 28, 6)} />
                <span className="mb-3 d-block" style={skBar("55%", 16, 4)} />
                <div className="d-flex align-items-center flex-wrap gap-4 mb-3">
                  <div>
                    <span className="mb-2 d-block" style={skBar(120, 14, 4)} />
                    <span className="d-block" style={skBar(56, 36, 8)} />
                  </div>
                  <div className="flex-grow-1">
                    <span className="mb-2 d-block" style={skBar("90%", 14, 4)} />
                    <span className="d-block" style={skBar("90%", 14, 4)} />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <span className="d-inline-block" style={skBar(140, 40, 8)} />
                  <span className="d-inline-block" style={skBar(140, 40, 8)} />
                </div>
              </div>
              <div className="col-sm-5">
                <span
                  className="d-block w-100"
                  style={{ ...SHIMMER, height: 180, minHeight: 120, borderRadius: 12 }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {[1, 2, 3].map((key) => (
            <div key={key} className="col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body pb-1">
                  <div className="border-bottom mb-0 pb-2">
                    <span className="d-block" style={skBar("85%", 22, 6)} />
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="py-2 flex-grow-1">
                      <span className="mb-2 d-block" style={skBar("45%", 26, 6)} />
                      <span className="d-block" style={skBar("70%", 14, 4)} />
                    </div>
                    <div className="flex-shrink-0">
                      <span className="d-block" style={skBar(60, 45, 8)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <span className="d-block" style={skBar(160, 22, 6)} />
              <span className="d-block" style={skBar(72, 18, 6)} />
            </div>
            <div className="mb-3">
              <span className="d-block w-100" style={{ ...SHIMMER, height: 180, borderRadius: 12 }} />
            </div>
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <div className="flex-grow-1">
                <span className="mb-2 d-block" style={skBar("95%", 12, 4)} />
                <span className="d-block" style={skBar("50%", 18, 6)} />
              </div>
              <span className="d-block" style={skBar(88, 26, 8)} />
            </div>
            <div className="row g-2 justify-content-center mb-3">
              {[1, 2, 3].map((k) => (
                <div key={k} className="col-sm-4 col-6 d-flex">
                  <div className="bg-light border p-2 br-5 flex-fill text-center">
                    <span className="mb-2 d-block mx-auto" style={skBar("70%", 12, 4)} />
                    <span className="d-block mx-auto" style={skBar("50%", 14, 4)} />
                  </div>
                </div>
              ))}
            </div>
            <span className="d-block w-100" style={{ ...SHIMMER, height: 42, borderRadius: 8 }} />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-12 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <span className="d-block" style={skBar(200, 22, 6)} />
              <span className="d-block" style={skBar(72, 18, 6)} />
            </div>
            <div className="table-responsive">
              <table className="table custom-table1">
                <tbody>
                  {[1, 2, 3, 4].map((key) => (
                    <tr key={key}>
                      <td>
                        <div className="d-flex align-items-center">
                          <span
                            className="flex-shrink-0 me-2 rounded"
                            style={{ ...SHIMMER, width: 40, height: 40 }}
                          />
                          <div className="w-100" style={{ maxWidth: 220 }}>
                            <span className="mb-2 d-block" style={skBar("100%", 12, 4)} />
                            <span className="d-block" style={skBar("70%", 16, 4)} />
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="mb-2 d-block" style={skBar("100%", 14, 4)} />
                        <span className="d-block" style={skBar("40%", 12, 4)} />
                      </td>
                      <td>
                        <span className="mb-2 d-block" style={skBar("75%", 14, 4)} />
                        <span className="d-block" style={skBar(90, 24, 12)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-1">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <span className="d-block" style={skBar(120, 22, 6)} />
              <span className="d-block" style={skBar(64, 18, 6)} />
            </div>
            <div className="table-responsive">
              <table className="table custom-table1">
                <tbody>
                  {[1, 2, 3].map((key) => (
                    <tr key={key}>
                      <td>
                        <span className="mb-2 d-block" style={skBar("75%", 16, 4)} />
                        <span className="d-block" style={skBar(64, 22, 12)} />
                      </td>
                      <td className="text-end">
                        <div className="d-inline-block text-end" style={{ minWidth: 72 }}>
                          <span
                            className="mb-2 d-block ms-auto"
                            style={{ ...skBar(100, 12, 4), marginLeft: "auto" }}
                          />
                          <span
                            className="ms-auto d-block"
                            style={{ ...skBar(36, 16, 4), marginLeft: "auto" }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8 d-flex">
        <div className="card flex-fill">
          <div className="card-body pb-0">
            <div className="mb-3">
              <span className="d-block" style={skBar(100, 22, 6)} />
            </div>
            <div className="mb-3">
              <span className="d-block" style={skBar("40%", 48, 8)} />
            </div>
            <span className="d-block w-100" style={{ ...SHIMMER, height: 290, borderRadius: 12 }} />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
              <span className="d-block" style={skBar(160, 22, 6)} />
              <span className="d-block" style={skBar(72, 18, 6)} />
            </div>
            <div className="custom-table table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <th key={i}>
                        <span className="d-block" style={skBar("85%", 14, 4)} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4].map((row) => (
                    <tr key={row}>
                      {[1, 2, 3, 4, 5, 6, 7].map((col) => (
                        <td key={col}>
                          <span className="d-block" style={skBar(col === 7 ? 72 : "90%", 14, 4)} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const AdminDashboard = () => {
  const [data, setData] = useState<AdminDashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const imageBaseUrl = useMemo(() => {
    const base = (import.meta as unknown as { env?: { VITE_API_BASE_URL_IMAGE?: string } })
      .env?.VITE_API_BASE_URL_IMAGE;
    return typeof base === "string" ? base.replace(/\/$/, "") : "";
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const d = await getAdminDashboard();
        if (alive) setData(d);
      } catch (e: unknown) {
        if (alive)
          setError(
            e && typeof e === "object" && "message" in e
              ? String((e as { message: string }).message)
              : "Failed to load dashboard"
          );
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const reservationChart = useMemo(() => {
    const cats =
      data?.sparklines.categoriesMonth ??
      ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const vals = data?.sparklines.reservations ?? [0, 0, 0, 0, 0, 0, 0];
    return {
      series: [{ name: "Reservations", data: vals }],
      options: sparkOptions(cats, "#f7a1a1", "#D0E3E6"),
    };
  }, [data]);

  const earningChart = useMemo(() => {
    const cats =
      data?.sparklines.categoriesMonth ??
      ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const vals =
      data?.sparklines.earnings.map((v) => Math.max(0, Math.round(v / 1000))) ??
      [0, 0, 0, 0, 0, 0, 0];
    return {
      series: [{ name: "Earnings", data: vals }],
      options: sparkOptions(cats, "#f7a1a1", "#FFF3EB"),
    };
  }, [data]);

  const carChart = useMemo(() => {
    const cats =
      data?.sparklines.categoriesMonth ??
      ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
    const vals = data?.sparklines.cars ?? [0, 0, 0, 0, 0, 0, 0];
    return {
      series: [{ name: "Cars", data: vals }],
      options: sparkOptions(cats, "#f7a1a1", "#F0ECFF"),
    };
  }, [data]);

  const weeklyIncomeChart = useMemo(() => {
    const categories = data?.weeklyBars.categories ?? [];
    const income = data?.weeklyBars.income ?? [0, 0, 0, 0, 0, 0, 0];
    const maxVal = Math.max(...income, 1);
    const cap = Math.ceil(maxVal * 1.15);
    return {
      series: [{ name: "Income", data: income }],
      options: {
        grid: { padding: { top: 5, right: 5 } },
        colors: ["#FFA633"],
        chart: { type: "bar" as const, height: 290, stacked: false, zoom: { enabled: true } },
        responsive: [
          { breakpoint: 280, options: { legend: { position: "bottom" as const, offsetY: 0 } } },
        ],
        plotOptions: { bar: { horizontal: false, columnWidth: "50%" } },
        dataLabels: { enabled: false },
        yaxis: {
          labels: {
            offsetX: -15,
            formatter: (val: number) => `${val}K`,
          },
          min: 0,
          max: cap,
          tickAmount: 6,
        },
        xaxis: { categories },
        legend: { show: false },
        fill: { opacity: 1 },
      },
    };
  }, [data]);

  if (loading) {
    return (
      <div className="content pb-0">
        <style>{`
          @keyframes adminDashShimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <span className="d-block mb-2" style={skBar(200, 32, 8)} />
            <span className="d-block" style={skBar(280, 14, 4)} />
          </div>
        </div>
        <AdminDashboardSkeleton />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="content pb-0 p-4">
        <div className="alert alert-danger">{error || "No data"}</div>
      </div>
    );
  }

  const { summary, newlyAddedCar, recentBookings, topCustomers, recentInvoices, incomeExpenseSummary } =
    data;

  const changeClass = (n: number) =>
    n >= 0 ? "text-success fw-semibold" : "text-danger fw-semibold";
  const changePrefix = (n: number) => (n >= 0 ? "+" : "");

  return (
    <div className="content pb-0">
      {/* Breadcrumb */}
      <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
        <div className="my-auto mb-2">
          <h4 className="mb-1">Dashboard</h4>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to={all_routes.adminDashboard}>Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Admin Dashboard
              </li>
            </ol>
          </nav>
        </div>
        {/* Date range picker (hidden)
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
          <div className="input-icon-start position-relative topdatepicker mb-2">
            <span className="input-icon-addon">
              <i className="ti ti-calendar" />
            </span>
            <PredefinedDateRanges />
          </div>
        </div>
        */}
      </div>
      {/* /Breadcrumb */}
      <div className="row">
        <div className="col-xl-8 d-flex flex-column">
          {/* Welcome Wrap */}
          <div className="card flex-fill">
            <div className="card-body">
              <div className="row align-items-center row-gap-3">
                <div className="col-sm-7">
                  <h4 className="mb-1">Welcome, {data.adminName}</h4>
                  <p>
                    {summary.totalCars} cars in fleet · {summary.totalUsers}{" "}
                    registered customers
                  </p>
                  <div className="d-flex align-items-center flex-wrap gap-4 mb-3">
                    <div>
                      <p className="mb-1">Total No of Cars</p>
                      <h3>{summary.totalCars}</h3>
                    </div>
                    <div>
                      <p className="d-flex align-items-center mb-2">
                        <span className="line-icon bg-violet me-2" />
                        <span className="fw-semibold text-gray-9 me-1">
                          {summary.inRental}
                        </span>
                        In Rental
                      </p>
                      <p className="d-flex align-items-center">
                        <span className="line-icon bg-orange me-2" />
                        <span className="fw-semibold text-gray-9 me-1">
                          {summary.upcoming}
                        </span>{" "}
                        Upcoming
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <Link
                      to={all_routes.adminReservationsList}
                      className="btn btn-primary d-flex align-items-center"
                    >
                      <i className="ti ti-eye me-1" />
                      Reservations
                    </Link>
                    <Link
                      to={all_routes.addCar}
                      className="btn btn-dark d-flex align-items-center"
                    >
                      <i className="ti ti-plus me-1" />
                      Add New Car
                    </Link>
                  </div>
                </div>
                <div className="col-sm-5">
                  <ImageWithBasePath
                    src="assets/admin/img/icons/car.svg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Welcome Wrap */}
          <div className="row">
            {/* Total Reservations */}
            <div className="col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body pb-1">
                  <div className="border-bottom mb-0 pb-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-secondary-100 text-secondary me-2">
                        <i className="ti ti-calendar-time fs-14" />
                      </span>
                      <p>Total Reservations</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="py-2">
                      <h5 className="mb-1">{summary.totalReservations}</h5>
                      <p>
                        <span className={changeClass(summary.reservationsWeekChange)}>
                          {changePrefix(summary.reservationsWeekChange)}
                          {summary.reservationsWeekChange}%
                        </span>{" "}
                        Last Week
                      </p>
                    </div>
                    <ReactApexChart
                      options={reservationChart.options}
                      series={reservationChart.series}
                      type="bar"
                      width={60}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Total Reservations */}
            {/* Total Earnings */}
            <div className="col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body pb-1">
                  <div className="border-bottom mb-0 pb-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-orange-100 text-orange me-2">
                        <i className="ti ti-moneybag fs-14" />
                      </span>
                      <p>Total Earnings</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="py-2">
                      <h5 className="mb-1">{formatMoney(summary.totalEarnings)}</h5>
                      <p>
                        <span className={changeClass(summary.earningsWeekChange)}>
                          {changePrefix(summary.earningsWeekChange)}
                          {summary.earningsWeekChange}%
                        </span>{" "}
                        Last Week
                      </p>
                    </div>
                    <ReactApexChart
                      options={earningChart.options}
                      series={earningChart.series}
                      type="bar"
                      width={60}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Total Earnings */}
            {/* Total Cars */}
            <div className="col-md-4 d-flex">
              <div className="card flex-fill">
                <div className="card-body pb-1">
                  <div className="border-bottom mb-0 pb-2">
                    <div className="d-flex align-items-center">
                      <span className="avatar avatar-sm bg-violet-100 text-violet me-2">
                        <i className="ti ti-car fs-14" />
                      </span>
                      <p>Total Cars</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <div className="py-2">
                      <h5 className="mb-1">{summary.totalCars}</h5>
                      <p>
                        <span className={changeClass(summary.carsWeekChange)}>
                          {changePrefix(summary.carsWeekChange)}
                          {summary.carsWeekChange}%
                        </span>{" "}
                        Last Week
                      </p>
                    </div>
                    <ReactApexChart
                      options={carChart.options}
                      series={carChart.series}
                      type="bar"
                      width={60}
                      height={45}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Total Cars */}
          </div>
        </div>
        {/* Newly Added Cars */}
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                <h5>Newly Added Cars</h5>
                <Link
                  to={all_routes.adminCarsList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              {newlyAddedCar ? (
                <>
                  <div className="mb-2">
                    {newlyAddedCar.thumbnail ? (
                      <img
                        src={`${imageBaseUrl}${newlyAddedCar.thumbnail}`}
                        alt=""
                        className="rounded w-100"
                        style={{ maxHeight: 200, objectFit: "cover" }}
                      />
                    ) : (
                      <ImageWithBasePath
                        src="assets/admin/img/car/car.jpg"
                        alt="img"
                        className="rounded w-100"
                      />
                    )}
                  </div>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <div>
                      <p className="fs-13 mb-1">{newlyAddedCar.category || "—"}</p>
                      <h6 className="fs-14 fw-semibold">{newlyAddedCar.name}</h6>
                    </div>
                    <h6 className="fs-14 fw-semibold">
                      {newlyAddedCar.dayPrice != null ? (
                        <>
                          ₹{newlyAddedCar.dayPrice}{" "}
                          <span className="fw-normal text-gray-5">/day</span>
                        </>
                      ) : (
                        "—"
                      )}
                    </h6>
                  </div>
                  <div className="row g-2 justify-content-center mb-3">
                    <div className="col-sm-4 col-6 d-flex">
                      <div className="bg-light border p-2 br-5 flex-fill text-center">
                        <h6 className="fs-14 fw-semibold">Fuel Type</h6>
                        <span className="fs-13">{newlyAddedCar.fuelType}</span>
                      </div>
                    </div>
                    <div className="col-sm-4 col-6 d-flex">
                      <div className="bg-light border p-2 br-5 flex-fill text-center">
                        <h6 className="fs-14 fw-semibold">Passengers</h6>
                        <span className="fs-13">
                          {String(newlyAddedCar.seating).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                    <div className="col-sm-4 col-6 d-flex">
                      <div className="bg-light border p-2 br-5 flex-fill text-center">
                        <h6 className="fs-14 fw-semibold">Power</h6>
                        <span className="fs-13">{newlyAddedCar.powerType}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to={all_routes.adminCarsList}
                    className="btn btn-white d-flex align-items-center justify-content-center"
                  >
                    View Details
                    <i className="ti ti-chevron-right ms-1" />
                  </Link>
                </>
              ) : (
                <p className="text-muted small mb-0">No cars in fleet yet.</p>
              )}
            </div>
          </div>
        </div>
        {/* /Newly Added Cars */}
      </div>
      <div className="row">
        {/* Live Tracking */}
        {/* <div className="col-xl-6 d-flex">
          <div className="card flex-fill">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                <h5 className="mb-1">Live Tracking</h5>
                <div className="dropdown mb-1">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-map-pin me-1" />
                    Washington
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Washington
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Chicago
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Houston
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Las Vegas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="map-wrap position-relative">
                <div id="map" className="tracking-map w-100 z-1">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                    options={{
                      scrollwheel: false,
                      mapTypeId: "roadmap",
                    }}
                  >
                    {locations.map((location) => (
                      <Marker
                        key={location.id}
                        position={{ lat: location.lat, lng: location.lng }}
                        onClick={() => setSelectedMarker(location)}
                        icon="/assets/admin/car-map.png"
                      />
                    ))}

                    {selectedMarker && (
                      <InfoWindow
                        position={{
                          lat: selectedMarker.lat,
                          lng: selectedMarker.lng,
                        }}
                        onCloseClick={() => setSelectedMarker(null)}
                      >
                        <div>
                          <div
                            className="card border-0 mb-0"
                            style={{ width: "100%", display: "inline-block" }}
                          >
                            <div className="card-body pt-0 p-2 d-flex align-items-center justify-content-between gap-3">
                              <div className="d-flex align-items-center">
                                <Link
                                  to="₹{marker.profile_link}"
                                  className="avatar flex-shrink-0 me-2avatar-rounded"
                                  tabIndex={0}
                                  target="_blank"
                                >
                                  <ImageWithBasePath
                                    className="img-fluid"
                                    alt={selectedMarker.carName}
                                    src={selectedMarker.image}
                                  />
                                </Link>
                                <div className="ms-2">
                                  <h6 className="fs-14 fw-semibold mb-1">
                                    <Link
                                      to={selectedMarker.profile_link}
                                      tabIndex={0}
                                    >
                                      {selectedMarker.carName}
                                    </Link>
                                  </h6>
                                  <p className="fs-13">
                                    {selectedMarker.speciality}
                                  </p>
                                </div>
                              </div>
                              <div>
                                <Link
                                  to={selectedMarker.profile_link}
                                  tabIndex={0}
                                  className="text-decoration-underline fw-medium link-violet"
                                >
                                  View
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </InfoWindow>
                    )}
                  </GoogleMap>
                </div>
                <div className="position-absolute top-0 start-0 w-100 z-2 p-3">
                  <div className="input-icon-start position-relative">
                    <span className="input-icon-addon">
                      <i className="ti ti-search" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search by Car Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* /Live Tracking */}
        {/* Recent Reservations */}
        <div className="col-xl-12 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Recent Reservations</h5>
                <Link
                  to={all_routes.adminReservationsList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    {recentBookings.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="text-muted small">
                          No reservations yet.
                        </td>
                      </tr>
                    ) : (
                      recentBookings.map((b) => (
                    <tr key={b.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            {b.carThumb ? (
                              <img
                                src={`${imageBaseUrl}${b.carThumb}`}
                                alt=""
                                className="rounded"
                                style={{ width: 40, height: 40, objectFit: "cover" }}
                              />
                            ) : (
                              <ImageWithBasePath
                                src="assets/admin/img/car/car-01.jpg"
                                alt="img"
                              />
                            )}
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <p className="d-flex align-items-center fs-13 text-default mb-1">
                              {b.durationLabel}
                              <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                              {b.bookingType === "DELIVERY" ? "Delivery" : "Self"}
                            </p>
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>{b.carName}</Link>
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-1 mb-1">
                          <h6 className="fs-14 fw-semibold">{b.pickupShort}</h6>
                          <span className="connect-line" />
                          <h6 className="fs-14 fw-semibold">{b.dropShort}</h6>
                        </div>
                        <p className="fs-13 text-default">
                          {formatWhen(b.pickupDate)}
                        </p>
                      </td>
                      <td>
                        <h6 className="fs-14 fw-semibold">
                          ₹{b.unitPrice}{" "}
                          <span className="fw-normal text-default">
                            /{durationUi(b.pricingDuration).toLowerCase()}
                          </span>
                        </h6>
                      </td>
                    </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Recent Reservations */}
      </div>
      <div className="row">
        {/* Customers */}
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Customers</h5>
                <Link
                  to={all_routes.adminCustomerList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    {topCustomers.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="text-muted small">
                          No customers yet.
                        </td>
                      </tr>
                    ) : (
                      topCustomers.map((c) => (
                    <tr key={c.id}>
                      <td>
                        <div>
                          <h6 className="fs-14 fw-semibold mb-1">
                            <Link to={`${all_routes.customerDetails}/${c.id}`}>
                              {c.name}
                            </Link>
                          </h6>
                          <span
                            className={`badge badge-sm rounded-pill ${
                              c.badge === "Company"
                                ? "bg-violet-transparent"
                                : "bg-secondary-transparent"
                            }`}
                          >
                            {c.badge}
                          </span>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">
                          No of Bookings
                        </p>
                        <h6 className="fs-14 fw-semibold">{c.bookings}</h6>
                      </td>
                    </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Customers */}
        {/* Income (weekly) */}
        <div className="col-xl-8 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-0">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                <h5 className="mb-1">Income</h5>
                <div className="chart-icon d-flex align-items-center gap-4 mb-1">
                  <p className="mb-0 d-flex align-items-center">
                    <span className="chart-color bg-primary me-1" />
                    Income
                  </p>
                </div>
                <div className="dropdown mb-1">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    <i className="ti ti-calendar me-1" />
                    This Week
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-2">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        This Week
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Week
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        This Month
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex align-items-center flex-wrap gap-4 mb-2">
                <div className="border br-5 p-2">
                  <p className="mb-1">Income This Week</p>
                  <h5>
                    {formatMoney(incomeExpenseSummary.incomeThisWeek)}
                    <span
                      className={`fs-13 ms-2 ${changeClass(incomeExpenseSummary.incomeChangePct)}`}
                    >
                      {changePrefix(incomeExpenseSummary.incomeChangePct)}
                      {incomeExpenseSummary.incomeChangePct}%
                    </span>
                  </h5>
                </div>
              </div>
              <ReactApexChart
                options={weeklyIncomeChart.options}
                series={weeklyIncomeChart.series}
                type="bar"
                height={290}
              />
            </div>
          </div>
        </div>
        {/* /Income */}
      </div>
      <div className="row">
        {/* Maintenance */}
        {/* <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Maintenance</h5>
                <Link
                  to={all_routes.adminMaintenanceList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-01.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ford Endeavour
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">Sedan</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">8656 KM</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-02.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ferrari 458 MM
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">SUV</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">565 KM</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-03.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Ford Mustang{" "}
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">Sedan</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">698 KM</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-04.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Toyota Tacoma 4
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">Minivans</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">855 KM</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link
                            to={all_routes.carDetails}
                            className="avatar flex-shrink-0"
                          >
                            <ImageWithBasePath
                              src="assets/admin/img/car/car-05.jpg"
                              alt="img"
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={all_routes.carDetails}>
                                Chevrolet Truck
                              </Link>
                            </h6>
                            <p className="fs-13 text-default">Hatchbacks</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <p className="fs-13 mb-1 text-default">Odometer</p>
                        <h6 className="fs-14 fw-semibold">5889 KM</h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        {/* /Maintenance */}
        {/* Reservation Statistics */}
        {/* <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-0">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                <h5 className="mb-1">Reservation Statistics</h5>
                <Link
                  to={all_routes.adminReservationsList}
                  className="text-decoration-underline fw-medium mb-1"
                >
                  View All
                </Link>
              </div>
              <ReactApexChart
                options={statistics_chart.options}
                series={statistics_chart.series}
                type="heatmap"
                height={360}
              />
            </div>
          </div>
        </div> */}
        {/* /Reservation Statistics */}
        {/* Drivers */}
        {/* <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Drivers</h5>
                <Link
                  to={all_routes.adminDriversList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-01.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">William Jones</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 90
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          In Ride
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-02.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">Leonard Jandreau</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 64
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          In Ride
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-03.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">Adam Bolden</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 36
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          In Ride
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-04.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">Harvey Jimenez</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 24
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-success-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          In Ride
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/admin/img/drivers/driver-05.jpg"
                              className="rounded-circle"
                              alt=""
                            />
                          </Link>
                          <div className="flex-grow-1 ms-2">
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to="#">William Jones</Link>
                            </h6>
                            <p className="fs-13 text-default">
                              No of Raids : 40
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="text-end">
                        <span className="badge badge-md bg-danger-transparent d-inline-flex align-items-center">
                          <i className="ti ti-circle-filled fs-6 me-2" />
                          Not Booked
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        {/* /Drivers */}
      </div>
      <div className="row">
        {/* Recent Invoices */}
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-3">
                <h5 className="mb-1">Recent Invoices</h5>
                <Link
                  to={all_routes.adminInvoicesList}
                  className="text-decoration-underline fw-medium mb-1"
                >
                  View All
                </Link>
              </div>
              <div className="custom-table table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>INVOICE NO</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>CREATED DATE</th>
                      <th>DUE DATE</th>
                      <th>INVOICE AMOUNT</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentInvoices.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-muted small">
                          No invoices yet.
                        </td>
                      </tr>
                    ) : (
                      recentInvoices.map((inv) => (
                        <tr key={inv.id}>
                          <td>
                            <Link
                              to={generatePath(all_routes.admininvoiceDetails, {
                                paymentId: inv.id,
                              })}
                              className="fs-12 fw-medium"
                            >
                              {inv.invoiceNo}
                            </Link>
                          </td>
                          <td>
                            <h6 className="fs-14 fw-semibold mb-1">
                              <Link to={`${all_routes.customerDetails}/${inv.userId}`}>
                                {inv.customerName}
                              </Link>
                            </h6>
                          </td>
                          <td>{inv.email}</td>
                          <td>{formatDateShort(inv.createdDate)}</td>
                          <td>{formatDateShort(inv.dueDate)}</td>
                          <td>{formatMoney(inv.amount)}</td>
                          <td>
                            <span
                              className={`badge badge-md ${invoiceStatusBadgeClass(inv.status)} d-inline-flex align-items-center`}
                            >
                              <i className="ti ti-circle-filled fs-6 me-2" />
                              {inv.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Recent Invoices */}
      </div>
    </div>
  );
};

export default AdminDashboard;



