import { FiSearch } from "react-icons/fi";

function App() {
  return (
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
    </div>
  );
}

export default App;
