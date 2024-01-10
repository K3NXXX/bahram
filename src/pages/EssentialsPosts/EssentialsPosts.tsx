import React from 'react'
import style from "./EssentialsPosts.module.scss"
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { PostItem } from '../../components/PostItem/PostItem'
import { postType } from '../../redux/slices/posts/types'

export const EssentialsPosts:React.FC = () => {
    const posts = useSelector((state:RootState) => state.postsSlice.posts.items)
    console.log(posts);
    
  return (
    <div className={style.root}>
        <h3 className={style.title}>Essentials</h3>
        <div className={style.content}>
            {posts.map((post: postType) => (
                <PostItem key={post._id} post = {post}/>
            ))}
        </div>
    </div>
  )
}
