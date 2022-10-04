import avatar from '../../pictures/avatar.jpg'
import MyPost from './MyPost/MyPost'
import s from './Profile.module.css'

const myPosts = [
  'Привет! Мне скучно',
  'Я пишу соцсеть',
  'Но я слишком тупой',
  'Что нового?',
  'Кто последний из РФ, выключите свет!',
  'Хочу хинкали',
  'А может даже кебаб',
  'В Грузии все вкусно',
]

export default function Profile() {
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
        <textArea placeholder="Add post" className={s.textArea} />
        <button className={s.addPostButton}>Add post</button>
      </div>
      <div className={s.myPosts}>
        <h3 className={s.myPostsTitle}>My posts:</h3>
        {myPosts.map((e) => (
          <MyPost postText={e} />
        ))}
      </div>
    </div>
  )
}
