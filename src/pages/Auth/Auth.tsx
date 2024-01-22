import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchLogin, fetchRegister } from "../../redux/slices/auth/authSlice";
import { loginData, registerData } from "../../redux/slices/auth/types";
import "react-toastify/dist/ReactToastify.css";
import style from "./Auth.module.scss";
import { HOME_ROUTE } from "../../utils/consts";

export const Auth: React.FC = () => {
    const registrationForm = useForm<registerData>({ mode: "onChange" });
    const loginForm = useForm<loginData>({ mode: "onChange" });

    const {
        register: registerRegistration,
        handleSubmit: handleSubmitRegistration,
    } = registrationForm;
    const { register: registerLogin, handleSubmit: handleSubmitLogin } =
        loginForm;

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const registerSubmitHandler: SubmitHandler<registerData> = (
        data: registerData
    ) => {
        dispatch(fetchRegister(data));
        toast.success("Registration was successful");
        navigate(HOME_ROUTE);
    };

    const loginSubmitHandler: SubmitHandler<loginData> = (data: loginData) => {
        dispatch(fetchLogin(data));
        toast.success("Authorization was successful");
        navigate(HOME_ROUTE);
    };

    return (
        <div className={style.root}>
            <div className={style.main}>
                <input type="checkbox" id={style.chk} />
                <div className={style.signup}>
                    <form
                        onSubmit={handleSubmitRegistration(
                            registerSubmitHandler
                        )}
                    >
                        <label htmlFor={style.chk}>Sign up</label>

                        <input
                            {...registerRegistration("username", {
                                minLength: {
                                    value: 5,
                                    message: "Username minimum 5 characters",
                                },
                                required: true,
                            })}
                            type="text"
                            placeholder="Username (min 5 characters)"
                        />

                        <input
                            {...registerRegistration("email", {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email",
                                },
                                required: true,
                            })}
                            type="text"
                            placeholder="Email"
                        />

                        <input
                            {...registerRegistration("password", {
                                minLength: {
                                    value: 5,
                                    message: "Password minimum 5 characters",
                                },
                                required: true,
                            })}
                            type="password"
                            placeholder="Password (min 5 characters)"
                        />

                        <button type="submit">Sign up</button>
                    </form>
                </div>

                <div className={style.login}>
                    <form onSubmit={handleSubmitLogin(loginSubmitHandler)}>
                        <label htmlFor={style.chk}>Login</label>
                        <input
                            {...registerLogin("email", {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email",
                                },
                                required: true,
                            })}
                            placeholder="Email"
                        />

                        <input
                            {...registerLogin("password", {
                                minLength: {
                                    value: 5,
                                    message: "Password minimum 5 characters",
                                },
                                required: true,
                            })}
                            type="password"
                            placeholder="Password"
                        />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
