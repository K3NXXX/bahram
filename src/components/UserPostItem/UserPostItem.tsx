import React from "react";
import { postType } from "../../redux/slices/posts/types";
import { Link } from "react-router-dom";
import { FULLPOST_ROUTE } from "../../utils/consts";
import style from "./UserPostItem.module.scss";

type UserPostItemProps = {
    post: postType;
};
export const UserPostItem: React.FC<UserPostItemProps> = ({ post }) => {
    return (
        <Link to={`${FULLPOST_ROUTE}/${post._id}`}>
            <div className={style.root}>
                <div className={style.top}>
                    <p className={style.type}>{post.type}</p>
                    <p className={style.title}>{post.title}</p>
                </div>
                <p className={style.text}>{post.text}</p>
            </div>
        </Link>
    );
};
