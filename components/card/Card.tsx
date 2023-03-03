import { useState } from 'react';
import CardData from '../CardData';
import HeartEmpty from '../svg/HeartEmpty';
import HeartFull from '../svg/heartLleno';
import User from '../svg/User';

export default function Card({
  title,
  description,
  image,
  url,
  likesDB,
}: CardData) {
  const [likes, setLikes] = useState(likesDB);
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    setLikes(likes + 1);
    setIsLiked(!isLiked);
  }

  return (
    <article className="article flex flex-col w-[299px] h-[454px] rounded-lg m-3 shadow-md overflow-hidden relative mx-7">
      <div
        className="img bg-cover bg-no-repeat bg-center w-full h-60 rounded-t-lg"
        style={{ backgroundImage: `url(${image.src})` }}
      />

      <i
        className="absolute top-[200px] right-2 cursor-pointer"
        onClick={handleLike}
      >
        {isLiked ? <HeartFull /> : <HeartEmpty />}
      </i>
      <section className="description p-2 pt-0 px-2 relative">
        <div className="title font-bold text-lg w-[215px]">{title}</div>
        <div className="w-[215px] text-sm text-gray-700">{description}</div>
        <div className="page_votos absolute top-36 pb-2">
          <div className="url text-sm text-blue-600">{url}</div>
          <div className="flex gap-1">
            <i>
              <User />
            </i>

            <p>{likesDB}</p>
          </div>
        </div>
      </section>
    </article>
  );
}
