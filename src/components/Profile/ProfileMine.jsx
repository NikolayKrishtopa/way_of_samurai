import { useEffect } from 'react';
import { useState } from 'react';
import MyPost from './MyPost/MyPost';
import s from './Profile.module.css';
import { NavLink } from 'react-router-dom';

export default function Profile(props) {
  const { profilePage, addPost, doSetStatus, lang } = props;
  const [newPostText, setNewPostText] = useState('');
  const [isStatusEditMode, setIsStatusEditMode] = useState(false);
  const [currentStatusText, setCurrentStatusText] = useState(
    profilePage.profile.status
  );

  useEffect(() => {
    setCurrentStatusText(profilePage.profile.status);
  }, [profilePage.profile.status]);

  function handleAddPost() {
    addPost(newPostText);
    setNewPostText('');
  }

  function handleProfileChange(e) {
    setCurrentStatusText(e.target.value);
  }

  function handleProfileUpdate() {
    doSetStatus(currentStatusText, profilePage.profile.status);
    setIsStatusEditMode(false);
  }

  return (
    <div className={s.profile}>
      <div className={s.userInfo}>
        <img
          src={profilePage.profile.photos.large}
          alt='фото пользователя'
          className={s.avatar}
        />
        <div className={s.userDescription}>
          <div
            className={s.userStatus}
            onDoubleClick={() => setIsStatusEditMode(true)}
          >
            {!isStatusEditMode ? (
              <span>{profilePage.profile.status}</span>
            ) : (
              <input
                className={s.editProfileInput}
                value={currentStatusText}
                onChange={handleProfileChange}
                autoFocus={true}
                onBlur={handleProfileUpdate}
              />
            )}
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>
              {lang === 'EN' ? 'Name:' : 'Имя:'}&nbsp;{' '}
            </span>
            <span>{profilePage.profile.fullName}</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>
              {lang === 'EN' ? 'About:' : 'О пользователе:'}&nbsp;
            </span>
            <span>{profilePage.profile.aboutMe}</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>
              {lang === 'EN' ? 'Is looking job:' : 'Ищет ли работу:'}&nbsp;
            </span>
            <span>
              {profilePage.profile.lookingForAJob
                ? lang === 'EN'
                  ? 'Yes'
                  : 'Да'
                : lang === 'EN'
                ? 'No'
                : 'Нет'}
            </span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>
              {lang === 'EN' ? 'Looking job status:' : 'Статус поиска работы:'}
              &nbsp;
            </span>
            <span>{profilePage.profile.lookingForAJobDescription}</span>
          </div>
          <NavLink to='edit-profile'>
            <button className={s.editProfileButton}>
              {lang === 'EN' ? 'Edit profile' : 'Редактировать профиль'}
            </button>
          </NavLink>
        </div>
      </div>
      <div className={s.createPost}>
        <textarea
          placeholder={lang === 'EN' ? 'Type here' : 'Введите текст'}
          className={s.textArea}
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />
        <button
          className={`${s.addPostButton} ${
            newPostText.length > 0 && s.addPostButton_active
          }`}
          onClick={handleAddPost}
          disabled={newPostText.length === 0}
        >
          {lang === 'EN' ? 'Add post' : 'Добавить пост'}
        </button>
      </div>
      <div className={s.myPosts}>
        <h3 className={s.myPostsTitle}>
          {lang === 'EN' ? 'My posts:' : 'Мои публикации'}
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
