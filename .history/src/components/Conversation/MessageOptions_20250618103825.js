import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import { DotsThreeVertical } from "phosphor-react";
import { useState } from "react";

// Your menu options
const Message_options = [
  { title: "Reply" },
  { title: "React to message" },
  { title: "Forward message" },
  { title: "Star message" },
  { title: "Report" },
  { title: "Delete Message" },
];

function MessageMenu({ el }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 4,
        right: -35,
      }}
    >
      <IconButton size="small" onClick={handleOpenMenu}>
        <DotsThreeVertical size={18} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {Message_options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              if (option.title === "Copy") {
                navigator.clipboard.writeText(el.message);
              }
              handleCloseMenu();
            }}
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

export default MessageMenu;
