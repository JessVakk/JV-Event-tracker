import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(false)
  return (
    <nav className="navbar bg-info py-1">
        <div className="container d-flex justify-content-space-between align-items-center">
            <Link to="/" className='navbar-brand text-white text-decoration-none' >Event Tracker</Link>
            <ul className="nav-links list-unstyled d-flex align-item-center">
                { isAuth
                ?(<>
                <li><NavLink to="/" className="nav-Link text-white">Logout</NavLink></li>
                </>)
                :<li><NavLink to="/Login" className="nav-Link text-white">Login</NavLink></li>
                }
            </ul>
           </div>
      </nav>
  )
}

export default Navbar