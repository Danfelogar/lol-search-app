import { AppBar, CardMedia, Typography } from '@mui/material';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/system';

export const Footer = () => {
    return (
        <Box>
            <AppBar
        sx={{
            display: "flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"space-around",
            alignItems: "center",
            m:0
            }}
            position="sticky"
            color="primary">
            <Typography>
                <Link href="https://www.facebook.com/daniel.pologarcia">
                    <IconButton
                    sx={{
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                            color: "#395693"
                        },
                    }}
                    aria-label="example">
                        <FacebookIcon/>
                    </IconButton>
                </Link>
                <Link href="https://www.linkedin.com/in/daniel-felipe-polo-garcia-9a985b210/">
                    <IconButton
                    sx={{
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                            color: "error.main"
                        },
                    }}
                    aria-label="example">
                        <LinkedInIcon/>
                    </IconButton>
                </Link>
                <Link href="https://github.com/Danfelogar">
                    <IconButton
                    sx={{
                        transition: "all 0.3s ease-in",
                        '&:hover': {
                            color: "white"
                        },
                    }}
                    aria-label="example">
                        <GitHubIcon/>
                    </IconButton>
                </Link>
            </Typography>
            <Typography variant="subtitle1" component="div"sx={{ textAlign: 'center',fontWeight: 'light', m: 1, color:'#edf2f4' }}>
            Copyright ©2021 All rights reserved. | This website is made with  by &copy;Danfelogar
            </Typography>
            <CardMedia
                component="img"
                image="https://logodownload.org/wp-content/uploads/2019/12/riot-games-logo.png"
                sx={{
                    maxHeight:"120px",
                    maxWidth: "100px",
                    objectFit: "fill",
                    p:1,
                }}
                />
        </AppBar>
        </Box>
    )
}
