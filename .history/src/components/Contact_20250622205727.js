import {
  Box,
  Stack,
  useTheme,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Switch,
  Button,
  Grid,
} from "@mui/material";
import {
  X,
  Phone,
  VideoCamera,
  Star,
  Bell,
  Trash,
  Prohibit,
} from "phosphor-react";
import React from "react";

function Contact() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Sample media data
  const mediaItems = [
    { id: 1, type: "image", src: "/api/placeholder/60/60", alt: "Car 1" },
    { id: 2, type: "image", src: "/api/placeholder/60/60", alt: "Car 2" },
    { id: 3, type: "image", src: "/api/placeholder/60/60", alt: "Sunset" },
  ];

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
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1,
              p: 0.5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              INFO
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Contact Info
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="small" onC>
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
        <Stack spacing={3} p={3}>
          {/* Profile Section */}
          <Stack alignItems="center" spacing={2}>
            <Avatar
              src="/api/placeholder/80/80"
              sx={{ width: 80, height: 80 }}
            />
            <Stack alignItems="center" spacing={0.5}>
              <Typography variant="h6" fontWeight={600}>
                Shreyash shah
              </Typography>
              <Typography variant="body2" color="text.secondary">
                +91 6265 041 528
              </Typography>
            </Stack>

            {/* Action Buttons */}
            <Stack direction="row" spacing={3}>
              <Stack alignItems="center" spacing={1}>
                <IconButton
                  sx={{
                    backgroundColor: isDark ? "#333" : "#F0F4FA",
                    "&:hover": {
                      backgroundColor: isDark ? "#444" : "#E8F2FF",
                    },
                  }}
                >
                  <Phone size={20} color={theme.palette.primary.main} />
                </IconButton>
                <Typography variant="caption" color="text.secondary">
                  Audio
                </Typography>
              </Stack>

              <Stack alignItems="center" spacing={1}>
                <IconButton
                  sx={{
                    backgroundColor: isDark ? "#333" : "#F0F4FA",
                    "&:hover": {
                      backgroundColor: isDark ? "#444" : "#E8F2FF",
                    },
                  }}
                >
                  <VideoCamera size={20} color={theme.palette.primary.main} />
                </IconButton>
                <Typography variant="caption" color="text.secondary">
                  Video
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Divider />

          {/* About Section */}
          <Stack spacing={1}>
            <Typography variant="subtitle2" fontWeight={600}>
              About
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Hi there, I am using
            </Typography>
          </Stack>

          <Divider />

          {/* Media Section */}
          <Stack spacing={2}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="subtitle2" fontWeight={600}>
                Media, links and docs
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="body2" color="text.secondary">
                  201
                </Typography>
                <Box sx={{ transform: "rotate(180deg)" }}>
                  <Typography variant="body2" color="text.secondary">
                    ›
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <Grid container spacing={1}>
              {mediaItems.map((item) => (
                <Grid item xs={4} key={item.id}>
                  <Box
                    sx={{
                      aspectRatio: "1",
                      backgroundColor: isDark ? "#333" : "#F0F4FA",
                      borderRadius: 1,
                      overflow: "hidden",
                      cursor: "pointer",
                      "&:hover": {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Divider />

          {/* Options */}
          <Stack spacing={2}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ cursor: "pointer" }}
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Star size={20} color={isDark ? "#fff" : "#000"} />
                <Typography variant="body2">Starred Messages</Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                ›
              </Typography>
            </Stack>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Bell size={20} color={isDark ? "#fff" : "#000"} />
                <Typography variant="body2">Mute Notifications</Typography>
              </Stack>
              <Switch size="small" />
            </Stack>
          </Stack>

          <Divider />

          {/* Group Settings */}
          <Stack spacing={2}>
            <Typography variant="body2" color="text.secondary">
              1 group in common
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack direction="row" alignItems="center" spacing={2}>
                <Avatar
                  src="/api/placeholder/40/40"
                  sx={{ width: 40, height: 40 }}
                />
                <Stack>
                  <Typography variant="body2" fontWeight={500}>
                    Gamer's Gang
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Dev, Paresh, Mukesh, You
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* Bottom Actions */}
      <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={1}>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Prohibit size={16} />}
            sx={{
              color: isDark ? "#fff" : "#000",
              borderColor: isDark ? "#333" : "#E0E0E0",
              "&:hover": {
                borderColor: isDark ? "#555" : "#C0C0C0",
              },
            }}
          >
            Block
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<Trash size={16} />}
            sx={{
              color: "#FF4444",
              borderColor: "#FF4444",
              "&:hover": {
                borderColor: "#FF6666",
                backgroundColor: "rgba(255, 68, 68, 0.1)",
              },
            }}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export default Contact;
