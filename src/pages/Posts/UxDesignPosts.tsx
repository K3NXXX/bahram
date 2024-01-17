import React, { useEffect } from 'react'
import style from "./Posts.module.scss"
import { RootState } from '../../redux/store'
import { PostItem } from '../../components/PostItem/PostItem'
import { postType } from '../../redux/slices/posts/types'
import { useSelector } from 'react-redux'
export const UxDesignPosts:React.FC = () => {
    const posts = useSelector((state:RootState) => state.postsSlice.posts.items)
    const uxPosts = posts.filter((post:postType) => post.type === "UX Design")

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  return (
    <div className={style.root}>
        <h3 className={style.title}>UX Design</h3>
        <div className={style.content}>
            {uxPosts.map((post: postType) => (
                <PostItem key={post._id} post = {post}/>
            ))}
        </div>
    </div>
  )
}
