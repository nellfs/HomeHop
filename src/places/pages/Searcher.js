import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";

import "./Searcher.css";

const Searcher = () => {
  return (
    <div className="container">
      <h1 className="title">
        <AiOutlineHome size={24}></AiOutlineHome>
        Buscar morador
      </h1>
      <div className="containerInput">
        <input type="text" placeholder="Nome de um morador..."></input>

        <button className="buttonSearch">
          <FiSearch size={25} color={"#fff"} />
        </button>
      </div>
    </div>
  );
};

export default Searcher;
