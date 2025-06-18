import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'

function Messages() {
  return (
    <Box p={3}>
    <Stack spacing={3}>
    {Chat_History.map(el)=>{
        
    }}
    </Stack>

    </Box>
  )
}

export default Messages