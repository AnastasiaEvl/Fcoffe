import React, { useState } from "react";
import "./BurgerManu.css";
import Menu from "./Menu/Menu";

const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "О нас", href: "/main" },
    { value: "Наши партнеры", href: "/main3" },
    { value: "Акционные предложения", href: "/main4" },
    { value: "Отзывы о нас", href: "/main4" },
    { value: "Юридическая информация", href: "/Legal" },
    { value: "Связаться с нами", href: "/main4" },
  ];
  return (
    <div className="burger">
      <nav>
        <div className="burger_btn" onClick={() => setMenuActive(!menuActive)}>
          <img className="bur" src="/image/bur.png.png" />
          <span />
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
    </div>
  );
};

export default BurgerMenu;
