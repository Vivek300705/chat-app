import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";

const DashboardLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack direction="column" alignItems="center" spacing={3}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Logo} alt="Logo" style={{ height: 40, width: 40 }} />
          </Box>

          <Stack spacing={2}>
            {Nav_Buttons.map((el, index) => (
              <IconButton key={index}>
                {el.icon}
              </IconButton>
            ))}
          </Stack>
          <Divider/>
        </Stack>
      </Box>

      <Box sx={{ marginLeft: 100, padding: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
