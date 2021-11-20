import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';

import { useChampionCard } from '../../hooks/useChampionCard';


export const ChampionCard = () => {

    const { champions, getTagsByRole } = useChampionCard();

    return (
    <Box sx={{ flexGrow: 1, m:5 }}>
        <Grid container spacing={1} >
            {
                champions.map((champion,idx)=>{
                    return(
                <Grid key={idx} item xs={12} sm={6} md={4} lg={3} xl={2} >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardContent
                            sx={{p: 0}}
                            className="container">
                                <CardMedia
                                className="container_img"
                                component="img"
                                height="600"
                                width="280"
                                image={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                                />
                            </CardContent>
                            <CardContent
                            sx={{background:'#023047'}}
                            >
                                <Typography
                                className="container_text"
                                sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold'}}
                                gutterBottom variant="h5" component="div">
                                    <Container
                                    sx={{display: "flex",
                                    flexDirection: "inline",
                                    justifyContent:"center",
                                    alignContent:"center"}}
                                    maxWidth="25">
                                    {
                                        champion.tags.map((tag,idx)=>{
                                            console.log(getTagsByRole(tag));
                                            return(
                                                <CardMedia
                                                key={idx}
                                                sx={{
                                                    height:"30px",
                                                    width:"30px",
                                                    ml:0.5,
                                                    mr:0.5
                                                }}
                                                image={getTagsByRole(tag)}
                                                />
                                            )
                                        })
                                    }
                                    </Container>
                                    {champion.id}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                    )
                })
            }
        </Grid>
    </Box>
    )
}
