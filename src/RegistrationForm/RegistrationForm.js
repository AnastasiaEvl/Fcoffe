import React, { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import "./Registration.css";

function FormEnter() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  const [errorEmail, setErrorEmail] = useState("Введите e-mail");
  const [errorTextPassword, setErrorTextPassword] = useState();
  const [errorPassword, setErrorPasword] = useState("Введите пароль");

  const ariaLabel = { "aria-label": "description" };

  function buttonChange() {
    if (errorEmail || errorPassword) {
      return false;
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

  const passHandler = (data) => {
    setPassword(data.target.value);
    const re = /(?=.*[0-9])(?=.*[a-z])[0-9a-z]{8,14}/g;
    if (!re.test(String(data.target.value))) {
      setErrorPasword("Неверный пароль ");
      setErrorTextPassword("Минимально допустимая длина 8 символов");
    } else {
      setErrorPasword("");
    }
  };

  const blurHandler = (data) => {
    switch (data.target.name) {
      case "UserEmail":
        if (email !== "") {
          cheackEmail();
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
      // .post("http://19da-93-125-107-39.ngrok.io/logged_in_one", {
      .post("/registration", {
        email: email,
        password: password,
      })
      .catch((data) => {
        // if (data.status === 200) {
        // window.location = "/signUp";
        // }
      })
      .then((error) => console.log(error));
  }
  function Aform() {
    window.location = "/Aform";
  }

  function cheackEmail() {
    axios
      // .post("http://19da-93-125-107-39.ngrok.io/logged_in_one", {
      .post("/cheack", {
        email: email,
      })
      .catch((error) => {
        //.then
        console.log("Ok");
        // if (data.email === email) {
        // alert("Пользователь с таким именем существует");
        // } else {
        // clearEmail = true;
        // }
      })
      .then((data) => console.log("error"));
  }

  return (
    <div className="wrapper">
      <a href="#">
        <img className="Icon" src="/image/Icon.svg" />
      </a>

      <img className="logoC" src="/image/logo.svg" />

      <div className="registration">Регистрация</div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form>
          <table>
            <tbody>
              <tr className="email">Email</tr>
              <tr>
                <td className="line_first">
                  <Input
                    id="firstLine"
                    style={{ width: "288px", height: "37px" }}
                    value={email}
                    onBlur={(data) => blurHandler(data)}
                    type="email"
                    name="UserEmail"
                    required
                    onChange={
                      ((data) => setEmail(data.target.value),
                      (data) => emailHandler(data))
                    }
                    inputProps={ariaLabel}
                  />
                </td>
              </tr>
              <tr className="errorMessage">
                {emptyEmail && errorEmail && <div>{errorEmail}</div>}
              </tr>
              <tr className="password">
                Пароль
                <div className="errorText">
                  {errorPassword && <div>{errorTextPassword}</div>}
                </div>
              </tr>
              <tr>
                <td className="line_second">
                  <Input
                    style={{ width: "288px", height: "37px" }}
                    value={password}
                    onBlur={(data) => blurHandler(data)}
                    type="password"
                    name="password"
                    id="password"
                    required
                    onChange={
                      ((data) => setPassword(data.target.value),
                      (data) => passHandler(data))
                    }
                    inputProps={ariaLabel}
                  />
                </td>
              </tr>
              <tr className="errorMessageTwo">
                {emptyPassword && errorPassword && <div>{errorPassword}</div>}
              </tr>

              <tr>
                <div className="registration_social_sites">
                  Регистрация через социальные сети
                </div>
              </tr>
              <tr>
                <div className="social_logo">
                  <a href="#">
                    <img src="/image/google.svg" />
                  </a>
                  <a href="#">
                    <img src="/image/facebook.svg" />
                  </a>
                  <a href="#">
                    <img src="/image/vk.svg" />
                  </a>
                  <a href="#">
                    <img src="/image/yandex.svg" />
                  </a>
                </div>
              </tr>

              <button
                className="RegisterBtn"
                id="btn"
                type="submit"
                name="confirmPass"
                disabled={!buttonChange()}
                onClick={postData}
              >
                Зарегистрироваться
              </button>

              <tr>
                <p className="registeredLink">
                  Уже зарегистрированы?
                  <div onClick={Aform}>
                    <b>Войти</b>
                  </div>
                </p>
              </tr>
            </tbody>
          </table>
        </form>
      </Box>
    </div>
  );
}

export default FormEnter;
