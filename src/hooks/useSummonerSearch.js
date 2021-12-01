import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { summonerActions } from "../actions/summoners";
import { useForm } from "./useForm";


export const useSummonerSearch = () => {

    const dispatch = useDispatch();

    const history = useHistory()

    const { actGetSummonerRegion,actGetSummonerByName,actGetClearSummoner } = summonerActions();

    const { summonerByName } = useSelector(state => state.summoner);

    const { id } = summonerByName;

    const [ formValues, handleInputChange ] = useForm({summonerName: ''});

    const { summonerName } = formValues;

    const handleSummonerByName =(region,summonerName)=>{
        const regionLower= region.toLowerCase();
        dispatch(actGetSummonerByName(regionLower,summonerName));
        dispatch(actGetSummonerRegion(regionLower));
        //ojo
    }

    useEffect(() => {
        if(id !== undefined ){
            history.push(`/summonerSearch/${id}`)
        }
    }, [id])

    const handleGetClearAndPush =()=>{
        dispatch(actGetClearSummoner());
        history.push("/summonerSearch");
    }


    return {
        summonerByName,
        summonerName,
        handleInputChange,
        handleSummonerByName,
        handleGetClearAndPush
    }
}
