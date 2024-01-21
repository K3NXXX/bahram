import React, { useEffect } from "react";
import { Intro } from "../../components/Intro/Intro";
import { ReadingLists } from "../../components/ReadingLists/ReadingLists";
import { PostLayout } from "../../components/PostSections/PostLayout/PostLayout";

export const Home: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <Intro />
            <PostLayout />
            <ReadingLists />
        </div>
    );
};
