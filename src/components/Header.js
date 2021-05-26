import getData from "../utils/getData";
import { useEffect, useState } from "react";

import "../styles/Header.css";

const Header = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    const setInfo = async () => {
      const data = await getData();
      setAirlines(data);
    };

    setInfo();
  }, []);

  return (
    <>
      <header>
        <h1>Flew.io</h1>
        <nav>
          <ul>
            {airlines.map((airline) => (
              <li key={airline.id}>{airline.name}</li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
