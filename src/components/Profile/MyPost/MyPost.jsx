import s from './MyPost.module.css'
import likeIcon from '../../../pictures/likeIcon.svg'

export default function MyPost(props) {
  const { postText, likes, avatar } = props

  return (
    <div className={s.myPost}>
      <img src={avatar} alt="User Avatar" className={s.myPostAva} />
      <p className={s.myPostText}>{postText}</p>
      <div className={s.likesBlock}>
        <img src={likeIcon} alt="Мне нравится!" className={s.likesIcon} />
        <span className={s.likes}>{likes}</span>
      </div>
    </div>
  )
}
