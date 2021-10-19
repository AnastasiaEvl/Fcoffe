import React from "react";
import "./Legal.css";
import "../MainPage/MainPage.css";
import Header from "../MainPage/Header";
import LineG from "../CDA/LineG";
import Footer5 from "./Footer5";

function Legal() {
  function CDA() {
    window.location = "/CDA";
  }

  function MainPage() {
    window.location = "/MainPage";
  }

  return (
    <div className="wrapper2">
      <Header />
      <LineG />
      <div className="titleLegal">
        <img className="logoI" src="image/logoI.png" />
        <div className="textLegal">юридическая информация</div>
      </div>
      <div className="OOO">
        <div className="titleO">ООО “Фаст Кофе”</div>
        <div className="legalAdress">
          Свидетельство о регистрации номер 123456789 Выдано Минским
          горисполкомом Дата выдачи 20.09.2021 УНП 123456789 Юридический и
          почтовый адрес: 220034, г. Минск, пл. Сободы, 17
        </div>

        <a href="#" className="a">
          <div className="legalEmails">
            <img className="letters" src="image/mail2.png" />
            hello@fastcoffee.com
          </div>
        </a>
        <div className="CdaLink" onClick={CDA}>
          Пользовательское соглашение о сборе данных
        </div>
        <div className="onMain1" onClick={MainPage}>
          На главную
        </div>
      </div>
      <Footer5 />
    </div>
  );
}

export default Legal;
