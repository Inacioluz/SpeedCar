import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './reoutes'

export function App() {
  return <RouterProvider router={router} />
}
