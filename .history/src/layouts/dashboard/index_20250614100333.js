import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Switch,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings";

// Custom MUI-themed Switch
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...(theme.palette.mode === 'dark' && {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: '#8796A5',
    }),
  },
}));

// Sidebar Item Component
const SidebarItem = ({ selected, onClick, children }) => {
  const theme = useTheme();
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 48,
        height: 48,
        borderRadius: 1.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: selected ? theme.palette.primary.main : "transparent",
        cursor: "pointer",
      }}
    >
      <IconButton
        disableRipple
        sx={{
          color: selected
            ? "#fff"
            : theme.palette.mode === "light"
              ? "#000"
              : theme.palette.text.primary,
        }}
      >
        {children}
      </IconButton>
    </Box>
  );
};

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Box
        p={2}
        sx={{
          width: 100,
          height: "100%",
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Top Section */}
        <Stack spacing={3} alignItems="center">
          {/* Logo */}
          <Box
            sx={{
              width: 64,
              height: 64,
              borderRadius: 1.5,
              backgroundColor: theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Logo} alt="Logo" style={{ height: 40, width: 40 }} />
          </Box>

          {/* Nav Buttons */}
          <Stack spacing={2} alignItems="center">
            {Nav_Buttons.map((el) => (
              <SidebarItem
                key={el.index}
                selected={selected === el.index}
                onClick={() => setSelected(el.index)}
              >
                {el.icon}
              </SidebarItem>
            ))}
          </Stack>
        </Stack>

        {/* Bottom Section */}
        <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
          <Divider sx={{ width: 48 }} />
          <Stack spacing={1} alignItems="center">
            {/* Settings */}
            <SidebarItem selected={selected === 3} onClick={() => setSelected(3)}>
              <Gear size={24} />
            </SidebarItem>

            {/* Theme Switch */}
            <Box
              sx={{
                width: 48,
                height: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MaterialUISwitch onChange={onToggleMode} defaultChecked />
            </Box>

            {/* Avatar */}
            <Avatar
              src="https://i.pravatar.cc/150?img=1"
              sx={{ width: 40, height: 40 }}
            />
          </Stack>
        </Stack>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          overflowY: "auto",
          padding: 2,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
