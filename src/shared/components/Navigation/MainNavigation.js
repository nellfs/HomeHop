import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <GiHamburgerMenu size={32} color="black" />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">TODO</Link>
      </h1>
      <NavLinks />
    </MainHeader>
  );
};

export default MainNavigation;
