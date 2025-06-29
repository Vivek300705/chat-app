import { Box,Stack, useTheme } from '@mui/material'
import React from 'react'

function Contact() {
  const theme=useTheme();
  return (
    <Box sx={{width:"320",height:'100vh'}}>
    <Stack sx={{height:'100',}}>
    <Box sx={{boxShadow:"0px 0px 0px rgba(0,0,0,0.25)",width:"100%",backgroundColor:theme.palette.mode==="light"?"#FBFAFF":theme.palette.background}}>
    <Stack sx={{height:'100%',p:2}} direction={'row'} >

    </Stack>
      
    </Box>

    </Stack>

    </Box>
  )
}

export default Contact