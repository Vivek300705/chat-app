import React, { useState } from "react";
import { Box, IconButton, InputBase, Stack, useTheme } from "@mui/material";
import {
  PaperPlaneTilt,
  LinkSimple,
  Smiley,
  Plus,
  Image,
  Sticker,
  Camera,
  File,
  VideoCamera,
  Paperclip,
} from "phosphor-react";

// Define your actions
const Actions = [
  {
    id: "photo-video",
    color: "#4da5fe",
    icon: <Image size={24} weight="duotone" />,
    y: 102,
    title: "Photo/Video",
    onClick: () => console.log("📸 Open Photo/Video Upload"),
  },
  {
    id: "stickers",
    color: "#1b8cfe",
    icon: <Sticker size={24} weight="duotone" />,
    y: 172,
    title: "Stickers",
    onClick: () => console.log("😊 Open Sticker Picker"),
  },
  {
    id: "camera",
    color: "#0172e4",
    icon: <Camera size={24} weight="duotone" />,
    y: 242,
    title: "Camera",
    onClick: () => console.log("📷 Open Camera Capture"),
  },
  {
    id: "document",
    color: "#0159b2",
    icon: <File size={24} weight="duotone" />,
    y: 312,
    title: "Document",
    onClick: () => console.log("📄 Open Document Selector"),
  },
  {
    id: "video",
    color: "#013a8c",
    icon: <VideoCamera size={24} weight="duotone" />,
    y: 382,
    title: "Record Video",
    onClick: () => console.log("🎥 Start Video Recording"),
  },
  {
    id: "attach",
    color: "#0d47a1",
    icon: <Paperclip size={24} weight="duotone" />,
    y: 452,
    title: "Attach File",
    onClick: () => console.log("📎 Open File Attachment"),
  },
];

const ConversationFooter = () => {
  const theme = useTheme();
  const [showActions, setShowActions] = useState(false);

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
      {/* Floating Actions */}
      {showActions &&
        Actions.map((action) => (
          <IconButton
            key={action.id}
            onClick={action.onClick}
            sx={{
              position: "absolute",
              bottom: `${action.y}px`,
              right: "65px",
              backgroundColor: action.color,
              color: "#fff",
              "&:hover": {
                backgroundColor: action.color,
                opacity: 0.85,
              },
              width: 40,
              height: 40,
              zIndex: 5,
            }}
            title={action.title}
          >
            {action.icon}
          </IconButton>
        ))}

      {/* Input Box */}
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
        <IconButton size="small" onClick={() => setShowActions(!showActions)}>
          <Plus size={20} />
        </IconButton>

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
