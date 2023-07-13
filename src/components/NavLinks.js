import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ categories }) => {
  return (
    <ul className="flex gap-x-8 self-center">
      <Link
        to="/"
        className="transform hover:scale-150 transition duration-500 ease-in-out"
      >
        <li>All</li>
      </Link>

      {categories?.map((category) => (
        <Link
          key={category.slug}
          to={`/category/${category.slug}`}
          className="transform hover:scale-125 transition duration-500 ease-in-out rounded-md"
        >
          <li>{category.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default NavLinks;
