import React from 'react'
import style from "./CommentItem.module.scss"
import avatar from "../../assets/images/post/avatar.png"
export const CommentItem:React.FC = () => {
  return (
    <div className={style.root}>
        <div className={style.image__wrapper}>
            <img className={style.avatar} src={avatar} alt="avatar" />
        </div>
        <div className={style.content}>
            <div className={style.top}>
                <p className={style.username}>Brian Jackson</p>
                <p className={style.date}>December 14, 2017 at 5:13 pm</p>
                <div>
                    <button className={style.reply}>Reply</button>
                </div>
            </div>
            <div className={style.bottom}>
                <p className={style.text}>I think, you forgot to mention a very good one:
                    Thrive architect from thrivethemes. That thing is pretty powerful.
                </p>
            </div>
        </div>
    </div>
  )
}
