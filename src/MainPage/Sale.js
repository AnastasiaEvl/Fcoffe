import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Sale() {
  return (
    <div className="Sale">
      <div className="sales">АКЦИОННЫЕ ПРЕДЛОЖЕНИЯ</div>

      <Carousel>
        <Carousel.Item className="carousel" interval={1000}>
          <img className="first" src="image/sales.png" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="first" src="image/yumy.svg" alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="first" src="image/cofix.svg" alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <a href="#" className="a">
        <div className="proposal">Все предложения</div>
      </a>
    </div>
  );
}
export default Sale;
