import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/user/user.api";

/* ================= TYPES ================= */

export interface User {
  id: string | null;
  phoneNum: string | null;
  firstName: string | null;
  lastName: string | null;
  aadhaarPdf: string | null;
  addressProofPdf: string | null;
  dlNumber: string | null;
  dlPdf: string | null;
  email: string | null;
  lastLoginAt: string | null;
  address: {
    addressLine: string | null;
    country: string | null;
    state: string | null;
    city: string | null;
    pincode: string | null;
  };
}

export interface AuthState {
  userInfo: User | null;
  loading: boolean;
  error: string | null;
}

/* ================= INITIAL STATE ================= */

const initialState: AuthState = {
  userInfo: null,
  loading: false,
  error: null,
};

/* ================= Get Profile ================= */

function messageFromApiError(error: unknown): string {
  if (typeof error === "string") return error;
  if (error && typeof error === "object") {
    const o = error as Record<string, unknown>;
    if (typeof o.message === "string" && o.message) return o.message;
    if (typeof o.error === "string" && o.error) return o.error;
  }
  return "";
}

export const getProfile = createAsyncThunk("user/getProfile", async (_, thunkAPI) => {
  try {
    const res = await userAPI.getMe();
    return res.data as User;
  } catch (error: unknown) {
    const msg = messageFromApiError(error);
    return thunkAPI.rejectWithValue(msg || "Fetching profile failed");
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (userData: unknown, thunkAPI) => {
    try {
      const res = await userAPI.updateMe(userData as any);
      const body = res.data as { user?: unknown; message?: string };
      if (body?.user == null) {
        return thunkAPI.rejectWithValue(
          (typeof body?.message === "string" && body.message) || "Updating profile failed"
        );
      }
      return { user: body.user };
    } catch (error: unknown) {
      const msg = messageFromApiError(error);
      return thunkAPI.rejectWithValue(msg || "Updating profile failed");
    }
  }
);


/* ================= SLICE ================= */

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string ?? "Something went wrong";
        state.userInfo = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string ?? "Something went wrong";
      })    

  },
});

export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;