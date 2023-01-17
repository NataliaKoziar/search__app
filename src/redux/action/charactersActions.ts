import { actionTypes } from "./actionTypes";
import { ICharacter } from "../models";

export const charactersActions={
    addInit:(payload:ICharacter)=>({type:actionTypes.ADD_INIT, payload}),
    changeSearch:(payload:string)=>({type:actionTypes.CHANGE_SEARCH_VALUE, payload}),
    setLoading:(payload:boolean)=>({type:actionTypes.LOADING, payload}),
}