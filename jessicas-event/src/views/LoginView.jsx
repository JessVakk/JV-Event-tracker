import { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const LoginView = () => {

  const navigate = useNavigate()

  const user = useSelector(state => state.auth.token)

  const [login, setLogin] = useState(true)
  
  useEffect(() => {
    if(user) {
      navigate('/')
    }
  }, [user, navigate])
  
  return (
    <div className='login-view'>
      { login
      ? <LoginForm setLogin={setLogin} />
      : <RegisterForm setLogin={setLogin} />
      }
    </div>
  )
}

export default LoginView
