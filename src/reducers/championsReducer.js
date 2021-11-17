import { types } from "../types/types";


const initialState ={
    champions:[],
}

export const championsReducer =(state=initialState, action)=>{
    switch (action.type) {
        case types.getallChampions:
            return{
                ...state,
                champions: action.payload
            }
        default:
            return state;
    }
}