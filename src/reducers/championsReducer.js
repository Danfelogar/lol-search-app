import { types } from "../types/types";


const initialState ={
    champions:[],
    searchChampion:{},
    tagChampion:"All",
    difficultyChampion: "All"
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
        case types.getTagsChampion:
            return{
                ...state,
                tagChampion: action.payload
            }
        case types.getDifficultyChampion:
            return{
                ...state,
                difficultyChampion: action.payload
            }
        default:
            return state;
    }
}