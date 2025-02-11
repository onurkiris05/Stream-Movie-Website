import React from "react";
import "./blogCard.css";

function BlogCard({ blog }) {
  return (
    <div className="blog-card col-lg-3 col-md-6 col-sm-12">
      <div className="blog-card__container">
        <img className="blog-card__thumbnail" src={blog.thumbnail} alt="Blog Card Thumbnail" />
        <div className="blog-card__content">
          <h5 className="blog-card__category">{blog.category}</h5>
          <p className="blog-card__title">{blog.title}</p>
          <div className="blog-card__author">
            <img
              className="blog-card__author-img"
              src={blog.author.image}
              alt="Blog Card Author Image"
            />
            <h6 className="blog-card__author-name">{blog.author.name}</h6>
            <p className="blog-card__date">{blog.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
