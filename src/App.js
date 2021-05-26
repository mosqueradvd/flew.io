import getData from "./utils/getData";
import { useEffect, useState } from "react";

import Form from "../src/components/Form";
import "./styles/index.css";

function App() {
  const [airlines, setAirlines] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const setInfo = async () => {
      const data = await getData();
      setAirlines(data);
    };

    setInfo();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Flew.io</h1>
        <nav>
          <ul>
            {airlines.map((airline) => (
              <li
                key={airline.id}
                onClick={(e) => {
                  setName(airline.name);
                }}
              >
                {airline.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <h1>
        Hola, bienvenido, sabemos que quieres viajar en {name}, por favor
        diligencia el siguiente formulario
      </h1>
      <Form />
    </div>
  );
}

export default App;
