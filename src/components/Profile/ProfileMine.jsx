import { useState } from 'react'
import MyPost from './MyPost/MyPost'
import s from './Profile.module.css'

export default function Profile(props) {
  const { profilePage, addPost, doSetStatus } = props
  const [newPostText, setNewPostText] = useState('')
  const [isStatusEditMode, setIsStatusEditMode] = useState(false)
  const [currentStatusText, setCurrentStatusText] = useState(
    profilePage.profile.status
  )

  function handleAddPost() {
    addPost(newPostText)
    setNewPostText('')
  }

  function handleProfileChange(e) {
    setCurrentStatusText(e.target.value)
  }

  function handleProfileUpdate() {
    doSetStatus(currentStatusText)
    setIsStatusEditMode(false)
  }

  return (
    <div className={s.profile}>
      <div className={s.userInfo}>
        <img
          src={profilePage.profile.photos.large}
          alt="фото пользователя"
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
                value={currentStatusText}
                onChange={handleProfileChange}
                autoFocus={true}
                onBlur={handleProfileUpdate}
              />
            )}
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
      <div className={s.createPost}>
        <textarea
          placeholder="Add post"
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
          Add post
        </button>
      </div>
      <div className={s.myPosts}>
        <h3 className={s.myPostsTitle}>My posts:</h3>
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
  )
}
