import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Badge,
  Typography,
  IconButton,
  InputBase,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  VideoCamera,
  Phone,
  MagnifyingGlass,
  CaretDown,
  PaperPlaneTilt,
  LinkSimple,
  Smiley,
} from "phosphor-react";
import { faker } from "@faker-js/faker";

// Styled badge for online status
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
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%", p: 2 }}
        >
          {/* Left side - Avatar and Name */}
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

          {/* Right side - Phosphor Icons */}
          <Stack direction="row" spacing={1}>
            <IconButton>
              <VideoCamera size={24} weight="regular" />
            </IconButton>
            <IconButton>
              <Phone size={24} weight="regular" />
            </IconButton>
            <IconButton>
              <MagnifyingGlass size={24} weight="regular" />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown size={24} weight="regular" />
            </IconButton>
          </Stack>
        </Stack>
      </Box>

      {/* Message area */}
      <Box
        width={"100%"}
        sx={{ flexGrow: 1, backgroundColor: "#F1F5F9", p: 2 }}
      >
        {/* Message area content */}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          height: 80,
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.15)",
          px: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Input area */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            flexGrow: 1,
            backgroundColor: "#fff",
            borderRadius: 20,
            px: 2,
            py: 1,
            border: "1px solid #E0E0E0",
          }}
        >
          <IconButton size="small">
            <LinkSimple size={20} />
          </IconButton>

          <InputBase
            fullWidth
            placeholder="Write a message"
            sx={{ fontSize: 14 }}
          />

          <IconButton size="small">
            <Smiley size={20} />
          </IconButton>
        </Stack>

        {/* Send button */}
        <Box ml={1}>
          <IconButton
            sx={{
              backgroundColor: "#4C8BF5",
              color: "#fff",
              "&:hover": { backgroundColor: "#3b73db" },
              width: 48,
              height: 48,
              borderRadius: "50%",
            }}
          >
            <PaperPlaneTilt size={20} weight="fill" />
          </IconButton>
        </Box>
      </Box>
    </Stack>
  );
}

export default Conversation;
