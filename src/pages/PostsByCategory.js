import React from "react";
import { QUERY_POSTS_BY_CATEGORY } from "../GraphQL/Queries";
import Posts from "../components/Posts";
import useQueryPosts from "../hooks/useQueryPosts";

const PostsByCategory = () => {
  const { posts, error } = useQueryPosts({ query: QUERY_POSTS_BY_CATEGORY });
  if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  return (
    <>
      <Posts posts={posts} />
    </>
  );
};

export default PostsByCategory;
