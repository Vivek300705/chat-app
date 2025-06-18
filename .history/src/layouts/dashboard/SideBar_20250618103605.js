// src/components/layout/Sidebar.js
import React, { useState } from "react";
import { useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  Divider,
  Avatar,
  IconButton,
  Switch,
  Menu,
  MenuItem,
} from "@mui/material";
import { Gear } from "phosphor-react";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import useSettings from "../../hooks/useSettings";

// Theme Toggle Switch
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
        ...(theme.palette.mode === "dark" && {
          backgroundColor: "#8796A5",
        }),
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...(theme.palette.mode === "dark" && {
      backgroundColor: "#003892",
    }),
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
    ...(theme.palette.mode === "dark" && {
      backgroundColor: "#8796A5",
    }),
  },
}));

// Sidebar Icon Wrapper
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

// Main Sidebar Component
const Sidebar = ({ selected, setSelected }) => {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      p={2}
      sx={{
        width: 100,
        height: "100%",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Top: Logo + Navigation */}
      <Stack spacing={3} alignItems="center">
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
          <img src={Logo} alt="Logo" style={{ width: 40, height: 40 }} />
        </Box>

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

      {/* Bottom: Settings & Profile */}
      <Stack spacing={2} alignItems="center" sx={{ width: "100%" }}>
        <Divider sx={{ width: 48 }} />
        <Stack spacing={1} alignItems="center">
          <SidebarItem
            selected={selected === -1}
            onClick={() => setSelected(-1)}
          >
            <Gear size={24} />
          </SidebarItem>
          <Box
            sx={{
              width: 48,
              height: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MaterialUISwitch onChange={onToggleMode} />
          </Box>
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={(e) => handleClick(e)}
            src="https://i.pravatar.cc/150?img=1"
            sx={{ width: 40, height: 40 }}
          />

          <Menu
            id="basic_menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{ver}}
            transformOrigin={{vertical:"bottom",horizontal:"left"}}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el) => (
                <MenuItem onClick={() => handleClick(el.title)}>
                  <Stack
                    sx={{ width: "100" }}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
