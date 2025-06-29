// redux/slices/appSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../Store"; // Ensure dispatch is exported from Store.js

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be 'CONTACT', 'PROFILE', etc.
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      // Add safety check
      if (!state.sidebar) {
        state.sidebar = { open: false, type: "CONTACT" };
      }
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      // Add safety check
      if (!state.sidebar) {
        state.sidebar = { open: false, type: "CONTACT" };
      }
      state.sidebar.type = action.payload.type;
    },
  },
});

export default appSlice.reducer;

// Action creators using thunk-style dispatch (if needed)
export const toggleSidebarAction = () => () => {
  dispatch(appSlice.actions.toggleSidebar());
};

export const updateSidebarTypeAction = (type) => () => {
  dispatch(appSlice.actions.updateSidebarType({ type }));
};

// Export plain actions too for direct use
export const { toggleSidebar, updateSidebarType } = appSlice.actions;