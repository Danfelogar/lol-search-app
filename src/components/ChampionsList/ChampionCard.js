import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


import { useChampionCard } from '../../hooks/useChampionCard';
import { useChampionNavbar } from '../../hooks/useChampionNavbar';
import { ChampionIndividualCard } from './ChampionIndividualCard';


export const ChampionCard = () => {

    const { champions } = useChampionCard();

    const { formValues } = useChampionNavbar();

    return (
    <Box sx={{ flexGrow: 1, m:5 }}>
        <Grid container spacing={1} >
            {
                champions
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
