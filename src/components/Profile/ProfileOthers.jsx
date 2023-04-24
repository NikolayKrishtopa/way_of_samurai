import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';

export default function ProfileOthers(props) {
  const { profilePage } = props;

  return (
    <div className={s.profile}>
      <div className={s.userInfo}>
        <img
          src={profilePage.profile.photos.large}
          alt='фото пользователя'
          className={s.avatar}
        />
        <div className={s.userDescription}>
          <div className={s.userStatus}>
            <span>{profilePage.profile.status}</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>Name: </span>
            <span>{profilePage.profile.fullName}</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>About: </span>
            <span>{profilePage.profile.aboutMe}</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>Is looking job: </span>
            <span>{profilePage.profile.lookingForAJob ? 'Yes' : 'No'}</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>Looking job status: </span>
            <span>{profilePage.profile.lookingForAJobDescription}</span>
          </div>
        </div>
      </div>

      <div className={s.myPosts}>
        <h3 className={s.myPostsTitle}>
          {`${profilePage.profile.fullName}'s posts`}
        </h3>
        {profilePage.profile.posts.map((e, i) => (
          <MyPost
            postText={e.text}
            key={e.id}
            likes={e.likes}
            avatar={profilePage.profile.photos.small}
          />
        ))}
      </div>
    </div>
  );
}
