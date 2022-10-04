import avatar from '../../../pictures/avatar.jpg'
import s from './MyPost.module.css'

export default function MyPost(props) {
  const { postText } = props

  return (
    <div className={s.myPost}>
      <img src={avatar} alt="User Avatar" className={s.myPostAva} />
      <p className={s.myPostText}>{postText}</p>
    </div>
  )
}
