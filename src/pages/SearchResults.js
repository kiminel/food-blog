import React from "react";
import { QUERY_SEARCH_POSTS } from "../GraphQL/Queries";
import Posts from "../components/Posts";
import useQueryPosts from "../hooks/useQueryPosts";
import { Link } from "react-router-dom";
import Xmark from "../components/icons/Xmark";

const SearchResults = () => {
  const { posts, error } = useQueryPosts({ query: QUERY_SEARCH_POSTS });
  if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  return (
    <div>
      <Link to={"/"}>
        <Xmark className="h-10 w-10 absolute right-0 mr-12 -mt-2" />
      </Link>
      <Posts posts={posts} />
    </div>
  );
};

export default SearchResults;
