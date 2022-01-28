import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS_DUMMY = [
    {
      id: "n1",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "n2",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "n3",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "n4",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "n5",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "n6",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
    {
      id: "n7",
      name: "Alex Rocha",
      responsible: "Silvia Rocha",
      image: "https://thispersondoesnotexist.com/image",
    },
  ];

  return <UsersList items={USERS_DUMMY} />;
};

export default Users;
