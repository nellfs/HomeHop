import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">PRINCIPAL</NavLink>
      </li>
      {/* <li>
        <NavLink to="/01/places">MEU LOCAL</NavLink>
      </li> */}
      <li>
        <NavLink to="/auth">AUTENTICAR</NavLink>
      </li>
      <li>
        <NavLink to="/auth" className={"github-icon"}>
          {" "}
          <AiFillGithub size={32} color="black" />
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
