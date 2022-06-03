import { Link } from "react-router-dom"
import logo from "../assets/shared/desktop/logo-light.png"
import facebook from "../assets/shared/desktop/icon-facebook.svg"
import instagram from "../assets/shared/desktop/icon-instagram.svg"
import pinterest from "../assets/shared/desktop/icon-pinterest.svg"
import youtube from "../assets/shared/desktop/icon-youtube.svg"
import twitter from "../assets/shared/desktop/icon-twitter.svg"


const Footer = () => {
  return (
    <div className="bg-black p-4 flex flex-col justify-center space-y-6 md:p-8">
        {/* Header */}
        <div className="flex flex-col divide-y divide-dahsed divide-white/10 md:flex-row md:justify-between md:divide-none">
            <div className="flex flex-col items-center justify-center py-4">
                <img src={logo} className="w-52	h-7" alt="Design Logo" />
            </div>

            <ul className="text-white text-center space-y-3 pt-4 md:flex md:space-y-0 md:space-x-10">
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
        </div>

        {/* Body */}
        <div className="flex flex-col items-center space-y-7 md:flex-row md:space-y-0 md:justify-between">
            <ul className="text-white/50 text-center md:text-left">
                <li className="font-bold">Designo Central Office</li>
                <li>3886 Wellington Street</li>
                <li>Toronto, Ontario M9C 3J5</li>
            </ul>

            <ul className="text-white/50 text-center md:text-left">
                <li className="font-bold">Contact Us ( Central Office )</li>
                <li>P: +1 253-863-8967</li>
                <li>M: contact@designo.co</li>
            </ul>

            <ul className="flex flex-row space-x-5">
                <li>
                    <img src={facebook} alt="Facebook Icon" />
                </li>

                <li>
                    <img src={youtube} alt="Youtube Icon" />
                </li>

                <li>
                    <img src={twitter} alt="Twitter Icon" />
                </li>

                <li>
                    <img src={pinterest} alt="Pinterest Icon" />
                </li>

                <li>
                    <img src={instagram} alt="Instagram Icon" />
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer