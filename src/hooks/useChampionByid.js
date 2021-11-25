import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { championsActions } from '../actions/champions';

export const useChampionByid = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { championById } = useSelector(state => state.champions);

    const [ skills, setSkills ] = useState({
        'skillVideo': '',
        'skillName': '',
        'skillDescription':'',
        'keyIdChamp':''

    });

    const { skillVideo,skillName,skillDescription,keyIdChamp } = skills;

    const handleChangeSkills = (video,name,description,keyIdChamp) =>{

        let numberIdChampion = '';

        if(keyIdChamp.length === 1){
            numberIdChampion = `000${keyIdChamp}`;
        } else if(keyIdChamp.length === 2){
            numberIdChampion = `00${keyIdChamp}`;
        } else if(keyIdChamp.length === 3){
            numberIdChampion = `0${keyIdChamp}`;
        } else {
            numberIdChampion = `${keyIdChamp}`;
        }
        setSkills({
            skillVideo: video,
            skillName: name,
            skillDescription: description,
            keyIdChamp: numberIdChampion
        })
    }

    const { actGetChampionById } = championsActions();

    useEffect(() => {
        dispatch(actGetChampionById(id))
    }, [dispatch,actGetChampionById,id])

    return {
        championById,
        handleChangeSkills,
        skillVideo,
        skillName,
        skillDescription,
        keyIdChamp
    }
}
