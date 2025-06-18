import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import switchBaseClasses from '@mui/material/internal/switchBaseClasses'

function Messages() {
  return (
    <Box p={3}>
    <Stack spacing={3}>
    {Chat_History.map((el)=>{
        switch(key){
            case value:
            break

            default
        }
    })}
    </Stack>

    </Box>
  )
}

export default Messages