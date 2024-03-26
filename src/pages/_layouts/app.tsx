import { Outlet } from 'react-router-dom'

import { NavBar } from '../../components/navbar'

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <NavBar />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
