import React from 'react'
import { PageWrapper } from '../../components/Page.wrapper.tsx'
import { Box } from '@mui/material'
import {
    aboutTitleStyles,
    aboutBodyStyles,
    aboutCaptionStyles,
} from './about.styles.ts'
import { NewsLetterSignUp } from '../../components/newsLetterSignUp/NewsLetterSignUp.comp.tsx'

export const AboutView: React.FC = () => {
    return (
        <>
            <PageWrapper>
                <Box sx={aboutTitleStyles}>About</Box>
                <Box sx={aboutBodyStyles}>
                    <Box sx={aboutCaptionStyles}>
                        At MaVoie, we understand the challenges of job
                        searching, particularly for those who may lack
                        confidence and resources. Our mission is to transform
                        this process into a more accessible, manageable, and
                        successful journey.
                    </Box>
                    <Box sx={aboutCaptionStyles}>
                        We are dedicated to empowering young job seekers with
                        our innovative AI assistant, specifically designed to
                        navigate the complexities of job applications and
                        interviews. Our platform helps you identify your unique
                        skills and showcase them effectively, thus boosting your
                        self-confidence throughout your job search.
                    </Box>
                    <Box sx={aboutCaptionStyles}>
                        MaVoie's AI assistant creates unique and compelling
                        cover letters tailored to your experiences and the jobs
                        you're applying for, setting you apart from the
                        competition. Additionally, we equip you with
                        personalized interview questions and strategies to
                        ensure you can confidently tackle any job interview.
                    </Box>
                    <Box sx={aboutCaptionStyles}>
                        With MaVoie, you're not alone in your job search
                        journey. We are here to guide and support you every step
                        of the way. Join us, and let's navigate your path to
                        employment together.
                    </Box>
                </Box>
                <NewsLetterSignUp />
            </PageWrapper>
        </>
    )
}
