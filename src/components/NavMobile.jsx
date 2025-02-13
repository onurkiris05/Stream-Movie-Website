import React, { useEffect } from "react";
import "./navMobile.css";
import NavListItem from "./NavListItem";
import ButtonMain from "./ButtonMain";

function NavMobile({ navList, cName }) {
  // Prevent scrolling when mobile nav is open
  useEffect(() => {
    document.body.style.overflow = cName.includes("active") ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [cName]);

  return (
    <ul className={`nav nav-mobile ${cName}`}>
      {navList.map((item) => (
        <NavListItem key={item._id} navItem={item} />
      ))}
      <li>
        <ButtonMain>
          <ion-icon name="log-in-outline"></ion-icon> Sign In
        </ButtonMain>
      </li>
    </ul>
  );
}

export default NavMobile;
