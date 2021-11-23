import React from 'react';
import CardMedia from '@mui/material/CardMedia'
import { Card, CardContent, Typography } from '@mui/material';

import { useChampionByid } from '../../hooks/useChampionByid';

export const ChampionByIdScreen = () => {

    const { championById } = useChampionByid();

    return (
        <div>
            {championById.map((champion,idx)=>{
                return(
                    <Card key={idx}>
                        <Card
                            sx={{
                            display: "flex",
                            justifyContent: "center"
                            }}
                            >
                            <CardMedia
                            title={champion.id}
                            component="img"
                            image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                            sx={{
                                maxHeight:"700px",
                                objectFit: "fill",
                            }}
                            />
                            <CardContent
                            sx={{
                                position:"absolute",
                                mt: "30%",
                                borderColor: 'primary.main',
                                border: 10
                            }}>
                                <Typography>
                                    {champion.title}
                                </Typography>
                                <Typography>
                                    {champion.id}
                                </Typography>
                                <Typography>
                                    {champion.lore}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Card>
                )
            })}
        </div>
    )
}
