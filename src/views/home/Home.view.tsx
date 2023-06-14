import React from 'react';
import { PageWrapper } from '../../components/Page.wrapper.tsx';
import { Box, Button, Grid } from '@mui/material';
import Robot from '../../assets/home/home_robot.png';
import Tablet from '../../assets/home/home_tablet.png';
import Signs from '../../assets/home/home_signs.png';
import Compass from '../../assets/home/home_compass.png';
import { homeText, homeTitle } from './home.styles.ts';

export const HomeView: React.FC = () => {
    return (
        <>
            <PageWrapper>
                <Grid container alignItems="center">
                    <Grid item xs={8}>
                        <Grid container gap={4}>
                        <Box sx={homeTitle}>
                            Boost Your Confidence in Job Applications with MaVoie AI Assistant
                        </Box>
                        <Box sx={homeText}>
                            Navigating your path to employment with tailored cover letters and interview support
                        </Box>
                        <Box sx={{textAlign: 'left'}}>
                        <Button variant="contained">
                            Get Started
                        </Button>
                        </Box>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Robot} alt="robot" style={{width: '100%'}}/>
                    </Grid>
                </Grid>
                <Grid container sx={{px: 20, mt: 5}} spacing={3} alignItems="center">
                    <Grid item xs={8} sx={homeText}>
                        <b>Skill Identification:</b> Discover your strengths and how to showcase them effectively during your job search.
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Compass} alt="compas" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Tablet} alt="tablet" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={8} sx={homeText}>
                        <b>Personalized Cover Letters:</b> Generate unique, compelling cover letters tailored to your experiences and the jobs you're applying for.
                    </Grid>
                    <Grid item xs={8} sx={homeText}>
                        <b>Interview Prep:</b> Get personalized interview questions and strategies to confidently tackle your interviews.
                    </Grid>
                    <Grid item xs={4}>
                        <img src={Signs} alt="signs" style={{width: '100%'}}/>
                    </Grid>
                </Grid>
            </PageWrapper>
        </>
    );
};
