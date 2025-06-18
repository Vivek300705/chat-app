import React, { useState } from "react";
import { Box, IconButton, InputBase, Stack, useTheme } from "@mui/material";
import { PaperPlaneTilt, LinkSimple, Smiley } from "phosphor-react";
import EmojiPicker from "../Emoji/EmojiPicker"; // adjust path if needed

const ConversationFooter = () => {
  const theme = useTheme();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmojiSelect = (emoji) => {
    setMessage((prev) => prev + emoji.native);
  };

  return (
    <Box
      sx={{
        width: "100%",
        boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.1)",
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: theme.palette.background.paper,
        position: "relative",
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <IconButton
          size="small"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        >
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

      {showEmojiPicker && <EmojiPicker onSelect={handleEmojiSelect} />}
    </Box>
  );
};

export default ConversationFooter;
