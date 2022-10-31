import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Login from './Login'
import { handleSubmitLoginReq } from '../../redux/authReducer'

function LoginContainer(props) {
  const { handleSubmitLoginReq } = props
  const navigate = useNavigate()

  const successRedirect = () => {
    navigate('/profile')
  }
  const failureRedirect = () => {
    navigate('/login')
  }

  return (
    <Login
      onSubmit={(values) =>
        handleSubmitLoginReq(values, successRedirect, failureRedirect)
      }
    />
  )
}

export default connect(
  () => {
    return {}
  },
  { handleSubmitLoginReq }
)(LoginContainer)
