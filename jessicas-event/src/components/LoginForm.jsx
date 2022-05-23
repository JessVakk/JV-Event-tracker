import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from '../store/actions/authActions'

const LoginForm = ({setLogin}) => {
  
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSub = e => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  return (
    
    <div className='container card py-5 rounded-7 shadow p-3 mt-5 bg-body rounded'>
      <h2 className='text-center mb-4'>Login</h2>
      <form className='pe-5 ps-5 d-flex justify-content-center'onSubmit={handleSub}>
        <div className="row">
          <div className="col-12 mb-4 ">
            <input value={formData.email} onChange={onChange} type="email" id='email' name='email' className='form-control' placeholder='Email:' />
          </div>
          <div className="col-12 mb-4 ">
            <input value={formData.password} onChange={onChange} type="password" id='password' name='password' className='form-control' placeholder='Password:' />
          </div>
          <div>
            <button className='btn mb-4 btn btn-block btn-primary gradient-color text-white'>{loading ? 'Loading...' : 'Login'}</button>
          </div>
          <p className='text-center' >Not a member? <span className='login-link' onClick={() => setLogin(false)}>register now</span></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm