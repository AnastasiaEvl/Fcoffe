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
            <img className="logo" src="./image/logo.svg"/>
            <div className="enter" onClick={Aform}>
                Войти
            </div>
        </div>
    );
}

export default Header;
