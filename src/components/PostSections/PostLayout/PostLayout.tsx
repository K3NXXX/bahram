import { Link } from "react-router-dom";
import { PostLayoutItem } from "./PostLayoutItem/PostLayoutItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { postType } from "../../../redux/slices/posts/types";
import { POPULAR_ROUTE } from "../../../utils/consts";
import style from "./PostLayout.module.scss";

export const PostLayout = () => {
    const popularPosts = useSelector(
        (state: RootState) => state.postsSlice.popularPosts.items
    );
    return (
        <section className={style.root}>
            <div className={style.top}>
                <h3 className={style.title}>Popular</h3>
                <Link to={POPULAR_ROUTE} className={style.viewAll}>
                    View All
                </Link>
            </div>
            <div className={style.content}>
                <div className={style.content__left}>
                    <p className={style.author}>
                        BY TOMAS LAURINAVICIUS IN FREELANCE
                    </p>
                    <h4 className={style.post__title}>
                        How to Boost Conversions on Your WooCommerce Product
                        Pages
                    </h4>
                    <p className={style.post__descr}>
                        User research is the reality check every project needs.
                        Here's our guide to why you should be doing it — and how
                        to get started.
                    </p>
                </div>
                <div className={style.content__right}>
                    {popularPosts?.slice(0, 4).map((item: postType) => (
                        <PostLayoutItem key={item._id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};
