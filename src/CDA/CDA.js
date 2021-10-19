import React from "react";
import "../CDA/CDA.css";
import "../MainPage/MainPage.css";
import Header from "../MainPage/Header";
import Footer4 from "../CDA/Footer4";
import LineG from "./LineG";

function Cda() {
  function MainPage() {
    window.location = "/MainPage";
  }
  return (
    <div className="wrapper3">
      <Header />
      <LineG />
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
      <Footer4 />
    </div>
  );
}

export default Cda;
