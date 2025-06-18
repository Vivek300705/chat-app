import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Stack,
  useTheme,
  Typography,
  ClickAwayListener,
} from "@mui/material";
import {
  PaperPlaneTilt,
  LinkSimple,
  Smiley,
  Image,
  Sticker,
  Camera,
  File,
  VideoCamera,
  Paperclip,
} from "phosphor-react";

// Floating Actions Config
const Actions = [
  {
    id: "photo-video",
    color: "#4da5fe",
    icon: <Image size={20} />,
    label: "Photo/Video",
    onClick: () => console.log("📸 Open Photo/Video Upload"),
  },
  {
    id: "stickers",
    color: "#1b8cfe",
    icon: <Sticker size={20} />,
    label: "Stickers",
    onClick: () => console.log("😊 Open Sticker Picker"),
  },
  {
    id: "camera",
    color: "#0172e4",
    icon: <Camera size={20} />,
    label: "Camera",
    onClick: () => console.log("📷 Open Camera Capture"),
  },
  {
    id: "document",
    color: "#0159b2",
    icon: <File size={20} />,
    label: "Document",
    onClick: () => console.log("📄 Open Document Selector"),
  },
  {
    id: "video",
    color: "#013a8c",
    icon: <VideoCamera size={20} />,
    label: "Video",
    onClick: () => console.log("🎥 Start Video Recording"),
  },
  {
    id: "attach",
    color: "#0d47a1",
    icon: <Paperclip size={20} />,
    label: "Attach",
    onClick: () => console.log("📎 Open File Attachment"),
  },
];

const ConversationFooter = () => {
  const theme = useTheme();
  const [showActions, setShowActions] = useState(false);
  const actionRef = useRef();

  const handleClickAway = () => setShowActions(false);

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.1)",
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      {/* Floating Action Buttons */}
      {showActions && (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Box
            sx={{
              position: "absolute",
              bottom: 80,
              left: 20,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              zIndex: 10,
            }}
          >
            {Actions.map((action) => (
              <Stack
                key={action.id}
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <IconButton
                  onClick={() => {
                    action.onClick();
                    setShowActions(false);
                  }}
                  sx={{
                    backgroundColor: action.color,
                    color: "#fff",
                    width: 38,
                    height: 38,
                    "&:hover": {
                      backgroundColor: action.color,
                      opacity: 0.9,
                    },
                  }}
                >
                  {action.icon}
                </IconButton>
                <Typography
                  variant="caption"
                  sx={{ color: theme.palette.text.primary }}
                >
                  {action.label}
                </Typography>
              </Stack>
            ))}
          </Box>
        </ClickAwayListener>
      )}

      {/* Chat Input Field */}
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
        <IconButton
          size="small"
          onClick={() => setShowActions((prev) => !prev)}
          ref={actionRef}
        >
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

      {/* Send Button */}
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
  );
};

export default ConversationFooter;
