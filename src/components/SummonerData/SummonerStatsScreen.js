import React from 'react';
import { Box } from '@mui/system';
import { Card, CardContent, CardMedia, Fab, Typography } from '@mui/material';

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import  Emblem_Platinum  from '../../assets/img/rankeds-emblem/Emblem_Platinum.png';



export const SummonerStatsScreen = () => {
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
                image='https://ddragon.leagueoflegends.com/cdn/11.23.1/img/profileicon/3150.png'
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
                    280
                </Typography>
                </Fab>
            </Box>
            <Typography variant="h6" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 0.5, color:'#edf2f4' }}>
                FTS Danfelogar
            </Typography>
            <Box
            sx={{
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"center",
                alignItems:"center",
            }}
            >
                <Card
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
                Personal Ratings
                </Typography>
                <CardMedia
                title="platinun"
                component="img"
                image={Emblem_Platinum}
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
                    III
                </Typography>
                </Fab>
                <Box>
                    <Typography variant="h6" component="div"
                    sx={{
                        textAlign: 'center',fontWeight: 'bold', color:"#272727",
                    }}>
                        LP:{58}
                    </Typography>
                </Box>
                <Typography variant="h6" component="div"
                sx={{
                    textAlign: 'center',fontWeight: 'bold', color:"#272727",
                }}>
                    Soloqueue
                </Typography>
                <Typography variant="h6" component="div"
                sx={{
                    textAlign: 'center',fontWeight: 'bold', color:"secondary.main",
                }}>
                    Stats
                </Typography>
                <Box sx={{width:"160px"}}>
                    <CircularProgressbar
                        value={75}
                        text={`75%`}
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
                        Wins: <span style={{color:"#2deb87"}} >33</span>
                    </Typography>
                <Typography variant="h6" component="div"
                    sx={{
                        textAlign: 'center',fontWeight: 'bold', color:"#272727",ml:1,
                    }}>
                        Losses: <span style={{color:"#f95859"}} >33</span>
                </Typography>
                </Box>
                </CardContent>
            </Card>
            <Card
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
                Personal Ratings
                </Typography>
                <CardMedia
                title="platinun"
                component="img"
                image={Emblem_Platinum}
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
                    III
                </Typography>
                </Fab>
                <Box>
                    <Typography variant="h6" component="div"
                    sx={{
                        textAlign: 'center',fontWeight: 'bold', color:"#272727",
                    }}>
                        LP:{58}
                    </Typography>
                </Box>
                <Typography variant="h6" component="div"
                sx={{
                    textAlign: 'center',fontWeight: 'bold', color:"#272727",
                }}>
                    Soloqueue
                </Typography>
                <Typography variant="h6" component="div"
                sx={{
                    textAlign: 'center',fontWeight: 'bold', color:"secondary.main",
                }}>
                    Stats
                </Typography>
                <Box sx={{width:"160px"}}>
                    <CircularProgressbar
                        value={75}
                        text={`75%`}
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
                        Wins: <span style={{color:"#2deb87"}} >33</span>
                    </Typography>
                <Typography variant="h6" component="div"
                    sx={{
                        textAlign: 'center',fontWeight: 'bold', color:"#272727",ml:1,
                    }}>
                        Losses: <span style={{color:"#f95859"}} >33</span>
                </Typography>
                </Box>
                </CardContent>
            </Card>
            </Box>
        </Box>
    </Box>
    )
}
