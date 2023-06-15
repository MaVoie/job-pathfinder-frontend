import React, { Dispatch, SetStateAction, useCallback } from 'react'
import { Box, Button, Input } from '@mui/material'
import { useGetCoverLetter } from '../util/useGetCoverLetter.util.ts'

interface Props {
    selectedPosition: string | null
    setDecisionDone: Dispatch<SetStateAction<boolean>>
    processId: string | undefined
}

export const AppCoverLetter: React.FC<Props> = (props) => {
    const { selectedPosition, setDecisionDone, processId } = props
    const { getCoverLetters, isLoading, data } = useGetCoverLetter()

    const handleClick = useCallback(async () => {
        if (!processId || !selectedPosition) return

        setDecisionDone(true)
        await getCoverLetters({
            processId,
            body: { selected_position: selectedPosition },
        })
    }, [processId, selectedPosition, setDecisionDone, getCoverLetters])

    if (!selectedPosition || !processId) return null

    return (
        <>
            <Box sx={{ my: 4 }}>
                <Button
                    variant="contained"
                    onClick={handleClick}
                    disabled={isLoading || !!data}
                >
                    Write cover letter for me
                </Button>
            </Box>
            {!!data && (
                <Box sx={{ my: 4 }}>
                    {data.map((letter) => (
                        <Input
                            multiline
                            fullWidth
                            value={letter}
                            disabled
                            sx={{ mb: 3 }}
                        />
                    ))}
                </Box>
            )}
        </>
    )
}
