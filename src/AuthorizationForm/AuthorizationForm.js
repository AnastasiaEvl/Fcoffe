import React, {useState} from "react";
import axios from "axios";
import Input from "@mui/material/Input";
import {Redirect} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../reducers/UserReducer";
import {auth} from "../action/user";
import './Auth.css'

function AuthorizationForm() {

    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState("Введите e-mail");
    const [errorPassword, setErrorPasword] = useState("Введите пароль");
    const ariaLabel = {"aria-label": "description"};
    // const [redirect, setRedirect] = useState(false);

    function buttonChange() {
        if (errorEmail || errorPassword) {
            return true;
        } else {
            var el = document.getElementById("btn");
            el.style.backgroundColor = "black";
            el.style.color = "white";
            return true;
        }
    }

    const emailHandler = (data) => {
        setEmail(data.target.value);
        const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(data.target.value).toLowerCase())) {
            setErrorEmail("Неверный e-mail");
        } else {
            setErrorEmail("");
        }
    };

    function Rform() {
        window.location = "/Rform";
    }

    function Fform() {
        window.location = "/Fform";
    }

    const passHandler = (data) => {
        setPassword(data.target.value);
        const re = /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{8,14}/g;
        if (!re.test(String(data.target.value))) {
            setErrorPasword("Неверный пароль");
        } else {
            setErrorPasword("");
        }
    };

    const blurHandler = (data) => {
        switch (data.target.name) {
            case "UserEmail":
                if (email !== "") {
                    console.log("ok");
                }
                setEmptyEmail(true);
                break;
            case "password":
                setEmptyPassword(true);
                break;
        }
    };

    function postData() {
        axios
            // .post("https://a700-93-171-160-14.ngrok.io//login", {
            .post("https://a700-93-171-160-14.ngrok.io//login", {
                email: email,
                password: password,
            })
            .catch((data) => {
                // if (data.status === 200) {
                // window.location = "/signUp";
                // }
                alert('ERROR')
            })
            .then((error) => console.log(error));
        // setRedirect(true);
        alert('ERROR')
    }
    //
    // if (redirect) {
    //     return <Redirect to="MainPage"/>;
    // }

    function MainPage() {
        window.location = "/MainPage";
    }

    return (
        <div className="wrapper">
            <div onClick={MainPage}>

                {isAuth && <div className="exit" onClick={() => dispatch(logout())}>
                    Выход
                </div>}
                <img className="Icon" src="/image/Icon.svg"/>
            </div>

            <img className="logoC" src="/image/logo.svg"/>

            <div className="registration">Авторизация</div>
            <form>
                <table>
                    <tbody>
                    <tr className="email">Логин</tr>
                    <tr>
                        <td className="line_first">
                            <Input
                                placeholder="Введите e-mail, указанный при регистрации"
                                id="firstLine"
                                style={{width: "288px", height: "37px", fontSize: "10px"}}
                                value={email}
                                onBlur={(data) => blurHandler(data)}
                                type="email"
                                name="UserEmail"
                                required
                                onChange={
                                    ((data) => emailHandler(data.target.value),
                                        (data) => emailHandler(data))
                                }
                                inputProps={ariaLabel}
                            />
                        </td>
                    </tr>
                    <tr className="errorMessage">
                        {emptyEmail && errorEmail && <div>{errorEmail}</div>}
                    </tr>
                    <tr className="password">Пароль</tr>
                    <tr>
                        <td className="line_second">
                            <Input
                                style={{width: "288px", height: "37px"}}
                                value={password}
                                onBlur={(data) => blurHandler(data)}
                                type="password"
                                name="password"
                                id="password"
                                required
                                onChange={
                                    ((data) => emailHandler(data.target.value),
                                        (data) => passHandler(data))
                                }
                                inputProps={ariaLabel}
                            />
                        </td>
                    </tr>
                    <tr className="errorMessageTwo">
                        {emptyPassword && errorPassword && <div>{errorPassword}</div>}
                    </tr>
                    <tr className="checkbox">
                        <div className="forgot_pass" onClick={Fform}>
                            Забыли пароль?
                        </div>
                        <div className="boxCheck">
                            <input type="checkbox" className="check"/>
                            Запомнить
                        </div>
                    </tr>
                    <tr>
                        <div className="registration_social_sites">
                            Войти через социальные сети
                        </div>
                    </tr>
                    <tr>
                        <div className="social_logo">
                            <a href="#">
                                <img src="/image/google.svg"/>
                            </a>
                            <a href="#">
                                <img src="/image/facebook.svg"/>
                            </a>
                            <a href="#">
                                <img src="/image/vk.svg"/>
                            </a>
                            <a href="#">
                                <img src="/image/yandex.svg"/>
                            </a>
                        </div>
                    </tr>

                    <button
                        className="RegisterBtn"
                        id="btn"
                        type="submit"
                        name="buttonSubmit"
                        disabled={!buttonChange()}
                        onClick={() => dispatch(auth(email, password))}
                    >
                        Войти
                    </button>

                    <tr>
                        <p className="registeredLink">
                            Еще нет аккаунта?
                            <div onClick={Rform}>
                                <b>Зарегистрироваться</b>
                            </div>
                        </p>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default AuthorizationForm;
