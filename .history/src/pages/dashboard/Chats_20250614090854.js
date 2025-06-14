import {
  Box,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Button,
  Divider,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { styled, alpha } from "@mui/material/styles";

// Styled Search components
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

// Chats Sidebar Component
function Chats() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: 320,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={3}>
        {/* Top Header */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        {/* Search Bar */}
        <Search>
          <SearchIconWrapper>
            <MagnifyingGlass color="#709CE6" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Stack spacing={1}><Button>
          <Stack direction={'row'} alignItems={"center"} spacing={1.5} >
            <ArchiveBox size={"24"} />
            <Button>Archive</Button>
          </Stack>
          <Divider/>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
