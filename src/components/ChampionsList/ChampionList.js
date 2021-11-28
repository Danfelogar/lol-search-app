import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useChampionCard } from '../../hooks/useChampionCard';
import { ChampionIndividualCard } from './ChampionIndividualCard';
import { ChampionNotFound } from './ChampionNotFound';


export const ChampionList = () => {

    const { searchChampion, tagChampion, difficultyChampion } = useSelector(state => state.champions);

    const { champions } = useChampionCard();


    return (
        <>
        <Box sx={{ flexGrow: 1, m:5,mb:0, pb:2 }}>
        <Grid
        container spacing={1} >
            {
                (tagChampion === 'All')
                ?(
                    champions
                // eslint-disable-next-line array-callback-return
                .filter((championName)=>{
                    if(searchChampion === ""){
                        return championName
                    } else if (championName.id.toLowerCase().includes(searchChampion)){
                        return championName
                    }
                })
                .filter((champion)=>{
                    const diff =champion.info.difficulty;
                    if (difficultyChampion === 'All'){
                        return diff
                    } else if (difficultyChampion === 'Easy'){
                        return (diff < 4)
                    }
                    else if (difficultyChampion === 'Regular') {
                        return (diff > 3 && diff < 8)
                    } else if (difficultyChampion === 'Hard') {
                        return (diff > 7 && diff < 11)
                    } else {
                        return diff
                    }
                })
                .map((champion,idx)=>{
                    return(
                        <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2} >
                            <ChampionIndividualCard key={idx} {...champion} />
                        </Grid>
                    )
                })
                )
                :(
                    champions
                // eslint-disable-next-line array-callback-return
                .filter((championName)=>{
                    if(searchChampion === ""){
                        return championName
                    } else if (championName.id.toLowerCase().includes(searchChampion)){
                        return championName
                    }
                })
                .filter((champion)=>champion.tags.includes(`${tagChampion}`))
                .filter((champion)=>{
                    const diff =champion.info.difficulty;
                    if (difficultyChampion === 'All'){
                        return diff
                    } else if (difficultyChampion === 'Easy'){
                        return (diff < 4)
                    }
                    else if (difficultyChampion === 'Regular') {
                        return (diff > 3 && diff < 8)
                    } else if (difficultyChampion === 'Hard') {
                        return (diff > 7 && diff < 11)
                    } else {
                        return diff
                    }
                })
                .map((champion,idx)=>{
                    return(
                        <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2} >
                            <ChampionIndividualCard key={idx} {...champion} />
                        </Grid>
                    )
                })
                )
            }
            {
                ((champions.filter(e=>e.id.toLowerCase().includes(searchChampion)).length === 0 ) && searchChampion !== "")
                &&
                <ChampionNotFound />
            }
        </Grid>
    </Box>
    </>
    )
}
