import { createTheme } from '@mui/material/styles';

export const theme = createTheme();

theme.palette.primary ={
    main: '#023047'
};
theme.palette.secondary ={
    main: '#fb8500'
};
theme.palette.success ={
    main: '#edf2f4'
};
theme.palette.default ={
    main: '#219ebc'
};
theme.palette.error ={
    main: '#8ecae6'
};

theme.typography.h1 = {
    fontSize: '2.7rem',
    '@media (min-width:600px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '5.4rem',
    },
};

theme.typography.h3 = {
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};

theme.typography.subtitle1 = {
    fontSize: '0.575rem',
    '@media (min-width:600px)': {
        fontSize: '0.875rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.15rem',
    },
};