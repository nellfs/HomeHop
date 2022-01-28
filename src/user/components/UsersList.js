import React from "react";

import UserItem from "./UserItem";
import "./UsersList.css";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul className="user-list">
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
  );
};
export default UserList;
