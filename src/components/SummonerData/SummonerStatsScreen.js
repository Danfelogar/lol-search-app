import React from 'react';
import { Box } from '@mui/system';
import { Card, CardContent, CardMedia, Fab, Typography } from '@mui/material';

// Import react-circular-progressbar module and styles
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useSummonerData } from '../../hooks/useSummonerData';



export const SummonerStatsScreen = () => {

    const { summonerByName,statsOfRankeds,getRanksByTier }  = useSummonerData();

    return (
    <Box
    className="summonerStatsWarp"
    sx={{
        width: "100%",
        p:1
    }}
    >
        <Box>
            <Box sx={{
                display:"flex",
                flexDirection:"column", justifyContent:"center",
                alignItems:"center"
                }}>
                <CardMedia
                title="searchLogo"
                component="img"
                image={`https://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/${summonerByName.profileIconId}.png`}
                sx={{
                    width:"180px",
                    height:"180px",
                    border: 2,
                    borderColor: 'secondary.main',
                    borderRadius:"50%",
                    objectFit: "fill",
                    ml:"auto",
                    mr:"auto"
                }}
                />
                <Fab sx={{
                    width: "80px",
                    height:"20px",
                    }} color="secondary" aria-label="add">
                <Typography variant="h6" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold', color:'#edf2f4' }}>
                    {summonerByName.summonerLevel}
                </Typography>
                </Fab>
            </Box>
            <Typography variant="h6" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 0.5, color:'#edf2f4' }}>
                {summonerByName.name}
            </Typography>
            <Box
            sx={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"center",
                alignItems:"flex-start",
            }}
            >
                {
                    statsOfRankeds.map((statsofRanked,idx)=>{
                        const winRate =Math.round(((statsofRanked.wins)/(statsofRanked.wins+statsofRanked.losses))*100);
                        return(
                            <Card
                            key={idx}
                            sx={{
                            bgcolor:"withe",
                            maxWidth: 375,
                            m:1,
                            }}>
                            <CardContent
                            sx={{
                                display:"flex",
                                flexDirection:"column",
                                flexWrap:"wrap",
                                justifyContent:"center",
                                alignItems:"center",
                            }}
                            >
                            <Typography variant="h5" component="div" sx={{ textAlign: 'center',fontWeight: 'bold',letterSpacing: 5,
                            m: 0.5,
                            color:"#272727"
                            }}>
                            {statsofRanked.queueType}
                            </Typography>
                            <CardMedia
                            title={statsofRanked.tier}
                            component="img"
                            image={getRanksByTier(statsofRanked.tier)}
                            sx={{
                                maxWidth:"300px",
                                maxHeight:"300px",
                                objectFit: "fill",
                                ml:"auto",
                                mr:"auto",
                                border: 2,
                                borderColor: 'secondary.main',
                                borderRadius:"50%",
                                p:0.8
                            }}
                            />
                            <Fab
                            sx={{
                                width: "80px",
                                height:"20px",
                                }}
                                color="secondary" aria-label="add">
                            <Typography variant="h6" component="div"
                            sx={{
                                textAlign: 'center',fontWeight: 'bold', color:"#272727",
                                }}>
                                {statsofRanked.rank}
                            </Typography>
                            </Fab>
                            <Box>
                                <Typography variant="h6" component="div"
                                sx={{
                                    textAlign: 'center',fontWeight: 'bold', color:"#272727",
                                }}>
                                    LP:{statsofRanked.leaguePoints}
                                </Typography>
                            </Box>
                            <Typography variant="h6" component="div"
                            sx={{
                                textAlign: 'center',fontWeight: 'bold', color:"secondary.main",
                            }}>
                                Stats
                            </Typography>
                            <Box sx={{width:"160px"}}>
                                <CircularProgressbar
                                    value={winRate}
                                    text={`${winRate}%`}
                                    styles={buildStyles({
                                    textColor: "#272727",
                                    pathColor: "#2deb87",
                                    trailColor: "#f95859"
                                    })}
                                />
                                <Typography variant="h6" component="div"
                                sx={{
                                    textAlign: 'center',fontWeight: 'bold', color:"#272727",
                                }}>
                                    win rate
                                </Typography>
                            </Box>
                            <Box
                            sx={{
                                display:"flex",
                                flexDirection:"row",
                                justifyContent:"center",
                                alignItems:"center",
                            }}
                            >
                            <Typography variant="h6" component="div"
                                sx={{
                                    textAlign: 'center',fontWeight: 'bold', color:"#272727",mr:1,
                                }}>
                                    Wins: <span style={{color:"#2deb87"}} >{statsofRanked.wins}</span>
                            </Typography>
                            <Typography variant="h6" component="div"
                                sx={{
                                    textAlign: 'center',fontWeight: 'bold', color:"#272727",ml:1,
                                }}>
                                    Losses: <span style={{color:"#f95859"}} >{statsofRanked.losses}</span>
                            </Typography>
                            </Box>
                            </CardContent>
                        </Card>
                        )
                    })
                }
            </Box>
        </Box>
    </Box>
    )
}
