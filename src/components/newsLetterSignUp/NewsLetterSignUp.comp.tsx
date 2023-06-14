import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import {
    newsLetterCaptionStyles,
    newsLetterSignUpTitleStyles,
} from './NewsLetterSignUp.styles.ts'

export const NewsLetterSignUp: React.FC = () => {
    return (
        <>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{ my: 15 }}
            >
                <Grid item xs={4} sx={newsLetterSignUpTitleStyles}>
                    Sign up to newsletter
                </Grid>
                <Grid item xs={8}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <Grid container spacing={1}>
                                <TextField
                                    label="Email Address"
                                    variant="filled"
                                    sx={{ mr: 2, width: '65%' }}
                                />
                                <Button variant="contained">Subscribe</Button>
                            </Grid>
                        </Grid>
                        <Grid item sx={newsLetterCaptionStyles}>
                            Get job application tips delivered to your inbox!
                            Sign up for our newsletter.
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
