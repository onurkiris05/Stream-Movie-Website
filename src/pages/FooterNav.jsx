import React from "react";
import "./footerNav.css";
import { footerUsefulList, footerBranchesList } from "../data/navListData";
import footerBg from "/assets/footer-bg.jpeg";
import LinkList from "../components/LinkList";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";

function FooterNav() {
  return (
    <div className="footer-nav">
      <img src={footerBg} alt="" className="footer-nav__bg" />
      <AboutUs />
      <div className="footer-nav__links-wrapper">
        <LinkList title="useful links" links={footerUsefulList} />
        <LinkList title="branches" links={footerBranchesList} />
      </div>
      <Contact />
    </div>
  );
}

export default FooterNav;
