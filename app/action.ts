"use server";

const fetchAnimeData = async (page: number) => {
  const response = await fetch(
    "https://shikimori.one/api/animes?limit=16&page=" +
      page +
      "&order=popularity&kind=tv&status=ongoing"
  );
  const data = await response.json();
  return data;
};

export default fetchAnimeData;
