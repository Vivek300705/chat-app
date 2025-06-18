import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import switchBaseClasses from '@mui/material/internal/switchBaseClasses'
import { TimeLine } from './MsgType'

function Messages() {
  return (
    <Box p={3}>
    <Stack spacing={3}>
    {Chat_History.map((el)=>{
        switch(el.type){
            case "divider":
            return <TimeLine el={el}/>
            case "msg":
            switch(el.subtype){
                case"img":

                break;
                case"document":

                break;
                case"link":

                break;
                case"reply":

                break;
                default:
                break;
            }
            break;

            default:
            <></>
            break;
        }
    })}
    </Stack>

    </Box>
  )
}

export default Messages