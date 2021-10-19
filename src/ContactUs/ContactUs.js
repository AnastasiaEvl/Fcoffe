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
      <BasicTextFields />
    </div>
  );
}
export default ContactUs;
