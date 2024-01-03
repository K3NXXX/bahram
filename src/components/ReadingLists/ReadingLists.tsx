import React from 'react'
import style from "./ReadingLists.module.scss"
import { readingList } from '../../lists/readingList'
import { ReadingItem } from './ReadingItem/ReadingItem'

export const ReadingLists:React.FC = () => {
  return (
    <section className={style.root}>
        <h3 className={style.title}>Reading lists</h3>
        <div className={style.content}>
            {readingList.map((item) => (
                <ReadingItem key={item.id} item={item}/>
            ))}
        </div>
    </section>
  )
}
