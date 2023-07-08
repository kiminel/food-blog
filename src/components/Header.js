import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { graphcms, QUERY_SLUG_CATEGORIES } from "../GraphQL/Queries";
import Search from "./Search";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    graphcms
      .request(QUERY_SLUG_CATEGORIES)
      .then((res) => setCategories(res.categories));
  }, []);

  return (
    <header className="fixed top-0 z-50 bg-fill w-full h-24 shadow-lg grid grid-cols-5">
      <Link className="col-span-2 flex" to="/">
        <img
          className="w-auto h-24 ml-2"
          src={"/images/SA-flag.png"}
          alt={"South African Food Blog Logo"}
        />
        <div className="text-3xl self-center pl-2">
          <h2 className="font-bold">South African Food Blog</h2>
          <span className="font-style: italic">Eats Lekker! </span>
        </div>
      </Link>

      <div className="col-span-3 flex justify-evenly self-center mr-4 text-xl">
        <label className="fa-solid fa-xmark hidden" />
        <NavLinks categories={categories} />
        <label className="fa-solid fa-bars hidden" />

        <Search />
      </div>
    </header>
  );
};

export default Header;
