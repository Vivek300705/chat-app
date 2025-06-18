import { Box,Stack } from '@mui/material'
import React from 'react'

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} >
    {/* Header */}
        <Box sx={{height:100,width:"100%",backgroundColor:"#F8FAFF",
        boxShadow:"0px,0px,2px rgba(0,0,0,0.25)"}}>

        </Box>
        {/* msg */}
        <Box sx={{flexGrow:1,}} width={"100%"}>

        </Box>
        {/* Chat footer */}
        <Box sx={{height:100,width:"100%",backgroundColor:""}}>

        </Box>

    </Stack>
  )
}

export default Conversation