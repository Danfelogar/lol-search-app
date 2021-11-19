import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export const ChampionCard = () => {
    return (
    <Box sx={{ flexGrow: 1, m:5 }}>
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3} lg={4} xl={2} >
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent
                        sx={{p: 0}}
                        className="container">
                            <CardMedia
                            className="container_img"
                            component="img"
                            minHeight="230"
                            height="460"
                            minWidth="140"
                            width="280"
                            image="https://programacion.net/files/article/20160819020822_image-not-found.png"
                            />
                        </CardContent>
                        <CardContent
                        sx={{background:'#023047'}}
                        >
                            <Typography
                            className="container_text"
                            sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold'}}
                            gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    </Box>
    )
}
