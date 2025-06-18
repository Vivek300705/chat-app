import { Box, Stack } from "@mui/material";
import React from "react";

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"100%"}>
      {/* Header */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", // ✅ Fixed boxShadow format
        }}
      ></Box>

      {/* Messages */}
      <Box sx={{ flexGrow: 1 }} width={"100%"}>
        {/* Message content will go here */}
      </Box>

      {/* Chat Footer */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF", // ✅ Added background color
        }}
      ></Box>
    </Stack>
  );
}

export default Conversation;
