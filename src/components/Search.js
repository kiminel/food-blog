import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MagnifyingGlass from "./icons/MagnifyingGlass";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  // The searchBox input is assigned to a value where regex is applied to it
  // The regex expression replaces all (g) and any amount of spaces (s+) with a dash ("-")
  const handleSearch = (searchBox) => {
    searchBox.preventDefault();
    setSearch("");
    const value = search.trim().replace(/\s+/g, "-").toLocaleLowerCase();

    navigate(`/search/${value}`);
  };

  return (
    <form className="w-full md:w-1/2 flex h-10" onSubmit={handleSearch}>
      <input
        className="w-full px-4 rounded-md placeholder:text-dark bg-dark/5 text-fill md:text-dark shadow-md"
        type="search"
        placeholder="Search recipe"
        required
        value={search}
        onChange={(searchBox) => setSearch(searchBox.target.value)}
      />

      <button type="submit">
        <MagnifyingGlass className="h-6 w-6 -ml-10 text-dark" />
      </button>
    </form>
  );
};

export default Search;
