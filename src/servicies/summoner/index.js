import axios from '../config2';


export const summonerServices = ()=>{

    const apiKey = 'RGAPI-f28b5bfe-63a3-413f-99e4-2a7e0068b12c';//se debe de cambiar cada 24h

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