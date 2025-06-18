import React from "react";
import { Avatar, Box, Stack, Badge,Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";

// Sample firstName (replace with prop or context value as needed)


// Styled badge component (Online status)
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
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", height: "100%", px: 2 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                src={`https://ui-avatars.com/api/?name=${faker.name.firstName}&background=random`}
              />
            </StyledBadge>
            <Stack>
              <Typography>{faker.name.fullName}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* Message Area */}
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          overflowY: "auto",
          backgroundColor: "#F1F5F9",
        }}
      >
        {/* Message content goes here */}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Chat input goes here */}
      </Box>
    </Stack>
  );
}

export default Conversation;
