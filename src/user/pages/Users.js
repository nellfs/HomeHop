import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS_DUMMY = [
    {
      id: "u1",
      name: "Regina Figo",
      image:
        "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/74/grinning-face_1f600.png",
      places: 3,
    },
  ];

  return <UsersList items={USERS_DUMMY} />;
};

export default Users;
