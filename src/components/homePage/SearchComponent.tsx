import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, Input, InputAdornment, InputLabel, styled, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { charactersActions } from '../../redux/action/charactersActions';


  const CustomInput = styled(Input)({
   width:'600px',
   height:"50px",
   border:'2px solid #EAEAEA',
   borderRadius:"5px",
   padding:"15px 20px"
  })

export const SearchComponent=()=>{
  const searchValue=useTypedSelector(state=>state.characters.searchValue);
  const [inputValue, setInputValue]=useState<string>(searchValue)
  const dispatch = useDispatch();

  useEffect(()=>{
    const delayDebounceFn = setTimeout(() => {
     dispatch(charactersActions.changeSearch(inputValue))
    
    }, 1000)

    return ()=>clearTimeout(delayDebounceFn)
  }, [inputValue])

  return(
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard" sx={{margin:"0px 0px 40px 0px"}}>
        <InputLabel htmlFor="input-with-icon-adornment" sx={{fontWeight:700, fontSize:'16px'}}>
          Filter by keywords
        </InputLabel>
        <CustomInput
          id="input-with-icon-adornment"
          value={inputValue}
          onChange={(event)=>setInputValue(event.target.value)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon/>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  )
}