import React from "react";
import { FiSearch } from "react-icons/fi";
import { GiRabbit } from "react-icons/gi";
// import { AiOutlineHome } from "react-icons/ai";

import "./Searcher.css";

const Searcher = () => {
  return (
    <div className="container">
      <h1 className="title">
        <GiRabbit />
        HomeHop
      </h1>
      <div className="container-input">
        <input type="text" placeholder="Nome de um morador..."></input>

        <button className="button-search">
          <FiSearch size={25} color={"#fff"} />
        </button>
      </div>
    </div>
  );
};

export default Searcher;
