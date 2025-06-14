import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0); // added this

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
        <Stack direction="column" alignItems="center" spacing={3} sx={{ height: "100%" }}>
          {/* Logo */}
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

          {/* Nav Buttons */}
          <Stack direction="column" alignItems={"center"} spacing={2}>
            {Nav_Buttons.map((el, index) => (
              <Box
                key={index}
                p={1}
                sx={{
                  backgroundColor: selected === el.index ? theme.palette.primary.main : "transparent",
                  borderRadius: 1.5,
                }}
              >
                <IconButton
                  sx={{ color: selected === el.index ? "#fff" : "#000" }}
                  onClick={() => setSelected(el.index)}
                >
                  {el.icon}
                </IconButton>
              </Box>
            ))}
          </Stack>

          {/* Divider */}
          <Divider sx={{ width: "60%", my: 2 }} />

          {/* Settings Icon */}
          <IconButton>
            <Gear />
          </IconButton>
        </Stack>
      </Box>

      {/* Main content */}
      <Box sx={{ marginLeft: 100, padding: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
