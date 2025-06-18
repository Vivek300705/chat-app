import React, { useState, useRef } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Stack,
  Tooltip,
  Fab,
  ClickAwayListener,
  useTheme,
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
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const Actions = [
  {
    id: "photo",
    icon: <Image size={20} />,
    label: "Photo/Video",
    color: "#4da5fe",
  },
  {
    id: "sticker",
    icon: <Sticker size={20} />,
    label: "Stickers",
    color: "#1b8cfe",
  },
  {
    id: "camera",
    icon: <Camera size={20} />,
    label: "Camera",
    color: "#0172e4",
  },
  {
    id: "document",
    icon: <File size={20} />,
    label: "Document",
    color: "#0159b2",
  },
  {
    id: "video",
    icon: <VideoCamera size={20} />,
    label: "Video",
    color: "#013a8c",
  },
  {
    id: "attach",
    icon: <Paperclip size={20} />,
    label: "Attach",
    color: "#0d47a1",
  },
];

const ConversationFooter = () => {
  const [openActions, setOpenActions] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const theme = useTheme();

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji.native);
  };

  const handleSend = () => {
    console.log("Sent message:", message);
    setMessage("");
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Floating Actions */}
      {openActions && (
        <ClickAwayListener onClickAway={() => setOpenActions(false)}>
          <Box
            sx={{
              position: "absolute",
              bottom: 80,
              left: 30,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {Actions.map((action) => (
              <Tooltip key={action.id} title={action.label} placement="right">
                <Fab
                  size="small"
                  onClick={() => {
                    console.log(`${action.label} clicked`);
                    setOpenActions(false);
                  }}
                  sx={{
                    backgroundColor: action.color,
                    color: "#fff",
                    "&:hover": { backgroundColor: action.color, opacity: 0.85 },
                    boxShadow: theme.shadows[3],
                  }}
                >
                  {action.icon}
                </Fab>
              </Tooltip>
            ))}
          </Box>
        </ClickAwayListener>
      )}

      {/* Emoji Picker */}
      {showEmoji && (
        <Box
          sx={{
            position: "absolute",
            bottom: 80,
            right: 80,
            zIndex: 20,
          }}
        >
          <ClickAwayListener onClickAway={() => setShowEmoji(false)}>
            <Box>
              <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                theme={theme.palette.mode}
              />
            </Box>
          </ClickAwayListener>
        </Box>
      )}

      {/* Input Section */}
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
          onClick={() => setOpenActions((prev) => !prev)}
        >
          <LinkSimple size={20} />
        </IconButton>

        <InputBase
          inputRef={inputRef}
          fullWidth
          placeholder="Write a message"
          sx={{ fontSize: 14 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <IconButton size="small" onClick={() => setShowEmoji((prev) => !prev)}>
          <Smiley size={20} />
        </IconButton>
      </Stack>

      {/* Send Button */}
      <Box ml={1}>
        <IconButton
          onClick={handleSend}
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
