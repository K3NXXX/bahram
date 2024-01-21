import React, { useEffect, useState } from "react";
import {
    commentType,
    createCommentData,
} from "../../redux/slices/comments/types";
import {
    createComment,
    getPostComments,
} from "../../redux/slices/comments/commentsSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postType } from "../../redux/slices/posts/types";
import { IconContext } from "react-icons";
import { MdRemoveRedEye } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { CommentItem } from "../../components/Comment/CommentItem";
import { useForm } from "react-hook-form";
import { Link as ScrollLink } from "react-scroll";
import { toast } from "react-toastify";
import { removePost } from "../../redux/slices/posts/postsSlice";
import { EDITPOST_ROUTE, HOME_ROUTE } from "../../utils/consts";
import axios from "../../utils/axios";
import style from "./FullPost.module.scss";

export const FullPost: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { register, reset, handleSubmit } = useForm<createCommentData>({
        mode: "onChange",
    });
    const comments = useSelector(
        (state: RootState) => state.commentsSlice.comments
    );
    const [post, setPost] = useState<postType | null>(null);
    const { id } = useParams<{ id: string }>();
    const user = useSelector((state: RootState) => state.authSlice.user);
    const navigate = useNavigate();
    const onSubmit = (data: createCommentData) => {
        const formData = {
            id: id!,
            comment: data.comment,
        };
        dispatch(createComment(formData));
        toast.success("Comment was created successfully");
        reset();
    };

    useEffect(() => {
        //@ts-ignore
        dispatch(getPostComments(id));
    }, [dispatch, id]);

    useEffect(() => {
        const fetchPost = async () => {
            const { data } = await axios.get(`/posts/${id}`);
            setPost(data);
        };
        fetchPost();
    }, [id]);

    if (!post) {
        return <div>Loading...</div>;
    }
    return (
        <div className={style.root}>
            <p className={style.title}>{post.title}</p>
            <p className={style.author}>
                <span>BY</span> {post.username}
            </p>
            {user?._id === post.author && (
                <div className={style.buttons}>
                    <Link to={EDITPOST_ROUTE + `/${id}`} className={style.edit}>
                        Edit Post
                    </Link>
                    <button
                        onClick={() => {
                            dispatch(removePost(id));
                            navigate(HOME_ROUTE);
                            toast.success("Post deleted successfully");
                        }}
                        className={style.delete}
                    >
                        Delete Post
                    </button>
                </div>
            )}
            <div className={style.content}>
                <div className={style.image__wrapper}>
                    <div className={style.social}>
                        <IconContext.Provider
                            value={{ size: "30px", color: "grey" }}
                        >
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagramSquare />
                            <FaPinterest />
                        </IconContext.Provider>
                    </div>
                    {post.imageUrl ? (
                        <img
                            src={`http://localhost:7777/${post.imageUrl}`}
                            alt="post"
                        />
                    ) : null}
                    <div className={style.statistic}>
                        <div className={style.views}>
                            <IconContext.Provider value={{ size: "30px" }}>
                                <MdRemoveRedEye />
                            </IconContext.Provider>
                            <p className={style.count}>{post.viewsCount}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={style.text}>{post.text}</p>
            <div className={style.comments}>
                <div className={style.comments__top}>
                    <h4 className={style.comment__title}>Comments</h4>
                    <ScrollLink to="form" smooth={true} duration={1000}>
                        <button className={style.addComment}>
                            Leave a Comment
                        </button>
                    </ScrollLink>
                </div>
                <p className={style.comments__policy}>
                    <span>Comment policy:</span> We love comments and appreciate
                    the time that readers spend to share ideas and give
                    feedback. However, all comments are manually moderated and
                    those deemed to be spam or solely promotional will be
                    deleted.
                </p>
                <div className={style.commets__list}>
                    {comments?.map((comment: commentType) =>
                        comment ? (
                            <CommentItem key={comment._id} comment={comment} />
                        ) : null
                    )}
                </div>
                <div className={style.comments__create}>
                    <p className={style.leave__reply}>Leave a Reply</p>
                    <form name="form" onSubmit={handleSubmit(onSubmit)}>
                        <textarea
                            {...register("comment", { required: true })}
                            placeholder="Comment"
                        />
                        <div className={style.policy}>
                            <input
                                {...register("checkbox", { required: true })}
                                type="checkbox"
                            />
                            <p className={style.copyright}>
                                I agree to the Terms and Conditions and Privacy
                                Policy
                            </p>
                        </div>
                        <button type="submit">Post Comment</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
