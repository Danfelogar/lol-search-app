import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { Hidden } from '@mui/material';

import { useChampionNavbar } from '../../../hooks/useChampionNavbar';


//search button

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
        },
    },
}));

//button group

const options = ['All','Easy', 'Regular', 'Hard'];

//button group responsive

export const ChampionNavbar = () => {

    //customhooks

    const { championName, handleInputChange, handleTag, handleDifficulty } = useChampionNavbar();

    //material ui

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        // console.info(`You clicked ${options[selectedIndex]}`);
        handleDifficulty(options[selectedIndex])
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };
    return (
    <Box  sx={{ flexGrow: 1, m:2 }}>
        <AppBar sx={{borderRadius: 9}} position="sticky">
            <Toolbar>
                <Search sx={{mr:1}}>
                    <SearchIconWrapper sx={{
                            color: "#edf2f4"
                        }}>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        style={{
                            color: "#edf2f4"
                        }}
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        name="championName"
                        onChange={handleInputChange}
                        value={championName}
                        autoComplete="off"
                    />
                </Search>
                <Hidden smDown >
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        '& > *': {
                        m: 1,
                        },
                        justifyContent: 'center',
                        flexGrow: 1,
                    }}
                    >
                        <ButtonGroup variant="text" aria-label="text button group">
                            <Button variant="text" color="success"  style={{
                                borderRight: '1.2px solid #edf2f4'
                            }} sx={{pl: 0.4, pt: 0, pr:0.4 ,pb: 0,
                            "&:focus": {
                                color: "secondary.main"
                            }
                            }}
                            onClick={()=>handleTag("All")}
                            >All</Button>
                            <Button variant="text" color="success" style={{
                                borderRight: '1.2px solid #edf2f4'
                            }} sx={{pl: 0.4, pt: 0, pr:0.4 ,pb: 0,
                            "&:focus": {
                                color: "secondary.main"
                            }
                            }}
                            onClick={()=>handleTag("Assassin")} >Assassin</Button>
                            <Button variant="text" color="success" style={{
                                borderRight: '1.2px solid #edf2f4'
                            }} sx={{pl: 0.4, pt: 0, pr:0.4 ,pb: 0,
                            "&:focus": {
                                color: "secondary.main"
                            }
                            }}
                            onClick={()=>handleTag("Fighter")}
                            >Fighter</Button>
                            <Button variant="text" color="success" style={{
                                borderRight: '1.2px solid #edf2f4'
                            }} sx={{pl: 0.4, pt: 0, pr:0.4 ,pb: 0,
                            "&:focus": {
                                color: "secondary.main"
                            }
                            }}
                            onClick={()=>handleTag("Mage")}
                            >Mage</Button>
                            <Button variant="text" color="success" style={{
                                borderRight: '1.2px solid #edf2f4'
                            }} sx={{pl: 0.4, pt: 0, pr:0.4 ,pb: 0,
                            "&:focus": {
                                color: "secondary.main"
                            }
                            }}
                            onClick={()=>handleTag("Marksman")}
                            >Marksman</Button>
                            <Button variant="text" color="success" style={{
                                borderRight: '1.2px solid #edf2f4'
                            }} sx={{pl: 0.4, pt: 0, pr:0.4 ,pb: 0,
                            "&:focus": {
                                color: "secondary.main"
                            }
                            }}
                            onClick={()=>handleTag("Support")}
                            >Support</Button>
                            <Button variant="text" color="success" sx={{pl: 0.4, pt: 0, pr:0.4 ,pb:0 ,
                            "&:focus": {
                                color: "secondary.main"
                            }
                            }}
                            onClick={()=>handleTag("Tank")}
                            >Tank</Button>
                        </ButtonGroup>
                    </Box>
                </Hidden>
                <Hidden only="sm">
                    <ButtonGroup ref={anchorRef} aria-label="split button">
                        <Button variant="contained" color="secondary" onClick={handleClick}>{options[selectedIndex]}</Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            aria-controls={open ? 'split-button-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-label="select merge strategy"
                            aria-haspopup="menu"
                            onClick={handleToggle}
                        >
                            <ArrowDropDownIcon />
                        </Button>
                    </ButtonGroup>
                    <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                    >
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                            placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu">
                                    {options.map((option, index) => (
                                    <MenuItem
                                        key={option}
                                        // disabled={index === 2}
                                        selected={index === selectedIndex}
                                        onClick={(event) => handleMenuItemClick(event, index)}
                                    >
                                        {option}
                                    </MenuItem>
                                    ))}
                                </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                    </Popper>
                </Hidden>
            </Toolbar>
        </AppBar>
    </Box>
    )
}
