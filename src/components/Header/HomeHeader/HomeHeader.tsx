import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    ACCOUNT_ROUTE,
    ADDPOST_ROUTE,
    HOME_ROUTE,
    REGISTER_ROUTE,
} from "../../../utils/consts";
import { IconContext } from "react-icons";
import { IoClose, IoSearchSharp } from "react-icons/io5";
import { useSelector } from "react-redux";
import { checkIsAuth } from "../../../redux/slices/auth/authSlice";
import { FiUser, FiUserCheck } from "react-icons/fi";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { RootState } from "../../../redux/store";
import { postType } from "../../../redux/slices/posts/types";
import { SearchItem } from "../../SearchItem/SearchItem";
import style from "./HomeHeader.module.scss";
import logo from "../../../assets/images/header/logo.svg";

export const HomeHeader: React.FC = () => {
    const IsAuth = useSelector(checkIsAuth);
    const [search, setSearch] = useState<boolean>(false);
    const [value, setValue] = useState<string>("");
    const posts = useSelector(
        (state: RootState) => state.postsSlice.posts.items
    );
   
      
    const filteredPosts = Array.isArray(posts)
    ? posts.filter((post: postType) => {
          return post.title.toLowerCase().includes(value.toLowerCase());
      })
    : [];
    return (
        <header className={style.header}>
            <div className={style.header__top}>
                <div className={style.header__top_left}>
                    {IsAuth ? (
                        <Link to={ADDPOST_ROUTE}>
                            <IconContext.Provider
                                value={{ size: "30px", color: "white" }}
                            >
                                <AiOutlinePlusSquare
                                    className={style.addPost}
                                />
                            </IconContext.Provider>
                        </Link>
                    ) : (
                        ""
                    )}
                </div>
                <div className={style.logo__wrapper}>
                    <Link to={HOME_ROUTE}>
                        <img
                            src={logo}
                            alt="logo-icon"
                            className={style.logo}
                        />
                    </Link>
                </div>
                <div className={style.search__wrapper}>
                    <IconContext.Provider
                        value={{ color: "white", size: "30px" }}
                    >
                        <IoSearchSharp
                            onClick={() => setSearch(!search)}
                            className={style.search}
                        />

                        {IsAuth ? (
                            <Link to={ACCOUNT_ROUTE}>
                                <FiUserCheck className={style.user} />
                            </Link>
                        ) : (
                            <Link to={REGISTER_ROUTE}>
                                <FiUser className={style.user} />
                            </Link>
                        )}
                    </IconContext.Provider>
                </div>
            </div>
            <div className={style.header__bottom}>
                {search && (
                    <div className={style.search__container}>
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            type="text"
                        />
                        <IconContext.Provider value={{ size: "30px" }}>
                            <IoSearchSharp className={style.search__icon} />
                            {value.length > 0 ? (
                                <IoClose
                                    onClick={() => setValue("")}
                                    className={style.close__icon}
                                />
                            ) : (
                                ""
                            )}
                        </IconContext.Provider>
                    </div>
                )}
            </div>
            {value.length > 0 ? (
                <div className={style.search__list}>
                    {filteredPosts?.slice(0, 5).map((post: postType) => (
                        <SearchItem key={post._id} post={post} />
                    ))}
                </div>
            ) : (
                ""
            )}
        </header>
    );
};
