import {
  Box,
  Stack,
  useTheme,
  Typography,
  Avatar,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
} from "@mui/material";
import { X, Star, Calendar, ArrowLeft } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/slices/appSlice";
import { faker } from "@faker-js/faker";

function StarredMessages({ onBackToContact }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const dispatch = useDispatch();

  // Generate fake starred messages data
  const starredMessages = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    message: faker.lorem.sentence(),
    sender: faker.name.firstName(),
    avatar: faker.image.avatar(),
    timestamp: faker.date.recent().toLocaleDateString(),
    type: faker.helpers.arrayElement(["text", "image", "document"]),
  }));

  const handleBackClick = () => {
    console.log("Back button clicked in StarredMessages"); // Debug log
    console.log("onBackToContact function:", onBackToContact); // Debug log

    if (onBackToContact && typeof onBackToContact === "function") {
      console.log("Calling onBackToContact from StarredMessages"); // Debug log
      onBackToContact();
    } else {
      console.warn("onBackToContact is not provided or not a function");
    }
  };

  const getMessagePreview = (message, type) => {
    if (type === "image") return "📷 Photo";
    if (type === "document") return "📄 Document";
    return message;
  };

  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
        backgroundColor: isDark ? "#0F111A" : "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          backgroundColor: isDark ? "#1E1E1E" : "#FBFAFF",
          borderBottom: `1px solid ${isDark ? "#2A2A2A" : "#E0E0E0"}`,
          p: 2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          {/* Back Button */}
          <IconButton
            size="small"
            onClick={handleBackClick}
            sx={{
              "&:hover": {
                backgroundColor: isDark ? "#333" : "#F0F4FA",
              },
            }}
          >
            <ArrowLeft size={20} color={isDark ? "#fff" : "#000"} />
          </IconButton>

          <Box
            sx={{
              backgroundColor: theme.palette.warning.main,
              borderRadius: 1,
              p: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Star size={16} color="white" />
          </Box>
          <Typography variant="body2" color="text.secondary">
            Starred Messages
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="small" onClick={() => dispatch(toggleSidebar())}>
            <X size={20} color={isDark ? "#fff" : "#000"} />
          </IconButton>
        </Stack>
      </Box>

      {/* Scrollable Content */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: isDark ? "#333" : "#ccc",
            borderRadius: "4px",
          },
        }}
      >
        <Stack spacing={2} p={2}>
          {/* Summary */}
          <Box sx={{ textAlign: "center", py: 2 }}>
            <Typography variant="h6" fontWeight={600}>
              {starredMessages.length} Starred Messages
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Important messages you've starred
            </Typography>
          </Box>

          <Divider />

          {/* Starred Messages List */}
          <List sx={{ p: 0 }}>
            {starredMessages.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem
                  sx={{
                    px: 0,
                    py: 1.5,
                    cursor: "pointer",
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: isDark ? "#1A1A1A" : "#F5F5F5",
                    },
                  }}
                >
                  <ListItemAvatar>
                    <Avatar src={item.avatar} sx={{ width: 40, height: 40 }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography variant="body2" fontWeight={500}>
                          {item.sender}
                        </Typography>
                        <Star
                          size={12}
                          color={theme.palette.warning.main}
                          weight="fill"
                        />
                      </Stack>
                    }
                    secondary={
                      <Stack spacing={0.5}>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                        >
                          {getMessagePreview(item.message, item.type)}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Calendar
                            size={12}
                            color={isDark ? "#aaa" : "#666"}
                          />
                          <Typography variant="caption" color="text.secondary">
                            {item.timestamp}
                          </Typography>
                          <Chip
                            label={item.type}
                            size="small"
                            sx={{
                              height: 16,
                              fontSize: "0.6rem",
                              backgroundColor: isDark ? "#333" : "#F0F4FA",
                            }}
                          />
                        </Stack>
                      </Stack>
                    }
                  />
                </ListItem>
                {item.id !== starredMessages.length && <Divider />}
              </React.Fragment>
            ))}
          </List>

          {/* Empty State (if no starred messages) */}
          {starredMessages.length === 0 && (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <Star size={48} color={isDark ? "#444" : "#ccc"} />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                No starred messages yet
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Star important messages to find them here
              </Typography>
            </Box>
          )}
        </Stack>
      </Box>
    </Box>
  );
}

export default StarredMessages;
