import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

import logo from '../../assets/logo/lolLogo.png'
import { useHistory } from 'react-router';

export const Navbar = () => {

    const history = useHistory();

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar color="primary" position="static">
            <Toolbar>
            <Box
                sx={{
                    display: "flex",
                    width: "6%",
                    height: "6%",
                    minWidth: "45px",
                    minHeight: "45px"
                }}
            >
                <img
                src={logo}
                alt="logo"
                style={{
                    width: "60%",
                    height: "60%",
                    minWidth: "45px",
                    minHeight: "45px",
                    objectFit: "contain"
                }}
                />
            </Box>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Button variant="outlined" color="error" sx={{mr: 2, ml: 2}} onClick={()=>history.push("/summonerSearch")}>Summoner Search</Button>
            <Button variant="outlined"
            color="error" onClick={()=>history.push("/champions")}>Champions</Button>
            </Toolbar>
        </AppBar>
    </Box>
    )
}
