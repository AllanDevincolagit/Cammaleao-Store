import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

function Carousel() {
  // Funciona puxando URL https:
  const slides = [
    {
      id: 1,
      image: 'https://static.netshoes.com.br/bnn/l_netshoes/2023-04-06/4171_1922x504-FARM-ADIDAS.png',
      alt: 'Propaganda'
    },
  ];

 // caso eu queria adicionar mais de uma propaganda, ela seta as de mais

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    loop: true,
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  // Funcional
  return (
    <Swiper {...swiperParams}>
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <img src={slide.image} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
