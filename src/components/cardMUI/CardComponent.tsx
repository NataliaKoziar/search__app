    import React from "react"
    import { Box, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
    import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
    import {Stack } from "@mui/system";
    import { CuctomTypography, CustomButton, CustomCard, CustomIcon,theme } from "./styles";
    import { Link} from "react-router-dom";
    import { ICharacter } from "../../redux/models";
    import Highlighter from "react-highlight-words";
    import { useTypedSelector } from "../../hooks/useTypedSelector";
    import { ThemeProvider } from '@mui/material';
    import dayjs from 'dayjs';
    interface CardProps{
        data:ICharacter
    }

    export const CardComponent = ({data}:CardProps)=>{
   
        const filterValue = useTypedSelector(state=>state.characters.searchValue)
        
        const formatDate = (date: string) => {
            return dayjs(date, "YYYY-MM-DD").format("MMMM DD[th], YYYY")
        }

        return(
            <Box >
                <ThemeProvider theme={theme}>
                <CustomCard>
                    <CardMedia
                    component='img'
                    height='217px'
                    image={data?.multimedia?.src}
                    />
                    <CardContent>
                    <Stack color='text.secondary' direction='row' sx={{alignItems:"center"}}>
                        <CustomIcon  sx={{color:'text.secondary'}}/>
                        <Typography  variant="body2" color='text.secondary'>{formatDate(data?.publication_date)}</Typography>
                        </Stack>
                    </CardContent>
                    <CardContent >
                    <Typography  variant="h5" component='div'>
                        <Highlighter
                          highlightClassName="YourHighlightClass"
                          searchWords={filterValue.trim().split(' ')}
                          autoEscape={false}
                          textToHighlight={data?.display_title}
                        />
                    </Typography>
                    </CardContent>
                    <CardContent sx={{height:"110px", overflow:"hidden" }}>
                        
                        <CuctomTypography gutterBottom variant="body1" color='text.secondary' >
                        <Highlighter
                            highlightClassName="YourHighlightClass"
                            searchWords={filterValue.trim().split(' ')}
                            autoEscape={false}
                            textToHighlight={data?.summary_short}
                         />
                        
                    </CuctomTypography>
                    </CardContent>
                    <CardActions >
                        <Link to = {`/articles/${data?.display_title}`} style={{textDecoration:"none"}}>
                        <CustomButton size="small">
                        <Typography  variant="body1"sx={{ fontWeight:700}}>Read more</Typography>
                            <ArrowForwardIcon fontSize="small"/>
                        </CustomButton>
                        </Link>
                    </CardActions>
                </CustomCard>
                </ThemeProvider>
            </Box>
        )
    }