import { useState, useEffect } from "react";
import "./blog.css";
import BlogCard from "../components/BlogCard";

/* eslint-disable react/prop-types */
function Blog({ data }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  return (
    <section id="blogs" className="blogs">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">our blog</h4>
        </div>
        <div className="row blog-card-container mt-5">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}

export default Blog;
