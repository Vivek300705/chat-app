import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";

// Styled custom switch
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 8,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

// Sidebar button wrapper
const SidebarItem = ({ selected, onClick, children }) => {
  const theme = useTheme();
  const isSelected = selected;

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
        backgroundColor: isSelected ? theme.palette.primary.main : "transparent",
        cursor: "pointer",
      }}
    >
      <IconButton
        disableRipple
        sx={{
          color: isSelected
            ? "#fff"
            : theme.palette.mode === "dark"
              ? "#fff"
              : "#000",
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
  const {}
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
              <AntSwitch onChange={{}=>{}}
               defaultChecked sx={{ transform: "scale(1.1)" }} />
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
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
