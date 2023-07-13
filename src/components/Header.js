import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import { graphcms, QUERY_SLUG_CATEGORIES } from "../GraphQL/Queries";
import Search from "./Search";
import HamburgerMenu from "./icons/HamburgerMenu";
import SideBar from "./SideBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    graphcms
      .request(QUERY_SLUG_CATEGORIES)
      .then((res) => setCategories(res.categories));
  }, []);

  return (
    <header className="fixed top-0 z-50 bg-fill w-full h-24 shadow-lg grid grid-cols-2">
      <Link className="col-span-1 flex" to="/">
        <img
          className="w-auto h-24 ml-2"
          src={"/images/SA-flag.png"}
          alt={"South African Food Blog"}
        />
        <div className="sm:text-lg md:text-xl xlg:text-3xl self-center pl-2">
          <h2 className="font-bold">South African Food Blog</h2>
          <span className="font-style: italic">Eats Lekker! </span>
        </div>
      </Link>

      <div className="col-span-1 hidden md:flex justify-evenly self-center text-md lg:text-xl">
        <NavLinks categories={categories} />
      </div>
      <div className=" flex items-center">
        <button
          className="absolute right-12 items-center justify-center mt-2 flex md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HamburgerMenu className={"h-10 w-10"} />
        </button>
        {isOpen ? (
          <SideBar categories={categories} className={"z-40"} />
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
