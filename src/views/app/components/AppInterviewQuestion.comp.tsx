import React, { useCallback, useEffect, useState } from 'react'
import { Box, Button, Input } from '@mui/material'
import { useGetInterviewQuestions } from '../util/useGetInterviewQuestions.util.ts'
import { Loader } from '../../../components/Loader.comp.tsx'
import {
    interviewQuestionsStyles,
    interviewQuestionStyles,
} from '../app.styles.ts'
import { useForm } from 'react-hook-form'
import { useSubmitInterviewAnswer } from '../util/useSubmitInterviewAnswer.util.ts'

interface Props {
    processId: string | undefined
    coverLettersAvailable: boolean
}

export const AppInterviewQuestions: React.FC<Props> = (props) => {
    const { processId, coverLettersAvailable } = props
    const { getInterviewQuestions, data, isLoading } =
        useGetInterviewQuestions()

    const {
        submit,
        data: evaluation,
        isLoading: isSubmitting,
    } = useSubmitInterviewAnswer()

    const { handleSubmit, register } = useForm<{ answer: string }>()

    const [selectedQuestion, setSelectedQuestion] = useState<string | null>(
        null
    )

    const handleSubmitForm = useCallback(
        async (data: { answer: string }) => {
            if (!processId || !selectedQuestion) return

            await submit({
                processId,
                body: { answer: data.answer, question: selectedQuestion },
            })
        },
        [processId, selectedQuestion]
    )

    useEffect(() => {
        if (coverLettersAvailable && processId) {
            void getInterviewQuestions({ processId })
        }
    }, [coverLettersAvailable, processId])

    const handleClick = useCallback(
        (question: string) => () => {
            setSelectedQuestion(question)
        },
        []
    )

    if (!coverLettersAvailable) return null

    return (
        <>
            <Box sx={{ my: 4 }}>
                <Box sx={interviewQuestionsStyles}>
                    Here are examples of questions you might be asked during the
                    interview. Select one and provide your answer.
                </Box>
                {isLoading && <Loader visible={true} />}
                {data && (
                    <>
                        <Box sx={{ my: 4 }}>
                            {data.questions.map((question) => (
                                <Box
                                    sx={interviewQuestionStyles(
                                        selectedQuestion === question
                                    )}
                                    onClick={handleClick(question)}
                                >
                                    {question}
                                </Box>
                            ))}
                        </Box>
                    </>
                )}
                {selectedQuestion && !evaluation && (
                    <Box sx={{ mt: 4 }}>
                        <Box sx={{ my: 2 }}>Provide your answer here</Box>
                        <form onSubmit={handleSubmit(handleSubmitForm)}>
                            <Input
                                {...register('answer')}
                                fullWidth
                                multiline
                            />
                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ my: 2 }}
                            >
                                Submit answer
                            </Button>
                        </form>
                    </Box>
                )}
                <Loader visible={isSubmitting} />
                {evaluation && (
                    <Input
                        multiline
                        fullWidth
                        value={evaluation}
                        disabled
                        sx={{ mb: 3 }}
                    />
                )}
            </Box>
        </>
    )
}
