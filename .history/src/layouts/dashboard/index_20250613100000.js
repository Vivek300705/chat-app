import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
const theme=useTheme()
  return (
    <>
      
      <Box sx={{backgroundColor:,height:"100vh", width:100}}>

      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
