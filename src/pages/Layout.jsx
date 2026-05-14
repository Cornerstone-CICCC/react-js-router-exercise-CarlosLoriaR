import { Link, Outlet } from 'react-router-dom'
import './Layout.css'

function Layout() {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-brand">Route Practice</Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
        </div>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
