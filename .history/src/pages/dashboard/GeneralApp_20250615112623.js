import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conver
const GeneralApp = () => {
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box sx={{ height: "100%", width: "calc(100vw-420px)" }}><Conversation/></Box>
    </Stack>
  );
};

export default GeneralApp;
