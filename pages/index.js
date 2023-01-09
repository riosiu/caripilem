import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import { getMovieList, searchMovies } from "./api/movieapi";
import { FiSearch } from "react-icons/fi";

export default function PopularScreen() {
  const [popularMovies, setPopularMovies] = useState([]);
  const APIIMAGE = process.env.NEXT_PUBLIC_APP_IMAGESRC;

  useEffect(() => {
    try {
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    } catch {
      console.log("error");
    }
  }, []);

  const search = async (q) => {
    const querySearch = await searchMovies(q);
    if (q.length > 3) {
      setPopularMovies(querySearch.results);
    }
  };

  // console.log({ popularMovies: popularMovies });

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      const imageApi = ({ src }) => {
        return `${APIIMAGE}/${movie.poster_path}`;
      };
      return (
        <>
          <div key={i}>
            <div className="bg-teal-500 w-96 p-2 rounded-xl gap-8 mb-5">
              <div className="text-lg font-bold font-fira p-2 mt-auto">
                {movie.title}
              </div>
              <Image
                width={400}
                height={400}
                alt=""
                className="rounded-lg"
                loader={imageApi}
                src={`${APIIMAGE}/${movie.poster_path}`}
              />
              <p className="">Release date : {movie.release_date}</p>
              <p className=""> Genres : {movie.video}</p>
              <p className="hover:font-bold">
                Rating ⭐ : {movie.vote_average}
              </p>
            </div>
          </div>
        </>
      );
    });
  };

  return (
    <>
      <Layout title="Popular Movie Now  ">
        <div className="w-screen text-center items-center flex flex-col gap-10">
          <h1 className="mt-auto p-2 text-5xl font-bold text-slate-700">
            Populer Film Saat Ini
          </h1>
          <div className="p-10 ">
            <form className="flex flex-row justify-center gap-4" action="">
              <input
                onChange={({ target }) => search(target.value)}
                size={25}
                className="placeholder:text-white bg-teal-400   rounded-xl py-2 px-3 outline-none"
                type="text"
                placeholder="Cari film yang ingin dicari ...."
              />
              <button className="items-center ">
                <FiSearch size={25} />
              </button>
            </form>
          </div>
          <div className="flex flex-wrap w-full justify-center gap-8">
            <PopularMovieList />
          </div>
        </div>
      </Layout>
    </>
  );
}
