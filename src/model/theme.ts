import { createTheme } from '@mui/material';

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#68e1fb',
        }
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'black',
                    textDecoration: 'none',
                    ':hover': {
                        color: '#807e7e'
                    }
                },
            }
        }
    }
});
