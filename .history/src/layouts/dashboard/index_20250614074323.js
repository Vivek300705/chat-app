import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
// import { styled } from "@mui/material";
import sty
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));


const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0); // Default selection

  const defaultIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";

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
        {/* Top Logo & Nav */}
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

          {/* Navigation Buttons */}
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
                  <IconButton sx={{ color: "#fff" }} disableRipple>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  key={el.index}
                  onClick={() => setSelected(el.index)}
                  sx={{ color: defaultIconColor }}
                  disableRipple
                >
                  {el.icon}
                </IconButton>
              )
            )}
          </Stack>
        </Stack>

        {/* Divider + Settings + Avatar */}
        <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
          <Divider sx={{ width: "48px" }} />

          <Stack spacing={1} alignItems="center">
            {/* Settings */}
            {selected === 3 ? (
              <Box
                p={1}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ color: "#fff" }} disableRipple>
                  <Gear size={24} />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setSelected(3)}
                sx={{ color: defaultIconColor }}
                disableRipple
              >
                <Gear size={24} />
              </IconButton>
            )}

            {/* Avatar */}
            <AntSwitch defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
