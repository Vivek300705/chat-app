import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  Badge,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { VideoCamera, Phone, MagnifyingGlass, CaretDown } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarAction } from "../../redux/slices/appSlice";

// Online status badge styling
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

const ConversationHeader = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  // Generate name once and preserve it across re-renders
  const [userInfo] = useState(() => {
    const fullName = faker.name.fullName();
    const firstName = fullName.split(" ")[0];
    return { fullName, firstName };
  });

  // Fix selector to get the correct sidebar state
  const { sidebar } = useSelector((state) => state.app);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%", // Fill the entire header container
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        display: "flex", // Use flexbox for full coverage
        alignItems: "center", // Center content vertically
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%", // Full width
          height: "100%", // Full height
          px: 3, // Horizontal padding
        }}
      >
        {/* Left: User Info */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{
            cursor: "pointer",
            flex: 1, // Take available space
          }}
          onClick={() => dispatch(toggleSidebarAction())}
        >
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              src={`https://ui-avatars.com/api/?name=${userInfo.firstName}&background=random`}
              sx={{ width: 48, height: 48 }} // Larger avatar
            />
          </StyledBadge>
          <Stack spacing={0.5}>
            <Typography variant="h6" fontWeight="600">
              {userInfo.fullName}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontSize: "0.875rem" }}
            >
              {sidebar?.open ? "Sidebar Open" : "Online"}
            </Typography>
          </Stack>
        </Stack>

        {/* Right: Action Icons */}
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            sx={{
              width: 44,
              height: 44,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <VideoCamera size={22} />
          </IconButton>

          <IconButton
            sx={{
              width: 44,
              height: 44,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <Phone size={22} />
          </IconButton>

          <IconButton
            sx={{
              width: 44,
              height: 44,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <MagnifyingGlass size={22} />
          </IconButton>

          <Divider orientation="vertical" flexItem sx={{ mx: 1, height: 32 }} />

          <IconButton
            sx={{
              width: 44,
              height: 44,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            <CaretDown size={20} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ConversationHeader;
