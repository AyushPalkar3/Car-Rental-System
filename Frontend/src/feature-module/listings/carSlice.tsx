import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCar: null,
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    selectCar: (state, action) => {
      state.selectedCar = action.payload;
    },
    clearCar: (state) => {
      state.selectedCar = null;
    },
  },
});

export const { selectCar, clearCar } = carSlice.actions;
export default carSlice.reducer;