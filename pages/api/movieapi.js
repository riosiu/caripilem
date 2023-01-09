// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const APIKEY = process.env.NEXT_PUBLIC_APP_APIKEY;
const API_KEY = process.env.NEXT_PUBLIC_APP_API_KEY;
const URL = process.env.NEXT_PUBLIC_APP_URL;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${URL}/movie/upcoming?page=1&api_key=${APIKEY}`
  );
  console.log({ movie: movie });
  return movie.data.results;
};

export const searchMovies = async (q) => {
  const search = await axios.get(
    `${URL}/search/movie?query=${q}&page=1&api_key=${APIKEY}`
  );
  return search.data;
};
