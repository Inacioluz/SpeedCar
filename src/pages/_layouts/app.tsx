import { Outlet } from 'react-router-dom'

import { House } from '../app/View/house'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <House />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
