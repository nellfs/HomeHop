import React, { useState, useCallback } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Searcher from "./places/components/Searcher";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <div>
                <Searcher />
              </div>
              <Users />
            </>
          }
        ></Route>

        <Route path="/:userId/places" exact element={<UserPlaces />}></Route>
        <Route path="/places/new" exact element={<NewPlace />}></Route>
        <Route path="/places/:placeId" element={<UpdatePlace />}></Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <div>
                <Searcher />
              </div>
              <Users />
            </>
          }
        ></Route>
        <Route path="/:userId/places" exact element={<UserPlaces />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="*" element={<Navigate to="/auth" />} />{" "}
      </Routes>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <main>
          <MainNavigation />
          {routes}
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
