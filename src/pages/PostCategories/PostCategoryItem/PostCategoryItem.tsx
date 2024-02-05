import React, { useEffect } from "react";
import { postCategoriesType } from "../../../lists/postCategories";
import { Link } from "react-router-dom";
import style from "./PostCategoryItem.module.scss";

type PostCategoryItemProps = {
    category: postCategoriesType;
};

export const PostCategoryItem: React.FC<PostCategoryItemProps> = ({
    category,
}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Link to={category.route}>
            <div className={style.root}>
                <div className={style.left}>
                    <img src={category.image} alt="post category" />
                </div>
                <div className={style.right}>
                    <h3 className={style.title}>{category.title}</h3>
                    <p className={style.description}>{category.description}</p>
                </div>
            </div>
        </Link>
    );
};
