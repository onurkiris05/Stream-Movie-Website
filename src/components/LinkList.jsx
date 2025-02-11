import React from "react";
import "./linkList.css";

function LinkList({ title, links }) {
  return (
    <div className="footer-nav__links-group">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
