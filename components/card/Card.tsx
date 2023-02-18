export default function Card() {
  return (
    <article className="article flex-col bg-green-600 w-56 rounded-lg m-3 ">
      <section className="img  bg-[url('../public/images/cardImg/Rectangle_1.png')] bg-cover bg-no-repeat bg-center w-56 h-60"></section>
      <i>❤</i>
      <section className="description p-2">
        <div className="title">Concierto de lady Gaga</div>
        <div className="description ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga nisi
          mollitia officiis voluptatem.
        </div>
        <div className="url">ladygaga.com</div>
        <div>
          <i>👦</i>
          <p>90'800.756</p>
        </div>
      </section>
    </article>
  );
}
