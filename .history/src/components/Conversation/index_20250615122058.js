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
  useTheme,
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
  const theme = useTheme(); // Access MUI theme

  const fullName = faker.name.fullName();
  const firstName = fullName.split(" ")[0];

  return (
    <Stack direction="column" height="100vh" width="100%">
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "100%", p: 2 }}
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
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.background.default,
          p: 2,
        }}
      >
        {/* Message area content */}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          width: "100%",
          boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.1)",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            borderRadius: 20,
            px: 2,
            py: 1,
            border: `1px solid ${theme.palette.divider}`,
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

        <Box ml={1}>
          <IconButton
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { backgroundColor: theme.palette.primary.dark },
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
