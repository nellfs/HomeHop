import { FiSearch } from "react-icons/fi";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <div className="container">
              <h1 className="title">Buscar casa</h1>
              <div className="containerInput">
                <input type="text" placeholder="Nome de um morador"></input>

                <button className="buttonSearch">
                  <FiSearch size={25} color={"#000"} />
                </button>
              </div>

              <main className="main">
                <h3>ID: 000001</h3>
                <span>Rua 38</span>
                <span>Em frente ao mercado</span>
                <span>Vila Nova</span>
                <span>Cidade Grande - BR</span>
              </main>
              <Users />
            </div>
          }
        ></Route>

        <Route path="/places/new" exact element={<NewPlace />}></Route>
        <Route path="*" exact element={<Navigate to="/null" />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
