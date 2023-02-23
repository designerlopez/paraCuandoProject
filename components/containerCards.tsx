import SwiperCore, { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './card/Card';
import CardData from './CardData';

import bts from '../public/images/bts.png';
import gaga from '../public/images/gaga.png';
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
    description: 'Description 2',
    image: zara,
    url: 'https://www.example.com',
  },
  {
    title: 'Title 3',
    description: 'Description 3',
    image: bts,
    url: 'https://www.example.com',
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
  return (
    <div className="flex flex-wrap justify-center">
      <Swiper slidesPerView={data.length} spaceBetween={1}>
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
