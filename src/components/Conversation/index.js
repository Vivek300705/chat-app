import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import ConversationHeader from "./ConversationHeader";
import ConversationFooter from "./ConversationFooter";
import Messages from "./Messages";

const Conversation = () => {
  const theme = useTheme();

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
