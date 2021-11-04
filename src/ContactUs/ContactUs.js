import React from "react";
import Header from "../MainPage/Header";
import LineG from "../CDA/LineG";
import "../ContactUs/ContactUs.css";
import BasicTextFields from "./Form";

function ContactUs() {
  return (
    <div className="wrapper2">
      <Header />
      <LineG />
      <div className="titleOfContact">
        <img className="Letter" src="./image/Letter.png" />
        <div className="InnerTitle">связаться с нами</div>

      </div>
        <div className="inputs_contact">
            <div className="your_name">Ваше имя</div>
            <input className="input_one" type='text'/>

        </div>
        <img className="line_g" src="./image/line_g.png"/>
        <div className="inputs_contact2">
            <div className="your_name2">E-mail</div>
            <input className="input_two" type='email'/>
        </div>

    </div>
  );
}
export default ContactUs;
