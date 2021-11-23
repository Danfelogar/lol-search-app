import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { championsActions } from '../actions/champions';

export const useChampionByid = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { championById } = useSelector(state => state.champions)

    const { actGetChampionById } = championsActions();

    useEffect(() => {
        dispatch(actGetChampionById(id))
    }, [dispatch,actGetChampionById,id])

    return {
        championById
    }
}
