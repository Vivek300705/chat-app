import {
  Box,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Button,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { ChatList } from "../../data";

// ✅ Styled Components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
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
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

// ✅ Chat Card with Destructuring
const ChatElement = ({ img, name, msg, time, unread, online }) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: "#fff",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#f0f0f0",
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
            <Typography variant="caption" color="textSecondary">
              {msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={1} alignItems="center">
          <Typography sx={{ fontWeight: "600" }} variant="caption">
            {time}
          </Typography>
          {unread > 0 && <Badge color="primary" badgeContent={unread} />}
        </Stack>
      </Stack>
    </Box>
  );
};

// ✅ Main Sidebar Component
function Chats() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: 320,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
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
            <CircleDashed />
          </IconButton>
        </Stack>

        {/* Search Bar */}
        <Search>
          <SearchIconWrapper>
            <MagnifyingGlass color="#709CE6" />
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
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <ArchiveBox size={24} color="black" />
              <Typography>Archive</Typography>
            </Stack>
          </Button>
          <Divider />
        </Stack>

        {/* Pinned Chats */}
        <Stack spacing={1.5}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#676767", fontWeight: 600 }}
          >
            Pinned
          </Typography>
          {ChatList.filter((el) => el.pinned).map((chat) => (
            <ChatElement key={chat.id} {...chat} />
          ))}
        </Stack>

        {/* All Chats */}
        <Stack spacing={1.5}>
          <Typography
            variant="subtitle2"
            sx={{ color: "#676767", fontWeight: 600 }}
          >
            All Chats
          </Typography>
          {ChatList.filter((el) => !el.pinned).map((chat) => (
            <ChatElement key={chat.id} {...chat} />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
