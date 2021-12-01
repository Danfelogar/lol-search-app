import { types } from "../types/types"

const initialState ={
    summonerRegion:[],
    summonerByName:[],
    championMastery:[],
    statsOfRankeds:[],
}

export const summonerReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.getSummonerRegion:
            return{
                ...state,
                summonerRegion: action.payload
            }
        case types.getSummonerByName:
            return{
                ...state,
                summonerByName: action.payload
            }
        case types.getChampionMastery:
            return{
                ...state,
                championMastery: action.payload
            }
        case types.getStatsOfRankeds:
            return{
                ...state,
                statsOfRankeds: action.payload
            }
        default:
            return state;
    }
}
