import { createBrowserRouter } from 'react-router-dom'
import { Store } from './pages/app/store'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  { path: '/', element: <Store /> },
  { path: '/sign-in', element: <SignIn /> },
])
