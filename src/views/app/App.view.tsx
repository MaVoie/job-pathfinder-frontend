import React from 'react'
import { PageWrapper } from '../../components/Page.wrapper.tsx'
import { Box, Button, Input } from '@mui/material'
import {
    aboutBodyStyles,
    aboutCaptionStyles,
    aboutTitleStyles,
} from '../about/about.styles.ts'

export const AppView: React.FC = () => {
    return (
        <>
            <PageWrapper>
                <Box sx={aboutTitleStyles}>
                    MaVoie Job Match & Cover Letter Generator
                </Box>
                <Box sx={aboutBodyStyles}>
                    <Box sx={aboutCaptionStyles}>
                        Discover the jobs you're best suited for and craft
                        compelling cover letters.
                    </Box>
                    <Input
                        placeholder="Name"
                        disableUnderline
                        fullWidth
                        sx={{ mb: 2 }}
                    />
                    <Input placeholder="Location" fullWidth sx={{ mb: 2 }} />
                    <Input placeholder="Email" fullWidth sx={{ mb: 2 }} />
                    <Input
                        placeholder="About (brief description of experiences, skills, aspirations)"
                        fullWidth
                        multiline
                        rows={5}
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" sx={{ px: 10 }}>
                        Analyze
                    </Button>
                </Box>
            </PageWrapper>
        </>
    )
}
