import { Box, IconButton, Stack, Typography } from '@mui/material'
import { CircleDashed, Rows } from 'phosphor-react'
import React from 'react'

function Chats() {
  return (
    <Box sx={{position:"relative",height:"100%",width:320,backgroundColor:"#F8FAFF",boxShadow:"0px,0px,2px,rgba(0,0,0,.25)"}}>
    <Stack direction="row" alignItems={'center'} just>
        <Typography variant='h5'>
            Chats
        </Typography>
        <IconButton>
            <CircleDashed/>
        </IconButton>
    </Stack>
    </Box>
  )
}

export default Chats