import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import actionCreators from '../../utils/action-creators'
import Login from './Login'

function LoginContainer(props) {
  const { setIsLoading, setUser, auth } = props
  const navigate = useNavigate()
  function onSubmit(values) {
    setIsLoading(true)
    fetch(`https://social-network.samuraijs.com/api/1.0/auth/login`, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        navigate('/login')
        setUser(res.data)
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
