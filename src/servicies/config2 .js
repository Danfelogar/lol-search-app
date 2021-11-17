import axios from "axios";

export const instanceForSummoner= axios.create({
    baseURL: process.env.REACT_APP_API_RIOT_SUMMONERSTATS_URL
});