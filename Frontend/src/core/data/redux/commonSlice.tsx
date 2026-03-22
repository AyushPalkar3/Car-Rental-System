import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: localStorage.getItem("dataTheme") || "light-mode",
  mobileSidebar: false,
  miniSidebar: false,
  expandMenu: false,
};
const commonSlice = createSlice({
  name: "Dreamchat",
  initialState,
  reducers: {
    setDark: (state, action) => {
      document.documentElement.setAttribute("class", action.payload);
      state.darkMode = action.payload;
      localStorage.setItem("dataTheme", action.payload);
    },
    setMobileSidebar: (state, action) => {
      state.mobileSidebar = action.payload;
    },
    setMiniSidebar: (state) => {
      state.miniSidebar = !state.miniSidebar;
    },
    setExpandMenu: (state, action) => {
      state.expandMenu = action.payload;
    },
  },
});

export const { setDark, setMobileSidebar, setMiniSidebar, setExpandMenu } = commonSlice.actions;

export default commonSlice.reducer;
