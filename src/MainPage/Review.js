import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Review() {
  return (
    <div className="reviews">
      <div className="Rev">ОТЗЫВЫ О НАС И НАШИХ ПАРТНЕРАХ</div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="second" src="image/about.png" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="second" src="image/yumy.svg" alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="second" src="image/cofix.svg" alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <a href="#" className="a">
        <div className="allR">Все отзывы</div>
      </a>
      <a href="#" className="a">
        <div className="order">Разместить заказ</div>
      </a>
    </div>
  );
}
export default Review;
