import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

import "./NavLinks.css";

import { AuthContext } from "../../context/auth-context";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">PRINCIPAL</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">NOVO</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTENTICAR</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
      <li>
        <NavLink to="https://github.com/nellfs" className={"github-icon"}>
          <AiFillGithub size={32} color="black" />
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
