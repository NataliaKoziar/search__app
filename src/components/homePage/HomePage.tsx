import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {charactersActions} from "../../redux/action/charactersActions"
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { CardComponent } from '../cardMUI/CardComponent';
import s from "./HomePage.module.scss"
import { SearchComponent } from './SearchComponent';
import { ICharacter } from '../../redux/models';
import { Modal } from '../modal/Modal';
import { LoadingConponent } from '../modal/LoadingComponent';



export const HomePage = ()=>{
    const loading = useTypedSelector(state=>state.characters.loading);
    const characters = useTypedSelector(state=>state.characters.characters)
    const filterValue= useTypedSelector(state=>state.characters.searchValue)
    const dispatch = useDispatch();


    const checkTitle = (obj:ICharacter, words:string[])=>{
      return  words.some(w=>obj.display_title.toLowerCase().includes(w.toLowerCase()))
    }
    const checkDescription = (obj:ICharacter, words:string[])=>{
       return  words.some(w=>obj.summary_short.toLowerCase().includes(w.toLowerCase()))
    }
    
    const findMath=()=>{
  
       if(filterValue.trim().length >0){
           const wordArray = filterValue.trim().split(' ');
           const findTitle= characters.filter(el=>checkTitle(el, wordArray))
           const findDescription= characters.filter(el=>!checkTitle(el, wordArray)).filter(el=>checkDescription(el, wordArray))
           const findArr = [...findTitle,...findDescription]
           return findArr
          
       }
       return characters
    }

    
    const getData = ()=>{
        dispatch(charactersActions.setLoading(true))
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?&api-key=PhcGfigday1YcAkEcyyPrGb2b1fuXZ9G')
            .then(response => response.json())
            .then(response => {
              dispatch(charactersActions.addInit(response.results))
              dispatch(charactersActions.setLoading(false))
            })
            .catch(err => console.error(err));  
    }
    
    useEffect(()=>{
      
        getData();  
    },[])

    return(
        <div className={s.wrapper}>
            <div className={s.searchField}>
              <SearchComponent/>
            </div>
            {loading? <Modal children={<LoadingConponent />}></Modal> :
            <>
           <div className={s.results}>Results: {findMath().length}</div>
            <div className={s.characters}>
                {findMath().map((el, i)=><CardComponent key={i} data={el}/>)}
            </div>
            </>}
        
        </div>
    )
}