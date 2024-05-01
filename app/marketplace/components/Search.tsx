"use client";

import { IoIosSearch } from "react-icons/io";

export function Search() {
  return (
    <div className="w-full mt-4 flex gap-2 text-neutral-400 bg-transparent px-4 py-3 rounded-2xl border-neutral-600 border items-center justify-between focus:border-neutral-400 ">
      <input
        type="text"
        placeholder="Search your favourite NFTs"
        className="bg-transparent w-full placeholder-neutral-400 text-sm focus:outline-none"
      />
      <button>
        <IoIosSearch className="text-cyan-50" size={25} />
      </button>
    </div>
  );
}
