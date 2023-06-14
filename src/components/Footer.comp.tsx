import React from 'react';
import Logo from '../assets/logo.png';
import { Grid } from '@mui/material';
import { RoutesEnum } from '../model/Routes.enum.ts';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <>
            <Grid container justifyContent="space-between" alignItems="center">
                <NavLink to={RoutesEnum.HOME}>
                    <img src={Logo} alt="logo" />
                </NavLink>
                <Grid item>
                    @ Copyright - MaVoie
                </Grid>
            </Grid>
        </>
    );
};
