import React from "react";

function Footer5() {
  function Legal() {
    window.location = "/Legal";
  }

  return (
    <div className="footer5">
      <div className="FC">FC</div>
      <a href="#" className="a"></a>
      <div className="CDA">ООО “Фаст Кофе”</div>
      <div className="info">
        <div className="JI1" onClick={Legal}>
          Юридическая информация
        </div>
        <div>Стать партнером</div>

        <div>Связаться с нами</div>

        <div>Оставить отзыв</div>
      </div>
      <div className="allRights">
        <img className="rights" src="image/copy.png" />
        Все права защищены
      </div>
    </div>
  );
}
export default Footer5;
