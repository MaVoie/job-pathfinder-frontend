import { SxProps } from '@mui/material'

export const interviewQuestionsStyles: SxProps = {
    textAlign: 'justify',
    textJustify: 'inter-word',
}

export const interviewQuestionStyles = (selected: boolean): SxProps => ({
    cursor: 'pointer',
    my: 2,
    p: 2,
    textAlign: 'left',
    color: '#9c9c9c',
    background: selected ? '#d5d5d5' : '#f3f3f3',
    borderRadius: '8px',
    fontSize: '24px',
    '&:hover': {
        background: '#d5d5d5',
    },
})
