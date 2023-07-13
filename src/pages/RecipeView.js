import React from "react";
import Comments from "../components/Comments";
import { QUERY_SINGLE_POST } from "../GraphQL/Queries";
import useQueryPosts from "../hooks/useQueryPosts";
import Post from "../components/Post";

const RecipeView = () => {
  const { posts, error } = useQueryPosts({ query: QUERY_SINGLE_POST });
  if (error) return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  return (
    <div className="w-full px-[30px] md:px-[100px] lg:px-[140px] xl:px-[350px]">
      {posts?.map((post) => (
        <div key={post.id}>
          <Post post={post} />
          <Comments comments={post.comments} />
        </div>
      ))}
    </div>
  );
};

export default RecipeView;
