import { NavLink } from 'react-router-dom'
import s from './User.module.css'

export default function User(props) {
  const { user, onFollowUser, onUnfollowUser } = props
  return (
    <div className={s.user}>
      <NavLink to={`profile/${user.id}`} className={s.userLink}>
        <img
          src={
            user.photos.small
              ? user.photos.small
              : 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
          }
          alt="Аватар пользователя"
          className={s.avatar}
        />
      </NavLink>
      <div className={s.userInfo}>
        <h3 className={s.userName}>{user.name}</h3>
        <p className={s.userStatus}>
          {user.status ? user.status : 'Статус не указан'}
        </p>
        <p className={s.userLocation}>
          {user.location ? user.location.country : 'N/A'},{' '}
          {user.location ? user.location.city : 'N/A'}
        </p>
        <p className={s.userAbout}>{user.about}</p>

        <button
          className={`${s.button} ${!user.followed ? s.follow : s.unFollow}`}
          onClick={() => {
            if (user.followed) {
              onUnfollowUser(user.id)
            } else {
              onFollowUser(user.id)
            }
          }}
        >
          {user.followed ? 'Удалить из друзей' : 'Добавить в друзья'}
        </button>
      </div>
    </div>
  )
}
