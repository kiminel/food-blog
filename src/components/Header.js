import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { graphcms, QUERY_SLUG_CATEGORIES } from "../GraphQL/Queries";
import Search from "./Search";
import HamburgerMenu from "./icons/HamburgerMenu";
import Xmark from "./icons/Xmark";
import MobileNavLinks from "./MobileNavLinks";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    graphcms
      .request(QUERY_SLUG_CATEGORIES)
      .then((res) => setCategories(res.categories));
  }, []);

  return (
    <header className="fixed top-0 z-50 bg-fill w-full h-24 shadow-lg grid grid-cols-3 lg:grid-cols-5">
      <Link className="col-span-2 flex" to="/">
        <img
          className="w-auto h-24 ml-2"
          src={"/images/SA-flag.png"}
          alt={"South African Food Blog Logo"}
        />
        <div className="text-lg lg:text-3xl self-center pl-2">
          <h2 className="font-bold">South African Food Blog</h2>
          <span className="font-style: italic">Eats Lekker! </span>
        </div>
      </Link>

      <div className=" col-span-3 hidden md:flex justify-evenly self-center mr-4 text-xl">
        <NavLinks categories={categories} />

        <Search />
      </div>
      <div className=" flex items-center">
        <button
          className="absolute right-12 items-center justify-center mt-2 flex sm:hidden"
          onClick={handleClick}
        >
          {!isOpen ? (
            <HamburgerMenu className={"h-10 w-10"} />
          ) : (
            <div>
              <Xmark className={"w-10 h-10 dark:text-light"} />
              <MobileNavLinks categories={categories} />
            </div>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
