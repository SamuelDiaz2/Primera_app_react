function Saludo() {
  return <h1>Hola desde mi primer componente</h1>;
}

function Presentacion() {
  return (
    <p>
      <strong>Mi nombre es:</strong> Samuel Diaz
      <br></br>
      <strong>Mi Meta:</strong> Aprendar lo que mas pueda de react
      <br></br>
      <strong>Mi comida favorita:</strong> Bandeja paisa
    </p>
  );
}

function App() {
  return (
    <div className="App">
      <Saludo />
      <Presentacion />
    </div>
  );
}

export default App;
