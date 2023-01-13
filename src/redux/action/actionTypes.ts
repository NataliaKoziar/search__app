import { ICharacter } from "../models";
export enum actionTypes{
    ADD_INIT = 'ADD_INIT',
    LOADING = 'LOADING'
}
interface AddInitAction{
    type:actionTypes.ADD_INIT;
    payload:ICharacter[]
}
interface LoadingAction{
    type:actionTypes.LOADING;
    payload:boolean
  }
export type TypeOfAction = AddInitAction | LoadingAction