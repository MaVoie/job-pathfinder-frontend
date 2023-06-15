import React, { Dispatch, SetStateAction, useCallback } from 'react'
import { Box, Button, Grid } from '@mui/material'

interface Props {
    positions: string[] | undefined
    selectPosition: Dispatch<SetStateAction<string | null>>
    selectedPosition: string | null
    decisionDone: boolean
}

export const AppPositions: React.FC<Props> = (props) => {
    const { positions, selectPosition, selectedPosition, decisionDone } = props

    const handleClick = useCallback(
        (position: string) => () => {
            selectPosition(position)
        },
        []
    )

    if (!positions) return null

    return (
        <>
            <Box sx={{ my: 4 }}>
                <Box>
                    Based on your profile, you are a great match for these
                    positions:
                </Box>
                <Grid container justifyContent="space-around" sx={{ my: 4 }}>
                    {positions
                        .filter(
                            (position) =>
                                !decisionDone || position === selectedPosition
                        )
                        .map((position) => (
                            <Button
                                variant="contained"
                                color={
                                    position === selectedPosition
                                        ? 'primary'
                                        : 'secondary'
                                }
                                key={position}
                                onClick={handleClick(position)}
                            >
                                {position}
                            </Button>
                        ))}
                </Grid>
                <Box>Select the position that interests you the most.</Box>
            </Box>
        </>
    )
}
