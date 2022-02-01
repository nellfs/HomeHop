import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS_DUMMY = [
    {
      id: "u1",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "u2",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
  ];

  return <UsersList items={USERS_DUMMY} />;
};

export default Users;
