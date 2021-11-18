import { instanceForChampions } from '../config';


export const championsServices = () =>{

    //info para recuadros individuales para campeon
    const getChampionsList= ()=>{
        return instanceForChampions ({
            method: 'GET',
            url: '/11.23.1/data/en_US/champion.json'
        })
    };

    const getChampionLoadingSkim =(championName)=>{
        return instanceForChampions ({
            method: 'GET',
            url: `img/champion/loading/${championName}_0.jpg`
        })
    }

    //info para pagina individual del campeon
    const getChampionByName =(championName)=>{
        return instanceForChampions ({
            method: 'GET',
            url: `11.23.1/data/en_US/champion/${championName}.json`
        })
    }

    const getChampionSplashArts =(championName)=>{
        return instanceForChampions ({
            method: 'GET',
            url: `img/champion/splash/${championName}.jpg`
        })
    }

    const getChampionPassiveImg =(passiveName)=>{
        return instanceForChampions({
            method:'GET',
            url: `cdn/11.23.1/img/passive/${passiveName}.png`
        })
    }

    const getChampionAbilityImg =(abilityName)=>{
        return instanceForChampions ({
            method: 'GET',
            url: `cdn/11.23.1/img/spell/${abilityName}.png`
        })
    }

    return{
        getChampionsList,
        getChampionLoadingSkim,
        getChampionByName,
        getChampionSplashArts,
        getChampionPassiveImg,
        getChampionAbilityImg
    }
}