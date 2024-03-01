import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div>
        <h1>Cabecalho</h1>
        <Outlet />
      </div>
    </div>
  )
}
