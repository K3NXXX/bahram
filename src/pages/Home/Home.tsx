import React from 'react'
import { Intro } from '../../components/Intro/Intro'
import { ReadingLists } from '../../components/ReadingLists/ReadingLists'
import { PostSections } from '../../components/PostSections/PostSections'
import { HomeHeader } from '../../components/Header/HomeHeader/HomeHeader'
import { Header } from '../../components/Header/Header/Header'

export const Home:React.FC = () => {
  return (
    <div>
        <Intro/>
        <PostSections/>
        <ReadingLists/>
    </div>
  )
}
