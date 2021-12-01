import React from 'react';
import { AppBar, Box, MenuItem, TextField, Toolbar, IconButton, CardMedia,Typography } from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

import { useSummonerSearch } from '../../hooks/useSummonerSearch';

const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
        color: '#ffb703',
        },
        '& label': {
            color: '#edf2f4',
            },
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            color: '#edf2f4',
            },
        '& .MuiInput-underline:after': {
        borderBottomColor: '#ffb703',
        },
        '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#edf2f4',
        },
        '&:hover fieldset': {
            borderColor: '#ffb703',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ffb703',
        },
    },
});

const currencies = [
    {
        value: 'BR1',
        label: 'BR',
    },
    {
        value: 'EUN1',
        label: 'EUNE',
    },
    {
        value: 'EUW1',
        label: 'EUW',
    },
    {
        value: 'JP1',
        label: 'JP',
    },
    {
        value: 'KR',
        label: 'KR',
    },
    {
        value: 'LA1',
        label: 'LAN',
    },
    {
        value: 'LA2',
        label: 'LAS',
    },
    {
        value: 'NA1',
        label: 'NA',
    },
    {
        value: 'OC1',
        label: 'OCE',
    },
    {
        value: 'TR1',
        label: 'TR',
    },
    {
        value: 'RU',
        label: 'RU',
    },
];

export const SummonerSearchScreen = () => {

    const { summonerName, handleInputChange, handleSummonerByName, } = useSummonerSearch();

    const [currency, setCurrency] = React.useState('LA1');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <Box sx={{ bgcolor:"error.main",display:"flex", flexDirection:"column", flexGrow: 1, justifyContent:"center",p:2 }}>

        <CardMedia
            title="searchLogo"
            component="img"
            image='https://i.pinimg.com/originals/eb/95/77/eb9577270a8ebda0826311c007e84bba.png'
            sx={{
                maxWidth:"900px",
                objectFit: "fill",
                mt:5,
                mb:5,
                ml:"auto",
                mr:"auto"
            }}
            />
            <AppBar sx={{
                maxWidth:"900px",
                mt:5,
                mb:5,
                ml:"auto",
                mr:"auto",
                pt:1,
                pb:0.5,
                backgroundColor: "#272727",
                borderRadius: 10,
                display:"flex",
                flexDirection:"row",
                justifyContent:"center",
                height:80,
                }} position="static">
                <Toolbar>
                <Box
                className="appnavWrapper">
                    <CssTextField
                    fullWidth
                    label="Search summoner" id="custom-css-outlined-input fullWidth"
                    name="summonerName"
                    onChange={handleInputChange}
                    value={summonerName}
                    autoComplete="off"
                    />
                </Box>
                <Box sx={{ minWidth: 90,ml:0.5 }}>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={currency}
                    onChange={handleChange}
                    sx={{
                        '& label.Mui-focused': {
                        color: '#ffb703',
                        },
                        '& label': {
                            color: '#edf2f4',
                            },
                        '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                            color: '#edf2f4',
                            },
                        '& .MuiInput-underline:after': {
                        borderBottomColor: '#ffb703',
                        },
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#edf2f4',
                        },
                        '&:hover fieldset': {
                            borderColor: '#ffb703',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#ffb703',
                        },
                    },
                    }}
                    >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                </Box>
                <Box sx={{borderRadius:"50%",bgcolor:"secondary.main"}}>
                    <IconButton
                    aria-label="delete"
                    size="large"
                    onClick={()=>handleSummonerByName(currency,summonerName)}
                    >
                        <SearchIcon fontSize="inherit" />
                    </IconButton>
                </Box>
                </Toolbar>
            </AppBar>
            <Typography
            className="appnavText"
            variant="h3" component="div" sx={{ fontStyle: 'italic', textAlign: 'center',fontWeight: 'bold',letterSpacing: 6, pt:1, color:'#edf2f4',
            textTransform: "capitalize"
            }}>
            Search by <span style={{color:"#ffb703"}}>
            summoner name
            </span>
            </Typography>
        </Box>
    )
}
