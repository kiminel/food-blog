import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <div className="w-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-4 mb-16">
      {posts.map((post) => (
        <div
          className="max-h-[650px] col-span-1 shadow-xl rounded-xl pb-4 transform hover:scale-105 transition duration-500 ease-in-out"
          key={post.id}
        >
          <Link to={`/recipe/${post.slug}`} className="rounded-t-xl">
            <img
              src={post.coverPhoto.url}
              alt={"Recipe"}
              className="hover:contrast-125 duration-500 rounded-t-xl object-cover w-full max-h-[275px]"
            />

            <div className="p-4 flex justify-center text-center">
              <h2 className="text-2xl font-bold hover:underline">
                {post.title}
              </h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
