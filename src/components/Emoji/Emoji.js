import React from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useTheme } from "@mui/material/styles";

const EmojiPicker = ({ onSelect }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        position: "absolute",
        bottom: "70px",
        right: "60px",
        zIndex: 10,
      }}
    >
      <Picker
        data={data}
        onEmojiSelect={onSelect}
        theme={theme.palette.mode === "dark" ? "dark" : "light"} // 🌙 or ☀️
        previewPosition="none" // cleaner look
        navPosition="bottom"
        perLine={8}
        maxFrequentRows={1}
        skinTonePosition="none"
        emojiButtonColors={[
          theme.palette.primary.light,
          theme.palette.primary.main,
        ]}
      />
    </div>
  );
};

export default EmojiPicker;
