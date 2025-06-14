import { Box, IconButton, Stack, Typography, InputBase } from '@mui/material'
import { CircleDashed, MagnifyingGlass, Rows } from 'phosphor-react'
import React from 'react'
import { styled, alpha } from '@mui/material/styles'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Chats() {
  return (
    <Box sx={{position:"relative",height:"100%",width:320,backgroundColor:"#F8FAFF",boxShadow:"0px,0px,2px,rgba(0,0,0,.25)"}}>
   <Stack p={3}>
        <Stack direction="row" alignItems={'center'} justifyContent={"space-between"}>
          <Typography variant='h5'>
            Chats
          </Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
          <Stack sx={{width:"100%"}}>
<Search>
  <SearchIconWrapper>
    <MagnifyingGlass color="#709CE6"/>
  </SearchIconWrapper>
  <StyledInputBase placeholder='se'/>
</Search>
          </Stack>
        </Stack>
   </Stack>
    </Box>
  )
}

export default Chats