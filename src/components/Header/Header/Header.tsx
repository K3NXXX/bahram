import React, { useState } from 'react'
import style from "./Header.module.scss"
import { Link } from 'react-router-dom'
import { ACCOUNT_ROUTE, ADDPOST_ROUTE, HOME_ROUTE, REGISTER_ROUTE } from '../../../utils/consts'
import logo from "../../../assets/images/header/logo-black.svg"
import { IconContext } from 'react-icons'
import { IoClose, IoSearchSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { checkIsAuth } from '../../../redux/slices/auth/authSlice'
import { FiUser, FiUserCheck } from 'react-icons/fi'
export const Header:React.FC = () => {
    const IsAuth = useSelector(checkIsAuth)
    const [search, setSearch] = useState<boolean>(false)
    const [value, setValue] = useState<string>("")
  return (
    <header className={style.header}>
    <div className={style.header__top}>
        <div className={style.toggle__theme}>
            <label htmlFor="theme" className={style.theme}>
                <span className={style.theme__toggle_wrap}>
                    <input id="theme" className={style.theme__toggle} type="checkbox" role="switch" name="theme" value="dark"/>
                    <span className={style.theme__fill}></span>
                    <span className={style.theme__icon}>
                        <span className={style.theme__icon_part}></span>
                        <span className={style.theme__icon_part}></span>
                        <span className={style.theme__icon_part}></span>
                        <span className={style.theme__icon_part}></span>
                        <span className={style.theme__icon_part}></span>
                        <span className={style.theme__icon_part}></span>
                        <span className={style.theme__icon_part}></span>
                        <span className={style.theme__icon_part}></span>
                        <span className={style.theme__icon_part}></span>
                    </span>
                </span>
            </label>
        </div>
        <div className={style.logo__wrapper}>
            <Link to={HOME_ROUTE}>
                <img src={logo} alt="logo-icon" className={style.logo} />
            </Link>
        </div>
        <div className={style.search__wrapper}>
            {IsAuth ? (
                <Link to={ADDPOST_ROUTE}>
                    <button className={style.addPost}>Add new post</button>
                </Link>
            ): ('')}
            
            <IconContext.Provider value={{color: "black", size: "30px"}}>
                <IoSearchSharp onClick={() => setSearch(!search)} className={style.search}/>

                {IsAuth ? (
                    <Link to={ACCOUNT_ROUTE}>
                        <FiUserCheck className={style.user}/>
                    </Link>
                ): (
                    <Link to={REGISTER_ROUTE}>
                        <FiUser className={style.user}/>
                    </Link>
                )}
                
            </IconContext.Provider>
        </div>
    </div>
    <div className={style.header__bottom}>
        {search && (
            <div className={style.search__container}>
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
                <IconContext.Provider value={{size: "30px"}}>
                    <IoSearchSharp className={style.search__icon} />
                    {value.length > 0 ? (
                        <IoClose onClick={() => setValue("")} className={style.close__icon}/>
                    ) : ("")}
                </IconContext.Provider>
            </div>
        )}
    </div>
</header>
  )
}
