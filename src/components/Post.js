import React from "react";
import { Link } from "react-router-dom";
import Xmark from "./icons/Xmark";

const Post = ({ post }) => {
  const generatePostContent = (section) => {
    return (
      <div className="content" dangerouslySetInnerHTML={{ __html: section }} />
    );
  };

  return (
    <article className="w-full py-8 mt-4">
      <div className="shadow-lg rounded-xl opacity-0.2 z-10">
        <div className="pt-4 pb-4 px-4 mt-4 flex justify-between">
          <div className="flex justify-center w-full">
            <h2 className="text-3xl font-extrabold text-center pr-4 ">
              {post.title}
            </h2>
          </div>

          <div className="px-4 flex justify-end">
            <Link to={"/"}>
              <Xmark className="h-8 w-8 transform hover:scale-150 transition duration-500 ease-in-out rounded-md" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="">
            <img
              className="object-cover w-full max-h-[600px]"
              src={post.coverPhoto.url}
              alt="Cover"
            />
          </div>
          <span className="text-xs md:text-md lg:text-lg absolute right-0 bottom-0 p-2 mr-1 mb-1 bg-fill rounded-lg opacity-[40%] hover:opacity-75 transition duration-200 ease-in-out">
            {generatePostContent(post.cookingDetails.html)}
          </span>
        </div>

        <div className="py-4 px-4">
          <h2 className="text-xl pb-2 font-extrabold">Description</h2>
          <div className="text-md">{generatePostContent(post.description)}</div>
        </div>

        <div className="py-4 px-4">
          <h2 className="text-xl pb-2 font-extrabold">Ingredients</h2>
          <div className="text-md">
            {generatePostContent(post.ingredients.html)}
          </div>
        </div>

        <div className="py-4 px-4">
          <h2 className="text-xl pb-2 font-extrabold">Directions</h2>
          <div className="">{generatePostContent(post.directions.html)}</div>
        </div>

        <div className="grid grid-cols-2 w-full">
          <div className="flex">
            <img
              className="max-h-[350px] object-cover w-full border-r border-fill"
              src={post.dishPicture.url}
              alt="Dish"
            />
          </div>
          <div className="flex">
            <img
              className="max-h-[350px] object-cover w-full"
              src={post.decorationPicture.url}
              alt="Decorative Dish"
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;
