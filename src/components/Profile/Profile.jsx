import avatar from '../../pictures/avatar.jpg'
import {
  addPostActionCreator,
  changePostTypeActionCreator,
} from '../../redux/store'
import MyPost from './MyPost/MyPost'
import s from './Profile.module.css'

export default function Profile(props) {
  const { profile, dispatch } = props

  function handleAddPost() {
    dispatch(addPostActionCreator())
  }

  function handlePostTextChange(e) {
    dispatch(changePostTypeActionCreator(e.target.value))
  }

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
          value={profile.newPostText}
          onChange={handlePostTextChange}
        />
        <button
          className={`${s.addPostButton} ${
            profile.newPostText.length > 0 && s.addPostButton_active
          }`}
          onClick={handleAddPost}
          disabled={profile.newPostText.length === 0}
        >
          Add post
        </button>
      </div>
      <div className={s.myPosts}>
        <h3 className={s.myPostsTitle}>My posts:</h3>
        {profile.posts.map((e, i) => (
          <MyPost postText={e.text} key={e.id} likes={e.likes} />
        ))}
      </div>
    </div>
  )
}
