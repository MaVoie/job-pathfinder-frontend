import React, { Dispatch, SetStateAction, useCallback, useEffect } from 'react'
import { Box, Button, Input } from '@mui/material'
import { useGetCoverLetter } from '../util/useGetCoverLetter.util.ts'
import { Loader } from '../../../components/Loader.comp.tsx'

interface Props {
    selectedPosition: string | null
    setDecisionDone: Dispatch<SetStateAction<boolean>>
    processId: string | undefined
    setCoverLettersAvailable: Dispatch<SetStateAction<boolean>>
}

export const AppCoverLetter: React.FC<Props> = (props) => {
    const {
        selectedPosition,
        setDecisionDone,
        processId,
        setCoverLettersAvailable,
    } = props
    const { getCoverLetters, isLoading, data } = useGetCoverLetter()

    const handleClick = useCallback(async () => {
        if (!processId || !selectedPosition) return

        setDecisionDone(true)
        await getCoverLetters({
            processId,
            body: { selected_position: selectedPosition },
        })
    }, [processId, selectedPosition])

    useEffect(() => {
        if (data && data.length > 0) {
            setCoverLettersAvailable(true)
        }
    }, [data])

    if (!selectedPosition || !processId) return null

    return (
        <>
            <Box sx={{ my: 4 }}>
                {!data && !isLoading && (
                    <Button
                        variant="contained"
                        onClick={handleClick}
                        disabled={isLoading || !!data}
                    >
                        Write cover letter for me
                    </Button>
                )}
            </Box>
            <Loader visible={isLoading} />
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
