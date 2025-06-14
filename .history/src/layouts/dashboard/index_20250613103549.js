import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Divider, IconButton, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* Sidebar */}
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

          {/* Navigation Buttons */}
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems={"center"}
            spacing={2}
          >
            {Nav_Buttons.map((el, index) =>
              el.index === selected ? (
                <Box
                  key={el.index}
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  key={el.index}
                  onClick={() => setSelected(el.index)}
                  sx={{ width: "max-content", color: "#000" }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
          </Stack>

          {/* Divider */}
          <Divider sx={{ width: "100%", my: 2 }} />

          {/* Settings Icon */}
          <IconButton>
            <Gear />
          </IconButton>
        </Stack>
      </Box>

      {/* Main Content */}
      <Box sx={{ marginLeft: 100, padding: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default DashboardLayout;
