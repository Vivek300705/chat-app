import {
  Box,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Divider,
  Avatar,
  Badge,
  Button,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import 
// Styled Badge for online status
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(0.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// Single Chat Item
const ChatElement = ({ id, img, name, msg, time, unread, pinned, online }) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: isDark ? "#1E1E1E" : "#fff",
        cursor: "pointer",
        transition: "background-color 0.3s",
        "&:hover": {
          backgroundColor: isDark ? "#333" : "#F0F4FA",
        },
      }}
      p={2}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2}>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant={online ? "dot" : undefined}
          >
            <Avatar src={img} />
          </StyledBadge>
          <Stack spacing={0.3}>
            <Typography variant="subtitle1">{name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          {unread > 0 && <Badge color="primary" badgeContent={unread} />}
        </Stack>
      </Stack>
    </Box>
  );
};

// Search input styling
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.common.white, 0.08)
      : alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "dark"
        ? alpha(theme.palette.common.white, 0.12)
        : alpha(theme.palette.common.black, 0.1),
  },
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

// Main Sidebar
function Chats() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: 320,
        backgroundColor: isDark ? "#0F111A" : "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack p={3} spacing={3}>
        {/* Header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed color={isDark ? "#fff" : "#000"} />
          </IconButton>
        </Stack>

        {/* Search */}
        <Search>
          <SearchIconWrapper>
            <MagnifyingGlass color={isDark ? "#aaa" : "#709CE6"} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {/* Archive */}
        <Stack spacing={1}>
          <Button
            fullWidth
            variant="text"
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              padding: 1.5,
              color: isDark ? "#fff" : "#000",
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <ArchiveBox size={24} color={isDark ? "#fff" : "#000"} />
              <Typography>Archive</Typography>
            </Stack>
          </Button>
          <Divider sx={{ borderColor: isDark ? "#2A2A2A" : "#E0E0E0" }} />
        </Stack>
      </Stack>

      {/* Chat List Scrollable */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          pr: 2,
          pb: 2,
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: isDark ? "#333" : "#ccc",
            borderRadius: "4px",
          },
        }}
      >
      <SimpleBarStyle/>
        <Stack spacing={2.4} px={3}>
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.text.secondary }}
          >
            Pinned
          </Typography>
          {ChatList.filter((el) => el.pinned).map((el) => (
            <ChatElement key={el.id} {...el} />
          ))}
          <Typography
            variant="subtitle2"
            sx={{ color: theme.palette.text.secondary }}
          >
            All Chats
          </Typography>
          {ChatList.filter((el) => !el.pinned).map((el) => (
            <ChatElement key={el.id} {...el} />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Chats;
