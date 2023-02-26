import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Card from './card/Card';
import CardData from './CardData';

import bts from '../public/images/bts.png';
import ecoalf from '../public/images/ecoalf.png';
import gaga from '../public/images/gaga.png';
import selina from '../public/images/selina.png';
import zara from '../public/images/zara.png';

SwiperCore.use([Autoplay, EffectFade]);

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
    url: 'https://www.zara.com',
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
    url: 'ecoalf.com',
  },
];

const swiperOptions = {
  breakpoints: {
    // when window width is >= 0px
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    // when window width is >= 330px
    330: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 1.8,
      spaceBetween: 30,
    },
    // when window width is >= 900px
    900: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: false,
};

function ContainerCard() {
  return (
    <div className="flex flex-wrap justify-center relative">
      <Swiper style={{ position: 'unset' }} {...swiperOptions}>
        <div className="absolute top-40 -right-10 z-40 hidden  sm:block">
          <NextSlide />
        </div>
        <div className="absolute top-40 -left-10 z-40 hidden sm:block">
          <BackSlide />
        </div>
        {data.map((card) => (
          <SwiperSlide key={card.title}>
            <Card {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const BackSlide = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slidePrev()}>Back</button>;
};

const NextSlide = () => {
  const swiper = useSwiper();
  return <button onClick={() => swiper.slideNext()}>Next</button>;
};

export default ContainerCard;
