import React from "react";
import "../CDA/CDA.css";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Cda() {
  function Aform() {
    window.location = "/Aform";
  }

  function MainPage() {}
  return (
    <div className="wrapper2">
      <div className="menu1">
        <a href="#">
          <img className="ru" src="./image/RU.svg" />
        </a>
        <BurgerMenu></BurgerMenu>
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
