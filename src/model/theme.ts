import { createTheme } from '@mui/material'

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#68e1fb',
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'black',
                    textDecoration: 'none',
                    ':hover': {
                        color: '#807e7e',
                    },
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    color: '#9c9c9c',
                    background: '#f3f3f3',
                    borderRadius: '8px',
                    paddingLeft: '10px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    ':after': {
                        borderBottom: 'none !important',
                    },
                    '::before': {
                        borderBottom: 'none !important',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
    },
})
