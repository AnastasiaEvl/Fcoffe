import "./MainPage.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function MainPage() {
  function Aform() {
    window.location = "/Aform";
  }

  function Rform() {
    window.location = "/Rform";
  }

  return (
    <div className="wrapper2">
      <div className="menu1">
        <a href="#">
          <img className="ru" src="./image/RU.svg" />
        </a>
        <BurgerMenu></BurgerMenu>
        <img className="logo" src="./image/logo.svg" />
        <div className="enter" onClick={Aform}>
          Войти
        </div>
      </div>

      <div className="mainpicture">
        <img className="mainpic" src="./image/banner1.png" />
      </div>
      <div className="steps">
        <img className="coffeeFone" src="image/coffeFone.svg" />
        <img className="line" src="image/pinkLine.svg" />
        <img className="logo1" src="image/logo.svg" />
        <img className="clocks" src="/image/clock.svg" />
        <img className="list" src="/image/list.png" />
        <img className="kindOfGoods" src="/image/KindOfGoods.svg" />
        <img className="cup" src="/image/cup.svg" />
        <img className="bank" src="/image/banks.png" />
        <img className="heart" src="/image/heart.svg" />
        <img className="V" src="/image/V.svg" />
        <img className="V2" src="/image/V.svg" />
        <div className="text1">Приложение для заказа кофе онлайн</div>
        <div className="text2">Решение для тех, кто не любит ждать</div>
        <div className="text3">
          ваш любимый кофе без ожиданий, очередей и лишних коммуникаций с
          бариста
        </div>
        <div className="text4">широкий список кофеен-партнеров</div>
        <div className="text5">большой ассортимент напитков и десертов</div>
        <div className="text6">настройка кофе под ваши пожелания</div>
        <div className="text7">
          онлайн-оплата с сипользованием банковской карты
        </div>
        <div className="text8">
          сохранение здоровья\минимизация контактов в условиях пандемии COVID-19
        </div>
      </div>
      <div className="counter">
        <div className="partners">НАШИ ПАРТНЕРЫ</div>
        <div>
          <img className="logoPartners" src="/image/partners.png" />
          партнеров
        </div>
        <div>
          <img className="coffeePartners" src="/image/coffeePartners.svg" />
          кофеен
        </div>

        <img className="hotfix" src="image/hotfix.svg" />
        <img className="yumy" src="image/yumy.svg" />
        <img className="guru" src="image/Guru.svg" />
        <img className="cofix" src="image/cofix.svg" />
        <img className="cofeSound" src="image/coffeeSaund.svg" />
        <img className="stantion" src="image/Stancya.svg" />
        <img className="zerno" src="image/Zerno.svg" />
        <img className="lavaza" src="image/lavazza.svg" />
      </div>
      <div className="Sale">
        <div className="sales">АКЦИОННЫЕ ПРЕДЛОЖЕНИЯ</div>

        <Carousel>
          <Carousel.Item interval={1000}>
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

      <div className="welcome">
        <div className="textWelcome">Welcome to FC!</div>
        <div className="registered">
          Зарегистрируйтесь в приложении - дарим <b>СКИДКУ</b> на все заказы и
          кое-что еще ;)
        </div>
        <img className="funCup" src="/image/funCUP.png"></img>
        <div className="regButton" onClick={Rform}>
          Зарегистрироваться
        </div>
      </div>
      <div className="numbers">
        <img className="man" src="/image/man.png" />
        <img className="smallCup" src="/image/smallCup.png" />
        <div className="number1">163</div>
        <div className="number2">856</div>
        <div className="users">
          <p className="highLetters">ПОЛЬЗОВАТЕЛЕЙ</p> системы
        </div>
        <div className="numberCoffee">
          <p className="highLetters">КРУЖЕК</p> кофе заказано
        </div>
      </div>
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
      <div className="footer">
        <div className="FC">FC</div>
        <a href="#" className="a">
          <div className="mailAdress">
            <img className="letter" src="image/mail.png" />
            hello@fastcoffee.com
          </div>
        </a>
        <div className="CDA">
          ООО “Фаст Кофе” Свидетельство о регистрации номер 123456789 Выдано
          Минским горисполкомом Дата выдачи 20.09.2021 УНП 123456789 220034, г.
          Минск, пл. Сободы, 17
          <a href="#" className="a">
            <div className="userCDA">Пользовательское соглашение</div>
          </a>
        </div>
        <div className="info">
          Юридическая информация
          <br /> Стать партнером
          <br />
          Связаться с нами
          <br />
          Оставить отзыв
        </div>
        <div className="allRights">
          <img className="rights" src="image/copy.png" />
          Все права защищены
        </div>
      </div>
    </div>
  );
}

export default MainPage;
