import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";

import UserItem from "./UserItem";
import "./UsersList.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const UserList = (props) => {
  const [scrollX, setScrollX] = useState(0);

  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = props.items.length * 151.7;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW;
    }
    setScrollX(x);
  };

  return (
    <>
      <ul className="user-list" style={{ marginLeft: scrollX }}>
        {props.items.map((user) => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            responsible={user.responsible}
            image={user.image}
            className="container"
          />
        ))}
      </ul>
      <div className="user-list__buttons">
        <div className="user-list__left-button" onClick={handleLeftArrow}>
          <AiOutlineLeft size={40}></AiOutlineLeft>
        </div>
        <div className="user-list__right-button" onClick={handleRightArrow}>
          <AiOutlineRight size={40}> </AiOutlineRight>
        </div>
      </div>
    </>
  );
};
export default UserList;
