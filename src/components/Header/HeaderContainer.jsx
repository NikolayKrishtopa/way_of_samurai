import { useEffect } from 'react'
import { connect } from 'react-redux'
import actionCreators from '../../utils/action-creators'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import PopupLoading from '../PopupLoading/PopupLoading'

function HeaderContainer(props) {
  const { auth, setIsLoading, setUser } = props

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    fetch(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.resultCode === 1) {
          navigate('/login')
          return
        }
        setUser(res.data)
        navigate('/profile')
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [auth.isLogged])

  function handleLogOut() {
    setIsLoading(true)
    fetch(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
      credentials: 'include',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.resultCode === 0) {
          setUser({})
          navigate('/login')
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  if (auth.isLoading) {
    return <PopupLoading />
  } else {
    return <Header auth={auth} onLogOut={handleLogOut} />
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, {
  setUser: actionCreators.setUser,
  setIsLoading: actionCreators.setIsLoading,
})(HeaderContainer)
