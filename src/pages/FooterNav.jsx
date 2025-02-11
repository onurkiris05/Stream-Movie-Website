import React from "react";
import "./footerNav.css";
import footerBg from "/assets/footer-bg.jpeg";
import LinkList from "../components/LinkList";
import { footerUsefulList, footerBranchesList } from "../data/navListData";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";

function FooterNav() {
  return (
    <div className="footer-nav">
      <img src={footerBg} alt="" className="footer-nav__bg" />
      <AboutUs />
      <LinkList title="useful links" links={footerUsefulList} />
      <LinkList title="branches" links={footerBranchesList} />
      <Contact />
    </div>
  );
}

export default FooterNav;
