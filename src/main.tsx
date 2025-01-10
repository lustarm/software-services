import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import LandingPage from './routes/landing-page'
import ErrorPage from './routes/error-page'
import LoginPage from './routes/auth/login'
import RegisterPage from './routes/auth/register'
import ProfilePage from './routes/profile/profile-page'

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
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
)
