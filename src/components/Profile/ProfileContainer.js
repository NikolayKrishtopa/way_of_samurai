import Profile from './Profile'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'
import ProtectedRoute from '../../hok/ProtectedRoute'
import { compose } from 'redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doUpdateProfile } from '../../redux/profileReducer'
import PopupLoading from '../PopupLoading/PopupLoading'
const { addPost } = actionCreators

function ProfileContainer(props) {
  const { doUpdateProfile, myId, isLoading } = props
  const { userId = myId } = useParams()

  useEffect(() => {
    doUpdateProfile(userId)
    return () => {
      doUpdateProfile(myId)
    }
  }, [userId])

  return isLoading ? (
    <PopupLoading />
  ) : (
    <Profile {...props} isOwn={userId === myId} />
  )
}

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage,
    isLogged: state.auth.isLogged,
    myId: state.auth.user.id,
  }
}

export default compose(
  connect(mapStateToProps, {
    addPost,
    doUpdateProfile,
  }),
  ProtectedRoute
)(ProfileContainer)
