import React, { useState } from "react";
import "./BurgerManu.css";
import Menu from "./Menu/Menu";
import MainPage from "../MainPage/MainPage";

const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "О нас", href: "/main" },
    { value: "Вход", href: "/Aform" },
    { value: "Наши партнеры", href: "/main3" },
    { value: "Акционные предложения", href: "/main4" },
    { value: "Отзывы о нас", href: "/main4" },
    { value: "Юридическая информация", href: "/main4" },
    { value: "Контактные данные", href: "/main4" },
    { value: "Стать партнером", href: "/main4" },
    { value: "Связаться с нами", href: "/main4" },
    { value: "Оставить отзыв", href: "/main4" },
  ];
  return (
    <div className="burger">
      <nav>
        <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>
          <img className="bur" src="/image/burgerMenu.svg" />
          <span />
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
    </div>
  );
};

export default BurgerMenu;
