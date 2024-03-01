import { Car } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="flex h-full flex-col justify-between border-r border-foreground/5 bg-muted p-10 text-muted-foreground">
        <div className="flex items-center gap-3  text-lg text-foreground">
          <Car className="h-5 w-5" />
          <span className="front-semibold">Speed.Car</span>
        </div>
        <footer className="">Painel do parceiro &copy; Speed.Car</footer>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  )
}
