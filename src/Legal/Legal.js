import React from "react";
import "./Legal.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Legal() {
    function Aform() {
        window.location = "/Aform";
    }

    function CDA() {
        window.location = "/CDA";
    }

    function MainPage() {
        window.location = "/MainPage";
    }

    return (
        <div className="wrapper2">
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
            <div className="lineG">
                <img className="GLine" src="/image/GreyLine.png"/>
            </div>
            <div className="titleLegal">
                <img className="logoI" src="image/logoI.png"/>
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
                        <img className="letters" src="image/mail2.png"/>
                        hello@fastcoffee.com
                    </div>
                </a>
                <div className="CdaLink" onClick={CDA}>
                    Пользовательское соглашение о сборе данных
                </div>
                <div className="onMain" onClick={MainPage}>
                    На главную
                </div>
            </div>
            <div className="footers">
                <div className="FC">FC</div>
                <div className="FastCoffe">ООО "Фаст Кофе"</div>
                <div className="LastInf">
                    Юридическая информация Стать партнером Связаться с нами Оставить отзыв
                </div>
            </div>
        </div>
    );
}

export default Legal;
