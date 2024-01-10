import React from 'react'
import style from "./PostItem.module.scss"
import { postType } from '../../redux/slices/posts/types'

type PostItemPropsType = {
    post: postType
}

export const PostItem:React.FC<PostItemPropsType> = ({post}) => {
  console.log(post)
  return (
    <div className={style.root}>
        <div className={style.content}>
            <div className={style.post}>
                    {post.imageUrl ? (
                      <img src={`http://localhost:7777/${post.imageUrl}`} alt="post" />
                    ) : null}
                <p className={style.author}><span>BY</span>{post.author.username}</p>
                <p className={style.title}>{post.title}</p>
            </div>
        </div>
    </div>
  )
}
