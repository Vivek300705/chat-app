import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100, // or '100%' if full width intended
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Box
          sx={{
            backgroundColor: theme.palette.background.default, // Changed to 'default' for better contrast
            height: 64,
            width: 64,
            borderRadius: "50%",
            marginTop: 2
          }}
        />
        <img</img>
      </Box>

      <Box sx={{ marginLeft: 100, padding: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
