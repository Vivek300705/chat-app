import React from "react";
import {
  Avatar,
  Box,
  Stack,
  Badge,
  Typography,
  IconButton,
  Divider,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import {
  CaretDown,
  MagnifyingGlass,
  Phone,
  VideoCamera,
  PaperPlaneRight,
  Paperclip,
  Smiley,
} from "phosphor-react";
import TextField from "@mui/material/TextField";

// Styled Badge for Online Status
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

// Styled TextField
const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    paddingTop: "12px",
    paddingBottom: "12px",
    borderRadius: 20,
    backgroundColor: "#F0F4FA",
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
          sx={{ height: 80, p: 2 }}
        >
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

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton>
              <VideoCamera size={24} />
            </IconButton>
            <IconButton>
              <Phone size={24} />
            </IconButton>
            <IconButton>
              <MagnifyingGlass size={24} />
            </IconButton>
            <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
            <IconButton>
              <CaretDown size={24} />
            </IconButton>
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
          px: 2,
        }}
      >
        {/* Messages would go here */}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          height: 100,
          width: "100%",
          backgroundColor: "#F8FAFF",
          boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.1)",
          px: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <StyledInput
          fullWidth
          placeholder="Write a message..."
          variant="filled"
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Paperclip size={20} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Smiley size={20} />
                </IconButton>
                <IconButton color="primary" sx={{ ml: 1 }}>
                  <PaperPlaneRight size={20} weight="fill" />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Stack>
  );
}

export default Conversation;
