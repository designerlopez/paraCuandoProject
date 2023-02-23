import { useState } from 'react';
import CardData from '../CardData';

function Card({ title, description, image, url }: CardData) {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <article className="article flex-col bg-green-600 w-[299px] h-[454px] rounded-lg m-3 overflow-hidden relative">
      <section
        className="img bg-cover bg-no-repeat bg-center w-full h-60 rounded-t-lg"
        style={{ backgroundImage: `url(${image})` }}
      ></section>
      <i className="absolute right-6 bottom-52" onClick={handleLike}>
        ❤ {likes}
      </i>
      <section className="description p-2 pt-0 px-2">
        <div className="title font-bold text-lg">{title}</div>
        <div className="w-[254px] h-[72px] text-sm text-gray-700">
          {description}
        </div>
        <div className="url text-sm text-blue-600">{url}</div>
        <div>
          <i>👦</i>
          <p>90.800.756</p>
        </div>
      </section>
    </article>
  );
}

export default Card;
