import { LogIn } from 'lucide-react'

import Logo from '../assets/car-logo.png'

export function NavBar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-[99999] mx-auto flex w-full max-w-7xl items-center justify-between bg-transparent px-[2rem] py-[2.7rem]">
      <div>
        <img className="w-30 h-20" src={Logo} alt="" />
      </div>
      <div className="bold Rubik top-0 flex gap-10 font-serif text-lg">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Lançamentos</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Modelos</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Seguro</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">Sobre</a>
          </li>
        </ul>
      </div>

      <div className="flex gap-2">
        <span>Login</span>
        <LogIn className="h-6 w-6" />
      </div>
    </nav>
  )
}
