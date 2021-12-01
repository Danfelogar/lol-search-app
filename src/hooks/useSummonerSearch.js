import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { summonerActions } from "../actions/summoners";
import { useForm } from "./useForm";


export const useSummonerSearch = () => {

    const dispatch = useDispatch();

    const history = useHistory()

    const { actGetSummonerRegion,actGetSummonerByName } = summonerActions();

    const { summonerByName } = useSelector(state => state.summoner);

    const [ formValues, handleInputChange ] = useForm({summonerName: ''});

    const { summonerName } = formValues;

    const handleSummonerByName =(region,summonerName,)=>{
        const regionLower= region.toLowerCase();
        dispatch(actGetSummonerByName(regionLower,summonerName))
        dispatch(actGetSummonerRegion(regionLower));
        //ojo
        history.push(`/summonerSearch/${summonerByName.id}`)
        // debugger
    }

    return {
        summonerByName,
        summonerName,
        handleInputChange,
        handleSummonerByName,
    }
}
