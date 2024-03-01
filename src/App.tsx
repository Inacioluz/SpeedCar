import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './reoutes'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | SpeedCar" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
