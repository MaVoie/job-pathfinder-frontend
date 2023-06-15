import { createTheme } from '@mui/material'

export const MAIN_COLOR = '#68e1fb'

export const appTheme = createTheme({
    palette: {
        primary: {
            main: MAIN_COLOR,
        },
        secondary: {
            main: '#f3f3f3',
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
