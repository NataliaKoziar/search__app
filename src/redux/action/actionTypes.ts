import { ICharacter } from "../models";
export enum actionTypes{
    ADD_INIT = 'ADD_INIT',
    CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE',
    LOADING = 'LOADING'
}
interface AddInitAction{
    type:actionTypes.ADD_INIT;
    payload:ICharacter[]
}
interface ChangeSearchAction{
    type:actionTypes.CHANGE_SEARCH_VALUE;
    payload:string
  }
  
interface LoadingAction{
    type:actionTypes.LOADING;
    payload:boolean
  }
export type TypeOfAction = AddInitAction | ChangeSearchAction| LoadingAction