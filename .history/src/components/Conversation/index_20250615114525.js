import { Box, Stack } from "@mui/material";
import React from "react";

function Conversation() {
  return (
    <Stack direction="column" height="100vh" width="100%">
      {/* Header */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack alignItems={"center"} direction={"row"} justifyContent={"space-between"} sx={{width:"100%",height:"100%"}}>
        <Stack direction={"row"} spacing={2}>
        <Box>
            <Styled
        </Box>

        </Stack>
        </Stack>
      </Box>

      {/* Message area */}
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          overflowY: "auto", // enable scroll if messages overflow
          backgroundColor: "#F1F5F9", // light gray for visibility
        }}
      >
        {/* Message content goes here */}
      </Box>

      {/* Chat Footer */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Input / Send UI */}
      </Box>
    </Stack>
  );
}

export default Conversation;
