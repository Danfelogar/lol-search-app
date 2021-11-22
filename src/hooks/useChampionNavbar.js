import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "./useForm";
import { championsActions } from "../actions/champions";

export const useChampionNavbar = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm({championName: ''});

    const { actGetSearchChampion,actGetTagChampion, actGetDifficultyChampion } = championsActions();

    const { championName } = formValues;

    useEffect(() => {
        dispatch(actGetSearchChampion(championName));
    },[dispatch,actGetSearchChampion,championName])

    const handleTag = (tag)=>{
        dispatch(actGetTagChampion(tag))
    }

    const handleDifficulty =(difficulty)=>{
        dispatch(actGetDifficultyChampion(difficulty))
    }
    return {
        formValues,
        championName,
        handleInputChange,
        handleTag,
        handleDifficulty
    }
}
