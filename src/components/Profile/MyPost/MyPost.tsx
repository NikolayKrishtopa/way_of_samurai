const likeIcon = require('../../../pictures/likeIcon.svg')
const s = require('./MyPost.module.css')

export type MyPostPropsType = {
  postText: string;
  likes: Array<string|number>;
  avatar:string
}

export default function MyPost(props: MyPostPropsType) {
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
