import React from 'react'
import { postSections } from '../../lists/postsSections'
import { PostLayout } from './PostLayout/PostLayout'

export const PostSections:React.FC = () => {
  return (
    <div>
        {postSections.map((section) => (
            <PostLayout key={section.id} section={section}/>
        ))}
    </div>
  )
}
