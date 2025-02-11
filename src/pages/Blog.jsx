import React, { useState, useEffect } from "react";
import "./blog.css";
import BlogCard from "../components/BlogCard";

function Blog() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:5173/data/blogData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => console.error(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="blogs" className="blogs">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">our blog</h4>
        </div>
        <div className="row blog-card-container mt-5">
          {data && data.length > 0 && data.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}

export default Blog;
