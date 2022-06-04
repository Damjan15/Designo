import logo from "../assets/shared/desktop/logo-dark.png"
import hamburger from "../assets/shared/mobile/icon-hamburger.svg"
import close from "../assets/shared/mobile/icon-close.svg"
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [ openMenu, setOpenMenu ] = useState(false)

  return (
    <>
    <nav className="flex items-center justify-between px-6 py-8">
      <div>
        <Link to="/">
          <img src={logo} className="h-7" alt="Designo Logo" />
        </Link>
      </div>

      <ul className="hidden items-center gap-8 md:flex">
        <li className="nav-item">
          <Link to="/about">Our Company</Link>
        </li>
        <li className="nav-item">
          <Link to="/locations">Locations</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact</Link>
        </li>

      </ul>

      <div className="block md:hidden">
        <button onClick={() => setOpenMenu(!openMenu)}>
          { openMenu ? <img src={close} alt="Close Logo" />  : <img src={hamburger} alt="Hamburger Logo" /> }
        </button>
      </div>
    </nav>
    { openMenu && (
        <div className="bg-black rounded-b-2xl">
          <ul className="text-white text-2xl uppercase space-y-4 p-8">
            <li>
              <Link to="/about">Our Company</Link>
            </li>
            <li>
              <Link to="/locations">Locations</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar