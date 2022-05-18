import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logoutUser } from '../store/actions/authActions'

const Navbar = () => {

  const dispatch = useDispatch()
    
  const isAuth = useSelector(state => state.auth.token)

  return (
    <nav className="navbar  gradient-color py-1">
        <div className="container">
            <Link to="/" className=' text-white text-decoration-none' >Event Tracker</Link>
            
            <ul className=" nav-links list-unstyled d-flex align-item-center  ">
                <li><NavLink to='/' className="nav-Link text-white pe-2"  >Events</NavLink></li>
                { isAuth      
                ? (<>
                  <li><NavLink to="/add" className="nav-link" >Add New Event</NavLink></li>
                  <li><Link onClick={() => dispatch(logoutUser())} to="/login" className="nav-link">Logout</Link></li>
                  </>)
                : <li><NavLink to="/login" className="nav-link" >Login</NavLink></li>
                }
               
            </ul>
           </div>
      </nav>
  )
}


export default Navbar