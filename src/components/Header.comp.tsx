import React from "react";

import Logo from "../assets/logo.png";
import { Grid, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { RoutesEnum } from '../model/Routes.enum.ts';

export const Header: React.FC = () => {
    return (
        <>
            <Grid container justifyContent="space-between" alignItems="center">
                <NavLink to={RoutesEnum.HOME}>
                    <img src={Logo} alt="logo" />
                </NavLink>
                <Grid item>
                    <Grid container gap={4}>
                        <NavLink to={RoutesEnum.ABOUT}><Link>About</Link></NavLink>
                        <NavLink to={RoutesEnum.CONTACT}><Link>Contact us</Link></NavLink>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};
