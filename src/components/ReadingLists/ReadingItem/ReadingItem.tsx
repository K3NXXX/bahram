import React from 'react'
import style from "./ReadingItem.module.scss"
import { readingListType } from '../../../lists/readingList'

type ReadingItemProps = {
    item: readingListType
}

export const ReadingItem:React.FC<ReadingItemProps> = ({item}) => {
  return (
    <div className={style.root}>
        <img src={item.image} alt="category" />
        <p>{item.description}</p>
    </div>
  )
}
