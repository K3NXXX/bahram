import React from "react";
import { postType } from "../../redux/slices/posts/types";
import { Link } from "react-router-dom";
import { FULLPOST_ROUTE } from "../../utils/consts";
import style from "./PostItem.module.scss";

type PostItemPropsType = {
    post: postType;
};

export const PostItem: React.FC<PostItemPropsType> = ({ post }) => {
    if (!post) {
        return <div>No posts</div>;
    }
    return (
        <Link to={`${FULLPOST_ROUTE}/${post._id}`}>
            <div className={style.root}>
                <div className={style.content}>
                    <div className={style.post}>
                        {post.imageUrl ? (
                            <img
                                src={`http://localhost:7777/${post.imageUrl}`}
                                alt="post"
                            />
                        ) : null}
                        <p className={style.author}>
                            <span>BY</span>
                            {post.username}
                        </p>
                        <p className={style.title}>{post.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};
