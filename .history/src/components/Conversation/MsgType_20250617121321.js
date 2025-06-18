import React from "react";
import {
  Stack,
  Typography,
  Box,
  Divider,
  Link as MuiLink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ReplyIcon from "@mui/icons-material/Reply";

// 💡 Utility: Get bubble styles based on theme and direction
const getBubbleStyles = (theme, incoming) => {
  const bgColor = incoming
    ? theme.palette.mode === "dark"
      ? theme.palette.grey[800]
      : theme.palette.grey[300]
    : theme.palette.primary.main;

  const textColor = incoming
    ? theme.palette.text.primary
    : theme.palette.primary.contrastText;

  return { bgColor, textColor };
};

// 1️⃣ Text Message
export function TxtMsg({ el }) {
  const theme = useTheme();
  const { bgColor, textColor } = getBubbleStyles(theme, el.incoming);

  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "start" : "end"}
      mb={1}
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
        <Typography variant="body2">{el.message}</Typography>
      </Box>
    </Stack>
  );
}

// 2️⃣ Image Message
export function ImgMsg({ el }) {
  const theme = useTheme();
  const { bgColor } = getBubbleStyles(theme, el.incoming);

  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "start" : "end"}
      mb={1}
    >
      <Box
        p={0.5}
        sx={{
          backgroundColor: bgColor,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "60%",
        }}
      >
        <img
          src={el.url}
          alt="sent-img"
          style={{
            borderRadius: 8,
            maxWidth: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </Box>
    </Stack>
  );
}

// 3️⃣ Document Message
export function DocMsg({ el }) {
  const theme = useTheme();
  const { bgColor, textColor } = getBubbleStyles(theme, el.incoming);

  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "start" : "end"}
      mb={1}
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
        <Stack direction="row" spacing={1} alignItems="center">
          <InsertDriveFileIcon fontSize="small" />
          <Typography variant="body2" noWrap>
            {el.filename}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

// 4️⃣ Reply Message
export function ReplyMsg({ el }) {
  const theme = useTheme();
  const { bgColor, textColor } = getBubbleStyles(theme, el.incoming);

  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "start" : "end"}
      mb={1}
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
        <Stack spacing={0.5}>
          <Stack direction="row" spacing={1} alignItems="center">
            <ReplyIcon fontSize="small" />
            <Typography variant="caption" color="text.secondary" noWrap>
              {el.replyTo}
            </Typography>
          </Stack>
          <Typography variant="body2">{el.message}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

// 5️⃣ Link Message
export function LinkMsg({ el }) {
  const theme = useTheme();
  const { bgColor, textColor } = getBubbleStyles(theme, el.incoming);

  return (
    <Stack
      direction="row"
      justifyContent={el.incoming ? "start" : "end"}
      mb={1}
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
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          {el.text}
        </Typography>
        <MuiLink
          href={el.link}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="inherit"
        >
          {el.link}
        </MuiLink>
      </Box>
    </Stack>
  );
}

// 6️⃣ Timeline Divider
export function TimeLine({ el }) {
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
