import React from "react";
import "./footer.css";
import FooterNav from "./FooterNav";
import Copyright from "./Copyright";
import ButtonToTop from "../components/ButtonToTop";

function Footer() {
  return (
    <footer>
      <FooterNav />
      <Copyright />
      <ButtonToTop />
    </footer>
  );
}

export default Footer;
