import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header() {
    function Aform() {
        window.location = "/Aform";
    }

    return (
        <div className="menu1">
            <a href="#">
                <img className="ru" src="./image/RU.svg"/>
            </a>
            <BurgerMenu></BurgerMenu>
            <img className="logo" src="./image/logoNew.png"/>
            <div className='orderFood' onClick={Aform}>
                <img src="./image/orderFood.png"/>
                Заказать
            </div>
            <div className="enterOne" onClick={Aform}>
            <img src="./image/enterEnter.png"/> Войти
            </div>
        </div>
    );
}

export default Header;
