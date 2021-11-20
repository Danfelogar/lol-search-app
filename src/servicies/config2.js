import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://la1.api.riotgames.com/lol'
});