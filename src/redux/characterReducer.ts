import { IState } from "./models";
import { actionTypes, TypeOfAction } from "./action/actionTypes";


const initialState: IState ={
    characters:[],
    loading:false
}

export const CharactersReducer = (state= initialState, action:TypeOfAction):IState=>{
    switch(action.type){
        case actionTypes.ADD_INIT:
            return {
                ...state,
                characters: action.payload
            }
            case actionTypes.LOADING:
            return {
                ...state,
                loading: action.payload

            };
        default:
            return state;
    }
}