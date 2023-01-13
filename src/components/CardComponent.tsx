import React from "react"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from "@emotion/styled";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { color, Stack } from "@mui/system";
export const CardComponent = ()=>{

const  CustomButton = styled(Button)({
    color:'#363636',
    fontWeight:700,
    textTransform: 'none'    
})

const CustomIcon = styled(CalendarTodayIcon)({
    height:"14px",
    color:'text.secondary',
    paddingLeft:0
})


    return(
        <Box width='400px'>
            <Card>
                <CardMedia
                component='img'
                height='217px'
                image="https://prophotos.ru/data/articles/0002/2614/image-rectangle_600_x.jpg"
                />
                <CardContent>
                    <Stack color='text.secondary' direction='row'>
                    <CustomIcon  sx={{color:'text.secondary'}}/>
                    <Typography  gutterBottom variant="body2" color='text.secondary' sx={{lineHeight:'20px'}}>June 15th, 2021</Typography>
                    </Stack>
                    <Typography gutterBottom variant="h5" component='div'>React</Typography>
                    <Typography  variant="body1" color='text.secondary'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta pariatur consectetur exercitationem!
                </Typography>
                </CardContent>
                <CardActions >
                    <CustomButton size="small">
                    <Typography  variant="body1"sx={{ fontWeight:700}}>Read more</Typography>
                        <ArrowForwardIcon fontSize="small"/>
                    </CustomButton>
                </CardActions>
            </Card>
        </Box>
    )
}