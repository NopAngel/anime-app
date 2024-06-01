import React from "react";

function HeroMain() {
  return (
    <main className="flex justify-center items-center h-[80vh] lg:flex-row flex-col bg-[url('../public/image/hero.png')] bg-cover bg-no-repeat">
      <section>
        <h1 className="text-6xl font-bold max-w-[800px]">
          Explora el mundo y las aventuras{" "}
          <span className="text-red-500">De los Animes</span>
        </h1>
      </section>
      <section>
        <img
          src={`/image/anime.png`}
          className="w-[500px]"
          alt="Lo-ffi Retrato"
        />
      </section>
    </main>
  );
}

export default HeroMain;
