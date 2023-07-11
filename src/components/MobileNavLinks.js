import React from "react";
import { Link } from "react-router-dom";

const MobileNavLinks = ({ categories }) => {
  return (
    <ul className="absolute top-12 -right-10 bg-elephant bg-cover p-4 rounded-md flex flex-col gap-y-2 text-lg shadow-2xl">
      <Link to="/" className="text-fill font-bold">
        <li className={"outline-nav"}>All</li>
      </Link>

      {categories?.map((category) => (
        <Link
          key={category.slug}
          to={`/category/${category.slug}`}
          className="whitespace-nowrap text-fill font-bold"
        >
          <li className={"outline-nav"}>{category.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MobileNavLinks;
