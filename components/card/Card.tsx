export default function Card() {
  return (
    <article className="article flex-col bg-green-600 w-[299px] h-[454px] rounded-lg m-3 overflow-hidden relative">
      <section className="img bg-[url('../public/images/cardImg/Rectangle_1.png')] bg-cover bg-no-repeat bg-center w-full h-60 rounded-t-lg"></section>
      <i className="absolute right-6 bottom-52">❤</i>
      <section className="description p-2 pt-0 px-2">
        <div className="title  font-bold text-lg ">Concierto de Lady Gaga</div>
        <div className="w-[254px] h-[72px] text-sm text-gray-700  ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi
          mollitia officiis voluptatem.
        </div>
        <div className="url text-sm text-blue-600">ladygaga.com</div>
        <div>
          <i>👦</i>
          <p>90.800.756</p>
        </div>
      </section>
    </article>
  );
}
