"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

const fetchAnimeData = async (page: number) => {
  const response = await fetch(
    "https://shikimori.one/api/animes?limit=8&page=" +
      page +
      "&order=popularity&kind=tv&status=ongoing"
  );
  const data = await response.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export default fetchAnimeData;
