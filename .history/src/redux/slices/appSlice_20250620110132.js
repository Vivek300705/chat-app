// redux/slices/appSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../Store";

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
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

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

export const { toggleSidebar, updateSidebarType } = slice.actions;
