import React, { useRef } from "react";

import UserItem from "./UserItem";
import "./UsersList.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const UserList = (props) => {
  const carousel = useRef(null);
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  const handleLeftClick = (props) => {
    console.log(carousel.current);
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (props) => {
    console.log(carousel.current);
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <>
      <div className="user-list">
        <ul className="user-list__carousel" ref={carousel}>
          {props.items.map((user) => (
            <UserItem
              className="item"
              key={user.id}
              id={user.id}
              name={user.name}
              responsible={user.responsible}
              image={user.image}
              placeCount={user.places.length}
            />
          ))}
        </ul>
      </div>
      <div className="user-list__buttons">
        <button onClick={handleLeftClick}>
          <AiOutlineLeft size={32}></AiOutlineLeft>
        </button>
        <button onClick={handleRightClick}>
          <AiOutlineRight size={32}></AiOutlineRight>
        </button>
      </div>
    </>
  );
};
export default UserList;
