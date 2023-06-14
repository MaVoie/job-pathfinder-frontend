import React from 'react'
import { PageWrapper } from '../../components/Page.wrapper.tsx'
import { Box, Button, Input } from '@mui/material'
import {
    aboutBodyStyles,
    aboutCaptionStyles,
    aboutTitleStyles,
} from '../about/about.styles.ts'

export const ContactView: React.FC = () => {
    return (
        <>
            <PageWrapper>
                <Box sx={aboutTitleStyles}>Get in touch</Box>
                <Box sx={aboutBodyStyles}>
                    <Box sx={aboutCaptionStyles}>
                        We're here to help and answer any question you might
                        have. Whether you need assistance with our AI assistant
                        or have feedback to share, don't hesitate to reach out.
                        We look forward to hearing from you.
                    </Box>
                    <Box sx={aboutCaptionStyles}>
                        Fill out the form below to send us a message, and our
                        team will get back to you as soon as possible.
                    </Box>
                    <Input
                        placeholder="Name"
                        disableUnderline
                        fullWidth
                        sx={{ mb: 5 }}
                    />
                    <Input placeholder="E-mail" fullWidth sx={{ mb: 5 }} />
                    <Input
                        placeholder="Message"
                        fullWidth
                        multiline
                        rows={5}
                        sx={{ mb: 5 }}
                    />
                    <Button variant="contained" sx={{ px: 10 }}>
                        Send
                    </Button>
                </Box>
            </PageWrapper>
        </>
    )
}
