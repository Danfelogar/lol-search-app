import { types } from '../types/types';
import { championsServices } from '../servicies/champions/index';


const { getChampionsList } = championsServices();


const actGetChampionsList = () =>async(dispatch)=>{
    try {
        const  res = await getChampionsList();
        
    } catch (e) {
        console.log(e);
    }
}