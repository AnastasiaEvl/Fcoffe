import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Review() {
    function Aform(){
        window.location='/Aform'
    }
  return (
    <div className="reviews">
      <div className="Rev">ОТЗЫВЫ О НАС И НАШИХ ПАРТНЕРАХ</div>
      <Carousel className='car'>
        <Carousel.Item interval={1000}>
          <img className="second" src="image/about.png" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="second" src="image/about_two.png" alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="second" src="image/about_three.png" alt="Third slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
              <img className="second" src="image/about_four.png" alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img className="second" src="image/about_five.png" alt="Third slide" />
              <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <a href="#" className="a">
        <div className="allR">Все отзывы</div>
      </a>
          <button onClick={Aform} className="order">Разместить заказ</button>

    </div>
  );
}
export default Review;
