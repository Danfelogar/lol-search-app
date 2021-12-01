import { types } from '../types/types';
import { championsServices } from '../servicies/champions/index';

const { getChampionsList, getChampionByName } = championsServices();

const actGetChampionsList = () =>async(dispatch)=>{
    try {
        const  res = await getChampionsList();
        const { data } = res.data;
        dispatch({
            type: types.getallChampions,
            payload: Object.values(data)//con esto omito los nombres de los champs regresando un array simple
        });

    } catch (e) {
        console.log(e);
    }
}

const actGetSearchChampion = (championName)=>(dispatch)=>{

    const name = championName.toLowerCase();

    dispatch({
        type: types.getSearchChampion,
        payload: name
    })
}

const actGetTagChampion = (tag)=>(dispatch)=>{
    dispatch({
        type: types.getTagsChampion,
        payload: tag
    })
}

const actGetDifficultyChampion = (difficulty)=>(dispatch)=>{
    dispatch({
        type: types.getDifficultyChampion,
        payload: difficulty
    })
}

const actGetChampionById = (championId)=>async(dispatch)=>{
    try {
        const  res = await getChampionByName(championId);
        const { data } = res.data
        dispatch({
            type: types.getChampionById,
            payload: Object.values(data)
        });
    } catch (e) {
        console.log(e)
    }
}

export const championsActions = ()=>{
    return{
        actGetChampionsList,
        actGetSearchChampion,
        actGetTagChampion,
        actGetDifficultyChampion,
        actGetChampionById
    }
}