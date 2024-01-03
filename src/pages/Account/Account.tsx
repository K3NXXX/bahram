import { useDispatch } from "react-redux"
import { logout } from "../../redux/slices/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { HOME_ROUTE } from "../../utils/consts"
import style from "./Account.module.scss"

export const Account:React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutClick = ():void => {
        dispatch(logout())
        navigate(HOME_ROUTE)
    }
  return (
    <div className={style.root}>
        <button onClick={logoutClick}>Log out</button>
    </div>
  )
}
