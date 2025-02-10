import React from "react";
import "./header.css";
import NavListItem from "../components/NavListItem";
import navListData from "../data/navListData";
import Search from "../components/Search";
import ButtonMain from "../components/ButtonMain";

function Header() {
  return (
    <header>
      <a href="/" className="logo">
        Movieflex
      </a>
      <ul className="nav">
        {navListData.map((item) => (
          <NavListItem key={item._id} navItem={item} />
        ))}
      </ul>
      <Search />
      <ButtonMain>
        <ion-icon name="log-in-outline"></ion-icon> Sign In
      </ButtonMain>
    </header>
  );
}

export default Header;
