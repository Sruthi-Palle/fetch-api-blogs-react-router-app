import BlogItem from "../BlogItem";
import { useState, useEffect } from "react";
import "./index.css";

const BlogsList = () => {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    return async () => {
      const response = await fetch("https://apis.ccbp.in/blogs");
      console.log(response);
      const data = await response.json();
      console.log(data);
      const updatedData = data.map((each) => ({
        id: each.id,
        title: each.title,
        imageUrl: each.image_url,
        avatarUrl: each.avatar_url,
        author: each.author,
        topic: each.topic,
      }));
      setBlogsData(updatedData);
    };
  }, []);
  return (
    <div className="blog-list-container">
      {blogsData.map((item) => (
        <BlogItem blogData={item} key={item.id} />
      ))}
    </div>
  );
};

export default BlogsList;
