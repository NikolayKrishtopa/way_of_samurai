import avatar from '../../pictures/avatar.jpg'
import MyPost from './MyPost/MyPost'
import s from './Profile.module.css'

export default function Profile(props) {
  const { profilePage, onAddPost, onPostTextChange } = props

  return (
    <div className={s.profile}>
      <div className={s.userInfo}>
        <img src={avatar} alt="фото пользователя" className={s.avatar} />
        <div className={s.userDescription}>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>Name: </span>
            <span>Nikolay</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>Lastname: </span>
            <span>Krishtopa</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>Birthdate: </span>
            <span>13.04.1987</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>Country: </span>
            <span>Georgia</span>
          </div>
          <div className={s.userDescriptionItem}>
            <span className={s.userDescrTitle}>City: </span>
            <span>Kutaisi</span>
          </div>
        </div>
      </div>
      <div className={s.createPost}>
        <textarea
          placeholder="Add post"
          className={s.textArea}
          value={profilePage.newPostText}
          onChange={e=>onPostTextChange(e.target.value)}
        />
        <button
          className={`${s.addPostButton} ${
            profilePage.newPostText.length > 0 && s.addPostButton_active
          }`}
          onClick={onAddPost}
          disabled={profilePage.newPostText.length === 0}
        >
          Add post
        </button>
      </div>
      <div className={s.myPosts}>
        <h3 className={s.myPostsTitle}>My posts:</h3>
        {profilePage.posts.map((e, i) => (
          <MyPost postText={e.text} key={e.id} likes={e.likes} />
        ))}
      </div>
    </div>
  )
}
