import logo from "../assets/shared/desktop/logo-dark.png"
import hamburger from "../assets/shared/mobile/icon-hamburger.svg"
import close from "../assets/shared/mobile/icon-close.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <nav className="flex items-center justify-between px-6 py-8">
      <div>
        <img src={logo} className="h-7" alt="Designo Logo" />
      </div>

      <ul className="hidden items-center gap-8 md:flex">
        <li className="nav-item">
          <Link to="/">Our Company</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Locations</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Contact</Link>
        </li>

      </ul>

      <div className="block md:hidden">
        <button onClick={() => setOpenMenu(!openMenu)}>
          { openMenu ? <img src={close} alt="Close Logo" />  : <img src={hamburger} alt="Hamburger Logo" /> }
        </button>
      </div>
    </nav>
  )
}

export default Navbar