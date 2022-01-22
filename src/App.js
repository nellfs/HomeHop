import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Users from "./user/pages/Users";
import Searcher from "./places/pages/Searcher";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div>
              <Searcher />
              <Users />
            </div>
          }
        ></Route>

        <Route path="/places/new" exact element={<NewPlace />}></Route>
        <Route path="*" exact element={<Navigate to="/" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
