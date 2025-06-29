import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import ConversationHeader from "./ConversationHeader";
import ConversationFooter from "./ConversationFooter";
import Messages from "./Messages";

const Conversation = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Stack direction="column" height="100vh" width="100%">
      {/* Header */}
      <Box sx={{ flexShrink: 0 }}>
        <ConversationHeader />
      </Box>

      {/* Scrollable message area */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto", // ✅ Enables scrolling
          backgroundColor: theme.palette.background.default,
          px: 2,
          py: 1,
          // Custom scrollbar styles
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: isDark ? "#2A2A2A" : "#F1F1F1",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: isDark ? "#555" : "#C1C1C1",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: isDark ? "#777" : "#A8A8A8",
            },
          },
          "&::-webkit-scrollbar-thumb:active": {
            backgroundColor: isDark ? "#999" : "#8A8A8A",
          },
          // Firefox scrollbar styles
          scrollbarWidth: "thin",
          scrollbarColor: isDark ? "#555 #2A2A2A" : "#C1C1C1 #F1F1F1",
        }}
      >
        <Messages />
      </Box>

      {/* Footer */}
      <Box sx={{ flexShrink: 0 }}>
        <ConversationFooter />
      </Box>
    </Stack>
  );
};

export default Conversation;
