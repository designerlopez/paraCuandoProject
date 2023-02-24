import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './card/Card';
import CardData from './CardData';
import React, { useRef } from 'react';

import bts from '../public/images/bts.png';
import ecoalf from '../public/images/ecoalf.png';
import gaga from '../public/images/gaga.png';
import selina from '../public/images/selina.png';
import zara from '../public/images/zara.png';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const data: CardData[] = [
  {
    title: 'Concierto de Lady Gaga',
    description: 'El concierto con la temática de Lady Gaga en las Vegas',
    image: gaga,
    url: 'ladygaga.com',
  },
  {
    title: 'Tienda de ropa femenina ZARA',
    description: 'Tienda de ropa',
    image: zara,
    url: 'https://www.example.com',
  },
  {
    title: 'Concierto de BTS',
    description: 'Grupo musical coreano',
    image: bts,
    url: 'bts.com',
  },

  {
    title: 'Hotel de Selina',
    description: 'Hotel que te permite hospedarte, trabajar, y comer',
    image: selina,
    url: 'selina.com',
  },

  {
    title: 'Marca Ecoalf',
    description:
      'Marca española de prendas y accesorios, elaborando  como materia prima, diversos tipos de desechos',
    image: ecoalf,
    url: 'selina.com',
  },
];

const swiperOptions = {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: false,
};

function ContainerCard() {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handlePrevSlide = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };
  
  
   return (
    <div className="relative">
      <div className="swiper-button-prev" onClick={handlePrevSlide}>
        &#60;
      </div>
      <div className="swiper-button-next" onClick={handleNextSlide}>
        &#62;
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        autoplay={{ delay: 3000 }}
        loop={true}
        ref={swiperRef}
      >
        {data.map((card) => (
          <SwiperSlide key={card.title}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ContainerCard;







export default ContainerCard;
