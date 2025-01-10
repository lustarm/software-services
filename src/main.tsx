import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

// Home page and error page
import LandingPage from './routes/landing-page'
import ErrorPage from './routes/error-page'

// Auth
import LoginPage from './routes/auth/login'
import RegisterPage from './routes/auth/register'

// Profile
import ProfilePage from './routes/profile/profile-page'
import ProfileSchedulePage from './routes/profile/profile-schedule'

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
		errorElement: <ErrorPage />
	},
    // User auth
    {
        path: "/login/",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/register/",
        element: <RegisterPage />,
        errorElement: <ErrorPage />
    },
    // Profile
    {
        path: "/profile/",
        element: <ProfilePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/profile/schedule",
        element: <ProfileSchedulePage />,
        errorElement: <ErrorPage />,
    },
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
