import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
export default function Headers() {
  const search = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <nav className="p-10 bg-blue-300 flex justify-between items-center text-center">
        <ul className="flex justify-between gap-10">
          <Link className="text-md hover:font-extrabold font-fira" href="">
            Cari Pilem
          </Link>
          <Link href="" className="text-md hover:font-extrabold font-fira">
            Home
          </Link>
          <Link href="" className="text-md hover:font-extrabold font-fira">
            About Me
          </Link>
        </ul>
        <div>
          <form className="flex flex-row justify-center gap-4" action="">
            <input
              size={25}
              onChange={({ target }) => search(target.value)}
              className="rounded-xl py-2 px-3 outline-none"
              type="text"
              placeholder="Cari film yang ingin dicari ...."
            />
            <button className="items-center">
              <FiSearch size={25} />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}
