import React from "react";
import { Divider, Stack, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Message bubble component
function TxtMsg({ el }) {
  const theme = useTheme();
  const isIncoming = el.incoming;

  return (
    <Stack direction="row" justifyContent={isIncoming ? "start" : "end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: isIncoming
            ? theme.palette.grey[300]
            : theme.palette.primary.main,
          color: isIncoming
            ? theme.palette.text.primary
            : theme.palette.primary.contrastText,
          borderRadius: 1.5,
          width: "max-content",
          maxWidth: "60%",
        }}
      >
        <Typography variant="body2" color={isIncoming?theme.palette.text:"#fff"}>{el.message}</Typography>
      </Box>
    </Stack>
  );
}

// Time separator between messages
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

export { TxtMsg, TimeLine };
