import React, { useEffect } from 'react'
import style from "./Posts.module.scss"
import { postType } from '../../redux/slices/posts/types'
import { PostItem } from '../../components/PostItem/PostItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

export const FreelancePosts:React.FC = () => {
    const posts = useSelector((state:RootState) => state.postsSlice.posts.items)
    const freelancePosts = posts.filter((post:postType) => post.type === "Freelance")

    useEffect(() => {
      window.scrollTo(0,0)
    }, [])
  return (
    <div className={style.root}>
        <h3 className={style.title}>Freelance</h3>
        <div className={style.content}>
            {freelancePosts.map((post: postType) => (
                <PostItem key={post._id} post = {post}/>
            ))}
        </div>
    </div>
  )
}
