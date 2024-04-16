'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    router.push(`/search/${search}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between px-5 max-w-7xl mx-auto">
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search a movie..."
        className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
      />
      <button className="text-amber-600" disabled={search === ''}>
        Search
      </button>
    </form>
  );
};

export default SearchBox;
