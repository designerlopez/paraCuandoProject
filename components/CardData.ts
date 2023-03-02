import { StaticImageData } from 'next/image';

interface CardData {
  title: string;
  description: string;
  image: StaticImageData;
  url: string;
  likesDB: number;
}

export default CardData;
