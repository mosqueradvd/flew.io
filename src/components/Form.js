import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <label for="name">
          <span>Ingresa tu nombre</span>
          <input type="text" id="nombre" />
        </label>
        <label for="email">
          <span>Ingresa tu email</span>
          <input type="email" id="email" />
        </label>
        <label for="celular">
          <span>Ingresa tu celular</span>
          <input type="celular" id="celular" />
        </label>
      </form>
    </>
  );
};

export default Form;
