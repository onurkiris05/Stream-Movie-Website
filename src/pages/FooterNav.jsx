import "./footerNav.css";
import { footerUsefulList, footerBranchesList } from "../data/navListData";
import LinkList from "../components/LinkList";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";

function FooterNav() {
  return (
    <div className="footer-nav">
      <img
        src="https://res.cloudinary.com/djzahz5ym/image/upload/v1744707922/udetls20zucxgae9e2zs.jpg"
        alt=""
        className="footer-nav__bg"
      />
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
