import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/user/user.api";

/* ================= TYPES ================= */

export interface User {
  id: string | null;
  phoneNum: string | null;
  firstName: string | null;
  lastName: string | null;
  aadhaarPdf: string | null;
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

export const getProfile = createAsyncThunk("user/getProfile", async (_,thunkAPI) => {
  try {
    console.log("userSlice")
    const res = await userAPI.getMe();
    console.log("userSlice",res)
    return res.data as User;
  } catch (error: any) {
    return  thunkAPI.rejectWithValue(
      error.response?.data?.message || "Fetching profile failed"
    );
  }
});


export const updateUser = createAsyncThunk("user/updateUser", async (userData:any,thunkAPI) => {
  try {
    console.log("userSlice")
    const res = await userAPI.updateMe(userData);
    console.log("userSlice",res)
    return res.data as User;
  } catch (error: any) {
    return  thunkAPI.rejectWithValue(
      error.response?.data?.message || "Updating profile failed"
    );
  }
});


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