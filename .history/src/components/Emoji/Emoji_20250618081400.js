import React from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

const EmojiPicker = ({ onSelect }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "60px",
        right: "80px",
        zIndex: 1000,
      }}
    >
      <Picker data={data} onEmojiSelect={onSelect} theme="light" />
    </div>
  );
};

export default EmojiPicker;
