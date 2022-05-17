import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const [isAuth, setIsAuth] = useState(true)

  return (
    <nav className="navbar bg-info py-1">
        <div className="container">
            <Link to="/" className=' text-white text-decoration-none' >Event Tracker</Link>
            
            <ul className=" nav-links list-unstyled d-flex align-item-center  ">
                <li><NavLink to='/' className="nav-Link text-white pe-2"  >Events</NavLink></li>
                { isAuth
                ?<li><NavLink to="/add" className="nav-Link text-white ">Add Event</NavLink></li>
                :<li><NavLink to="/Login" className="nav-Link text-white">Login</NavLink></li>
                }
            </ul>
           </div>
      </nav>
  )
}

export default Navbar