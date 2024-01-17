import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { PostItem } from '../../components/PostItem/PostItem'
import { postType } from '../../redux/slices/posts/types'
import style from "./Posts.module.scss"

export const EssentialsPosts:React.FC = () => {
    const posts = useSelector((state:RootState) => state.postsSlice.posts.items)
    const essentialsPosts = posts.filter((post:postType) => post.type === "Essentials")

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
    
  return (
    <div className={style.root}>
        <h3 className={style.title}>Essentials</h3>
        <div className={style.content}>
            {essentialsPosts.map((post: postType) => (
                <PostItem key={post._id} post = {post}/>
            ))}
        </div>
    </div>
  )
}
