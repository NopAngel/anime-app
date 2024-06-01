import AnimeCard from "@/components/AnimeCard";
import HeroMain from "@/components/HeroMain";
import { fetchAnime } from "@/components/actions";
import { motion } from "framer-motion";

import Image from "next/image";

async function Home() {
  const data = await fetchAnime(1);
  const data1 = await fetchAnime(2);
  const data2 = await fetchAnime(3);
  console.log(data);
  return (
    <main>
      <HeroMain />
      <section className="text-center mt-[6px]">
        <h1 className="text-2xl p-[6px] font-semibold">Explora Animes.</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:w-[900px] w-full text-center gap-5 mx-auto">
          {data.map((item, index) => (
            <AnimeCard
              Title={item.name}
              Image={`https://www.shikimori.one/${item.image.original}`}
              IdCard={item.id}
              Tag={item.kind}
            />
          ))}

          {data2.map((item, index) => (
            <AnimeCard
              Title={item.name}
              Image={`https://www.shikimori.one/${item.image.original}`}
              IdCard={item.id}
              Tag={item.kind}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
