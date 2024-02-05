import { Link } from "react-router-dom";
import { HOME_ROUTE } from "../../utils/consts";
import style from "./Footer.module.scss";
import logo from "../../assets/images/footer/footer_logo.svg";

export const Footer: React.FC = () => {
    return (
        <footer className={style.root}>
            <div className={style.content}>
                <Link to={HOME_ROUTE}>
                    <img src={logo} alt="logo" />
                </Link>
                <p className={style.copyright}>
                    All Rights Reserved 2024 3layers
                </p>
            </div>
        </footer>
    );
};
