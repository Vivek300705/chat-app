import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
const theme=
  return (
    <>
      
      <Box sx={{backgroundColor:"black",height:"100vh", width:100}}>

      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
