import { StaticImageData } from 'next/image';

interface CardData {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
}

export default CardData;
