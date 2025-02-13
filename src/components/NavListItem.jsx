import React from "react";
import "./navListItem.css";

function NavListItem({ navItem }) {
  return (
    <li>
      <a href={navItem.link}>
        {navItem.icon && <ion-icon name={navItem.icon}></ion-icon>} {navItem.name}
      </a>
    </li>
  );
}

export default NavListItem;
