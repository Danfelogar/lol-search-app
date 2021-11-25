import React from 'react';
import CardMedia from '@mui/material/CardMedia'
import { Card, CardContent, Container, Typography } from '@mui/material';

import { useChampionByid } from '../../hooks/useChampionByid';
import { useChampionCard } from '../../hooks/useChampionCard';
import { ChampionByIdSkills } from './ChampionByIdSkills';

export const ChampionByIdScreen = () => {

    const { championById } = useChampionByid();

    const { getTagsByRole } = useChampionCard();

    return (
        <div>
            {championById.map((champion,idx)=>{
                    const championKey = champion.key;
                return(
                    <Card
                    sx={{bgcolor:"primary.main"}}
                    //esta linea nos da el bg solido
                    key={idx}>
                        <Card
                            variant="none"
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            backgroundColor:"primary.main"
                            //esta linea nos permite colorear el degradado que le hacemos a la img
                            }}
                            >
                            <CardMedia
                            className="champion_img"
                            title={champion.id}
                            component="img"
                            image={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                            sx={{
                                maxHeight:"700px",
                                objectFit: "fill"
                            }}
                            />
                            <CardContent
                            style={{
                                paddingBottom:0
                            }}
                            sx={{
                                position:"absolute",
                                mt: "280px",
                                border: 2.5,
                                borderColor: 'error.main',
                                borderRadius: '1px 40px',
                                mr: "10%",
                                ml: "10%",
                                p:0
                            }}>
                                <Typography variant="h3" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 0, pt:1, color:'#edf2f4',
                                textTransform: "capitalize"
                                }}>
                                    {champion.title}
                                </Typography>
                                <Typography variant="h1" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 1, color:'#edf2f4' }}>
                                    {champion.id}
                                </Typography>
                                <Typography variant="subtitle1" component="div"sx={{ textAlign: 'center',fontWeight: 'light',letterSpacing: 8, m: 1, color:'#edf2f4', pl:"5%",pr:"5%" }}>
                                    {champion.lore}
                                </Typography>
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
                                                height:"60px",
                                                width:"60px",
                                                m:1
                                                }}
                                                image={getTagsByRole(tag)}
                                                />
                                            )
                                        })
                                    }
                                </Container>
                                <CardContent
                                style={{
                                paddingBottom:0
                                }}
                                sx={{
                                    borderTop: 2.5,
                                    borderColor: 'error.main',
                                    display: "flex",
                                    flexDirection:"row",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    p:0
                                }}>
                                <Typography variant="subtitle1" component="div"sx={{ textAlign: 'center',fontWeight: 'light',letterSpacing: 8, m: 1, color:'#edf2f4', pl:"5%",pr:"5%" }}>
                                    <a href={`https://lan.op.gg/champion/${champion.id}/statistics/mid/build`}
                                    style={{
                                        textDecoration: "none",
                                        color: "#edf2f4"
                                    }}
                                    >
                                        OP.GG
                                    </a>
                                </Typography>
                                <Typography variant="subtitle1" component="div"sx={{ textAlign: 'center',fontWeight: 'light',letterSpacing: 8, m: 1, color:'#edf2f4', pl:"5%",pr:"5%" }}>
                                    <a href={`https://www.probuilds.net/champions/details/${champion.id}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "#edf2f4"
                                    }}
                                    >
                                        PROBUILDS.NET
                                    </a>
                                </Typography>
                                </CardContent>
                            </CardContent>
                        </Card>
                        <Card
                        sx={{
                            bgcolor: 'primary.main',
                            mt: "230px",
                            pb: 2
                            }}
                        >
                            <ChampionByIdSkills
                            numberIdChampion={championKey}
                            {...champion }/>
                        </Card>
                    </Card>
                )
            })}
        </div>
    )
}
