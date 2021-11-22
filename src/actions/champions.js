import { types } from '../types/types';
import { championsServices } from '../servicies/champions/index';
const { getChampionsList } = championsServices();


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

export const championsActions = ()=>{
    return{
        actGetChampionsList,
        actGetSearchChampion
    }
}