import React from "react";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {
  // ✅ Safe access with fallback
  const sidebar = useSelector((store) => store.app?.sidebar || { open: false });

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
      {sidebar.open && {} <Contact />}
    </Stack>
  );
};

export default GeneralApp;
