import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { DotsThreeVertical } from "phosphor-react";
import mes// adjust path as needed

const MessageOptions = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton size="small" onClick={handleOpen}>
        <DotsThreeVertical size={18} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {Message_options.map((option, idx) => (
          <MenuItem key={idx} onClick={handleClose}>
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MessageOptions;
