import React from "react";
import { postCategories } from "../../lists/postCategories";
import { PostCategoryItem } from "./PostCategoryItem/PostCategoryItem";
import style from "./PostCategories.module.scss";

export const PostCategories: React.FC = () => {
    return (
        <div className={style.root}>
            <h5 className={style.title}>All reading lists</h5>
            <p className={style.description}>
                Get in-depth insights on web design, freelancing, content
                management, and more with these series of related reads.
            </p>
            <div className={style.content}>
                {postCategories?.map((category) => (
                    <PostCategoryItem key={category.id} category={category} />
                ))}
            </div>
        </div>
    );
};
