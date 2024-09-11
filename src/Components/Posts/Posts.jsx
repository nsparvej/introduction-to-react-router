import { useLoaderData } from "react-router-dom";
import Post from "../post/Post";
import "./Posts.css";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div>
      <h1>Posts: {posts.length} </h1>
      <div className="posts">
        {posts.map((post) => (
          <Post post={post} key={posts.id}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
