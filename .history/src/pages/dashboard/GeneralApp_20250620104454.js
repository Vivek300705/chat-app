import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {
  const app=useSelector((store)=>{
store.a
  })
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 740px)", // FIXED: Added spaces around `-`
          // backgroundColor: "black",
        }}
      >
        <Conversation />
      </Box>
      <Contact/>
    </Stack>
  );
};

export default GeneralApp;
