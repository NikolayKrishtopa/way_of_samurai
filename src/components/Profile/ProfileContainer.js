import ProfileMine from './ProfileMine';
import ProfileOthers from './ProfileOthers';
import actionCreators from '../../utils/action-creators';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doUpdateProfile, doSetStatus } from '../../redux/profileReducer.ts';
import PopupLoading from '../PopupLoading/PopupLoading';
import ProtectedRoute from '../../hok/ProtectedRoute';
const { addPost } = actionCreators;

function ProfileContainer(props) {
  const { doUpdateProfile, myId, isLoading } = props;
  const { userId = myId } = useParams();

  useEffect(() => {
    if (!userId) return;
    doUpdateProfile(userId);
  }, [userId]);

  return isLoading ? (
    <PopupLoading />
  ) : userId === myId ? (
    <ProfileMine {...props} />
  ) : (
    <ProfileOthers {...props} />
  );
}

function mapStateToProps(state) {
  return {
    profilePage: state.profilePage,
    isLogged: state.auth.isLogged,
    myId: state.auth.user.id,
    lang: state.settings.lang,
  };
}

export default compose(
  connect(mapStateToProps, {
    addPost,
    doUpdateProfile,
    doSetStatus,
  }),
  ProtectedRoute
)(ProfileContainer);
