import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

  return (
    <>
      
      <Box sx={{backgroundColor}}>

      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
