import { types } from "../types/types";


const initialState ={
    champions:[],
    searchChampion:{}
}

export const championsReducer =(state=initialState, action)=>{
    switch (action.type) {
        case types.getallChampions:
            return{
                ...state,
                champions: action.payload
            }
        case types.getSearchChampion:
            return{
                ...state,
                searchChampion: action.payload
            }
        default:
            return state;
    }
}