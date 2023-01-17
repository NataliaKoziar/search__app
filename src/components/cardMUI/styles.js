import {Button, Card, Typography } from "@mui/material"
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { createTheme, } from '@mui/material';
import styled from "@emotion/styled"; 


export const CustomCard = styled(Card)({
    maxWidth:'400px',
    height:'530px',
    display:"flex",
    flexDirection:"column",
    justifyContent:'space-between',
    margin:'22.5px 8px'
    
})
export const  CustomButton = styled(Button)({
    color:'#363636',
    fontWeight:700,
    textTransform: 'none'    
})

export const CustomIcon = styled(CalendarTodayIcon)({
    height:"1rem",
    color:'text.secondary',
    paddingLeft:0
})

export const CuctomTypography=styled(Typography)({
    overflow:"hidden",
    display: '-webkit-box',
    WebkitLineClamp: '4',
    WebkitBoxOrient: "vertical"
})


export const theme = createTheme({
  typography: {
    fontFamily: [
    'Montserrat',
    'sans-serif',
    ].join(','),
  },});