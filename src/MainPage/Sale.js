import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Sale() {

    function Aform(){
        window.location='/Aform'
    }
  return (
    <div className="Sale">

            <div className='btn_become_partner'>Стать партнером</div>

      <div className="sales">АКЦИОННЫЕ ПРЕДЛОЖЕНИЯ</div>

      <Carousel style={{width: "100%", height: "auto"}}>
        <Carousel.Item  interval={1500}>
          <img className="first" src="image/sale_zero.png" />
          <Carousel.Caption/>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="first" src="image/sales_one.png" alt="Second slide" />
          <Carousel.Caption/>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img className="first" src="image/sales_two.png" alt="Third slide" />
          <Carousel.Caption/>
        </Carousel.Item>
          <Carousel.Item interval={1500}>
              <img className="first" src="image/sales_three.png" alt="Third slide" />
              <Carousel.Caption/>
          </Carousel.Item>
      </Carousel>
      <a href="#" className="a">
        <div className="proposal">Все предложения</div>
      </a>

            <div className="make_offer" onClick={Aform}>Разместить заказ</div>

    </div>
  );
}
export default Sale;
