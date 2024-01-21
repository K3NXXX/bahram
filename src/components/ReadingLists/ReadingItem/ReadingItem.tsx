import React from "react";
import { readingListType } from "../../../lists/readingList";
import { Link } from "react-router-dom";
import style from "./ReadingItem.module.scss";

type ReadingItemProps = {
    item: readingListType;
};

export const ReadingItem: React.FC<ReadingItemProps> = ({ item }) => {
    return (
        <Link to={item.route}>
            <div className={style.root}>
                <img src={item.image} alt="category" />
                <p>{item.description}</p>
            </div>
        </Link>
    );
};
