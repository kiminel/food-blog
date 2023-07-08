import React from "react";
import { QUERY_POSTS } from "../GraphQL/Queries";
import Posts from "../components/Posts";
import useQueryPosts from "../hooks/useQueryPosts";

const Home = () => {
  const { posts, error } = useQueryPosts({ query: QUERY_POSTS });
  if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default Home;
