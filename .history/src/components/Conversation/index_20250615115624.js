<Stack direction="column" height="100vh" width="100%">
  {/* Header */}
  <Box
    sx={{
      height: 100,
      width: "100%",
      backgroundColor: "#F8FAFF",
      boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
    }}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "100%", px: 2 }}
    >
      {/* Left side - avatar and name */}
      <Stack direction="row" spacing={2} alignItems="center">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            src={`https://ui-avatars.com/api/?name=${firstName}&background=random`}
          />
        </StyledBadge>
        <Stack>
          <Typography variant="subtitle2">{fullName}</Typography>
          <Typography variant="caption">Online</Typography>
        </Stack>
      </Stack>

      {/* Right side - icons */}
      <Stack direction="row" spacing={1}>
        <IconButton>
          <VideocamOutlined />
        </IconButton>
        <IconButton>
          <CallOutlined />
        </IconButton>
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <KeyboardArrowDown />
        </IconButton>
      </Stack>
    </Stack>
  </Box>

  {/* Message area and footer can stay as-is */}
</Stack>;
