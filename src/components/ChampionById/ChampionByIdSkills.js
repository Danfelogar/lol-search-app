import { Avatar, CardContent, Typography } from "@mui/material"
import { useChampionByid } from "../../hooks/useChampionByid"

export const ChampionByIdSkills = (champion) => {

    let keyChampion = champion.numberIdChampion;

    const { handleChangeSkills,skillVideo,
        skillName,skillDescription, keyIdChamp } = useChampionByid();
    return (
        <CardContent
        sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: 'primary.dark',
            pl: "6%",
            pr: "6%",
            justifyContent: "center"
        }}
        >
            <Typography variant="h1" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 1, color:'#edf2f4' }}>
                Skills
            </Typography>
            <CardContent
            sx={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: 'primary.dark',
            pl: "6%",
            pr: "6%",
            flexWrap: "wrap",
            justifyContent: "center"
            }}
            >
                <Avatar
                alt="Remy Sharp"
                src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/passive/${champion.passive.image.full}`}
                sx={{
                    width: 90,
                    height: 90,
                    m:1,
                    transition: "all 0.3s ease-in",
                    '&:hover': {
                        border: 2,
                        borderRadius: '50%',
                        borderColor: 'secondary.main',
                        },
                    }}
                onClick={()=>handleChangeSkills('P',champion.passive.name,champion.passive.description,keyChampion)}
                />
                <Avatar
                    alt="Remy Sharp"
                    src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${champion.spells[0].image.full}`}
                    sx={{
                        width: 90,
                        height: 90,
                        m:1,
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                            border: 2,
                            borderRadius: '50%',
                            borderColor: 'secondary.main',
                            },
                        }}
                    onClick={()=>handleChangeSkills('Q',champion.spells[0].name,champion.spells[0].description,keyChampion)}
                    />
                <Avatar
                    alt="Remy Sharp"
                    src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${champion.spells[1].image.full}`}
                    sx={{
                        width: 90,
                        height: 90,
                        m:1,
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                            border: 2,
                            borderRadius: '50%',
                            borderColor: 'secondary.main',
                            },
                        }}
                    onClick={()=>handleChangeSkills('W',champion.spells[1].name,champion.spells[1].description,keyChampion)}
                    />
                <Avatar
                    alt="Remy Sharp"
                    src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${champion.spells[2].image.full}`}
                    sx={{
                        width: 90,
                        height: 90,
                        m:1,
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                            border: 2,
                            borderRadius: '50%',
                            borderColor: 'secondary.main',
                            },
                        }}
                    onClick={()=>handleChangeSkills('E',champion.spells[2].name,champion.spells[2].description,keyChampion)}
                    />
                <Avatar
                    alt="Remy Sharp"
                    src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${champion.spells[3].image.full}`}
                    sx={{
                        width: 90,
                        height: 90,
                        m:1,
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                            border: 2,
                            borderRadius: '50%',
                            borderColor: 'secondary.main',
                            },
                        }}
                    onClick={()=>handleChangeSkills('R',champion.spells[3].name,champion.spells[3].description,keyChampion)}
                    />
                {/* {
                    intente hacer un map extra pero como la documentacion los campeones viejos difieren de algunos datos de los nuevos no es posible mapear comodamente 
                    champion.spells.map((spell,idx)=>{
                        const linkVideo = spell.id.slice(-1);
                        return(
                            <Avatar
                            key={idx}
                            alt="Remy Sharp"
                            src={`http://ddragon.leagueoflegends.com/cdn/11.23.1/img/spell/${spell.image.full}`}
                            sx={{
                                width: 90,
                                height: 90,
                                m:1,
                                transition: "all 0.3s ease-in",
                                '&:hover': {
                                    border: 2,
                                    borderRadius: '50%',
                                    borderColor: 'secondary.main',
                                    },
                                }}
                            onClick={()=>handleChangeSkills(linkVideo,spell.name,spell.description,keyChampion)}
                            />
                        )
                    })
                } */}
            </CardContent>
            <video
            src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${keyIdChamp}/ability_${keyIdChamp}_${skillVideo}1.webm`}
            autoPlay={true}
            loop={true}
            muted={true}
            style={{
                minWidth:"350px",
                minHeight:"300px"
            }}
            />
            <Typography variant="subtitle1" component="div" sx={{ fontStyle: 'italic', textAlign: 'justify',fontWeight: 'bold',letterSpacing: 6, m: 1.5, color:'#edf2f4' }}>
                <Typography variant="h3" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, m: 1, color:'secondary.main' }}>
                    {skillName}
                </Typography>
                {skillDescription}
            </Typography>
        </CardContent>
    )
}
