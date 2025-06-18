import { Divider, Stack, Typography,Box  } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import React from 'react'



function txtmsg({el}) {
  return (
   <Stack direction={'row'} justifyContent={el.incoming? 'start':'end'}>
   <Box p={1.5} >

   </Box>

   </Stack>
  )
}


function TimeLine({el}) {
    const theme=useTheme()
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}
    >
        <Divider width="46%"/>
        <Typography variant='caption ' sx={{color:theme.palette.text}} >
        {el.text}
        </Typography>
        <Divider width="46%"/>
    </Stack>
  )
}

export { TimeLine, txtmsg };