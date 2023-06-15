import React from 'react';

import Logo from '../assets/logo.png';
import { Box, Grid, SxProps } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { RoutesEnum } from '../model/Routes.enum.ts';

const headerTitleStyles: SxProps = {
    fontSize: '32px',
    color: 'black',
}

export const Header: React.FC = () => {
    return (
        <>
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Grid container gap={4} alignItems="center">
                        <NavLink to={RoutesEnum.HOME}>
                            <img src={Logo} alt="logo" />
                        </NavLink>
                        <Box sx={headerTitleStyles}>Job Pathfinder</Box>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container gap={4}>
                        <NavLink
                            to={RoutesEnum.ABOUT}
                            className={({ isActive }) =>
                                isActive ? 'link_active' : 'link_inactive'
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={RoutesEnum.CONTACT}
                            className={({ isActive }) =>
                                isActive ? 'link_active' : 'link_inactive'
                            }
                        >
                            Contact us
                        </NavLink>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
