import s from './User.module.css'

export default function User(props) {
  const { user, onFollowUser } = props
  return (
    <>
      <div className={s.user}>
        <img
          src={
            user.photos.small
              ? user.photos.small
              : 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'
          }
          alt="Аватар пользователя"
          className={s.avatar}
        />
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
            className={`${s.button} ${
              !user.isFollowed ? s.follow : s.unFollow
            }`}
            onClick={() => onFollowUser(user.id)}
          >
            {user.isFollowed ? 'Удалить из друзей' : 'Добавить в друзья'}
          </button>
        </div>
      </div>
    </>
  )
}
