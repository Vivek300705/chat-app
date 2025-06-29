import React from "react";
import { Box, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateSidebarType } from "../";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";

const GeneralApp = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector(
    (store) => store.app?.sidebar || { open: false, type: "CONTACT" }
  );

  // Enhanced debug logging
  console.log("=== GeneralApp Render ===");
  console.log("Full sidebar state:", sidebar);
  console.log("Sidebar open:", sidebar.open);
  console.log("Sidebar type:", sidebar.type);
  console.log("========================");

  // Handler to go back to contact info
  const handleBackToContact = () => {
    console.log("🔙 Going back to contact from", sidebar.type);
    dispatch(updateSidebarType("CONTACT"));
  };

  // Handler to go back to contact from starred messages
  const handleBackToContactFromStarred = () => {
    console.log("🔙 Going back to contact from starred messages");
    dispatch(updateSidebarType("CONTACT"));
  };

  // Function to render sidebar content
  const renderSidebarContent = () => {
    console.log("🎯 Rendering sidebar with type:", sidebar.type);

    switch (sidebar.type) {
      case "CONTACT":
        console.log("✅ Rendering Contact component");
        return <Contact />;

      case "STARRED":
        console.log("⭐ Rendering StarredMessages component");
        return (
          <StarredMessages onBackToContact={handleBackToContactFromStarred} />
        );

      case "SHARED":
        console.log("📤 Rendering SharedMessages component");
        return <SharedMessages onBackToContact={handleBackToContact} />;

      default:
        console.log(
          "⚠️ Unknown sidebar type, rendering default Contact component"
        );
        console.log("Received type:", sidebar.type);
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
          {/* Add a debug header to see what's being rendered */}
          <Box sx={{ p: 1, backgroundColor: "#e3f2fd", fontSize: "12px" }}>
            Debug: Rendering {sidebar.type}
          </Box>
          {renderSidebarContent()}
        </Box>
      )}
    </Stack>
  );
};

export default GeneralApp;
