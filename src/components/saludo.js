function Saludo() {
  return <h1>Hola desde mi primer componente</h1>;
}

function App() {
  return (
    <div className="App">
      <Saludo />
    </div>
  );
}

export default App;
