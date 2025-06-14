import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0); // Default selection

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>

      {/* Sidebar */}
      <Box
        p={2}
        sx={{
          width: 100,
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={3} alignItems="center">
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

          {/* Navigation Icons */}
          <Stack spacing={2} alignItems="center">
            {Nav_Buttons.map((el) =>
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
                    sx={{ color: "#fff" }}
                    disableRipple
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  key={el.index}
                  onClick={() => setSelected(el.index)}
                  sx={{ color: "#000" }}
                >
                  {el.icon}
                </IconButton>
              )
            )}
          </Stack>
        </Stack>

        {/* Divider & Settings */}
        <Stack spacing={1} alignItems="center" sx={{ width: "100%" }}>
          <Divider sx={{ width: "48px" }} />

          {selected === 3 ? (
            <Box
              p={1}
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: 1.5,
              }}
            >
              <IconButton sx={{ color: "#fff" }}>
                <Gear size={24} />
              </IconButton>
            </Box>
          ) : (
            <IconButton onClick={() => setSelected(3)} sx={{ color: "#000" }}>
              <Gear size={24} />
            </IconButton>
          )}
        </Stack>
        <Avatar src={faker.image.avatar}/>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
