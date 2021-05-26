import { useState } from "react";
import Form from "../components/Form";
import Lightbox from "../components/Lightbox";

import "../styles/index.css";
import "../styles/Lightbox.css";

function FormVanilla({ initialState, validate, favAirline }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isShowingAlert, setShowingAlert] = useState(false);

  // manejador de eventos
  const handleChange = (evt) => {
    const { name, value: newValue, type } = evt.target;

    // mantener los campos numéricos como números
    const value = type === "number" ? +newValue : newValue;

    // guardar los valores de los campos
    setValues({
      ...values,
      [name]: value,
    });

    // se modificó el campo
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // eliminar cualquier error que hubiera antes
    const { [name]: removedError, ...rest } = errors;

    // comprobamos si hay un nuevo error
    const errorName = validate[name](value);

    // validar el campo para ver si el valor ha sido tocado
    setErrors({
      ...rest,
      ...(errorName && { [name]: touched[name] && errorName }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validaciones del formulario
    const formValidation = Object.keys(values).reduce(
      (acc, key) => {
        const newError = validate[key](values[key]);
        const newTouched = { [key]: true };
        return {
          errors: {
            ...acc.errors,
            ...(newError && { [key]: newError }),
          },
          touched: {
            ...acc.touched,
            ...newTouched,
          },
        };
      },
      {
        errors: { ...errors },
        touched: { ...touched },
      }
    );
    setErrors(formValidation.errors);
    setTouched(formValidation.touched);

    if (
      !Object.values(formValidation.errors).length && //  objeto de errores está vacío
      Object.values(formValidation.touched).length ===
        Object.values(values).length && // todos los campos fueron tocados
      Object.values(formValidation.touched).every((t) => t === true) // & todo campo tocado es true
    ) {
      // Se muestran en consola, los datos ingresados por el usuario
      console.log("Displaying Data -->", values);

      setShowingAlert(true);
      setValues(initialState);
    }
  };

  return (
    <>
      <Form
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        values={values}
        favAirline={favAirline}
      />

      {/* // Maneja el estado del lightbox para darle feedback al usuario */}
      <div>
        <div
          className={`relative  ${
            isShowingAlert ? "alert-shown" : "alert-hidden"
          }`}
          onTransitionEnd={() => {
            setTimeout(() => {
              setShowingAlert(false);
            }, 5000);
          }}
        >
          <Lightbox />
        </div>
      </div>
    </>
  );
}

export default FormVanilla;
