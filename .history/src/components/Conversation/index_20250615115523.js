import {
  Avatar,
  Box,
  Stack,
  Badge,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  VideocamOutlined,
  CallOutlined,
  SearchOutlined,
  KeyboardArrowDown,
} from "@mui/icons-material";
import React from "react";
import { faker } from "@faker-js/faker";

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

function Conversation() {
  const fullName = faker.name.fullName();
  const firstName = fullName.split(" ")[0];

  return (
    <Stack direction="column" height="100vh" width="100%">
      {/* Header */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%", px: 2 }}
        >
          {/* Left side - avatar and name */}
          <Stack direction="row" spacing={2} alignItems="center">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                src={`https://ui-avatars.com/api/?name=${firstName}&background=random`}
              />
            </StyledBadge>
            <Stack>
              <Typography variant="subtitle2">{fullName}</Typography>
              <Typography variant="caption">Online</Typography>
            </Stack>
          </Stack>

          {/* Right side - icons */}
          <Stack direction="row" spacing={1}>
            <IconButton>
              <VideocamOutlined />
            </IconButton>
            <IconButton>
              <CallOutlined />
            </IconButton>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <KeyboardArrowDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      {/* Message area and footer can stay as-is */}
    </Stack>
  );
}

export default Conversation;
