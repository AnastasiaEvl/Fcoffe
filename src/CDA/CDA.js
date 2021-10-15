import React from "react";
import "../CDA/CDA.css";
import MainPage from "../MainPage/MainPage";

function Cda() {
  function Aform() {
    window.location = "/Aform";
  }

  function MainPage() {
    window.location = "/MainPage";
  }
  return (
    <div className="wrapper2">
      <div className="menu1">
        <img className="burger" src="./image/burgerMenu.svg" />

        <a href="#">
          <img className="ru" src="./image/RU.svg" />
        </a>
        <img className="logo" src="./image/logo.svg" />
        <div className="enter" onClick={Aform}>
          Войти
        </div>
      </div>
      <div className="lineG">
        <img className="GLine" src="/image/GreyLine.png" />
      </div>
      <div className="cdaTitle">
        <div className="headerCDA">
          Пользовательское соглашение о сборе данных
        </div>
      </div>
      <div className="textCDA">
        <div className="innerText">
          Здесь будет размещено пользовательское соглашение о сборе данных
        </div>
      </div>
      <div className="onMain" onClick={MainPage}>
        На главную
      </div>
      <div className="footer">БУДУТ КОРРЕКТИРОВКИ</div>
    </div>
  );
}

export default Cda;
