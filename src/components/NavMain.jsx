import React from "react";
import "./navMain.css";
import NavListItem from "./NavListItem";

function NavMain({ navList }) {
  return (
    <ul className="nav nav-main">
      {navList.map((item) => (
        <NavListItem key={item._id} navItem={item} />
      ))}
    </ul>
  );
}

export default NavMain;
