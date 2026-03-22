import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../../router/all_routes";
import ImageWithBasePath from "../../../../core/data/img/ImageWithBasePath";
import PredefinedDateRanges from "../../common/range-picker/datePicker";
import ReactApexChart from "react-apexcharts";
import axios from "axios";
import Cookies from "js-cookie";

const API_BASE = "http://localhost:4000";

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

const CarPartnerDashboard = () => {
  const token = Cookies.get("carPartnerAccessToken");

  const [dashData, setDashData] = useState<any>(null);

  const [reservationChart] = useState<any>({
    series: [{ name: "Net Profit", data: [9, 4, 7, 7, 4, 9, 8] }],
    options: {
      chart: { type: "bar", width: 70, toolbar: { show: false }, zoom: { enabled: false }, dropShadow: { enabled: true, top: 3, left: 14, blur: 4, opacity: 0.12, color: "#f7a1a1" }, sparkline: { enabled: !0 } },
      markers: { size: 0, colors: ["#f7a1a1"], strokeColors: "#f7a1a1", strokeWidth: 2, hover: { size: 7 } },
      plotOptions: { bar: { horizontal: !1, columnWidth: "35%", endingShape: "rounded" } },
      dataLabels: { enabled: false },
      stroke: { show: !0, width: 4.5, curve: "smooth" },
      colors: ["#D0E3E6"],
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], labels: { show: false } },
      tooltip: { show: false, theme: "light", fixed: { enabled: false }, x: { show: true }, marker: { show: true } },
    },
  });

  const [earningChart] = useState<any>({
    series: [{ name: "Net Profit", data: [9, 4, 7, 7, 4, 9, 8] }],
    options: {
      chart: { type: "bar", width: 70, toolbar: { show: false }, zoom: { enabled: false }, dropShadow: { enabled: true, top: 3, left: 14, blur: 4, opacity: 0.12, color: "#f7a1a1" }, sparkline: { enabled: !0 } },
      markers: { size: 0, colors: ["#f7a1a1"], strokeColors: "#f7a1a1", strokeWidth: 2, hover: { size: 7 } },
      plotOptions: { bar: { horizontal: !1, columnWidth: "35%", endingShape: "rounded" } },
      dataLabels: { enabled: false },
      stroke: { show: !0, width: 4.5, curve: "smooth" },
      colors: ["#FFF3EB"],
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], labels: { show: false } },
      tooltip: { show: false, theme: "light", fixed: { enabled: false }, x: { show: true }, marker: { show: true } },
    },
  });

  const [carChart] = useState<any>({
    series: [{ name: "Net Profit", data: [9, 4, 7, 7, 4, 9, 8] }],
    options: {
      chart: { type: "bar", width: 70, toolbar: { show: false }, zoom: { enabled: false }, dropShadow: { enabled: true, top: 3, left: 14, blur: 4, opacity: 0.12, color: "#f7a1a1" }, sparkline: { enabled: !0 } },
      markers: { size: 0, colors: ["#f7a1a1"], strokeColors: "#f7a1a1", strokeWidth: 2, hover: { size: 7 } },
      plotOptions: { bar: { horizontal: !1, columnWidth: "35%", endingShape: "rounded" } },
      dataLabels: { enabled: false },
      stroke: { show: !0, width: 4.5, curve: "smooth" },
      colors: ["#F0ECFF"],
      xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], labels: { show: false } },
      tooltip: { show: false, theme: "light", fixed: { enabled: false }, x: { show: true }, marker: { show: true } },
    },
  });

  const [salesStatistics, setSalesStatistics] = useState<any>({
    series: [{ name: "Revenue", data: [22, 22, 28, 25, 15, 22, 20] }],
    options: {
      grid: { padding: { top: 5, right: 5 } },
      colors: ["#FFA633"],
      chart: { type: "bar", height: 290, stacked: false, zoom: { enabled: true } },
      responsive: [{ breakpoint: 280, options: { legend: { position: "bottom", offsetY: 0 } } }],
      plotOptions: { bar: { horizontal: false, columnWidth: "50%" } },
      dataLabels: { enabled: false },
      yaxis: {
        labels: {
          offsetX: -15,
          formatter: (val: any) => `₹${val >= 1000 ? (val / 1000).toFixed(1) + "K" : val}`,
        },
      },
      xaxis: { categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"] },
      legend: { show: false },
      fill: { opacity: 1 },
    },
  });

  useEffect(() => {
    const fetchDashboard = async () => {
      if (!token) return;
      try {
        const res = await axios.get(`${API_BASE}/api/car-partner/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res.data;
        setDashData(data);

        // Update sales chart with real income data
        if (data.incomeChart?.data?.length) {
          setSalesStatistics((prev: any) => ({
            ...prev,
            series: [{ name: "Revenue", data: data.incomeChart.data }],
            options: {
              ...prev.options,
              xaxis: { categories: data.incomeChart.categories },
            },
          }));
        }
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      }
    };
    fetchDashboard();
  }, [token]);

  const stats = dashData?.stats || {};
  const partner = dashData?.partner || {};
  const recentReservations: any[] = dashData?.recentReservations || [];
  const topCars: any[] = dashData?.topCars || [];
  const newestCar = dashData?.newestCar || null;

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
                Car Partner Dashboard
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* /Breadcrumb */}
      <div className="row">
        <div className="col-xl-8 d-flex flex-column">
          {/* Welcome Wrap */}
          <div className="card flex-fill">
            <div className="card-body">
              <div className="row align-items-center row-gap-3">
                <div className="col-sm-7">
                  <h4 className="mb-1">Welcome, {partner.name || "Partner"} </h4>
                  <p>{stats.totalCars ?? "—"} Cars Available for rent </p>
                  <div className="d-flex align-items-center flex-wrap gap-4 mb-3">
                    <div>
                      <p className="mb-1">Total No of Cars</p>
                      <h3>{stats.totalCars ?? "—"}</h3>
                    </div>
                    <div>
                      <p className="d-flex align-items-center mb-2">
                        <span className="line-icon bg-violet me-2" />
                        <span className="fw-semibold text-gray-9 me-1">{stats.inRental ?? 0}</span>
                        In Rental
                      </p>
                      <p className="d-flex align-items-center">
                        <span className="line-icon bg-orange me-2" />
                        <span className="fw-semibold text-gray-9 me-1">
                          {stats.upcoming ?? 0}
                        </span>{" "}
                        Upcoming
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3 flex-wrap">
                    <Link
                      to={all_routes.reservationsList}
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
                      <h5 className="mb-1">{stats.totalReservations ?? "—"}</h5>
                      <p>
                        <span className={`fw-semibold ${(stats.reservationChange ?? 0) >= 0 ? "text-success" : "text-danger"}`}>
                          {(stats.reservationChange ?? 0) >= 0 ? "+" : ""}{stats.reservationChange ?? 0}%
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
                      <h5 className="mb-1">₹{(stats.totalEarnings ?? 0).toLocaleString("en-IN")}</h5>
                      <p>
                        <span className={`fw-semibold ${(stats.earningsChange ?? 0) >= 0 ? "text-success" : "text-danger"}`}>
                          {(stats.earningsChange ?? 0) >= 0 ? "+" : ""}{stats.earningsChange ?? 0}%
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
                      <h5 className="mb-1">{stats.totalCars ?? "—"}</h5>
                      <p className="text-muted">Your Fleet</p>
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
              </div>
              {newestCar ? (
                <>
                  <div className="mb-2">
                    <img
                      src={`${API_BASE}${newestCar.image}`}
                      onError={(e: any) => { e.target.src = "assets/admin/img/car/car.jpg"; }}
                      alt="img"
                      className="rounded w-100"
                      style={{ objectFit: "cover", maxHeight: 180 }}
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                    <div>
                      <p className="fs-13 mb-1">{newestCar.category || "Car"}</p>
                      <h6 className="fs-14 fw-semibold">{newestCar.name}</h6>
                    </div>
                    <span className={`badge ${newestCar.isAvailable ? "bg-success-transparent" : "bg-danger-transparent"}`}>
                      {newestCar.isAvailable ? "Available" : "Unavailable"}
                    </span>
                  </div>
                  <Link
                    to={all_routes.carDetails}
                    className="btn btn-white d-flex align-items-center justify-content-center"
                  >
                    View Details
                    <i className="ti ti-chevron-right ms-1" />
                  </Link>
                </>
              ) : (
                <div className="text-center text-muted py-5">
                  <i className="ti ti-car fs-40 d-block mb-2 opacity-25" />
                  <p>No cars added yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* /Newly Added Cars */}
      </div>
      <div className="row">
        {/* Recent Reservations */}
        <div className="col-xl-12 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Recent Reservations</h5>
                <Link
                  to={all_routes.reservationsList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    {recentReservations.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="text-center text-muted py-4">
                          No reservations yet.
                        </td>
                      </tr>
                    ) : (
                      recentReservations.map((r: any) => (
                        <tr key={r.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <Link
                                to={`${all_routes.reservationDetails?.replace(":id", "")}${r.id}`}
                                className="avatar flex-shrink-0"
                              >
                                <img
                                  src={r.carImage ? `${API_BASE}${r.carImage}` : "assets/admin/img/car/car-01.jpg"}
                                  onError={(e: any) => { e.target.src = "assets/admin/img/car/car-01.jpg"; }}
                                  alt="img"
                                />
                              </Link>
                              <div className="flex-grow-1 ms-2">
                                <p className="d-flex align-items-center fs-13 text-default mb-1">
                                  {r.duration}
                                  <i className="ti ti-circle-filled text-primary fs-5 mx-1" />
                                  {r.bookingType === "DELIVERY" ? "Delivery" : "Pickup"}
                                </p>
                                <h6 className="fs-14 fw-semibold mb-1">
                                  <Link to={`${all_routes.reservationDetails?.replace(":id", "")}${r.id}`}>
                                    {r.carName}
                                  </Link>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-1 mb-1">
                              <h6 className="fs-14 fw-semibold">{r.deliveryAddress || "—"}</h6>
                              <span className="connect-line" />
                              <h6 className="fs-14 fw-semibold">{r.returnAddress || "—"}</h6>
                            </div>
                            <p className="fs-13 text-default">
                              {r.pickupDate ? new Date(r.pickupDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : "—"}
                            </p>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-3">
                              <h6 className="fs-14 fw-semibold">
                                ₹{(r.totalPrice || 0).toLocaleString("en-IN")}{" "}
                                <span className="fw-normal text-default">/total</span>
                              </h6>
                              <span
                                className={`badge ${statusColors[r.status] || "bg-secondary-transparent"} d-inline-flex align-items-center badge-sm`}
                              >
                                <i className="ti ti-point-filled me-1" />
                                {statusLabels[r.status] || r.status}
                              </span>
                            </div>
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
        {/* Cars (Top by Bookings) */}
        <div className="col-xl-4 d-flex">
          <div className="card flex-fill">
            <div className="card-body pb-1">
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-1">
                <h5>Cars</h5>
                <Link
                  to={all_routes.adminCarList}
                  className="text-decoration-underline fw-medium"
                >
                  View All
                </Link>
              </div>

              <div className="table-responsive">
                <table className="table custom-table1">
                  <tbody>
                    {topCars.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="text-center text-muted py-4">
                          No cars found.
                        </td>
                      </tr>
                    ) : (
                      topCars.map((car: any, idx: number) => {
                        const badgeColors = [
                          "bg-secondary-transparent",
                          "bg-violet-transparent",
                          "bg-orange-transparent",
                          "bg-success-transparent",
                          "bg-info-transparent",
                        ];
                        return (
                          <tr key={car.id}>
                            <td>
                              <div className="d-flex align-items-center">
                                <span className="avatar flex-shrink-0">
                                  <img
                                    src={car.image ? `${API_BASE}${car.image}` : `assets/admin/img/car/car-0${(idx % 5) + 1}.jpg`}
                                    onError={(e: any) => { e.target.src = `assets/admin/img/car/car-01.jpg`; }}
                                    className="rounded"
                                    alt=""
                                  />
                                </span>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="fs-14 fw-semibold mb-1">{car.name}</h6>
                                  <span className={`badge badge-sm ${badgeColors[idx % badgeColors.length]} rounded-pill`}>
                                    {car.category || "Car"}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="text-end">
                              <p className="fs-13 mb-1 text-default">No of Bookings</p>
                              <h6 className="fs-14 fw-semibold">{car.bookingCount}</h6>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* /Cars */}
        {/* Income */}
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
              </div>

              <div className="d-flex align-items-center flex-wrap gap-4">
                <div className="border br-5 p-2">
                  <p className="mb-1">Income This Week</p>
                  <h5>
                    ₹{(stats.earningsThisWeek ?? 0).toLocaleString("en-IN")}
                    <span className={`fs-13 fw-semibold ms-2 ${(stats.earningsChange ?? 0) >= 0 ? "text-success" : "text-danger"}`}>
                      {(stats.earningsChange ?? 0) >= 0 ? "+" : ""}{stats.earningsChange ?? 0}%
                    </span>
                  </h5>
                </div>
              </div>

              <ReactApexChart
                options={salesStatistics.options}
                series={salesStatistics.series}
                type="bar"
                height={290}
              />
            </div>
          </div>
        </div>
        {/* /Income */}
      </div>
    </div>
  );
};

export default CarPartnerDashboard;
