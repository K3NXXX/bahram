import React from "react";
import { postType } from "../../../../redux/slices/posts/types";
import { Link } from "react-router-dom";
import { FULLPOST_ROUTE } from "../../../../utils/consts";
import style from "./PostLayoutItem.module.scss";
type PostLayoutItemType = {
    item: postType;
};
export const PostLayoutItem: React.FC<PostLayoutItemType> = ({ item }) => {
    const truncatedTitle =
        item.title.length > 20 ? `${item.title.slice(0, 33)}...` : item.title;

    return (
        <Link to={`${FULLPOST_ROUTE}/${item._id}`}>
            <div className={style.post__card}>
                <p className={style.post__card_type}>{item.type}</p>
                <h4 className={style.post__card_title}>{truncatedTitle}</h4>
            </div>
        </Link>
    );
};
