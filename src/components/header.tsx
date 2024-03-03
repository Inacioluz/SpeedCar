import { Car } from 'lucide-react'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center  justify-center gap-6 px-6">
        <Car className="h-8 w-8" />
        <h1 className="font-mono text-base font-bold ">Speed Car</h1>
      </div>
    </div>
  )
}
