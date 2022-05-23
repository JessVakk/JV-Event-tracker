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
            
            <ul className=" d-flex justify-content-between align-item-center list-unstyled mt-3 ">
              
                <li><NavLink to='/' className=" text-white me-3 "  >Events</NavLink></li>
                { isAuth      
                ? (<>
                  <li><NavLink to="/add" className=" text-light me-3  " > Add-New-Event </NavLink></li>
                  <li><Link onClick={() => dispatch(logoutUser())} to="/login" className=" text-light me-3  " > Logout</Link></li>
                  </>)
                : <li><NavLink to="/login" className=" text-light ms-3 " >Login</NavLink></li>
                }
              
            </ul>
           </div>
      </nav>
  )
}


export default Navbar