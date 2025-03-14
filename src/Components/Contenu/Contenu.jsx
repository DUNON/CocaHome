import React, { useContext } from "react";
import canette from "../../assets/coca-01.png";
import data from "../../assets/datas.js";
import LangContext from "../../context/ThemeContext";
import "./Contenu.css";

export default function Contenu() {
  console.log(data["EN"].title);
  const { lang } = useContext(LangContext);
  return (
    <div className="global">
      <div className="item-left">
        <h1 className="title">{data[lang].title}</h1>
        <p className="subtitle">{data[lang].txt}</p>
        <p className="text">{data[lang].ctn}</p>
        <button className="btn-content">{data[lang].btn}</button>
      </div>
      <div className="item-right">
        <img src={canette} alt="canette" />
      </div>
    </div>
  );
}
