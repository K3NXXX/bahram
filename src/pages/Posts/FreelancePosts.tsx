import React, { useEffect } from "react";
import { postType } from "../../redux/slices/posts/types";
import { PostItem } from "../../components/PostItem/PostItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import style from "./Posts.module.scss";

export const FreelancePosts: React.FC = () => {
    const posts = useSelector(
        (state: RootState) => state.postsSlice.freelancePosts
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={style.root}>
            <h3 className={style.title}>Freelance</h3>
            <div className={style.content}>
                {Array.isArray(posts) ?posts.length > 0 ? (
                    posts?.map((post: postType) => (
                        <PostItem key={post._id} post={post} />
                    ))
                ) : (
                    <p>No posts yet</p>
                ) : []}
            </div>
        </div>
    );
};
