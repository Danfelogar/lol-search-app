import axios from '../config2';


export const summonerServices = ()=>{

    const apiKey = 'RGAPI-8c67105d-0c3b-4920-9f00-8514c3f71e70';//se debe de cambiar cada 24h

    const getSummonerByName =(region,summonerName)=>{
        return axios({
            method: 'GET',
            url: `${region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
        })
    }

    const getStatsOfRankedsByEncryptedId =(region,encryptedId)=>{
        return axios({
            method: 'GET',
            url: `${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedId}?api_key=${apiKey}`
        })
    }

    return{
        getSummonerByName,
        getStatsOfRankedsByEncryptedId
    }
}