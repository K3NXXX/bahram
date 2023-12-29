import React from 'react'
import { Header } from '../components/Header/Header'
import { Intro } from '../components/Intro/Intro'

export const Home:React.FC = () => {
  return (
    <div>
        <Header/>
        <Intro/>
    </div>
  )
}
