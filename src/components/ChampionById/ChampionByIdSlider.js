import { CardContent, Typography } from "@mui/material";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useChampionByid } from '../../hooks/useChampionByid';

export const ChampionByIdSlider = () => {

    const { championById } =useChampionByid();

    const championName =championById.map(champion=>{
        return champion.id
    }).toString();

    const champion =championById.map(champion=>{
        return champion.skins
    });

    return (
        <CardContent
        sx={{
            display: "flex",
            flexDirection: "column",
            background: 'linear-gradient(0deg, rgba(2,48,71,1) 2%, rgba(142,202,230,1) 80%)',
            pl: "6%",
            pr: "6%",
            justifyContent: "center",
        }}>
            <Typography variant="h1" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 1, color:'#edf2f4' }}>
                Skins
            </Typography>
                <Carousel style={{width:"80%", alignSelf:"center"}}>
                    {
                    champion[0].map((skin,idx)=>{
                        return(
                            <Carousel.Item  key={idx}>
                                <img className="d-block w-100" alt={skin.name} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin.num}.jpg`}/>
                                <Carousel.Caption>
                                    <h3>{skin.name}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                    }
                </Carousel>
        </CardContent>
    )
}
