import { useState } from "react";

const Form = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
  };

  const [info, setInfo] = useState(initialState);

  const handleInfoChange = (e) => {
    console.log(info);
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Your data -->", info);
    setInfo(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span>Ingresa tu nombre</span>
          <input
            type="text"
            id="name"
            name="name"
            value={info.name}
            onChange={handleInfoChange}
          />
        </label>
        <label htmlFor="email">
          <span>Ingresa tu email</span>
          <input
            type="email"
            id="email"
            name="email"
            value={info.email}
            onChange={handleInfoChange}
          />
        </label>
        <label htmlFor="phone">
          <span>Ingresa tu celular</span>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={info.phone}
            onChange={handleInfoChange}
          />
        </label>
        <button type="submit">SEND</button>
      </form>
    </>
  );
};

export default Form;
