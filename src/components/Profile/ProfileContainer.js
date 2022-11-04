import ProfileMine from './ProfileMine'
import ProfileOthers from './ProfileOthers'
import actionCreators from '../../utils/action-creators'
import { connect } from 'react-redux'
import ProtectedRoute from '../../hok/ProtectedRoute'
import { compose } from 'redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doUpdateProfile, doSetStatus } from '../../redux/profileReducer'
import PopupLoading from '../PopupLoading/PopupLoading'
const { addPost } = actionCreators

function ProfileContainer(props) {
  const { doUpdateProfile, myId, isLoading } = props
  const { userId = myId } = useParams()

  useEffect(() => {
    doUpdateProfile(userId)
  }, [userId])

  return isLoading ? (
    <PopupLoading />
  ) : userId === myId ? (
    <ProfileMine {...props} />
  ) : (
    <ProfileOthers {...props} />
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
    doSetStatus,
  })
  // ProtectedRoute
)(ProfileContainer)
