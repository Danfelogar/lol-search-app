import { Box } from "@mui/system"


export const ChampionLoading = () => {
    return (
        <Box className="championWarp" sx={{ display:"flex",
        height: "87.1vh",flexDirection:"column", flexGrow: 1, p:5, mb:0, pb:17, justifyContent:"center" }}>
            <img
            style={{
                width: "75%",
                margin: "auto"
            }}
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/08385b29925539.560ac94e79f23.gif" alt="Funny" />
            <h2 className="animateLoading"
            >Loading</h2>
        </Box>
    )
}
