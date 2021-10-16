import React from "react";
import "../CDA/CDA.css";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Cda() {
  function Aform() {
    window.location = "/Aform";
  }
  function Legal() {
    window.location = "/Legal";
  }

  function MainPage() {
    window.location = "/MainPage";
  }
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
      <div className="onMain2">
        <div className="onMain1" onClick={MainPage}>
          На главную
        </div>
      </div>

      <div className="footers4">
        <div className="FC">FC</div>
        <a href="#" className="a"></a>
        <div className="CDA">ООО “Фаст Кофе”</div>
        <div className="info">
          <div className="JI1" onClick={Legal}>
            Юридическая информация
          </div>
          <div>Стать партнером</div>

          <div>Связаться с нами</div>

          <div>Оставить отзыв</div>
        </div>
        <div className="allRights">
          <img className="rights" src="image/copy.png" />
          Все права защищены
        </div>
      </div>
    </div>
  );
}

export default Cda;
