import React from 'react'
import style from "./CommentItem.module.scss"
import avatar from "../../assets/images/post/avatar.png"
import { commentType } from '../../redux/slices/comments/types'
import { format } from 'date-fns';
import { IoMdClose } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { deleteComment } from '../../redux/slices/comments/commentsSlice';
import { useParams } from 'react-router-dom';

type CommentItemType = {
    comment: commentType
}

export const CommentItem:React.FC<CommentItemType> = ({comment}) => {
    const dispatch = useDispatch<AppDispatch>()
    const {id} = useParams()
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
                <IoMdClose className={style.deletePost} onClick={() => dispatch(deleteComment(id))} />
            </div>
            <div className={style.bottom}>
                <p className={style.text}>{comment.comment}
                </p>
            </div>
        </div>
    </div>
  )
}
