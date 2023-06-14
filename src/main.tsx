import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RoutesEnum } from './model/Routes.enum.ts';
import { HomeView } from './views/home/Home.view.tsx';
import { AboutView } from './views/about/About.view.tsx';
import { ContactView } from './views/contact/Contact.view.tsx';
import { AppView } from './views/app/App.view.tsx';
import { ThemeProvider } from '@mui/material';
import { appTheme } from './model/theme.ts';

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
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ThemeProvider theme={appTheme}>
      <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>,
)
