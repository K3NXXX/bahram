import React from "react";
import { readingList } from "../../lists/readingList";
import { ReadingItem } from "./ReadingItem/ReadingItem";
import { Link } from "react-router-dom";
import { POSTS_CATEGORIES_ROUTE } from "../../utils/consts";
import style from "./ReadingLists.module.scss";

export const ReadingLists: React.FC = () => {
    return (
        <section className={style.root}>
            <div className={style.top}>
                <h3 className={style.title}>Reading lists</h3>
                <Link to={POSTS_CATEGORIES_ROUTE}>View all</Link>
            </div>
            <div className={style.content}>
                {readingList.map((item) => (
                    <ReadingItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};
