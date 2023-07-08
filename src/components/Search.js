import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MagnifyingGlass from "./icons/MagnifyingGlass";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSearch = (searchBox) => {
    searchBox.preventDefault();
    setSearch("");
    const value = search.trim().replace(/\s+/g, "-").toLocaleLowerCase(); //regex to replace space(s) with dash

    navigate(`/search/${value}`);
  };

  return (
    <form className="w-1/2 flex h-10" onSubmit={handleSearch}>
      <input
        className="w-full px-4 rounded-md placeholder:text-dark"
        type="search"
        placeholder="Search recipe"
        required
        value={search}
        onChange={(searchBox) => setSearch(searchBox.target.value)}
      />

      <button type="submit">
        <MagnifyingGlass className="h-6 w-6 -ml-10" />
      </button>
    </form>
  );
};

export default Search;
