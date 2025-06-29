// redux/slices/appSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../Store"; // Ensure dispatch is exported from Store.js

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be 'CONTACT', 'STARRED', 'SHARED', etc.
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      console.log("🔄 toggleSidebar called, current state:", state.sidebar);
      // Add safety check
      if (!state.sidebar) {
        console.log("⚠️ sidebar was undefined, initializing...");
        state.sidebar = { open: false, type: "CONTACT" };
      }
      state.sidebar.open = !state.sidebar.open;
      console.log("✅ sidebar toggled to:", state.sidebar.open);
    },

    updateSidebarType(state, action) {
      console.log("🎯 updateSidebarType called with:", action.payload);
      // Add safety check
      if (!state.sidebar) {
        console.log("⚠️ sidebar was undefined, initializing...");
        state.sidebar = { open: false, type: "CONTACT" };
      }
      // Handle both string payload and object payload
      const newType =
        typeof action.payload === "string"
          ? action.payload
          : action.payload.type;
      state.sidebar.type = newType;
      // Ensure sidebar is open when changing type
      state.sidebar.open = true;
      console.log(
        "✅ sidebar type updated to:",
        state.sidebar.type,
        "and opened"
      );
    },

    // Combined action to open sidebar and set type
    openSidebarWithType(state, action) {
      console.log("🚀 openSidebarWithType called with:", action.payload);
      if (!state.sidebar) {
        state.sidebar = { open: false, type: "CONTACT" };
      }
      const newType = action.payload.type || action.payload;
      state.sidebar.open = true;
      state.sidebar.type = newType;
      console.log("✅ sidebar opened with type:", state.sidebar.type);
    },

    closeSidebar(state) {
      console.log("❌ closeSidebar called");
      if (!state.sidebar) {
        state.sidebar = { open: false, type: "CONTACT" };
      }
      state.sidebar.open = false;
      console.log("✅ sidebar closed");
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

export const openSidebarWithTypeAction = (type) => () => {
  dispatch(appSlice.actions.openSidebarWithType({ type }));
};

// Export plain actions for direct use
export const {
  toggleSidebar,
  updateSidebarType,
  openSidebarWithType,
  closeSidebar,
} = appSlice.actions;
