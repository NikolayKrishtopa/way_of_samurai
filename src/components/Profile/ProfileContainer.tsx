import ProfileMine from './ProfileMine.tsx';
import ProfileOthers from './ProfileOthers.tsx';
import actionCreators from '../../utils/action-creators.ts';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doUpdateProfile, doSetStatus } from '../../redux/profileReducer.ts';
import PopupLoading from '../PopupLoading/PopupLoading.tsx';
import ProtectedRoute from '../../hok/ProtectedRoute.tsx';
import { StoreType } from '../../redux/store-redux.ts';
import { IProfilePropsType } from './ProfileMine.tsx';
const { addPost } = actionCreators; 

export interface IProfileContainerPropsType extends IProfilePropsType {
  doUpdateProfile: (id: number | string) => void;
  myId: number; 
  isLoading:boolean;
}

function ProfileContainer(props: IProfileContainerPropsType) {
  const { doUpdateProfile, myId, isLoading, lang } = props;
  const { userId = myId } = useParams();

  useEffect(() => {
    if (!userId) return;
    doUpdateProfile(userId);
  }, [userId]);

  return isLoading ? (
    <PopupLoading lang={lang}/>
  ) : userId === myId ? (
    <ProfileMine {...props} />
  ) : (
    <ProfileOthers {...props} />
  );
}

function mapStateToProps(state: StoreType) {
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
