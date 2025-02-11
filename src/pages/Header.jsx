import React, { useState, useEffect } from "react";
import "./header.css";
import NavListItem from "../components/NavListItem";
import { headerNavList } from "../data/navListData";
import Search from "../components/Search";
import ButtonMain from "../components/ButtonMain";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleBg = () => {
    setIsScrolled(window.scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBg);
    return () => window.removeEventListener("scroll", toggleBg);
  }, []);

  return (
    <header className={`${isScrolled ? "scrolled" : ""}`}>
      <a href="/" className="logo">
        Movieflex
      </a>
      <ul className="nav">
        {headerNavList.map((item) => (
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
