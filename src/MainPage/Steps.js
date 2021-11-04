import React from "react";

function Steps() {
  return (
    <div className="steps">

      <div className='text_crop_one'> <img className='corn' src = './image/corn.png'/><div className='one'>Приложение для заказа кофе онлайн</div></div>
      <div className='text_crop'><img className='corn' src = './image/corn.png'/><div className='one'>Решение для тех, кто не любит ждать</div></div>
      <div className='text_cup_crop'> <img className='cup_corn' src='./image/cup_corn.png'/><div className='two'>
          Ваш любимый кофе без ожиданий, очередей и лишних коммуникаций с бариста </div>
      </div>
      <div className='text_cup_crop'><img className='cup_corn' src='./image/cup_corn.png'/><span className='two'>Широкий список кофеен-партнеров</span></div>
      <div className='text_cup_crop'><img className='cup_corn' src='./image/cup_corn.png'/><span className='two'>Большой ассортимент напитков и десертов</span></div>
      <div className='text_cup_crop'><img className='cup_corn'src='./image/cup_corn.png'/><span className='two'>Настройка кофе под ваши пожелания</span></div>
      <div className='text_cup_crop'><img className='cup_corn' src='./image/cup_corn.png'/><span className='two'>
        Онлайн-оплата банковской картой</span>
      </div>
      <div className='text_cup_crop'><img className='cup_corn' src='./image/cup_corn.png'/><span className='two'>
        Минимизация контактов в условиях пандемии COVID-19</span>
      </div>
    </div>
  );
}
export default Steps;
