import React, { useContext } from "react";
import french from "../../assets/france.svg";
import logo from "../../assets/logo.png";
import spain from "../../assets/spain.svg";
import england from "../../assets/united-kingdom.svg";
import "../../Components/NavBar/NavBar.css";
import LangContext from "../../context/ThemeContext";

export default function NavBar() {
  const { toggleLang } = useContext(LangContext);
  return (
    <nav className="l-main-nav">
      <div className="l-main-nav__logo-container">
        <a href="#" className="">
          <img src={logo} alt="logo" className="l-main-nav__logo" />
        </a>
      </div>
      <ul className="l-main-nav__list">
        <li>
          <a href="#" className="l-main-nav__link">
            <img
              src={french}
              alt="flag French"
              className="l-main-nav__img "
              onClick={() => toggleLang("FR")}
            />
          </a>
        </li>
        <li>
          <a href="#" className="l-main-nav__link">
            <img
              src={spain}
              alt="flag Spain"
              className="l-main-nav__img "
              onClick={() => toggleLang("ES")}
            />
          </a>
        </li>
        <li>
          <a href="#" className="l-main-nav__link">
            <img
              src={england}
              alt="flag England"
              className="l-main-nav__img "
              onClick={() => toggleLang("EN")}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}
