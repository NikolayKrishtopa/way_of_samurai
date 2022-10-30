import { useEffect } from 'react'
import { connect } from 'react-redux'
import actionCreators from '../../utils/action-creators'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import PopupLoading from '../PopupLoading/PopupLoading'
import { authApi } from '../../api/api'

function HeaderContainer(props) {
  const { auth, setIsLoading, setUser } = props

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    authApi
      .checkAuth()
      .then((res) => {
        if (res.data.resultCode === 1) {
          navigate('/login')
          return
        }
        setUser(res.data.data)
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
    authApi
      .logout()
      .then((res) => {
        if (res.data.resultCode === 0) {
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
