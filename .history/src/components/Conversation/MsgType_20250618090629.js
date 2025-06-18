import React, { useState } from "react";
import {
  Divider,
  Stack,
  Typography,
  Box,
  IconButton,
  Link as MuiLink,
  MenuItem,
  Menu,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  FileText,
  LinkSimple,
  ArrowBendUpLeft,
  Download,
  DotsThreeVertical,
} from "phosphor-react";

function MessageMenu({ el }) {
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
        <MenuItem onClick={handleClose}>Reply</MenuItem>
        <MenuItem onClick={handleClose}>Forward</MenuItem>
        <MenuItem
          onClick={() => {
            navigator.clipboard.writeText(el.message || "");
            handleClose();
          }}
        >
          Copy
        </MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </>
  );
}

function MediaMsg({ el }) {
  const theme = useTheme();
  const isIncoming = el.incoming;

  const bgColor = isIncoming
    ? theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[300]
    : theme.palette.primary.main;

  const textColor = isIncoming
    ? theme.palette.text.primary
    : theme.palette.primary.contrastText;

  return (
    <Stack
      direction="row"
      justifyContent={isIncoming ? "start" : "end"}
      mb={1}
      spacing={1}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "60%",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.img}
            alt={el.message}
            style={{ maxHeight: 210, borderRadius: 10 }}
          />
          {el.message && <Typography variant="body2">{el.message}</Typography>}
        </Stack>
      </Box>
      <MessageMenu el={el} />
    </Stack>
  );
}

function DocMsg({ el }) {
  const theme = useTheme();
  const isIncoming = el.incoming;

  const bgColor = isIncoming
    ? theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[300]
    : theme.palette.primary.main;

  const textColor = isIncoming
    ? theme.palette.text.primary
    : theme.palette.primary.contrastText;

  return (
    <Stack
      direction="row"
      justifyContent={isIncoming ? "start" : "end"}
      mb={1}
      spacing={1}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: 2,
          width: "max-content",
          maxWidth: "60%",
          boxShadow: theme.palette.mode === "dark" ? 3 : 1,
        }}
      >
        <Stack spacing={1}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
              p: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1}>
              <FileText size={20} />
              <Typography variant="body2" noWrap>
                {el.fileName || "Document.pdf"}
              </Typography>
            </Stack>
            <IconButton size="small">
              <Download size={18} />
            </IconButton>
          </Box>
          {el.message && (
            <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
              {el.message}
            </Typography>
          )}
        </Stack>
      </Box>
      <MessageMenu el={el} />
    </Stack>
  );
}

function LinkMsg({ el }) {
  const theme = useTheme();
  const isIncoming = el.incoming;

  const bgColor = isIncoming
    ? theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[300]
    : theme.palette.primary.main;

  const textColor = isIncoming
    ? theme.palette.text.primary
    : theme.palette.primary.contrastText;

  return (
    <Stack
      direction="row"
      justifyContent={isIncoming ? "start" : "end"}
      mb={1}
      spacing={1}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "60%",
        }}
      >
        <Stack spacing={1}>
          <img
            src={el.preview}
            alt="preview"
            style={{ maxWidth: 230, borderRadius: 8 }}
          />
          <MuiLink
            href="#"
            underline="hover"
            sx={{
              color: "#1E88E5",
              fontWeight: 500,
              "&:visited": { color: "#1565C0" },
              "&:hover": {
                color: "#1565C0",
              },
            }}
          >
            {el.message}
          </MuiLink>
        </Stack>
      </Box>
      <MessageMenu el={el} />
    </Stack>
  );
}

function ReplyMsg({ el }) {
  const theme = useTheme();
  const isIncoming = el.incoming;

  const bgColor = isIncoming
    ? theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[300]
    : theme.palette.primary.main;

  const textColor = isIncoming
    ? theme.palette.text.primary
    : theme.palette.primary.contrastText;

  const replyBoxBg = isIncoming
    ? theme.palette.mode === "dark"
      ? "#2f2f2f"
      : "#f0f0f0"
    : "#ffffff";

  const replyTextColor =
    theme.palette.mode === "dark"
      ? theme.palette.grey[400]
      : theme.palette.grey[700];

  return (
    <Stack
      direction="row"
      justifyContent={isIncoming ? "start" : "end"}
      mb={1}
      spacing={1}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "60%",
        }}
      >
        <Stack spacing={1}>
          <Box
            sx={{
              backgroundColor: replyBoxBg,
              borderRadius: 1,
              px: 1.2,
              py: 0.8,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <ArrowBendUpLeft size={16} color={replyTextColor} />
            <Typography
              variant="body2"
              sx={{
                color: replyTextColor,
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              {el.reply?.message || "Reply content..."}
            </Typography>
          </Box>
          <Typography variant="body2">{el.message}</Typography>
        </Stack>
      </Box>
      <MessageMenu el={el} />
    </Stack>
  );
}

function TxtMsg({ el }) {
  const theme = useTheme();
  const isIncoming = el.incoming;

  const bgColor = isIncoming
    ? theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[300]
    : theme.palette.primary.main;

  const textColor = isIncoming
    ? theme.palette.text.primary
    : theme.palette.primary.contrastText;

  return (
    <Stack
      direction="row"
      justifyContent={isIncoming ? "start" : "end"}
      alignItems="center"
      spacing={1}
      mb={1}
    >
      <Box
        p={1.5}
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: 1.5,
          maxWidth: "60%",
          width: "max-content",
        }}
      >
        <Typography variant="body2">{el.message}</Typography>
      </Box>
      <MessageMenu el={el} />
    </Stack>
  );
}

function TimeLine({ el }) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      my={2}
    >
      <Divider sx={{ flex: 1 }} />
      <Typography
        variant="caption"
        sx={{ color: theme.palette.text.secondary, whiteSpace: "nowrap" }}
      >
        {el.text}
      </Typography>
      <Divider sx={{ flex: 1 }} />
    </Stack>
  );
}

export { TxtMsg, MediaMsg, DocMsg, LinkMsg, ReplyMsg, TimeLine };
