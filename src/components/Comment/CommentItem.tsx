import React from 'react'
import style from "./CommentItem.module.scss"
import avatar from "../../assets/images/post/avatar.png"
import { commentType } from '../../redux/slices/comments/types'
import { format } from 'date-fns';

type CommentItemType = {
    comment: commentType
}

export const CommentItem:React.FC<CommentItemType> = ({comment}) => {
    const formattedDate = format(new Date(comment.createdAt), "MMMM dd, yyyy 'at' h:mm a");
  return (
    <div className={style.root}>
        <div className={style.image__wrapper}>
            <img className={style.avatar} src={avatar} alt="avatar" />
        </div>
        <div className={style.content}>
            <div className={style.top}>
                <p className={style.username}>{comment.author}</p>
                <p className={style.date}>{formattedDate}</p>
            </div>
            <div className={style.bottom}>
                <p className={style.text}>{comment.comment}
                </p>
            </div>
        </div>
    </div>
  )
}
