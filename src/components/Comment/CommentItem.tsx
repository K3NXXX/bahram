import React from "react";
import { commentType } from "../../redux/slices/comments/types";
import { format } from "date-fns";
import style from "./CommentItem.module.scss";

type CommentItemType = {
    comment: commentType;
};

export const CommentItem: React.FC<CommentItemType> = ({ comment }) => {
    const formattedDate = format(
        new Date(comment.createdAt),
        "MMMM dd, yyyy 'at' h:mm a"
    );
    return (
        <div className={style.root}>
            <div className={style.image__wrapper}>
                <img
                    className={style.avatar}
                    src={`http://localhost:7777/${comment.avatar}`}
                    alt="avatar"
                />
            </div>
            <div className={style.content}>
                <div className={style.top}>
                    <div className={style.image__wrapper__phone}>
                        <img
                            className={style.avatar}
                            src={`http://localhost:7777/${comment.avatar}`}
                            alt="avatar"
                        />
                    </div>
                    <div className={style.top__content}>
                        <p className={style.username}>{comment.username}</p>
                        <p className={style.date}>{formattedDate}</p>
                    </div>
                </div>
                <div className={style.bottom}>
                    <p className={style.text}>{comment.comment}</p>
                </div>
            </div>
        </div>
    );
};
