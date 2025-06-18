import React from "react";
import { Box, Stack, useTheme } from "@mui/material";
import ConversationHeader from "./ConversationHeader";
import ConversationFooter from "./ConversationFooter";

const Conversation = () => {
  const theme = useTheme();

  return (
    <Stack direction="column" height="100vh" width="100%">
      {/* Header */}
      <ConversationHeader />

      {/* Main chat area */}
      <Box
        width={"100%"}
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          p: 2,
        }}
      >
        {/* Messages will go here */}
        <Mess
      </Box>

      {/* Footer */}
      <ConversationFooter />
    </Stack>
  );
};

export default Conversation;
