import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container } from '@mui/material';

import { useChampionCard } from '../../hooks/useChampionCard';

export const ChampionIndividualCard = (champion) => {

    const { getTagsByRole } = useChampionCard();

    return (
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
    )
}
