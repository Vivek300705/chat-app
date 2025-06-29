import React from "react";
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
import { useDispatch } from "react-redux";
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


  // Random user name generation
  const fullName = faker.name.fullName();
  const firstName = fullName.split(" ")[0];

  return (
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
        {/* Left: User Info and Avatar */}
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={() => dispatch(toggleSidebarAction())}
        >
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

        {/* Right: Action Buttons */}
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
  );
};

export default ConversationHeader;
