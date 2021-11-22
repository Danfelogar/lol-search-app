import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { useChampionCard } from '../../hooks/useChampionCard';
import { ChampionIndividualCard } from './ChampionIndividualCard';
import { ChampionNotFound } from './ChampionNotFound';


export const ChampionCard = () => {

    const { searchChampion } = useSelector(state => state.champions);

    const { champions } = useChampionCard();

    return (
    <Box sx={{ flexGrow: 1, m:5 }}>
        <Grid container spacing={1} >
            {
                champions
                .filter((championName)=>{
                    if(searchChampion === ""){
                        return championName
                    } else if (championName.id.toLowerCase().includes(searchChampion)){
                        return championName
                    }
                })
                .map((champion,idx)=>{
                    return(
                        <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2} >
                            <ChampionIndividualCard key={idx} {...champion} />
                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>
    )
}
