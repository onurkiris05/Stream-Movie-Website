import React, { useState, useEffect } from "react";
import "./header.css";
import { headerNavList } from "../data/navListData";
import Search from "../components/Search";
import ButtonMain from "../components/ButtonMain";
import ButtonNav from "../components/ButtonNav";
import NavMain from "../components/NavMain";
import NavMobile from "../components/NavMobile";
import Logo from "../components/Logo";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleBg = () => {
    setIsScrolled(window.scrollY > 150);
  };

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleBg);
    return () => window.removeEventListener("scroll", toggleBg);
  }, []);

  return (
    <header className={`${isScrolled ? "scrolled" : ""}`}>
      <Logo />
      <NavMain navList={headerNavList} />
      <NavMobile navList={headerNavList} cName={mobileNav ? "active" : ""} />
      <Search />
      <ButtonMain>
        <ion-icon name="log-in-outline"></ion-icon> Sign In
      </ButtonMain>
      <ButtonNav onClick={toggleMobileNav} />
    </header>
  );
}

export default Header;
