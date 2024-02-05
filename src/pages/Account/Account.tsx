import { useDispatch, useSelector } from "react-redux";
import {
    deleteAvatar,
    logout,
    uploadAvatar,
} from "../../redux/slices/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { ADDPOST_ROUTE, HOME_ROUTE } from "../../utils/consts";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { format } from "date-fns";
import { UserPostItem } from "../../components/UserPostItem/UserPostItem";
import { postType } from "../../redux/slices/posts/types";
import noAvatar from "../../assets/images/account/no-account.png";
import axios from "../../utils/axios";
import style from "./Account.module.scss";

export const Account: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [active, setActive] = useState<number>(0);
    const [avatar, setAvatar] = useState<File | null>(null);
    const accountList = ["User's Data", "My posts"];
    const user = useSelector((state: RootState) => state.authSlice.user);
    console.log(posts)
    const formattedDate = user
        ? format(new Date(user.createdAt), "MMMM dd, yyyy")
        : "";

    const fetchPosts = async () => {
        try {
            const { data } = await axios.get("/posts/user/me");
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const formData = new FormData();
    if (avatar) {
        formData.append("image", avatar);
    }

    const setClickActive = (index: number) => {
        setActive(index);
    };

    const logoutClick = (): void => {
        dispatch(logout());
        navigate(HOME_ROUTE);
        window.localStorage.removeItem('token')
    };

    return (
        <div className={style.root}>
            <h4 className={style.title}>Account</h4>
            <div className={style.content}>
                <div className={style.left}>
                    <ul className={style.left__list}>
                        {accountList.map((item, index) => (
                            <li
                                onClick={() => setClickActive(index)}
                                className={index === active ? style.active : ""}
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                        <div className={style.btn__wrapper__phone}>
                            <button
                                className={style.logOut}
                                onClick={logoutClick}
                            >
                                Log out
                            </button>
                        </div>
                    </ul>
                </div>
                {active === 0 && (
                    <div className={style.right}>
                        <div className={style.content__user}>
                            <div className={style.userInfo}>
                                <div className={style.username}>
                                    <p className={style.text}>Username:</p>
                                    <p className={style.nickname__text}>
                                        {user?.username}
                                    </p>
                                </div>
                                <div className={style.email}>
                                    <p className={style.text}>Email: </p>
                                    <p className={style.email__text}>
                                        {user?.email}
                                    </p>
                                </div>
                                <div className={style.createdAt}>
                                    <p className={style.text}>Created: </p>
                                    <p className={style.createdAt__text}>
                                        {formattedDate}
                                    </p>
                                </div>
                                <div className={style.avatar}>
                                    <div className={style.avatar__content}>
                                        {user?.avatar ? (
                                            <img
                                                src={`http://localhost:7777/${user.avatar}`}
                                                alt="User Avatar"
                                            />
                                        ) : (
                                            <img
                                                src={noAvatar}
                                                alt="User Avatar"
                                            />
                                        )}
                                        <input
                                            onChange={(e) =>
                                                setAvatar(
                                                    e.target.files
                                                        ? e.target.files[0]
                                                        : null
                                                )
                                            }
                                            type="file"
                                            name="avatar"
                                            id="avatar"
                                            accept="image/*"
                                        />
                                        <label htmlFor="avatar"></label>
                                    </div>

                                    <div className={style.buttons}>
                                        <button
                                            onClick={() =>
                                                dispatch(uploadAvatar(formData))
                                            }
                                            className={style.upload}
                                        >
                                            Upload Avatar
                                        </button>
                                        <button
                                            onClick={() =>
                                                dispatch(deleteAvatar())
                                            }
                                            className={style.delete}
                                        >
                                            Delete Avatar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {active === 1 && (
                    <div className={style.posts__list}>
                        {Array.isArray(posts) ? posts.length > 0 ? (
                            posts?.map((post: postType) => (
                                <UserPostItem key={post._id} post={post} />
                            ))
                        ) : (
                            <div className={style.noPosts}>
                                <p>No posts yet</p>
                                <Link
                                    className={style.addPost}
                                    to={ADDPOST_ROUTE}
                                >
                                    Add new post
                                </Link>
                            </div>
                        ) : []}
                    </div>
                )}
                <div className={style.btn__wrapper}>
                    <button className={style.logOut} onClick={logoutClick}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};
