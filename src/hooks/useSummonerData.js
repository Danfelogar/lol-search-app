import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { summonerActions } from '../actions/summoners';
import { useEffect } from 'react';

import  Emblem_Bronze  from '../assets/img/rankeds-emblem/Emblem_Bronze.png';
import  Emblem_Challenger  from '../assets/img/rankeds-emblem/Emblem_Challenger.png';
import  Emblem_Diamond  from '../assets/img/rankeds-emblem/Emblem_Diamond.png';
import  Emblem_Gold  from '../assets/img/rankeds-emblem/Emblem_Gold.png';
import  Emblem_Grandmaster  from '../assets/img/rankeds-emblem/Emblem_Grandmaster.png';
import  Emblem_Iron  from '../assets/img/rankeds-emblem/Emblem_Iron.png';
import  Emblem_Master  from '../assets/img/rankeds-emblem/Emblem_Master.png';
import  Emblem_Platinum  from '../assets/img/rankeds-emblem/Emblem_Platinum.png';
import  Emblem_Silver  from '../assets/img/rankeds-emblem/Emblem_Silver.png';

export const useSummonerData = () => {

    const dispatch = useDispatch();

    const { summonerId } = useParams();
    console.log(summonerId)

    const { actGetStatsOfRankedsByEncryptedId } = summonerActions();

    const { summonerRegion,summonerByName,championMastery,statsOfRankeds } = useSelector(state => state.summoner);

    useEffect(() => {
            dispatch(actGetStatsOfRankedsByEncryptedId(summonerRegion,summonerId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [summonerId]);

    const  ranks ={
        'BRONZE':Emblem_Bronze,
        'CHALLENGER':Emblem_Challenger,
        'DIAMOND':Emblem_Diamond,
        'GOLD':Emblem_Gold,
        'GRANDMASTER':Emblem_Grandmaster,
        'IRON':Emblem_Iron,
        'MASTER':Emblem_Master,
        'PLATINUM':Emblem_Platinum,
        'SILVER':Emblem_Silver,
    }

    const getRanksByTier = (tier) =>{return ranks[tier]}

    return{
        summonerByName,
        championMastery,
        statsOfRankeds,
        getRanksByTier,
    }
}
