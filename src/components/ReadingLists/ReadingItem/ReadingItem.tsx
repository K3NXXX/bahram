import React from 'react'
import style from "./ReadingItem.module.scss"
import { readingListType } from '../../../lists/readingList'
import { Link } from 'react-router-dom'

type ReadingItemProps = {
    item: readingListType
}

export const ReadingItem:React.FC<ReadingItemProps> = ({item}) => {
  return (
    <Link to={item.route}>
      <div className={style.root}>
          <img src={item.image} alt="category" />
          <p>{item.description}</p>
      </div>
    </Link>
  )
}
