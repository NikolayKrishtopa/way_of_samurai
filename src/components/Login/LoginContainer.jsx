import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import actionCreators from '../../utils/action-creators'
import Login from './Login'
import { authApi } from '../../api/api'

function LoginContainer(props) {
  const { setIsLoading, setUser } = props
  const navigate = useNavigate()

  function onSubmit(values) {
    setIsLoading(true)
    authApi
      .login(values)
      .then((res) => {
        if (res.data.resultCode === 0) {
          setUser(res.data.data)
          navigate('/profile')
        } else {
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

  return <Login onSubmit={onSubmit} />
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}

export default connect(mapStateToProps, {
  setIsLoading: actionCreators.setIsLoading,
  setUser: actionCreators.setUser,
})(LoginContainer)
