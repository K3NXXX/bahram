import React from 'react'
import { Intro } from '../../components/Intro/Intro'
import { PostLayout } from '../../components/PostSections/PostLayout'
import { ReadingLists } from '../../components/ReadingLists/ReadingLists'

export const Home:React.FC = () => {
  return (
    <div>
        <Intro/>
        <PostLayout/>
        <ReadingLists/>
    </div>
  )
}
