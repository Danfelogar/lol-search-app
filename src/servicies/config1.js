import axios from "axios";

const instance = axios.create({
    baseURL: 'http://ddragon.leagueoflegends.com/cdn'
});

export default instance;