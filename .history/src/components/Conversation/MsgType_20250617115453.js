import { Divider, Stack } from '@mui/material';
import React from 'react'

function TimeLine() {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}
    >
        <Divider width="46%"/>
        <Divider width="46%"/>
    </Stack>
  )
}

export { TimeLine };