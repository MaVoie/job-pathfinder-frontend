import React, { useState } from 'react'
import { PageWrapper } from '../../components/Page.wrapper.tsx'
import { Box } from '@mui/material'
import {
    aboutBodyStyles,
    aboutCaptionStyles,
    aboutTitleStyles,
} from '../about/about.styles.ts'
import { useSubmitApp } from './util/useSubmitApp.util.ts'
import { AppForm } from './components/AppForm.comp.tsx'
import { AppPositions } from './components/AppPositions.comp.tsx'
import { AppCoverLetter } from './components/AppCoverLetter.comp.tsx'

export const AppView: React.FC = () => {
    const { submitApp, isLoading, data } = useSubmitApp()
    const [selectedPosition, selectPosition] = useState<string | null>(null)
    const [decisionDone, setDecisionDone] = useState(false)

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
                    <AppForm
                        submitApp={submitApp}
                        disabled={!!data}
                        isLoading={isLoading}
                    />
                    <AppPositions
                        positions={data?.proposed_positions}
                        selectPosition={selectPosition}
                        selectedPosition={selectedPosition}
                        decisionDone={decisionDone}
                    />
                    <AppCoverLetter
                        selectedPosition={selectedPosition}
                        setDecisionDone={setDecisionDone}
                        processId={data?.process_id}
                    />
                </Box>
            </PageWrapper>
        </>
    )
}
