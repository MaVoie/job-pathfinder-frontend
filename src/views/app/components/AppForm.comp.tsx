import React, { useCallback } from 'react'
import { Box, Button, Input } from '@mui/material'
import { useForm } from 'react-hook-form'
import { AppModel, AppProcessResponse } from '../model/App.model.ts'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppValidation } from '../model/useAppValidation.util.ts'
import { Loader } from '../../../components/Loader.comp.tsx'

interface Props {
    submitApp: (data: AppModel) => Promise<AppProcessResponse>
    disabled: boolean
    isLoading: boolean
}

export const AppForm: React.FC<Props> = (props) => {
    const { submitApp, disabled, isLoading } = props

    const validation = useAppValidation()

    const {
        handleSubmit,
        clearErrors,
        register,
        formState: { errors },
    } = useForm<AppModel>({
        resolver: yupResolver(validation),
    })

    const handleChange = useCallback(() => {
        clearErrors()
    }, [clearErrors])

    const handleSubmitForm = useCallback(
        async (data: AppModel) => {
            await submitApp(data)
        },
        [submitApp]
    )

    const isDisabled = disabled || isLoading

    return (
        <>
            <form
                onSubmit={handleSubmit(handleSubmitForm)}
                onChange={handleChange}
            >
                <Input
                    {...register('name')}
                    placeholder="Name"
                    disableUnderline
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled={isDisabled}
                />
                <Input
                    {...register('surname')}
                    placeholder="Surname"
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled={isDisabled}
                />
                <Input
                    {...register('location')}
                    placeholder="Location"
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled={isDisabled}
                />
                <Input
                    {...register('email')}
                    placeholder="Email"
                    fullWidth
                    sx={{ mb: 2 }}
                    disabled={isDisabled}
                />
                <Input
                    {...register('customer_message')}
                    placeholder="About (brief description of experiences, skills, aspirations)"
                    fullWidth
                    multiline
                    rows={5}
                    sx={{ mb: 2 }}
                    disabled={isDisabled}
                />
                {errors && (
                    <>
                        {Object.keys(errors).map((error) => (
                            <Box sx={{ color: 'red', my: 1 }}>
                                {errors[error]?.message}
                            </Box>
                        ))}
                    </>
                )}
                {!disabled && (
                    <Button
                        variant="contained"
                        sx={{ px: 10 }}
                        type="submit"
                        disabled={isDisabled}
                    >
                        Analyze
                    </Button>
                )}
                <Loader visible={isLoading} />
            </form>
        </>
    )
}
