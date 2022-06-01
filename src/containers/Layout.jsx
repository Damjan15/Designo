import { Navbar } from "../components"

const Layout = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout