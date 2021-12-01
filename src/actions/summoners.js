import { types } from '../types/types';
import { summonerServices } from '../servicies/summoner';


const { getSummonerByName, getStatsOfRankedsByEncryptedId } = summonerServices();

const actGetSummonerRegion =(region)=>(dispatch)=>{
    try {
        dispatch({
            type: types.getSummonerRegion,
            payload: region
        });
    } catch (e) {
        console.log(e);
    }
}

const actGetSummonerByName =(region,summonerName)=>async(dispatch)=>{
    try {
        const res =await getSummonerByName(region,summonerName);
        dispatch({
            type: types.getSummonerByName,
            payload: res.data
        });
    } catch (e) {
        console.log(e);
    }
}

const actGetStatsOfRankedsByEncryptedId = (region,encryptedId)=>async(dispatch)=>{
    try {
        const res = await getStatsOfRankedsByEncryptedId(region,encryptedId);
        dispatch({
            type: types.getStatsOfRankeds,
            payload:res.data
        })
    } catch (e) {
        console.log(e);
    }

}

const actGetClearSummoner = ()=>(dispatch)=>{
    dispatch({
        type:types.getClearSummoner
    })
}

export const summonerActions =()=>{
    return{
        actGetSummonerRegion,
        actGetSummonerByName,
        actGetStatsOfRankedsByEncryptedId,
        actGetClearSummoner
    }
}
