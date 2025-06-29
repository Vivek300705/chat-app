import React from "react";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const sidebar = useSelector(
    (store) => store.app?.sidebar || { open: false, type: null }
  );

  // Debug log to check sidebar state
  console.log("Sidebar state:", sidebar);
  console.log("Sidebar open:", sidebar.open);
  console.log("Sidebar type:", sidebar.type);

  // Function to render sidebar content
  const renderSidebarContent = () => {
    console.log("Rendering sidebar with type:", sidebar.type);

    switch (sidebar.type) {
      case "CONTACT":
        console.log("Rendering Contact component");
        return <Contact />;

      case "STARRED":
        console.log("Rendering StarredMessages component");
        return <StarredMessages />;

      case "SHARED":
        console.log("Rendering SharedMessages component");
        return <SharedMessages />;

      default:
        console.log("Rendering default Contact component");
        return <Contact />;
    }
  };

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

      {/* Right Sidebar - Only render when sidebar is open */}
      {sidebar.open && (
        <Box
          sx={{
            width: "320px",
            height: "100%",
            borderLeft: "1px solid #e0e0e0",
            backgroundColor: "#f8f9fa",
          }}
        >
          {renderSidebarContent()}
        </Box>
      )}
    </Stack>
  );
};

export default GeneralApp;
