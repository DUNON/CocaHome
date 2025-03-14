import React, { useContext } from "react";
import "../../Components/NavBar/NavBar.css";
import LangContext from "../../context/ThemeContext";

export default function NavBar() {
  const { toggleLang } = useContext(LangContext);
  return (
    <nav className="l-main-nav">
      <div className="l-main-nav__logo-container">
        <a href="#" className="">
          <img
            src="src/assets/logo.png"
            alt="logo"
            className="l-main-nav__logo"
          />
        </a>
      </div>
      <ul className="l-main-nav__list">
        <li>
          <a href="#" className="l-main-nav__link">
            <img
              src="src/assets/france.svg"
              alt="flag French"
              className="l-main-nav__img "
              onClick={() => toggleLang("FR")}
            />
          </a>
        </li>
        <li>
          <a href="#" className="l-main-nav__link">
            <img
              src="src/assets/spain.svg"
              alt="flag Spain"
              className="l-main-nav__img "
              onClick={() => toggleLang("ES")}
            />
          </a>
        </li>
        <li>
          <a href="#" className="l-main-nav__link">
            <img
              src="src/assets/united-kingdom.svg"
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
