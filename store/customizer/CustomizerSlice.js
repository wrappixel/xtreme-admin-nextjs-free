import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topbarBg: "primary",
  customizerSidebar: false,
  isRTL: false,
  isDark: false,
  isMiniSidebar: false,
  sidebarBg: "white",
  isTopbarFixed: true,
  isMobileSidebar: false,
  isSidebarFixed: true,
  isLayoutHorizontal: false,
};

export const CustomizerSlice = createSlice({
  name: "customizer",
  initialState,
  reducers: {
    ChangeTopbarColor: (state, action) => {
      state.topbarBg = action.payload;
    },
    ToggleCustomizer: (state) => {
      state.customizerSidebar = !state.customizerSidebar;
    },
    ChangeDirection: (state, action) => {
      state.isRTL = action.payload;
    },
    ChangeDarkMode: (state, action) => {
      state.isDark = action.payload;
    },
    ToggleMiniSidebar: (state) => {
      state.isMiniSidebar = !state.isMiniSidebar;
    },
    ChangeSidebarColor: (state, action) => {
      state.sidebarBg = action.payload;
    },
    ToggleTopbar: (state, action) => {
      state.isTopbarFixed = action.payload;
    },
    ToggleMobileSidebar: (state) => {
      state.isMobileSidebar = !state.isMobileSidebar;
    },
    FixedSidebar: (state) => {
      state.isSidebarFixed = !state.isSidebarFixed;
    },
    ToggleHorizontal: (state) => {
      state.isLayoutHorizontal = !state.isLayoutHorizontal;
    },
  },
});

export const {
  ChangeTopbarColor,
  ToggleCustomizer,
  ChangeDirection,
  ChangeDarkMode,
  ToggleMiniSidebar,
  ChangeSidebarColor,
  ToggleTopbar,
  ToggleMobileSidebar,
  FixedSidebar,
  ToggleHorizontal,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;
