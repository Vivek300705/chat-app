import { Divider, Stack, Typography } from '@mui/material';
import React from 'react'

function TimeLine({el}) {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}
    >
        <Divider width="46%"/>
        <Typography variant='caption ' sx={{color:theme.platte}} >
        {el.text}
        </Typography>
        <Divider width="46%"/>
    </Stack>
  )
}

export { TimeLine };