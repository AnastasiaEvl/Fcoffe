import React from "react";

function Welcome() {
  function Rform() {
    window.location = "/Rform";
  }
  return (
    <div className="welcome">
      <div className="textWelcome">Welcome to FC!</div>
      <div className="registered">
        Зарегистрируйтесь в приложении - дарим <b>СКИДКУ</b> на все заказы и
        кое-что еще ;)
      </div>
      <img className="funCup" src="/image/funCUP.png"></img>
      <div className="regButton" onClick={Rform}>
        Зарегистрироваться
      </div>
    </div>
  );
}

export default Welcome;
