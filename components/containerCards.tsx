import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Card from './card/Card';
import CardData from './CardData';

import Next from '../components/svg/Flecha';
import bts from '../public/images/bts.png';
import ecoalf from '../public/images/ecoalf.png';
import gaga from '../public/images/gaga.png';
import lol from '../public/images/lol.png';
import selina from '../public/images/selina.png';
import zara from '../public/images/zara.png';

SwiperCore.use([Autoplay, EffectFade]);

const data: CardData[] = [
  {
    title: 'Concierto de Lady Gaga',
    description: 'El concierto con la temática de Lady Gaga en las Vegas',
    image: gaga,
    url: 'ladygaga.com',
    likesDB: 945.555,
  },
  {
    title: 'Tienda de ropa femenina ZARA',
    description: 'Tienda de ropa',
    image: zara,
    url: 'https://www.zara.com',
    likesDB: 305.0,
  },
  {
    title: 'Concierto de BTS',
    description: 'Grupo musical coreano',
    image: bts,
    url: 'bts.com',
    likesDB: 850512,
  },

  {
    title: 'Hotel de Selina',
    description: 'Hotel que te permite hospedarte, trabajar, y comer',
    image: selina,
    url: 'selina.com',
    likesDB: 850533,
  },

  {
    title: 'Marca Ecoalf',
    description:
      'Marca española de prendas y accesorios, elaborando  como materia prima, diversos tipos de desechos',
    image: ecoalf,
    url: 'ecoalf.com',
    likesDB: 945.0,
  },

  {
    title: 'League of Legends',
    description: 'Campeonato de League of Legends 2025',
    image: lol,
    url: 'leagueoflegends.com',
    likesDB: 985.555,
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
      spaceBetween: 20,
    },
    // when window width is >= 600px
    700: {},
    // when window width is >= 900px
    900: {},
    // when window width is >= 1200px
    1285: {
      spaceBetween: 20,
    },
    // when window width is >= 1300px
    1300: {
      slidesPerView: 4.2,
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
        <div className="absolute top-40 -right-28 z-40 hidden  sm:block">
          <NextSlide />
        </div>
        <div className="absolute top-40 -left-20 z-40 hidden sm:block rotate-180">
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
  return (
    <button onClick={() => swiper.slidePrev()}>
      <Next />
    </button>
  );
};

const NextSlide = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()}>
      <Next />
    </button>
  );
};

export default ContainerCard;
