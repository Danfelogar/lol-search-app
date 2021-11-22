import React from 'react';
import { Container, Typography } from '@mui/material';

export const ChampionNotFound = () => {
    return (
        <Container style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
        }}>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
            <Typography variant="h1" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, ml: 1,mt: 1,mr: 1, mb: 1, color:'#edf2f4' }}>
            Ups this champion was not found
            </Typography>
            <Typography variant="h3" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 0,pb: 1.7, color:'#edf2f4' }}>
            don't worry check if you wrote it right 🔍
            </Typography>
        </Container>
    )
}
