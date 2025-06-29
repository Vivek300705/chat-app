import React, { useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateSidebarType } from "../redux/slices/appSlice"; // Adjust the import path
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import SharedMessages from "../../components/SharedMessages";
import appSlice
const GeneralApp = () => {
  const dispatch = useDispatch();

  // ✅ Safe access with fallback
  const sidebar = useSelector(
    (store) => store.app?.sidebar || { open: false, type: "CONTACT" }
  );

  // Reset sidebar type to CONTACT on app mount/refresh
  useEffect(() => {
    dispatch(updateSidebarType("CONTACT"));
  }, [dispatch]);

  return (
    <Stack direction="row" sx={{ width: "100%", height: "100vh" }}>
      {/* Left Sidebar / Chat List */}
      <Chats />

      {/* Main Conversation Section */}
      <Box
        sx={{
          height: "100%",
          width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          transition: "width 0.3s ease",
          borderLeft: "1px solid #e0e0e0",
          borderRight: sidebar.open ? "1px solid #e0e0e0" : "none",
        }}
      >
        <Conversation />
      </Box>

      {/* Optional Right Sidebar (Contact Info) */}
      {sidebar.open &&
        (() => {
          switch (sidebar.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <Contact />; // You can create a StarredMessages component later
            case "SHARED":
              return <SharedMessages />;
            default:
              return <Contact />; // Default fallback to Contact
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
