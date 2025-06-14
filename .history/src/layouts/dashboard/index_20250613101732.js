import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, IconButton, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico"
import { Nav_Buttons } from "../../data";
// import { Stack } from "phosphor-react";
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
          width: 100, // or '100%' if full width intended
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center"
        }}
      >
        <Stack direction='column' alignItems={"center"} sx={{width:"100%"}}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main, // Changed to 'default' for better contrast
              height: 64,
              width: 64,
              borderRadius: 1.5,

            }}
          >
            <img src={Logo} alt="Logo" />
          </Box>
          {<Nav_Buttons.map((el)=><IconButton key={el.index}>
            {el.icon}
          </IconButton>)/>}
        </Stack>
      </Box>


      <Outlet />
    </>
  );
};

export default DashboardLayout;
