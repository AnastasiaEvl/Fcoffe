import React from "react";

function Footer3() {
    function Legal() {
        window.location = "/Legal";
    }

    return (
        <div className="footer3">
            <div className="FC">FastCoffee</div>
            <a href="#" className="a"></a>
            <div className="CDA">ООО “Фаст Кофе”</div>
            <div className="info">
                <div className="JI" onClick={Legal}>
                    Юридическая информация
                </div>
                <div>Стать партнером</div>

                <div>Связаться с нами</div>

                <div>Оставить отзыв</div>
            </div>
            <div className="allRights">
                <img className="rights" src="image/copy.png"/>
                Все права защищены
            </div>
        </div>
    );
}

export default Footer3;
