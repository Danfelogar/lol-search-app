import React from 'react';

import { ChampionCard } from './ChampionCard';
import { Typography } from '@mui/material';
import { ChampionNavbar } from './ChampionNavbar/ChampionNavbar';

export const ChampionsListScreen = () => {

    return (
        <div style={{
            marginBottom: "-1px"
        }} className="championWarp">
            <Typography className="animate__animated animate__backInLeft animate__fast" variant="h3" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 0, pt:1, color:'#edf2f4' }}>
            CHOOSE YOUR
            </Typography>
            <Typography className="animate__animated animate__backInRight animate__fast" variant="h1" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 1, color:'#edf2f4' }}>
            CHAMPION
            </Typography>
            <Typography className="animate__animated animate__backInLeft animate__fast" variant="subtitle1" component="div"sx={{ textAlign: 'center',fontWeight: 'light',letterSpacing: 8, m: 1, pr:"20%", pl: "20%", color:'#edf2f4' }} >
            Considering there are over 140 champions, it won't take long to find your style of play. Dominate one or all.
            </Typography>
            <ChampionNavbar/>
            <ChampionCard />
        </div>
    )
}
