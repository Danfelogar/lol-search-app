import axios from '../config2';


export const summonerServices = ()=>{

    const apiKey = 'RGAPI-23f3c4f1-995e-460f-8388-dde8e0e87746';//se debe de cambiar cada 24h

    const getSummonersByName =(region,summonerName)=>{
        return axios({
            method: 'GET',
            url: `${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
        })
    }

    const getChampionMasteryByencryptedId =(region,encryptedId)=>{
        return axios({
            method: 'GET',
            url: `${region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${encryptedId}?api_key=${apiKey}`
        })
    }

    const getStatsOfRankedsByEncryptedId =(region,encryptedId)=>{
        return axios({
            method: 'GET',
            url: `${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedId}?api_key=${apiKey}`
        })
    }

    return{
        getSummonersByName,
        getChampionMasteryByencryptedId,
        getStatsOfRankedsByEncryptedId
    }
}