import apiClient from "./apiClient";

export type AdminDashboardNewCar = {
  id: string;
  name: string;
  category: string;
  thumbnail: string | null;
  fuelType: string;
  seating: number;
  powerType: string;
  dayPrice: number | null;
};

export type AdminDashboardRecentBooking = {
  id: string;
  carId: string;
  carName: string;
  carThumb: string | null;
  durationLabel: string;
  bookingType: string;
  pickupShort: string;
  dropShort: string;
  pickupDate: string;
  unitPrice: number;
  pricingDuration: string;
  userId: string;
  userName: string;
};

export type AdminDashboardCustomer = {
  id: string;
  name: string;
  bookings: number;
  badge: string;
};

export type AdminDashboardInvoice = {
  id: string;
  invoiceNo: string;
  userId: string;
  customerName: string;
  email: string;
  createdDate: string;
  dueDate: string;
  amount: number;
  status: string;
};

export type AdminDashboardData = {
  adminName: string;
  summary: {
    totalCars: number;
    totalUsers: number;
    inRental: number;
    upcoming: number;
    totalReservations: number;
    reservationsWeekChange: number;
    totalEarnings: number;
    earningsWeekChange: number;
    carsWeekChange: number;
  };
  sparklines: {
    categoriesMonth: string[];
    reservations: number[];
    earnings: number[];
    cars: number[];
    last7DayLabels: string[];
    reservationsDaily: number[];
    earningsDaily: number[];
    carsDaily: number[];
  };
  weeklyBars: {
    categories: string[];
    income: number[];
    expense: number[];
  };
  incomeExpenseSummary: {
    incomeThisWeek: number;
    expenseThisWeek: number;
    incomeChangePct: number;
    expenseChangePct: number;
  };
  newlyAddedCar: AdminDashboardNewCar | null;
  recentBookings: AdminDashboardRecentBooking[];
  topCustomers: AdminDashboardCustomer[];
  recentInvoices: AdminDashboardInvoice[];
};

export const getAdminDashboard = async (): Promise<AdminDashboardData> => {
  const res = await apiClient.get<AdminDashboardData>("/admin/dashboard");
  return res.data;
};
