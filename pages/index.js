import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { getMovieList } from "./api/movieapi";
export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const APIIMAGE = process.env.NEXT_PUBLIC_APP_IMAGESRC;

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  console.log({ popularMovies: popularMovies });

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <>
          <div key={i}>
            <div className="bg-teal-500 w-96 p-2 rounded-xl gap-8 mb-5">
              <div className="text-lg font-bold font-fira p-2 mt-auto">
                {movie.title}
              </div>
              <img
                alt=""
                className="rounded-lg"
                src={`${APIIMAGE}/${movie.poster_path}`}
              />
              <div className="">Release date : {movie.release_date}</div>
              <div className="hover:font-bold">
                Rating : {movie.vote_average}
              </div>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <Layout>
        <div className="w-screen text-center items-center flex flex-col gap-10">
          <h1 className="mt-auto p-2 text-5xl font-bold text-slate-700">
            Populer Film Saat Ini
          </h1>
          <div className="flex flex-wrap w-full justify-center gap-8">
            <PopularMovieList />
          </div>
        </div>
      </Layout>
    </>
  );
}
