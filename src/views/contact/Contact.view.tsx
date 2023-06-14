import React, { useCallback } from 'react'
import { PageWrapper } from '../../components/Page.wrapper.tsx'
import { Box, Button, Input } from '@mui/material'
import {
    aboutBodyStyles,
    aboutCaptionStyles,
    aboutTitleStyles,
} from '../about/about.styles.ts'
import { useForm } from 'react-hook-form'
import { ContactModel } from './model/Contact.model.ts'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContactValidation } from './model/useContactValidation.util.ts'
import { useSubmitContact } from './util/useSubmitContact.util.ts'

export const ContactView: React.FC = () => {
    const { submitContact } = useSubmitContact()
    const validation = useContactValidation()
    const { handleSubmit, clearErrors, register } = useForm<ContactModel>({
        resolver: yupResolver(validation),
    })

    const handleChange = useCallback(() => {
        clearErrors()
    }, [clearErrors])

    const handleSubmitForm = useCallback(
        async (data: ContactModel) => {
            await submitContact(data)
        },
        [submitContact]
    )

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
                    <form
                        onSubmit={handleSubmit(handleSubmitForm)}
                        onChange={handleChange}
                    >
                        <Input
                            {...register('name')}
                            placeholder="Name"
                            disableUnderline
                            fullWidth
                            sx={{ mb: 5 }}
                        />
                        <Input
                            placeholder="E-mail"
                            fullWidth
                            sx={{ mb: 5 }}
                            {...register('email')}
                        />
                        <Input
                            {...register('message')}
                            placeholder="Message"
                            fullWidth
                            multiline
                            rows={5}
                            sx={{ mb: 5 }}
                        />
                        <Button
                            variant="contained"
                            sx={{ px: 10 }}
                            type="submit"
                        >
                            Send
                        </Button>
                    </form>
                </Box>
            </PageWrapper>
        </>
    )
}
