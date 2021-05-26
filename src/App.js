import Header from "../src/components/Header";
import Form from "../src/components/Form";
import "./styles/index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <h1>
        Hola, bienvenido, sabemos que quieres viajar en un X, por favor
        diligencia el siguiente formulario
      </h1>
      <Form />
    </div>
  );
}

export default App;
