import React from "react";

function Welcome() {
  function Rform() {
    window.location = "/Rform";
  }
  return (
    <div className="welcome">
      <div className='glass'>
        <span className='welcome_title'>Welcome to FC!</span>
      <div className='welcome_text'>Зарегистрируйтесь в приложении - дарим <span className='color_one'>СКИДКУ</span> на все заказы!</div></div>
</div>
  );
}

export default Welcome;
