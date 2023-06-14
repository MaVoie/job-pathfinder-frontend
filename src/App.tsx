import React from 'react'
import { ThemeProvider } from '@mui/material'
import { appTheme } from './model/theme.ts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { RoutesEnum } from './model/Routes.enum.ts'
import { HomeView } from './views/home/Home.view.tsx'
import { AboutView } from './views/about/About.view.tsx'
import { ContactView } from './views/contact/Contact.view.tsx'
import { AppView } from './views/app/App.view.tsx'
import { useGetQueryClient } from './util/useGetQueryClient.util.ts'

export const App: React.FC = () => {
    const queryClient = useGetQueryClient()

    const router = createBrowserRouter([
        {
            path: RoutesEnum.HOME,
            element: <HomeView />,
        },
        {
            path: RoutesEnum.ABOUT,
            element: <AboutView />,
        },
        {
            path: RoutesEnum.CONTACT,
            element: <ContactView />,
        },
        {
            path: RoutesEnum.APP,
            element: <AppView />,
        },
    ])
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={appTheme}>
                    <RouterProvider router={router} />
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}
