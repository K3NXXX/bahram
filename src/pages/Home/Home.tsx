import React from 'react'
import { Intro } from '../../components/Intro/Intro'
import { ReadingLists } from '../../components/ReadingLists/ReadingLists'
import { PostSections } from '../../components/PostSections/PostSections'

export const Home:React.FC = () => {
  return (
    <div>
        <Intro/>
        <PostSections/>
        <ReadingLists/>
    </div>
  )
}
