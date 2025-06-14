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
import { styled, alpha, useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";

// Styled Badge for online indicator
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

// Chat card component
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

// Styled Search components
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

// Chats Sidebar Component
function Chats() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: 320,
        backgroundColor: theme.palette.mode === "dark" ? "#0F111A" : "#F8FAFF",
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

        {/* Search */}
        <Search>
          <SearchIconWrapper>
            <MagnifyingGlass color="#709CE6" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        {/* Archive Button */}
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

        {/* Chat Lists */}
        <Stack direction="column" sx={{ flexGrow: 1, overflowY: "scroll" }}>
          <Stack spacing={2.4}>
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
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
