import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAccessToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; accessToken=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || "";
  return "";
};

/* ===============================
   1️⃣ CREATE BOOKING (Before Payment)
================================= */
export const createBooking = createAsyncThunk(
  "checkout/createBooking",
  async (bookingData: any, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:4000/api/bookings", bookingData, {
        headers: {
          Authorization: `Bearer ${getAccessToken()}`,
        },
      });
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Booking failed"
      );
    }
  }
);

/* ===============================
   2️⃣ CREATE PAYMENT ORDER
================================= */
export const createPaymentOrder = createAsyncThunk(
  "checkout/createPaymentOrder",
  async (bookingId, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/payments/create-order",
        { bookingId }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Payment order failed"
      );
    }
  }
);

/* ===============================
   3️⃣ VERIFY PAYMENT
================================= */
export const verifyPayment = createAsyncThunk(
  "checkout/verifyPayment",
  async (paymentData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/payments/verify",
        paymentData
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Verification failed"
      );
    }
  }
);

interface CheckoutState {
  car: any;
  rentalType: any;
  deliveryLocation: any;
  returnLocation: any;
  startDate: any;
  startTime: any;
  endDate: any;
  endTime: any;
  totalAmount: number;
  paymentStatus: string;
  bookingLoading: boolean;
  bookingError: any;
  paymentLoading: boolean;
  paymentError: any;
  bookingData: any;
  distanceKM: number;
  deliveryFee: number;
  priceBreakdown: {
    hours: number;
    days: number;
    weeks: number;
    months: number;
    hourRate: number;
    dayRate: number;
    weekRate: number;
    monthRate: number;
  } | null;
}

const initialState: CheckoutState = {
  car: null,
  rentalType: null,
  deliveryLocation: null,
  returnLocation: null,
  startDate: null,
  startTime: null,
  endDate: null,
  endTime: null,
  totalAmount: 0,
  paymentStatus: "idle",

  bookingLoading: false,
  bookingError: null,

  paymentLoading: false,
  paymentError: null,
  bookingData: null,
  distanceKM: 0,
  deliveryFee: 0,
  priceBreakdown: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setBookingCar: (state, action) => {
      state.car = action.payload;
    },
    setBookingDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetCheckout: () => initialState,
  },
  extraReducers: (builder) => {
    builder

      /* ===== BOOKING ===== */
      .addCase(createBooking.pending, (state) => {
        state.bookingLoading = true;
        state.bookingError = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.bookingLoading = false;
        state.bookingData = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.bookingLoading = false;
        state.bookingError = action.payload;
      })

      /* ===== PAYMENT ORDER ===== */
      .addCase(createPaymentOrder.pending, (state) => {
        state.paymentLoading = true;
      })
      .addCase(createPaymentOrder.fulfilled, (state) => {
        state.paymentLoading = false;
      })
      .addCase(createPaymentOrder.rejected, (state, action) => {
        state.paymentLoading = false;
        state.paymentError = action.payload;
      })

      /* ===== VERIFY PAYMENT ===== */
      .addCase(verifyPayment.fulfilled, (state) => {
        state.paymentStatus = "success";
      })
      .addCase(verifyPayment.rejected, (state) => {
        state.paymentStatus = "failed";
      });
  },
});

export const { setBookingCar, setBookingDetails, resetCheckout } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;