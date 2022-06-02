import { Navbar } from "../components"

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto max-w-7xl p-2">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Layout