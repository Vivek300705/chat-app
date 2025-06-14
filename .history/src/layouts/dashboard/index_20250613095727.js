import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

  return (
    <>
      
      <Box sx={{backgroundColor:"black",height:"100vh" width"}}>

      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
