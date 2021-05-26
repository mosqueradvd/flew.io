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

  // change event handler
  const handleChange = (evt) => {
    const { name, value: newValue, type } = evt.target;

    // keep number fields as numbers
    const value = type === "number" ? +newValue : newValue;

    // save field values
    setValues({
      ...values,
      [name]: value,
    });

    // was the field modified
    setTouched({
      ...touched,
      [name]: true,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const { [name]: removedError, ...rest } = errors;
    const errorName = validate[name](value);

    setErrors({
      ...rest,
      ...(errorName && { [name]: touched[name] && errorName }),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
      !Object.values(formValidation.errors).length &&
      Object.values(formValidation.touched).length ===
        Object.values(values).length &&
      Object.values(formValidation.touched).every((t) => t === true)
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

      <div>
        <div
          className={`relative  ${
            isShowingAlert ? "alert-shown" : "alert-hidden"
          }`}
          onTransitionEnd={() => setShowingAlert(false)}
        >
          <Lightbox />
        </div>
      </div>
    </>
  );
}

export default FormVanilla;
