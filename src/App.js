import "./styles.css";
import Saludo from "./components/saludo.js";

function MiComponente() {
  return <h1>¡soy un componente!</h1>;
}

const OtroComponente = () => {
  return <p>Tambien soy un componente</p>;
};

export default function App() {
  return (
    <div className="App">
      <MiComponente />
      <OtroComponente />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Saludo />
    </div>
  );
}
