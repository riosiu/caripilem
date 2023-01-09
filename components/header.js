import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
export default function Headers() {
  return (
    <>
      <nav className="p-10 bg-blue-300 flex justify-center items-center text-center">
        <ul className="flex justify-between gap-10">
          <h1>Cari Pilem</h1>
        </ul>
      </nav>
    </>
  );
}
