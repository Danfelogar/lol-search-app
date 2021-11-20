import axios from '../config1';


export const championsServices = () =>{

    //info para recuadros individuales para campeon
    const getChampionsList= ()=>{
        return axios({
            method: 'GET',
            url: '/11.23.1/data/en_US/champion.json'
        })
    };

    const getChampionLoadingSkim =(championName)=>{
        return axios({
            method: 'GET',
            url: `img/champion/loading/${championName}_0.jpg`
        })
    }

    //info para pagina individual del campeon
    const getChampionByName =(championName)=>{
        return axios({
            method: 'GET',
            url: `11.23.1/data/en_US/champion/${championName}.json`
        })
    }

    const getChampionSplashArts =(championName)=>{
        return axios({
            method: 'GET',
            url: `img/champion/splash/${championName}.jpg`
        })
    }

    const getChampionPassiveImg =(passiveName)=>{
        return axios({
            method:'GET',
            url: `cdn/11.23.1/img/passive/${passiveName}.png`
        })
    }

    const getChampionAbilityImg =(abilityName)=>{
        return axios({
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