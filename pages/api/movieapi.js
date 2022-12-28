// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const APIKEY = process.env.NEXT_PUBLIC_APP_APIKEY;
const API_KEY = process.env.NEXT_PUBLIC_APP_API_KEY;
const URL = process.env.NEXT_PUBLIC_APP_URL;

export const getMovieList = async () => {
  const movie = await axios.get(`${URL}/movie/upcoming?api_key=${APIKEY}`);
  return movie.data.results;
};

const searchMovies = async (searchkey) => {
  const search = await axios.get(searchkey);
};
