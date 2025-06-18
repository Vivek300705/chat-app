<Box sx={{ position: "relative" }}>
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

  {/* Message options at top-right */}
  <MessageOptions />
</Box>
