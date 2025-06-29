// src/redux/slices/appSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../Store"; // ⚠️ Only if you want to call from outside components

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // toggle sidebar
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

// 🔁 Optional action dispatchers (if you insist on central calls)
export function toggleSidebarAction() {
  return () => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function updateSidebarTypeAction(type) {
  return () => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}

// 🟢 Also export original actions if used in components
export const { toggleSidebar, updateSidebarType } = slice.actions;
