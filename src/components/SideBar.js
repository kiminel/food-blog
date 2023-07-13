import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Xmark from "./icons/Xmark";

const SideBar = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-white top-0 right-0 w-[70vw] text-white fixed h-full grid shadow-2xl ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="row-span-1 h-[180px] flex flex-col justify-center p-2 px-6 space-y-4">
        <button
          className="rounded-full p-1 flex self-center shadow-md text-dark/60 bg-dark/5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Xmark className={"w-12 h-12"} />
        </button>

        <Search onClick={() => setIsOpen(!isOpen)} />
      </div>

      <div className="row-span-1 flex justify-center text-center">
        <ul className="flex flex-col space-y-4">
          <Link
            to="/"
            className="text-fill font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            <li className={"outline-nav"}>All</li>
          </Link>

          {categories?.map((category) => (
            <Link
              key={category.slug}
              to={`/category/${category.slug}`}
              className="whitespace-nowrap text-fill font-bold"
              onClick={() => setIsOpen(!isOpen)}
            >
              <li className={"outline-nav"}>{category.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="row-span-1 flex w-full">
        <img
          src="/images/Elephant.png"
          className="w-full h-auto object-contain object-bottom"
          alt="African Elephant"
        />
      </div>
    </div>
  );
};

export default SideBar;
