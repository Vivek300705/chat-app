import React from "react";
import {
  Divider,
  Stack,
  Typography,
  Box,
  Link as MuiLink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FileText, LinkSimple, ArrowBendUpLeft } from "phosphor-react";

// 📷 Image message
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
    <Stack direction="row" justifyContent={isIncoming ? "start" : "end"} mb={1}>
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
    </Stack>
  );
}

// 📄 Document message
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
    <Stack direction="row" justifyContent={isIncoming ? "start" : "end"} mb={1}>
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
          <Stack direction="row" alignItems="center" spacing={1}>
            <FileText size={20} />
            <Typography variant="body2">Document.pdf</Typography>
          </Stack>
          {el.message && <Typography variant="body2">{el.message}</Typography>}
        </Stack>
      </Box>
    </Stack>
  );
}

// 🔗 Link preview message
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
    <Stack direction="row" justifyContent={isIncoming ? "start" : "end"} mb={1}>
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
          <MuiLink href="#" color="inherit" underline="hover">
            {el.message}
          </MuiLink>
        </Stack>
      </Box>
    </Stack>
  );
}

// 🧵 Reply message
function ReplyMsg({ el }) {
  const theme = useTheme();
  const isIncoming = el.incoming;

  // Main bubble styling
  const bgColor = isIncoming
    ? theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[300]
    : theme.palette.primary.main;

  const textColor = isIncoming
    ? theme.palette.text.primary
    : theme.palette.primary.contrastText;

  // Reply box (always light background)
  const replyBoxBg =
    theme.palette.mode === "dark"
      ? theme.palette.grey[700]
      : theme.palette.grey[200];

  return (
    <Stack direction="row" justifyContent={isIncoming ? "start" : "end"} mb={1}>
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
          {/* Quoted reply block */}
          <Box
            p={1}
            sx={{
              backgroundColor: replyBoxBg,
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              borderRadius: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary }}
            >
              {el.reply?.message}
            </Typography>
          </Box>

          {/* Actual message */}
          <Typography variant="body2">{el.message}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

// 💬 Simple text message
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
    <Stack direction="row" justifyContent={isIncoming ? "start" : "end"} mb={1}>
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
        <Typography variant="body2">{el.message}</Typography>
      </Box>
    </Stack>
  );
}

// 🕓 Time line component
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
