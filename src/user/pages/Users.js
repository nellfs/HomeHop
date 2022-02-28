import React, { useEffect, useState } from "react";

import UsersList from "../components/UsersList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

// const USERS_DUMMY = [
//   {
//     id: "u1",
//     name: "Alex Rocha",
//     responsible: "Silvia Rocha",
//     image: "https://thispersondoesnotexist.com/image",
//   },
//   {
//     id: "u2",
//     name: "Alex Rocha",
//     responsible: "Silvia Rocha",
//     image: "https://thispersondoesnotexist.com/image",
//   },
// ];

const Users = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/users");

        const respondeData = await response.json();

        if (!response.ok) {
          throw new Error(respondeData.message);
        }

        setLoadedUsers(respondeData.users);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    sendRequest();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      <ErrorModal error={error} onClear={errorHandler} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner></LoadingSpinner>
        </div>
      )}
      {!isLoading && loadedUsers && <UsersList items={loadedUsers} />}
    </>
  );
};

export default Users;
