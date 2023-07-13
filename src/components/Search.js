import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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

  //Find location of the About page and hide SearchBar component
  let location = useLocation();
  if (location.pathname.match("/about")) {
    return null;
  }

  return (
    <form
      className="w-full flex justify-center h-10 mt-28 px-4"
      onSubmit={handleSearch}
    >
      <input
        className="w-full px-4 rounded-md placeholder:text-dark bg-white text-dark shadow-md"
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
