import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { graphcms } from "../GraphQL/Queries";

const useQueryPosts = ({ query }) => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    graphcms
      .request(query, { slug })
      .then((res) => {
        setPosts(res.posts);
        setError(null);
      })
      .catch((error) => {
        setPosts([]);
        setError(error.message);
      });
  }, [query, slug]);
  return { posts, error };
};

export default useQueryPosts;
